import * as nsApp from '@nativescript/core/application';
import { Observable } from '@nativescript/core/data/observable';
import * as trace from '@nativescript/core/trace';
import {
  BufferingEventData,
  EndOfPlaylistReachedEventData,
  EndOfTrackReachedEventData,
  notaAudioCategory,
  PausedEventData,
  PlaybackErrorEventData,
  PlaybackEvent,
  PlaybackEventListener,
  PlaybackSuspend,
  PlaybackSuspendEventData,
  PlayingEventData,
  Playlist,
  SleepTimerChangedEventData,
  SleepTimerEndedEventData,
  StoppedEventData,
  TimeChangedEventData,
  WaitingForNetworkEventData,
} from './audioplayer.types';
export * from './audioplayer.types';

export class CommonAudioPlayer extends Observable {
  protected static instanceNo = 0;

  public static readonly bufferingEvent = 'Buffering';
  public static readonly encounteredErrorEvent = 'EncounteredError';
  public static readonly endOfPlaylistReachedEvent = 'EndOfPlaylistReached';
  public static readonly endOfTrackReachedEvent = 'EndOfTrackReached';
  public static readonly pausedEvent = 'Paused';
  public static readonly playbackSuspendEvent = 'PlaybackSuspend';
  public static readonly playingEvent = 'Playing';
  public static readonly sleepTimerChangedEvent = 'SleepTimerChanged';
  public static readonly sleepTimerEndedEvent = 'SleepTimerEnded';
  public static readonly stoppedEvent = 'Stopped';
  public static readonly timeChangedEvent = 'TimeChanged';
  public static readonly waitingForNetworkEvent = 'WaitingForNetwork';

  protected readonly cls = `TNSAudioPlayer<${++CommonAudioPlayer.instanceNo}>`;

  public android: any;
  public ios: any;
  public playlist: Playlist;

  protected _queuedSeekTo: number = null;
  private _listener: PlaybackEventListener;
  protected seekIntervalSeconds = 15;
  protected playbackRate = 1;

  constructor() {
    super();

    nsApp.on(nsApp.exitEvent, this._exitHandler, this);
  }

  public preparePlaylist(playlist: Playlist): Promise<void> {
    throw new Error('Not implemented');
  }

  /**
   * Start playback
   */
  public play(): Promise<void> {
    throw new Error('Not implemented');
  }

  /**
   * Pause playback
   */
  public pause(): Promise<void> {
    throw new Error('Not implemented');
  }

  /**
   * Stop playback and unload playlist
   */
  public stop(): Promise<void> {
    throw new Error('Not implemented');
  }

  /**
   * Is currently playing?
   */
  public isPlaying(): Promise<boolean> {
    throw new Error('Not implemented');
  }

  /**
   * Skip to previous item
   */
  public skipToPrevious(): Promise<void> {
    throw new Error('Not implemented');
  }

  /**
   * Skip to next item.
   */
  public skipToNext(): Promise<void> {
    throw new Error('Not implemented');
  }

  /**
   * Skip to the start of a new playlist index
   */
  public skipToPlaylistIndex(playlistIndex: number): Promise<void> {
    throw new Error('Not implemented');
  }

  /**
   * Set playbackRate
   */
  public setRate(rate: number): Promise<void> {
    throw new Error('Not implemented');
  }

  /**
   * Get playbackRate
   */
  public getRate(): Promise<number> {
    throw new Error('Not implemented');
  }

  /**
   * Get duration of current track
   */
  public getDuration(): Promise<number> {
    throw new Error('Not implemented');
  }

  /**
   * Get current time offset
   */
  public getCurrentTime(): Promise<number> {
    throw new Error('Not implemented');
  }

  /**
   * Get the current playlist index
   */
  public getCurrentPlaylistIndex(): Promise<number> {
    throw new Error('Not implemented');
  }

  /**
   * Seek to offset in current track
   */
  public seekTo(offset: number) {
    throw new Error('Not implemented');
  }

  /**
   * Set seek interval for remote control
   */
  public setSeekIntervalSeconds(seconds: number): Promise<void> {
    throw new Error('Not implemented');
  }
  public getSeekIntervalSeconds() {
    return this.seekIntervalSeconds;
  }

