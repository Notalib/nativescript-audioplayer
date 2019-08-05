import { isIOS } from 'tns-core-modules/platform';
import * as trace from 'tns-core-modules/trace';
import { notaAudioCategory, PlaybackEvent, PlaybackEventListener, Playlist } from './audioplayer.types';

let instanceNo = 0;
export abstract class CommonAudioPlayer {
  protected instance = ++instanceNo;

  protected readonly cls = `TNSAudioPlayer.${isIOS ? 'ios' : 'android'}<${this.instance}>`;

  public android: any;
  public ios: any;
  public playlist: Playlist;

  protected _queuedSeekTo: number = null;
  private _listener: PlaybackEventListener;
  protected seekIntervalSeconds = 15;

  public abstract isReady: Promise<any>;

  public abstract preparePlaylist(playlist: Playlist);
  public abstract play();
  public abstract pause();
  public abstract stop();
  public abstract isPlaying(): boolean;
  public abstract skipToNext();
  public abstract skipToPrevious();
  public abstract skipToPlaylistIndex(playlistIndex: number): void;
  public abstract setRate(rate: number);
  public abstract getRate(): number;
  public abstract getDuration(): number;
  public abstract getCurrentTime(): number;
  public abstract getCurrentPlaylistIndex(): number;
  public abstract seekTo(offset: number);
  public abstract setSeekIntervalSeconds(seconds: number): void;
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
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.cancelSleepTimer()`, notaAudioCategory);
    }

    if (this._sleepTimer === undefined) {
      return;
    }

    clearInterval(this._sleepTimer);
    this._sleepTimer = undefined;
    this._sleepTimerMillisecondsLeft = 0;
    this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
  }

  protected _sleepTimer: number;
  protected _sleepTimerPaused = false;
  protected _sleepTimerMillisecondsLeft = 0;

  public pauseSleepTimer() {
    if (this._sleepTimer === undefined) {
      return;
    }

    if (trace.isEnabled()) {
      trace.write(`${this.cls}.pauseSleepTimer()`, notaAudioCategory);
    }

    this._sleepTimerPaused = true;
  }

  public resumeSleepTimer() {
    if (this._sleepTimer === undefined) {
      return;
    }

    if (trace.isEnabled()) {
      trace.write(`${this.cls}.resumeSleepTimer()`, notaAudioCategory);
    }

    this._sleepTimerPaused = false;
  }

  public abstract destroy();

  public loadPlaylist(playlist: Playlist, startIndex?: number, startOffset?: number) {
    this.preparePlaylist(playlist);
    if (startIndex !== undefined && startOffset) {
      this.skipToPlaylistIndexAndOffset(startIndex, startOffset);
      return;
    }

    if (startIndex) {
      this.skipToPlaylistIndex(startIndex);
      return;
    }
  }

  public skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): void {
    if (this.getCurrentPlaylistIndex() === playlistIndex) {
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

  public seekRelative(relativeOffset: number): void {
    this.seekTo(Math.min(this.getDuration(), Math.max(0, this.getCurrentTime() + relativeOffset)));
  }

  public setPlaybackEventListener(listener: PlaybackEventListener) {
    this._listener = listener;
  }

  public getCurrentPlaylistUID(): string {
    return this.playlist ? this.playlist.UID : null;
  }

  public _onPlaybackEvent(evt: PlaybackEvent, arg?: any) {
    try {
      switch (evt) {
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
      trace.write(`${this.cls}._onPlaybackEvent(${evt}) - handle sleep timer failed. ${err}`, notaAudioCategory, trace.messageType.error);
    }

    if (!this._listener) {
      return;
    }

    this._listener.onPlaybackEvent(evt, arg);
  }

  protected onSleepTimerExpired() {
    this.pause();
  }
}
