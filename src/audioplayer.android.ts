/// <reference path="./native-definitions/exoplayer.d.ts" />

import * as nsApp from 'tns-core-modules/application';
import * as imageSource from 'tns-core-modules/image-source';
import * as trace from 'tns-core-modules/trace';
import * as utils from 'tns-core-modules/utils/utils';
import { CommonAudioPlayer, notaAudioCategory, PlaybackEvent, Playlist } from './audioplayer-common';
import './foreground-service';

export class TNSAudioPlayer extends CommonAudioPlayer {
  private get context() {
    return utils.ad.getApplicationContext() as android.content.Context;
  }

  private _readyPromise: Promise<any>;

  public _exoPlayer: com.google.android.exoplayer2.ExoPlayer;
  public _mediaSession: android.support.v4.media.session.MediaSessionCompat;
  private _pmWakeLock: android.os.PowerManager.WakeLock;
  private _wifiLock: android.net.wifi.WifiManager.WifiLock;
  private _playerNotificationManager: com.google.android.exoplayer2.ui.PlayerNotificationManager;

  private timeChangeInterval: any;

  private _rate = 1;

  private get exoPlayer() {
    if (!this._exoPlayer) {
      ensureNativeClasses();

      const trackSelector = new com.google.android.exoplayer2.trackselection.DefaultTrackSelector();
      const loadControl = new com.google.android.exoplayer2.DefaultLoadControl();
      const renderersFactory = new com.google.android.exoplayer2.DefaultRenderersFactory(this.context);
      const playerListener = new TNSPlayerEvent(this);

      this._mediaSession = new android.support.v4.media.session.MediaSessionCompat(this.context, 'NotaAudio');

      // Do not let MediaButtons restart the player when the app is not visible.
      this._mediaSession.setMediaButtonReceiver(null);
      this._mediaSession.setActive(true);

      let lastCoverArtUrl: string;
      let lastCoverArtBitMap: any;

      this._playerNotificationManager = com.google.android.exoplayer2.ui.PlayerNotificationManager.createWithNotificationChannel(
        this.context,
        'NotaAudio',
        (android.R as any).string.unknownName, // TODO: Find a better way to get the channel name reference... The notification won't show with this.
        1337, // TODO: How should this be defined?
        new com.google.android.exoplayer2.ui.PlayerNotificationManager.MediaDescriptionAdapter({
          createCurrentContentIntent: (player: com.google.android.exoplayer2.Player) => {
            return android.app.PendingIntent.getActivity(
              this.context,
              0,
              new android.content.Intent(this.context, dk.nota.ForegroundService.class),
              android.app.PendingIntent.FLAG_UPDATE_CURRENT,
            );
          },
          getCurrentContentText: (player) => {
            const window = player.getCurrentWindowIndex();
            const track = this.getTrackInfo(window);
            if (!track) {
              return null;
            }

            return track.album;
          },
          getCurrentContentTitle: (player) => {
            const window = player.getCurrentWindowIndex();
            const track = this.getTrackInfo(window);
            if (!track) {
              return null;
            }

            return track.title;
          },
          getCurrentLargeIcon: (player, callback) => {
            const window = player.getCurrentWindowIndex();
            const track = this.getTrackInfo(window);
            if (!track || !track.albumArtUrl) {
              return null;
            }

            if (lastCoverArtBitMap && lastCoverArtUrl === track.albumArtUrl) {
              callback.onBitmap(lastCoverArtBitMap);
              return null;
            }

            const loadImage = async () => {
              const start = Date.now();
              try {
                const image = await imageSource.fromUrl(track.albumArtUrl);
                if (image.android) {
                  lastCoverArtBitMap = image.android;
                  lastCoverArtUrl = track.albumArtUrl;
                  callback.onBitmap(image.android);
                  if (trace.isEnabled()) {
                    trace.write(`${track.albumArtUrl} loaded in ${start - Date.now()}`, notaAudioCategory);
                  }
                } else {
                  if (trace.isEnabled()) {
                    trace.write(`${track.albumArtUrl} not loaded`, notaAudioCategory);
                  }
                }
              } catch (err) {
                trace.write(`${track.albumArtUrl} couldn't be loaded. ${err} ${err.message}`, notaAudioCategory, trace.messageType.error);
              }
            };
            loadImage();

            return null;
          },
          getCurrentSubText: (player) => {
            const window = player.getCurrentWindowIndex();
            const track = this.getTrackInfo(window);
            if (!track) {
              return null;
            }

            return track.artist;
          },
        }),
      );

      this._exoPlayer = com.google.android.exoplayer2.ExoPlayerFactory.newSimpleInstance(this.context, renderersFactory, trackSelector, loadControl);
      this._exoPlayer.addListener(playerListener);
      this._playerNotificationManager.setMediaSessionToken(this._mediaSession.getSessionToken());
    }

    return this._exoPlayer;
  }

