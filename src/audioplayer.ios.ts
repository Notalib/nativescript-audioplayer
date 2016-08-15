import {CommonAudioPlayer, MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';

// TODO: Do all exports in a main.ts instead?
export {MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';

// See API Docs for native audio playback framework:
// http://muhku.github.io/FreeStreamer/api/

export class FSAudioControllerDelegateImpl extends NSObject implements FSAudioControllerDelegate {
  
  public static ObjCProtocols = [ FSAudioControllerDelegate ]
  private audioPlayer: AudioPlayer;
  
  public init(): FSAudioControllerDelegateImpl {
    var self = super.init();
    if (self) {
      console.log("MyLYTPlayerDelegate initialized succesfully");
    }
    return self as FSAudioControllerDelegateImpl;
  }
  
  public withForwardingTo(player: AudioPlayer): FSAudioControllerDelegateImpl {
    this.audioPlayer = player;
    return this;
  }
  
  public audioControllerAllowPreloadingForStream(audioController: FSAudioController, stream: FSAudioStream): boolean {
    console.log("FreeStreamer: PRELOAD allowed for "+ stream.url.absoluteString);
    return true;
  }

	public audioControllerPreloadStartedForStream(audioController: FSAudioController, stream: FSAudioStream): void {
    console.log("FreeStreamer: PRELOAD started for "+ stream.url.absoluteString);
  }
}

export class AudioPlayer extends CommonAudioPlayer 
{
  public playController: FSAudioController;
  public seekIntervalSeconds: number = 15;
  public supportedPlaybackRate: number[] = [0.7, 1.0, 1.2, 1.5, 2.0];
  private _queuedSeek: number = -1;
  private _playbackRate: number = 1;
  
  constructor(playlist: Playlist) {
    super(playlist);
    this.ios = this;
    let config = new FSStreamConfiguration();
    config.cacheEnabled = false;
    config.maxRetryCount = 10000;                     // Always keep retrying
    config.enableTimeAndPitchConversion = true;
    config.requireStrictContentTypeChecking = false;
    config.automaticAudioSessionHandlingEnabled = true;
    //config.predefinedHttpHeaderValues               // TODO: Could be used to set auth headers
    config.httpConnectionBufferSize = 1024 * 64;      // 64 kB. bufferSize should match this.
    config.bufferSize = 1024 * 64;
    config.maxPrebufferedByteCount = 100000000;        // Max 100mb cache ahead. TODO: Time based maxBuffer
    config.requiredPrebufferSizeInSeconds = 5;       // Prebuffer at least 10 seconds before starting playback.
    this.playController = new FSAudioController();
    this.playController.configuration = config;
    this.playController.onStateChange = (state: FSAudioStreamState) => {
      this.didChangeState(state);
    }
    this.playController.onMetaDataAvailable = (meta: NSDictionary) => {
      this._log("FreeStreamer: metadata received...");
      this._log("FreeStreamer: metadata received "+ JSON.stringify(Object.keys(meta)));
    }
    this.playController.onFailure = (errorType: FSAudioStreamError, errorText: string) => {
      this._log("FreeStreamer: FAILURE! "+ errorText);
    }
    this._log("FreeStreamer instance retrieved!", this.playController);
    for (var track of this.playlist.tracks) {
      this._log('iOS - Creating LYTAudioTrack for: '+ track.title);
      let item = new FSPlaylistItem();
      item.url = NSURL.URLWithString(track.url);
      item.title = track.title;
      this.playController.addItem(item);
    }
    this.playController.delegate = new FSAudioControllerDelegateImpl().withForwardingTo(this);
    this.subscribeToRemoteControlEvents();
  }
  
  public addToPlaylist(track: MediaTrack) {
    // TODO: Define common interface for appending and replacing playlist items
    // FreeStreamer supports this very well. need to define the common interface first.
    this._log("iOS addToPlaylist not implemented");
  }
  
  public play() {
    this.playController.play();
  }
  
  public pause() {
    this.playController.pause();
  }
  
  public stop(fullStop: boolean) {
    this.playController.stop();
  }

  public isPlaying(): boolean {
    return this.playController.isPlaying();
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
    if (this.getRate() != rate && this.playController.isPlaying()) {
      this.playController.activeStream.setPlayRate(rate);
      this.updateNowPlayingInfoPositionTracking(false);
    }
  }

  public getRate(): number {
    if (this.playController.activeStream) {
      return this.playController.activeStream.playRate();
    }
  }

  public getDuration(): number {
    if (this.playController.activeStream) {
      return Math.floor(this.playController.activeStream.duration.playbackTimeInSeconds * 1000);
    }
  }

  public getCurrentTime(): number {
    if (this.playController.activeStream) {
      return Math.floor(this.playController.activeStream.currentTimePlayed.playbackTimeInSeconds * 1000);
    }
  }

  public getCurrentPlaylistIndex() {
    let currentTrack = this.getCurrentMediaTrack();
    if (currentTrack) {
      return this.playlist.tracks.indexOf(currentTrack);
    }
    return 0;
  }

  public seekTo(milisecs: number, playlistIndex?: number) {
    // See https://github.com/dfg-nota/FreeStreamer/blob/master/FreeStreamer/FreeStreamer/FSAudioStream.mm#L1431
    if (playlistIndex) {
      this._queuedSeek = milisecs;
      this.playController.playItemAtIndex(playlistIndex)
    } else {
      this.seekInternal(milisecs);
    }
  }
  
  public release() {
    this.clearNowPlayingInfo();
    this.unsubscribeFromRemoteControlEvents();
    if (this.playController.delegate) {
      this.playController.delegate = null;
    }
    this.playController.release();
    this.playController = null;
  }

  // ------------------------------------------------------------------------------
  // Internal helpers and event handlers

  private seekInternal(milisecs: number) {
    if (this.playController.activeStream) {
      let knownDuration = this.getDuration();
      // If position (0-1 of duration) is over 0 it is used, else it uses the less accurate minute/second.
      let position: FSStreamPosition = {
        minute: Math.floor(milisecs / 60000),
        second: milisecs / 1000 % 60,
        playbackTimeInSeconds:  milisecs / 1000,
        position: knownDuration > 0 ? milisecs / knownDuration : 0
      }
      this.playController.activeStream.seekToPosition(position);
    }
  }

  private subscribeToRemoteControlEvents() {
    UIApplication.sharedApplication().beginReceivingRemoteControlEvents();
    let remoteCommandCenter = MPRemoteCommandCenter.sharedCommandCenter();
    (<MPSkipIntervalCommand>remoteCommandCenter.skipBackwardCommand).preferredIntervals = <any>[this.seekIntervalSeconds];
    remoteCommandCenter.skipBackwardCommand.addTargetWithHandler((evt: MPRemoteCommandEvent) => {
      this._log('RemoteControl - Skip Backwards');
      this.seekInternal(this.getCurrentTime() - this.seekIntervalSeconds * 1000);
      return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
    });
    remoteCommandCenter.togglePlayPauseCommand.addTargetWithHandler(this.remoteTogglePlayPauseHandler);
    remoteCommandCenter.playCommand.addTargetWithHandler(this.remoteTogglePlayPauseHandler);
    remoteCommandCenter.pauseCommand.addTargetWithHandler(this.remoteTogglePlayPauseHandler);
    (<MPSkipIntervalCommand>remoteCommandCenter.skipForwardCommand).preferredIntervals = <any>[this.seekIntervalSeconds];
    remoteCommandCenter.skipForwardCommand.addTargetWithHandler((evt: MPRemoteCommandEvent) => {
      this._log('RemoteControl - Skip Forward');
      this.seekInternal(this.getCurrentTime() + this.seekIntervalSeconds * 1000);
      return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
    });
    remoteCommandCenter.changePlaybackRateCommand.enabled = true;
    remoteCommandCenter.changePlaybackRateCommand.supportedPlaybackRates = <any>this.supportedPlaybackRate;
    remoteCommandCenter.changePlaybackRateCommand.addTargetWithHandler((evt: MPChangePlaybackRateCommandEvent) => {
      this._log('RemoteControl - Set playback rate: '+ evt.playbackRate);
      return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
    });
    // remoteCommandCenter.bookmarkCommand.enabled = true;
    // remoteCommandCenter.bookmarkCommand.localizedTitle = "Sæt Bogmærke";
    // remoteCommandCenter.bookmarkCommand.addTargetWithHandler((evt: MPRemoteCommandEvent) => {
    //   let feedback = evt.command as MPFeedbackCommand;
    //   this._log('RemoteControl - Set bookmark: '+ feedback.active);
    //   return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
    // });
  }
 
  private remoteTogglePlayPauseHandler = (evt: MPRemoteCommandEvent) => {
    // FreeStreamer's pause() command is already a toggle.
    this._log('RemoteControl - Toggle play/pause');
    this.pause();
    return MPRemoteCommandHandlerStatus.MPRemoteCommandHandlerStatusSuccess;
  }

  private unsubscribeFromRemoteControlEvents() {
    UIApplication.sharedApplication().endReceivingRemoteControlEvents();
  }

  private clearNowPlayingInfo() {
    this._log('=== REMOVE NOWPLAYINGINFO! ===');
    MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo = null;
  }

  private setNowPlayingInfo() {
    let currentTrack: MediaTrack = this.getCurrentMediaTrack();
    if (currentTrack === null) {
      return;
    }
    let playingInfo = NSMutableDictionary.alloc().init();
    playingInfo.setObjectForKey(currentTrack.title, MPMediaItemPropertyTitle);
    playingInfo.setObjectForKey(currentTrack.artist, MPMediaItemPropertyArtist);
    playingInfo.setObjectForKey(currentTrack.album, MPMediaItemPropertyAlbumTitle);
    playingInfo.setObjectForKey(this.getCurrentPlaylistIndex(), MPNowPlayingInfoPropertyChapterNumber);
    playingInfo.setObjectForKey(this.playlist.tracks.length, MPNowPlayingInfoPropertyChapterCount);
    playingInfo.setObjectForKey(this.isPlaying() ? this.getRate() : 0, MPNowPlayingInfoPropertyPlaybackRate);
    playingInfo.setObjectForKey(this.getCurrentTime() / 1000, MPNowPlayingInfoPropertyElapsedPlaybackTime);
    let knownDuration = this.getDuration();
    if (knownDuration > 0) {
      playingInfo.setObjectForKey(knownDuration / 1000, MPMediaItemPropertyPlaybackDuration);
    }
    MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo = playingInfo;
    //console.log('Updated NowPlayingInfo:\n '+ MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo.description);
  }

  private updateNowPlayingInfoKey(key: string, value: any) {
    let playingInfo = NSMutableDictionary.alloc().initWithDictionary(MPNowPlayingInfoCenter.defaultCenter().nowPlayingInfo);
    //console.log("Update NowPlayingInfo with: "+ JSON.stringify({key: key, value: value}));
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
    let currentItem = this.playController.currentPlaylistItem;
    if (currentItem) {
      return this.getMediaTrackFromUrl(currentItem.url.absoluteString);
    }
    return null;
  }

  private getMediaTrackFromUrl(url: string) {
    let trackResult = this.playlist.tracks.filter((track) => track.url == url);
    if (trackResult.length > 0) {
      return trackResult[0];
    }
    return null;
  }
  
  private didChangeState(toState: FSAudioStreamState) {
    switch(toState) {
      case FSAudioStreamState.kFsAudioStreamBuffering:
      case FSAudioStreamState.kFsAudioStreamSeeking: {
        this._onPlaybackEvent(PlaybackEvent.Opening);
        break;
      }
      case FSAudioStreamState.kFsAudioStreamPlaying: {
        this._log("FreeStreamer: Playing");
        // Update playback rate on newly started tracks
        if (this.getRate() != this._playbackRate && this.playController.activeStream) {
          this.playController.activeStream.setPlayRate(this._playbackRate);
        }
        this._onPlaybackEvent(PlaybackEvent.Playing);
        this.setNowPlayingInfo();
        if (this._queuedSeek >= 0) {
          this._log("FreeStreamer: Queue Seek to "+ this._queuedSeek);
          this.seekInternal(this._queuedSeek);
          this._queuedSeek = -1;
        }
        break;
      }
      case FSAudioStreamState.kFsAudioStreamPaused: {
        this._log("FreeStreamer: Paused");
        this._onPlaybackEvent(PlaybackEvent.Paused);
        this.updateNowPlayingInfoPositionTracking(true);
        break;
      }
      case FSAudioStreamState.kFsAudioStreamStopped: {
        this._log("FreeStreamer: Stopped");
        this._onPlaybackEvent(PlaybackEvent.Stopped);
        break;
      }
      case FSAudioStreamState.kFSAudioStreamEndOfFile: {
        this._log("FreeStreamer: Stream fully buffered");
        break;
      }
      case FSAudioStreamState.kFsAudioStreamPlaybackCompleted: {
        this._log("FreeStreamer: Playback Completed");
        if (this.getCurrentPlaylistIndex() < this.playlist.length - 1) {
          this._onPlaybackEvent(PlaybackEvent.EndOfTrackReached);
          this.setNowPlayingInfo();
        } else {
          this._onPlaybackEvent(PlaybackEvent.EndOfPlaylistReached);
          this.clearNowPlayingInfo();
        }
        break;
      }
      case FSAudioStreamState.kFsAudioStreamFailed:
      case FSAudioStreamState.kFsAudioStreamRetryingFailed:
      // TODO: Better error handling and user feedback for above cases.
      default: {
        this._log("FreeStreamer: state change: "+ toState);
        break;
      }
    }
  }
}