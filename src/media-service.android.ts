/// <reference path="./native-definitions/android.d.ts" />

import * as nsApp from '@nativescript/core/application';
import { ImageSource } from '@nativescript/core/image-source';
import { Trace } from '@nativescript/core/trace';
import { ad as androidUtils } from '@nativescript/core/utils';
import { TNSAudioPlayer } from './audioplayer';
import { MediaTrack, notaAudioCategory, PlaybackSuspend, Playlist } from './audioplayer.types';

const MEDIA_SERVICE_NAME = 'TNS-MediaService-1';
const NOTIFICATION_ID = 1;
const NOTIFICATION_CHANNEL_ID = 'MediaService-1';
const NOTIFICATION_CHANNEL_NAME = 'Nativescript-MediaService-Notifications';
const NOTIFICATION_CHANNEL_DESC = 'MediaService notifications';
const DEFAULT_PLAYBACK_RATE = 1;
const DEFAULT_INTENT_CODE = 1337;
const DEFAULT_SEEK_LENGTH = 15;

let instance = 0;

@NativeClass()
@JavaProxy('dk.nota.MediaService')
export class MediaService extends android.app.Service {
  private _cls: string;
  private get cls() {
    if (!this._cls) {
      this._cls = `MediaService<${++instance}>`;
    }

    return this._cls;
  }

  public get notificationTitle() {
    // These can be defined by the user of the plugin in App_Resources/Android/src/main/res/values/strings.xml
    return androidUtils.resources.getStringId('tns_audioplayer_notification_title') ?? (android.R as any).string.unknownName;
  }

  public get notificationDesc() {
    // These can be defined by the user of the plugin in App_Resources/Android/src/main/res/values/strings.xml
    return androidUtils.resources.getStringId('tns_audioplayer_notification_desc') ?? (android.R as any).string.unknownName;
  }

  public exoPlayer?: com.google.android.exoplayer2.ExoPlayer;

  private _mediaSessionMetadataProvider?: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaMetadataProvider;

  private _mediaSession?: android.support.v4.media.session.MediaSessionCompat;
  private get _sessionToken() {
    return this._mediaSession?.getSessionToken();
  }

  private _notificationChannel?: android.app.NotificationChannel;
  private getNotificationChannel() {
    if (!this._notificationChannel) {
      const notificationChannel = new android.app.NotificationChannel(
        NOTIFICATION_CHANNEL_ID,
        NOTIFICATION_CHANNEL_NAME,
        android.app.NotificationManager.IMPORTANCE_LOW,
      );
      notificationChannel.setSound(null!, null);
      notificationChannel.setShowBadge(false);
      notificationChannel.setDescription(NOTIFICATION_CHANNEL_DESC);
      const notificationManager: android.app.NotificationManager = this.getSystemService(android.app.NotificationManager.class);
      notificationManager.createNotificationChannel(notificationChannel);
      Trace.write(`Channel created! id=${notificationChannel.getId()}`, notaAudioCategory, Trace.messageType.info);
      this._notificationChannel = notificationChannel;
    }

    return this._notificationChannel;
  }

  private _playerNotificationManager?: WeakRef<com.google.android.exoplayer2.ui.PlayerNotificationManager>;
  private getPlayerNotificationManager() {
    let playerNotificationManager = this._playerNotificationManager?.deref();
    if (!playerNotificationManager) {
      Trace.write('Create player notification manager', notaAudioCategory, Trace.messageType.info);

      const mChannel = this.getNotificationChannel();
      const mediaDescriptionAdapter = this.getMediaDescriptionAdapter(this);
      const notificationListener = getTNSNotificationListenerImpl(this);
      const newPlayerNotificationManager = new com.google.android.exoplayer2.ui.PlayerNotificationManager.Builder(
        this.getApplicationContext(),
        NOTIFICATION_ID,
        mChannel.getId(),
      )
        .setMediaDescriptionAdapter(mediaDescriptionAdapter)
        .setNotificationListener(notificationListener)
        .build();
      newPlayerNotificationManager.setUseChronometer(true);
      newPlayerNotificationManager.setMediaSessionToken(this._sessionToken!);
      this._playerNotificationManager = new WeakRef(newPlayerNotificationManager);

      return newPlayerNotificationManager;
    }

    return playerNotificationManager;
  }

  private _mediaSessionConnector?: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector;
  private _mediaDescriptionAdapter?: com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter;
  private getMediaDescriptionAdapter(owner: MediaService) {
    if (!this._mediaDescriptionAdapter) {
      this._mediaDescriptionAdapter = getTNSMediaDescriptionAdapterImpl(owner);
    }

    return this._mediaDescriptionAdapter;
  }

  private _playerEventListener?: TNSPlayerEventListener;

  private _playlist?: Playlist;

  public _isForegroundService: boolean;

  private owner?: TNSAudioPlayer;

  private _rate = DEFAULT_PLAYBACK_RATE;
  private _seekIntervalSeconds = DEFAULT_SEEK_LENGTH;
  private _timeChangeInterval: NodeJS.Timer;

  private _albumArts?: Map<string, Promise<ImageSource>>;
  private get albumArts() {
    if (!this._albumArts) {
      this._albumArts = new Map<string, Promise<ImageSource>>();
    }

    return this._albumArts;
  }

  public _lastLoadedAlbumArt?: {
    url: string;
    bitmap: android.graphics.Bitmap;
  };

