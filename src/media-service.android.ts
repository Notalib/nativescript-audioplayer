/// <reference path="./native-definitions/android.d.ts" />

import * as nsApp from '@nativescript/core/application';
import { ImageSource } from '@nativescript/core/image-source';
import * as trace from '@nativescript/core/trace';
import * as nsUtils from '@nativescript/core/utils/utils';
import { TNSAudioPlayer } from './audioplayer';
import { MediaTrack, notaAudioCategory, PlaybackSuspend, Playlist } from './audioplayer.types';

const MEDIA_SERVICE_NAME = 'TNS-MediaService-1';

export namespace dk {
  export namespace nota {
    let instance = 0;

    @JavaProxy('dk.nota.MediaService')
    export class MediaService extends android.app.Service {
      private static _lastMediaSession?: android.support.v4.media.session.MediaSessionCompat;
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

      private _binder?: MediaService.LocalBinder;
      public exoPlayer?: com.google.android.exoplayer2.ExoPlayer;
      private _mediaSession?: android.support.v4.media.session.MediaSessionCompat;
      private _pmWakeLock?: android.os.PowerManager.WakeLock;
      private _wifiLock?: android.net.wifi.WifiManager.WifiLock;
      private _playerNotificationManager?: com.google.android.exoplayer2.ui.PlayerNotificationManager;
      private _mediaSessionConnector?: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector;
      private _playlist?: Playlist;

      private _owner?: WeakRef<TNSAudioPlayer>;
      private get owner() {
        return this._owner?.get() ?? null;
      }
      private _rate = 1;
      private _seekIntervalSeconds = 15;
      private _intentReqCode = 1337;
      private _noisyBroadcastReceiverRegistered = false;
      private _timeChangeInterval: number;

      private _albumArts: Map<string, Promise<ImageSource>>;

