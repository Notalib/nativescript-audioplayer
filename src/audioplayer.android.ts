/// <reference path="./native-definitions/libvlc-service.d.ts" />

import { CommonAudioPlayer, MediaTrack, Playlist, PlaybackEvent } from './audioplayer.common';
import * as app from 'tns-core-modules/application';

export { MediaTrack, Playlist, PlaybackEvent } from './audioplayer.common';

interface TNSConnectionCallback {
  isConnected: boolean;
}
let TNSConnectionCallback: new (owner: WeakRef<TNSAudioPlayer>,
                                resolve: (value?: any) => void,
                                reject: (reason?: any) => void) => dk.nota.lyt.libvlc.ConnectionCallback;
function ensureTNSConnectionCallback() {
  if (TNSConnectionCallback) {
    return;
  }

  @Interfaces([dk.nota.lyt.libvlc.ConnectionCallback])
  class TNSConnectionCallbackImpl extends java.lang.Object {

    constructor(private owner: WeakRef<TNSAudioPlayer>,
                private resolve: (value?: any) => void,
                private reject: (reason?: any) => void) {
      super();
      return global.__native(this);
    }

    public onConnected(service: dk.nota.lyt.libvlc.PlaybackService) {
      if (this.owner.get()) {
        this.owner.get().onConnected(service);
        this.resolve();
      } else {
        this.reject();
      }
    }

    public onDisconnected() {
      if (this.owner.get()) {
        this.owner.get().onDisconnected();
      }
      this.reject();
    }
  }

  TNSConnectionCallback = TNSConnectionCallbackImpl;
}

export class TNSAudioPlayer extends CommonAudioPlayer
{
  public service: dk.nota.lyt.libvlc.PlaybackService;

  private _serviceHelper: dk.nota.lyt.libvlc.PlaybackServiceHelper;
  private _callback: any;
  private _readyPromise: Promise<any>;

  public get isReady(): Promise<any> {
    if (!this._readyPromise) {
      this._readyPromise = new Promise<any>((resolve, reject) => {
        ensureTNSConnectionCallback();
        this._callback = new TNSConnectionCallback(new WeakRef(this), resolve, reject);
        this._serviceHelper = new dk.nota.lyt.libvlc.PlaybackServiceHelper(app.android.context, this._callback);
        this._serviceHelper.onStart();
      });
    }
    return this._readyPromise;
  }

  constructor() {
    super();
    this.android = this;
    this.isReady.then(() => {
      this._log(`PlaybackService -> Ready!`);
    }).catch(() => {
      this._log(`PlaybackService -> Failed to ready!`);
    });
  }

  public onConnected(service: dk.nota.lyt.libvlc.PlaybackService) {
    this._log("PlaybackService - Connected");
    this.setupServiceCallbacks(service);
    this.service = service;
    if (service.getMediaListIdentifier()) {
      this._log("- existing playlist ID: "+ service.getMediaListIdentifier());
    }
  }

  public onDisconnected() {
    this._log("PlaybackService - Disconnected");
    this.service = null;
    this._serviceHelper.onStop();
    this._serviceHelper = null;
    this._readyPromise = null;
  }

  private setupServiceCallbacks(service: dk.nota.lyt.libvlc.PlaybackService) {
    service.setNotificationActivity(app.android.startActivity, "LAUNCHED_FROM_NOTIFICATION");
    service.removeAllCallbacks();
    service.addCallback(this.lytPlaybackEventHandler);
  }

  private getNewMediaWrapper(track: MediaTrack): dk.nota.lyt.libvlc.media.MediaWrapper {
    let uri: android.net.Uri = dk.nota.lyt.libvlc.Utils.LocationToUri(track.url);
    let media: dk.nota.lyt.libvlc.media.MediaWrapper = new dk.nota.lyt.libvlc.media.MediaWrapper(uri);
    media.setDisplayTitle(track.title);
    media.setArtist(track.artist);
    media.setAlbum(track.album);
    media.setArtworkURL(track.albumArtUrl);
    return media;
  }

  public preparePlaylist(playlist: Playlist): void {
    if (this.service) {
      this.service.stopPlayback();
      // Ensure callbacks are setup properly.
      this.setupServiceCallbacks(this.service);
      this.playlist = playlist;
      let mediaList = new java.util.ArrayList<dk.nota.lyt.libvlc.media.MediaWrapper>();
      for (var track of this.playlist.tracks) {
        // this._log('Creating MediaWrapper for: '+ track.title);
        mediaList.add(this.getNewMediaWrapper(track));
      }
      this.service.load(mediaList);
      this._log('Set playlist identifier = '+ playlist.UID);
      this.service.setMediaListIdentifier(playlist.UID);
    }
  }

  public getCurrentPlaylistIndex(): number {
    return this.service ? this.service.getCurrentMediaPosition() : -1;
  }

  public play() {
    if (this.service) {
      // Ensure callbacks are setup properly,
      // since service could have been reset during a pause.
      this.setupServiceCallbacks(this.service);
      this.service.play();
    }
  }