  public get android() {
    return this._exoPlayer;
  }

  public get isReady(): Promise<any> {
    if (!this._readyPromise) {
      this._readyPromise = new Promise<any>((resolve, reject) => {
        try {
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }

    return this._readyPromise;
  }

  private _exitHandler: (args: nsApp.ApplicationEventData) => void;

  constructor() {
    super();

    ForegroundUtilService.startForeground();

    const powerManager = this.context.getSystemService(android.content.Context.POWER_SERVICE) as android.os.PowerManager;
    this._pmWakeLock = powerManager.newWakeLock(android.os.PowerManager.PARTIAL_WAKE_LOCK, 'NotaAudio');

    const wifiManager = this.context.getSystemService(android.content.Context.WIFI_SERVICE) as android.net.wifi.WifiManager;
    this._wifiLock = wifiManager.createWifiLock(android.net.wifi.WifiManager.WIFI_MODE_FULL, 'NotaAudio');

    nsApp.on(
      nsApp.exitEvent,
      (this._exitHandler = (args: nsApp.ApplicationEventData) => {
        if (args.android && args.android.isFinishing()) {
          // Handle temporary destruction.
          this.destroy();
          return;
        }
      }),
    );
  }

  public preparePlaylist(playlist: Playlist): void {
    this.stop();

    const concatenatedSource = new com.google.android.exoplayer2.source.ConcatenatingMediaSource(
      Array.create(com.google.android.exoplayer2.source.ExtractorMediaSource, 0),
    );

    const userAgent = com.google.android.exoplayer2.util.Util.getUserAgent(this.context, 'tns-audioplayer');

    const context = this.context;
    for (let i = 0; i < playlist.tracks.length; i += 1) {
      const track = playlist.tracks[i];
      const mediaSource = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(
        new com.google.android.exoplayer2.upstream.DefaultDataSourceFactory(context, userAgent),
      ).createMediaSource(android.net.Uri.parse(track.url));

      concatenatedSource.addMediaSource(mediaSource);
    }

    this.exoPlayer.prepare(concatenatedSource);
    this._playerNotificationManager.setPlayer(this._exoPlayer);
    this._playerNotificationManager.setVisibility(androidx.core.app.NotificationCompat.VISIBILITY_PUBLIC);
    this._playerNotificationManager.setUseNavigationActionsInCompactView(true);
    this._playerNotificationManager.setUsePlayPauseActions(true);
    this._playerNotificationManager.setUseNavigationActions(false);
    this._playerNotificationManager.setUseStopAction(false);

    this.playlist = playlist;

    this.setRate(this._rate);
    this.setSeekIntervalSeconds(this.seekIntervalSeconds);
  }

  public getCurrentPlaylistIndex(): number {
    if (!this._exoPlayer) {
      return -1;
    }

    return this.exoPlayer.getCurrentWindowIndex();
  }

  public play() {
    if (!this._exoPlayer) {
      return;
    }

    this.exoPlayer.setPlayWhenReady(true);
    this.acquireLock();
  }

  public pause() {
    if (!this._exoPlayer) {
      return;
    }

    this.exoPlayer.setPlayWhenReady(false);
    this.releaseLock();
  }

  public stop() {
    if (!this._exoPlayer) {
      return;
    }

    this.exoPlayer.stop();

    // On Android the playback service is stopped on stopPlayback,
    // so we have to manually send the Stopped event to our listener.
    this._exoPlayerOnPlayerEvent(PlaybackEvent.Stopped);
    this.playlist = null;
    this.releaseLock();
  }

  public isPlaying(): boolean {
    if (!this._exoPlayer) {
      return false;
    }

    return this.exoPlayer.getPlayWhenReady();
  }

  public seekTo(offset: number) {
    if (!this._exoPlayer) {
      return;
    }

    this.exoPlayer.seekTo(offset);
  }

  public skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): void {
    if (!this._exoPlayer) {
      return;
    }

    this.exoPlayer.seekTo(playlistIndex, offset);
  }

  public skipToNext() {
    if (this._exoPlayer && this.exoPlayer.hasNext()) {
      this.exoPlayer.next();
    }
  }

  public skipToPrevious() {
    if (this._exoPlayer && this.exoPlayer.hasPrevious()) {
      this.exoPlayer.previous();
    }
  }

  public skipToPlaylistIndex(playlistIndex: number) {
    if (!this._exoPlayer) {
      return;
    }

    this.exoPlayer.seekTo(playlistIndex, 0);
  }

  public setRate(rate: number) {
    this._rate = rate;
    if (!this._exoPlayer) {
      return;
    }

    const params = new com.google.android.exoplayer2.PlaybackParameters(rate, rate, rate > 1);
    this.exoPlayer.setPlaybackParameters(params);
  }

  public getRate() {
    if (!this._exoPlayer) {
      return this._rate;
    }

    const params = this.exoPlayer.getPlaybackParameters();
    if (!params) {
      return 1;
    }

    return params.speed;
  }

  public getDuration() {
    if (!this._exoPlayer) {
      return 0;
    }

    return this.exoPlayer.getDuration();
  }

  public getCurrentTime(): number {
    if (!this._exoPlayer) {
      return -1;
    }

    return this.exoPlayer.getCurrentPosition();
  }

  public setSleepTimer(milliseconds: number) {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.setSleepTimer(${milliseconds})`, notaAudioCategory);
    }

    this.cancelSleepTimer();

    const countdownTick = 1000;
    this._sleepTimerMillisecondsLeft = milliseconds;
    this._sleepTimer = setInterval(() => {
      if (!this._sleepTimerPaused && this.isPlaying()) {
        this._sleepTimerMillisecondsLeft = Math.max(this._sleepTimerMillisecondsLeft - countdownTick, 0);
        this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
      }

      if (this._sleepTimerMillisecondsLeft === 0) {
        // Fade out volume and pause if not already paused.
        if (this.isPlaying()) {
          this.pause();
        }

        clearInterval(this._sleepTimer);
        this._sleepTimer = undefined;
      }
    }, countdownTick);
    this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
  }

  public getSleepTimerRemaining(): number {
    return this._sleepTimerMillisecondsLeft;
  }

  public setSeekIntervalSeconds(seconds: number) {
    this.seekIntervalSeconds = seconds;

    if (trace.isEnabled()) {
      trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds})`, notaAudioCategory);
    }

    if (!this._exoPlayer) {
      return;
    }

    this._playerNotificationManager.setFastForwardIncrementMs(seconds * 1000);
    this._playerNotificationManager.setRewindIncrementMs(seconds * 1000);
  }

