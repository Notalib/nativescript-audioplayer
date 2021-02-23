/// <reference path="./native-definitions/android.d.ts" />

import * as nsApp from '@nativescript/core/application';
import { ImageSource } from '@nativescript/core/image-source';
import * as trace from '@nativescript/core/trace';
import * as nsUtils from '@nativescript/core/utils/utils';
import { TNSAudioPlayer } from './audioplayer';
import { MediaTrack, notaAudioCategory, PlaybackSuspend, Playlist } from './audioplayer.types';

const MEDIA_SERVICE_NAME = 'TNS-MediaService-1';
const DEFAULT_PLAYBACK_RATE = 1;
const DEFAULT_INTENT_CODE = 1337;
const DEFAULT_SEEK_LENGTH = 15;

export namespace dk {
  export namespace nota {
    let instance = 0;

    @JavaProxy('dk.nota.MediaService')
    export class MediaService extends android.app.Service {
      private _cls: string;
      private get cls() {
        if (!this._cls) {
          this._cls = `MediaService<${++instance}>`;
        }

        return this._cls;
      }

      constructor() {
        super();

        return global.__native(this);
      }

      public exoPlayer?: WeakRef<com.google.android.exoplayer2.SimpleExoPlayer>;
      private _mediaSession?: WeakRef<android.support.v4.media.session.MediaSessionCompat>;
      private get _sessionToken() {
        return this._mediaSession?.get()?.getSessionToken();
      }
      private _playerNotificationManager?: WeakRef<com.google.android.exoplayer2.ui.PlayerNotificationManager>;
      private _mediaSessionConnector?: WeakRef<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector>;
      private _mediaSessionMetadataProvider?: WeakRef<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaMetadataProvider>;
      private _playlist?: Playlist;

      public _isForegroundService: boolean;

      private _owner?: WeakRef<TNSAudioPlayer>;
      private get owner() {
        return this._owner?.get() ?? null;
      }
      private _rate = DEFAULT_PLAYBACK_RATE;
      private _seekIntervalSeconds = DEFAULT_SEEK_LENGTH;
      private _intentReqCode = DEFAULT_INTENT_CODE;
      private _timeChangeInterval: number;

      private _albumArts?: Map<string, Promise<ImageSource>>;
      private get albumArts() {
        if (!this._albumArts) {
          this._albumArts = new Map<string, Promise<ImageSource>>();
        }

        return this._albumArts;
      }

      public _lastLoadedAlbumArt?: { url: string; bitmap: android.graphics.Bitmap };

