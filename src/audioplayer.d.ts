import { Playlist, MediaTrack, PlaybackEvent, PlaybackEventListener } from './audioplayer.types';

export class TNSAudioPlayer {
  /**
   * Load new playlist
   */
  loadPlaylist(playlist: Playlist, startIndex?: number, startOffset?: number): Promise<void>;

  /**
   * Start playback
   */
  play(): Promise<void>;

  /**
   * Pause playback
   */
  pause(): Promise<void>;

  /**
   * Stop playback and unload playlist
   */
  stop(): Promise<void>;

  /**
   * Is currently playing?
   */
  isPlaying(): Promise<boolean>;

  /**
   * Skip to previous item
   */
  skipToPrevious(): Promise<void>;

  /**
   * Skip to next item.
   */
  skipToNext(): Promise<void>;

  /**
   * Skip to the start of a new playlist index
   */
  skipToPlaylistIndex(playlistIndex: number): Promise<void>;

  /**
   * Skip to the offset of a new playlist index
   */
  skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): Promise<void>;

  /**
   * Seek to offset in current track
   */
  seekTo(offset: number): Promise<void>;

  /**
   * Set playbackRate
   */
  setRate(rate: number): Promise<void>;

  /**
   * Get playbackRate
   */
  getRate(): Promise<number>;

  /**
   * Get duration of current track
   */
  getDuration(): Promise<number>;

  /**
   * Get current time offset
   */
  getCurrentTime(): Promise<number>;

  /**
   * Get the current playlist index
   */
  getCurrentPlaylistIndex(): Promise<number>;

  /**
   * Playlist UID
   */
  getCurrentPlaylistUID(): string;

  /**
   * Seek relative in current track
   */
  seekRelative(relativeOffset: number): Promise<void>;

  /**
   * Set seek interval for remote control
   */
  setSeekIntervalSeconds(seconds: number): Promise<void>;

  /**
   * Setup event listener
   */
  setPlaybackEventListener(listener: PlaybackEventListener): Promise<void>;

  /**
   * Start new sleep timer
   */
  setSleepTimer(milliseconds: number): Promise<void>;

  /**
   * Get remainting sleep timer.
   */
  getSleepTimerRemaining(): number;

  /**
   * Cancel/stop sleep timer.
   */
  cancelSleepTimer(): Promise<void>;

  /**
   * For internal use only. Used by the native service to emit events to nativescript layer.
   */
  _onPlaybackEvent(evt: PlaybackEvent, args?: any);
}