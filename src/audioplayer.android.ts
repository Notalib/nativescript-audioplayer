import * as nsApp from 'tns-core-modules/application';
import * as trace from 'tns-core-modules/trace';
import { traceWrite } from 'tns-core-modules/ui/page/page';
import * as utils from 'tns-core-modules/utils/utils';
import { CommonAudioPlayer } from './audioplayer-common';
import { notaAudioCategory, PlaybackEvent, Playlist } from './audioplayer.types';
import './foreground-service';

export class TNSAudioPlayer extends CommonAudioPlayer {
  private get context() {
    return utils.ad.getApplicationContext() as android.content.Context;
  }

  private mediaServicePromise: Promise<dk.nota.MediaService>;
  private mediaServiceResolve: (mediaService: dk.nota.MediaService) => void;
  private mediaServiceReject: (error: any) => void;

  private get mediaServiceLoaded() {
    return !!this._mediaService;
  }

  private _mediaService: dk.nota.MediaService;

  private get mediaService() {
    if (this._mediaService) {
      return Promise.resolve(this._mediaService);
    }

    if (!this.mediaServicePromise) {
      this.mediaServicePromise = new Promise<dk.nota.MediaService>((resolve, reject) => {
        this.mediaServiceResolve = resolve;
        this.mediaServiceReject = reject;

        this.startMediaService();
      });

      const noop = () => {};

      this.mediaServicePromise
        .then(
          (mediaService) => {
            if (this.seekIntervalSeconds !== undefined) {
              mediaService.setSeekIntervalSeconds(this.seekIntervalSeconds);
            }

            this.mediaServicePromise = null;
          },
          (err) => {
            traceWrite(`${this.cls} - couldn't init mediaService: ${err.stack || err}`, notaAudioCategory, trace.messageType.error);
          },
        )
        .then(() => {
          this.mediaServiceResolve = noop;
          this.mediaServiceReject = noop;
        });
    }

    return this.mediaServicePromise;
  }

  private _serviceConnection = new android.content.ServiceConnection({
    onServiceConnected: (componentName, binder: dk.nota.MediaService.LocalBinder) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onServiceConnected(${componentName.toString()}, ${binder})`, notaAudioCategory);
      }

      const mediaService = binder.getService();
      mediaService.setOwner(this);

      this._mediaService = mediaService;

      this.mediaServiceResolve(mediaService);
    },
    onBindingDied: (componentName) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onBindingDied(${componentName})`, notaAudioCategory);
      }

