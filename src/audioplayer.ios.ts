/// <reference path="./native-definitions/ios.d.ts" />

import { ImageSource, isFileOrResourcePath } from '@nativescript/core/image-source';
import * as trace from '@nativescript/core/trace';
import { CommonAudioPlayer } from './audioplayer-common';
import { MediaTrack, notaAudioCategory, PlaybackEvent, Playlist } from './audioplayer.types';

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

  private player: AudioPlayer;
  private delegate: AudioPlayerDelegateImpl;

  private _isSeeking = false;
  private _iosPlaylist: NSArray<AudioItem>;

  public async preparePlaylist(playlist: Playlist) {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.preparePlaylist($)`, notaAudioCategory);
    }

    this.playlist = playlist;
    if (!this.player) {
      this.setupAudioPlayer();
    } else {
      this.stop();
    }

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
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.setupAudioPlayer()`, notaAudioCategory);
    }

    this.setupDelegate();
    this.player = AudioPlayer.new();
    this.player.delegate = this.delegate;
    this.player.bufferingStrategy = AudioPlayerBufferingStrategy.PlayWhenPreferredBufferDurationFull;
    this.player.preferredBufferDurationBeforePlayback = 5;
    // this.player.preferredForwardBufferDuration = 600;
    this.player.timePitchAlgorithm = AVAudioTimePitchAlgorithmTimeDomain;
    this.player.sessionCategory = AVAudioSessionCategoryPlayback;
    // Set AVAudioSession mode to SpokenAudio if it's defined (iOS 9+)
    // this ensures better audio mix with Navigation, Siri etc.
    if (AVAudioSessionModeSpokenAudio) {
      trace.write(`${this.cls}.setupAudioPlayer() - AVAudioSessionMode = ${AVAudioSessionModeSpokenAudio}`, notaAudioCategory);
      this.player.sessionMode = AVAudioSessionModeSpokenAudio;
    }
    this.player.allowExternalPlayback = true;
    this.player.remoteControlSkipIntervals = NSArrayFromItems([this.seekIntervalSeconds]);
    this.player.remoteCommandsEnabled = NSArrayFromItems([
      NSNumber.numberWithInt(AudioPlayerRemoteCommand.ChangePlaybackPosition),
      NSNumber.numberWithInt(AudioPlayerRemoteCommand.ChangePlaybackRate),
      NSNumber.numberWithInt(AudioPlayerRemoteCommand.SkipBackward),
      NSNumber.numberWithInt(AudioPlayerRemoteCommand.PlayPause),
      NSNumber.numberWithInt(AudioPlayerRemoteCommand.SkipForward),
    ]);
    this.ios = this.player;
    trace.write(`${this.cls}.setupAudioPlayer() - Player: ${this.player}`, notaAudioCategory);
    trace.write(`${this.cls}.setupAudioPlayer() - Delegate: ${this.delegate}`, notaAudioCategory);
    trace.write(`${this.cls}.setupAudioPlayer() - TimePitch Algorithm: ${this.player.timePitchAlgorithm}`, notaAudioCategory);
  }

  public async play() {
    try {
      if (this.player?.state === AudioPlayerState.Paused) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.play() - resume`, notaAudioCategory);
        }

        this.player.resume();
      } else if (this.player?.state === AudioPlayerState.Stopped) {
        this.player.playWithItemsStartAtIndex(this._iosPlaylist, 0);

        if (trace.isEnabled()) {
          trace.write(`${this.cls}.play() - from start`, notaAudioCategory);
        }
      } else {
        trace.write(`${this.cls}.play() - unknown start state?`, notaAudioCategory, trace.messageType.error);
      }
    } catch (err) {
      trace.write(`${this.cls}.play() - error: ${err}`, notaAudioCategory, trace.messageType.error);
    }
  }

  public async pause() {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.pause()`, notaAudioCategory);
    }

    if (this.player) {
      this.player.pause();
    }
  }

  public async stop() {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.stop()`, notaAudioCategory);
    }

    if (this.player) {
      this.player.stop();
    }
  }

  public async isPlaying(): Promise<boolean> {
    return this.player?.state === AudioPlayerState.Playing;
  }

  public async skipToNext() {
    if (this.player) {
      this.player.nextOrStop();
    }
  }

  public async skipToPrevious() {
    if (this.player) {
      this.player.previous();
    }
  }

  public async skipToPlaylistIndex(playlistIndex: number) {
    if (this.player) {
      this.player.playWithItemsStartAtIndex(this._iosPlaylist, playlistIndex);
    }
  }

  public async setRate(rate: number) {
    if (this.player) {
      this.player.rate = rate;
    }
  }

  public async getRate(): Promise<number> {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.getRate(...) => ${this.player?.timePitchAlgorithm}`, notaAudioCategory);
    }

    return this.player ? this.player.rate : 0;
  }

  private _getDuration() {
    if (this.player?.currentItem && this.player?.currentItemDuration) {
      return Math.floor(this.player.currentItemDuration * 1000);
    }

    return -1;
  }

  public async getDuration(): Promise<number> {
    return this._getDuration();
  }

  public async getCurrentTime(): Promise<number> {
    if (this.player?.currentItem && this.player?.currentItemProgression) {
      return Math.max(0, Math.floor(this.player.currentItemProgression * 1000));
    }

    return 0;
  }

  private getIndexForItem(item: AudioItem) {
    const result = this._iosPlaylist.indexOfObject(this.player.currentItem);
    if (result !== NSNotFound) {
      return result;
    } else {
      return -1;
    }
  }

  public _getCurrentPlaylistIndex() {
    if (this._iosPlaylist && this.player?.currentItem) {
      return this.getIndexForItem(this.player.currentItem);
    }

    return null;
  }

  public async getCurrentPlaylistIndex() {
    return this._getCurrentPlaylistIndex();
  }

  public async seekTo(milliseconds: number) {
    if (this.player) {
      this._iosSeekTo(milliseconds);
    }
  }

  public async setSeekIntervalSeconds(seconds: number) {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.setSeekIntervalSeconds(${seconds})`, notaAudioCategory);
    }

    this.seekIntervalSeconds = seconds;
    if (this.player) {
      this.player.remoteControlSkipIntervals = NSArray.arrayWithObject(seconds);
    }
  }

  public destroy() {
    if (trace.isEnabled()) {
      trace.write(`${this.cls}.destroy()`, notaAudioCategory);
    }

    this.stop();
    delete this.player;
    delete this.delegate;
    delete this._iosPlaylist;

    super.destroy();
  }

  /** PRIVATE HELPERS **/

  private setupDelegate() {
    this.delegate = AudioPlayerDelegateImpl.new();
    this.delegate.onTimeUpdate = (seconds) => {
      // this._log(`- timeUpdate: ${seconds}s`);
      const timeMilliseconds = Math.floor(seconds * 1000);
      if (this._isSeeking) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls} - time-update skipped, we're seeking`, notaAudioCategory);
        }
      } else {
        this._onTimeChanged(timeMilliseconds, this._getDuration(), this._getCurrentPlaylistIndex() as number);
      }
    };
    this.delegate.onBufferingUpdate = (item, earliest, latest) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls} bufferingUpdate  '${item.title}' now has buffered: ${earliest}s - ${latest}s`, notaAudioCategory);
      }
    };
    this.delegate.onFoundDuration = (item, duration) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls} found duration for '${item.title}': ${duration}s`, notaAudioCategory);
      }
    };
    this.delegate.onWillStartPlayingItem = (item) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls} will start playing '${item.title}'`, notaAudioCategory);
      }

      if (item.artwork == null) {
        if (this._cachedCover && this._cachedCover.url === this.getMediaTrackForItem(item)?.albumArtUrl) {
          if (trace.isEnabled()) {
            trace.write(`${this.cls} got artwork from cache for '${item.title}'`, notaAudioCategory);
          }

          item.artwork = this._cachedCover.artwork;
        } else if (!this._isRetrievingArtwork) {
          this.loadRemoteControlAlbumArtworkAsync(item);
        }
      }
    };
    this.delegate.onFinishedPlayingItem = (item) => {
      if (trace.isEnabled()) {
        trace.write(`${this.cls} finished playing '${item.title}'`, notaAudioCategory);
      }

      const finishedIndex = this._iosPlaylist.indexOfObject(item);
      this._onEndOfTrackReached(finishedIndex);
      if (finishedIndex >= this._iosPlaylist.count - 1) {
        this._onEndOfPlaylistReached();
      }
    };
    this.delegate.onStateChanged = (from, to) => {
      this._iosPlayerStateChanged(from, to);
    };
    // this.delegate.onMetadataReceived = (item, data) => this._iosMetadataReceived(item, data);
  }

  protected _onSleepTimerExpired() {
    const fadeTickMilliseconds = 250.0;
    const sleepTimerFadeDuration = 5000.0;
    const previousVolume = this.player.volume;
    const fadeInterval = setInterval(() => {
      const decreaseBy = fadeTickMilliseconds / sleepTimerFadeDuration;
      const newVolume = Math.max(this.player.volume - decreaseBy, 0);
      this.player.volume = newVolume;
      if (newVolume === 0) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls} - Volume faded out!`, notaAudioCategory);
        }

        if (this.player.state !== AudioPlayerState.Paused) {
          if (trace.isEnabled()) {
            trace.write(`${this.cls} - Volume faded out! - pausing`, notaAudioCategory);
          }
          this.player.pause();
        }
        this.player.volume = previousVolume;
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
    if (trace.isEnabled()) {
      trace.write(
        `${this.cls}._iosSeekTo(...) - seekTo: ${milliseconds}ms (adaptsToSeekableRanges=${adaptToSeekableRanges},hasCompletionHandler=${!!completionHandler})`,
        notaAudioCategory,
      );
    }

    // avoid sending TimeUpdates while a seek is in progress
    this._isSeeking = true;

    const seekToSeconds = milliseconds / 1000.0;
    this.player.seekToByAdaptingTimeToFitSeekableRangesToleranceBeforeToleranceAfterCompletionHandler(
      seekToSeconds,
      adaptToSeekableRanges,
      beforeTolerance,
      afterTolerance,
      (completed) => {
        if (trace.isEnabled()) {
          trace.write(
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
    if (trace.isEnabled()) {
      trace.write(`${this.cls}._iosPlayerStateChanged(...) - stateChanged: ${from} -> ${to}`, notaAudioCategory);
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
        this._onPlaybackError(this.player.failedError);
        break;
      }
      default: {
        trace.write(`${this.cls}._iosPlayerStateChanged(track) - unknown stateChanged: ${from} -> ${to}`, notaAudioCategory, trace.messageType.error);
      }
    }
  }

  private makeAudioItemForMediaTrack(track: MediaTrack): AudioItem | void {
    try {
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.makeAudioItemForMediaTrack(${JSON.stringify(track)})`, notaAudioCategory);
      }

      const url = track.url.substr(0, 7) === 'file://' ? NSURL.fileURLWithPath(track.url.substr(7)) : NSURL.URLWithString(track.url);

      if (trace.isEnabled()) {
        trace.write(`${this.cls}.makeAudioItemForMediaTrack(track) - URL: ${url}`, notaAudioCategory);
      }

      let audioItem = new AudioItem({
        highQualitySoundURL: null as any,
        mediumQualitySoundURL: url,
        lowQualitySoundURL: null as any,
      });
      if (trace.isEnabled()) {
        trace.write(`${this.cls}.makeAudioItemForMediaTrack(track) - AudioItem: ${JSON.stringify(audioItem)}`, notaAudioCategory);
      }

      audioItem.title = track.title;
      audioItem.artist = track.artist;
      audioItem.album = track.album;

      return audioItem;
    } catch (err) {
      trace.write(
        `${this.cls}.makeAudioItemForMediaTrack(track) - Error: Failed to create AudioItem for MediaTrack: ${err}`,
        notaAudioCategory,
        trace.messageType.error,
      );

      return;
    }
  }

  private getMediaTrackForItem(item: AudioItem): MediaTrack | null {
    return this.playlist?.tracks?.[this.getIndexForItem(item)] ?? null;
  }

  private getCurrentMediaTrack(): MediaTrack | null {
    return this.getMediaTrackForItem(this.player.currentItem);
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
      const image = isFileOrResourcePath(artworkUrl) ? ImageSource.fromFileOrResourceSync(artworkUrl) : await ImageSource.fromUrl(artworkUrl);
      if (this.getCurrentMediaTrack()?.albumArtUrl === artworkUrl) {
        const artwork = MPMediaItemArtwork.alloc().initWithImage(image.ios);
        this._cachedCover = { url: artworkUrl, artwork };
        item.artwork = artwork;
      } else {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.loadRemoteControlAlbumArtworkAsync() - loadRemoteControlArtwork loaded, but current track was changed`, notaAudioCategory);
        }
      }
    } catch (err) {
      trace.write(
        `${this.cls}.loadRemoteControlAlbumArtworkAsync() - loadRemoteControlArtwork error for url '${artworkUrl}': ${err}`,
        notaAudioCategory,
        trace.messageType.error,
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
