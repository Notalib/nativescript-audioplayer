import {AudioPlayer, PlaybackEventListener} from 'nativescript-audioplayer';
import * as app from 'application';

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

export abstract class CommonAudioPlayer implements AudioPlayer {
  
  public android: any;
  public ios: any;
  public message: string;
  public playlist: Playlist;
  private _listener: PlaybackEventListener;

  constructor(playlist: Playlist) {
    this.playlist = playlist;
    this._log("CommonAudioPlayer created with playlist.length: "+ playlist.tracks.length);
    this.message = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;
  }

  public abstract addToPlaylist(track: MediaTrack);
  public abstract play();
  public abstract pause();
  public abstract stop(fullStop: boolean);
  public abstract skipToNext();
  public abstract skipToPrevious();
  public abstract setRate(rate: number);
  public abstract getRate(): number;
  public abstract getDuration(): number;
  public abstract getCurrentTime(): number;
  public abstract getCurrentPlaylistIndex(): number;
  public abstract seekTo(milisecs: number, playlistIndex?: number);
  public abstract release();

  public setPlaybackEventListener(listener: PlaybackEventListener) {
    this._listener = listener;
  }

  protected _onPlaybackEvent(evt: PlaybackEvent) {
    if (this._listener) this._listener.onPlaybackEvent(evt);
  }
  
  protected _log(...args: any[]) {
    console.log('tns-audioplayer: %s', ...args);
  }
}
