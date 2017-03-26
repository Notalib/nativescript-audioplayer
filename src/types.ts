export class MediaTrack {
  constructor(url: string, title: string, artist: string, album: string, albumArtUrl: string) {
    this.url = url;
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.albumArtUrl = albumArtUrl;
  }
  public url: string;
  public title: string;
  public artist: string;
  public album: string;
  public albumArtUrl: string;
}

export class Playlist {
  constructor(UID: string, ...tracks: MediaTrack[]) {
    this.UID = UID;
    this.tracks = tracks;
  }
  public UID: string;
  public tracks: MediaTrack[];
  public get length(): number {
    return this.tracks.length;
  }
}

export enum PlaybackEvent {
  Stopped,
  Buffering,
  Playing,
  Paused,
  EndOfTrackReached,
  EndOfPlaylistReached,
  EncounteredError,
  TimeChanged,
  SleepTimerChanged,
  WaitingForNetwork,
}

export interface Config {
  /**
   * Max number of retry attempts before considering streaming failed
   */
  maxNetworkRetryCount: number;
  /**
   * Required number of seconds buffered before starting playback
   */
  requiredPrebufferSizeInSeconds: number;
}

export interface AudioPlayer {
  debugOutputEnabled: boolean;
  playlist: Playlist;
  /**
   * Promise which resolves when the AudioPlayer is ready to receive commands.
   * Mostly useful during startup
   */
  isReady: Promise<any>;
  loadPlaylist(playlist: Playlist, startIndex?: number, startOffset?: number);
  play(): void;
  pause(): void;
  stop(): void;
  isPlaying(): boolean;
  skipToNext(): void;
  skipToPrevious(): void;
  /*
   * Skip to specific playlist index and optionally seek directly to an offset.
   */
  skipToPlaylistIndex(playlistIndex: number): void;
  skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): void;
  setRate(rate: number): void;
  getRate(): number;
  getDuration(): number;
  /**
   * Returns offset of the currently played track in miliseconds.
   */
  getCurrentTime(): number;
  getCurrentPlaylistIndex(): number;
  getCurrentPlaylistUID(): string;
  /**
   * Seeks to a specific offset in miliseconds of the current track.
   */
  seekTo(offset: number): void;
  /**
   * Seeks to an offset in miliseconds relative to the current time of the current track.
   */
  seekRelative(relativeOffset: number): void;
  /**
   * Sets seek interval. Supports 5, 15, 30 and 60 on Android, any on iOS.
   */
  setSeekIntervalSeconds(seconds: number): void;
  setPlaybackEventListener(listener: PlaybackEventListener): void;
  /**
   * Sets an inactivity sleep timer.
   * Automatically cancelled when a new timer is set,
   * or when playback is manually paused, stopped or reaches end of playlist.
   */
  setSleepTimer(millisecs: number);
  getSleepTimerRemaining(): number;
  cancelSleepTimer();
  /** 
   * Destroys all resources associated with the player.
   */
  destroy(): void;
  /**
   * Old name of destroy call, will be deprecated.
   * Kept for backwards compatibility for now.
   */
  release(): void;
}

export var AudioPlayer: {
  new() : AudioPlayer;
}

export interface PlaybackEventListener {
  onPlaybackEvent(evt: PlaybackEvent, arg?: any): void;
}