import * as nsApp from '@nativescript/core/application';
import { Trace } from '@nativescript/core/trace';
import * as utils from '@nativescript/core/utils';
import { CommonAudioPlayer } from './audioplayer-common';
import { notaAudioCategory, Playlist } from './audioplayer.types';
import './media-service';

export class TNSAudioPlayer extends CommonAudioPlayer {
  protected readonly cls = `TNSAudioPlayer.android<${++CommonAudioPlayer.instanceNo}>`;

  private get context() {
    return utils.ad.getApplicationContext() as android.content.Context;
  }

  private _mediaServicePromise?: Promise<dk.nota.MediaService>;
  private _mediaServiceResolve: (mediaService: dk.nota.MediaService) => void;
  private _mediaServiceReject: (error: Error) => void;

  private _mediaService?: dk.nota.MediaService;
  private get mediaService(): Promise<dk.nota.MediaService> {
    const mediaService = this._mediaService;
    if (mediaService) {
      return Promise.resolve(mediaService);
    }

    if (!this._mediaServicePromise) {
      this._mediaServicePromise = new Promise<dk.nota.MediaService>((resolve, reject) => {
        try {
          this._mediaServiceResolve = resolve;
          this._mediaServiceReject = reject;

          this.startMediaService();
        } catch (err) {
          reject(err);
        }
      });

      const noop = () => {};

      this._mediaServicePromise
        .then(
          (mediaService) => {
            this._mediaService = mediaService;

            this._mediaServicePromise = undefined;

            const seekIntervalSeconds = this._seekIntervalSeconds;
            if (typeof seekIntervalSeconds === 'number' && !Number.isNaN(seekIntervalSeconds)) {
              mediaService.setSeekIntervalSeconds(seekIntervalSeconds);
            }

            const rate = this._playbackRate;
            if (typeof rate === 'number' && !Number.isNaN(rate)) {
              mediaService.setRate(rate);
            }
          },
          (err) => {
            Trace.write(`${this.cls} - couldn't init mediaService: ${err.stack || err}`, notaAudioCategory, Trace.messageType.error);
          },
        )
        .then(() => {
          this._mediaServiceResolve = noop;
          this._mediaServiceReject = noop;
        });
    }

    return this._mediaServicePromise;
  }

  private async getExoPlayer(): Promise<com.google.android.exoplayer2.ExoPlayer | undefined> {
    return (await this.mediaService).exoPlayer;
  }

  // tslint:disable-next-line
  private _serviceConnection?: android.content.ServiceConnection;

  private get serviceConnection() {
    if (!this._serviceConnection) {
      this._serviceConnection = new android.content.ServiceConnection({
        onServiceConnected: (componentName, binder: dk.nota.MediaService.LocalBinder) => {
          if (Trace.isEnabled()) {
            Trace.write(`${this.cls}.onServiceConnected(${componentName.toString()}, ${binder})`, notaAudioCategory);
          }

          const mediaService = binder.getService();
          if (!mediaService) {
            // TODO: How do we handle this case?
            Trace.write(
              `${this.cls}.onServiceConnected(${componentName.toString()}, ${binder}) - couldn't get MediaService`,
              notaAudioCategory,
              Trace.messageType.error,
            );

            this._mediaServiceReject(new Error('MediaService not created'));

            return;
          }

          mediaService.setOwner(this);

          this._mediaServiceResolve(mediaService);
        },
        onBindingDied: (componentName) => {
          if (Trace.isEnabled()) {
            Trace.write(`${this.cls}.onBindingDied(${componentName})`, notaAudioCategory);
          }

          this._mediaServiceReject(new Error('Died'));
        },
        onNullBinding: (componentName) => {
          if (Trace.isEnabled()) {
            Trace.write(`${this.cls}.onNullBinding(${componentName})`, notaAudioCategory);
          }

          this._mediaServiceReject(new Error('Null binding'));
        },
        onServiceDisconnected: (componentName) => {
          if (Trace.isEnabled()) {
            Trace.write(`${this.cls}.onServiceDisconnected(${componentName})`, notaAudioCategory);
          }

          this._mediaServicePromise = undefined;
          this._mediaService = undefined;
        },
      });
    }

    return this._serviceConnection;
  }