      public onCreate() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onCreate()`, notaAudioCategory);
        }
        super.onCreate();

        const appContext = this.getApplicationContext();

        ensureNativeClasses();

        const sessionIntent = this.getPackageManager()?.getLaunchIntentForPackage(this.getPackageName());
        let sessionActivityPendingIntent: android.app.PendingIntent | null = null;
        if (sessionIntent) {
          sessionActivityPendingIntent = android.app.PendingIntent.getActivity(this, 0, sessionIntent, 0);
        }

        this._rate = DEFAULT_PLAYBACK_RATE;
        this._seekIntervalSeconds = DEFAULT_SEEK_LENGTH;
        this._intentReqCode = DEFAULT_INTENT_CODE;
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
          .createDefaultLoadControl();
        const playerListener = new TNSPlayerEvent(this);

        const mediaSession = new android.support.v4.media.session.MediaSessionCompat(this, MEDIA_SERVICE_NAME);
        this._mediaSession = new WeakRef(mediaSession);
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
        this._mediaSessionConnector = new WeakRef(mediaSessionConnector);
        mediaSessionConnector.setEnabledPlaybackActions(
          android.support.v4.media.session.PlaybackStateCompat.ACTION_PLAY |
            android.support.v4.media.session.PlaybackStateCompat.ACTION_PLAY_PAUSE |
            android.support.v4.media.session.PlaybackStateCompat.ACTION_PAUSE,
        );

        // FIX: This prevents "Unknown" title and artist on Samsung lock screens.
        // Use a MediaSessionMetadataProvider to add missing metadata fields, that ExoPlayer does not copy in by default.
        const mediaSessionMetadataProvider = new com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaMetadataProvider({
          getMetadata: () => {
            const info = this._getTrackInfo(this.exoPlayer?.get()?.getCurrentWindowIndex() ?? 0);

            return new android.support.v4.media.MediaMetadataCompat.Builder()
              .putString(android.support.v4.media.MediaMetadataCompat.METADATA_KEY_TITLE, info?.title ?? 'Unknown')
              .putString(android.support.v4.media.MediaMetadataCompat.METADATA_KEY_ARTIST, info?.artist ?? 'Unknown')
              .build();
          },
        });
        this._mediaSessionMetadataProvider = new WeakRef(mediaSessionMetadataProvider);

        mediaSessionConnector.setMediaMetadataProvider(mediaSessionMetadataProvider);

        // These can be defined by the user of the plugin in App_Resources/Android/src/main/res/values/strings.xml
        const notificationTitle = nsUtils.ad.resources.getStringId('tns_audioplayer_notification_title') ?? (android.R as any).string.unknownName;
        const notificationDesc = nsUtils.ad.resources.getStringId('tns_audioplayer_notification_desc') ?? (android.R as any).string.unknownName;

        const playerNotificationManager = com.google.android.exoplayer2.ui.PlayerNotificationManager.createWithNotificationChannel(
          this,
          MEDIA_SERVICE_NAME,
          notificationTitle,
          notificationDesc,
          this._intentReqCode,
          new TNSMediaDescriptionAdapter(this),
          new TNSNotificationListener(this),
        );

        this._playerNotificationManager = new WeakRef(playerNotificationManager);

        const exoPlayer = new com.google.android.exoplayer2.SimpleExoPlayer.Builder(appContext)
          .setTrackSelector(trackSelector)
          .setLoadControl(loadControl)
          .build();

        exoPlayer.setHandleWakeLock(true);
        exoPlayer.setHandleAudioBecomingNoisy(true);
        exoPlayer.addListener(playerListener);

        playerNotificationManager.setMediaSessionToken(this._sessionToken!);
        playerNotificationManager.setUseChronometer(true);
        mediaSessionConnector.setPlayer(exoPlayer);

        this._albumArts = new Map<string, Promise<ImageSource>>();

        // Setup audio focus
        const audioAttributes = new com.google.android.exoplayer2.audio.AudioAttributes.Builder()
          .setUsage(com.google.android.exoplayer2.C.USAGE_MEDIA)
          .setContentType(com.google.android.exoplayer2.C.CONTENT_TYPE_MUSIC)
          .build();

        exoPlayer.getAudioComponent().setAudioAttributes(audioAttributes, true);

        this.exoPlayer = new WeakRef(exoPlayer);
      }

      public _getTrackInfo(index: number) {
        return this._playlist?.tracks?.[index];
      }

      private lastPosition: number;
      private lastWindowIndex: number;
      private _handleTimeChange() {
        const player = this.exoPlayer?.get();
        if (!player) {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}._onPlaying() - no player stop timeChangeInterval`, notaAudioCategory);
          }

          clearInterval(this._timeChangeInterval);

