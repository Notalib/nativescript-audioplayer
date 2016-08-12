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
        return true;
    }

	public audioControllerPreloadStartedForStream(audioController: FSAudioController, stream: FSAudioStream): void {
        
    }
}

export class AudioPlayer extends CommonAudioPlayer 
{
    public playController: FSAudioController;
    private _queuedSeek: number = -1;
    
    constructor(playlist: Playlist) {
        super(playlist);
        this.ios = this;
        let config = new FSStreamConfiguration();
        config.cacheEnabled = false;
        config.enableTimeAndPitchConversion = true;
        config.requireStrictContentTypeChecking = false;
        config.httpConnectionBufferSize = 1024 * 512; // 512 kB
        config.bufferSize = 1024 * 512; // audio buffer and httpBuffer should be the same size
        config.maxPrebufferedByteCount = 50000000 // Max 50mb cache ahead. TODO: Time based maxBuffer
        this.playController = new FSAudioController();
        this.playController.configuration = config;
        this.playController.onStateChange = (state: FSAudioStreamState) => {
            console.log("FreeStreamer: state change: "+ state);
            if (state == FSAudioStreamState.kFsAudioStreamPlaying) {
                console.log("FreeStreamer PLAYING!");
                this._onPlaybackEvent(PlaybackEvent.Playing);
                if (this._queuedSeek >= 0) {
                    console.log("FreeStreamer: Queue Seek to "+ this._queuedSeek);
                    this.seekInternal(this._queuedSeek);
                    this._queuedSeek = -1;
                }
            }
        }
        this.playController.onMetaDataAvailable = (meta: NSDictionary) => {
            console.log("FreeStreamer: metadata received...");
            console.log("FreeStreamer: metadata received "+ JSON.stringify(Object.keys(meta)));
        }
        this.playController.onFailure = (errorType: FSAudioStreamError, errorText: string) => {
            console.log("FreeStreamer: FAILURE! "+ errorText);
        }
        console.log("FreeStreamer instance retrieved!", this.playController);
        console.log("FreeStreamer methods: ", Object.keys(FSAudioController.prototype))
        for (var track of this.playlist.tracks) {
            this._log('iOS - Creating LYTAudioTrack for: '+ track.title);
            let item = new FSPlaylistItem();
            item.url = NSURL.URLWithString(track.url);
            item.title = track.title;
            this.playController.addItem(item);
        }
        //this.playController.play()
        //console.log("FSAudioControllerDelegateImpl methods: ", Object.keys(FSAudioControllerDelegateImpl.prototype));
        //this.playController.delegate = new FSAudioControllerDelegateImpl().withForwardingTo(this);
    }
    
    private getNSURL(urlString: string) {
        return NSURL.URLWithString(urlString);
    }
    
    public addToPlaylist(track: MediaTrack) {
        //TODO: Define common interface for appending and replacing playlist items
        console.log("iOS addToPlaylist not implemented");
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
    
    public setRate(rate: number) {
        if (this.playController.activeStream) {
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
            return ~~(this.playController.activeStream.duration.playbackTimeInSeconds * 1000);
        }
    }

    public getCurrentTime(): number {
        if (this.playController.activeStream) {
            return ~~(this.playController.activeStream.currentTimePlayed.playbackTimeInSeconds * 1000);
        }
    }

    public getCurrentPlaylistIndex() {
        let currentItem = this.playController.currentPlaylistItem;
        if (currentItem) {
            let currentTrack = this.playlist.tracks.filter((track) => track.url == currentItem.url.absoluteString);
            if (currentTrack.length > 0) {
                console.log("getCurrentPlaylistIndex: track url = "+ currentTrack[0].url);
                return this.playlist.tracks.indexOf(currentTrack[0]);
            }
        }
        return 0;
    }

    public seekTo(milisecs: number, playlistIndex?: number) {
        // See https://github.com/dfg-nota/FreeStreamer/blob/master/FreeStreamer/FreeStreamer/FSAudioStream.mm#L1431
        if (playlistIndex) {
            this.playController.playItemAtIndex(playlistIndex)
            this._queuedSeek = milisecs;
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
                position: knownDuration > 0 ? milisecs / knownDuration: 0// TODO: know duration? then set position, more accurate
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
    
    // public didChangeStateFromTo(fromState: LYTPlayerState, toState: LYTPlayerState) {
    //     console.log("delegate.didChangeState: "+ fromState + " -> "+ toState);
    //     switch(toState) {
    //         case LYTPlayerState.Playing:
    //             this._onPlaybackEvent(PlaybackEvent.Playing);
    //             break;
    //         case LYTPlayerState.Paused:
    //             this._onPlaybackEvent(PlaybackEvent.Paused);
    //             break;
    //         case LYTPlayerState.Stopped:
    //             this._onPlaybackEvent(PlaybackEvent.Stopped);
    //             break;
    //     }
    // }
}