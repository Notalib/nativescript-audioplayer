import { Playlist, MediaTrack, PlaybackEvent, PlaybackEventListener } from './audioplayer.common';
export { Playlist, MediaTrack, PlaybackEvent, PlaybackEventListener };

export class TNSAudioPlayer {
  debugOutputEnabled: boolean;
  playlist: Playlist;
  isReady: Promise<any>;
  loadPlaylist(playlist: Playlist, startIndex?: number, startOffset?: number): any;
  play(): void;
  pause(): void;
  stop(): void;
  isPlaying(): boolean;
  skipToNext(): void;
  skipToPrevious(): void;
  skipToPlaylistIndex(playlistIndex: number): void;
  skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): void;
  setRate(rate: number): void;
  getRate(): number;
  getDuration(): number;
  getCurrentTime(): number;
  getCurrentPlaylistIndex(): number;
  getCurrentPlaylistUID(): string;
  seekTo(offset: number): void;
  seekRelative(relativeOffset: number): void;
  setSeekIntervalSeconds(seconds: number): void;
  setPlaybackEventListener(listener: PlaybackEventListener): void;
  setSleepTimer(millisecs: number): any;
  getSleepTimerRemaining(): number;
  cancelSleepTimer(): any;
  destroy(): void;
}