      public onCreate() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onCreate()`, notaAudioCategory);
        }
        super.onCreate();

        ensureNativeClasses();

        if (MediaService._lastMediaSession) {
          MediaService._lastMediaSession.release();
          MediaService._lastMediaSession = undefined;
        }

        this._rate = 1;
        this._seekIntervalSeconds = 15;

        this._binder = new MediaService.LocalBinder(this);

        const trackSelector = new com.google.android.exoplayer2.trackselection.DefaultTrackSelector();
        const loadControl = new com.google.android.exoplayer2.DefaultLoadControl();
        const renderersFactory = new com.google.android.exoplayer2.DefaultRenderersFactory(this);
        const playerListener = new TNSPlayerEvent(this);

        this._mediaSession = new android.support.v4.media.session.MediaSessionCompat(this, MEDIA_SERVICE_NAME);
        // Do not let MediaButtons restart the player when the app is not visible.
        this._mediaSession.setMediaButtonReceiver(null!);
        this._mediaSession.setActive(true);

        // Use MediaSessionConnector extension to handle external media control actions (like headset pause/play).
        this._mediaSessionConnector = new com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector(this._mediaSession);
        this._mediaSessionConnector.setEnabledPlaybackActions(
          android.support.v4.media.session.PlaybackStateCompat.ACTION_PLAY |
            android.support.v4.media.session.PlaybackStateCompat.ACTION_PLAY_PAUSE |
            android.support.v4.media.session.PlaybackStateCompat.ACTION_PAUSE,
        );

        // These can be defined by the user of the plugin in App_Resources/Android/src/main/res/values/strings.xml
        const notificationTitle = nsUtils.ad.resources.getStringId('tns_audioplayer_notification_title') || (android.R as any).string.unknownName;
        const notificationDesc = nsUtils.ad.resources.getStringId('tns_audioplayer_notification_desc') || (android.R as any).string.unknownName;

        this._playerNotificationManager = com.google.android.exoplayer2.ui.PlayerNotificationManager.createWithNotificationChannel(
          this,
          MEDIA_SERVICE_NAME,
          notificationTitle,
          notificationDesc,
          this._intentReqCode,
          new com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter({
            createCurrentContentIntent: (player: com.google.android.exoplayer2.Player) => {
              if (trace.isEnabled()) {
                trace.write(`MediaDescriptionAdapter.createCurrentContentIntent(${player})`, notaAudioCategory);
              }

              return android.app.PendingIntent.getActivity(
                this,
                0,
                new android.content.Intent(this, nsApp.android.startActivity?.getClass() ?? dk.nota.MediaService.class),
                android.app.PendingIntent.FLAG_UPDATE_CURRENT,
              );
            },
            getCurrentContentText: (player) => {
              if (trace.isEnabled()) {
                trace.write(`MediaDescriptionAdapter.getCurrentContentText(${player})`, notaAudioCategory);
              }

              const window = player.getCurrentWindowIndex();
              const track = this.getTrackInfo(window);
              if (!track) {
                return null!;
              }

              return track.album;
            },
            getCurrentContentTitle: (player) => {
              if (trace.isEnabled()) {
                trace.write(`MediaDescriptionAdapter.getCurrentContentTitle(${player})`, notaAudioCategory);
              }

              const window = player.getCurrentWindowIndex();
              const track = this.getTrackInfo(window);
              if (!track) {
                return null!;
              }

              return track.title;
            },
            getCurrentLargeIcon: (player, callback) => {
              if (trace.isEnabled()) {
                trace.write(`MediaDescriptionAdapter.getCurrentLargeIcon(${player})`, notaAudioCategory);
              }

              const window = player.getCurrentWindowIndex();
              const track = this.getTrackInfo(window);
              if (!track?.albumArtUrl) {
                callback.onBitmap(null!);

                return null!;
              }

              this.loadAlbumArt(track, callback);

              return null!;
            },
            getCurrentSubText: (player) => {
              if (trace.isEnabled()) {
                trace.write(`MediaDescriptionAdapter.getCurrentSubText(${player})`, notaAudioCategory);
              }

              const window = player.getCurrentWindowIndex();
              const track = this.getTrackInfo(window);
              if (!track) {
                return null!;
              }

              return track.artist;
            },
          }),
          new com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener({
            onNotificationCancelled: (notificationId: number, dismissedByUser?: boolean) => {
              if (trace.isEnabled()) {
                trace.write(`MediaDescriptionAdapter.NotificationListener(id=${notificationId}, dismissedByUser=${dismissedByUser})`, notaAudioCategory);
              }

              if (this.isInForeground()) {
                try {
                  if (android.os.Build.VERSION.SDK_INT < 24) {
                    // Prior to SDK 24, stopForeground only took a boolean.
                    this.stopForeground(false);
                  } else {
                    this.stopForeground(notificationId);
                  }
                } catch (err) {
                  trace.write(`MediaDescriptionAdapter.stopForeground failed!`, notaAudioCategory, trace.messageType.error);
                }
              }

              this.stopSelf();
            },
            onNotificationPosted: (notificationId: number, notification: android.app.Notification, ongoing?: boolean) => {
              if (trace.isEnabled()) {
                trace.write(`MediaDescriptionAdapter.onNotificationPosted(${notificationId}, ${notification}, ${ongoing})`, notaAudioCategory);
              }

              this.startForeground(notificationId, notification);
            },
            onNotificationStarted(notificationId: number, notification: android.app.Notification) {
              // Deprecated
              trace.write(
                `MediaDescriptionAdapter.onNotificationStarted(${notificationId}, ${notification}) is deprecated - why was this called?`,
                notaAudioCategory,
                trace.messageType.warn,
              );
            },
          }),
        );

        this.exoPlayer = com.google.android.exoplayer2.ExoPlayerFactory.newSimpleInstance(this, renderersFactory, trackSelector, loadControl);
        this.exoPlayer.addListener(playerListener);
        this._playerNotificationManager.setMediaSessionToken(this._mediaSession.getSessionToken());
        this._mediaSessionConnector?.setPlayer(this.exoPlayer);

        this._albumArts = new Map<string, Promise<ImageSource>>();

        // Setup audio focus
        const audioAttributes = new com.google.android.exoplayer2.audio.AudioAttributes.Builder()
          .setUsage(com.google.android.exoplayer2.C.USAGE_MEDIA)
          .setContentType(com.google.android.exoplayer2.C.CONTENT_TYPE_MUSIC)
          .build();

        this.exoPlayer.getAudioComponent().setAudioAttributes(audioAttributes, true);
      }

      private isInForeground() {
        try {
          const manager: android.app.ActivityManager = this.getSystemService(android.content.Context.ACTIVITY_SERVICE);
          const services = manager.getRunningServices(9999);
          for (let i = 0; i < services.size(); i++) {
            const service: android.app.ActivityManager.RunningServiceInfo = services.get(i);
            if (service.service.getClassName() === this.getClass().getName()) {
              return !!service.foreground;
            }
          }
          return false;
        } catch (err) {
          trace.write(`MediaDescriptionAdapter.isServiceRunningInForeground failed: ${err}`, notaAudioCategory, trace.messageType.warn);
          return false;
        }
      }

      private getTrackInfo(index: number) {
        return this._playlist?.tracks?.[index];
      }

      public _onPlaying() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}._onPlaying()`, notaAudioCategory);
        }
        clearInterval(this._timeChangeInterval);

