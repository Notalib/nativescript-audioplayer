import {PlaybackStateChangedListener} from 'nativescript-audioplayer';
import {CommonAudioPlayer, MediaTrack, Playlist} from './audioplayer.common';
import * as app from 'application';

export {MediaTrack, Playlist} from './audioplayer.common';

import lyt = dk.nota.lyt.libvlc;

export class AudioPlayer extends CommonAudioPlayer
{
  public _serviceHelper: lyt.PlaybackServiceHelper;
  public _service: lyt.PlaybackService;
  private _libVLC: any;
  private _currentIndex: number = 0;
  private _queuedSeekTo: number = -1;

  constructor(playlist: Playlist) {
    super(playlist);
    this.android = this;
    this._serviceHelper = new lyt.PlaybackServiceHelper(app.android.context, new lyt.ConnectionCallback({
        onConnected: (service: lyt.PlaybackService) => {
            console.log("===== SERVICE CONNECTED =====");
            this._service = service;
            service.setNotificationActivity(app.android.startActivity, "LAUNCHED_FROM_NOTIFICATION");
            let mediaList = new java.util.ArrayList<lyt.media.MediaWrapper>();
            for (var track of this.playlist.tracks) {
              console.log('track-title: '+ track.title);
              mediaList.add(this.getNewMediaWrapper(track));
            }
            // service.addCallback(new lyt.PlaybackEventHandler({
            //   update() {
            //     console.log('update');
            //   },
            //   updateProgress() {
            //     console.log('progress');
            //   },
            //   onMediaEvent(event: lyt.media.MediaEvent) {
            //     console.log('mediaEvent');
            //   },
            //   onMediaPlayerEvent(event: lyt.media.MediaPlayerEvent) {
            //     console.log('mediaPlayerEvent');
            //   }
            // }));
            service.load(mediaList, 0);
        },
        onDisconnected: () => {
            console.log("===== SERVICE DISCONNECTED =====");
        }
    }));
    this._serviceHelper.onStart();
    // TODO: IMPLEMENT MediaListPlayer?
    // this.addToPlaylist(paths);
    // if (this._playlist.length > 0) {
    //   this._player.setMedia(this._playlist[0]);
    // }
    // console.log("Created player.android: "+ this._player);
    // this._player.setOnPreparedListener(this);
    // this._player.setOnSeekCompleteListener(this);
  }
  
  private getNewMediaWrapper(track: MediaTrack): lyt.media.MediaWrapper {
    let uri: android.net.Uri = lyt.Utils.LocationToUri(track.url);
    let media: lyt.media.MediaWrapper = new lyt.media.MediaWrapper(uri);
    media.setDisplayTitle(track.title);
    media.setArtist(track.artist);
    media.setAlbum(track.album);
    media.setArtworkURL(track.albumArtUrl);
    return media;
  }
  
  public addToPlaylist(track: MediaTrack) {
  }
  
  public getCurrentPlaylistIndex() {
  }

  public play() {
    this._service.play();
  }

  public pause() {
    this._service.pause();
  }

  public stop(fullStop: boolean) {
    this._service.stopPlayback();
  }

  public seekTo(milisecs: number, playlistIndex?: number) {
    if (playlistIndex != null) {
      this.skipToIndex(playlistIndex);
      this._queuedSeekTo = milisecs;
    } else {
      this._service.setTime(milisecs);
    }
  }
  
  public skipToNext() {
    if (this._currentIndex < this.playlist.length - 1) {
      this.skipToIndex(this._currentIndex + 1);
    }
  }
  
  public skipToPrevious() {
    if (this._currentIndex > 0) {
      this.skipToIndex(this._currentIndex - 1)
    }
  }
  
  private skipToIndex(newPlaylistIndex: number) {
    console.log ("playlist size "+ this.playlist.length);
    console.log ("skipping to "+ (newPlaylistIndex));
    this._currentIndex = newPlaylistIndex;
    //TODO: Implemenet properly
    this._service.next();
  }
  
  public setRate(rate: number) {
    this._service.setRate(rate);
  }
  
  public getRate() {
    return this._service.getRate();
  }
  
  public getDuration() {
    return this._service.getTime();
  }
  
  public getCurrentTime() {
    return this._service.getTime();
  }

  public onPrepared(mp: android.media.MediaPlayer) {
    console.log("onPrepared");
  }

  public onSeekComplete(mp: android.media.MediaPlayer) {
    console.log("def.State ");
    this._updateState("STATE_PLAYING");
  }
  
  public release() {
    this._service.stopService();
    this._serviceHelper.onStop();
  }
}
