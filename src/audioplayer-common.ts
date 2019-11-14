import * as nsApp from '@nativescript/core/application';
import { Observable } from '@nativescript/core/data/observable';
import * as trace from '@nativescript/core/trace';
import * as definitions from '.';
import { notaAudioCategory, PlaybackEvent, PlaybackEventListener, Playlist } from './audioplayer.types';

let instanceNo = 0;
export abstract class CommonAudioPlayer extends Observable implements definitions.TNSAudioPlayer {
  public static readonly stoppedEvent = 'Stopped';
  public static readonly bufferingEvent = 'Buffering';
  public static readonly playingEvent = 'Playing';
  public static readonly pausedEvent = 'Paused';
  public static readonly endOfTrackReachedEvent = 'EndOfTrackReached';
  public static readonly endOfPlaylistReachedEvent = 'EndOfPlaylistReached';
  public static readonly encounteredErrorEvent = 'EncounteredError';
  public static readonly timeChangedEvent = 'TimeChanged';
  public static readonly sleepTimerChangedEvent = 'SleepTimerChanged';
  public static readonly sleepTimerEndedEvent = 'SleepTimerEnded';
  public static readonly waitingForNetworkEvent = 'WaitingForNetwork';

  protected instance = ++instanceNo;

  protected readonly cls = `TNSAudioPlayer<${this.instance}>`;

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

  public abstract preparePlaylist(playlist: Playlist): Promise<void>;
  public abstract play(): Promise<void>;
  public abstract pause(): Promise<void>;
  public abstract stop(): Promise<void>;
  public abstract isPlaying(): Promise<boolean>;
  public abstract skipToNext(): Promise<void>;
  public abstract skipToPrevious(): Promise<void>;
  public abstract skipToPlaylistIndex(playlistIndex: number): Promise<void>;
  public abstract setRate(rate: number): Promise<void>;
  public abstract getRate(): Promise<number>;
  public abstract getDuration(): Promise<number>;
  public abstract getCurrentTime(): Promise<number>;
  public abstract getCurrentPlaylistIndex(): Promise<number>;
  public abstract seekTo(offset: number);
  public abstract setSeekIntervalSeconds(seconds: number): Promise<void>;
  public getSeekIntervalSeconds() {
    return this.seekIntervalSeconds;
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
          this.onSleepTimerExpired();
        }

        this.cancelSleepTimer();
      }
    }, countdownTick);

    this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
  }

  public getSleepTimerRemaining(): number {
    return this._sleepTimerMillisecondsLeft;
  }

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

    this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
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

  public async seekRelative(relativeOffset: number): Promise<void> {
    this.seekTo(Math.min(await this.getDuration(), Math.max(0, (await this.getCurrentTime()) + relativeOffset)));
  }

  public setPlaybackEventListener(listener: PlaybackEventListener) {
    this._listener = listener;
  }

  public getCurrentPlaylistUID(): string {
    return this.playlist?.UID ?? null;
  }

  public _onPlaybackEvent(eventName: PlaybackEvent, data?: any) {
    try {
      switch (eventName) {
        case PlaybackEvent.Playing: {
          this.resumeSleepTimer();
          break;
        }
        case PlaybackEvent.Stopped: {
          this.cancelSleepTimer();
          break;
        }
        case PlaybackEvent.Paused:
        case PlaybackEvent.WaitingForNetwork:
        case PlaybackEvent.EncounteredError: {
          this.pauseSleepTimer();
          break;
        }
      }
    } catch (err) {
      trace.write(`${this.cls}._onPlaybackEvent(${eventName}) - handle sleep timer failed. ${err}`, notaAudioCategory, trace.messageType.error);
    }

    this.notify({
      object: this,
      eventName,
      data,
    });

    this._listener?.onPlaybackEvent(eventName, data);
  }

  protected onSleepTimerExpired() {
    this.pause();

    this._onPlaybackEvent(PlaybackEvent.SleepTimerEnded);
  }

  public destroy() {
    nsApp.off(nsApp.exitEvent, this._exitHandler, this);
  }

  protected abstract _exitHandler(args: nsApp.ApplicationEventData): void;
}
