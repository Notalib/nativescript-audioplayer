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
    config.httpConnectionBufferSize = 1024 * 64;      // 64 kB. bufferSize should match this.
    config.bufferSize = 1024 * 64;
    config.maxPrebufferedByteCount = 100000000;        // Max 100mb cache ahead. TODO: Time based maxBuffer
    config.requiredPrebufferSizeInSeconds = 10;       // Prebuffer at least 10 seconds before starting playback.
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
    this._log("FreeStreamer methods: ", Object.keys(FSAudioController.prototype))
    for (var track of this.playlist.tracks) {
      this._log('iOS - Creating LYTAudioTrack for: '+ track.title);
      let item = new FSPlaylistItem();
      item.url = NSURL.URLWithString(track.url);
      item.title = track.title;
      this.playController.addItem(item);
    }
    //this._log("FSAudioControllerDelegateImpl methods: ", Object.keys(FSAudioControllerDelegateImpl.prototype));
    this.playController.delegate = new FSAudioControllerDelegateImpl().withForwardingTo(this);
  }
  
  private getNSURL(urlString: string) {
    return NSURL.URLWithString(urlString);
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
    let currentItem = this.playController.currentPlaylistItem;
    if (currentItem) {
      let currentTrack = this.getMediaTrackFromUrl(currentItem.url.absoluteString);
      if (currentTrack) {
        return this.playlist.tracks.indexOf(currentTrack);
      }
    }
    return 0;
  }

  private getMediaTrackFromUrl(url: string) {
    let trackResult = this.playlist.tracks.filter((track) => track.url == url);
    if (trackResult.length > 0) {
      return trackResult[0];
    }
    return null;
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

  private seekInternal(milisecs: number) {
    if (this.playController.activeStream) {
      let knownDuration = this.getDuration();
      // If position (0-1 of duration) is over 0 it is used, else it uses the less accurate minute/second.
      let position: FSStreamPosition = {
        minute: Math.floor(milisecs / 60000),
        second: milisecs / 1000 % 60,
        playbackTimeInSeconds:  milisecs / 1000,
        position: knownDuration > 0 ? milisecs / knownDuration: 0
      }
      this.playController.activeStream.seekToPosition(position);
    }
  }
  
  public release() {
    if (this.playController.delegate) {
      this.playController.delegate = null;
    }
    this.playController.release();
    this.playController = null;
  }
  
  public didChangeState(toState: FSAudioStreamState) {
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
        } else {
          this._onPlaybackEvent(PlaybackEvent.EndOfPlaylistReached);
        }
        break;
      }
      case FSAudioStreamState.kFsAudioStreamFailed:
      case FSAudioStreamState.kFsAudioStreamRetryingFailed:
      // TODO: Handle errors better and give user feedback.
      default: {
        this._log("FreeStreamer: state change: "+ toState);
        break;
      }
    }
  }
}