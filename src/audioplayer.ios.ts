/// <reference path="./native-definitions/ios.d.ts" />

import { ImageSource } from '@nativescript/core/image-source';
import { Trace } from '@nativescript/core/trace';
import * as utils from '@nativescript/core/utils';
import { CommonAudioPlayer } from './audioplayer-common';
import { MediaTrack, notaAudioCategory, Playlist } from './audioplayer.types';

class AudioPlayerDelegateImpl extends NSObject implements AudioPlayerDelegate {
  public static ObjCProtocols = [AudioPlayerDelegate];

  public onTimeUpdate: (seconds: number) => void;
  public onFoundDuration: (item: AudioItem, duration: number) => void;
  public onWillStartPlayingItem: (item: AudioItem) => void;
  public onFinishedPlayingItem: (item: AudioItem) => void;
  public onMetadataReceived: (item: AudioItem, data: NSArray<any>) => void;
  public onBufferingUpdate: (item: AudioItem, earliestBufferSec: number, latestBufferSec: number) => void;
  public onStateChanged: (from: AudioPlayerState, to: AudioPlayerState) => void;

  static new(): AudioPlayerDelegateImpl {
    return <AudioPlayerDelegateImpl>super.new(); // calls new() on the NSObject
  }

  public audioPlayerDidChangeStateFromTo(audioPlayer: AudioPlayer, from: AudioPlayerState, state: AudioPlayerState): void {
    if (this.onStateChanged) {
      this.onStateChanged(from, state);
    }
  }

  public audioPlayerDidFindDurationFor(audioPlayer: AudioPlayer, duration: number, item: AudioItem): void {
    if (this.onFoundDuration) {
      this.onFoundDuration(item, duration);
    }
  }

  public audioPlayerDidLoadEarliestLatestFor?(audioPlayer: AudioPlayer, earliest: number, latest: number, item: AudioItem): void {
    if (this.onBufferingUpdate) {
      this.onBufferingUpdate(item, earliest, latest);
    }
  }

  public audioPlayerDidUpdateEmptyMetadataOnWithData(audioPlayer: AudioPlayer, item: AudioItem, data: NSArray<AVMetadataItem>): void {
    // console.log('didUpdateEmptyMetadata for '+ item.title);
    if (this.onMetadataReceived) {
      this.onMetadataReceived(item, data);
    }
  }

  public audioPlayerDidUpdateProgressionToPercentageRead(audioPlayer: AudioPlayer, time: number, percentageRead: number): void {
    // console.log(`didUpdateProgress: ${time} - ${percentageRead}`);
    if (this.onTimeUpdate) {
      this.onTimeUpdate(time);
    }
  }

  public audioPlayerWillStartPlaying(audioPlayer: AudioPlayer, item: AudioItem): void {
    // console.log('willStartPlaying '+ item.title);
    if (this.onWillStartPlayingItem) {
      this.onWillStartPlayingItem(item);
    }
  }

  public audioPlayerFinishedPlaying?(audioPlayer: AudioPlayer, item: AudioItem): void {
    // console.log('finishedPlaying '+ item.title);
    if (this.onFinishedPlayingItem) {
      this.onFinishedPlayingItem(item);
    }
  }
}

export class TNSAudioPlayer extends CommonAudioPlayer {
  protected readonly cls = `TNSAudioPlayer.ios<${++CommonAudioPlayer.instanceNo}>`;

  private _player: AudioPlayer;
  private _delegate: AudioPlayerDelegateImpl;

  private _isSeeking = false;
  private _iosPlaylist: NSArray<AudioItem>;