  public get android() {
    return this._mediaService;
  }

  private isDestroyed = false;

  public async preparePlaylist(playlist: Playlist) {
    try {
      await this.stop();

      const mediaService = await this.mediaService;
      await mediaService.preparePlaylist(playlist);

      // This needs to be after call to this.stop() as stop() removes the current playlist.
      this.playlist = playlist;
    } catch (err) {
      Trace.write(`${this.cls}.preparePlaylist() - ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public async getCurrentPlaylistIndex(): Promise<number> {
    if (!this._mediaService) {
      Trace.write(`${this.cls}.getCurrentPlaylistIndex() - no media service.`, notaAudioCategory, Trace.messageType.error);

      return -1;
    }

    try {
      const exoPlayer = await this.getExoPlayer();
      if (!exoPlayer) {
        return -1;
      }

      return exoPlayer.getCurrentWindowIndex();
    } catch (err) {
      Trace.write(`${this.cls}.getCurrentPlaylistIndex() - ${err}`, notaAudioCategory, Trace.messageType.error);

      return -1;
    }
  }

  public async play() {
    try {
      const mediaService = await this.mediaService;

      mediaService.play();
    } catch (err) {
      Trace.write(`${this.cls}.play() - ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public async pause() {
    if (!this._mediaService) {
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls}.pause() - no media service - cannot pause`, notaAudioCategory);
      }

      return;
    }

    try {
      const mediaService = await this.mediaService;

      mediaService.pause();
    } catch (err) {
      Trace.write(`${this.cls}.pause() - ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public async stop() {
    this.playlist = undefined;

    const mediaService = this._mediaService;
    if (!mediaService) {
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls}.stop() - no media service - nothing to stop`, notaAudioCategory);
      }

      return;
    }

    try {
      mediaService.stop();
    } catch (err) {
      Trace.write(`${this.cls}.stop() - ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public async isPlaying(): Promise<boolean> {
    if (!this._mediaService) {
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls}.isPlaying() - no media service. - is not playing`, notaAudioCategory);
      }

      return false;
    }

    try {
      const mediaService = await this.mediaService;

      return mediaService.isPlaying();
    } catch (err) {
      Trace.write(`${this.cls}.isPlaying() - ${err}`, notaAudioCategory, Trace.messageType.error);

      return false;
    }
  }

  public async seekTo(offset: number) {
    if (!this._mediaService) {
      Trace.write(`${this.cls}.seekTo(${offset}) - no media service.`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    try {
      const exoPlayer = await this.getExoPlayer();
      if (exoPlayer) {
        exoPlayer.seekTo(offset);
      }
    } catch (err) {
      Trace.write(`${this.cls}.seekTo(${offset}) - ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public async skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number) {
    if (!this._mediaService) {
      Trace.write(`${this.cls}.skipToPlaylistIndexAndOffset(${playlistIndex}, ${offset}) - no media service.`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    try {
      const exoPlayer = await this.getExoPlayer();
      if (exoPlayer) {
        exoPlayer.seekTo(playlistIndex, offset);
      }
    } catch (err) {
      Trace.write(`${this.cls}.skipToPlaylistIndexAndOffset(${playlistIndex}, ${offset}) - ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public async skipToPrevious() {
    if (!this._mediaService) {
      Trace.write(`${this.cls}.skipToPrevious() - no media service.`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    try {
      const exoPlayer = await this.getExoPlayer();
      if (exoPlayer?.hasPrevious()) {
        exoPlayer.previous();
      }
    } catch (err) {
      Trace.write(`${this.cls}.skipToPrevious() - ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public async skipToNext() {
    if (!this._mediaService) {
      Trace.write(`${this.cls}.skipToNext() - no media service.`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    try {
      const exoPlayer = await this.getExoPlayer();
      if (exoPlayer?.hasNext()) {
        exoPlayer.next();
      }
    } catch (err) {
      Trace.write(`${this.cls}.skipToNext() - ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public async skipToPlaylistIndex(playlistIndex: number) {
    if (!this._mediaService) {
      Trace.write(`${this.cls}.skipToPlaylistIndex(${playlistIndex}) - no media service.`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    try {
      const exoPlayer = await this.getExoPlayer();
      exoPlayer?.seekTo(playlistIndex, 0);
    } catch (err) {
      Trace.write(`${this.cls}.skipToPlaylistIndex(${playlistIndex}) - ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public async setRate(rate: number) {
    if (typeof rate === 'number' && !Number.isNaN(rate)) {
      this._playbackRate = rate;
    } else {
      rate = 1;

      this._playbackRate = rate;
    }

    if (!this._mediaService) {
      return;
    }

    try {
      const mediaService = await this.mediaService;

      mediaService.setRate(rate);
    } catch (err) {
      Trace.write(`${this.cls}.setRate(${rate}) - ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public async getRate() {
    if (!this._mediaService) {
      Trace.write(`${this.cls}.getRate() - no media service.`, notaAudioCategory, Trace.messageType.error);

      return this._playbackRate || 1;
    }

    try {
      const mediaService = await this.mediaService;

      return mediaService.getRate();
    } catch (err) {
      Trace.write(`${this.cls}.getRate() - ${err}`, notaAudioCategory, Trace.messageType.error);

      return this._playbackRate || 1;
    }
  }

  public async getDuration() {
    if (!this._mediaService) {
      Trace.write(`${this.cls}.getDuration() - no media service.`, notaAudioCategory, Trace.messageType.error);

      return 0;
    }

    try {
      const exoPlayer = await this.getExoPlayer();

      return exoPlayer?.getDuration() ?? 0;
    } catch (err) {
      Trace.write(`${this.cls}.getDuration() - ${err}`, notaAudioCategory, Trace.messageType.error);

      return 0;
    }
  }

  public async getCurrentTime(): Promise<number> {
    if (!this._mediaService) {
      Trace.write(`${this.cls}.getCurrentTime() - no media service.`, notaAudioCategory, Trace.messageType.error);

      return -1;
    }

    try {
      const exoPlayer = await this.getExoPlayer();

      return exoPlayer?.getCurrentPosition() ?? -1;
    } catch (err) {
      Trace.write(`${this.cls}.getCurrentTime() - ${err}`, notaAudioCategory, Trace.messageType.error);

      return -1;
    }
  }

  public async setSeekIntervalSeconds(seconds: number) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds})`, notaAudioCategory);
    }

    this._seekIntervalSeconds = seconds;

    if (!this._mediaService) {
      return;
    }

    try {
      const mediaService = await this.mediaService;

      mediaService.setSeekIntervalSeconds(seconds);
    } catch (err) {
      Trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds}) - ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public destroy() {
    if (this.isDestroyed) {
      return;
    }

    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.destroy()`, notaAudioCategory);
    }

    this.isDestroyed = true;

    this.stopMediaService();

    nsApp.off(nsApp.exitEvent, this._exitHandler, this);

    delete this._serviceConnection;
    super.destroy();
  }

  private startMediaService() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.startMediaService()`, notaAudioCategory);
    }

    if (!this.context) {
      Trace.write(`${this.cls}.startMediaService() - no context, cannot start MediaService`, notaAudioCategory, Trace.messageType.error);

      return;
    }

    const context = this.context;
    const foregroundNotificationIntent = new android.content.Intent(context, dk.nota.MediaService.class);
    context.startService(foregroundNotificationIntent);

    context.bindService(foregroundNotificationIntent, this.serviceConnection, android.content.Context.BIND_AUTO_CREATE);
  }

  private stopMediaService() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.stopMediaService()`, notaAudioCategory);
    }

    delete this._mediaServicePromise;
    const mediaService = this._mediaService;
    if (!mediaService) {
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls}.stopMediaService() - no media service`, notaAudioCategory);
      }

      return;
    }

    const context = this.context;
    const foregroundNotificationIntent = new android.content.Intent(context, dk.nota.MediaService.class);
    context.unbindService(this.serviceConnection);
    context.stopService(foregroundNotificationIntent);

    mediaService.stopForeground(true);
    mediaService.stopSelf();
    mediaService.setOwner(null);

    delete this._mediaService;
  }

  protected _exitHandler(args: nsApp.ApplicationEventData) {
    const activity = args.android as android.app.Activity;
    if (!activity?.isFinishing()) {
      // Not a real exit event, skipping.
      return;
    }

    this.destroy();
  }
}
