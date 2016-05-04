import {AudioPlayer, PlaybackStateChangedListener} from 'nativescript-audioplayer';
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

export abstract class CommonAudioPlayer implements AudioPlayer {
  
  public android: any;
  public ios: any;
  public message: string;
  public playlist: Playlist;
  public currentPlaylistIndex: number;
  private _listener: PlaybackStateChangedListener;

  constructor(playlist: Playlist) {
    this.playlist = playlist;
    console.log("CommonAudioPlayer created with playlist.length: "+ playlist.tracks.length);
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
  public abstract getCurrentTime();
  public abstract getCurrentPlaylistIndex();
  public abstract seekTo(milisecs: number, plalistIndex?: number);
  public abstract release();

  public setPlaybackStateChangeListener(listener: PlaybackStateChangedListener) {
    this._listener = listener;
  }

  protected _updateState(state: string) {
    if (this._listener) this._listener.onPlaybackStateChanged(state);
  }
}
