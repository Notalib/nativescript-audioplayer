import * as utils from 'utils/utils';
import * as application from 'application';
import * as imageSrc from 'image-source';

import {CommonAudioPlayer, MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';

// TODO: Do all exports in a main.ts instead?
export {MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';

// iOS uses the native audio playback framework FreeStreamer
// API Docs: http://muhku.github.io/FreeStreamer/api/
// Fork: https://github.com/ddfreiling/FreeStreamer.git

export class FSAudioControllerDelegateImpl extends NSObject implements FSAudioControllerDelegate {
  
  public static ObjCProtocols = [ FSAudioControllerDelegate ];
  private audioPlayer: AudioPlayer;
  
  public init() {
    var self = super.init();
    return self;
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

  private static TIME_CHANGED_UPDATE_INTERVAL = 200;
  private _playbackRate: number = 1;
  private _hasLoadedFreeStreamer = false;
  private _isRetrievingArtwork = false;
  private _routeChangeObs;
  private _timeChangedInterval;
  private _lastTimeChanged;

  constructor() {
    super();
    this._log('init');
    this.ios = this;
    this.registerRemoteControlHandlers();
    this.subscribeToAudioRouteChanges();

    this._timeChangedInterval = setInterval(() => {
      if (this.playController && this.playController.isPlaying() && this._queuedSeekTo === null) {
        const time = this.getCurrentTime();
        if (time !== this._lastTimeChanged) {
          this._lastTimeChanged = time;
          this._onPlaybackEvent(PlaybackEvent.TimeChanged, time);
        }
      }
    }, AudioPlayer.TIME_CHANGED_UPDATE_INTERVAL);
  }

  private loadFreeStreamer() {
    const config = new FSStreamConfiguration();
    config.cacheEnabled = false;
    config.seekingFromCacheEnabled = false;
    config.maxRetryCount = 3;                         // Retry attempts before considering stream failed
    config.enableTimeAndPitchConversion = true;
    config.requireStrictContentTypeChecking = false;
    config.automaticAudioSessionHandlingEnabled = false;
    config.httpConnectionBufferSize = 1024 * 64;      // 64 kB. bufferSize should match this.
    config.bufferSize = 1024 * 64;
    config.maxPrebufferedByteCount = 100000000;       // Max 100mb cache ahead. TODO: Time based maxBuffer
    config.requiredPrebufferSizeInSeconds = 5;        // Prebuffer 5 seconds before starting playback.
    //config.predefinedHttpHeaderValues               // Could be used to set auth headers

    this.playController = new FSAudioController();
    this.playController.configuration = config;
    this.playController.enableDebugOutput = true;
    this.playController.automaticAudioSessionHandlingEnabled = false;
    this.playController.onStateChange = (state: FSAudioStreamState) => {
      try {
        this.onFreeStreamerStateChange(state);
      } catch (ex) {
        this._log(`FreeStreamer: Error while updating audioplayer state`);
      }
    }
    this.playController.onMetaDataAvailable = (meta: NSDictionary) => {
      this._log('FreeStreamer.onMetaDataAvailable');
      //this._log('FreeStreamer: metadata received '+ JSON.stringify(Object.keys(meta)));
    }
    this.playController.onFailure = (errorType: FSAudioStreamError, errorText: string) => {
      this._log(`FreeStreamer.onFailure: (${errorType}) ${errorText}`);
    }
    this._log('FreeStreamer instance created.');
    this.playController.delegate = new FSAudioControllerDelegateImpl().withForwardingTo(this);
  }

  public get isReady(): Promise<any> {
    return Promise.resolve();
  }

  public preparePlaylist(playlist: Playlist) {
    this._log('preparePlaylist');
    if (!this._hasLoadedFreeStreamer || this.playController) {
      this._log('Reloading FreeStreamer before new playlist...');
      this.reloadFreeStreamer();
      this._hasLoadedFreeStreamer = true;
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
    this._log('Pause');
    if (this.playController && this.playController.activeStream && !this.playController.activeStream.isPaused()) {
      this.playController.pause();
    }
  }
  
  public stop() {
    this._log('Stop');
    this.cancelSleepTimer();
    if (this.playController) {
      this.playController.stop();
      this.clearNowPlayingInfo();
    }
  }

  public isPlaying(): boolean {
    return this.playController && this.playController.isPlaying();
  }
  
  public skipToNext() {
    this._log('skipToNext');
    if (this.playController && this.playController.hasNextItem()) {
      this.playController.playNextItem();
    }
  }
  
  public skipToPrevious() {
    this._log('skipToPrevious');
    if (this.playController && this.playController.hasPreviousItem()) {
      this.playController.playPreviousItem();
    }
  }

  public skipToPlaylistIndex(playlistIndex: number) {
    this._log('skipToPlaylistIndex: '+ playlistIndex);
    if (this.playController) {
      this.playController.playItemAtIndex(playlistIndex);
    }
  }
  
  public setRate(rate: number) {
    this._log('setRate: '+ rate);
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
    if (this.playController && this.playController.activeStream) {
      return Math.floor(this.playController.activeStream.duration.playbackTimeInSeconds * 1000);
    }
  }

  public getCurrentTime(): number {
    if (this.playController && this.playController.activeStream) {
      // Math.max because FreeStreamer can return negative playbackTime at beginning of playback.
      return Math.max(Math.floor(this.playController.activeStream.currentTimePlayed.playbackTimeInSeconds * 1000), 0);
    }
  }

  public getCurrentPlaylistIndex() {
    return this.playController.currentPlaylistItemIndex;
  }

  public seekTo(offset: number) {
    // See https://github.com/dfg-nota/FreeStreamer/blob/master/FreeStreamer/FreeStreamer/FSAudioStream.mm#L1431
    if (this.playController && this.playController.activeStream) {
      const knownDuration = this.getDuration();
      // In FreeStreamer if position (0-1 of full duration) is over 0 it is used, else it uses the less accurate minute/second variables.
      const seekToSeconds: number = +(offset / 1000).toFixed(3);
      const position: FSStreamPosition = {
        minute: Math.floor(seekToSeconds / 60),
        second: seekToSeconds % 60,
        playbackTimeInSeconds:  seekToSeconds,
        position: knownDuration > 0 ? Math.min(1, offset / knownDuration) : 0
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
    this._log('cancelSleepTimer');
    if (this._sleepTimer != undefined) {
      clearInterval(this._sleepTimer);
      this._sleepTimer = undefined;
      this._sleepTimerMillisecsLeft = 0;
      this._onPlaybackEvent(PlaybackEvent.SleepTimerChanged);
    }
  }

  public pauseSleepTimer() {
    this._log('pauseSleepTimer');
    if (this._sleepTimer != undefined) {
      this._sleepTimerPaused = true;
    }
  }

  public resumeSleepTimer() {
    this._log('resumeSleepTimer');
    if (this._sleepTimer != undefined) {
      this._sleepTimerPaused = false;
    }
  }

  public setSeekIntervalSeconds(seconds: number) {
    this._log('setSeekIntervalSeconds: '+ seconds);
    this.seekIntervalSeconds = seconds;
    this.updateRemoteControlPreferredIntervals(seconds);
  }
  
  public destroy() {
    this._log('destroy');
    clearInterval(this._timeChangedInterval);
    this.stop();
    this.unsubscribeFromAudioRouteChanges();
    this.enableRemoteControlCommands(false);
    this.clearNowPlayingInfo();
    this._log('Releasing FreeStreamer resources');
    this.playController.delegate = null;
    this.playController = null;
  }

  // ------------------------------------------------------------------------------
  // Internal helpers and event handlers

  private onNetworkStreamingFailed() {
    this._log(`FreeStreamer - onNetworkStreamingFailed`);
    this._onPlaybackEvent(PlaybackEvent.WaitingForNetwork);
  }

  private reloadFreeStreamer() {
    this._log('reloadFreeStreamer');
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
        this._log(`FreeStreamer: Volume faded out!`);
        if (this.playController.activeStream
            && !this.playController.activeStream.isPaused()) {
          // Extra check on paused state,
          // since a pause() call would resume playing if already paused.
          this._log(`FreeStreamer: Volume faded out, now pausing!`);
          this.playController.pause();
        }
        this.playController.setVolume(previousVolume);
        clearInterval(fadeInterval);
      }
    }, fadeTickMillis);
  }

  private registerRemoteControlHandlers() {
    // NOTE: iOS RemoteCommandCenter can have a max of 3 commands. Any others won't be shown.
    // NOTE: removeTarget(null) removes all previously registered handlers
    const remote = MPRemoteCommandCenter.sharedCommandCenter();

    remote.skipBackwardCommand.removeTarget(null);
    remote.skipBackwardCommand.addTargetWithHandler((evt) => this.doRemoteEventOnMainThread(() => {
      this._log(`RemoteControl - Skip Backward ${this.seekIntervalSeconds}s`);
      this.seekRelative(this.seekIntervalSeconds * -1000);
    }));

    remote.playCommand.removeTarget(null);
    remote.playCommand.addTargetWithHandler((evt) => this.doRemoteEventOnMainThread(() => {
      this._log('RemoteControl - Play');
      this.play();
    }));

    remote.pauseCommand.removeTarget(null);
    remote.pauseCommand.addTargetWithHandler((evt) => this.doRemoteEventOnMainThread(() => {
      this._log('RemoteControl - Pause');
      this.pause();
    }));

    remote.skipForwardCommand.removeTarget(null);
    remote.skipForwardCommand.addTargetWithHandler((evt) => this.doRemoteEventOnMainThread(() => {
      this._log(`RemoteControl - Skip Forward ${this.seekIntervalSeconds}s`);
      this.seekRelative(this.seekIntervalSeconds * 1000);
    }));

    this.updateRemoteControlPreferredIntervals(this.seekIntervalSeconds);
  }

  private enableRemoteControlCommands(enabled : boolean) {
    const remote = MPRemoteCommandCenter.sharedCommandCenter();
    remote.skipBackwardCommand.enabled = enabled;
    remote.playCommand.enabled = enabled;
    remote.pauseCommand.enabled = enabled;
    remote.togglePlayPauseCommand.enabled = enabled;
    remote.skipForwardCommand.enabled = enabled;
  }

  private updateRemoteControlPreferredIntervals(preferredInterval: number) {
    const remote = MPRemoteCommandCenter.sharedCommandCenter();
    (<MPSkipIntervalCommand>remote.skipBackwardCommand).preferredIntervals = <any>[preferredInterval];
    (<MPSkipIntervalCommand>remote.skipForwardCommand).preferredIntervals = <any>[preferredInterval];
  }

  private doRemoteEventOnMainThread(func: () => void): MPRemoteCommandHandlerStatus {
    this.doOnMainThread(func);
    return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
  }

  private doOnMainThread<T>(func: () => T): Promise<T> {
    return Promise.resolve().then(() => {
      return func();
    });
  }

  private subscribeToAudioRouteChanges() {
    this._routeChangeObs = application.ios.addNotificationObserver(AVAudioSessionRouteChangeNotification, (notification: any) => {
      const userInfo: NSDictionary = notification.userInfo;
      const routeChangeReason: number = userInfo.objectForKey(AVAudioSessionRouteChangeReasonKey);
      const previousRoute = userInfo.objectForKey(AVAudioSessionRouteChangePreviousRouteKey);
      this._log('AVAudioSession -> RouteChange reason: '+ routeChangeReason);
      // Check if headphones are unplugged (speakers cannot become unavailable)
      if (routeChangeReason === AVAudioSessionRouteChangeReason.AVAudioSessionRouteChangeReasonOldDeviceUnavailable) {
        // FIX: callback not on main thread, execute pause in a resolved promise instead
        // see https://github.com/Nativescript/Nativescript/issues/1673
        this.doOnMainThread(() => {
          this.pause();
        });
      }
    });
  }

  private unsubscribeFromAudioRouteChanges() {
    application.ios.removeNotificationObserver(this._routeChangeObs, AVAudioSessionRouteChangeNotification);
  }

  private clearNowPlayingInfo() {
    MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo = null;
    this.enableRemoteControlCommands(false);
    this._log('NowPlayingInfo cleared');
  }

  private setNowPlayingInfo() {
    const currentTrack: MediaTrack = this.getCurrentMediaTrack();
    if (currentTrack === null) {
      return;
    }
    const playingInfo = NSMutableDictionary.alloc().init();
    if (currentTrack.title) {
        playingInfo.setObjectForKey(currentTrack.title, MPMediaItemPropertyTitle);
    }
    if (currentTrack.artist) {
        playingInfo.setObjectForKey(currentTrack.artist, MPMediaItemPropertyArtist);
    }
    if (currentTrack.album) {
        playingInfo.setObjectForKey(currentTrack.album, MPMediaItemPropertyAlbumTitle);
    }
    playingInfo.setObjectForKey(this.getCurrentPlaylistIndex(), MPNowPlayingInfoPropertyChapterNumber);
    playingInfo.setObjectForKey(this.playlist.tracks.length, MPNowPlayingInfoPropertyChapterCount);
    playingInfo.setObjectForKey(this.isPlaying() ? this.getRate() : 0, MPNowPlayingInfoPropertyPlaybackRate);
    playingInfo.setObjectForKey(this.getCurrentTime() / 1000, MPNowPlayingInfoPropertyElapsedPlaybackTime);
    const knownDuration = this.getDuration();
    if (knownDuration > 0) {
      playingInfo.setObjectForKey(knownDuration / 1000, MPMediaItemPropertyPlaybackDuration);
    }

    const oldPlayingInfo = MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo;
    if (oldPlayingInfo && oldPlayingInfo.objectForKey(MPMediaItemPropertyAlbumTitle) === currentTrack.album
        && oldPlayingInfo.objectForKey(MPMediaItemPropertyArtwork)) {
      // reuse album cover
      console.log(`NowPlaying - artwork reused`);
      playingInfo.setObjectForKey(oldPlayingInfo.objectForKey(MPMediaItemPropertyArtwork), MPMediaItemPropertyArtwork);
    } else if (!this._isRetrievingArtwork && currentTrack.albumArtUrl) {
      // get new album name
      console.log(`NowPlaying - load async`);
      this.loadRemoteControlArtworkAsync(currentTrack.albumArtUrl);
    }

    MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo = playingInfo;
    this.enableRemoteControlCommands(true);
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

  private getCurrentMediaTrack(): MediaTrack {
    return this.playlist.tracks[this.getCurrentPlaylistIndex()];
  }

  private currentMediaTrackIsLocalFile(): boolean {
    return this.getCurrentMediaTrack().url.substr(0, 4).toLowerCase() !== 'http';
  }

  private get AVAudioSession() {
    return utils.ios.getter(AVAudioSession, AVAudioSession.sharedInstance);
  }

  private audioSessionSetActive(active: boolean): boolean {
    try {
      let result;
      if (active) {
        result = 
          this.AVAudioSession.setCategoryError(AVAudioSessionCategoryPlayback) &&
          this.AVAudioSession.setActiveWithOptionsError(true, AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation);
        this._log('FreeStreamer: AVAudioSession - setActive = '+ result);
      } else {
        result = 
          this.AVAudioSession.setActiveWithOptionsError(false, AVAudioSessionSetActiveFlags_NotifyOthersOnDeactivation);
        this._log('FreeStreamer: AVAudioSession - deactivate = '+ result);
      }
      return result;
    } catch (error) {
      this._log('FreeStreamer: ERROR - Unable to set AudioSession to '+ active);
    }
  }

  private loadRemoteControlArtworkAsync(artworkUrl: string) {
    this._isRetrievingArtwork = true;

    const imagePromise = imageSrc.isFileOrResourcePath(artworkUrl) ?
      Promise.resolve(imageSrc.fromFileOrResource(artworkUrl)) : imageSrc.fromUrl(artworkUrl);

    imagePromise
      .then((image) => {
        console.log(`Received image for url: ${artworkUrl}`);
        if (this.getCurrentMediaTrack().albumArtUrl === artworkUrl) {
          const artwork = MPMediaItemArtwork.alloc().initWithImage(image.ios);
          this.updateNowPlayingInfoKey(MPMediaItemPropertyArtwork, artwork);
          console.log(`Updated NowPlayingInfo artwork`);
        } else {
          console.log(`Received artwork, but track changed in the meantime`);
        }
        this._isRetrievingArtwork = false;
      })
      .catch(() => {
        console.log(`loadRemoteControlArtworkAsync failed for url: ${artworkUrl}`);
        this._isRetrievingArtwork = false;
      });
  }

  private onFreeStreamerStateChange(toState: FSAudioStreamState) {
    switch(toState) {
      case FSAudioStreamState.kFsAudioStreamBuffering:
      case FSAudioStreamState.kFsAudioStreamSeeking: {
        // this.audioSessionSetActive(true);
        this._onPlaybackEvent(PlaybackEvent.Buffering);
        break;
      }
      case FSAudioStreamState.kFsAudioStreamPlaying: {
        this._log('FreeStreamer: Playing');
        this.audioSessionSetActive(true);
        // Update playback rate on newly started tracks
        setTimeout(() => {
          if (this.getRate() != this._playbackRate && this.playController.activeStream) {
              this.playController.activeStream.setPlayRate(this._playbackRate);
          }
        }, 25);
        this._onPlaybackEvent(PlaybackEvent.Playing);
        this.setNowPlayingInfo();
        if (this._queuedSeekTo !== null) {
          if (this.currentMediaTrackIsLocalFile()) {
            this._log(`FreeStreamer: Queued Seek to ${this._queuedSeekTo} (delayed)`);
            this.playController.setVolume(0);
            setTimeout(() => {
              this._log('FreeStreamer: Queued Seek to '+ this._queuedSeekTo + ' (now!)');
              this.seekTo(this._queuedSeekTo);
              this.playController.setVolume(1);
              this._queuedSeekTo = null;
            }, 25);
          } else {
            this._log('FreeStreamer: Queued Seek to '+ this._queuedSeekTo);
            this.seekTo(this._queuedSeekTo);
            this._queuedSeekTo = null;
          }
        }
        this.resumeSleepTimer();
        break;
      }
      case FSAudioStreamState.kFsAudioStreamPaused: {
        this._log('FreeStreamer: Paused');
        this.audioSessionSetActive(false);
        this._onPlaybackEvent(PlaybackEvent.Paused);
        this.updateNowPlayingInfoPositionTracking(true);
        this.pauseSleepTimer();
        break;
      }
      case FSAudioStreamState.kFsAudioStreamStopped: {
        this._log('FreeStreamer: Stopped');
        this.audioSessionSetActive(false);
        this._onPlaybackEvent(PlaybackEvent.Stopped);
        break;
      }
      case FSAudioStreamState.kFSAudioStreamEndOfFile: {
        this._log('FreeStreamer: EndOfFile (Fully Buffered)');
        break;
      }
      case FSAudioStreamState.kFsAudioStreamPlaybackCompleted: {
        this._log('FreeStreamer: Playback Completed');
        this._onPlaybackEvent(PlaybackEvent.EndOfTrackReached);
        if (this.getCurrentPlaylistIndex() < this.playlist.length - 1) {
          this.setNowPlayingInfo();
        } else {
          this.audioSessionSetActive(false);
          this._onPlaybackEvent(PlaybackEvent.EndOfPlaylistReached);
          this.clearNowPlayingInfo();
          this.cancelSleepTimer();
        }
        break;
      }
      case FSAudioStreamState.kFsAudioStreamFailed: {
        this._log('FreeStreamer: StreamFailed');
        this.audioSessionSetActive(false);
        this._onPlaybackEvent(PlaybackEvent.EncounteredError);
        if (this.playController.configuration.maxRetryCount === 0) {
          this.onNetworkStreamingFailed();
        }
        break;
      }
      case FSAudioStreamState.kFsAudioStreamRetryingFailed: {
        this._log('FreeStreamer: StreamRetryingFailed');
        this.audioSessionSetActive(false);
        this.onNetworkStreamingFailed();
        break;
      }
      default: {
        this._log('FreeStreamer: state change: '+ toState);
        break;
      }
    }
  }

  /**
   * Should not be necessary since iOS 7.1
   * See http://lukagabric.com/ios-audio-player-with-lock-screen-controls/
   */
  // private subscribeToRemoteControlEvents() {
  //   this._log('Begin receiving remote control events');
  //   const app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
  //   app.beginReceivingRemoteControlEvents();
  // }
  // private unsubscribeFromRemoteControlEvents() {
  //   this._log('End receiving remote control events');
  //   const app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);
  //   app.endReceivingRemoteControlEvents();
  // }
}