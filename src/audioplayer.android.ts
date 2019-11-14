import * as nsApp from '@nativescript/core/application';
import * as trace from '@nativescript/core/trace';
import { traceWrite } from '@nativescript/core/ui/page/page';
import * as utils from '@nativescript/core/utils/utils';
import { CommonAudioPlayer } from './audioplayer-common';
import { notaAudioCategory, PlaybackEvent, Playlist } from './audioplayer.types';
import './media-service';

export class TNSAudioPlayer extends CommonAudioPlayer {
  protected readonly cls = `TNSAudioPlayer.android<${this.instance}>`;

  private get context() {
    return utils.ad.getApplicationContext() as android.content.Context;
  }

  private mediaServicePromise: Promise<dk.nota.MediaService>;
  private mediaServiceResolve: (mediaService: dk.nota.MediaService) => void;
  private mediaServiceReject: (error: any) => void;

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
            this.mediaServicePromise = null;

            const seekIntervalSeconds = this.seekIntervalSeconds;
            if (typeof seekIntervalSeconds === 'number' && !Number.isNaN(seekIntervalSeconds)) {
              mediaService.setSeekIntervalSeconds(seekIntervalSeconds);
            }

            const rate = this.playbackRate;
            if (typeof rate === 'number' && !Number.isNaN(rate)) {
              mediaService.setRate(rate);
            }
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

  constructor() {
    super((args: nsApp.ApplicationEventData) => {
      const activity = args.android as android.app.Activity;
      if (activity?.isFinishing()) {
        // Handle temporary destruction.
        this.destroy();
        return;
      }
    });
  }