  public onCreate() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.onCreate()`, notaAudioCategory);
    }
    super.onCreate();

    const appContext = this.getApplicationContext();

    const sessionIntent = this.getPackageManager()?.getLaunchIntentForPackage(this.getPackageName());
    let sessionActivityPendingIntent: android.app.PendingIntent | null = null;
    if (sessionIntent) {
      sessionActivityPendingIntent = android.app.PendingIntent.getActivity(
        this,
        0,
        sessionIntent,
        android.app.PendingIntent.FLAG_IMMUTABLE | android.app.PendingIntent.FLAG_UPDATE_CURRENT,
      );
    }

    this._rate = DEFAULT_PLAYBACK_RATE;
    this._seekIntervalSeconds = DEFAULT_SEEK_LENGTH;
    this._isForegroundService = false;

    const trackSelector = new com.google.android.exoplayer2.trackselection.DefaultTrackSelector(this);
    /**
     * Increase buffer sizes to support a smoother playback experience in spotty network conditions:
     *  - max buffer size from 1 to 10 minutes
     *  - min buffer size from 15 to 60 seconds (only controls when to start pre-buffering again).
     * See defaults here:
     * https://github.com/google/ExoPlayer/blob/release-v2/library/core/src/main/java/com/google/android/exoplayer2/DefaultLoadControl.java
     */
    const loadControl = new com.google.android.exoplayer2.DefaultLoadControl.Builder()
      .setBufferDurationsMs(
        /* Buffer min */ 1000 * 60,
        /* Buffer max */ 1000 * 60 * 10,
        /* Buffer playback */ com.google.android.exoplayer2.DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_MS,
        /* Buffer rebuffer */ com.google.android.exoplayer2.DefaultLoadControl.DEFAULT_BUFFER_FOR_PLAYBACK_AFTER_REBUFFER_MS,
      )
      .build();
    this._playerEventListener = new TNSPlayerEventListener();
    this._playerEventListener.setOwner(this);

    const mediaSession = new android.support.v4.media.session.MediaSessionCompat(this, MEDIA_SERVICE_NAME);
    this._mediaSession = mediaSession;
    if (sessionActivityPendingIntent) {
      mediaSession.setSessionActivity(sessionActivityPendingIntent);
    }

    mediaSession.setActive(true);

    mediaSession.setFlags(
      android.support.v4.media.session.MediaSessionCompat.FLAG_HANDLES_MEDIA_BUTTONS |
        android.support.v4.media.session.MediaSessionCompat.FLAG_HANDLES_TRANSPORT_CONTROLS,
    );

    // Do not let MediaButtons restart the player when the app is not visible.
    mediaSession.setMediaButtonReceiver(null!);

    // Use MediaSessionConnector extension to handle external media control actions (like headset pause/play).
    const mediaSessionConnector = new com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector(mediaSession);
    this._mediaSessionConnector = mediaSessionConnector;
    mediaSessionConnector.setEnabledPlaybackActions(
      android.support.v4.media.session.PlaybackStateCompat.ACTION_PLAY |
        android.support.v4.media.session.PlaybackStateCompat.ACTION_PLAY_PAUSE |
        android.support.v4.media.session.PlaybackStateCompat.ACTION_PAUSE,
    );

    // FIX: This prevents "Unknown" title and artist on Samsung lock screens.
    // Use a MediaSessionMetadataProvider to add missing metadata fields, that ExoPlayer does not copy in by default.
    const mediaSessionMetadataProvider = new com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaMetadataProvider({
      getMetadata: () => {
        const info = this._getTrackInfo(this.exoPlayer?.getCurrentMediaItemIndex() ?? 0);

        return new android.support.v4.media.MediaMetadataCompat.Builder()
          .putString(android.support.v4.media.MediaMetadataCompat.METADATA_KEY_TITLE, info?.title ?? 'Unknown')
          .putString(android.support.v4.media.MediaMetadataCompat.METADATA_KEY_ARTIST, info?.artist ?? 'Unknown')
          .build();
      },
    });
    this._mediaSessionMetadataProvider = mediaSessionMetadataProvider;

    mediaSessionConnector.setMediaMetadataProvider(mediaSessionMetadataProvider);

    const exoPlayer = new com.google.android.exoplayer2.ExoPlayer.Builder(appContext)
      .setTrackSelector(trackSelector)
      .setLoadControl(loadControl)
      .setSeekForwardIncrementMs(this._seekIntervalSeconds * 1000)
      .setSeekBackIncrementMs(this._seekIntervalSeconds * 1000)
      .build();

    exoPlayer.setWakeMode(com.google.android.exoplayer2.C.WAKE_MODE_NETWORK);
    exoPlayer.setHandleAudioBecomingNoisy(true);
    exoPlayer.addListener(this._playerEventListener);

    mediaSessionConnector.setPlayer(exoPlayer);

    this._albumArts = new Map<string, Promise<ImageSource>>();

    // Setup audio focus
    const audioAttributes = new com.google.android.exoplayer2.audio.AudioAttributes.Builder()
      .setUsage(com.google.android.exoplayer2.C.USAGE_MEDIA)
      .setContentType(com.google.android.exoplayer2.C.CONTENT_TYPE_MUSIC)
      .build();

    exoPlayer.setAudioAttributes(audioAttributes, true);

    this.exoPlayer = exoPlayer;
  }

  public _getTrackInfo(index: number): MediaTrack | undefined {
    return this._playlist?.tracks?.[index];
  }

  private lastPosition: number;
  private lastWindowIndex: number;

  /**
   * Handle time changed by pulling the value.
   */
  private _handleTimeChange() {
    const owner = this.owner;
    if (!owner) {
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls}._onPlaying() - no owner - stop timeChangeInterval`, notaAudioCategory, Trace.messageType.warn);
      }

      clearInterval(this._timeChangeInterval);

      return;
    }

    const exoPlayer = this.exoPlayer;
    if (!exoPlayer) {
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls}._onPlaying() - no player stop timeChangeInterval`, notaAudioCategory, Trace.messageType.warn);
      }

      clearInterval(this._timeChangeInterval);

      return;
    }

    const windowIndex = exoPlayer.getCurrentMediaItemIndex();
    const position = exoPlayer.getCurrentPosition();
    const duration = exoPlayer.getDuration();

    if (this.lastPosition !== position || this.lastWindowIndex !== windowIndex) {
      owner._onTimeChanged(position, duration, windowIndex);

      this.lastPosition = position;
      this.lastWindowIndex = windowIndex;
    }
  }

  /**
   * Handle playing event from TNSPlayerEvent
   */
  public _onPlaying() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}._onPlaying()`, notaAudioCategory);
    }
    clearInterval(this._timeChangeInterval);

    this._timeChangeInterval = setInterval(() => {
      this._handleTimeChange();
    }, 100);

    this._mediaSession?.setActive(true);

    this._handleTimeChange();

    const owner = this.owner;
    if (!owner) {
      return;
    }

    owner._onPlaying();
  }

  /**
   * Handle stopped event from TNSPlayerEvent
   */
  public _onPaused() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}._onPaused()`, notaAudioCategory);
    }

    clearInterval(this._timeChangeInterval);

    const owner = this.owner;
    if (!owner) {
      return;
    }

    owner._onPaused();
  }

  /**
   * Handle stop event from TNSPlayerEvent
   */
  public _onStopped() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}._onStopped()`, notaAudioCategory);
    }

    clearInterval(this._timeChangeInterval);

    this._mediaSession?.setActive(false);
    this._mediaSessionConnector?.setPlayer(null!);

    const owner = this.owner;
    if (!owner) {
      return;
    }

    owner._onStopped();
  }

  /**
   * Handle end-of-playlist-reached event
   */
  public _onEndOfPlaylistReached() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}._onEndOfPlaylistReached()`, notaAudioCategory);
    }

    const owner = this.owner;
    if (!owner) {
      return;
    }

    owner._onEndOfPlaylistReached();
  }

  /**
   * Handle end-of-track-reached event from TNSPlayerEvent
   */
  public _onEndOfTrackReached(): void {
    const exoPlayer = this.exoPlayer;
    if (!exoPlayer) {
      Trace.write(`${this.cls}._onEndOfTrackReached() - exoPlayer not initialized`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}._onEndOfTrackReached()`, notaAudioCategory);
    }

    const owner = this.owner;
    if (!owner) {
      return;
    }

    const endedTrackIndex = exoPlayer.getCurrentMediaItemIndex();
    owner._onEndOfTrackReached(endedTrackIndex);
  }

  /**
   * Handle buffer state changed event from TNSPlayerEvent
   */
  public _onBuffering(): void {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}._onBuffering()`, notaAudioCategory);
    }

    const owner = this.owner;
    if (!owner) {
      return;
    }

    owner._onBuffering();
  }

  /**
   * Handle waiting for network event from TNSPlayerEvent
   */
  public _onWaitingForNetwork(): void {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}._onWaitingForNetwork()`, notaAudioCategory);
    }

    const owner = this.owner;
    if (!owner) {
      return;
    }

    owner._onWaitingForNetwork();
  }

  /**
   * Handle playback error event from TNSPlayerEvent
   */
  public _onPlaybackError(errorData: any) {
    Trace.write(`${this.cls}._onPlaybackError(${errorData})`, notaAudioCategory, Trace.messageType.error);

    const owner = this.owner;
    if (!owner) {
      return;
    }

    owner._onPlaybackError(errorData);
  }

  public _onPlaybackSuspend(reason: PlaybackSuspend) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}._onPlaybackSuspend(${reason})`, notaAudioCategory);
    }

    const owner = this.owner;
    if (!owner) {
      return;
    }

    owner._onPlaybackSuspended(reason);
  }

  public onDestroy() {
    // end service, reset any variables... etc...
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.onDestroy()`, notaAudioCategory);
    }

    this.stopForeground(true);
    if (this._isForegroundService) {
      this._isForegroundService = false;
    }

    const exoPlayer = this.exoPlayer;
    clearInterval(this._timeChangeInterval);

    const playerNotificationManager = this._playerNotificationManager?.deref();
    if (playerNotificationManager) {
      playerNotificationManager.setMediaSessionToken(null!);
      playerNotificationManager.setPlayer(null!);
    }

    const mediaSessionConnector = this._mediaSessionConnector;
    if (mediaSessionConnector) {
      mediaSessionConnector.setPlayer(null!);
      mediaSessionConnector.setMediaMetadataProvider(null!);
    }
    delete this._mediaSessionConnector;

    delete this._mediaSessionMetadataProvider;

    const mediaSession = this._mediaSession;
    if (mediaSession) {
      mediaSession.setActive(false);
      mediaSession.release();
    }
    delete this._mediaSession;

    if (this._playerEventListener) {
      exoPlayer?.removeListener(this._playerEventListener);
      this._playerEventListener.setOwner(null!);
    }
    delete this._playerEventListener;
    delete this._mediaDescriptionAdapter;

    if (exoPlayer?.isPlaying()) {
      exoPlayer.stop();
    }

    exoPlayer?.release();
    delete this.exoPlayer;

    delete this.owner;
    this._albumArts?.clear();
    delete this._albumArts;
    delete this._playlist;
    delete this._lastLoadedAlbumArt;

    super.onDestroy();
  }

  public _handleNotificationPosted(notificationId: number, notification: android.app.Notification) {
    const exoPlayer = this.exoPlayer;
    if (!exoPlayer) {
      if (Trace.isEnabled()) {
        Trace.write(
          `${this.cls}._handleNotificationPosted(${notificationId}, ${notification}) - missing exoplayer`,
          notaAudioCategory,
          Trace.messageType.error,
        );
      }

      return;
    }

    const playerState = exoPlayer.getPlaybackState();
    const isBuffering = playerState === com.google.android.exoplayer2.Player.STATE_BUFFERING;

    const shouldBeInForeground = isBuffering || this.isPlaying();

    if (Trace.isEnabled()) {
      Trace.write(
        `${this.cls}._handleNotificationPosted(${notificationId}, ${notification}) - should be in:${shouldBeInForeground}. is in foreground:${this._isForegroundService}`,
        notaAudioCategory,
      );
    }

    if (shouldBeInForeground === this._isForegroundService) {
      return;
    }

    if (shouldBeInForeground) {
      /**
       * This may look strange, but the documentation for [Service.startForeground]
       * notes that "calling this method does *not* put the service in the started
       * state itself, even though the name sounds like it."
       */
      androidx.core.content.ContextCompat.startForegroundService(this.getApplicationContext(), new android.content.Intent(this, MediaService.class));

      this.startForeground(notificationId, notification);
      this._isForegroundService = true;

      if (Trace.isEnabled()) {
        Trace.write(`${this.cls}._handleNotificationPosted(${notificationId}, ${notification}) - started in foreground`, notaAudioCategory);
      }
    } else {
      // If playback has ended or is idle, also stop the service.
      const shouldStopSelf =
        playerState === com.google.android.exoplayer2.Player.STATE_ENDED || playerState === com.google.android.exoplayer2.Player.STATE_IDLE;

      Trace.write(`${this.cls}._handleNotificationPosted: playerState=${playerState}`, notaAudioCategory);

      // Starting with Android 12 (API 31), we cannot stop the foreground service on pause, otherwise we won't be able to resume later.
      // See https://stackoverflow.com/a/75296605/382830
      if (shouldStopSelf || android.os.Build.VERSION.SDK_INT < 31) {
        this.stopForeground(shouldStopSelf);
        this._isForegroundService = false;
        if (shouldStopSelf) {
          this.stopSelf();
        }
      }

      if (Trace.isEnabled()) {
        Trace.write(
          `${this.cls}._handleNotificationPosted(${notificationId}, ${notification}) - stopped in foreground. stopSelf:${shouldStopSelf}`,
          notaAudioCategory,
        );
      }
    }
  }

  public onBind(intent: android.content.Intent): android.os.IBinder {
    const action = `${intent.getAction()}`;

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.onBind(${intent}) action: ${action}`, notaAudioCategory);
    }
    let binder = new LocalBinder();
    binder.setService(this);

    return binder;
  }

  public onStartCommand(intent: android.content.Intent, flags: number, startId: number) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.onStartCommand(${intent}, ${flags}, ${startId})`, notaAudioCategory);
    }

    const mediaSession = this._mediaSession;
    if (mediaSession) {
      TNSMediaButtonReceiver.handleIntent(mediaSession, intent);
    }

    return super.onStartCommand(intent, flags, startId);
  }

  public setOwner(owner: TNSAudioPlayer) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.setOwner()`, notaAudioCategory);
    }

    if (owner) {
      this.owner = owner;

      return;
    }

    delete this.owner;
  }

  public async preparePlaylist(playlist: Playlist) {
    const exoPlayer = this.exoPlayer;

    if (!exoPlayer) {
      Trace.write(`${this.cls}.preparePlaylist() - exoPlayer not initialized`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.preparePlaylist()`, notaAudioCategory);
    }
    exoPlayer.stop();

    const concatenatedSource = new com.google.android.exoplayer2.source.ConcatenatingMediaSource(
      Array.create(com.google.android.exoplayer2.source.MediaSource, 0),
    );

    const userAgent = com.google.android.exoplayer2.util.Util.getUserAgent(this, 'tns-audioplayer');
    const httpDataSrcFactory = new com.google.android.exoplayer2.upstream.DefaultHttpDataSource.Factory();
    httpDataSrcFactory.setUserAgent(userAgent);
    httpDataSrcFactory.setConnectTimeoutMs(com.google.android.exoplayer2.upstream.DefaultHttpDataSource.DEFAULT_CONNECT_TIMEOUT_MILLIS);
    httpDataSrcFactory.setReadTimeoutMs(30 * 1000);
    httpDataSrcFactory.setAllowCrossProtocolRedirects(true);
    const dataSrcFactory = new com.google.android.exoplayer2.upstream.DefaultDataSource.Factory(this, httpDataSrcFactory);

    const mediaSourceFactory = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(dataSrcFactory);

    this.albumArts.clear();

    for (const track of playlist.tracks) {
      if (!this._checkUrlAllowed(track.url)) {
        Trace.write(`${this.cls}.preparePlaylist() - clear text traffic is not allowed - "${track.url}"`, notaAudioCategory, Trace.messageType.error);
      }
      const mediaItem = com.google.android.exoplayer2.MediaItem.fromUri(android.net.Uri.parse(track.url));
      const mediaSource = mediaSourceFactory.createMediaSource(mediaItem);
      concatenatedSource.addMediaSource(mediaSource);

      if (track.albumArtUrl != null) {
        this._makeAlbumArtImageSource(track.albumArtUrl);
      }
    }

    // Wait for all album arts to be loaded.
    if (this.albumArts.size > 0) {
      try {
        await Promise.all([...this.albumArts.values()]);
      } catch {
        // ignore
      }
    }

    const playerNotificationManager = this.getPlayerNotificationManager();

    playerNotificationManager.setPlayer(exoPlayer);
    playerNotificationManager.setVisibility(androidx.core.app.NotificationCompat.VISIBILITY_PUBLIC);
    playerNotificationManager.setUseNextActionInCompactView(true);
    playerNotificationManager.setUsePreviousActionInCompactView(true);
    playerNotificationManager.setUsePlayPauseActions(true);
    playerNotificationManager.setUseNextAction(false);
    playerNotificationManager.setUsePreviousAction(false);
    playerNotificationManager.setUseStopAction(false);
    const notificationIcon = androidUtils.resources.getDrawableId('tns_audioplayer_small_icon');
    if (notificationIcon) {
      playerNotificationManager.setSmallIcon(notificationIcon);
    }

    this._playlist = playlist;

    this.setRate(this._rate);
    this.setSeekIntervalSeconds(this._seekIntervalSeconds);
    const mediaSessionConnector = this._mediaSessionConnector;
    if (mediaSessionConnector) {
      mediaSessionConnector.setPlayer(exoPlayer);
    }
    exoPlayer.setMediaSource(concatenatedSource, true);
    exoPlayer.prepare();
  }

  public setSeekIntervalSeconds(seconds: number) {
    const playerNotificationManager = this.getPlayerNotificationManager();
    if (!playerNotificationManager) {
      Trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds}) - player notification missing`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds})`, notaAudioCategory);
    }
    this._seekIntervalSeconds = Math.max(seconds ?? DEFAULT_SEEK_LENGTH, DEFAULT_SEEK_LENGTH);

    // TODO: This has changed to be on ExoPlayer.Builder, so we need to create new ExoPlayer???
    const seekMs = this._seekIntervalSeconds * 1000;
    // playerNotificationManager.setFastForwardIncrementMs(seekMs);
    // playerNotificationManager.setRewindIncrementMs(seekMs);
  }

  public setRate(rate: number) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.setRate(${rate})`, notaAudioCategory);
    }

    if (typeof rate !== 'number' || Number.isNaN(rate) || rate <= 0) {
      Trace.write(`${this.cls}.setRate(${rate}) - ${JSON.stringify(rate)} isn't a valid value, setting to 1`, notaAudioCategory, Trace.messageType.error);

      rate = 1;
    }

    this._rate = rate;

    const exoPlayer = this.exoPlayer;
    if (!exoPlayer) {
      Trace.write(`${this.cls}.setRate(${rate})`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    const params = new com.google.android.exoplayer2.PlaybackParameters(rate);
    exoPlayer.setPlaybackParameters(params);
  }

  public getRate() {
    const exoPlayer = this.exoPlayer;
    if (!exoPlayer) {
      Trace.write(`${this.cls}.getRate() - exoPlayer not initialized`, notaAudioCategory, Trace.messageType.error);

      return this._rate;
    }

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.getRate()`, notaAudioCategory);
    }

    return exoPlayer.getPlaybackParameters()?.speed ?? this._rate ?? DEFAULT_PLAYBACK_RATE;
  }

  public isPlaying() {
    const exoPlayer = this.exoPlayer;
    if (!exoPlayer) {
      Trace.write(`${this.cls}.isPlaying() - exoPlayer not initialized`, notaAudioCategory, Trace.messageType.error);

      return false;
    }

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.isPlaying()`, notaAudioCategory);
    }

    return !!exoPlayer.isPlaying();
  }

  public play() {
    const exoPlayer = this.exoPlayer;
    if (!exoPlayer) {
      Trace.write(`${this.cls}.play() - exoPlayer not initialized`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.play()`, notaAudioCategory);
    }

    exoPlayer.setPlayWhenReady(true);
  }

  public pause() {
    const exoPlayer = this.exoPlayer;
    if (!exoPlayer) {
      Trace.write(`${this.cls}.pause() - exoPlayer not initialized`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.pause()`, notaAudioCategory);
    }

    exoPlayer.setPlayWhenReady(false);
  }

  public stop() {
    const exoPlayer = this.exoPlayer;
    if (!exoPlayer) {
      Trace.write(`${this.cls}.stop() - exoPlayer not initialized`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.stop()`, notaAudioCategory);
    }

    exoPlayer.stop();
    this.albumArts.clear();

    this._playlist = undefined;
  }

  public onTaskRemoved(rootIntent: android.content.Intent): void {
    super.onTaskRemoved(rootIntent);

    this.exoPlayer?.stop();
    this.exoPlayer?.clearMediaItems();
  }

  private async _makeAlbumArtImageSource(url: string): Promise<ImageSource> {
    if (!this._checkUrlAllowed(url)) {
      Trace.write(`${this.cls}.makeAlbumArtImageSource(${url}) - clear text traffic not allowed - "${url}"`, notaAudioCategory);

      throw new Error();
    }

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.makeAlbumArtImageSource(${url})`, notaAudioCategory);
    }

    if (!this.albumArts.has(url)) {
      this.albumArts.set(url, ImageSource.fromUrl(url));
    }

    return this.albumArts.get(url)!;
  }

  public async _loadAlbumArt(track: MediaTrack, callback: com.google.android.exoplayer2.ui.PlayerNotificationManager.BitmapCallback): Promise<void> {
    if (!track?.albumArtUrl) {
      Trace.write(`${this.cls}._loadAlbumArt(...) - invalid albumArtUrl`, notaAudioCategory, Trace.messageType.error);
      // Artwork not loaded set null as image
      callback.onBitmap(null!);

      return;
    }

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}._loadAlbumArt(...)`, notaAudioCategory);
    }

    const start = Date.now();
    try {
      const image = await this._makeAlbumArtImageSource(track.albumArtUrl);
      if (image?.android) {
        callback.onBitmap(image.android);
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}._loadAlbumArt(${track.albumArtUrl}) - loaded in ${Date.now() - start}`, notaAudioCategory);
        }
        this._lastLoadedAlbumArt = {
          url: track.albumArtUrl,
          bitmap: image.android,
        };

        return;
      } else {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}._loadAlbumArt(${track.albumArtUrl}) - not loaded`, notaAudioCategory);
        }
      }
    } catch (err) {
      Trace.write(`${this.cls}._loadAlbumArt(${track.albumArtUrl}) - couldn't be loaded. ${err} ${err.message}`, notaAudioCategory, Trace.messageType.error);
    }

    // Artwork not loaded set null as image
    callback.onBitmap(null!);
  }

  /**
   * Android 8+ doesn't allow plain HTTP traffic by default.
   * Use this function to check, if a URL is allowed.
   */
  private _checkUrlAllowed(url: string): boolean {
    if (android.os.Build.VERSION.SDK_INT < 23) {
      return true;
    }

    const clearTextHostname = url.match(/^http:\/\/([^\/]+)/)?.[1];
    if (!clearTextHostname) {
      return true;
    }

    if (android.os.Build.VERSION.SDK_INT === 23) {
      // https://developer.android.com/reference/android/security/NetworkSecurityPolicy.html#isCleartextTrafficPermitted()
      return !!android.security.NetworkSecurityPolicy.getInstance().isCleartextTrafficPermitted();
    }

    // https://developer.android.com/reference/android/security/NetworkSecurityPolicy.html#isCleartextTrafficPermitted(java.lang.String)
    return !!android.security.NetworkSecurityPolicy.getInstance().isCleartextTrafficPermitted(clearTextHostname);
  }
}

