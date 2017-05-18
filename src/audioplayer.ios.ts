import { CommonAudioPlayer, MediaTrack, Playlist, PlaybackEvent } from './audioplayer.common';
import * as app from 'application';

// TODO: Do all exports in a main.ts instead?
export { MediaTrack, Playlist, PlaybackEvent } from './audioplayer.common';

// declare var LYTAudioPlayer: any;

class AudioPlayerDelegateImpl extends NSObject implements AudioPlayerDelegate {

    public static ObjCProtocols = [AudioPlayerDelegate];

    public onTimeUpdate: (seconds: number) => void;
    public onFoundDuration: (item: AudioItem, duration: number) => void;
    public onWillStartPlayingItem: (item: AudioItem) => void;
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
        if (this.onFoundDuration) {
            this.onFoundDuration(item, duration);
        }
    }

    public audioPlayerDidLoadEarliestLatestFor?(audioPlayer: AudioPlayer, earliest: number, latest: number, item: AudioItem): void {
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
        if (this.onTimeUpdate) {
            this.onTimeUpdate(time);
        }
    }

    public audioPlayerWillStartPlaying(audioPlayer: AudioPlayer, item: AudioItem): void {
        // console.log('willStartPlaying '+ item.title);
        if (this.onWillStartPlayingItem) {
            this.onWillStartPlayingItem(item);
        }
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

    private seekIntervalSeconds = 15;

    private _iosPlaylist: NSArray;
    private _iosItemDurationMap = new Map<number, number>();

    // TODO: This is messy, KDEAudioPlayer should expose a currentTime variable
    private _iosLatestCurrentTime = 0;

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
        this._iosPlaylist = audioItems;
        this._iosItemDurationMap = new Map<number, number>();
    }

    private setupAudioPlayer() {
        this.player = AudioPlayer.new();
        this.delegate = AudioPlayerDelegateImpl.new();
        this.delegate.onTimeUpdate = (seconds) => {
            this._iosLatestCurrentTime = Math.floor(seconds * 1000);
            this._onPlaybackEvent(PlaybackEvent.TimeChanged, this._iosLatestCurrentTime);
        };
        this.delegate.onBufferingUpdate = (item, earliest, latest) => {
            this._log(`bufferingUpdate  '${item.title}' now has buffered: ${earliest}s - ${latest}s`);
        }
        this.delegate.onFoundDuration = (item, duration) => {
            this._iosItemDurationMap[this._iosPlaylist.indexOfObject(item)] = Math.floor(duration * 1000);
            this._log(`found duration for '${item.title}': ${this._iosItemDurationMap[this.getIndexForItem(item)]}ms`);
            
        };
        this.delegate.onWillStartPlayingItem = (item) => {
            this._log(`will start playing '${item.title}`);
            this._iosLatestCurrentTime = 0;
        };
        this.delegate.onFinishedPlayingItem = (item) => {
            this._log(`finished playing '${item.title}`);
            const finishedIndex = this._iosPlaylist.indexOfObject(item);
            this._onPlaybackEvent(PlaybackEvent.EndOfTrackReached, finishedIndex);
            if (finishedIndex >= this._iosPlaylist.count - 1) {
                this._onPlaybackEvent(PlaybackEvent.EndOfPlaylistReached);
            }
        };
        this.delegate.onStateChanged = (from, to) => this._iosPlayerStateChanged(from, to);
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
                this.player.playWithItemsStartAtIndex(this._iosPlaylist, 0);
            }
        } catch(err) {
            this._log(`Err: ${err}`);
        }
    }

    public pause() {
        this._log('pause');
        if (this.player) {
            this.player.pause()
        }
    }

    public stop() {
        this._log('stop');
        if (this.player) {
            this.player.stop();
        }
    }
    
    public isPlaying(): boolean {
        return this.player && this.player.state == AudioPlayerState.Playing;
    }
    
    public skipToNext() {
        if (this.player) {
            this._iosLatestCurrentTime = 0;
            this.player.nextOrStop();
        }
    }
    
    public skipToPrevious() {
        if (this.player) {
            this._iosLatestCurrentTime = 0;
            this.player.previous();
        }
    }

    public skipToPlaylistIndex(playlistIndex: number) {
        if (this.player) {
            // Set latestCurrentTime, to where we expect to play from after skip.
            if (this._queuedSeekTo != null) {
                this._iosLatestCurrentTime = this._queuedSeekTo;
            } else {
                this._iosLatestCurrentTime = 0;
            }
            
            this.player.playWithItemsStartAtIndex(this._iosPlaylist, playlistIndex);
        }
    }
    
    public setRate(rate: number) {
        if (this.player) {
            this.player.rate = rate;
        }
    }

    public getRate(): number {
        return this.player ? this.player.rate : 0;
    }

    public getDuration(): number {
        return this.player && this.player.currentItem ? this._iosItemDurationMap[this.getCurrentPlaylistIndex()] : null;
    }

    public getCurrentTime(): number {
        return this.player && this.player.currentItem ? this._iosLatestCurrentTime : 0;
    }

    private getIndexForItem(item: AudioItem) {
        const result = this._iosPlaylist.indexOfObject(this.player.currentItem);
        if (result != NSNotFound) {
            return result;
        } else {
            return null;
        }
    }

    public getCurrentPlaylistIndex() {
        if (this._iosPlaylist && this.player && this.player.currentItem) {
            return this.getIndexForItem(this.player.currentItem);
        }
        return null;
    }

    public seekTo(millisecs: number) {
        if (this.player) {
            this._iosSeekTo(millisecs, false, kCMTimeZero, kCMTimeZero, (succeeded) => {
                this._log(`seekTo succeeded: ${succeeded}`);
            });
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
        this._iosPlaylist = null;
    }

    //* PRIVATE HELPERS *//

    private _iosSeekTo(millisecs: number, adaptToSeekableRanges = false, beforeTolerance: CMTime = kCMTimeZero, afterTolerance: CMTime = kCMTimeZero, completionHandler?: (boolean) => void) {
        this._log(`seekTo: ${millisecs}ms (adaptsToSeekableRanges=${adaptToSeekableRanges},hasCompletionHandler=${!!completionHandler})`);
        const seekToSeconds = millisecs / 1000.0;
        this.player.seekToByAdaptingTimeToFitSeekableRangesToleranceBeforeToleranceAfterCompletionHandler(
                seekToSeconds, adaptToSeekableRanges, beforeTolerance, afterTolerance, completionHandler
        );
    }

    private _iosSetPlayingState() {
        this._onPlaybackEvent(PlaybackEvent.Playing);
        this.resumeSleepTimer();
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
                    // TODO: Queued seek may not use a completion-handler, that only works when item is fully ready??
                    // ^ is this true, needs testing.
                    this._iosSeekTo(this._queuedSeekTo, false, kCMTimeZero, kCMTimeZero, (succeeded) => {
                        this._log(`queued seek done, succeeded? ${succeeded}`);
                        this._iosSetPlayingState();
                    });
                    this._queuedSeekTo = null;
                } else {
                    this._iosSetPlayingState();
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
                this.cancelSleepTimer();
                break;
            }
            case AudioPlayerState.WaitingForConnection: {
                this._onPlaybackEvent(PlaybackEvent.WaitingForNetwork);
                this.pauseSleepTimer();
                break;
            }
            case AudioPlayerState.Failed: {
                this._onPlaybackEvent(PlaybackEvent.EncounteredError);
                this.pauseSleepTimer();
                break;
            }
            default: {
                this._log(`unknown stateChange: ${from} -> ${to}`);
            }
        }
    }
}
