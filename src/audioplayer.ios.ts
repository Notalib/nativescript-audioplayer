import { CommonAudioPlayer, MediaTrack, Playlist, PlaybackEvent } from './audioplayer.common';
import * as app from 'application';

// TODO: Do all exports in a main.ts instead?
export { MediaTrack, Playlist, PlaybackEvent } from './audioplayer.common';

// declare var LYTAudioPlayer: any;

export class AudioPlayer extends CommonAudioPlayer 
{
    public player: LYTAudioPlayer;
    private _queuedSeek: number = -1;
    private seekIntervalSeconds = 15;
    
    constructor() {
        super();
    }
    
    public isReady = Promise.resolve(true);
    
    public preparePlaylist(playlist: Playlist) {
    }
    
    private getNSURL(urlString: string) {
        return NSURL.URLWithString(urlString);
    }
    
    public addToPlaylist(track: MediaTrack) {}
    
    public play() {
        try {
            // const item = new AVPlayerItem(NSURL.URLWithString("https://archive.org/download/George-Orwell-1984-Audio-book/1984-01.mp3"));
            // const player = new AVPlayer(item);
            this.player = new LYTAudioPlayer();
            console.log(`Player: ${this.player}`);
            this.player.play();
            // this.player.play();
        } catch(err) {
            console.log(`Err: ${err}`);
        }
    }
    
    public pause() {
        this.player.togglePlayback();
    }
    
    public stop() {
        this.player.stop();
    }
    
    public isPlaying(): boolean {
        return false;
        // return this.player.isPlaying;
    }
    
    public skipToNext() {
    }
    
    public skipToPrevious() {
    }

    public skipToPlaylistIndex(playlistIndex: number) {
    }
    
    public setRate(rate: number) {
    }
    public getRate(): number {
        return 1;
    }
    public getDuration(): number {
        return 1000;
    }
    public getCurrentTime(): number { return 0; }
    public getCurrentPlaylistIndex() { return 0; }
    public seekTo(milisecs: number, playlistIndex?: number) {
        //
    }
    
    public release() {
        delete this.player;
    }
    
    // public didChangeStateFromTo(fromState: LYTPlayerState, toState: LYTPlayerState) {
    //     console.log("delegate.didChangeState: "+ fromState + " -> "+ toState);
    // }
    // public didFinishPlayingTrack(track: LYTAudioTrack) {
    //     console.log("delegate.didFinishPlayingTrack", track.title);
    //     this._onPlaybackEvent(PlaybackEvent.EndOfTrackReached);
    // }
    // public didFindDurationForTrack(duration: number, track: LYTAudioTrack) {
    //     console.log("delegate.didFindDurationForTrack: "+ duration, track.title);
    // }
    // public didUpdateBufferedDurationForTrack(buffered: number, track: LYTAudioTrack) {
    //     console.log("delegate.didUpdateBufferingForTrack: "+ buffered, track.title);
    // }
    // public didChangeToTrack(track: LYTAudioTrack) {
    //     console.log("delegate.DidChangeToTrack", track.title);
    // }
    // public didEncounterError(error: NSError) {
    //     console.log("delegate.didEncounterError: "+ error.localizedDescription);
    // }
    
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
                if (this.isPlaying()) {
                    // TODO: fade out volume
                    //   this.fadeOutVolumeAndPause();
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
        if (this._sleepTimer != undefined) {
            this._log('pauseSleepTimer');
            this._sleepTimerPaused = true;
        }
    }
    
    public resumeSleepTimer() {
        if (this._sleepTimer != undefined) {
            this._log('resumeSleepTimer');
            this._sleepTimerPaused = false;
        }
    }

    public setSeekIntervalSeconds(seconds: number) {
        this._log('setSeekIntervalSeconds: '+ seconds);
        this.seekIntervalSeconds = seconds;
        // this.updateRemoteControlPreferredIntervals(seconds);
    }
    
    public destroy() {
        this._log('destroy');
        // clearInterval(this._timeChangedInterval);
        this.stop();
        // this.unsubscribeFromAudioRouteChanges();
        // this.enableRemoteControlCommands(false);
        // this.clearNowPlayingInfo();
        this.player = null;
        // this.playController.delegate = null;
        // this.playController = null;
    }
}
