import { CommonAudioPlayer, MediaTrack, Playlist, PlaybackEvent } from './audioplayer.common';
import * as app from 'application';

// TODO: Do all exports in a main.ts instead?
export { MediaTrack, Playlist, PlaybackEvent } from './audioplayer.common';

// declare var LYTAudioPlayer: any;

class AudioPlayerDelegateImpl extends NSObject implements AudioPlayerDelegate {

    public static ObjCProtocols = [AudioPlayerDelegate];

    public latestLoadedDuration: number;
    public latestCurrentDuration: number;
    public latestCurrentTime: number;

    public onTimeUpdate: (seconds: number) => void;
    public onFinishedPlayingItem: (item: AudioItem) => void;
    public onMetadataReceived: (item: AudioItem, data: NSArray) => void;
    public onBufferingUpdate: (item: AudioItem, earliestBufferSec: number, latestBufferSec: number) => void;
    public onStateChanged: (from: AudioPlayerState, to: AudioPlayerState) => void;

    static new(): AudioPlayerDelegateImpl {
        return <AudioPlayerDelegateImpl>super.new() // calls new() on the NSObject
    }

    public audioPlayerDidChangeStateFromTo(audioPlayer: AudioPlayer, from: AudioPlayerState, state: AudioPlayerState): void {
        if (this.onStateChanged) {
            this.onStateChanged(from, state);
        }
    }

	public audioPlayerDidFindDurationFor(audioPlayer: AudioPlayer, duration: number, item: AudioItem): void {
        // console.log(`didFindDurationFor: ${item.title}: ${duration}`);
        this.latestCurrentDuration = duration;
    }

    public audioPlayerDidLoadEarliestLatestFor?(audioPlayer: AudioPlayer, earliest: number, latest: number, item: AudioItem): void {
        this.latestLoadedDuration = latest - earliest;
        if (this.onBufferingUpdate) {
            this.onBufferingUpdate(item, earliest, latest);
        }
    }

	public audioPlayerDidUpdateEmptyMetadataOnWithData(audioPlayer: AudioPlayer, item: AudioItem, data: NSArray): void {
        // console.log('didUpdateEmptyMetadata for '+ item.title);
        if (this.onMetadataReceived) {
            this.onMetadataReceived(item, data);
        }
    }

	public audioPlayerDidUpdateProgressionToPercentageRead(audioPlayer: AudioPlayer, time: number, percentageRead: number): void {
        // console.log(`didUpdateProgress: ${time} - ${percentageRead}`);
        this.latestCurrentTime = time;
        if (this.onTimeUpdate) {
            this.onTimeUpdate(time);
        }
    }

    public audioPlayerWillStartPlaying(audioPlayer: AudioPlayer, item: AudioItem): void {
        // console.log('willStartPlaying '+ item.title);
        this.latestCurrentTime = 0;
    }

    public audioPlayerFinishedPlaying?(audioPlayer: AudioPlayer, item: AudioItem): void {
        // console.log('finishedPlaying '+ item.title);
        if (this.onFinishedPlayingItem) {
            this.onFinishedPlayingItem(item);
        }
    }
}

export class TNSAudioPlayer extends CommonAudioPlayer 
{
    public player: AudioPlayer;

    private delegate: AudioPlayerDelegateImpl;

    private iosPlaylist: NSArray;
    private seekIntervalSeconds = 15;

    constructor() {
        super();
    }

    public isReady = Promise.resolve(true);

    public preparePlaylist(playlist: Playlist) {
        this._log('preparePlaylist');
        if (!this.player) {
            this.setupAudioPlayer();
        } else {
            this.stop();
        }
        const audioItems = NSMutableArray.alloc().init()
        for (const track of playlist.tracks) {
            audioItems.addObject(this.getAudioItemForMediaTrack(track));
        }
        this.iosPlaylist = audioItems;
    }

    private setupAudioPlayer() {
        this.player = AudioPlayer.new();
        this.delegate = AudioPlayerDelegateImpl.new();
        this.delegate.onTimeUpdate = (time) => this._iosTimeUpdate(time);
        this.delegate.onStateChanged = (from, to) => this._iosPlayerStateChanged(from, to);
        this.delegate.onFinishedPlayingItem = (item) => this._iosFinishedPlayingItem(item);
        this.delegate.onBufferingUpdate = (item, earliest, latest) => this._iosBufferingUpdate(item, earliest, latest);
        //this.delegate.onMetadataReceived = (item, data) => this._iosMetadataReceived(item, data);
        this.player.delegate = this.delegate;
        this.player.bufferingStrategy = AudioPlayerBufferingStrategy.PlayWhenPreferredBufferDurationFull;
        this.player.preferredBufferDurationBeforePlayback = 10;
        this._log(`Player: ${this.player}`);
        this._log(`Delegate: ${this.delegate}`);
    }

