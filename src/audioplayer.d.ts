import { Playlist, MediaTrack, PlaybackEvent, PlaybackEventListener } from './audioplayer.types';

export class TNSAudioPlayer {
  playlist: Playlist;
  loadPlaylist(playlist: Playlist, startIndex?: number, startOffset?: number): Promise<void>;
  play(): Promise<void>;
  pause(): Promise<void>;
  stop(): Promise<void>;
  isPlaying(): boolean;
  skipToNext(): Promise<void>;
  skipToPrevious(): Promise<void>;
  skipToPlaylistIndex(playlistIndex: number): Promise<void>;
  skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): Promise<void>;
  setRate(rate: number): Promise<void>;
  getRate(): number;
  getDuration(): number;
  getCurrentTime(): number;
  getCurrentPlaylistIndex(): number;
  getCurrentPlaylistUID(): string;
  seekTo(offset: number): Promise<void>;
  seekRelative(relativeOffset: number): Promise<void>;
  setSeekIntervalSeconds(seconds: number): Promise<void>;
  setPlaybackEventListener(listener: PlaybackEventListener): Promise<void>;
  setSleepTimer(milliseconds: number): Promise<void>;
  getSleepTimerRemaining(): number;
  cancelSleepTimer(): Promise<void>;
  destroy(): void;
  _onPlaybackEvent(evt: PlaybackEvent, args?: any);
}

export * from './audioplayer.types';
