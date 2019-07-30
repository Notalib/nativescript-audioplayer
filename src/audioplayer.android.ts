/// <reference path="./native-definitions/exoplayer.d.ts" />

import * as app from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { CommonAudioPlayer, PlaybackEvent, Playlist } from './audioplayer-common';

export class TNSAudioPlayer extends CommonAudioPlayer {
  private _readyPromise: Promise<any>;

  private trackSelector: com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
  private loadControl: com.google.android.exoplayer2.DefaultLoadControl;
  private renderersFactory: com.google.android.exoplayer2.DefaultRenderersFactory;
  private _exoPlayer: com.google.android.exoplayer2.ExoPlayer;
  private get exoPlayer() {
    if (!this._exoPlayer) {
      ensureNativeClasses();

      this.trackSelector = new DefaultTrackSelector();
      this.loadControl = new DefaultLoadControl();
      this.renderersFactory = new DefaultRenderersFactory(this.context);

      this.playerListener = new TNSPlayerEvent(this);

      this._exoPlayer = ExoPlayerFactory.newSimpleInstance(this.context, this.renderersFactory, this.trackSelector, this.loadControl);
      this._exoPlayer.addListener(this.playerListener);
    }

    return this._exoPlayer;
  }

  public get android() {
    return this._exoPlayer;
  }

  private playerListener: TNSPlayerEvent;

  private get context() {
    return utils.ad.getApplicationContext();
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

  private _exitHandler: (args: app.ApplicationEventData) => void;

  constructor() {
    super();

    app.on(
      app.exitEvent,
      (this._exitHandler = (args: app.ApplicationEventData) => {
        if (args.android && args.android.isFinishing()) {
          // Handle temporary destruction.
          this.destroy();
          return;
        }
      }),
    );
  }

  /*
  private setupServiceCallbacks(service: dk.nota.lyt.libvlc.PlaybackService) {
    service.setNotificationActivity(app.android.startActivity, 'LAUNCHED_FROM_NOTIFICATION');
    service.removeAllCallbacks();
    service.addCallback(this.lytPlaybackEventHandler);
  }

  private getNewMediaWrapper(track: MediaTrack): dk.nota.lyt.libvlc.media.MediaWrapper {
    const uri: android.net.Uri = dk.nota.lyt.libvlc.Utils.LocationToUri(track.url);
    const media: dk.nota.lyt.libvlc.media.MediaWrapper = new dk.nota.lyt.libvlc.media.MediaWrapper(uri);
    media.setDisplayTitle(track.title);
    media.setArtist(track.artist);
    media.setAlbum(track.album);
    media.setArtworkURL(track.albumArtUrl);
    return media;
  } */

  public preparePlaylist(playlist: Playlist): void {
    const concatenatedSource = new com.google.android.exoplayer2.source.ConcatenatingMediaSource(
      Array.create(com.google.android.exoplayer2.source.ExtractorMediaSource, 0),
    );

    const userAgent = com.google.android.exoplayer2.util.Util.getUserAgent(this.context, 'tns-audioplayer');

    const context = this.context;
    for (let i = 0; i < playlist.tracks.length; i += 1) {
      const track = playlist.tracks[i];
      const mediaSource = new com.google.android.exoplayer2.source.ProgressiveMediaSource.Factory(
        new com.google.android.exoplayer2.upstream.DefaultDataSourceFactory(context, userAgent),
      )
        .setTag(`${i}`)
        .createMediaSource(android.net.Uri.parse(track.url));

      concatenatedSource.addMediaSource(mediaSource);
    }

    this.exoPlayer.stop();
    this.exoPlayer.prepare(concatenatedSource);
  }

  public getCurrentPlaylistIndex(): number {
    const tag = this.exoPlayer.getCurrentTag();
    return Number(tag);
  }

  public play() {
    this.exoPlayer.setPlayWhenReady(true);
    this.launchBackgroundService();
  }

  public pause() {
    this.exoPlayer.setPlayWhenReady(false);
    this.stopBackgroundService();
  }

  public stop() {
    this.exoPlayer.stop();

    // On Android the playback service is stopped on stopPlayback,
    // so we have to manually send the Stopped event to our listener.
    this._listener.onPlaybackEvent(PlaybackEvent.Stopped);
    this.playlist = null;
    this.stopBackgroundService();
  }

  public isPlaying(): boolean {
    return this.exoPlayer.getPlayWhenReady();
  }

  public seekTo(offset: number) {
    this.exoPlayer.seekTo(offset);
  }

  public skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): void {
    this.exoPlayer.seekTo(playlistIndex, offset);
  }

