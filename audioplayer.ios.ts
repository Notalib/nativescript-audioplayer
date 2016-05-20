import {CommonAudioPlayer, MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';
import * as app from 'application';

// TODO: Do all exports in a main.ts instead?
export {MediaTrack, Playlist, PlaybackEvent} from './audioplayer.common';

export class AudioPlayer extends CommonAudioPlayer
{
    public player: LYTPlayer;
    
    //TODO: Implement LYTPlayerDelegate for callbacks
    
    constructor(playlist: Playlist) {
        super(playlist);
        this.player = LYTPlayer.sharedInstance();
        if (this.player) {
            console.log("LYTPlayer instance retrieved!", this.player);
            let iosPlaylist = new LYTPlaylist()
            for (var track of this.playlist.tracks) {
                this._log('iOS - Creating LYTAudioTrack for: '+ track.title);
                iosPlaylist.addTrack(this.getNewLYTTrack(track));
            }
            this.player.loadPlaylist(iosPlaylist);
        }
    }
    
    private getNewLYTTrack(track: MediaTrack) {
        return new LYTAudioTrack(this.getNSURL(track.url),
            track.title, track.artist, track.album, this.getNSURL(track.albumArtUrl));
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
    
    //TODO: Implement the rest
    public setRate(rate: number) {}
    public getRate(): number { return 1; }
    public getDuration(): number { return 666; }
    public getCurrentTime(): number { return 1; }
    public getCurrentPlaylistIndex() { return 0; }
    public seekTo(milisecs: number, playlistIndex?: number) {
        console.log("obj props:");
        console.log("LYTPlayer methods: ", Object.keys(LYTPlayer.prototype))
        //console.log("seekTo Test 1: ", this.player.seekTotimeplaylistIndex);
        //console.log("seekTo Test 2: ", this.player.seekToTimePlaylistIndex);
        //this.player.seekTo(milisecs);
    }
    public release() {}
}