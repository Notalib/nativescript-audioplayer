import { isIOS } from 'tns-core-modules/platform';
import * as trace from 'tns-core-modules/trace';

export const traceCategory = 'NotaAudioPlayer';

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

let instanceNo = 0;
export abstract class CommonAudioPlayer {
  protected instance = instanceNo++;

  protected readonly cls = `$TNSAudioPlayer.${isIOS ? 'ios' : 'android'}<${this.instance}>`;

  public android: any;
  public ios: any;
  public playlist: Playlist;

  protected _queuedSeekTo: number = null;
  protected _listener: PlaybackEventListener;
  public abstract isReady: Promise<any>;

  public abstract preparePlaylist(playlist: Playlist);
  public abstract play();
  public abstract pause();
  public abstract stop();
  public abstract isPlaying(): boolean;
  public abstract skipToNext();
  public abstract skipToPrevious();
  public abstract skipToPlaylistIndex(playlistIndex: number): void;
  public abstract setRate(rate: number);
  public abstract getRate(): number;
  public abstract getDuration(): number;
  public abstract getCurrentTime(): number;
  public abstract getCurrentPlaylistIndex(): number;
  public abstract seekTo(offset: number);
  public abstract setSeekIntervalSeconds(seconds: number): void;
  public abstract setSleepTimer(milliseconds: number);

  public getSleepTimerRemaining(): number {
    return this._sleepTimerMillisecondsLeft;
  }

  public cancelSleepTimer() {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.cancelSleepTimer()`, traceCategory);
    }

    if (this._sleepTimer !== undefined) {
      clearInterval(this._sleepTimer);
      this._sleepTimer = undefined;
      this._sleepTimerMillisecondsLeft = 0;
      this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
    }
  }

  protected _sleepTimer: number;
  protected _sleepTimerPaused: boolean = false;
  protected _sleepTimerMillisecondsLeft: number = 0;

  public pauseSleepTimer() {
    if (this._sleepTimer !== undefined) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.pauseSleepTimer()`, traceCategory);
      }
      this._sleepTimerPaused = true;
    }
  }

  public resumeSleepTimer() {
    if (this._sleepTimer !== undefined) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.resumeSleepTimer()`, traceCategory);
      }

      this._sleepTimerPaused = false;
    }
  }

  public abstract destroy();

  public loadPlaylist(playlist: Playlist, startIndex?: number, startOffset?: number) {
    this.preparePlaylist(playlist);
    if (startIndex !== undefined && startOffset) {
      this.skipToPlaylistIndexAndOffset(startIndex, startOffset);
    } else if (startIndex) {
      this.skipToPlaylistIndex(startIndex);
    }
  }

  public skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): void {
    if (this.getCurrentPlaylistIndex() === playlistIndex) {
      this.seekTo(offset);
    } else {
      if (offset > 0) {
        if (trace.isEnabled()) {
          trace.write(`Set queuedSeek to ${offset}`, traceCategory);
        }
        this._queuedSeekTo = offset;
      }

      this.skipToPlaylistIndex(playlistIndex);
    }
  }

  public seekRelative(relativeOffset: number): void {
    this.seekTo(Math.min(this.getDuration(), Math.max(0, this.getCurrentTime() + relativeOffset)));
  }

  public setPlaybackEventListener(listener: PlaybackEventListener) {
    this._listener = listener;
  }

  public getCurrentPlaylistUID(): string {
    return this.playlist ? this.playlist.UID : null;
  }

  protected _onPlaybackEvent(evt: PlaybackEvent, arg?: any) {
    if (this._listener) {
      this._listener.onPlaybackEvent(evt, arg);
    }
  }
}
