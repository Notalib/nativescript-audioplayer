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

  private _mediaService: dk.nota.MediaService | void = null;

  private _serviceConnection = new android.content.ServiceConnection({
    onServiceConnected: (componentName, binder: dk.nota.MediaService.LocalBinder) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onServiceConnected(${componentName.toString()}, ${binder})`, notaAudioCategory);
      }
      this._mediaService = binder.getService();
      this._mediaService.setOwner(this);
    },
    onBindingDied: (componentName) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onBindingDied(${componentName})`, notaAudioCategory);
      }
    },
    onNullBinding: (componentName) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onNullBinding(${componentName})`, notaAudioCategory);
      }
    },
    onServiceDisconnected: (componentName) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.onServiceDisconnected(${componentName})`, notaAudioCategory);

        this._mediaService = null;
      }
    },
  });

  public get android() {
    return this._mediaService;
  }

  public isReady = Promise.resolve();

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
  }

  public preparePlaylist(playlist: Playlist): void {
    if (!this._mediaService) {
      return;
    }

    this._mediaService.preparePlaylist(playlist);
  }

  public getCurrentPlaylistIndex(): number {
    if (!this._mediaService) {
      return -1;
    }

    return this._mediaService.exoPlayer.getCurrentWindowIndex();
  }

  public play() {
    if (!this._mediaService) {
      return;
    }

    this._mediaService.play();
  }

  public pause() {
    if (!this._mediaService) {
      return;
    }

    this._mediaService.pause();
  }

  public stop() {
    if (!this._mediaService) {
      return;
    }

    this._mediaService.stop();
    this._onPlaybackEvent(PlaybackEvent.Stopped);
    this.playlist = null;
  }

  public isPlaying(): boolean {
    if (!this._mediaService) {
      return false;
    }

    return this._mediaService.isPlaying();
  }

  public seekTo(offset: number) {
    if (!this._mediaService) {
      return;
    }

    this._mediaService.exoPlayer.seekTo(offset);
  }

  public skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): void {
    if (!this._mediaService) {
      return;
    }

    this._mediaService.exoPlayer.seekTo(playlistIndex, offset);
  }

  public skipToNext() {
    if (this._mediaService && this._mediaService.exoPlayer.hasNext()) {
      this._mediaService.exoPlayer.next();
    }
  }

  public skipToPrevious() {
    if (this._mediaService && this._mediaService.exoPlayer.hasPrevious()) {
      this._mediaService.exoPlayer.previous();
    }
  }

  public skipToPlaylistIndex(playlistIndex: number) {
    if (!this._mediaService) {
      return;
    }

    this._mediaService.exoPlayer.seekTo(playlistIndex, 0);
  }

  public setRate(rate: number) {
    if (!this._mediaService) {
      return;
    }

    this._mediaService.setRate(rate);
  }

  public getRate() {
    if (!this._mediaService) {
      return 1;
    }

    return this._mediaService.getRate();
  }

  public getDuration() {
    if (!this._mediaService) {
      return 0;
    }

    return this._mediaService.exoPlayer.getDuration();
  }

  public getCurrentTime(): number {
    if (!this._mediaService) {
      return -1;
    }

    return this._mediaService.exoPlayer.getCurrentPosition();
  }

  public setSleepTimer(milliseconds: number) {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.setSleepTimer(${milliseconds})`, notaAudioCategory);
    }

    this.cancelSleepTimer();

    const countdownTick = 1000;
    this._sleepTimerMillisecondsLeft = milliseconds;
    this._sleepTimer = setInterval(() => {
      if (!this._sleepTimerPaused && this.isPlaying()) {
        this._sleepTimerMillisecondsLeft = Math.max(this._sleepTimerMillisecondsLeft - countdownTick, 0);
        this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
      }

      if (this._sleepTimerMillisecondsLeft === 0) {
        // Fade out volume and pause if not already paused.
        if (this.isPlaying()) {
          this.pause();
        }

        clearInterval(this._sleepTimer);
        this._sleepTimer = undefined;
      }
    }, countdownTick);
    this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
  }

  public getSleepTimerRemaining(): number {
    return this._sleepTimerMillisecondsLeft;
  }

  public setSeekIntervalSeconds(seconds: number) {
    this.seekIntervalSeconds = seconds;

    if (this._mediaService) {
      this._mediaService.setSeekIntervalSeconds(seconds);
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
    if (android.os.Build.VERSION.SDK_INT >= 26) {
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