  public async preparePlaylist(playlist: Playlist) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.preparePlaylist($)`, notaAudioCategory);
    }

    if (!this._player) {
      this.setupAudioPlayer();
    } else {
      await this.stop();
    }

    // This needs to be after call to this.stop() as stop() removes the current playlist.
    this.playlist = playlist;

    const audioItems = NSMutableArray.alloc<AudioItem>().init();

    for (const track of playlist.tracks) {
      const audioItem = this.makeAudioItemForMediaTrack(track);
      if (audioItem != null) {
        audioItems.addObject(audioItem);
      }
    }

    this._iosPlaylist = audioItems;
  }

  private setupAudioPlayer() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.setupAudioPlayer()`, notaAudioCategory);
    }

    this.setupDelegate();
    this._player = AudioPlayer.new();
    this._player.delegate = this._delegate;
    this._player.bufferingStrategy = AudioPlayerBufferingStrategy.PlayWhenPreferredBufferDurationFull;
    this._player.preferredBufferDurationBeforePlayback = 5;
    // this.player.preferredForwardBufferDuration = 600;
    this._player.timePitchAlgorithm = AVAudioTimePitchAlgorithmTimeDomain;
    this._player.sessionCategory = AVAudioSessionCategoryPlayback;
    // Set AVAudioSession mode to SpokenAudio if it's defined (iOS 9+)
    // this ensures better audio mix with Navigation, Siri etc.
    if (AVAudioSessionModeSpokenAudio) {
      Trace.write(`${this.cls}.setupAudioPlayer() - AVAudioSessionMode = ${AVAudioSessionModeSpokenAudio}`, notaAudioCategory);
      this._player.sessionMode = AVAudioSessionModeSpokenAudio;
    }
    this._player.allowExternalPlayback = true;
    this._player.remoteControlSkipIntervals = NSArrayFromItems([this._seekIntervalSeconds]);
    this._player.remoteCommandsEnabled = NSArrayFromItems([
      NSNumber.numberWithInt(AudioPlayerRemoteCommand.ChangePlaybackPosition),
      NSNumber.numberWithInt(AudioPlayerRemoteCommand.ChangePlaybackRate),
      NSNumber.numberWithInt(AudioPlayerRemoteCommand.SkipBackward),
      NSNumber.numberWithInt(AudioPlayerRemoteCommand.PlayPause),
      NSNumber.numberWithInt(AudioPlayerRemoteCommand.SkipForward),
    ]);
    this.ios = this._player;
    Trace.write(`${this.cls}.setupAudioPlayer() - Player: ${this._player}`, notaAudioCategory);
    Trace.write(`${this.cls}.setupAudioPlayer() - Delegate: ${this._delegate}`, notaAudioCategory);
    Trace.write(`${this.cls}.setupAudioPlayer() - TimePitch Algorithm: ${this._player.timePitchAlgorithm}`, notaAudioCategory);
  }

  public async play() {
    try {
      if (this._player?.state === AudioPlayerState.Paused) {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.play() - resume`, notaAudioCategory);
        }

        this._player.resume();
      } else if (this._player?.state === AudioPlayerState.Stopped) {
        this._player.playWithItemsStartAtIndex(this._iosPlaylist, 0);

        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.play() - from start`, notaAudioCategory);
        }
      } else if (this._player?.state === AudioPlayerState.Buffering) {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.play() - from buffer`, notaAudioCategory);
        }
      } else {
        Trace.write(`${this.cls}.play() - unknown start state? - ${this._player?.state}`, notaAudioCategory, Trace.messageType.error);
      }
    } catch (err) {
      Trace.write(`${this.cls}.play() - error: ${err}`, notaAudioCategory, Trace.messageType.error);
    }
  }

  public async pause() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.pause()`, notaAudioCategory);
    }

    if (this._player) {
      this._player.pause();
    }
  }

  public async stop() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.stop()`, notaAudioCategory);
    }

    if (this._player) {
      this._player.stop();
    }

    this.playlist = undefined;
  }

  public async isPlaying(): Promise<boolean> {
    return this._player?.state === AudioPlayerState.Playing;
  }

  public async skipToNext() {
    if (this._player) {
      this._player.nextOrStop();
    }
  }

  public async skipToPrevious() {
    if (this._player) {
      this._player.previous();
    }
  }

  public async skipToPlaylistIndex(playlistIndex: number) {
    if (this._player) {
      this._player.playWithItemsStartAtIndex(this._iosPlaylist, playlistIndex);
    }
  }

  public async setRate(rate: number) {
    if (this._player) {
      this._player.rate = rate;
    }
  }

  public async getRate(): Promise<number> {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.getRate(...) => ${this._player?.timePitchAlgorithm}`, notaAudioCategory);
    }

    return this._player ? this._player.rate : 0;
  }

  private _getDuration() {
    if (this._player?.currentItem && this._player?.currentItemDuration) {
      return Math.floor(this._player.currentItemDuration * 1000);
    }

    return -1;
  }

  public async getDuration(): Promise<number> {
    return this._getDuration();
  }

  public async getCurrentTime(): Promise<number> {
    if (this._player?.currentItem && this._player?.currentItemProgression) {
      return Math.max(0, Math.floor(this._player.currentItemProgression * 1000));
    }

    return 0;
  }

  private getIndexForItem(item: AudioItem) {
    const result = this._iosPlaylist.indexOfObject(item);
    if (result !== NSNotFound) {
      return result;
    } else {
      return -1;
    }
  }

  public _getCurrentPlaylistIndex() {
    if (this._iosPlaylist && this._player?.currentItem) {
      return this.getIndexForItem(this._player.currentItem);
    }

    return null;
  }

  public async getCurrentPlaylistIndex() {
    return this._getCurrentPlaylistIndex();
  }

  public async seekTo(milliseconds: number) {
    if (this._player) {
      this._iosSeekTo(milliseconds);
    }
  }

  public async setSeekIntervalSeconds(seconds: number) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds})`, notaAudioCategory);
    }

    this._seekIntervalSeconds = seconds;
    if (this._player) {
      this._player.remoteControlSkipIntervals = NSArray.arrayWithObject(seconds);
    }
  }

  public destroy() {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}.destroy()`, notaAudioCategory);
    }

    this.stop();

    for (const key of ['_player', '_delegate', '_iosPlaylist']) {
      delete this[key];
    }

    super.destroy();
  }

  /** PRIVATE HELPERS **/

  private setupDelegate() {
    this._delegate = AudioPlayerDelegateImpl.new();
    this._delegate.onTimeUpdate = (seconds) => {
      // this._log(`- timeUpdate: ${seconds}s`);
      const timeMilliseconds = Math.floor(seconds * 1000);
      if (this._isSeeking) {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls} - time-update skipped, we're seeking`, notaAudioCategory);
        }
      } else {
        this._onTimeChanged(timeMilliseconds, this._getDuration(), this._getCurrentPlaylistIndex() as number);
      }
    };
    this._delegate.onBufferingUpdate = (item, earliest, latest) => {
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls} bufferingUpdate  '${item.title}' now has buffered: ${earliest}s - ${latest}s`, notaAudioCategory);
      }
    };
    this._delegate.onFoundDuration = (item, duration) => {
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls} found duration for '${item.title}': ${duration}s`, notaAudioCategory);
      }
    };
    this._delegate.onWillStartPlayingItem = (item) => {
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls} will start playing '${item.title}'`, notaAudioCategory);
      }

      if (item.artwork == null) {
        if (this._cachedCover && this._cachedCover.url === this.getMediaTrackForItem(item)?.albumArtUrl) {
          if (Trace.isEnabled()) {
            Trace.write(`${this.cls} got artwork from cache for '${item.title}'`, notaAudioCategory);
          }

          item.artwork = this._cachedCover.artwork;
        } else if (!this._isRetrievingArtwork) {
          this.loadRemoteControlAlbumArtworkAsync(item);
        }
      }
    };
    this._delegate.onFinishedPlayingItem = (item) => {
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls} finished playing '${item.title}'`, notaAudioCategory);
      }

      const finishedIndex = this._iosPlaylist.indexOfObject(item);
      this._onEndOfTrackReached(finishedIndex);
      if (finishedIndex >= this._iosPlaylist.count - 1) {
        this._onEndOfPlaylistReached();
      }
    };
    this._delegate.onStateChanged = (from, to) => {
      this._iosPlayerStateChanged(from, to);
    };
    // this.delegate.onMetadataReceived = (item, data) => this._iosMetadataReceived(item, data);
  }

  protected _onSleepTimerExpired() {
    const fadeTickMilliseconds = 250.0;
    const sleepTimerFadeDuration = 5000.0;
    const previousVolume = this._player.volume;
    const fadeInterval = setInterval(() => {
      const decreaseBy = fadeTickMilliseconds / sleepTimerFadeDuration;
      const newVolume = Math.max(this._player.volume - decreaseBy, 0);
      this._player.volume = newVolume;
      if (newVolume === 0) {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls} - Volume faded out!`, notaAudioCategory);
        }

        if (this._player.state !== AudioPlayerState.Paused) {
          if (Trace.isEnabled()) {
            Trace.write(`${this.cls} - Volume faded out! - pausing`, notaAudioCategory);
          }
          this._player.pause();
        }
        this._player.volume = previousVolume;
        clearInterval(fadeInterval);

        super._onSleepTimerExpired();
      }
    }, fadeTickMilliseconds);
  }

  private _iosSeekTo(
    milliseconds: number,
    adaptToSeekableRanges = false,
    beforeTolerance: CMTime = kCMTimeZero,
    afterTolerance: CMTime = kCMTimeZero,
    completionHandler?: (complete: boolean) => void,
  ) {
    if (Trace.isEnabled()) {
      Trace.write(
        `${this.cls}._iosSeekTo(...) - seekTo: ${milliseconds}ms (adaptsToSeekableRanges=${adaptToSeekableRanges},hasCompletionHandler=${!!completionHandler})`,
        notaAudioCategory,
      );
    }

    // avoid sending TimeUpdates while a seek is in progress
    this._isSeeking = true;

    const seekToSeconds = milliseconds / 1000.0;
    this._player.seekToByAdaptingTimeToFitSeekableRangesToleranceBeforeToleranceAfterCompletionHandler(
      seekToSeconds,
      adaptToSeekableRanges,
      beforeTolerance,
      afterTolerance,
      (completed) => {
        if (Trace.isEnabled()) {
          Trace.write(
            `${
              this.cls
            }._iosSeekTo(...) - seekTo: ${milliseconds}ms (adaptsToSeekableRanges=${adaptToSeekableRanges},hasCompletionHandler=${!!completionHandler}) seek completed = ${completed}`,
            notaAudioCategory,
          );
        }
        this._isSeeking = false;
        if (completionHandler) {
          completionHandler(completed);
        }
      },
    );
  }

  private _iosSetPlayingState() {
    this._onPlaying();
  }

  private _iosPlayerStateChanged(from: AudioPlayerState, to: AudioPlayerState) {
    if (Trace.isEnabled()) {
      Trace.write(`${this.cls}._iosPlayerStateChanged(...) - stateChanged: ${from} -> ${to}`, notaAudioCategory);
    }

    switch (to) {
      case AudioPlayerState.Buffering: {
        this._onBuffering();
        break;
      }
      case AudioPlayerState.Playing: {
        this._iosSetPlayingState();
        if (this._queuedSeekTo) {
          // TODO: Queued seek may not use a completion-handler, that only works on "safe" seeks.
          this._iosSeekTo(this._queuedSeekTo, false, kCMTimeZero, kCMTimeZero);
          this._queuedSeekTo = undefined;
        }
        break;
      }
      case AudioPlayerState.Paused: {
        this._onPaused();
        break;
      }
      case AudioPlayerState.Stopped: {
        this._onStopped();
        break;
      }
      case AudioPlayerState.WaitingForConnection: {
        this._onWaitingForNetwork();
        break;
      }
      case AudioPlayerState.Failed: {
        this._onPlaybackError(this._player.failedError);
        break;
      }
      default: {
        Trace.write(`${this.cls}._iosPlayerStateChanged(track) - unknown stateChanged: ${from} -> ${to}`, notaAudioCategory, Trace.messageType.error);
      }
    }
  }

  private makeAudioItemForMediaTrack(track: MediaTrack): AudioItem | void {
    try {
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls}.makeAudioItemForMediaTrack(${JSON.stringify(track)})`, notaAudioCategory);
      }

      const url = track.url.substring(0, 7) === 'file://' ? NSURL.fileURLWithPath(track.url.substring(7)) : NSURL.URLWithString(track.url);

      if (Trace.isEnabled()) {
        Trace.write(`${this.cls}.makeAudioItemForMediaTrack(track) - URL: ${url}`, notaAudioCategory);
      }

      let audioItem = new AudioItem({
        highQualitySoundURL: null!,
        mediumQualitySoundURL: url,
        lowQualitySoundURL: null!,
      });
      if (Trace.isEnabled()) {
        Trace.write(`${this.cls}.makeAudioItemForMediaTrack(track) - AudioItem: ${JSON.stringify(audioItem)}`, notaAudioCategory);
      }

      audioItem.title = track.title;
      audioItem.artist = track.artist;
      audioItem.album = track.album;

      return audioItem;
    } catch (err) {
      Trace.write(
        `${this.cls}.makeAudioItemForMediaTrack(track) - Error: Failed to create AudioItem for MediaTrack: ${err}`,
        notaAudioCategory,
        Trace.messageType.error,
      );

      return;
    }
  }

  private getMediaTrackForItem(item: AudioItem): MediaTrack | null {
    return this.playlist?.tracks?.[this.getIndexForItem(item)] ?? null;
  }

  private getCurrentMediaTrack(): MediaTrack | null {
    return this.getMediaTrackForItem(this._player.currentItem);
  }

  private _isRetrievingArtwork = false;
  private _cachedCover?: { url: string; artwork: MPMediaItemArtwork };

  private async loadRemoteControlAlbumArtworkAsync(item: AudioItem) {
    const artworkUrl = this.playlist?.tracks?.[this.getIndexForItem(item)].albumArtUrl;
    if (artworkUrl == null) {
      return;
    }

    this._isRetrievingArtwork = true;

    try {
      const image = utils.isFileOrResourcePath(artworkUrl) ? ImageSource.fromFileOrResourceSync(artworkUrl) : await ImageSource.fromUrl(artworkUrl);
      if (this.getCurrentMediaTrack()?.albumArtUrl === artworkUrl) {
        const artwork = MPMediaItemArtwork.alloc().initWithImage(image.ios);
        this._cachedCover = { url: artworkUrl, artwork };
        item.artwork = artwork;
      } else {
        if (Trace.isEnabled()) {
          Trace.write(`${this.cls}.loadRemoteControlAlbumArtworkAsync() - loadRemoteControlArtwork loaded, but current track was changed`, notaAudioCategory);
        }
      }
    } catch (err) {
      Trace.write(
        `${this.cls}.loadRemoteControlAlbumArtworkAsync() - loadRemoteControlArtwork error for url '${artworkUrl}': ${err}`,
        notaAudioCategory,
        Trace.messageType.error,
      );
    } finally {
      this._isRetrievingArtwork = false;
    }
  }

  protected _exitHandler() {
    this.destroy();
  }
}

function NSArrayFromItems<T>(items: T[]): NSArray<T> {
  const arr = NSMutableArray.alloc<T>().init();
  for (const item of items) {
    arr.addObject(item);
  }

  return arr;
}
