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
  message: string;
  playlist: Playlist;

  addToPlaylist(track: MediaTrack): void;
  play(): void;
  pause(): void;
  stop(fullStop: boolean): void;
  skipToNext(): void;
  skipToPrevious(): void;
  setRate(rate: number): void;
  getRate(): number;
  getDuration(): number;
  /**
   * Returns offset of the currently played track in miliseconds.
   */
  getCurrentTime(): number;
  /**
   * Seeks to a specific offset in miliseconds of the current track.
   * Optionally skips to a specific playlist index before seeking.
   */
  getCurrentPlaylistIndex(): number;
  seekTo(milisecs: number, playlistIndex?: number): void;
  setPlaybackEventListener(listener: PlaybackEventListener): void;
  release(): void;
}

export var AudioPlayer: {
  new (playlist: Playlist) : AudioPlayer;
}

export interface PlaybackEventListener {
  onPlaybackEvent(evt: PlaybackEvent): void;
}