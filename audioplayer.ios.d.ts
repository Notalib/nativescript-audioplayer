import { CommonAudioPlayer, MediaTrack, Playlist } from './audioplayer.common';
export { MediaTrack, Playlist, PlaybackEvent } from './audioplayer.common';
export declare class LYTPlayerDelegateImpl extends NSObject implements LYTPlayerDelegate {
    static ObjCProtocols: {
        prototype: LYTPlayerDelegate;
    }[];
    private player;
    init(): LYTPlayerDelegateImpl;
    withForwardingTo(player: AudioPlayer): LYTPlayerDelegateImpl;
    didChangeStateFromTo(fromState: LYTPlayerState, toState: LYTPlayerState): void;
    didFinishPlayingTrack(track: LYTAudioTrack): void;
    didFindDurationForTrack(duration: number, track: LYTAudioTrack): void;
    didUpdateBufferedDurationForTrack(buffered: number, track: LYTAudioTrack): void;
    didChangeToTrack(track: LYTAudioTrack): void;
    didEncounterError(error: NSError): void;
}
export declare class AudioPlayer extends CommonAudioPlayer {
    player: LYTPlayer;
    private _queuedSeek;
    constructor(playlist: Playlist);
    private getNewLYTTrack(track);
    private getNSURL(urlString);
    addToPlaylist(track: MediaTrack): void;
    play(): void;
    pause(): void;
    stop(fullStop: boolean): void;
    skipToNext(): void;
    skipToPrevious(): void;
    setRate(rate: number): void;
    getRate(): number;
    getDuration(): number;
    getCurrentTime(): number;
    getCurrentPlaylistIndex(): number;
    seekTo(milisecs: number, playlistIndex?: number): void;
    release(): void;
    didChangeStateFromTo(fromState: LYTPlayerState, toState: LYTPlayerState): void;
    didFinishPlayingTrack(track: LYTAudioTrack): void;
    didFindDurationForTrack(duration: number, track: LYTAudioTrack): void;
    didUpdateBufferedDurationForTrack(buffered: number, track: LYTAudioTrack): void;
    didChangeToTrack(track: LYTAudioTrack): void;
    didEncounterError(error: NSError): void;
}