      this.mediaServiceReject(new Error('Died'));
    },
    onNullBinding: (componentName) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onNullBinding(${componentName})`, notaAudioCategory);
      }

      this.mediaServiceReject(new Error('Null binding'));
    },
    onServiceDisconnected: (componentName) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onServiceDisconnected(${componentName})`, notaAudioCategory);
      }

      this.mediaServicePromise = null;
      this._mediaService = null;
    },
  });

  public get android() {
    return this._mediaService;
  }

  private _exitHandler: (args: nsApp.ApplicationEventData) => void;

  constructor() {
    super();

    nsApp.on(
      nsApp.exitEvent,
      (this._exitHandler = (args: nsApp.ApplicationEventData) => {
        if (args.android && args.android.isFinishing()) {
          // Handle temporary destruction.
          this.destroy();
          return;
        }
      }),
    );
  }

  public async preparePlaylist(playlist: Playlist) {
    const mediaService = await this.mediaService;

    mediaService.preparePlaylist(playlist);
  }

  public async getCurrentPlaylistIndex(): Promise<number> {
    const mediaService = await this.mediaService;
    if (!mediaService) {
      trace.write(
        `${this.cls}.getCurrentPlaylistIndex() - no media service. serviceLoaded: ${this.mediaServiceLoaded}`,
        notaAudioCategory,
        trace.messageType.error,
      );

      return -1;
    }

    return mediaService.exoPlayer.getCurrentWindowIndex();
  }

  public async play() {
    const mediaService = await this.mediaService;

    mediaService.play();
  }

  public async pause() {
    if (!this.mediaServiceLoaded) {
      trace.write(`${this.cls}.pause() - no media service. serviceLoaded: ${this.mediaServiceLoaded}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    (await this.mediaService).pause();
  }

  public async stop() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.stop() - no media service. serviceLoaded: ${this.mediaServiceLoaded}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    this._mediaService.stop();
    this._onPlaybackEvent(PlaybackEvent.Stopped);
    this.playlist = null;
    this.stopMediaService();
  }

  public async isPlaying(): Promise<boolean> {
    if (!this.mediaServiceLoaded) {
      trace.write(`${this.cls}.isPlaying() - no media service. serviceLoaded: ${this.mediaServiceLoaded}`, notaAudioCategory, trace.messageType.error);
      return false;
    }

    return (await this.mediaService).isPlaying();
  }

  public async seekTo(offset: number) {
    if (!this.mediaServiceLoaded) {
      trace.write(`${this.cls}.seekTo(${offset}) - no media service. serviceLoaded: ${this.mediaServiceLoaded}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    (await this.mediaService).exoPlayer.seekTo(offset);
  }

  public async skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number) {
    if (!this.mediaServiceLoaded) {
      trace.write(
        `${this.cls}.skipToPlaylistIndexAndOffset(${playlistIndex}, ${offset}) - no media service. serviceLoaded: ${this.mediaServiceLoaded}`,
        notaAudioCategory,
        trace.messageType.error,
      );
      return;
    }

    (await this.mediaService).exoPlayer.seekTo(playlistIndex, offset);
  }

  public async skipToNext() {
    if (!this.mediaServiceLoaded) {
      trace.write(`${this.cls}.skipToNext() - no media service. serviceLoaded: ${this.mediaServiceLoaded}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    const mediaService = await this.mediaService;
    if (mediaService.exoPlayer.hasNext()) {
      mediaService.exoPlayer.next();
    }
  }

  public async skipToPrevious() {
    if (!this.mediaServiceLoaded) {
      trace.write(`${this.cls}.skipToPrevious() - no media service. serviceLoaded: ${this.mediaServiceLoaded}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    const mediaService = await this.mediaService;
    if (mediaService.exoPlayer.hasPrevious()) {
      mediaService.exoPlayer.previous();
    }
  }

  public async skipToPlaylistIndex(playlistIndex: number) {
    if (!this.mediaServiceLoaded) {
      trace.write(
        `${this.cls}.skipToPlaylistIndex(${playlistIndex}) - no media service. serviceLoaded: ${this.mediaServiceLoaded}`,
        notaAudioCategory,
        trace.messageType.error,
      );
      return;
    }

    (await this.mediaService).exoPlayer.seekTo(playlistIndex, 0);
  }

  public async setRate(rate: number) {
    if (!this.mediaServiceLoaded) {
      trace.write(`${this.cls}.setRate(${rate}) - no media service. serviceLoaded: ${this.mediaServiceLoaded}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    (await this.mediaService).setRate(rate);
  }

  public async getRate() {
    if (!this.mediaServiceLoaded) {
      trace.write(`${this.cls}.getRate() - no media service. serviceLoaded: ${this.mediaServiceLoaded}`, notaAudioCategory, trace.messageType.error);
      return 1;
    }

    return (await this.mediaService).getRate();
  }

  public async getDuration() {
    if (!this.mediaServiceLoaded) {
      trace.write(`${this.cls}.getDuration() - no media service. serviceLoaded: ${this.mediaServiceLoaded}`, notaAudioCategory, trace.messageType.error);
      return 0;
    }

    return (await this.mediaService).exoPlayer.getDuration();
  }

  public async getCurrentTime(): Promise<number> {
    if (!this.mediaServiceLoaded) {
      trace.write(`${this.cls}.getCurrentTime() - no media service. serviceLoaded: ${this.mediaServiceLoaded}`, notaAudioCategory, trace.messageType.error);
      return -1;
    }

    return (await this.mediaService).exoPlayer.getCurrentPosition();
  }

  public async setSeekIntervalSeconds(seconds: number) {
    this.seekIntervalSeconds = seconds;

    if (!this.mediaServiceLoaded) {
      return;
    }

    (await this.mediaService).setSeekIntervalSeconds(seconds);
  }

  public destroy() {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.destroy()`, notaAudioCategory);
    }

    this.stopMediaService();

    nsApp.off(nsApp.exitEvent, this._exitHandler);
  }

  private startMediaService() {
    if (!this.context) {
      return;
    }

    const context = this.context;
    const foregroundNotificationIntent = new android.content.Intent(context, dk.nota.MediaService.class);
    context.startService(foregroundNotificationIntent);

    context.bindService(foregroundNotificationIntent, this._serviceConnection, android.content.Context.BIND_AUTO_CREATE);
  }

  private stopMediaService() {
    if (!this._mediaService) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.stopForeground() - no media service`, notaAudioCategory);
      }
      return;
    }

    const context = this.context;
    const foregroundNotificationIntent = new android.content.Intent(context, dk.nota.MediaService.class);
    context.unbindService(this._serviceConnection);
    context.stopService(foregroundNotificationIntent);

    this._mediaService.stopForeground(true);
    this._mediaService.stopSelf();
    this._mediaService = null;
    this.mediaServicePromise = null;
  }
}

export * from './audioplayer.types';