@NativeClass()
@JavaProxy('dk.nota.TNSMediaButtonReceiver')
export class TNSMediaButtonReceiver extends androidx.media.session.MediaButtonReceiver {
  public onReceive(context: android.content.Context, intent: android.content.Intent): void {
    if (Trace.isEnabled()) {
      Trace.write(`TNSMediaButtonReceiver.onReceive() - ${context} - ${intent}`, notaAudioCategory);
    }

    try {
      super.onReceive(context, intent);
    } catch (e) {
      if (Trace.isEnabled()) {
        Trace.write(`TNSMediaButtonReceiver.onReceive() - error - ${e}`, notaAudioCategory, Trace.messageType.warn);
      }
    }
  }
}

@NativeClass()
@JavaProxy('dk.nota.LocalBinder')
export class LocalBinder extends android.os.Binder {
  private owner: MediaService;

  constructor() {
    super();
  }

  public setService(service: MediaService): void {
    this.owner = service;
  }

  public getService(): MediaService {
    return this.owner;
  }
}

export class ExoPlaybackError extends Error {
  constructor(public errorType: string, public errorMessage: string, public nativeException: com.google.android.exoplayer2.ExoPlaybackException) {
    super(`ExoPlaybackError<${errorType}>: ${errorMessage}`);

    Object.setPrototypeOf(this, ExoPlaybackError.prototype);
  }
}