  /**
   * Start new sleep timer
   */
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
        this._onSleepTimerChanged();
      }

      if (this._sleepTimerMillisecondsLeft === 0) {
        // Fade out volume and pause if not already paused.
        if (this.isPlaying()) {
          this._onSleepTimerExpired();
        }

        this.cancelSleepTimer();
      }
    }, countdownTick);

    this._onSleepTimerChanged();
  }

  /**
   * Get remaining sleep timer.
   */
  public getSleepTimerRemaining(): number {
    return this._sleepTimerMillisecondsLeft;
  }

  /**
   * Cancel/stop sleep timer.
   */
  public cancelSleepTimer() {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.cancelSleepTimer()`, notaAudioCategory);
    }

    if (this._sleepTimer == null) {
      return;
    }

    clearInterval(this._sleepTimer);
    this._sleepTimer = null;
    this._sleepTimerMillisecondsLeft = 0;

    this._onSleepTimerChanged();
  }

  protected _sleepTimer: number;
  protected _sleepTimerPaused = false;
  protected _sleepTimerMillisecondsLeft = 0;

  public pauseSleepTimer() {
    if (this._sleepTimer == null) {
      return;
    }

    if (trace.isEnabled()) {
      trace.write(`${this.cls}.pauseSleepTimer()`, notaAudioCategory);
    }

    this._sleepTimerPaused = true;
  }

  public resumeSleepTimer() {
    if (this._sleepTimer == null) {
      return;
    }

    if (trace.isEnabled()) {
      trace.write(`${this.cls}.resumeSleepTimer()`, notaAudioCategory);
    }

    this._sleepTimerPaused = false;
  }

  /**
   * Load new playlist
   */
  public async loadPlaylist(playlist: Playlist, startIndex?: number, startOffset?: number) {
    await this.preparePlaylist(playlist);

    if (startIndex != null && startOffset != null) {
      await this.skipToPlaylistIndexAndOffset(startIndex, startOffset);

      return;
    }

    if (startIndex != null) {
      await this.skipToPlaylistIndex(startIndex);

      return;
    }
  }

  /**
   * Skip to the offset of a new playlist index
   */
  public async skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): Promise<void> {
    if ((await this.getCurrentPlaylistIndex()) === playlistIndex) {
      this.seekTo(offset);

      return;
    }

    if (offset > 0) {
      if (trace.isEnabled()) {
        trace.write(`Set queuedSeek to ${offset}`, notaAudioCategory);
      }

      this._queuedSeekTo = offset;
    }

    this.skipToPlaylistIndex(playlistIndex);
  }

  /**
   * Seek relative in current track
   */
  public async seekRelative(relativeOffset: number): Promise<void> {
    this.seekTo(Math.min(await this.getDuration(), Math.max(0, (await this.getCurrentTime()) + relativeOffset)));
  }

  /**
   * Setup event listener
   * @deprecated
   */
  public setPlaybackEventListener(listener: PlaybackEventListener) {
    trace.write(`${this.cls}.setPlaybackEventListener(..) is deprecated`, notaAudioCategory, trace.messageType.error);

    this._listener = listener;
  }

  public getCurrentPlaylistUID(): string {
    return this.playlist?.UID ?? null;
  }

  public _onTimeChanged(currentTime: number, duration: number, playlistIndex: number) {
    this.notify(<TimeChangedEventData>{
      object: this,
      eventName: CommonAudioPlayer.timeChangedEvent,
      currentTime,
      playlistIndex,
      duration,
    });

    this._listener?.onPlaybackEvent(PlaybackEvent.TimeChanged, currentTime);
  }

  public async _onPlaying() {
    this.notify(<PlayingEventData>{
      object: this,
      eventName: CommonAudioPlayer.playingEvent,
      currentTime: await this.getCurrentTime(),
      playlistIndex: await this.getCurrentPlaylistIndex(),
      duration: await this.getDuration(),
    });

    this.resumeSleepTimer();
    this._listener?.onPlaybackEvent(PlaybackEvent.Playing);
  }

  public async _onPaused() {
    this.notify(<PausedEventData>{
      object: this,
      eventName: CommonAudioPlayer.pausedEvent,
      currentTime: await this.getCurrentTime(),
      playlistIndex: await this.getCurrentPlaylistIndex(),
      duration: await this.getDuration(),
    });

    this.pauseSleepTimer();
    this._listener?.onPlaybackEvent(PlaybackEvent.Paused);
  }

  public _onStopped() {
    this.notify(<StoppedEventData>{
      object: this,
      eventName: CommonAudioPlayer.stoppedEvent,
    });

    this.cancelSleepTimer();
    this._listener?.onPlaybackEvent(PlaybackEvent.Stopped);
  }

  public _onEndOfPlaylistReached() {
    this.notify(<EndOfPlaylistReachedEventData>{
      object: this,
      eventName: CommonAudioPlayer.endOfPlaylistReachedEvent,
    });

    this._listener?.onPlaybackEvent(PlaybackEvent.EndOfPlaylistReached);
  }

  public _onEndOfTrackReached(endedTrackIndex: number) {
    this.notify(<EndOfTrackReachedEventData>{
      object: this,
      eventName: CommonAudioPlayer.endOfTrackReachedEvent,
      endedTrackIndex,
    });

    this._listener?.onPlaybackEvent(PlaybackEvent.EndOfTrackReached);
  }

  protected _onSleepTimerExpired() {
    this.pause();

    this.notify(<SleepTimerEndedEventData>{
      object: this,
      eventName: CommonAudioPlayer.sleepTimerEndedEvent,
    });

    this._listener?.onPlaybackEvent(PlaybackEvent.SleepTimerEnded);
  }

  public _onSleepTimerChanged() {
    this.notify(<SleepTimerChangedEventData>{
      object: this,
      eventName: CommonAudioPlayer.sleepTimerChangedEvent,
      remaining: this._sleepTimerMillisecondsLeft,
    });

    this._listener?.onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
  }

  public _onBuffering() {
    this.notify(<BufferingEventData>{
      object: this,
      eventName: CommonAudioPlayer.bufferingEvent,
    });

    this._listener?.onPlaybackEvent(PlaybackEvent.Buffering);
  }

  public _onPlaybackError(errorData: any) {
    this.notify(<PlaybackErrorEventData>{
      object: this,
      eventName: CommonAudioPlayer.encounteredErrorEvent,
      error: errorData,
    });

    this._listener?.onPlaybackEvent(PlaybackEvent.EncounteredError, errorData);
  }

  public _onWaitingForNetwork() {
    this.notify(<WaitingForNetworkEventData>{
      object: this,
      eventName: CommonAudioPlayer.waitingForNetworkEvent,
    });

    this._listener?.onPlaybackEvent(PlaybackEvent.WaitingForNetwork);
  }

  public _onPlaybackSuspended(reason: PlaybackSuspend) {
    this.notify(<PlaybackSuspendEventData>{
      object: this,
      eventName: CommonAudioPlayer.playbackSuspendEvent,
      reason,
    });
  }

  public destroy() {
    nsApp.off(nsApp.exitEvent, this._exitHandler, this);
  }

  protected _exitHandler(args: nsApp.ApplicationEventData): void {
    throw new Error('Not implemented');
  }
}
