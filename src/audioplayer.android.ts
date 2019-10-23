import * as nsApp from 'tns-core-modules/application';
import * as trace from 'tns-core-modules/trace';
import * as utils from 'tns-core-modules/utils/utils';
import { CommonAudioPlayer } from './audioplayer-common';
import { notaAudioCategory, PlaybackEvent, Playlist } from './audioplayer.types';

import './foreground-service';

export class TNSAudioPlayer extends CommonAudioPlayer {
  private get context() {
    return utils.ad.getApplicationContext() as android.content.Context;
  }

  private isReadyResolve: () => void;
  private isReadyReject: (error: any) => void;

  private _isReadý = false;
  public readonly isReady = new Promise<void>((resolve, reject) => {
    this.isReadyResolve = resolve;
    this.isReadyReject = reject;
  });

  private _mediaService: dk.nota.MediaService | void = null;

  private _serviceConnection = new android.content.ServiceConnection({
    onServiceConnected: (componentName, binder: dk.nota.MediaService.LocalBinder) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onServiceConnected(${componentName.toString()}, ${binder})`, notaAudioCategory);
      }
      this._mediaService = binder.getService();
      this._mediaService.setOwner(this);

      this.isReadyResolve();
    },
    onBindingDied: (componentName) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onBindingDied(${componentName})`, notaAudioCategory);
      }

      this.isReadyReject(new Error('Died'));
    },
    onNullBinding: (componentName) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onNullBinding(${componentName})`, notaAudioCategory);
      }

      this.isReadyReject(new Error('Null binding'));
    },
    onServiceDisconnected: (componentName) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onServiceDisconnected(${componentName})`, notaAudioCategory);
      }

      this._mediaService = null;
    },
  });

  public get android() {
    return this._mediaService;
  }

  private _exitHandler: (args: nsApp.ApplicationEventData) => void;

  constructor() {
    super();

    this.startForeground();

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

    const noop = () => {};
    this.isReady.then(
      () => {
        this.isReadyReject = noop;
        this._isReadý = true;
      },
      () => (this.isReadyResolve = noop),
    );
  }

  public preparePlaylist(playlist: Playlist): void {
    if (!this._mediaService) {
      trace.write(`${this.cls}.getCurrentPlaylistIndex() - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    this._mediaService.preparePlaylist(playlist);
  }

  public getCurrentPlaylistIndex(): number {
    if (!this._mediaService) {
      trace.write(`${this.cls}.getCurrentPlaylistIndex() - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return -1;
    }

    return this._mediaService.exoPlayer.getCurrentWindowIndex();
  }

  public play() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.play() - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    this._mediaService.play();
  }

  public pause() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.pause() - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    this._mediaService.pause();
  }

  public stop() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.stop() - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    this._mediaService.stop();
    this._onPlaybackEvent(PlaybackEvent.Stopped);
    this.playlist = null;
  }

  public isPlaying(): boolean {
    if (!this._mediaService) {
      trace.write(`${this.cls}.isPlaying() - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return false;
    }

    return this._mediaService.isPlaying();
  }

  public seekTo(offset: number) {
    if (!this._mediaService) {
      trace.write(`${this.cls}.seekTo(${offset}) - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    this._mediaService.exoPlayer.seekTo(offset);
  }

  public skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): void {
    if (!this._mediaService) {
      trace.write(
        `${this.cls}.skipToPlaylistIndexAndOffset(${playlistIndex}, ${offset}) - no media service. isReady?: ${this._isReadý}`,
        notaAudioCategory,
        trace.messageType.error,
      );
      return;
    }

    this._mediaService.exoPlayer.seekTo(playlistIndex, offset);
  }

  public skipToNext() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.skipToNext() - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    if (this._mediaService.exoPlayer.hasNext()) {
      this._mediaService.exoPlayer.next();
    }
  }

  public skipToPrevious() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.skipToPrevious() - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    if (this._mediaService.exoPlayer.hasPrevious()) {
      this._mediaService.exoPlayer.previous();
    }
  }

  public skipToPlaylistIndex(playlistIndex: number) {
    if (!this._mediaService) {
      trace.write(
        `${this.cls}.skipToPlaylistIndex(${playlistIndex}) - no media service. isReady?: ${this._isReadý}`,
        notaAudioCategory,
        trace.messageType.error,
      );
      return;
    }

    this._mediaService.exoPlayer.seekTo(playlistIndex, 0);
  }

  public setRate(rate: number) {
    if (!this._mediaService) {
      trace.write(`${this.cls}.setRate(${rate}) - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return;
    }

    this._mediaService.setRate(rate);
  }

  public getRate() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.getRate() - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return 1;
    }

    return this._mediaService.getRate();
  }

  public getDuration() {
    if (!this._mediaService) {
      trace.write(`${this.cls}.getDuration() - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return 0;
    }

    return this._mediaService.exoPlayer.getDuration();
  }

  public getCurrentTime(): number {
    if (!this._mediaService) {
      trace.write(`${this.cls}.getCurrentTime() - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
      return -1;
    }

    return this._mediaService.exoPlayer.getCurrentPosition();
  }

  public setSeekIntervalSeconds(seconds: number) {
    this.seekIntervalSeconds = seconds;

    if (this._mediaService) {
      this._mediaService.setSeekIntervalSeconds(seconds);
    } else {
      trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds}) - no media service. isReady?: ${this._isReadý}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public destroy() {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.destroy()`, notaAudioCategory);
    }

    this.stopForeground();

    nsApp.off(nsApp.exitEvent, this._exitHandler);
  }

  private startForeground() {
    if (!this.context) {
      return;
    }

    const context = this.context;
    const foregroundNotificationIntent = new android.content.Intent();
    foregroundNotificationIntent.setClassName(context, 'dk.nota.MediaService');
    if (androidx.core.os.BuildCompat.isAtLeastO()) {
      context.startForegroundService(foregroundNotificationIntent);
    } else {
      context.startService(foregroundNotificationIntent);
    }

    context.bindService(foregroundNotificationIntent, this._serviceConnection, android.content.Context.BIND_AUTO_CREATE);
  }

  private stopForeground() {
    if (!this.context) {
      return;
    }

    if (!this._mediaService) {
      return;
    }

    const context = this.context;

    const foregroundNotificationIntent = new android.content.Intent();
    foregroundNotificationIntent.setClassName(context, 'dk.nota.MediaService');
    context.stopService(foregroundNotificationIntent);
    context.unbindService(this._serviceConnection);
  }
}

export * from './audioplayer.types';
