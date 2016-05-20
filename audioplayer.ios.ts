import {CommonAudioPlayer, MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';
import * as app from 'application';

// TODO: Do all exports in a main.ts instead?
export {MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';

export class MyLYTPlayerDelegate extends NSObject implements LYTPlayerDelegate {
    
    public static ObjCProtocols = [ LYTPlayerDelegate ]
    
    public init() {
        return super.init();
    }
    
    public audioPlayerDidChangeStateFromToState(player: LYTPlayer, fromState, toState) {
        console.log("delegate.didChangeState: "+ fromState + " -> "+ toState);
    }
    public audioPlayerDidFinishPlayingTrack(player: LYTPlayer, track: LYTAudioTrack) {
        console.log("delegate.didFinishPlayingTrack", track.title);
    }
    public audioPlayerDidFindDurationForTrack(player: LYTPlayer, duration: number, track: LYTAudioTrack) {
        console.log("delegate.didFindDurationForTrack: "+ duration, track.title);
    }
    public audioPlayerDidUpdateBufferingForTrack(player: LYTPlayer, buffered: number, track: LYTAudioTrack) {
        console.log("delegate.didUpdateBufferingForTrack: "+ buffered, track.title);
    }
    public audioPlayerDidChangeToTrack(player: LYTPlayer, track: LYTAudioTrack) {
        console.log("delegate.DidChangeToTrack", track.title);
    }
    public audioPlayerDidFinishSeekingToTime(player: LYTPlayer, time: number) {
        console.log("delegate.DidFinishSeekingToTime: "+ time);
    }
    public audioPlayerDidEncounterError(player: LYTPlayer, error: NSError) {
        console.log("delegate.didEncounterError: "+ error.localizedDescription);
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
        console.log("LYTPlayerDelegate methods: ", Object.keys(LYTPlayerDelegate.prototype))
        this.player.delegate = new MyLYTPlayerDelegate();
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
        if (playlistIndex) {
            this.player.skipToPlaylistIndexOnCompletion(playlistIndex, () => {
                this.player.seekToTimeMilisOnCompletion(milisecs, () => {
                    console.log("TNS-SeekTo OnCompletion: finished seeking");
                });
            });
        }
    }
    public release() {}
    
    
    public audioPlayerDidChangeStateFromToState(player: LYTPlayer, fromState, toState) {
        console.log("delegate.didChangeState: "+ fromState + " -> "+ toState);
    }
    public audioPlayerDidFinishPlayingTrack(player: LYTPlayer, track: LYTAudioTrack) {
        console.log("delegate.didFinishPlayingTrack", track.title);
    }
    public audioPlayerDidFindDurationForTrack(player: LYTPlayer, duration: number, track: LYTAudioTrack) {
        console.log("delegate.didFindDurationForTrack: "+ duration, track.title);
    }
    public audioPlayerDidUpdateBufferingForTrack(player: LYTPlayer, buffered: number, track: LYTAudioTrack) {
        console.log("delegate.didUpdateBufferingForTrack: "+ buffered, track.title);
    }
    public audioPlayerDidChangeToTrack(player: LYTPlayer, track: LYTAudioTrack) {
        console.log("delegate.DidChangeToTrack", track.title);
    }
    public audioPlayerDidFinishSeekingToTime(player: LYTPlayer, time: number) {
        console.log("delegate.DidFinishSeekingToTime: "+ time);
    }
    public audioPlayerDidEncounterError(player: LYTPlayer, error: NSError) {
        console.log("delegate.didEncounterError: "+ error.localizedDescription);
    }
}