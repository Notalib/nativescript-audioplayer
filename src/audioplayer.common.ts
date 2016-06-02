import * as app from 'application';
import { AudioPlayer, MediaTrack, Playlist, PlaybackEvent, PlaybackEventListener } from './types';

export * from './types';

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