  public pause() {
    if (this.service) {
      this.service.pause();
    }
  }

  public stop() {
    if (this.service) {
      this.service.stopPlayback();
      // On Android the playback service is stopped on stopPlayback,
      // so we have to manually send the Stopped event to our listener.
      this._listener.onPlaybackEvent(PlaybackEvent.Stopped);
    }
  }

  public isPlaying(): boolean {
    return !!(this.service && this.service.isPlaying());
  }

  public seekTo(offset: number) {
    if (this.service && this.service.hasMedia()) {
      this.service.setTime(offset);
    }
  }

  public skipToNext() {
    if (this.service && this.service.hasNext()) {
      this.service.next();
    }
  }

  public skipToPrevious() {
    if (this.service && this.service.hasPrevious()) {
      this.service.previous();
    }
  }

  public skipToPlaylistIndex(playlistIndex: number) {
    if (this.service) {
      this.service.playIndex(playlistIndex, 0);
    }
  }

  public setRate(rate: number) {
    if (this.service) {
      this.service.setRate(rate);
    }
  }

  public getRate() {
    return this.service ? this.service.getRate() : 1;
  }

  public getDuration() {
    if (this.service) {
      return this.service.getLength();
    } else {
      return 0;
    }
  }

  public getCurrentTime(): number {
    if (this.service) {
      return this.service.getTime();
    } else {
      return 0;
    }
  }

  /* Override */
  public getCurrentPlaylistUID(): string {
    if (this.service) {
      return this.service.getMediaListIdentifier();
    } else {
      return null;
    }
  }

  setSleepTimer(millisecs: number) {
    if (this.service) {
      this.service.setSleepTimer(millisecs);
    }
  }

  getSleepTimerRemaining(): number {
    if (this.service) {
      return this.service.getSleepTimerRemaining();
    } else {
      return 0;
    }
  }

  cancelSleepTimer() {
    if (this.service) {
      this.service.cancelSleepTimer();
    }
  }

  setSeekIntervalSeconds(seconds: number) {
    if (this.service) {
      this.service.setSeekIntervalSeconds(seconds);
    }
  }

  destroy() {
    this._log('Destroy');
    // Do not kill the background service if it is still playing.
    if (this.service && !this.service.isPlaying()) {
      this._log('Stopping PlaybackService');
      this.service.stopService();
    }
    this._serviceHelper.onStop();
    delete this.service;
    delete this._callback;
    delete this._serviceHelper;
    delete this._readyPromise;
  }

  private lytPlaybackEventHandler = new dk.nota.lyt.libvlc.PlaybackEventHandler({
      update: () => {
        // this._log('update');
      },
      updateProgress: () => {
        // this._log('progress');
      },
      onMediaEvent: (event: dk.nota.lyt.libvlc.media.MediaEvent) => {
        // this._log('mediaEvent: '+ event.type);
        if (event.type == dk.nota.lyt.libvlc.media.MediaEvent.MetaChanged) {
          // this._log('^ MetaChanged ==');
        } else if (event.type == dk.nota.lyt.libvlc.media.MediaEvent.ParsedChanged) {
          // this._log('^ ParsedChanged ==');
        } else if (event.type == dk.nota.lyt.libvlc.media.MediaEvent.StateChanged) {
          // this._log('^ StateChanged ==');
        }
      },
      onMediaPlayerEvent: (event: dk.nota.lyt.libvlc.media.MediaPlayerEvent) => {
        const PlayerEvent = dk.nota.lyt.libvlc.media.MediaPlayerEvent;
        //TODO: Simplify: VLCToClientEventMap
        if (event.type == PlayerEvent.SeekableChanged) {
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
          this._onPlaybackEvent(PlaybackEvent.Buffering);
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
        } else if (event.type == PlayerEvent.SleepTimerChanged) {
          this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
        } else if (event.type == PlayerEvent.WaitingForNetwork) {
          this._onPlaybackEvent(PlaybackEvent.WaitingForNetwork);
        } else if (event.type == PlayerEvent.Buffering) {
          // This only tells % of the buffer-size required to start playback
          //this._onPlaybackEvent(PlaybackEvent.Buffering, event.getBuffering());
        } else if (event.type == PlayerEvent.EncounteredError) {
          this._log('PlayerEvent.EncounteredError');
          this._onPlaybackEvent(PlaybackEvent.EncounteredError);
          //throw new Error("Android PlaybackService encountered an error");
        } else {
          // this._log('^ Unhandled PlayerEvent: '+ event.type);
        }
      }
    });

  private isServiceRunning(serviceClassName: string) {
    const manager: android.app.ActivityManager = app.android.context.getSystemService(android.content.Context.ACTIVITY_SERVICE);
    const runningServices = manager.getRunningServices(100000);
    for (let i = 0; i < runningServices.size(); i++) {
      const service = runningServices.get(i);
      if (serviceClassName === service.service.getClassName()) {
        return true;
      }
    }
    return false;
  }
}
