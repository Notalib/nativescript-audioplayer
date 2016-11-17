//import {PlaybackEvent} from 'nativescript-audioplayer';
import {CommonAudioPlayer, MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';
import * as app from 'application';

export {MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';

import lyt = dk.nota.lyt.libvlc;
import PlayerEvent = dk.nota.lyt.libvlc.media.MediaPlayerEvent;

export class AudioPlayer extends CommonAudioPlayer
{
  public _serviceHelper: lyt.PlaybackServiceHelper;
  public _service: lyt.PlaybackService;

  private _readyPromise: Promise<any>;
  
  public get isReady(): Promise<any> {
    return this._readyPromise;
  }

  constructor() {
    super();
    this.android = this;
    this._readyPromise = new Promise<any>((resolve, reject) => {
      this._serviceHelper = new lyt.PlaybackServiceHelper(app.android.context, new lyt.ConnectionCallback({
        onConnected: (service: lyt.PlaybackService) => {
          this._log("===== SERVICE CONNECTED =====");
          this._service = service;
          this.setupServiceCallbacks(service);
          this._log("- service has playlist UID: "+ service.getMediaListIdentifier());
          resolve();
        },
        onDisconnected: () => {
          this._log("===== SERVICE DISCONNECTED =====");
          this._service = null;
          this._readyPromise = Promise.reject('disconnected');
        }
      }));
      this._serviceHelper.onStart();
    });
  }

  private setupServiceCallbacks(service: lyt.PlaybackService) {
      service.setNotificationActivity(app.android.startActivity, "LAUNCHED_FROM_NOTIFICATION");
      service.removeAllCallbacks();
      service.addCallback(this.lytPlaybackEventHandler);
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

  public preparePlaylist(playlist: Playlist): void {
    if (this._service) {
      // Ensure callbacks are setup properly.
      this.setupServiceCallbacks(this._service);
      this.playlist = playlist;
      let mediaList = new java.util.ArrayList<lyt.media.MediaWrapper>();
      for (var track of this.playlist.tracks) {
        this._log('Creating MediaWrapper for: '+ track.title);
        mediaList.add(this.getNewMediaWrapper(track));
      }
      this._service.load(mediaList);
      this._log('Set playlist identifier = '+ playlist.UID);
      this._service.setMediaListIdentifier(playlist.UID);
    }
  }

  public getCurrentPlaylistIndex(): number {
    return this._service ? this._service.getCurrentMediaPosition() : -1;
  }

  public play() {
    if (this._service) {
      this._service.play();
    }
  }

  public pause() {
    if (this._service) {
      this._service.pause();
    }
  }

  public stop() {
    if (this._service) {
      this._service.stopPlayback();
    }
  }

  public isPlaying(): boolean {
    return this._service && this._service.isPlaying();
  }

  public seekTo(offset: number) {
    if (this._service && this._service.hasMedia()) {
      this._service.setTime(offset);
    }
  }

  public skipToNext() {
    if (this._service && this._service.hasNext()) {
      this._service.next();
    }
  }

  public skipToPrevious() {
    if (this._service && this._service.hasPrevious()) {
      this._service.previous();
    }
  }

  public skipToPlaylistIndex(playlistIndex: number) {
    if (this._service) {
      this._service.playIndex(playlistIndex, 0);
    }
  }

  public setRate(rate: number) {
    if (this._service) {
      this._service.setRate(rate);
    }
  }

  public getRate() {
    return this._service ? this._service.getRate() : 1;
  }

  public getDuration() {
    if (this._service) {
      return this._service.getLength();
    }
  }

  public getCurrentTime(): number {
    if (this._service) {
      return this._service.getTime();
    }
  }

  /* Override */
  public getCurrentPlaylistUID(): string {
    if (this._service) {
      return this._service.getMediaListIdentifier();
    } else {
      return null;
    }
  }

  setSleepTimer(millisecs: number) {
    if (this._service) {
      this._service.setSleepTimer(millisecs);
    }
  }

  getSleepTimerRemaining(): number {
    if (this._service) {
      const remain = this._service.getSleepTimerRemaining();
      this._log('REMAINING '+ remain);
      return this._service.getSleepTimerRemaining();
    }
  }

  cancelSleepTimer() {
    if (this._service) {
      this._service.cancelSleepTimer();
    }
  }

  release() {
    // Do not kill the background service if it is still playing.
    if (this._service && !this._service.isPlaying()) {
      this._log('Stopping PlaybackService');
      this._service.stopService();
    }
    this._serviceHelper.onStop();
    delete this._service;
    delete this._serviceHelper;
  }

  private lytPlaybackEventHandler = new lyt.PlaybackEventHandler({
      update: () => {
        // this._log('update');
      },
      updateProgress: () => {
        // this._log('progress');
      },
      onMediaEvent: (event: lyt.media.MediaEvent) => {
        this._log('mediaEvent: '+ event.type);
        if (event.type == lyt.media.MediaEvent.MetaChanged) {
          this._log('^ MetaChanged ==');
        } else if (event.type == lyt.media.MediaEvent.ParsedChanged) {
          this._log('^ ParsedChanged ==');
        } else if (event.type == lyt.media.MediaEvent.StateChanged) {
          this._log('^ StateChanged ==');
        }
      },
      onMediaPlayerEvent: (event: PlayerEvent) => {
        //TODO: Simplify: VLCToClientEventMap
        if (event.type == PlayerEvent.SeekableChanged) {
          //this._log('^ SeekableChanged ==');
          if (event.getSeekable() == true && this._queuedSeekTo !== null) {
            this._log('Executing queued SeekTo: '+ this._queuedSeekTo);
            this.seekTo(this._queuedSeekTo);
            this._queuedSeekTo = null;
          }
        } else if (event.type == PlayerEvent.PausableChanged) {
        } else if (event.type == PlayerEvent.TimeChanged) {
          this._onPlaybackEvent(PlaybackEvent.TimeChanged, event.getTimeChanged());
        } else if (event.type == PlayerEvent.MediaChanged) {
        } else if (event.type == PlayerEvent.Opening) {
          this._onPlaybackEvent(PlaybackEvent.Opening);
        } else if (event.type == PlayerEvent.Playing) {
          this._onPlaybackEvent(PlaybackEvent.Playing);
        } else if (event.type == PlayerEvent.Paused) {
          this._onPlaybackEvent(PlaybackEvent.Paused);
        } else if (event.type == PlayerEvent.Stopped) {
          this._onPlaybackEvent(PlaybackEvent.Stopped);
        } else if (event.type == PlayerEvent.EndReached) {
          this._onPlaybackEvent(PlaybackEvent.EndOfTrackReached);
          if (this.getCurrentPlaylistIndex() >= this.playlist.length - 1) {
            this._onPlaybackEvent(PlaybackEvent.EndOfPlaylistReached);
          }
        } else if (event.type == PlayerEvent.SleepTimerReached) {
          this._onPlaybackEvent(PlaybackEvent.SleepTimerReached);
        } else if (event.type == PlayerEvent.SleepTimerCancelled) {
          this._onPlaybackEvent(PlaybackEvent.SleepTimerCancelled);
        } else if (event.type == PlayerEvent.EncounteredError) {
          this._onPlaybackEvent(PlaybackEvent.EncounteredError);
          this._log('== Playback ERROR ==');
          //throw new Error("Android PlaybackService encountered an error");
        } else {
          //this._log('^ Unhandled PlayerEvent: '+ event.type);
        }
      }
    });

  
}