          return;
        }

        const windowIndex = player.getCurrentWindowIndex();
        let position = player.getCurrentPosition();
        const duration = player.getDuration();

        if (this.lastPosition !== position || this.lastWindowIndex !== windowIndex) {
          this.owner?._onTimeChanged(position, duration, windowIndex);

          this.lastPosition = position;
          this.lastWindowIndex = windowIndex;
        }
      }

      public _onPlaying() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}._onPlaying()`, notaAudioCategory);
        }
        clearInterval(this._timeChangeInterval);

        this._timeChangeInterval = setInterval(() => {
          this._handleTimeChange();
        }, 100);

        this._mediaSession?.get()?.setActive(true);

        this._handleTimeChange();
        this.owner?._onPlaying();
      }

      public _onPaused() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}._onPaused()`, notaAudioCategory);
        }

        clearInterval(this._timeChangeInterval);

        this.owner?._onPaused();
      }

      public _onStopped() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}._onStopped()`, notaAudioCategory);
        }

        clearInterval(this._timeChangeInterval);

        this._mediaSession?.get()?.setActive(false);
        this._mediaSessionConnector?.get()?.setPlayer(null!);

        this.owner?._onStopped();
      }

      public _onEndOfPlaylistReached() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}._onEndOfPlaylistReached()`, notaAudioCategory);
        }

        this.owner?._onEndOfPlaylistReached();
      }

      public _onEndOfTrackReached() {
        const exoPlayer = this.exoPlayer?.get();
        if (exoPlayer) {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}._onEndOfTrackReached()`, notaAudioCategory);
          }

          const endedTrackIndex = exoPlayer.getCurrentWindowIndex();
          this.owner?._onEndOfTrackReached(endedTrackIndex);
        } else {
          trace.write(`${this.cls}._onEndOfTrackReached() - exoPlayer not initialized`, notaAudioCategory, trace.messageType.error);
        }
      }

      public _onBuffering() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}._onBuffering()`, notaAudioCategory);
        }

        this.owner?._onBuffering();
      }

      public _onWaitingForNetwork() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}._onWaitingForNetwork()`, notaAudioCategory);
        }

        this.owner?._onWaitingForNetwork();
      }

      public _onPlaybackError(errorData: any) {
        trace.write(`${this.cls}._onPlaybackError(${errorData})`, notaAudioCategory, trace.messageType.error);

        this.owner?._onPlaybackError(errorData);
      }

      public _onPlaybackSuspend(reason: PlaybackSuspend) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}._onPlaybackSuspend(${reason})`, notaAudioCategory);
        }

        this.owner?._onPlaybackSuspended(reason);
      }

      public onDestroy() {
        // end service, reset any variables... etc...
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onDestroy()`, notaAudioCategory);
        }

        this.stopForeground(true);
        if (this._isForegroundService) {
          this._isForegroundService = false;
        }

        const exoPlayer = this.exoPlayer?.get();
        if (exoPlayer && this.isPlaying()) {
          exoPlayer.stop();
        }

        const playerNotificationManager = this._playerNotificationManager?.get();
        if (playerNotificationManager) {
          playerNotificationManager.setMediaSessionToken(null!);
          playerNotificationManager.setPlaybackPreparer(null!);
          playerNotificationManager.setControlDispatcher(null!);
          playerNotificationManager.setPlayer(null!);
        }
        this._playerNotificationManager?.clear();
        delete this._playerNotificationManager;
        const mediaSessionConnector = this._mediaSessionConnector?.get();
        if (mediaSessionConnector) {
          mediaSessionConnector.setPlayer(null!);
          mediaSessionConnector.setMediaMetadataProvider(null!);
        }
        this._mediaSessionConnector?.clear();
        delete this._mediaSessionConnector;

        delete this._mediaSessionMetadataProvider;

        const mediaSession = this._mediaSession?.get();
        if (mediaSession) {
          mediaSession.setActive(false);
          mediaSession.release();
        }
        this._mediaSession?.clear();
        delete this._mediaSession;

        exoPlayer?.release();
        delete this.exoPlayer;
        clearInterval(this._timeChangeInterval);

        delete this._owner;
        this._albumArts?.clear();
        delete this._albumArts;
        delete this._playlist;
        delete this._lastLoadedAlbumArt;

        super.onDestroy();
      }

      public _handleNotificationPosted(notificationId: number, notification: android.app.Notification) {
        const exoPlayer = this.exoPlayer?.get();
        if (!exoPlayer) {
          if (trace.isEnabled()) {
            trace.write(
              `${this.cls}._handleNotificationPosted(${notificationId}, ${notification}) - missing exoplayer`,
              notaAudioCategory,
              trace.messageType.error,
            );
          }

          return;
        }

        const playerState = exoPlayer.getPlaybackState();
        const isBuffering = playerState === com.google.android.exoplayer2.Player.STATE_BUFFERING;

        const shouldBeInForeground = isBuffering || this.isPlaying();

        if (trace.isEnabled()) {
          trace.write(
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
          androidx.core.content.ContextCompat.startForegroundService(
            this.getApplicationContext(),
            new android.content.Intent(this, dk.nota.MediaService.class),
          );

          this.startForeground(notificationId, notification);
          this._isForegroundService = true;

          if (trace.isEnabled()) {
            trace.write(`${this.cls}._handleNotificationPosted(${notificationId}, ${notification}) - started in foreground`, notaAudioCategory);
          }
        } else {
          // If playback has ended, also stop the service.
          const shouldStopSelf = playerState === com.google.android.exoplayer2.Player.STATE_ENDED;

          this.stopForeground(shouldStopSelf);
          this._isForegroundService = false;
          if (shouldStopSelf) {
            this.stopSelf();
          }

          if (trace.isEnabled()) {
            trace.write(
              `${this.cls}._handleNotificationPosted(${notificationId}, ${notification}) - stopped in foreground. stopSelf:${isBuffering}`,
              notaAudioCategory,
            );
          }
        }
      }

      public onBind(intent: android.content.Intent): android.os.IBinder {
        const action = `${intent.getAction()}`;

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onBind(${intent}) action: ${action}`, notaAudioCategory);
        }

        return new MediaService.LocalBinder(this);
      }

      public onStartCommand(intent: android.content.Intent, flags: number, startId: number) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onStartCommand(${intent}, ${flags}, ${startId}) - ${this._mediaSession}`, notaAudioCategory);
        }

        const mediaSession = this._mediaSession?.get();
        if (mediaSession) {
          TNSMediaButtonReceiver.handleIntent(mediaSession, intent);
        }

        return super.onStartCommand(intent, flags, startId);
      }

      public setOwner(owner: TNSAudioPlayer) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.setOwner()`, notaAudioCategory);
        }

        if (owner) {
          this._owner = new WeakRef(owner);
        } else {
          this._owner?.clear();
          this._owner = undefined;
        }
      }

      public async preparePlaylist(playlist: Playlist) {
        const exoPlayer = this.exoPlayer?.get();
        const playerNotificationManager = this._playerNotificationManager?.get();
        if (!exoPlayer || !playerNotificationManager) {
          trace.write(`${this.cls}.preparePlaylist() - exoPlayer not initialized`, notaAudioCategory);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.preparePlaylist()`, notaAudioCategory);
        }
        exoPlayer.stop();

        const concatenatedSource = new com.google.android.exoplayer2.source.ConcatenatingMediaSource(
          Array.create(com.google.android.exoplayer2.source.ExtractorMediaSource, 0),
        );

        const userAgent = com.google.android.exoplayer2.util.Util.getUserAgent(this, 'tns-audioplayer');
        const mediaSourceFactory = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(
          new com.google.android.exoplayer2.upstream.DefaultDataSourceFactory(
            this,
            new com.google.android.exoplayer2.upstream.DefaultHttpDataSourceFactory(
              userAgent,
              com.google.android.exoplayer2.upstream.DefaultHttpDataSource.DEFAULT_CONNECT_TIMEOUT_MILLIS,
              30 * 1000,
              true,
            ),
          ),
        );

        this.albumArts.clear();

        for (const track of playlist.tracks) {
          if (!this._checkUrlAllowed(track.url)) {
            trace.write(`${this.cls}.preparePlaylist() - clear text traffic is not allowed - "${track.url}"`, notaAudioCategory, trace.messageType.error);
          }

          const mediaSource = mediaSourceFactory.createMediaSource(android.net.Uri.parse(track.url));
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

        playerNotificationManager.setPlayer(exoPlayer);
        playerNotificationManager.setVisibility(androidx.core.app.NotificationCompat.VISIBILITY_PUBLIC);
        playerNotificationManager.setUseNavigationActionsInCompactView(true);
        playerNotificationManager.setUsePlayPauseActions(true);
        playerNotificationManager.setUseNavigationActions(false);
        playerNotificationManager.setUseStopAction(false);
        const notificationIcon = nsUtils.ad.resources.getDrawableId('tns_audioplayer_small_icon');
        if (notificationIcon) {
          playerNotificationManager.setSmallIcon(notificationIcon);
        }

        this._playlist = playlist;

        this.setRate(this._rate);
        this.setSeekIntervalSeconds(this._seekIntervalSeconds);
        const mediaSessionConnector = this._mediaSessionConnector?.get();
        if (mediaSessionConnector) {
          mediaSessionConnector.setPlayer(exoPlayer);
        }
        exoPlayer.prepare(concatenatedSource);
      }

      public setSeekIntervalSeconds(seconds: number) {
        const playerNotificationManager = this._playerNotificationManager?.get();
        if (!playerNotificationManager) {
          trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds}) - player notification missing`, notaAudioCategory, trace.messageType.error);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds})`, notaAudioCategory);
        }
        this._seekIntervalSeconds = Math.max(seconds ?? DEFAULT_SEEK_LENGTH, DEFAULT_SEEK_LENGTH);

        const seekMs = this._seekIntervalSeconds * 1000;
        playerNotificationManager.setFastForwardIncrementMs(seekMs);
        playerNotificationManager.setRewindIncrementMs(seekMs);
      }

      public setRate(rate: number) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.setRate(${rate})`, notaAudioCategory);
        }

        if (typeof rate !== 'number' || Number.isNaN(rate) || rate <= 0) {
          trace.write(`${this.cls}.setRate(${rate}) - ${JSON.stringify(rate)} isn't a valid value, setting to 1`, notaAudioCategory, trace.messageType.error);

          rate = 1;
        }

        this._rate = rate;

        const exoPlayer = this.exoPlayer?.get();
        if (!exoPlayer) {
          trace.write(`${this.cls}.setRate(${rate})`, notaAudioCategory, trace.messageType.error);

          return;
        }

        const params = new com.google.android.exoplayer2.PlaybackParameters(rate);
        exoPlayer.setPlaybackParameters(params);
      }

      public getRate() {
        const exoPlayer = this.exoPlayer?.get();
        if (!exoPlayer) {
          trace.write(`${this.cls}.getRate() - exoPlayer not initialized`, notaAudioCategory, trace.messageType.error);

          return this._rate;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.getRate()`, notaAudioCategory);
        }

        return exoPlayer.getPlaybackParameters()?.speed ?? this._rate ?? DEFAULT_PLAYBACK_RATE;
      }

      public isPlaying() {
        const exoPlayer = this.exoPlayer?.get();
        if (!exoPlayer) {
          trace.write(`${this.cls}.isPlaying() - exoPlayer not initialized`, notaAudioCategory, trace.messageType.error);

          return false;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.isPlaying()`, notaAudioCategory);
        }

        return !!exoPlayer.isPlaying();
      }

      public play() {
        const exoPlayer = this.exoPlayer?.get();
        if (!exoPlayer) {
          trace.write(`${this.cls}.play() - exoPlayer not initialized`, notaAudioCategory, trace.messageType.error);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.play()`, notaAudioCategory);
        }

        exoPlayer.setPlayWhenReady(true);
      }

      public pause() {
        const exoPlayer = this.exoPlayer?.get();
        if (!exoPlayer) {
          trace.write(`${this.cls}.pause() - exoPlayer not initialized`, notaAudioCategory, trace.messageType.error);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.pause()`, notaAudioCategory);
        }

        exoPlayer.setPlayWhenReady(false);
      }

      public stop() {
        const exoPlayer = this.exoPlayer?.get();
        if (!exoPlayer) {
          trace.write(`${this.cls}.stop() - exoPlayer not initialized`, notaAudioCategory, trace.messageType.error);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.stop()`, notaAudioCategory);
        }

        exoPlayer.stop();
        this.albumArts.clear();

        this._playlist = undefined;
      }

      public onTaskRemoved(rootIntent: android.content.Intent): void {
        super.onTaskRemoved(rootIntent);

        this.exoPlayer?.get()?.stop(true);
      }

      private async _makeAlbumArtImageSource(url: string): Promise<ImageSource> {
        if (!this._checkUrlAllowed(url)) {
          trace.write(`${this.cls}.makeAlbumArtImageSource(${url}) - clear text traffic not allowed - "${url}"`, notaAudioCategory);

          throw new Error();
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.makeAlbumArtImageSource(${url})`, notaAudioCategory);
        }

        if (!this.albumArts.has(url)) {
          this.albumArts.set(url, ImageSource.fromUrl(url));
        }

        return await this.albumArts.get(url)!;
      }

      public async _loadAlbumArt(track: MediaTrack, callback: com.google.android.exoplayer2.ui.PlayerNotificationManager.BitmapCallback): Promise<void> {
        if (!track?.albumArtUrl) {
          trace.write(`${this.cls}._loadAlbumArt(...) - invalid albumArtUrl`, notaAudioCategory, trace.messageType.error);
          // Artwork not loaded set null as image
          callback.onBitmap(null!);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}._loadAlbumArt(...)`, notaAudioCategory);
        }

        const start = Date.now();
        try {
          const image = await this._makeAlbumArtImageSource(track.albumArtUrl);
          if (image?.android) {
            callback.onBitmap(image.android);
            if (trace.isEnabled()) {
              trace.write(`${this.cls}._loadAlbumArt(${track.albumArtUrl}) - loaded in ${Date.now() - start}`, notaAudioCategory);
            }
            this._lastLoadedAlbumArt = {
              url: track.albumArtUrl,
              bitmap: image.android,
            };

            return;
          } else {
            if (trace.isEnabled()) {
              trace.write(`${this.cls}._loadAlbumArt(${track.albumArtUrl}) - not loaded`, notaAudioCategory);
            }
          }
        } catch (err) {
          trace.write(
            `${this.cls}._loadAlbumArt(${track.albumArtUrl}) - couldn't be loaded. ${err} ${err.message}`,
            notaAudioCategory,
            trace.messageType.error,
          );
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

    @JavaProxy('dk.nota.TNSMediaButtonReceiver')
    export class TNSMediaButtonReceiver extends androidx.media.session.MediaButtonReceiver {
      public onReceive(context: android.content.Context, intent: android.content.Intent): void {
        if (trace.isEnabled()) {
          trace.write(`TNSMediaButtonReceiver.onReceive() - ${context} - ${intent}`, notaAudioCategory);
        }

        try {
          super.onReceive(context, intent);
        } catch (e) {
          if (trace.isEnabled()) {
            trace.write(`TNSMediaButtonReceiver.onReceive() - error - ${e}`, notaAudioCategory, trace.messageType.warn);
          }
        }
      }
    }

    export namespace MediaService {
      export class LocalBinder extends android.os.Binder {
        private owner: WeakRef<MediaService>;
        constructor(owner: MediaService) {
          super();

          this.owner = new WeakRef(owner);

          return global.__native(this);
        }

        public getService(): MediaService {
          return this.owner?.get();
        }
      }
    }
  }
}

