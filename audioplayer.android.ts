//import * as def from 'nativescript-audioplayer';
import {CommonAudioPlayer} from './audioplayer.common';
import * as app from 'application';

// namespace alias
import vlc = org.videolan.libvlc;

export enum EventType {
    MediaChanged = 0x100,
    Opening = 0x102,
    Playing = 0x104,
    Paused = 0x105,
    Stopped = 0x106,
    EndReached = 0x109,
    EncounteredError = 0x10a,
    TimeChanged = 0x10b,
    PositionChanged = 0x10c,
    SeekableChanged = 0x10d,
    PausableChanged = 0x10e
  }

export class AudioPlayer extends CommonAudioPlayer
  implements vlc.MediaPlayer.EventListener
{
  public _player: vlc.MediaPlayer;
  private _libVLC: vlc.LibVLC;
  private _playlist: vlc.Media[] = new Array<vlc.Media>();
  private _currentIndex: number = 0;
  private _queuedSeekTo: number = -1;
  get _currentMedia(): vlc.Media {
    return this._playlist[this._currentIndex];
  }

  constructor(paths: string[]) {
    super(paths);
    this.android = this;
    //this._player = android.media.MediaPlayer.create(app.android.context, android.net.Uri.parse(this._path));
    let options = new java.util.ArrayList<string>();
    options.add("--http-reconnect");
    options.add("--network-caching=2000");
    this._libVLC = new vlc.LibVLC(options);
    this._player = new vlc.MediaPlayer(this._libVLC);
    this._player.setEventListener(new vlc.MediaPlayer.EventListener({
      onEvent: (evt: vlc.MediaPlayer.Event) => {
        this.onEvent(evt);
      }
    }));
    // TODO: IMPLEMENT MediaListPlayer?
    this.addToPlaylist(paths);
    if (this._playlist.length > 0) {
      this._player.setMedia(this._playlist[0]);
    }
    console.log("Created player.android: "+ this._player);
    // this._player.setOnPreparedListener(this);
    // this._player.setOnSeekCompleteListener(this);
  }
  
  public onEvent(event: vlc.MediaPlayer.Event) {
      switch(event.type) {
        case EventType.Opening:
          break;
        case EventType.Playing:
          break;
        case EventType.Stopped:
          break;
        case EventType.EndReached: {
          console.log("-- END REACHED!");
          this.skipToNext();
          break;
        }
        default:
          //console.log("Receied MediaPlayer event: "+ event.type);
          break;
      }
      if (event.type == EventType.EndReached) {
        console.log("-- END REACHED!");
        this.skipToNext();
      }
      else if (event.type == EventType.EncounteredError) {
        console.log("-- PLAYBACK ERROR!");
      }
      else if (event.type == EventType.TimeChanged) {
        console.log("-- Time Changed: "+ event.getTimeChanged());
      }
      else if (event.type == EventType.SeekableChanged
          && event.getSeekable() && this._queuedSeekTo >= 0) {
        console.log("CAUGHT QUEUED SEEK: "+ this._queuedSeekTo);
        this.seekTo(this._queuedSeekTo);
        this._queuedSeekTo = -1;
      } else {
        
      }
  }
  
  public addToPlaylist(paths: string[]) {
    for (let path of paths) {
      console.log("Adding to playlist path: "+ path);
      let uri: android.net.Uri = vlc.util.AndroidUtil.LocationToUri(path);
      let media: vlc.Media = new vlc.Media(this._libVLC, uri);
      this._playlist.push(media);
    }
  }

  public play() {
    this._player.play();
  }

  public pause() {
    this._player.pause();
  }

  public seekTo(milisecs: number, playlistIndex?: number) {
    if (playlistIndex != null) {
      this.skipToIndex(playlistIndex);
      this._queuedSeekTo = milisecs;
    } else {
      this._player.setTime(milisecs);
    }
  }

  public stop(fullStop: boolean) {
    this._player.stop();
  }
  
  public skipToNext() {
    if (this._currentIndex < this._playlist.length - 1) {
      this.skipToIndex(this._currentIndex + 1);
    }
  }
  
  public skipToPrevious() {
    if (this._currentIndex > 0) {
      this.skipToIndex(this._currentIndex - 1)
    }
  }
  
  private skipToIndex(newPlaylistIndex: number) {
    console.log ("playlist size "+ this._playlist.length);
    console.log ("skipping to "+ (newPlaylistIndex));
    this._currentIndex = newPlaylistIndex;
    this.stop(false);
    let nextMedia: vlc.Media = this._playlist[newPlaylistIndex];
    console.log("next media is: "+ nextMedia.getMeta(0)); // 0 = Title
    this._player.setMedia(nextMedia);
    this._player.play();
  }
  
  public setRate(rate: number) {
    this._player.setRate(rate);
  }
  
  public getRate() {
    return this._player.getRate();
  }
  
  public getDuration() {
    return this._player.getLength();
    //return this._media.getDuration();
  }
  
  public getCurrentTimeMilis() {
    return this._player.getTime();
  }

  public onPrepared(mp: android.media.MediaPlayer) {
    console.log("onPrepared");
  }

  public onSeekComplete(mp: android.media.MediaPlayer) {
    console.log("def.State ");
    this._updateState("STATE_PLAYING");
  }
  
  public release() {
    throw new Error("Not implemented");
  }
}
