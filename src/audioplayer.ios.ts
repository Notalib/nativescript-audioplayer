import {CommonAudioPlayer, MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';
import * as app from 'application';

// TODO: Do all exports in a main.ts instead?
export {MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';

export class LYTPlayerDelegateImpl extends NSObject implements LYTPlayerDelegate {
    
    public static ObjCProtocols = [ LYTPlayerDelegate ]
    private audioPlayer: AudioPlayer;
    
    public init(): LYTPlayerDelegateImpl {
        var self = super.init();
        if (self) {
            console.log("MyLYTPlayerDelegate initialized succesfully");
        }
        return self as LYTPlayerDelegateImpl;
    }
    
    public withForwardingTo(player: AudioPlayer): LYTPlayerDelegateImpl {
        this.audioPlayer = player;
        return this;
    }
    
    public didChangeStateFromTo(fromState: LYTPlayerState, toState: LYTPlayerState) {
        this.audioPlayer.didChangeStateFromTo(fromState, toState);
    }
    public didFinishPlayingTrack(track: LYTAudioTrack) {
        this.audioPlayer.didFinishPlayingTrack(track);
    }
    public didFindDurationForTrack(duration: number, track: LYTAudioTrack) {
        this.audioPlayer.didFindDurationForTrack(duration, track);
    }
    public didUpdateBufferedDurationForTrack(buffered: number, track: LYTAudioTrack) {
        this.audioPlayer.didUpdateBufferedDurationForTrack(buffered, track);
    }
    public didChangeToTrack(track: LYTAudioTrack) {
        this.audioPlayer.didChangeToTrack(track);
    }
    public didEncounterError(error: NSError) {
        this.audioPlayer.didEncounterError(error);
    }
}

export class AudioPlayer extends CommonAudioPlayer 
{
    public player: LYTPlayer;
    private _queuedSeek: number = -1;
    
    constructor(playlist: Playlist) {
        super(playlist);
        this.player = LYTPlayer.sharedInstance();
        if (this.player) {
            console.log("LYTPlayer instance retrieved!", this.player);
            console.log("LYTPlayer methods: ", Object.keys(LYTPlayer.prototype))
            let iosPlaylist = new LYTPlaylist()
            for (var track of this.playlist.tracks) {
                this._log('iOS - Creating LYTAudioTrack for: '+ track.title);
                iosPlaylist.addTrack(this.getNewLYTTrack(track));
            }
            this.player.loadPlaylistAndAutoplay(iosPlaylist, false);
        }
        console.log("LYTPlayerDelegate methods: ", Object.keys(LYTPlayerDelegate.prototype));
        this.player.delegate = new LYTPlayerDelegateImpl().withForwardingTo(this);
    }
    
    private getNewLYTTrack(track: MediaTrack) {
        return new LYTAudioTrack({ url: this.getNSURL(track.url),
            title: track.title, artist: track.artist, album: track.album, albumArtUrl: this.getNSURL(track.albumArtUrl) });
    }
    
    private getNSURL(urlString: string) {
        return NSURL.URLWithString(urlString);
    }
    
    public addToPlaylist(track: MediaTrack) {}
    
    public play() {
        this.player.play();
    }
    
    public pause() {
        this.player.pause();
    }
    
    public stop(fullStop: boolean) {
        this.player.stop();
    }

    public isPlaying(): boolean {
        return this.player.isPlaying;
    }
    
    public skipToNext() {
        this.player.nextAudioTrack();
    }
    
    public skipToPrevious() {
        this.player.previousAudioTrack();
    }
    
    public setRate(rate: number) {
        this.player.playbackRate = rate;
    }
    public getRate(): number {
        return this.player.playbackRate;
    }
    public getDuration(): number {
        return this.player.currentTrackDuration;
    }
    public getCurrentTime(): number { return this.player.currentTime; }
    public getCurrentPlaylistIndex() { return this.player.currentPlaylistIndex; }
    public seekTo(milisecs: number, playlistIndex?: number) {
        if (playlistIndex && playlistIndex != this.player.currentPlaylistIndex) {
            this.player.skipToPlaylistIndexOnCompletion(playlistIndex, () => {
                this.player.seekToTimeMilisOnCompletion(milisecs, () => {
                    this._log("Finished seeking");
                });
            });
        } else {
            this.player.seekToTimeMilisOnCompletion(milisecs, () => {
                this._log("Finished seeking");
            });
        }
    }
    
    public release() {
        if (this.player.delegate) {
            delete this.player.delegate;
        }
        delete this.player;
    }
    
    public didChangeStateFromTo(fromState: LYTPlayerState, toState: LYTPlayerState) {
        console.log("delegate.didChangeState: "+ fromState + " -> "+ toState);
        switch(toState) {
            case LYTPlayerState.Playing:
                this._onPlaybackEvent(PlaybackEvent.Playing);
                break;
            case LYTPlayerState.Paused:
                this._onPlaybackEvent(PlaybackEvent.Paused);
                break;
            case LYTPlayerState.Stopped:
                this._onPlaybackEvent(PlaybackEvent.Stopped);
                break;
        }
    }
    public didFinishPlayingTrack(track: LYTAudioTrack) {
        console.log("delegate.didFinishPlayingTrack", track.title);
        this._onPlaybackEvent(PlaybackEvent.EndOfTrackReached);
    }
    public didFindDurationForTrack(duration: number, track: LYTAudioTrack) {
        console.log("delegate.didFindDurationForTrack: "+ duration, track.title);
    }
    public didUpdateBufferedDurationForTrack(buffered: number, track: LYTAudioTrack) {
        console.log("delegate.didUpdateBufferingForTrack: "+ buffered, track.title);
    }
    public didChangeToTrack(track: LYTAudioTrack) {
        console.log("delegate.DidChangeToTrack", track.title);
    }
    public didEncounterError(error: NSError) {
        console.log("delegate.didEncounterError: "+ error.localizedDescription);
    }
}