  public skipToNext() {
    if (this.exoPlayer.hasNext()) {
      this.exoPlayer.next();
    }
  }

  public skipToPrevious() {
    if (this.exoPlayer.hasPrevious()) {
      this.exoPlayer.previous();
    }
  }

  public skipToPlaylistIndex(playlistIndex: number) {
    this.exoPlayer.seekTo(playlistIndex, 0);
  }

  public setRate(rate: number) {
    const params = new com.google.android.exoplayer2.PlaybackParameters(rate, rate, rate > 1);
    this.exoPlayer.setPlaybackParameters(params);
  }

  public getRate() {
    const params = this.exoPlayer.getPlaybackParameters();
    if (!params) {
      return 1;
    }

    return params.speed;
  }

  public getDuration() {
    return this.exoPlayer.getDuration();
  }

  public getCurrentTime(): number {
    return this.exoPlayer.getCurrentPosition();
  }

  private _sleepTimer: number;
  private _sleepTimerPaused: boolean = false;
  private _sleepTimerMillisecondsLeft: number = 0;

  public setSleepTimer(milliseconds: number) {
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

  public cancelSleepTimer() {
    this._log('cancelSleepTimer');
    if (this._sleepTimer !== undefined) {
      clearInterval(this._sleepTimer);
      this._sleepTimer = undefined;
      this._sleepTimerMillisecondsLeft = 0;
      this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
    }
  }

  public setSeekIntervalSeconds(seconds: number) {
    /*
    if (this.service) {
      this.service.setSeekIntervalSeconds(seconds);
    } */
  }

  public destroy() {
    this._log('Destroy');

    this.exoPlayer.stop();
    this._exoPlayer = null;
    delete this._readyPromise;
    this.stopBackgroundService();

    app.off(app.exitEvent, this._exitHandler);
  }

  public _exoPlayerOnPlayerEvent(evt: PlaybackEvent, arg?: any) {
    this._onPlaybackEvent(evt, arg);
  }

  private _backgroundServiceRunning = false;
  private launchBackgroundService() {
    if (this._backgroundServiceRunning) {
      return;
    }

    const context = this.context;
    const intent = new android.content.Intent(context, dk.nota.BackgroundService.class);
    context.startService(intent);

    this._backgroundServiceRunning = true;
  }

  private stopBackgroundService() {
    if (!this._backgroundServiceRunning) {
      return;
    }

    const context = this.context;
    const intent = new android.content.Intent(context, dk.nota.BackgroundService.class);
    context.stopService(intent);

    this._backgroundServiceRunning = false;
  }
}

export { MediaTrack, PlaybackEvent, Playlist } from './audioplayer-common';

let TNSPlayerEvent: new (owner: TNSAudioPlayer) => com.google.android.exoplayer2.Player.EventListener;
type TNSPlayerEvent = com.google.android.exoplayer2.Player.EventListener;
let DefaultTrackSelector: typeof com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
let DefaultLoadControl: typeof com.google.android.exoplayer2.DefaultLoadControl;
let DefaultRenderersFactory: typeof com.google.android.exoplayer2.DefaultRenderersFactory;
type DefaultRenderersFactory = com.google.android.exoplayer2.DefaultRenderersFactory;
let ExoPlayerFactory: typeof com.google.android.exoplayer2.ExoPlayerFactory;

declare namespace dk {
  namespace nota {
    class BackgroundService extends android.app.Service {}
  }
}

function ensureNativeClasses() {
  if (TNSPlayerEvent) {
    return;
  }

  @Interfaces([com.google.android.exoplayer2.Player.EventListener])
  class TNSPlayerEventImpl extends java.lang.Object implements com.google.android.exoplayer2.Player.EventListener {
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
     * @param Timeline The latest timeline. Never null, but may be empty
     * @param manifest The latest manifest. May be null
     * @param reason The Player.TimelineChangeReason responsible for this timeline change
     */
    public onTimelineChanged(timeline: com.google.android.exoplayer2.Timeline, manifest: any, reason: number) {
      switch (reason) {
        case com.google.android.exoplayer2.Player.TIMELINE_CHANGE_REASON_PREPARED: {
          console.log(`onTimelineChanged - reason = "prepared"`, manifest);
          break;
        }
        case com.google.android.exoplayer2.Player.TIMELINE_CHANGE_REASON_RESET: {
          console.log(`onTimelineChanged - reason = "reset"`, manifest);
          break;
        }
        case com.google.android.exoplayer2.Player.TIMELINE_CHANGE_REASON_DYNAMIC: {
          console.log(`onTimelineChanged - reason = "dynamic"`, manifest);
          break;
        }
        default: {
          console.error(`onTimelineChanged - reason is unknown`, reason, manifest);
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
      console.log('onTracksChanged');
      // console.log(this.owner.get().exoPlayer.getCurrentTag());

      for (let i = 0; i < trackGroups.length; i += 1) {
        const trackGroup = trackGroups.get(i);

        for (let j = 0; j < trackGroup.length; j += 1) {
          const format = trackGroup.getFormat(j);
          console.log('onTracksChanged - group', i, 'format', j, format);
        }
      }

      for (let i = 0; i < trackSelections.length; i += 1) {
        const trackSelection = trackSelections.get(i);
        if (!trackSelection) {
          continue;
        }

        const format = trackSelection.getFormat(0);
        const indexInTrackGroup = trackSelection.getIndexInTrackGroup(0);
        const selectedFormat = trackSelection.getSelectedFormat();
        const selectedIndex = trackSelection.getSelectedIndex();
        const selectedIndexInTrackGroup = trackSelection.getSelectedIndexInTrackGroup();
        const selectionData = trackSelection.getSelectionData();
        const selectionReason = trackSelection.getSelectionReason();

        console.log('onTracksChanged - selection', i, {
          format,
          indexInTrackGroup,
          selectedFormat,
          selectedIndex,
          selectedIndexInTrackGroup,
          selectionData,
          selectionReason,
        });
      }
    }

    /**
     * Called when the player starts or stops loading the source.
     * @param isLoading Whether the source is currently being loaded
     */
    public onLoadingChanged(isLoading: boolean) {
      console.log('onLoadingChanged', !!isLoading);
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

      if (playWhenReady) {
        owner._exoPlayerOnPlayerEvent(PlaybackEvent.Playing);
      }

      switch (playbackState) {
        case com.google.android.exoplayer2.Player.STATE_BUFFERING: {
          console.log(`onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'buffering'`);

          if (!playWhenReady) {
            owner._exoPlayerOnPlayerEvent(PlaybackEvent.Buffering);
          }
          break;
        }
        case com.google.android.exoplayer2.Player.STATE_IDLE: {
          console.log(`onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'idle'`);
          break;
        }
        case com.google.android.exoplayer2.Player.STATE_ENDED: {
          console.log(`onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'ended'`);
          if (!playWhenReady) {
            owner._exoPlayerOnPlayerEvent(PlaybackEvent.EndOfTrackReached);
          }
          break;
        }
        case com.google.android.exoplayer2.Player.STATE_READY: {
          console.log(`onPlayerStateChanged(${playWhenReady}, ${playbackState}). State = 'ready'`);
          break;
        }
        default: {
          console.error(`onPlayerStateChanged(${playWhenReady}, ${playbackState}). State is unknown`);
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
          console.log(`onRepeatModeChanged(${repeatMode}) - mode = 'ALL'`);
          break;
        }
        case com.google.android.exoplayer2.Player.REPEAT_MODE_OFF: {
          console.log(`onRepeatModeChanged(${repeatMode}) - mode = 'OFF'`);
          break;
        }
        case com.google.android.exoplayer2.Player.REPEAT_MODE_ONE: {
          console.log(`onRepeatModeChanged(${repeatMode}) - mode = 'ONE'`);
          break;
        }
        default: {
          console.error(`onRepeatModeChanged(${repeatMode}) - mode is unknown`);
          break;
        }
      }
    }

    /**
     * Called when the value of Player.getShuffleModeEnabled() changes.
     * @param shuffleModeEnabled Whether shuffling of windows is enabled
     */
    public onShuffleModeEnabledChanged(shuffleModeEnabled: boolean) {
      console.log('onShuffleModeEnabledChanged', !!shuffleModeEnabled);
    }

    /**
     * Called when an error occurs. The playback state will transition to Player.STATE_IDLE immediately after this method is called.
     * The player instance can still be used, and Player.release() must still be called on the player should it no longer be required.
     *
     * @param error
     */
    public onPlayerError(error: com.google.android.exoplayer2.ExoPlaybackException) {
      const owner = this.owner.get();
      if (!owner) {
        return;
      }

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
          console.log(`onPositionDiscontinuity - reason = "DISCONTINUITY_REASON_AD_INSERTION"`);
          break;
        }
        case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_INTERNAL: {
          // Discontinuity introduced internally by the source.
          console.log(`onPositionDiscontinuity - reason = "DISCONTINUITY_REASON_INTERNAL"`);
          break;
        }
        case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_PERIOD_TRANSITION: {
          // Automatic playback transition from one period in the timeline to the next.
          console.log(`onPositionDiscontinuity - reason = "DISCONTINUITY_REASON_PERIOD_TRANSITION"`);
          owner._exoPlayerOnPlayerEvent(PlaybackEvent.EndOfTrackReached);
          break;
        }
        case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_SEEK: {
          // Seek within the current period or to another period.
          console.log(`onPositionDiscontinuity - reason = "DISCONTINUITY_REASON_SEEK"`);
          break;
        }
        case com.google.android.exoplayer2.Player.DISCONTINUITY_REASON_SEEK_ADJUSTMENT: {
          // Seek adjustment due to being unable to seek to the requested position or because the seek was permitted to be inexact.
          console.log(`onPositionDiscontinuity - reason = "DISCONTINUITY_REASON_SEEK_ADJUSTMENT"`);
          break;
        }
        default: {
          console.error(`onPositionDiscontinuity - reason = "${reason}" is unknown`);
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
      console.log('onPlaybackParametersChanged', { pitch, speed, skipSilence });
    }

    /**
     * Called when all pending seek requests have been processed by the player.
     * This is guaranteed to happen after any necessary changes to the player state were reported to onPlayerStateChanged(boolean, int).
     */
    public onSeekProcessed() {
      console.log('onSeekProcessed');
    }
  }

  @JavaProxy('dk.nota.BackgroundService')
  class BackgroundService extends android.app.Service {
    onStartCommand(intent, flags, startId) {
      console.log('start command', Array.from(arguments));
      super.onStartCommand(intent, flags, startId);
      return android.app.Service.START_STICKY;
    }
    onCreate(...args) {
      console.log('onCreate', ...args);
      // Do something
    }
    onBind(param) {
      // haven't had to deal with this, so i can't recall what it does
      console.log('on Bind Services', Array.from(arguments));

      return super.onBind(param);
    }
    onUnbind(param) {
      // haven't had to deal with this, so i can't recall what it does
      console.log('UnBind Service', Array.from(arguments));

      return super.onUnbind(param);
    }
    onDestroy() {
      console.log('service onDestroy', Array.from(arguments));
      // end service, reset any variables... etc...
    }
  }

  TNSPlayerEvent = TNSPlayerEventImpl;
  DefaultTrackSelector = com.google.android.exoplayer2.trackselection.DefaultTrackSelector;
  DefaultLoadControl = com.google.android.exoplayer2.DefaultLoadControl;
  DefaultRenderersFactory = com.google.android.exoplayer2.DefaultRenderersFactory;
  ExoPlayerFactory = com.google.android.exoplayer2.ExoPlayerFactory;
}