  public destroy() {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.destroy()`, notaAudioCategory);
    }

    this._playerNotificationManager.setPlayer(null);
    this.exoPlayer.stop();
    this.exoPlayer.release();
    this._exoPlayer = null;
    this._mediaSession.release();
    delete this._readyPromise;
    this.stopBackgroundService();

    nsApp.off(nsApp.exitEvent, this._exitHandler);
    clearInterval(this.timeChangeInterval);
  }

  public _exoPlayerOnPlayerEvent(evt: PlaybackEvent, arg?: any) {
    this._onPlaybackEvent(evt, arg);

    if (evt === PlaybackEvent.Playing) {
      clearInterval(this.timeChangeInterval);

      let lastCurrentTime: number;
      let lastPlaylistIndex: number;
      this.timeChangeInterval = setInterval(() => {
        const currentPlaylistIndex = this.getCurrentPlaylistIndex();
        const currentTime = this.getCurrentTime();

        if (lastCurrentTime !== currentTime || lastPlaylistIndex !== currentPlaylistIndex) {
          this._onPlaybackEvent(PlaybackEvent.TimeChanged);
          lastCurrentTime = currentTime;
          lastPlaylistIndex = currentPlaylistIndex;
        }
      }, 100);
    } else if (evt === PlaybackEvent.Paused || evt === PlaybackEvent.Stopped) {
      clearInterval(this.timeChangeInterval);
    }
  }

  public getTrackInfo(index: number) {
    if (!this.playlist || !this.playlist.tracks) {
      return null;
    }

    return this.playlist.tracks[index] || null;
  }

  private _backgroundServiceRunning = false;
  private launchBackgroundService() {
    if (this._backgroundServiceRunning) {
      return;
    }

    this._playerNotificationManager.setNotificationListener(
      new com.google.android.exoplayer2.ui.PlayerNotificationManager.NotificationListener({
        onNotificationStarted(notificationId, notification) {
          foregroundService.startForeground(notificationId, notification);
        },
        onNotificationCancelled() {
          foregroundService.stopSelf();
        },
        onNotificationPosted(notificationId, notification) {
          //
        },
      }),
    );

    this._backgroundServiceRunning = true;
  }

  private stopBackgroundService() {
    ForegroundUtilService.stopForeground();
    this.releaseLock();
  }

  private acquireLock() {
    if (!this._pmWakeLock.isHeld()) {
      this._pmWakeLock.acquire();
    }

    if (!this._wifiLock.isHeld()) {
      this._wifiLock.acquire();
    }
  }

  private releaseLock() {
    if (this._pmWakeLock.isHeld()) {
      this._pmWakeLock.release();
    }

    if (this._wifiLock.isHeld()) {
      this._wifiLock.release();
    }
  }
}

export { MediaTrack, PlaybackEvent, Playlist } from './audioplayer-common';

let TNSPlayerEvent: new (owner: TNSAudioPlayer) => com.google.android.exoplayer2.Player.EventListener;
type TNSPlayerEvent = com.google.android.exoplayer2.Player.EventListener;
let foregroundService: android.app.Service;

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
    private readonly cls = 'TNSPlayerEventImpl';
    private owner: WeakRef<TNSAudioPlayer>;

    constructor(_owner: TNSAudioPlayer) {
      super();

      this.owner = new WeakRef(_owner);

      return global.__native(this);
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
    public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number) {
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
        trace.write(`onTracksChanged(${trackGroups}, ${trackSelections})`, notaAudioCategory);
      }
    }

    /**
     * Called when the player starts or stops loading the source.
     * @param isLoading Whether the source is currently being loaded
     */
    public onLoadingChanged(isLoading: boolean) {
      if (trace.isEnabled()) {
        trace.write(`onTracksChanged(${isLoading})`, notaAudioCategory);
      }
    }

    /**
     * Called when the value returned from either Player.getPlayWhenReady() or Player.getPlaybackState() changes.
     *
     * @param playWhenReady Whether playback will proceed when ready
     * @param playbackState One of the STATE constants
     */
    public onPlayerStateChanged(playWhenReady: boolean, playbackState: number) {
      const owner = this.owner.get();
      if (!owner) {
        return;
      }

      let playbackEvent: PlaybackEvent;
      switch (playbackState) {
        // The player is not able to immediately play from its current position.
        case com.google.android.exoplayer2.Player.STATE_BUFFERING: {
          if (trace.isEnabled()) {
            trace.write(`onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'buffering'`, notaAudioCategory);
          }

          playbackEvent = PlaybackEvent.Buffering;
          break;
        }
        // The player does not have any media to play.
        case com.google.android.exoplayer2.Player.STATE_IDLE: {
          if (trace.isEnabled()) {
            trace.write(`onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'idle'`, notaAudioCategory);
          }
          playbackEvent = PlaybackEvent.Paused;
          break;
        }
        // The player has finished playing the media.
        case com.google.android.exoplayer2.Player.STATE_ENDED: {
          if (trace.isEnabled()) {
            trace.write(`onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'ended'`, notaAudioCategory);
          }

          if (owner._exoPlayer.hasNext()) {
            playbackEvent = PlaybackEvent.EndOfTrackReached;
          } else {
            playbackEvent = PlaybackEvent.EndOfPlaylistReached;
          }

          owner._exoPlayerOnPlayerEvent(playbackEvent);
          return;
        }
        // The player is able to immediately play from its current position.
        case com.google.android.exoplayer2.Player.STATE_READY: {
          if (trace.isEnabled()) {
            trace.write(`onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'ready'`, notaAudioCategory);
          }
          playbackEvent = playWhenReady ? PlaybackEvent.Playing : PlaybackEvent.Paused;
          break;
        }
        default: {
          trace.write(`onPlayerStateChanged(${playWhenReady}, ${playbackState}). State is unknown`, notaAudioCategory);
          break;
        }
      }

      if (playWhenReady) {
        owner._exoPlayerOnPlayerEvent(PlaybackEvent.Playing);
      } else if (playbackEvent !== undefined) {
        owner._exoPlayerOnPlayerEvent(playbackEvent);
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
      const owner = this.owner.get();
      if (!owner) {
        return;
      }

      let errorType: string;
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

      trace.write(`${this}.onPlayerError() - ${error.message}`, notaAudioCategory, trace.messageType.error);

      owner._exoPlayerOnPlayerEvent(PlaybackEvent.EncounteredError, error);
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
      const owner = this.owner.get();
      if (!owner) {
        return;
      }

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
          owner._exoPlayerOnPlayerEvent(PlaybackEvent.EndOfTrackReached);
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
  }

  TNSPlayerEvent = TNSPlayerEventImpl;
}

export class ForegroundUtilService {
  public static startForeground() {
    if (!nsApp.android || !nsApp.android.context) {
      return;
    }

    const foregroundNotificationIntent = new android.content.Intent();
    foregroundNotificationIntent.setClassName(nsApp.android.context, 'dk.nota.ForegroundService');
    nsApp.android.context.startService(foregroundNotificationIntent);
  }

  public static stopForeground() {
    const foregroundNotificationIntent = new android.content.Intent();
    foregroundNotificationIntent.setClassName(nsApp.android.context, 'dk.nota.ForegroundService');
    nsApp.android.context.stopService(foregroundNotificationIntent);
  }
}