    private getAudioItemForMediaTrack(track: MediaTrack): AudioItem {
        const url = this.getNSURL(track.url)
        let audioItem = new AudioItem({ highQualitySoundURL: url, mediumQualitySoundURL: null, lowQualitySoundURL: null });
        audioItem.title = track.title;
        audioItem.artist = track.artist;
        audioItem.album = track.album
        // TODO: album art!
        return audioItem;
    }

    private getNSArrayForItems(items: any[]): NSArray {
        const arr = NSMutableArray.alloc().init();
        for (const item of items) {
            arr.addObject(item);
        }
        return arr;
    }

    private getNSURL(urlString: string) {
        return NSURL.URLWithString(urlString);
    }

    public addToPlaylist(track: MediaTrack) {}

    public play() {
        try {
            if (this.player.state == AudioPlayerState.Paused) {
                this.player.resume();
            }
            else if (this.player.state == AudioPlayerState.Stopped) {
                this.player.playWithItemsStartAtIndex(this.iosPlaylist, 0);
            }
        } catch(err) {
            this._log(`Err: ${err}`);
        }
    }

    public pause() {
        this._log('pause');
        this.player.pause()
    }

    public stop() {
        this._log('stop');
        this.cancelSleepTimer();
        if (this.player) {
            this.player.stop();
        }
    }
    
    public isPlaying(): boolean {
        return this.player.state == AudioPlayerState.Playing;
    }
    
    public skipToNext() {
        this.player.nextOrStop();
    }
    
    public skipToPrevious() {
        this.player.previous();
    }

    public skipToPlaylistIndex(playlistIndex: number) {
        this.player.playWithItemsStartAtIndex(this.iosPlaylist, playlistIndex);
    }
    
    public setRate(rate: number) {
        this.player.rate = rate;
    }

    public getRate(): number {
        return this.player.rate
    }

    public getDuration(): number {
        return Math.floor(this.delegate.latestCurrentDuration * 1000);
    }

    public getCurrentTime(): number {
        return Math.floor(this.delegate.latestCurrentTime * 1000);
    }

    public getCurrentPlaylistIndex() {
        if (this.iosPlaylist && this.player && this.player.currentItem) {
            const result = this.iosPlaylist.indexOfObject(this.player.currentItem);
            if (result != NSNotFound) {
                return result;
            }
        }
        return -1;
    }

    public seekTo(milisecs: number) {
        this._iosSeekTo(milisecs);
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
        this.stop();
        this.player = null;
        this.delegate = null;
        this.iosPlaylist = null;
    }

    //* PRIVATE HELPERS *//

    private _iosSeekTo(milisecs: number, completionHandler?: (boolean) => void) {
        const seekToSeconds = milisecs / 1000.0;
        this.player.seekToByAdaptingTimeToFitSeekableRangesToleranceBeforeToleranceAfterCompletionHandler(
                seekToSeconds, false, kCMTimePositiveInfinity, kCMTimePositiveInfinity, (succeeded) => {
            this._log(`Seek to ${milisecs}ms succeeded: ${succeeded}`);
            if (completionHandler) {
                completionHandler(succeeded);
            }
        });
    }

    private _iosTimeUpdate(seconds: number) {
        this._onPlaybackEvent(PlaybackEvent.TimeChanged, Math.floor(seconds * 1000));
    }

    private _iosBufferingUpdate(item: AudioItem, earliestBufferSec: number, latestBufferSec: number) {
        this._log(`bufferingUpdate  '${item.title}' now has buffered: ${earliestBufferSec}s - ${latestBufferSec}s`);
    }

    private _iosFinishedPlayingItem(item: AudioItem) {
        const finishedIndex = this.iosPlaylist.indexOfObject(item);
        this._onPlaybackEvent(PlaybackEvent.EndOfTrackReached, finishedIndex);
        if (finishedIndex >= this.iosPlaylist.count - 1) {
            this._onPlaybackEvent(PlaybackEvent.EndOfPlaylistReached);
        }
    }

    private _iosPlayerStateChanged(from: AudioPlayerState, to: AudioPlayerState) {
        this._log(`stateChanged: ${from} -> ${to}`);

        switch(to) {
            case AudioPlayerState.Buffering: {
                this._onPlaybackEvent(PlaybackEvent.Buffering);
                break;
            }
            case AudioPlayerState.Playing: {
                if (this._queuedSeekTo) {
                    this._iosSeekTo(this._queuedSeekTo, (succeeded) => {
                        this._queuedSeekTo = null;
                        if (succeeded) {
                            this._onPlaybackEvent(PlaybackEvent.Playing);
                        }
                    });
                } else {
                    this._onPlaybackEvent(PlaybackEvent.Playing);
                    this.resumeSleepTimer();
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
                break;
            }
            case AudioPlayerState.WaitingForConnection: {
                this._onPlaybackEvent(PlaybackEvent.WaitingForNetwork);
                break;
            }
            case AudioPlayerState.Buffering: {
                this._onPlaybackEvent(PlaybackEvent.EncounteredError);
                break;
            }
            default: {
                this._log(`unknown stateChange: ${from} -> ${to}`);
            }
        }
    }
}