let TNSPlayerEvent: new (owner: dk.nota.MediaService) => com.google.android.exoplayer2.Player.EventListener;
type TNSPlayerEvent = com.google.android.exoplayer2.Player.EventListener;

let TNSMediaDescriptionAdapter: new (owner: dk.nota.MediaService) => com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter;
type TNSMediaDescriptionAdapter = com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter;
let TNSNotificationListener: new (owner: dk.nota.MediaService) => com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener;
type TNSNotificationListener = com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener;

export class ExoPlaybackError extends Error {
  constructor(public errorType: string, public errorMessage: string, public nativeException: com.google.android.exoplayer2.ExoPlaybackException) {
    super(`ExoPlaybackError<${errorType}>: ${errorMessage}`);

    Object.setPrototypeOf(this, ExoPlaybackError.prototype);
  }
}

function ensureNativeClasses() {
  if (TNSPlayerEvent) {
    return;
  }

  @Interfaces([com.google.android.exoplayer2.Player.EventListener])
  class TNSPlayerEventImpl extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener {
    private static instanceNo = 0;
    private readonly cls = `TNSPlayerEventImpl<${++TNSPlayerEventImpl.instanceNo}>`;
    private _owner: WeakRef<dk.nota.MediaService>;

    private get owner(): dk.nota.MediaService | null {
      return this._owner?.get();
    }

    constructor(owner: dk.nota.MediaService) {
      super();

      this._owner = new WeakRef(owner);

      return global.__native(this);
    }

    /**
     * Called when the value of Player.isPlaying() changes.
     */
    public onIsPlayingChanged(isPlaying: boolean) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onIsPlayingChanged(${isPlaying})`, notaAudioCategory);
      }

      if (isPlaying) {
        this.owner?._onPlaying();
      } else if (this.owner?.exoPlayer?.get()?.getPlaybackState() === com.google.android.exoplayer2.Player.STATE_READY) {
        // This check makes sure we do not emit pause state when stopped.
        this.owner?._onPaused();
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
      const manifest = this.owner?.exoPlayer?.get()?.getCurrentManifest();

      switch (reason) {
        case com.google.android.exoplayer2.Player.TIMELINE_CHANGE_REASON_PREPARED: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onTimelineChanged() - reason = "prepared" manifest:${manifest}`, notaAudioCategory);
          }
          break;
        }
        case com.google.android.exoplayer2.Player.TIMELINE_CHANGE_REASON_RESET: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onTimelineChanged() - reason = "reset" manifest:${manifest}`, notaAudioCategory);
          }
          break;
        }
        case com.google.android.exoplayer2.Player.TIMELINE_CHANGE_REASON_DYNAMIC: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onTimelineChanged() - reason = "dynamic" manifest:${manifest}`, notaAudioCategory);
          }
          break;
        }
        default: {
          trace.write(
            `${this.cls}.onTimelineChanged() - reason = "dynamic" reason:"${reason}" manifest:${manifest}`,
            notaAudioCategory,
            trace.messageType.error,
          );
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
    public onTracksChanged(
      trackGroups: com.google.android.exoplayer2.source.TrackGroupArray,
      trackSelections: com.google.android.exoplayer2.trackselection.TrackSelectionArray,
    ) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onTracksChanged(${trackGroups}, ${trackSelections})`, notaAudioCategory);
      }
    }

    /**
     * Called when the player starts or stops loading the source.
     * @param isLoading Whether the source is currently being loaded
     */
    public onLoadingChanged(isLoading: boolean) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onLoadingChanged(${isLoading})`, notaAudioCategory);
      }
    }

    /**
     * Called when the value returned from either Player.getPlayWhenReady() or Player.getPlaybackState() changes.
     *
     * @param playWhenReady Whether playback will proceed when ready
     * @param playbackState One of the STATE constants
     */
    public onPlayerStateChanged(playWhenReady: boolean, playbackState: number) {
      switch (playbackState) {
        // The player is not able to immediately play from its current position.
        case com.google.android.exoplayer2.Player.STATE_BUFFERING: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'buffering'`, notaAudioCategory);
          }

          this.owner?._onBuffering();

          if (!playWhenReady) {
            // Makes sure that player is paused when Player.pause() is called while player is in buffering state
            this.owner?._onPaused();
          }

          break;
        }
        // The player does not have any media to play.
        case com.google.android.exoplayer2.Player.STATE_IDLE: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'idle'`, notaAudioCategory);
          }

          this.owner?._onStopped();
          break;
        }
        // The player has finished playing the media.
        case com.google.android.exoplayer2.Player.STATE_ENDED: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'ended'`, notaAudioCategory);
          }

          this.owner?._onEndOfTrackReached();
          if (!this.owner?.exoPlayer?.get()?.hasNext()) {
            this.owner?._onEndOfPlaylistReached();
          }

          return;
        }
        // The player is able to immediately play from its current position.
        case com.google.android.exoplayer2.Player.STATE_READY: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'ready'`, notaAudioCategory);
          }

          // NOTE: onIsPlayingChanged sets playing/paused state more precisely than doing it here.
          break;
        }
        default: {
          trace.write(`${this.cls}.onPlayerStateChanged(${playWhenReady}, ${playbackState}). State is unknown`, notaAudioCategory);
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
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onRepeatModeChanged() - ${repeatMode} === 'ALL'`, notaAudioCategory);
          }

          break;
        }
        case com.google.android.exoplayer2.Player.REPEAT_MODE_OFF: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onRepeatModeChanged() - ${repeatMode} === 'OFF'`, notaAudioCategory);
          }

          break;
        }
        case com.google.android.exoplayer2.Player.REPEAT_MODE_ONE: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onRepeatModeChanged() - ${repeatMode} === 'ONE'`, notaAudioCategory);
          }

          break;
        }
        default: {
          trace.write(`${this.cls}.onRepeatModeChanged() - ${repeatMode} is unknown`, notaAudioCategory, trace.messageType.error);
          break;
        }
      }
    }

    /**
     * Called when the value of Player.getShuffleModeEnabled() changes.
     * @param shuffleModeEnabled Whether shuffling of windows is enabled
     */
    public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onShuffleModeEnabledChanged() - ${shuffleModeEnabled}`, notaAudioCategory);
      }
    }

    /**
     * Called when an error occurs. The playback state will transition to Player.STATE_IDLE immediately after this method is called.
     * The player instance can still be used, and Player.release() must still be called on the player should it no longer be required.
     *
     * @param exoPlaybackException
     */
    public onPlayerError(exoPlaybackException: com.google.android.exoplayer2.ExoPlaybackException) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onPlayerError(...)`, notaAudioCategory);
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
        case com.google.android.exoplayer2.ExoPlaybackException.TYPE_OUT_OF_MEMORY: {
          errorType = 'TYPE_OUT_OF_MEMORY';
          errorMessage = exoPlaybackException.getOutOfMemoryError().getMessage();
          break;
        }
      }

      const error = new ExoPlaybackError(errorType, errorMessage, exoPlaybackException);

      trace.write(`${this.cls}.onPlayerError() - ${error.message}`, notaAudioCategory, trace.messageType.error);

      this.owner?._onPlaybackError(error);
    }

    /**
     * Called when a position discontinuity occurs without a change to the timeline.
     * A position discontinuity occurs when the current window or period index changes (as a result of playback
     * transitioning from one period in the timeline to the next), or when the playback position jumps within the
     * period currently being played (as a result of a seek being performed, or when the source introduces a discontinuity internally).
     *
     * When a position discontinuity occurs as a result of a change to the timeline this method is not called.
     * onTimelineChanged(Timeline, Object, int) is called in this case.
     *
     * @param reason
     */
    public onPositionDiscontinuity(reason: number) {
      switch (reason) {
        case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_AD_INSERTION: {
          // Discontinuity to or from an ad within one period in the timeline.
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "DISCONTINUITY_REASON_AD_INSERTION"`, notaAudioCategory);
          }

          break;
        }
        case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_INTERNAL: {
          // Discontinuity introduced internally by the source.
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "DISCONTINUITY_REASON_INTERNAL"`, notaAudioCategory);
          }
          break;
        }
        case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_PERIOD_TRANSITION: {
          // Automatic playback transition from one period in the timeline to the next.
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "DISCONTINUITY_REASON_PERIOD_TRANSITION"`, notaAudioCategory);
          }

          this.owner?._onEndOfTrackReached();
          break;
        }
        case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_SEEK: {
          // Seek within the current period or to another period.
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "DISCONTINUITY_REASON_SEEK"`, notaAudioCategory);
          }

          break;
        }
        case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_SEEK_ADJUSTMENT: {
          // Seek adjustment due to being unable to seek to the requested position or because the seek was permitted to be inexact.
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "DISCONTINUITY_REASON_SEEK_ADJUSTMENT"`, notaAudioCategory);
          }

          break;
        }
        default: {
          trace.write(`${this.cls}.onPositionDiscontinuity() - reason = "${reason}" is unknown`, notaAudioCategory, trace.messageType.error);

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
      const { pitch, speed, skipSilence } = playbackParameters;
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onPlaybackParametersChanged() - ${JSON.stringify({ pitch, speed, skipSilence })}`, notaAudioCategory);
      }
    }

    /**
     * Called when all pending seek requests have been processed by the player.
     * This is guaranteed to happen after any necessary changes to the player state were reported to onPlayerStateChanged(boolean, int).
     */
    public onSeekProcessed() {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onSeekProcessed()`, notaAudioCategory);
      }
    }

    public onPlaybackSuppressionReasonChanged(reason: number) {
      switch (reason) {
        case com.google.android.exoplayer2.Player.PLAYBACK_SUPPRESSION_REASON_NONE: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPlaybackSuppressionReasonChanged() - reason = none`, notaAudioCategory);
          }
          this.owner?._onPlaybackSuspend(PlaybackSuspend.None);
          break;
        }
        case com.google.android.exoplayer2.Player.PLAYBACK_SUPPRESSION_REASON_TRANSIENT_AUDIO_FOCUS_LOSS: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPlaybackSuppressionReasonChanged() - reason = transient audio focus loss`, notaAudioCategory);
          }
          this.owner?._onPlaybackSuspend(PlaybackSuspend.FocusLoss);
          break;
        }
        default: {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}.onPlaybackSuppressionReasonChanged() - unknown reason`, notaAudioCategory, trace.messageType.error);
          }
          this.owner?._onPlaybackSuspend(PlaybackSuspend.Unknown);
        }
      }
    }
  }

  TNSPlayerEvent = TNSPlayerEventImpl;

  @Interfaces([com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter])
  class TNSMediaDescriptionAdapterImpl extends java.lang.Object implements com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter {
    private static instanceNo = 0;
    private readonly cls = `TNSMediaDescriptionAdapterImpl<${++TNSMediaDescriptionAdapterImpl.instanceNo}>`;
    private _owner: WeakRef<dk.nota.MediaService>;

    private get owner(): dk.nota.MediaService | null {
      return this._owner?.get();
    }

    constructor(owner: dk.nota.MediaService) {
      super();

      this._owner = new WeakRef(owner);

      return global.__native(this);
    }

    public createCurrentContentIntent(player: com.google.android.exoplayer2.Player) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.createCurrentContentIntent(${player})`, notaAudioCategory);
      }

      return android.app.PendingIntent.getActivity(
        this.owner!,
        0,
        new android.content.Intent(this.owner!, nsApp.android.startActivity?.getClass() ?? dk.nota.MediaService.class),
        android.app.PendingIntent.FLAG_UPDATE_CURRENT,
      );
    }

    public getCurrentContentText(player: com.google.android.exoplayer2.Player) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.getCurrentContentText(${player})`, notaAudioCategory);
      }

      return this._getTrackInfo(player)?.album ?? null!;
    }

    public getCurrentContentTitle(player: com.google.android.exoplayer2.Player) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.getCurrentContentTitle(${player})`, notaAudioCategory);
      }

      return this._getTrackInfo(player)?.title ?? null!;
    }

    public getCurrentLargeIcon(player: com.google.android.exoplayer2.Player, callback) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.getCurrentLargeIcon(${player})`, notaAudioCategory);
      }

      const track = this._getTrackInfo(player);
      if (!track?.albumArtUrl) {
        return null!;
      }

      const lastLoadedAlbumArt = this.owner?._lastLoadedAlbumArt;

      if (lastLoadedAlbumArt?.url === track.albumArtUrl) {
        trace.write(`${this.cls}.getCurrentLargeIcon(${player}) - using lastLoadedAlbumArt`, notaAudioCategory);

        return lastLoadedAlbumArt.bitmap;
      }

      this.owner?._loadAlbumArt(track, callback);

      return null!;
    }

    public getCurrentSubText(player: com.google.android.exoplayer2.Player) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.getCurrentSubText(${player})`, notaAudioCategory);
      }

      return this._getTrackInfo(player)?.artist ?? null!;
    }

    private _getTrackInfo(player: com.google.android.exoplayer2.Player) {
      const index = player.getCurrentWindowIndex();

      return this.owner?._getTrackInfo(index);
    }
  }

  TNSMediaDescriptionAdapter = TNSMediaDescriptionAdapterImpl;

  @Interfaces([com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener])
  class TNSNotificationListenerImpl extends java.lang.Object implements com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener {
    private static instanceNo = 0;
    private readonly cls = `TNSNotificationListenerImpl<${++TNSNotificationListenerImpl.instanceNo}>`;
    private _owner: WeakRef<dk.nota.MediaService>;

    private get owner(): dk.nota.MediaService | null {
      return this._owner?.get();
    }

    constructor(owner: dk.nota.MediaService) {
      super();

      this._owner = new WeakRef(owner);

      return global.__native(this);
    }

    public onNotificationPosted(notificationId: number, notification: android.app.Notification, ongoing?: boolean) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onNotificationPosted(${notificationId}, ${notification}, ${ongoing})`, notaAudioCategory);
      }

      this.owner?._handleNotificationPosted(notificationId, notification);
    }

    public onNotificationCancelled(notificationId: number, dismissedByUser = false) {
      const cls = trace.isEnabled() && `${this.cls}.onNotificationCancelled(id=${notificationId}, dismissedByUser=${dismissedByUser}) - ${this.owner}`;
      if (trace.isEnabled()) {
        trace.write(`${cls}`, notaAudioCategory);
      }

      if (this.owner?._isForegroundService) {
        try {
          this.owner.stopForeground(false);
          this.owner._isForegroundService = false;
        } catch (err) {
          trace.write(`${cls} stopForeground failed! - ${err}`, notaAudioCategory, trace.messageType.error);
        }
      }

      this.owner?.stopSelf();
    }

    public onNotificationStarted(notificationId: number, notification: android.app.Notification) {
      // Deprecated
      if (trace.isEnabled()) {
        trace.write(
          `${this.cls}.onNotificationStarted(${notificationId}, ${notification}) is deprecated - why was this called?`,
          notaAudioCategory,
          trace.messageType.warn,
        );
      }

      this.owner?._handleNotificationPosted(notificationId, notification);
    }
  }

  TNSNotificationListener = TNSNotificationListenerImpl;
}
