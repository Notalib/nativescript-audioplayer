export const notaAudioCategory = 'NotaAudioPlayer';

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
  public tracks: MediaTrack[];
  public get length(): number {
    return this.tracks.length;
  }
  constructor(public UID: string, ...tracks: MediaTrack[]) {
    this.UID = UID;
    this.tracks = tracks;
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

export interface PlaybackEventListener {
  onPlaybackEvent(evt: PlaybackEvent, arg?: any): void;
}