        let lastCurrentTime: number;
        let lastPlaylistIndex: number;
        this._timeChangeInterval = setInterval(() => {
          const exoPlayer = this.exoPlayer;
          if (!exoPlayer) {
            clearInterval(this._timeChangeInterval);

            return;
          }

          const currentPlaylistIndex = exoPlayer.getCurrentWindowIndex();
          const currentTime = exoPlayer.getCurrentPosition();
          const duration = exoPlayer.getDuration();

          if (lastCurrentTime !== currentTime || lastPlaylistIndex !== currentPlaylistIndex) {
            this.owner?._onTimeChanged(currentTime, duration, currentPlaylistIndex);

            lastCurrentTime = currentTime;
            lastPlaylistIndex = currentPlaylistIndex;
          }
        }, 100);

        this._mediaSession?.setActive(true);
        this.registerNoisyBroadcastReceiver();

        this.owner?._onPlaying();
      }

      public _onPaused() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}._onPaused()`, notaAudioCategory);
        }
        clearInterval(this._timeChangeInterval);

        this.unregisterNoisyBroadcastReceiver();

        this.owner?._onPaused();
      }

      public _onStopped() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}._onStopped()`, notaAudioCategory);
        }

        clearInterval(this._timeChangeInterval);

        this._mediaSession?.setActive(false);
        this._mediaSessionConnector?.setPlayer(null!);

        this.owner?._onStopped();
      }

      public _onEndOfPlaylistReached() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}._onEndOfPlaylistReached()`, notaAudioCategory);
        }

        this.owner?._onEndOfPlaylistReached();
      }

      public _onEndOfTrackReached() {
        if (this.exoPlayer) {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}._onEndOfTrackReached()`, notaAudioCategory);
          }

          const endedTrackIndex = this.exoPlayer.getCurrentWindowIndex();
          this.owner?._onEndOfTrackReached(endedTrackIndex);
        } else {
          trace.write(`${this.cls}._onEndOfTrackReached() - exoplayer not inited`, notaAudioCategory, trace.messageType.error);
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
        this.owner?._onPlaybackSuspended(reason);
      }

      public onDestroy() {
        // end service, reset any variables... etc...
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onDestroy()`, notaAudioCategory);
        }

        this._binder = undefined;

        this.stopForeground(true);

        this.releaseWakeLock();

        this._pmWakeLock = undefined;
        this._wifiLock = undefined;
        if (this._playerNotificationManager) {
          this._playerNotificationManager.setPlayer(null!);
          this._playerNotificationManager.setNotificationListener(null!);
          this._playerNotificationManager = undefined;
        }

        if (this._mediaSessionConnector) {
          this._mediaSessionConnector.setPlayer(null!);
          this._mediaSessionConnector = undefined;
        }

        if (this._mediaSession) {
          this._mediaSession.setActive(false);
          // Releasing the mediasession and then using a headset button leads to:
          // > IllegalStateException: Could not find any Service that handles android.intent.action.MEDIA_BUTTON
          // Therefore we save it to a static variable and release it on next "onCreate".
          MediaService._lastMediaSession = this._mediaSession;
          this._mediaSession = undefined;
        }

        if (this.exoPlayer) {
          this.exoPlayer.release();
          this.exoPlayer = undefined;
        }
        clearInterval(this._timeChangeInterval);

        this._owner = undefined;
        super.onDestroy();
      }

      public onBind(param: android.content.Intent): android.os.IBinder {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onBind(${param})`, notaAudioCategory);
        }

        return this._binder as android.os.IBinder;
      }

      public onStartCommand(intent: android.content.Intent, flags: number, startId: number) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onStartCommand(${intent}, ${flags}, ${startId})`, notaAudioCategory);
        }

        if (android.os.Build.VERSION.SDK_INT >= 24 && this._mediaSession) {
          androidx.media.session.MediaButtonReceiver.handleIntent(this._mediaSession, intent);
        }

        return super.onStartCommand(intent, flags, startId);
      }

      private acquireWakeLock() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.acquireWakeLock()`, notaAudioCategory);
        }
        if (!this._pmWakeLock) {
          const powerManager = this.getSystemService(android.content.Context.POWER_SERVICE) as android.os.PowerManager;
          this._pmWakeLock = powerManager.newWakeLock(android.os.PowerManager.PARTIAL_WAKE_LOCK, 'NotaAudio');
        }

        if (!this._pmWakeLock.isHeld()) {
          this._pmWakeLock.acquire();
        }

        if (!this._wifiLock) {
          const wifiManager = this.getSystemService(android.content.Context.WIFI_SERVICE) as android.net.wifi.WifiManager;
          this._wifiLock = wifiManager.createWifiLock(android.net.wifi.WifiManager.WIFI_MODE_FULL, 'NotaAudio');
        }

        if (!this._wifiLock.isHeld()) {
          this._wifiLock.acquire();
        }
      }

      private releaseWakeLock() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.releaseWakeLock()`, notaAudioCategory);
        }

        if (this._pmWakeLock?.isHeld()) {
          this._pmWakeLock.release();
          this._pmWakeLock = undefined;
        }

        if (this._wifiLock?.isHeld()) {
          this._wifiLock.release();
          this._wifiLock = undefined;
        }
      }

      public onStart(intent: android.content.Intent, startId: number) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onStart(${intent}, ${startId})`, notaAudioCategory);
        }
        super.onStart(intent, startId);
      }

      public setOwner(owner: TNSAudioPlayer) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.setOwner()`, notaAudioCategory);
        }

        this._owner = new WeakRef(owner);
      }

      public async preparePlaylist(playlist: Playlist) {
        if (!this.exoPlayer || !this._playerNotificationManager) {
          trace.write(`${this.cls}.preparePlaylist() - exoplayer not inited`, notaAudioCategory);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.preparePlaylist()`, notaAudioCategory);
        }
        this.exoPlayer.stop();

        const concatenatedSource = new com.google.android.exoplayer2.source.ConcatenatingMediaSource(
          Array.create(com.google.android.exoplayer2.source.ExtractorMediaSource, 0),
        );

        const userAgent = com.google.android.exoplayer2.util.Util.getUserAgent(this, 'tns-audioplayer');

        this._albumArts.clear();

        for (const track of playlist.tracks) {
          if (!this.checkUrlAllowed(track.url)) {
            trace.write(`${this.cls}.preparePlaylist() - clear text trafic is not allowed - "${track.url}"`, notaAudioCategory, trace.messageType.error);
          }

          const mediaSource = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(
            new com.google.android.exoplayer2.upstream.DefaultDataSourceFactory(this, userAgent),
          ).createMediaSource(android.net.Uri.parse(track.url));

          concatenatedSource.addMediaSource(mediaSource);

          if (track.albumArtUrl != null) {
            this.makeAlbumArtImageSource(track.albumArtUrl);
          }
        }

        // Wait for all album arts to be loadeed.
        if (this._albumArts?.size > 0) {
          try {
            await Promise.all([...this._albumArts.values()]);
          } catch {
            // ignore
          }
        }

        this._playerNotificationManager.setPlayer(this.exoPlayer);
        this._playerNotificationManager.setVisibility(androidx.core.app.NotificationCompat.VISIBILITY_PUBLIC);
        this._playerNotificationManager.setUseNavigationActionsInCompactView(true);
        this._playerNotificationManager.setUsePlayPauseActions(true);
        this._playerNotificationManager.setUseNavigationActions(false);
        this._playerNotificationManager.setUseStopAction(false);
        const notificationIcon = nsUtils.ad.resources.getDrawableId('tns_audioplayer_small_icon');
        if (notificationIcon) {
          this._playerNotificationManager.setSmallIcon(notificationIcon);
        }

        this._playlist = playlist;

        this.setRate(this._rate);
        this.setSeekIntervalSeconds(this._seekIntervalSeconds);
        this._mediaSessionConnector?.setPlayer(this.exoPlayer);
        this.exoPlayer.prepare(concatenatedSource);
      }

      public setSeekIntervalSeconds(seconds: number) {
        if (!this._playerNotificationManager) {
          trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds}) - player notification missing`, notaAudioCategory, trace.messageType.error);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds})`, notaAudioCategory);
        }
        this._seekIntervalSeconds = Math.max(seconds || 15, 15);

        const seekMs = this._seekIntervalSeconds * 1000;
        this._playerNotificationManager.setFastForwardIncrementMs(seekMs);
        this._playerNotificationManager.setRewindIncrementMs(seekMs);
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

        if (!this.exoPlayer) {
          trace.write(`${this.cls}.setRate(${rate})`, notaAudioCategory, trace.messageType.error);

          return;
        }

        const params = new com.google.android.exoplayer2.PlaybackParameters(rate);
        this.exoPlayer.setPlaybackParameters(params);
      }

      public getRate() {
        if (!this.exoPlayer) {
          trace.write(`${this.cls}.getRate() - exoPlayer not inited`, notaAudioCategory, trace.messageType.error);

          return this._rate;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.getRate()`, notaAudioCategory);
        }

        return this.exoPlayer.getPlaybackParameters()?.speed ?? this._rate ?? 1;
      }

      public isPlaying() {
        if (!this.exoPlayer) {
          trace.write(`${this.cls}.isPlaying() - exoPlayer not inited`, notaAudioCategory, trace.messageType.error);

          return false;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.isPlaying()`, notaAudioCategory);
        }

        return !!this.exoPlayer.isPlaying();
      }

      public play() {
        if (!this.exoPlayer) {
          trace.write(`${this.cls}.play() - exoPlayer not inited`, notaAudioCategory, trace.messageType.error);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.play()`, notaAudioCategory);
        }

        this.exoPlayer.setPlayWhenReady(true);

        this.acquireWakeLock();
      }

      public pause() {
        if (!this.exoPlayer) {
          trace.write(`${this.cls}.pause() - exoPlayer not inited`, notaAudioCategory, trace.messageType.error);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.pause()`, notaAudioCategory);
        }

        this.exoPlayer.setPlayWhenReady(false);

        this.releaseWakeLock();
      }

      public stop() {
        if (!this.exoPlayer) {
          trace.write(`${this.cls}.pause() - exoPlayer not inited`, notaAudioCategory, trace.messageType.error);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.stop()`, notaAudioCategory);
        }

        this.exoPlayer.stop();
        this._albumArts.clear();

        this._playlist = undefined;
        this.releaseWakeLock();
      }

      private makeAlbumArtImageSource(url: string) {
        if (!this.checkUrlAllowed(url)) {
          trace.write(`${this.cls}.makeAlbumArtImageSource(${url}) - clear text trafic not allowed - "${url}"`, notaAudioCategory);

          return Promise.reject();
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.makeAlbumArtImageSource(${url})`, notaAudioCategory);
        }

        if (!this._albumArts.has(url)) {
          this._albumArts.set(url, ImageSource.fromUrl(url));
        }

        return this._albumArts.get(url);
      }

      private async loadAlbumArt(track: MediaTrack, callback: com.google.android.exoplayer2.ui.PlayerNotificationManager.BitmapCallback) {
        if (!track?.albumArtUrl) {
          trace.write(`${this.cls}.loadAlbumArt(...) - invalid albumArtUrl`, notaAudioCategory, trace.messageType.error);

          // Artwork not loaded set null as image
          callback.onBitmap(null!);

          return;
        }

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.loadAlbumArt(...)`, notaAudioCategory);
        }

        const start = Date.now();
        try {
          const image = await this.makeAlbumArtImageSource(track.albumArtUrl);
          if (image?.android) {
            callback.onBitmap(image.android);
            if (trace.isEnabled()) {
              trace.write(`${this.cls}.loadAlbumArt(${track.albumArtUrl}) - loaded in ${Date.now() - start}`, notaAudioCategory);
            }

            return;
          } else {
            if (trace.isEnabled()) {
              trace.write(`${this.cls}.loadAlbumArt(${track.albumArtUrl}) - not loaded`, notaAudioCategory);
            }
          }
        } catch (err) {
          trace.write(`${this.cls}.loadAlbumArt(${track.albumArtUrl}) - couldn't be loaded. ${err} ${err.message}`, notaAudioCategory, trace.messageType.error);
        }

        // Artwork not loaded set null as image
        callback.onBitmap(null!);
      }

      /**
       * Android 8+ doesn't allow plain HTTP trafic by default.
       * Use this function to check, if a URL is allowed.
       */
      private checkUrlAllowed(url: string) {
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

      private registerNoisyBroadcastReceiver() {
        if (this._noisyBroadcastReceiverRegistered) {
          return;
        }
        // Listen to and pause on ACTION_AUDIO_BECOMING_NOISY broadcast (e.g. unplugging headphones).
        // See https://developer.android.com/guide/topics/media-apps/volume-and-earphones.html#becoming-noisy
        nsApp.android.registerBroadcastReceiver(android.media.AudioManager.ACTION_AUDIO_BECOMING_NOISY, () => {
          if (trace.isEnabled()) {
            trace.write(`${this.cls}._onAudioBecomingNoisy()`, notaAudioCategory);
          }
          this.pause();
        });
        this._noisyBroadcastReceiverRegistered = true;
      }

      private unregisterNoisyBroadcastReceiver() {
        nsApp.android.unregisterBroadcastReceiver(android.media.AudioManager.ACTION_AUDIO_BECOMING_NOISY);
        this._noisyBroadcastReceiverRegistered = false;
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

        public getService() {
          return this.owner?.get();
        }
      }
    }
  }
}

let TNSPlayerEvent: new (owner: dk.nota.MediaService) => com.google.android.exoplayer2.Player.EventListener;
type TNSPlayerEvent = com.google.android.exoplayer2.Player.EventListener;

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
      } else if (this.owner?.exoPlayer?.getPlaybackState() === com.google.android.exoplayer2.Player.STATE_READY) {
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
     * @param manifest The latest manifest. May be null
     * @param reason The Player.TimelineChangeReason responsible for this timeline change
     */
    public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, _reason: number) {
      let reason: number;
      if (arguments.length === 3) {
        reason = arguments[2];
      } else if (arguments.length === 2) {
        reason = arguments[1];
      } else {
        reason = -1;
      }

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
          if (!this.owner?.exoPlayer?.hasNext()) {
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
}
