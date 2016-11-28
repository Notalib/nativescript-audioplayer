import * as utils from 'utils/utils';

import {CommonAudioPlayer, MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';

// TODO: Do all exports in a main.ts instead?
export {MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';

// iOS uses the native audio playback framework FreeStreamer
// API Docs: http://muhku.github.io/FreeStreamer/api/
// Fork: https://github.com/dfg-nota/FreeStreamer.git

export class FSAudioControllerDelegateImpl extends NSObject implements FSAudioControllerDelegate {
  
  public static ObjCProtocols = [ FSAudioControllerDelegate ]
  private audioPlayer: AudioPlayer;
  
  public init(): FSAudioControllerDelegateImpl {
    var self = super.init();
    return self as FSAudioControllerDelegateImpl;
  }
  
  public withForwardingTo(player: AudioPlayer): FSAudioControllerDelegateImpl {
    this.audioPlayer = player;
    return this;
  }
  
  public audioControllerAllowPreloadingForStream(audioController: FSAudioController, stream: FSAudioStream): boolean {
    console.log('FreeStreamer: PRELOAD allowed for '+ stream.url.absoluteString);
    return true;
  }

	public audioControllerPreloadStartedForStream(audioController: FSAudioController, stream: FSAudioStream): void {
    console.log('FreeStreamer: PRELOAD started for '+ stream.url.absoluteString);
  }
}

export class AudioPlayer extends CommonAudioPlayer 
{
  public playController: FSAudioController;
  public seekIntervalSeconds: number = 15;
  private _playbackRate: number = 1;

  constructor() {
    super();
    this.ios = this;
    this.loadFreeStreamer();
    this.subscribeToRemoteControlEvents();
    this.setupRemoteControlCommands();
  }

  private loadFreeStreamer() {
    const config = new FSStreamConfiguration();
    config.cacheEnabled = false;
    config.maxRetryCount = 5;                         // Retry attempts before considering stream failed
    config.enableTimeAndPitchConversion = true;
    config.requireStrictContentTypeChecking = false;
    config.automaticAudioSessionHandlingEnabled = true;
    config.httpConnectionBufferSize = 1024 * 64;      // 64 kB. bufferSize should match this.
    config.bufferSize = 1024 * 64;
    config.maxPrebufferedByteCount = 100000000;       // Max 100mb cache ahead. TODO: Time based maxBuffer
    config.requiredPrebufferSizeInSeconds = 5;        // Prebuffer 5 seconds before starting playback.
    //config.predefinedHttpHeaderValues               // Could be used to set auth headers

    this.playController = FSAudioController.alloc().init() as FSAudioController;
    this.playController.configuration = config;
    this.playController.onStateChange = (state: FSAudioStreamState) => {
      this.didChangeState(state);
    }
    this.playController.onMetaDataAvailable = (meta: NSDictionary) => {
      this._log('FreeStreamer: metadata received...');
      //this._log('FreeStreamer: metadata received '+ JSON.stringify(Object.keys(meta)));
    }
    this.playController.onFailure = (errorType: FSAudioStreamError, errorText: string) => {
      this._log('FreeStreamer: FAILURE! '+ errorText);
    }
    this._log('FreeStreamer instance succesfully created.');
    this.playController.delegate = new FSAudioControllerDelegateImpl().withForwardingTo(this);
  }

  public get isReady(): Promise<any> {
    return Promise.resolve();
  }

  public preparePlaylist(playlist: Playlist) {
    if (this.playController) {
      this._log('Reloading FreeStreamer before new playlist...');
      this.reloadFreeStreamer();
    }
    this.playlist = playlist;
    for (var track of playlist.tracks) {
      this._log('Creating FSPlaylistItem for: '+ track.title);
      const item = new FSPlaylistItem();
      item.url = NSURL.URLWithString(track.url);
      item.title = track.title;
      this._log('playController.addItem');
      this.playController.addItem(item);
    }
    this.setupRemoteControlCommands();
  }
  
  public play() {
    // FIX: Play should resume playback if it was paused.
    if (this.playController.activeStream && this.playController.activeStream.isPaused()) {
      // FreeStreamer's pause is a toggle. This resumes playback.
      this._log('Play (unpause)');
      this.playController.pause();
    } else {
      this._log('Play');
      this.playController.play();
    }
  }
  
  public pause() {
    if (this.playController.activeStream && !this.playController.activeStream.isPaused()) {
      this._log('Pause');
      this.playController.pause();
    }
  }
  
  public stop() {
    this.cancelSleepTimer();
    this.playController.stop();
  }

  public isPlaying(): boolean {
    return this.playController && this.playController.isPlaying();
  }
  
  public skipToNext() {
    if (this.playController.hasNextItem()) {
      this.playController.playNextItem();
    }
  }
  
  public skipToPrevious() {
    if (this.playController.hasPreviousItem()) {
      this.playController.playPreviousItem();
    }
  }

  public skipToPlaylistIndex(playlistIndex: number) {
      this.playController.playItemAtIndex(playlistIndex);
  }
  
  public setRate(rate: number) {
    this._playbackRate = rate;
    // If we're currently playing
    if (this.getRate() !== rate && this.isPlaying()) {
      this.playController.activeStream.setPlayRate(rate);
      this.updateNowPlayingInfoPositionTracking(false);
    }
  }

  public getRate(): number {
    if (this.playController.activeStream) {
      // On iOS playbackRate is always 0 during pause, so we return our internal rate variable instead.
      if (this.isPlaying()) {
        return this.playController.activeStream.playRate();
      } else {
        return this._playbackRate;
      }
    }
  }

  public getDuration(): number {
    if (this.playController.activeStream) {
      return Math.floor(this.playController.activeStream.duration.playbackTimeInSeconds * 1000);
    }
  }

  public getCurrentTime(): number {
    if (this.playController.activeStream) {
      // Math.max because FreeStreamer can return negative playbackTime at beginning of playback.
      return Math.max(Math.floor(this.playController.activeStream.currentTimePlayed.playbackTimeInSeconds * 1000), 0);
    }
  }

  public getCurrentPlaylistIndex() {
    return this.playController.currentPlaylistItemIndex;
  }

  public seekTo(offset: number) {
    // See https://github.com/dfg-nota/FreeStreamer/blob/master/FreeStreamer/FreeStreamer/FSAudioStream.mm#L1431
    if (this.playController.activeStream) {
      const knownDuration = this.getDuration();
      // In FreeStreamer if position (0-1 of full duration) is over 0 it is used, else it uses the less accurate minute/second variables.
      const seekToSeconds: number = +(offset / 1000).toFixed(3);
      const position: FSStreamPosition = {
        minute: Math.floor(seekToSeconds / 60),
        second: seekToSeconds % 60,
        playbackTimeInSeconds:  seekToSeconds,
        position: knownDuration > 0 ? offset / knownDuration : 0
      }
      this._log(`seekInternal to: ${position.position}`);
      this.playController.activeStream.seekToPosition(position);
    }
  }

  private _sleepTimer: number;
  private _sleepTimerPaused: boolean = false;
  private _sleepTimerMillisecsLeft: number = 0;

  public setSleepTimer(millisecs: number) {
    this.cancelSleepTimer();

    const countdownTick = 1000;
    this._sleepTimerMillisecsLeft = millisecs;
    this._sleepTimer = setInterval(() => {
      if (!this._sleepTimerPaused && this.isPlaying()) {
        this._sleepTimerMillisecsLeft = Math.max(this._sleepTimerMillisecsLeft - countdownTick, 0);
        this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
      }
      if (this._sleepTimerMillisecsLeft == 0) {
        // Fade out volume and pause if not already paused.
        if (this.playController.activeStream
            && !this.playController.activeStream.isPaused()) {
          this.fadeOutVolumeAndPause();
        }
        clearInterval(this._sleepTimer);
        this._sleepTimer = undefined;
      }
    }, countdownTick);
    this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
  }

  public getSleepTimerRemaining(): number {
    return this._sleepTimerMillisecsLeft;
  }

  public cancelSleepTimer() {
    if (this._sleepTimer != undefined) {
      clearInterval(this._sleepTimer);
      this._sleepTimer = undefined;
      this._sleepTimerMillisecsLeft = 0;
      this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
    }
  }

  public pauseSleepTimer() {
    if (this._sleepTimer != undefined) {
      this._sleepTimerPaused = true;
    }
  }

  public resumeSleepTimer() {
    if (this._sleepTimer != undefined) {
      this._sleepTimerPaused = false;
    }
  }

  public setSeekIntervalSeconds(seconds: number) {
    this.seekIntervalSeconds = seconds;
  }
  
  public release() {
    this._log('AudioPlayer.release');
    this.stop();
    this.clearNowPlayingInfo();
    this.unsubscribeFromRemoteControlEvents();
    this._log('Releasing FreeStreamer resources');
    this.playController.delegate = null;
    this.playController = null;
  }

  // ------------------------------------------------------------------------------
  // Internal helpers and event handlers

  private reloadFreeStreamer() {
    this.stop();
    this.clearNowPlayingInfo();
    this.loadFreeStreamer();
  }

  private fadeOutVolumeAndPause(): void {
    const fadeTickMillis = 250.0;
    const sleepTimerFadeDuration = 5000.0;
    const previousVolume = this.playController.volume;
    const fadeInterval = setInterval(() => {
      const decreaseBy = fadeTickMillis / sleepTimerFadeDuration;
      const newVolume = Math.max(this.playController.volume - decreaseBy, 0);
      this.playController.setVolume(newVolume);
      if (newVolume === 0) {
        if (this.playController.activeStream
            && !this.playController.activeStream.isPaused()) {
          // Extra check on paused state,
          // since a pause() call would resume playing if already paused.
          this.playController.pause();
        }
        this.playController.setVolume(previousVolume);
        clearInterval(fadeInterval);
      }
    }, fadeTickMillis);
  }

  private subscribeToRemoteControlEvents() {
    this._log('Begin receiving remote control events');
    const app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
    app.beginReceivingRemoteControlEvents();
  }

  private setupRemoteControlCommands() {
    let remoteCommandCenter = MPRemoteCommandCenter.sharedCommandCenter();

    // TODO: Commands crashes app when called after a playlist change 

    // NOTE: iOS RemoteCommandCenter can have a max of 3 commands. Any others won't be shown.
    (<MPSkipIntervalCommand>remoteCommandCenter.skipBackwardCommand).preferredIntervals = <any>[this.seekIntervalSeconds];
    remoteCommandCenter.skipBackwardCommand.addTargetWithHandler((evt: MPRemoteCommandEvent) => {
      this._log('RemoteControl - Skip Backward');
      this.seekRelative(this.seekIntervalSeconds * -1000);
      return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
    });
    remoteCommandCenter.playCommand.addTargetWithHandler(this.remotePlay);
    remoteCommandCenter.pauseCommand.addTargetWithHandler(this.remotePause);
    (<MPSkipIntervalCommand>remoteCommandCenter.skipForwardCommand).preferredIntervals = <any>[this.seekIntervalSeconds];
    remoteCommandCenter.skipForwardCommand.addTargetWithHandler((evt: MPRemoteCommandEvent) => {
      this._log('RemoteControl - Skip Forward');
      this.seekRelative(this.seekIntervalSeconds * 1000);
      return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
    });
    // TODO: Cannot get changePlaybackRateCommand to work :(
    // remoteCommandCenter.changePlaybackRateCommand.enabled = true;
    // remoteCommandCenter.changePlaybackRateCommand.supportedPlaybackRates = <any>this.supportedPlaybackRate;
    // remoteCommandCenter.changePlaybackRateCommand.addTargetWithHandler((evt: MPChangePlaybackRateCommandEvent) => {
    //   this._log('RemoteControl - Set playback rate: '+ evt.playbackRate);
    //   return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
    // });
    // TODO: Would need to be able to set a localized title from the plugin client.
    // remoteCommandCenter.bookmarkCommand.enabled = true;
    // remoteCommandCenter.bookmarkCommand.localizedTitle = "Sæt Bogmærke";
    // remoteCommandCenter.bookmarkCommand.addTargetWithHandler((evt: MPRemoteCommandEvent) => {
    //   let feedback = evt.command as MPFeedbackCommand;
    //   this._log('RemoteControl - Set bookmark: '+ feedback.active);
    //   return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
    // });
  }

  private remotePlay(evt: MPRemoteCommandEvent): MPRemoteCommandHandlerStatus {
    this._log('RemoteControl - Play');
    this.play();
    return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
  }

  private remotePause(evt: MPRemoteCommandEvent): MPRemoteCommandHandlerStatus {
    this._log('RemoteControl - Pause');
    this.pause();
    return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
  }

  private unsubscribeFromRemoteControlEvents() {
    this._log('End receiving remote control events');
    const app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
    app.endReceivingRemoteControlEvents();
  }

  private clearNowPlayingInfo() {
    this._log('Clear NowPlaying Info');
    MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo = null;
  }

  private setNowPlayingInfo() {
    const currentTrack: MediaTrack = this.getCurrentMediaTrack();
    if (currentTrack === null) {
      return;
    }
    const playingInfo = NSMutableDictionary.alloc().init();
    playingInfo.setObjectForKey(currentTrack.title, MPMediaItemPropertyTitle);
    playingInfo.setObjectForKey(currentTrack.artist, MPMediaItemPropertyArtist);
    playingInfo.setObjectForKey(currentTrack.album, MPMediaItemPropertyAlbumTitle);
    playingInfo.setObjectForKey(this.getCurrentPlaylistIndex(), MPNowPlayingInfoPropertyChapterNumber);
    playingInfo.setObjectForKey(this.playlist.tracks.length, MPNowPlayingInfoPropertyChapterCount);
    playingInfo.setObjectForKey(this.isPlaying() ? this.getRate() : 0, MPNowPlayingInfoPropertyPlaybackRate);
    playingInfo.setObjectForKey(this.getCurrentTime() / 1000, MPNowPlayingInfoPropertyElapsedPlaybackTime);
    const knownDuration = this.getDuration();
    if (knownDuration > 0) {
      playingInfo.setObjectForKey(knownDuration / 1000, MPMediaItemPropertyPlaybackDuration);
    }
    MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo = playingInfo;
    //console.log('Updated NowPlayingInfo:\n '+ MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo.description);
  }

  private updateNowPlayingInfoKey(key: string, value: any) {
    const playingInfo = NSMutableDictionary.alloc().initWithDictionary(MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo);
    //console.log('Update NowPlayingInfo with: '+ JSON.stringify({key: key, value: value}));
    playingInfo.setObjectForKey(value, key);
    MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo = playingInfo;
  }

  private updateNowPlayingInfoPositionTracking(isPaused: boolean) {
    this.updateNowPlayingInfoKey(MPNowPlayingInfoPropertyElapsedPlaybackTime, this.getCurrentTime() / 1000);
    this.updateNowPlayingInfoKey(MPNowPlayingInfoPropertyPlaybackRate, isPaused ? 0 : this._playbackRate);
  }
  
  private getNSURL(urlString: string) {
    return NSURL.URLWithString(urlString);
  }

  private getCurrentMediaTrack() {
    return this.playlist.tracks[this.getCurrentPlaylistIndex()];
  }
  
  private didChangeState(toState: FSAudioStreamState) {
    switch(toState) {
      case FSAudioStreamState.kFsAudioStreamBuffering:
      case FSAudioStreamState.kFsAudioStreamSeeking: {
        this._onPlaybackEvent(PlaybackEvent.Opening);
        break;
      }
      case FSAudioStreamState.kFsAudioStreamPlaying: {
        this._log('FreeStreamer: Playing');
        // Update playback rate on newly started tracks
        if (this.getRate() != this._playbackRate && this.playController.activeStream) {
          this.playController.activeStream.setPlayRate(this._playbackRate);
        }
        this._onPlaybackEvent(PlaybackEvent.Playing);
        this.setNowPlayingInfo();
        if (this._queuedSeekTo !== null) {
          this._log('FreeStreamer: Queue Seek to '+ this._queuedSeekTo);
          this.seekTo(this._queuedSeekTo);
          this._queuedSeekTo = null;
        }
        this.resumeSleepTimer();
        break;
      }
      case FSAudioStreamState.kFsAudioStreamPaused: {
        this._log('FreeStreamer: Paused');
        this._onPlaybackEvent(PlaybackEvent.Paused);
        this.updateNowPlayingInfoPositionTracking(true);
        this.pauseSleepTimer();
        break;
      }
      case FSAudioStreamState.kFsAudioStreamStopped: {
        this._log('FreeStreamer: Stopped');
        this._onPlaybackEvent(PlaybackEvent.Stopped);
        break;
      }
      case FSAudioStreamState.kFSAudioStreamEndOfFile: {
        this._log('FreeStreamer: Stream fully buffered');
        break;
      }
      case FSAudioStreamState.kFsAudioStreamPlaybackCompleted: {
        this._log('FreeStreamer: Playback Completed');
        this._onPlaybackEvent(PlaybackEvent.EndOfTrackReached);
        if (this.getCurrentPlaylistIndex() < this.playlist.length - 1) {
          this.setNowPlayingInfo();
        } else {
          this._onPlaybackEvent(PlaybackEvent.EndOfPlaylistReached);
          this.clearNowPlayingInfo();
          this.cancelSleepTimer();
        }
        break;
      }
      case FSAudioStreamState.kFsAudioStreamFailed:
      case FSAudioStreamState.kFsAudioStreamRetryingFailed: {
        this._log('FreeStreamer: StreamFailed');
        this._onPlaybackEvent(PlaybackEvent.EncounteredError);
        break;
      }
      default: {
        this._log('FreeStreamer: state change: '+ toState);
        break;
      }
    }
  }
}