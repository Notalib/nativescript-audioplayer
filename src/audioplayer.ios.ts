/// <reference path="./native-definitions/KDEAudioPlayer.d.ts" />

import * as imageSrc from 'tns-core-modules/image-source';
import { CommonAudioPlayer, MediaTrack, PlaybackEvent, Playlist } from './audioplayer-common';

// TODO: Do all exports in a main.ts instead
export { MediaTrack, PlaybackEvent, Playlist } from './audioplayer-common';

// Available on iOS 9+
declare var AVAudioSessionModeSpokenAudio: string;

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
  private player: AudioPlayer;
  private delegate: AudioPlayerDelegateImpl;

  private seekIntervalSeconds = 15;
  private _isSeeking = false;
  private _iosPlaylist: NSArray<AudioItem>;

  constructor() {
    super();
  }

  public isReady = Promise.resolve(true);

  public preparePlaylist(playlist: Playlist) {
    this._log('preparePlaylist');
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
    this._log(`setupAudioPlayer`);
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
      this._log(`AVAudioSessionMode = ${AVAudioSessionModeSpokenAudio}`);
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
    this._log(`Player: ${this.player}`);
    this._log(`Delegate: ${this.delegate}`);
    this._log(`TimePitch Algorithm: ${this.player.timePitchAlgorithm}`);
  }

  public addToPlaylist(track: MediaTrack) {
    this._log('ERROR: addToPlaylist not implemented');
  }

  public play() {
    try {
      if (this.player.state === AudioPlayerState.Paused) {
        this.player.resume();
      } else if (this.player.state === AudioPlayerState.Stopped) {
        this.player.playWithItemsStartAtIndex(this._iosPlaylist, 0);
      }
    } catch (err) {
      this._log(`Err: ${err}`);
    }
  }

  public pause() {
    this._log('pause');
    if (this.player) {
      this.player.pause();
    }
  }

  public stop() {
    this._log('stop');
    if (this.player) {
      this.player.stop();
    }
  }

  public isPlaying(): boolean {
    return this.player && this.player.state === AudioPlayerState.Playing;
  }

  public skipToNext() {
    if (this.player) {
      this.player.nextOrStop();
    }
  }

  public skipToPrevious() {
    if (this.player) {
      this.player.previous();
    }
  }

  public skipToPlaylistIndex(playlistIndex: number) {
    if (this.player) {
      this.player.playWithItemsStartAtIndex(this._iosPlaylist, playlistIndex);
    }
  }

  public setRate(rate: number) {
    if (this.player) {
      this.player.rate = rate;
    }
  }

  public getRate(): number {
    this._log(`[getRate] TimePitchAlgorithm = ${this.player.timePitchAlgorithm}`);
    return this.player ? this.player.rate : 0;
  }

  public getDuration(): number {
    if (this.player && this.player.currentItem && this.player.currentItemDuration) {
      return Math.floor(this.player.currentItemDuration * 1000);
    }
    return -1;
  }

  public getCurrentTime(): number {
    if (this.player && this.player.currentItem && this.player.currentItemProgression) {
      return Math.max(0, Math.floor(this.player.currentItemProgression * 1000));
    }
    return 0;
  }

  private getIndexForItem(item: AudioItem) {
    const result = this._iosPlaylist.indexOfObject(this.player.currentItem);
    if (result !== NSNotFound) {
      return result;
    } else {
      return null;
    }
  }

  public getCurrentPlaylistIndex() {
    if (this._iosPlaylist && this.player && this.player.currentItem) {
      return this.getIndexForItem(this.player.currentItem);
    }
    return null;
  }

  public seekTo(milliseconds: number) {
    if (this.player) {
      this._iosSeekTo(milliseconds);
    }
  }

  private _sleepTimer: number;
  private _sleepTimerPaused: boolean = false;
  private _sleepTimerMillisecondsLeft: number = 0;

  public setSleepTimer(milliseconds: number) {
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
          this.fadeOutVolumeAndPause();
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

  public cancelSleepTimer() {
    this._log('cancelSleepTimer');
    if (this._sleepTimer !== undefined) {
      clearInterval(this._sleepTimer);
      this._sleepTimer = undefined;
      this._sleepTimerMillisecondsLeft = 0;
      this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
    }
  }

  public pauseSleepTimer() {
    if (this._sleepTimer !== undefined) {
      this._log('pauseSleepTimer');
      this._sleepTimerPaused = true;
    }
  }

  public resumeSleepTimer() {
    if (this._sleepTimer !== undefined) {
      this._log('resumeSleepTimer');
      this._sleepTimerPaused = false;
    }
  }

  public setSeekIntervalSeconds(seconds: number) {
    this._log(`setSeekIntervalSeconds: ${seconds}`);
    this.seekIntervalSeconds = seconds;
    if (this.player) {
      this.player.remoteControlSkipIntervals = NSArray.arrayWithObject(seconds);
    }
  }

  public destroy() {
    this._log('destroy');
    this.stop();
    this.player = null;
    this.delegate = null;
    this._iosPlaylist = null;
  }

  /** PRIVATE HELPERS **/

  private setupDelegate() {
    this.delegate = AudioPlayerDelegateImpl.new();
    this.delegate.onTimeUpdate = (seconds) => {
      // this._log(`- timeUpdate: ${seconds}s`);
      const timeMilliseconds = Math.floor(seconds * 1000);
      if (this._isSeeking) {
        this._log(`time-update skipped, we're seeking`);
      } else {
        this._onPlaybackEvent(PlaybackEvent.TimeChanged, timeMilliseconds);
      }
    };
    this.delegate.onBufferingUpdate = (item, earliest, latest) => {
      this._log(`bufferingUpdate  '${item.title}' now has buffered: ${earliest}s - ${latest}s`);
    };
    this.delegate.onFoundDuration = (item, duration) => {
      this._log(`found duration for '${item.title}': ${duration}s`);
    };
    this.delegate.onWillStartPlayingItem = (item) => {
      this._log(`will start playing '${item.title}'`);
      if (item.artwork == null) {
        if (this._cachedCover && this._cachedCover.url === this.getMediaTrackForItem(item).albumArtUrl) {
          this._log(`got artwork from cache for '${item.title}'`);
          item.artwork = this._cachedCover.artwork;
        } else if (!this._isRetrievingArtwork) {
          this.loadRemoteControlAlbumArtworkAsync(item);
        }
      }
    };
    this.delegate.onFinishedPlayingItem = (item) => {
      this._log(`finished playing '${item.title}'`);
      const finishedIndex = this._iosPlaylist.indexOfObject(item);
      this._onPlaybackEvent(PlaybackEvent.EndOfTrackReached, finishedIndex);
      if (finishedIndex >= this._iosPlaylist.count - 1) {
        this._onPlaybackEvent(PlaybackEvent.EndOfPlaylistReached);
      }
    };
    this.delegate.onStateChanged = (from, to) => {
      this._iosPlayerStateChanged(from, to);
    };
    // this.delegate.onMetadataReceived = (item, data) => this._iosMetadataReceived(item, data);
  }

  private fadeOutVolumeAndPause(): void {
    const fadeTickMilliseconds = 250.0;
    const sleepTimerFadeDuration = 5000.0;
    const previousVolume = this.player.volume;
    const fadeInterval = setInterval(() => {
      const decreaseBy = fadeTickMilliseconds / sleepTimerFadeDuration;
      const newVolume = Math.max(this.player.volume - decreaseBy, 0);
      this.player.volume = newVolume;
      if (newVolume === 0) {
        this._log(`Volume faded out!`);
        if (this.player && this.player.state !== AudioPlayerState.Paused) {
          this._log(`Volume faded out, now pausing!`);
          this.player.pause();
        }
        this.player.volume = previousVolume;
        clearInterval(fadeInterval);
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
    this._log(`seekTo: ${milliseconds}ms (adaptsToSeekableRanges=${adaptToSeekableRanges},hasCompletionHandler=${!!completionHandler})`);

    // avoid sending TimeUpdates while a seek is in progress
    this._isSeeking = true;

    const seekToSeconds = milliseconds / 1000.0;
    this.player.seekToByAdaptingTimeToFitSeekableRangesToleranceBeforeToleranceAfterCompletionHandler(
      seekToSeconds,
      adaptToSeekableRanges,
      beforeTolerance,
      afterTolerance,
      (completed) => {
        this._log(`seek completed = ${completed}`);
        this._isSeeking = false;
        if (completionHandler) {
          completionHandler(completed);
        }
      },
    );
  }

  private _iosSetPlayingState() {
    this._onPlaybackEvent(PlaybackEvent.Playing);
    this.resumeSleepTimer();
  }

  private _iosPlayerStateChanged(from: AudioPlayerState, to: AudioPlayerState) {
    this._log(`stateChanged: ${from} -> ${to}`);

    switch (to) {
      case AudioPlayerState.Buffering: {
        this._onPlaybackEvent(PlaybackEvent.Buffering);
        break;
      }
      case AudioPlayerState.Playing: {
        this._iosSetPlayingState();
        if (this._queuedSeekTo) {
          // TODO: Queued seek may not use a completion-handler, that only works on "safe" seeks.
          this._iosSeekTo(this._queuedSeekTo, false, kCMTimeZero, kCMTimeZero);
          this._queuedSeekTo = null;
        }
        break;
      }
      case AudioPlayerState.Paused: {
        this._onPlaybackEvent(PlaybackEvent.Paused);
        this.pauseSleepTimer();
        break;
      }
      case AudioPlayerState.Stopped: {
        this._onPlaybackEvent(PlaybackEvent.Stopped);
        this.cancelSleepTimer();
        break;
      }
      case AudioPlayerState.WaitingForConnection: {
        this._onPlaybackEvent(PlaybackEvent.WaitingForNetwork);
        this.pauseSleepTimer();
        break;
      }
      case AudioPlayerState.Failed: {
        this._onPlaybackEvent(PlaybackEvent.EncounteredError, this.player.failedError);
        this.pauseSleepTimer();
        break;
      }
      default: {
        this._log(`unknown stateChange: ${from} -> ${to}`);
      }
    }
  }

  private makeAudioItemForMediaTrack(track: MediaTrack): AudioItem {
    try {
      this._log(`Track: ${JSON.stringify(track)}`);
      const url = track.url.substr(0, 7) === 'file://' ? NSURL.fileURLWithPath(track.url.substr(7)) : NSURL.URLWithString(track.url);
      this._log(`URL: ${url}`);
      let audioItem = new AudioItem({ highQualitySoundURL: null, mediumQualitySoundURL: url, lowQualitySoundURL: null });
      this._log(`AudioItem: ${JSON.stringify(audioItem)}`);
      audioItem.title = track.title;
      audioItem.artist = track.artist;
      audioItem.album = track.album;
      return audioItem;
    } catch (err) {
      this._log(`Error: Failed to create AudioItem for MediaTrack: ${err}`);
      return null;
    }
  }

  private getMediaTrackForItem(item: AudioItem): MediaTrack {
    return this.playlist.tracks[this.getIndexForItem(item)];
  }

  private getCurrentMediaTrack(): MediaTrack {
    return this.getMediaTrackForItem(this.player.currentItem);
  }

  private _isRetrievingArtwork = false;
  private _cachedCover: { url: string; artwork: MPMediaItemArtwork } = null;

  private loadRemoteControlAlbumArtworkAsync(item: AudioItem) {
    const artworkUrl = this.playlist.tracks[this.getIndexForItem(item)].albumArtUrl;
    if (artworkUrl == null) {
      return;
    }

    this._isRetrievingArtwork = true;
    let imagePromise: Promise<imageSrc.ImageSource>;
    if (imageSrc.isFileOrResourcePath(artworkUrl)) {
      imagePromise = Promise.resolve(imageSrc.fromFileOrResource(artworkUrl));
    } else {
      imagePromise = imageSrc.fromUrl(artworkUrl);
    }

    imagePromise
      .then((image) => {
        if (this.getCurrentMediaTrack().albumArtUrl === artworkUrl) {
          const artwork = MPMediaItemArtwork.alloc().initWithImage(image.ios);
          this._cachedCover = { url: artworkUrl, artwork: artwork };
          item.artwork = artwork;
        } else {
          this._log(`loadRemoteControlArtwork loaded, but current track was changed`);
        }
        this._isRetrievingArtwork = false;
      })
      .catch((err) => {
        this._log(`loadRemoteControlArtwork error for url '${artworkUrl}': ${err}`);
        this._isRetrievingArtwork = false;
      });
  }
}

function NSArrayFromItems<T>(items: T[]): NSArray<T> {
  const arr = NSMutableArray.alloc<T>().init();
  for (const item of items) {
    arr.addObject(item);
  }
  return arr;
}