@NativeClass()
@JavaProxy('dk.nota.ExoPlayerListener')
class TNSPlayerEventListener extends com.google.android.exoplayer2.Player.Listener {
  private static instanceNo = 0;
  private _owner: WeakRef<MediaService>;
  private _cls: string;
  private get cls() {
    if (!this._cls) {
      this._cls = `TNSPlayerEventListener<${++TNSPlayerEventListener.instanceNo}>`;
    }

    return this._cls;
  }

  constructor() {
    super();

    // necessary when extending TypeScript constructors
    return global.__native(this);
  }

  public setOwner(owner: MediaService) {
    this._owner = new WeakRef<MediaService>(owner);
  }

  private getOwner(): MediaService | null {
    return this._owner?.deref() ?? null;
  }

  /**
   * Called when the value of Player.isPlaying() changes.
   */
  public onIsPlayingChanged(isPlaying: boolean) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.onIsPlayingChanged(${isPlaying})`, notaAudioCategory);
    }

    const owner = this.getOwner();
    if (!owner) {
      return;
    }

    if (isPlaying) {
      owner._onPlaying();
    } else if (owner.exoPlayer?.getPlaybackState() === com.google.android.exoplayer2.Player.STATE_READY) {
      // This check makes sure we do not emit pause state when stopped.
      owner._onPaused();
    }
  }

  /**
   * Called when the timeline and/or manifest has been refreshed.
   *
   * Note that if the timeline has changed then a position discontinuity may also have occurred.
   * For example, the current period index may have changed as a result of periods being added or removed from the timeline.
   * This will not be reported via a separate call to onPositionDiscontinuity(int).
   *
   * @param timeline The latest timeline. Never null, but may be empty
   * @param reason The Player.TimelineChangeReason responsible for this timeline change
   */
  public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, reason: number) {
    const manifest = this.getOwner()?.exoPlayer?.getCurrentManifest();

    switch (reason) {
      case com.google.android.exoplayer2.Player.TIMELINE_CHANGE_REASON_PLAYLIST_CHANGED: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onTimelineChanged() - reason = "playlist changed" manifest:${manifest}`, notaAudioCategory);
        }
        break;
      }
      case com.google.android.exoplayer2.Player.TIMELINE_CHANGE_REASON_SOURCE_UPDATE: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onTimelineChanged() - reason = "source update" manifest:${manifest}`, notaAudioCategory);
        }
        break;
      }
      default: {
        Trace.write(`${this.cls}.onTimelineChanged() - reason = "dynamic" reason:"${reason}" manifest:${manifest}`, notaAudioCategory, Trace.messageType.error);
        break;
      }
    }
  }

  /**
   * Called when the available or selected tracks change.
   *
   * @param trackGroups The available tracks. Never null, but may be of length zero.
   * @param trackSelections The track selections for each renderer. Never null and always of length Player.getRendererCount(), but may contain null elements.
   */
  public onTracksChanged(tracks: com.google.android.exoplayer2.Tracks) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.onTracksChanged(${tracks})`, notaAudioCategory);
    }
  }

  /**
   * Called when the player starts or stops loading the source.
   * @param isLoading Whether the source is currently being loaded
   */
  public onLoadingChanged(isLoading: boolean) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.onLoadingChanged(${isLoading})`, notaAudioCategory);
    }
  }

  /**
   * Called when the value returned from either Player.getPlayWhenReady() or Player.getPlaybackState() changes.
   *
   * @param playWhenReady Whether playback will proceed when ready
   * @param playbackState One of the STATE constants
   */
  public onPlayerStateChanged(playWhenReady: boolean, playbackState: number) {
    const owner = this.getOwner();
    if (!owner) {
      return;
    }

    switch (playbackState) {
      // The player is not able to immediately play from its current position.
      case com.google.android.exoplayer2.Player.STATE_BUFFERING: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'buffering'`, notaAudioCategory);
        }

        owner._onBuffering();

        if (!playWhenReady) {
          // Makes sure that player is paused when Player.pause() is called while player is in buffering state
          owner._onPaused();
        }

        break;
      }
      // The player does not have any media to play.
      case com.google.android.exoplayer2.Player.STATE_IDLE: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'idle'`, notaAudioCategory);
        }

        owner._onStopped();
        break;
      }
      // The player has finished playing the media.
      case com.google.android.exoplayer2.Player.STATE_ENDED: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'ended'`, notaAudioCategory);
        }

        owner._onEndOfTrackReached();
        if (!owner.exoPlayer?.hasNextMediaItem()) {
          owner._onEndOfPlaylistReached();
        }

        return;
      }
      // The player is able to immediately play from its current position.
      case com.google.android.exoplayer2.Player.STATE_READY: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'ready'`, notaAudioCategory);
        }

        // NOTE: onIsPlayingChanged sets playing/paused state more precisely than doing it here.
        break;
      }
      default: {
        Trace.write(`${this.cls}.onPlayerStateChanged(${playWhenReady}, ${playbackState}). State is unknown`, notaAudioCategory);
        break;
      }
    }
  }

  /**
   * Called when the value of Player.getRepeatMode() changes.
   * @param repeatMode The Player.RepeatMode used for playback.
   */
  public onRepeatModeChanged(repeatMode: number) {
    switch (repeatMode) {
      case com.google.android.exoplayer2.Player.REPEAT_MODE_ALL: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onRepeatModeChanged() - ${repeatMode} === 'ALL'`, notaAudioCategory);
        }

        break;
      }
      case com.google.android.exoplayer2.Player.REPEAT_MODE_OFF: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onRepeatModeChanged() - ${repeatMode} === 'OFF'`, notaAudioCategory);
        }

        break;
      }
      case com.google.android.exoplayer2.Player.REPEAT_MODE_ONE: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onRepeatModeChanged() - ${repeatMode} === 'ONE'`, notaAudioCategory);
        }

        break;
      }
      default: {
        Trace.write(`${this.cls}.onRepeatModeChanged() - ${repeatMode} is unknown`, notaAudioCategory, Trace.messageType.error);
        break;
      }
    }
  }

  /**
   * Called when the value of Player.getShuffleModeEnabled() changes.
   * @param shuffleModeEnabled Whether shuffling of windows is enabled
   */
  public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.onShuffleModeEnabledChanged() - ${shuffleModeEnabled}`, notaAudioCategory);
    }
  }

  /**
   * Called when an error occurs. The playback state will transition to Player.STATE_IDLE immediately after this method is called.
   * The player instance can still be used, and Player.release() must still be called on the player should it no longer be required.
   *
   * @param exoPlaybackException
   */
  public onPlayerError(exoPlaybackException: com.google.android.exoplayer2.ExoPlaybackException) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.onPlayerError(...)`, notaAudioCategory);
    }

    let errorType: string = 'UNKNOWN';
    let errorMessage = '';
    switch (exoPlaybackException.type) {
      case com.google.android.exoplayer2.ExoPlaybackException.TYPE_UNEXPECTED: {
        errorType = 'UNEXPECTED';
        errorMessage = exoPlaybackException.getUnexpectedException().getMessage();
        break;
      }
      case com.google.android.exoplayer2.ExoPlaybackException.TYPE_SOURCE: {
        errorType = 'SOURCE';
        errorMessage = exoPlaybackException.getSourceException().getMessage();
        break;
      }
      case com.google.android.exoplayer2.ExoPlaybackException.TYPE_RENDERER: {
        errorType = 'RENDERER';
        errorMessage = exoPlaybackException.getRendererException().getMessage();
        break;
      }
      case com.google.android.exoplayer2.ExoPlaybackException.TYPE_REMOTE: {
        errorType = 'REMOTE';
        break;
      }
    }

    const error = new ExoPlaybackError(errorType, errorMessage, exoPlaybackException);

    Trace.write(`${this.cls}.onPlayerError() - ${error.message}`, notaAudioCategory, Trace.messageType.error);

    const owner = this.getOwner();
    if (!owner) {
      return;
    }

    owner._onPlaybackError(error);
  }

  /**
   * Called when a position discontinuity occurs without a change to the timeline.
   * A position discontinuity occurs when the current window or period index changes (as a result of playback
   * transitioning from one period in the timeline to the next), or when the playback position jumps within the
   * period currently being played (as a result of a seek being performed, or when the source introduces a discontinuity internally).
   *
   * When a position discontinuity occurs as a result of a change to the timeline this method is not called.
   * onTimelineChanged(Timeline, Object, int) is called in this case.
   */
  public onPositionDiscontinuity(
    oldPos: com.google.android.exoplayer2.Player.PositionInfo,
    newPos: com.google.android.exoplayer2.Player.PositionInfo,
    reason: number,
  ): void {
    const owner = this.getOwner();
    if (!owner || reason === undefined) {
      return;
    }

    switch (reason) {
      case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_AUTO_TRANSITION: {
        // Discontinuity to or from an ad within one period in the timeline.
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "DISCONTINUITY_REASON_AUTO_TRANSITION"`, notaAudioCategory);
        }

        break;
      }
      case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_INTERNAL: {
        // Discontinuity introduced internally by the source.
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "DISCONTINUITY_REASON_INTERNAL"`, notaAudioCategory);
        }
        break;
      }
      case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_REMOVE: {
        // Automatic playback transition from one period in the timeline to the next.
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "DISCONTINUITY_REASON_REMOVE"`, notaAudioCategory);
        }

        owner._onEndOfTrackReached();
        break;
      }
      case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_SKIP: {
        // Seek within the current period or to another period.
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "DISCONTINUITY_REASON_SKIP"`, notaAudioCategory);
        }

        break;
      }
      case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_SEEK: {
        // Seek within the current period or to another period.
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "DISCONTINUITY_REASON_SEEK"`, notaAudioCategory);
        }

        break;
      }
      case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_SEEK_ADJUSTMENT: {
        // Seek adjustment due to being unable to seek to the requested position or because the seek was permitted to be inexact.
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "DISCONTINUITY_REASON_SEEK_ADJUSTMENT"`, notaAudioCategory);
        }

        break;
      }
      default: {
        Trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "${reason}" is unknown`, notaAudioCategory, Trace.messageType.error);

        break;
      }
    }
  }

  /**
   * Called when the current playback parameters change.
   * The playback parameters may change due to a call to Player.setPlaybackParameters(PlaybackParameters),
   * or the player itself may change them (for example, if audio playback switches to pass-through mode, where speed adjustment is no longer possible).
   * @param playbackParameters
   */
  public onPlaybackParametersChanged(playbackParameters: com.google.android.exoplayer2.PlaybackParameters) {
    const { pitch, speed } = playbackParameters;
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.onPlaybackParametersChanged() - ${JSON.stringify({ pitch, speed })}`, notaAudioCategory);
    }
  }

  /**
   * Called when all pending seek requests have been processed by the player.
   * This is guaranteed to happen after any necessary changes to the player state were reported to onPlayerStateChanged(boolean, int).
   */
  public onSeekProcessed() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.onSeekProcessed()`, notaAudioCategory);
    }
  }

  public onPlaybackSuppressionReasonChanged(reason: number) {
    const owner = this.getOwner();
    if (!owner) {
      return;
    }

    switch (reason) {
      case com.google.android.exoplayer2.Player.PLAYBACK_SUPPRESSION_REASON_NONE: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPlaybackSuppressionReasonChanged() - reason = none`, notaAudioCategory);
        }
        owner._onPlaybackSuspend(PlaybackSuspend.None);
        break;
      }
      case com.google.android.exoplayer2.Player.PLAYBACK_SUPPRESSION_REASON_TRANSIENT_AUDIO_FOCUS_LOSS: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPlaybackSuppressionReasonChanged() - reason = transient audio focus loss`, notaAudioCategory);
        }
        owner._onPlaybackSuspend(PlaybackSuspend.FocusLoss);
        break;
      }
      default: {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.onPlaybackSuppressionReasonChanged() - unknown reason`, notaAudioCategory, Trace.messageType.error);
        }
        owner._onPlaybackSuspend(PlaybackSuspend.Unknown);
      }
    }
  }
}

