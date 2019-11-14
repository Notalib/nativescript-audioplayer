import { Playlist, MediaTrack, PlaybackEvent, PlaybackEventListener } from './audioplayer.types';
import { Observable } from '@nativescript/core/data/observable';

export class TNSAudioPlayer extends Observable {
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

  /**
   * Load new playlist
   */
  public loadPlaylist(playlist: Playlist, startIndex?: number, startOffset?: number): Promise<void>;

  /**
   * Start playback
   */
  public play(): Promise<void>;

  /**
   * Pause playback
   */
  public pause(): Promise<void>;

  /**
   * Stop playback and unload playlist
   */
  public stop(): Promise<void>;

  /**
   * Is currently playing?
   */
  public isPlaying(): Promise<boolean>;

  /**
   * Skip to previous item
   */
  public skipToPrevious(): Promise<void>;

  /**
   * Skip to next item.
   */
  public skipToNext(): Promise<void>;

  /**
   * Skip to the start of a new playlist index
   */
  public skipToPlaylistIndex(playlistIndex: number): Promise<void>;

  /**
   * Skip to the offset of a new playlist index
   */
  public skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): Promise<void>;

  /**
   * Seek to offset in current track
   */
  public seekTo(offset: number): Promise<void>;

  /**
   * Set playbackRate
   */
  public setRate(rate: number): Promise<void>;

  /**
   * Get playbackRate
   */
  public getRate(): Promise<number>;

  /**
   * Get duration of current track
   */
  public getDuration(): Promise<number>;

  /**
   * Get current time offset
   */
  public getCurrentTime(): Promise<number>;

  /**
   * Get the current playlist index
   */
  public getCurrentPlaylistIndex(): Promise<number>;

  /**
   * Playlist UID
   */
  public getCurrentPlaylistUID(): string;

  /**
   * Seek relative in current track
   */
  public seekRelative(relativeOffset: number): Promise<void>;

  /**
   * Set seek interval for remote control
   */
  public setSeekIntervalSeconds(seconds: number): Promise<void>;

  /**
   * Setup event listener
   * @deprecated
   */
  public setPlaybackEventListener(listener: PlaybackEventListener): void;

  /**
   * Start new sleep timer
   */
  public setSleepTimer(milliseconds: number): void;

  /**
   * Get remaining sleep timer.
   */
  public getSleepTimerRemaining(): number;

  /**
   * Cancel/stop sleep timer.
   */
  public cancelSleepTimer(): void;

  /**
   * For internal use only. Used by the native service to emit events to nativescript layer.
   */
  public _onTimeChanged(currentTime: number, playlistIndex: number): void;
  public _onPlaying(): void;
  public _onPaused(): void;
  public _onStopped(): void;
  public _onSleepTimerChanged(): void;
  public _onEndOfTrackReached(endedTrackIndex: number): void;
  public _onEndOfPlaylistReached(): void;
  public _onBuffering(): void;
  public _onWaitingForNetwork(): void;
  public _onPlaybackError(errorData?: any): void;
}