export const notaAudioCategory = 'NotaAudioPlayer';
export { EventData } from '@nativescript/core/data/observable';
import { EventData } from '@nativescript/core/data/observable';

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
  Stopped = 'Stopped',
  Buffering = 'Buffering',
  Playing = 'Playing',
  Paused = 'Paused',
  EndOfTrackReached = 'EndOfTrackReached',
  EndOfPlaylistReached = 'EndOfPlaylistReached',
  EncounteredError = 'EncounteredError',
  TimeChanged = 'TimeChanged',
  SleepTimerChanged = 'SleepTimerChanged',
  SleepTimerEnded = 'SleepTimerEnded',
  WaitingForNetwork = 'WaitingForNetwork',
  PlaybackSuspend = 'PlaybackSuspend',
}

export enum PlaybackSuspend {
  None = 'none',
  FocusLoss = 'focus_lost',
  Unknown = 'unknown',
}

export interface PlaybackSuspendEventData extends EventData {
  eventName: 'PlaybackSuspend';
  reason: PlaybackSuspend;
}

export interface TimeChangedEventData extends EventData {
  eventName: 'TimeChanged';
  playlistIndex: number;
  currentTime: number;
  duration: number;
}

export interface PlayingEventData extends EventData {
  eventName: 'Playing';
  playlistIndex: number;
  currentTime: number;
  duration: number;
}

export interface PausedEventData extends EventData {
  eventName: 'Paused';
  playlistIndex: number;
  currentTime: number;
  duration: number;
}

export interface StoppedEventData extends EventData {
  eventName: 'Stopped';
}

export interface BufferingEventData extends EventData {
  eventName: 'Buffering';
}

export interface WaitingForNetworkEventData extends EventData {
  eventName: 'WaitingForNetwork';
}
export interface PlaybackErrorEventData extends EventData {
  eventName: 'EncounteredError';
}

export interface SleepTimerChangedEventData extends EventData {
  eventName: 'SleepTimerChanged';
  remaining: number;
}

export interface EndOfTrackReachedEventData extends EventData {
  eventName: 'EndOfTrackReached';
  endedTrackIndex: number;
}

export interface EndOfPlaylistReachedEventData extends EventData {
  eventName: 'EndOfPlaylistReached';
}

export interface SleepTimerEndedEventData extends EventData {
  eventName: 'SleepTimerEnded';
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