function getTNSMediaDescriptionAdapterImpl(owner: MediaService) {
  let cls = `TNSMediaDescriptionAdapterImpl<0>`;

  const localOwner: WeakRef<MediaService> = new WeakRef(owner);

  function _getTrackInfo(player: com.google.android.exoplayer2.Player) {
    const owner = localOwner.deref();
    if (!owner) {
      return null;
    }

    const index = player.getCurrentMediaItemIndex();

    return owner._getTrackInfo(index);
  }

  return new com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter({
    createCurrentContentIntent: function (player: com.google.android.exoplayer2.Player) {
      if (Trace.isEnabled()) {
        Trace.write(`${cls}.createCurrentContentIntent(${player})`, notaAudioCategory);
      }

      const owner = localOwner.deref();
      if (!owner) {
        return null!;
      }

      return android.app.PendingIntent.getActivity(
        owner,
        0,
        new android.content.Intent(owner, nsApp.android.startActivity?.getClass()),
        android.app.PendingIntent.FLAG_IMMUTABLE | android.app.PendingIntent.FLAG_UPDATE_CURRENT,
      );
    },

    getCurrentContentText: function (player: com.google.android.exoplayer2.Player) {
      if (Trace.isEnabled()) {
        Trace.write(`${cls}.getCurrentContentText(${player})`, notaAudioCategory);
      }

      return _getTrackInfo(player)?.album ?? null!;
    },

    getCurrentContentTitle: function (player: com.google.android.exoplayer2.Player) {
      if (Trace.isEnabled()) {
        Trace.write(`${cls}.getCurrentContentTitle(${player})`, notaAudioCategory);
      }

      return _getTrackInfo(player)?.title ?? null!;
    },

    getCurrentLargeIcon: function (player: com.google.android.exoplayer2.Player, callback) {
      if (Trace.isEnabled()) {
        Trace.write(`${cls}.getCurrentLargeIcon(${player})`, notaAudioCategory);
      }

      const owner = localOwner.deref();
      if (!owner) {
        return null!;
      }

      const track = _getTrackInfo(player);
      if (!track?.albumArtUrl) {
        return null!;
      }

      const lastLoadedAlbumArt = owner._lastLoadedAlbumArt;

      if (lastLoadedAlbumArt?.url === track.albumArtUrl) {
        Trace.write(`${cls}.getCurrentLargeIcon(${player}) - using lastLoadedAlbumArt`, notaAudioCategory);

        return lastLoadedAlbumArt.bitmap;
      }

      owner._loadAlbumArt(track, callback);

      return null!;
    },

    getCurrentSubText: function (player: com.google.android.exoplayer2.Player) {
      if (Trace.isEnabled()) {
        Trace.write(`${cls}.getCurrentSubText(${player})`, notaAudioCategory);
      }

      return _getTrackInfo(player)?.artist ?? null!;
    },
  });
}