  public async preparePlaylist(playlist: Playlist) {
    try {
      const mediaService = await this.mediaService;

      mediaService.preparePlaylist(playlist);
    } catch (err) {
      trace.write(`${this.cls}.preparePlaylist() - ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public async getCurrentPlaylistIndex(): Promise<number> {
    if (!this._mediaService) {
      trace.write(`${this.cls}.getCurrentPlaylistIndex() - no media service.`, notaAudioCategory, trace.messageType.error);

      return -1;
    }

    try {
      const mediaService = await this.mediaService;

      return mediaService.exoPlayer.getCurrentWindowIndex();
    } catch (err) {
      trace.write(`${this.cls}.getCurrentPlaylistIndex() - ${err}`, notaAudioCategory, trace.messageType.error);

      return -1;
    }
  }

  public async play() {
    try {
      const mediaService = await this.mediaService;

      mediaService.play();
    } catch (err) {
      trace.write(`${this.cls}.play() - ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public async pause() {
    if (!this._mediaService) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.pause() - no media service - cannot pause`, notaAudioCategory);
      }

      return;
    }

    try {
      const mediaService = await this.mediaService;

      mediaService.pause();
    } catch (err) {
      trace.write(`${this.cls}.pause() - ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public async stop() {
    this.playlist = null;
    this._onPlaybackEvent(PlaybackEvent.Stopped);

    if (!this._mediaService) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.stop() - no media service - nothing to stop`, notaAudioCategory);
      }

      return;
    }

    try {
      this._mediaService.stop();
      this.stopMediaService();
    } catch (err) {
      trace.write(`${this.cls}.stop() - ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public async isPlaying(): Promise<boolean> {
    if (!this._mediaService) {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.isPlaying() - no media service. - is not playing`, notaAudioCategory);
      }

      return false;
    }

    try {
      const mediaService = await this.mediaService;

      return mediaService.isPlaying();
    } catch (err) {
      trace.write(`${this.cls}.isPlaying() - ${err}`, notaAudioCategory, trace.messageType.error);
      return false;
    }
  }

  public async seekTo(offset: number) {
    if (!this._mediaService) {
      trace.write(`${this.cls}.seekTo(${offset}) - no media service.`, notaAudioCategory, trace.messageType.error);
      return;
    }

    try {
      const mediaService = await this.mediaService;

      mediaService.exoPlayer.seekTo(offset);
    } catch (err) {
      trace.write(`${this.cls}.seekTo(${offset}) - ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public async skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number) {
    if (!this._mediaService) {
      trace.write(`${this.cls}.skipToPlaylistIndexAndOffset(${playlistIndex}, ${offset}) - no media service.`, notaAudioCategory, trace.messageType.error);

      return;
    }

    try {
      const mediaService = await this.mediaService;

      mediaService.exoPlayer.seekTo(playlistIndex, offset);
    } catch (err) {
      trace.write(`${this.cls}.skipToPlaylistIndexAndOffset(${playlistIndex}, ${offset}) - ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public async skipToPrevious() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.skipToPrevious() - no media service.`, notaAudioCategory, trace.messageType.error);
      return;
    }

    try {
      const mediaService = await this.mediaService;
      if (mediaService.exoPlayer.hasPrevious()) {
        mediaService.exoPlayer.previous();
      }
    } catch (err) {
      trace.write(`${this.cls}.skipToPrevious() - ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public async skipToNext() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.skipToNext() - no media service.`, notaAudioCategory, trace.messageType.error);
      return;
    }

    try {
      const mediaService = await this.mediaService;
      if (mediaService.exoPlayer.hasNext()) {
        mediaService.exoPlayer.next();
      }
    } catch (err) {
      trace.write(`${this.cls}.skipToNext() - ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public async skipToPlaylistIndex(playlistIndex: number) {
    if (!this._mediaService) {
      trace.write(`${this.cls}.skipToPlaylistIndex(${playlistIndex}) - no media service.`, notaAudioCategory, trace.messageType.error);
      return;
    }

    try {
      const mediaService = await this.mediaService;

      mediaService.exoPlayer.seekTo(playlistIndex, 0);
    } catch (err) {
      trace.write(`${this.cls}.skipToPlaylistIndex(${playlistIndex}) - ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public async setRate(rate: number) {
    if (typeof rate === 'number' && !Number.isNaN(rate)) {
      this.playbackRate = rate;
    } else {
      rate = 1;

      this.playbackRate = rate;
    }

    if (!this._mediaService) {
      return;
    }

    try {
      const mediaService = await this.mediaService;

      mediaService.setRate(rate);
    } catch (err) {
      trace.write(`${this.cls}.setRate(${rate}) - ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public async getRate() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.getRate() - no media service.`, notaAudioCategory, trace.messageType.error);
      return this.playbackRate || 1;
    }

    try {
      const mediaService = await this.mediaService;

      return mediaService.getRate();
    } catch (err) {
      trace.write(`${this.cls}.getRate() - ${err}`, notaAudioCategory, trace.messageType.error);
      return this.playbackRate || 1;
    }
  }

  public async getDuration() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.getDuration() - no media service.`, notaAudioCategory, trace.messageType.error);
      return 0;
    }

    try {
      const mediaService = await this.mediaService;

      return mediaService.exoPlayer.getDuration();
    } catch (err) {
      trace.write(`${this.cls}.getDuration() - ${err}`, notaAudioCategory, trace.messageType.error);
      return 0;
    }
  }

  public async getCurrentTime(): Promise<number> {
    if (!this._mediaService) {
      trace.write(`${this.cls}.getCurrentTime() - no media service.`, notaAudioCategory, trace.messageType.error);
      return -1;
    }

    try {
      const mediaService = await this.mediaService;

      return mediaService.exoPlayer.getCurrentPosition();
    } catch (err) {
      trace.write(`${this.cls}.getCurrentTime() - ${err}`, notaAudioCategory, trace.messageType.error);
      return -1;
    }
  }

  public async setSeekIntervalSeconds(seconds: number) {
    this.seekIntervalSeconds = seconds;

    if (!this._mediaService) {
      return;
    }

    try {
      const mediaService = await this.mediaService;

      mediaService.setSeekIntervalSeconds(seconds);
    } catch (err) {
      trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds}) - ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public destroy() {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.destroy()`, notaAudioCategory);
    }

    this.stopMediaService();

    super.destroy();
  }

  private startMediaService() {
    if (!this.context) {
      trace.write(`${this.cls}.startMediaService() - no context, cannot start MediaService`, notaAudioCategory, trace.messageType.error);
      return;
    }

    const context = this.context;
    const foregroundNotificationIntent = new android.content.Intent(context, dk.nota.MediaService.class);
    context.startService(foregroundNotificationIntent);

    context.bindService(foregroundNotificationIntent, this._serviceConnection, android.content.Context.BIND_AUTO_CREATE);
  }

  private stopMediaService() {
    this.mediaServicePromise = null;

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
  }
}
