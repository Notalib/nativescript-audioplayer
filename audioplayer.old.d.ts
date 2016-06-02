export enum PlaybackEvent {
  Stopped,
  Opening,
  Playing,
  Paused,
  EndOfTrackReached,
  EndOfPlaylistReached
}

export interface PlaybackEventListener {
  onPlaybackEvent(evt: PlaybackEvent): void;
}

export class MediaTrack {
  constructor(url: string, title: string, artist: string, album: string, albumArtUrl: string)
  url: string;
  title: string;
  artist: string;
  album: string;
  albumArtUrl: string;
}

export class Playlist {
  constructor(...tracks : MediaTrack[])
  tracks: MediaTrack[];
  length: number;
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