function getTNSNotificationListenerImpl(owner: MediaService) {
  let cls = `TNSMediaDescriptionAdapterImpl<0>`;

  const localOwner: WeakRef<MediaService> = new WeakRef(owner);

  return new com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener({
    onNotificationPosted: function (notificationId: number, notification: android.app.Notification, ongoing?: boolean) {
      if (Trace.isEnabled()) {
        Trace.write(`${cls}.onNotificationPosted(${notificationId}, ${notification}, ${ongoing})`, notaAudioCategory);
      }

      const owner = localOwner.deref();
      if (!owner) {
        return;
      }

      owner._handleNotificationPosted(notificationId, notification);
    },

    onNotificationCancelled: function (notificationId: number, dismissedByUser = false) {
      const innerCls = Trace.isEnabled() && `${cls}.onNotificationCancelled(id=${notificationId}, dismissedByUser=${dismissedByUser})`;
      if (Trace.isEnabled()) {
        Trace.write(`${innerCls}`, notaAudioCategory);
      }

      const owner = localOwner.deref();
      if (!owner) {
        return;
      }

      // Stop the foreground service when the notification is dismissed by the user.
      if (owner._isForegroundService) {
        try {
          owner.stopForeground(false);
          owner._isForegroundService = false;
        } catch (err) {
          Trace.write(`${cls} stopForeground failed! - ${err}`, notaAudioCategory, Trace.messageType.error);
        }
      }

      owner.stopSelf();
    },
  });
}
