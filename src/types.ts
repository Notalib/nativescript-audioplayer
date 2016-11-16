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
  constructor(...tracks: MediaTrack[]) {
    this.tracks = tracks;
  }
  public tracks: MediaTrack[];
  public get length(): number {
    return this.tracks.length;
  }
}

export enum PlaybackEvent {
  Stopped,
  Opening,
  Playing,
  Paused,
  EndOfTrackReached,
  EndOfPlaylistReached
}

export interface AudioPlayer {
  playlist: Playlist;
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
  /**
   * Seeks to a specific offset in miliseconds of the current track.
   */
  seekTo(offset: number): void;
  /**
   * Seeks to an offset in miliseconds relative to the current time of the current track.
   */
  seekRelative(relativeOffset: number): void;
  setPlaybackEventListener(listener: PlaybackEventListener): void;
  release(): void;
}

export var AudioPlayer: {
  new() : AudioPlayer;
}

export interface PlaybackEventListener {
  onPlaybackEvent(evt: PlaybackEvent): void;
}