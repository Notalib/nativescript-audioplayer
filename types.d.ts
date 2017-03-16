export declare class MediaTrack {
    constructor(url: string, title: string, artist: string, album: string, albumArtUrl: string);
    url: string;
    title: string;
    artist: string;
    album: string;
    albumArtUrl: string;
}
export declare class Playlist {
    constructor(UID: string, ...tracks: MediaTrack[]);
    UID: string;
    tracks: MediaTrack[];
    readonly length: number;
}
export declare enum PlaybackEvent {
    Stopped = 0,
    Buffering = 1,
    Playing = 2,
    Paused = 3,
    EndOfTrackReached = 4,
    EndOfPlaylistReached = 5,
    EncounteredError = 6,
    TimeChanged = 7,
    SleepTimerChanged = 8,
    WaitingForNetwork = 9,
}
export interface Config {
    maxNetworkRetryCount: number;
    requiredPrebufferSizeInSeconds: number;
}
export interface AudioPlayer {
    playlist: Playlist;
    isReady: Promise<any>;
    loadPlaylist(playlist: Playlist, startIndex?: number, startOffset?: number): any;
    play(): void;
    pause(): void;
    stop(): void;
    isPlaying(): boolean;
    skipToNext(): void;
    skipToPrevious(): void;
    skipToPlaylistIndex(playlistIndex: number): void;
    skipToPlaylistIndexAndOffset(playlistIndex: number, offset: number): void;
    setRate(rate: number): void;
    getRate(): number;
    getDuration(): number;
    getCurrentTime(): number;
    getCurrentPlaylistIndex(): number;
    getCurrentPlaylistUID(): string;
    seekTo(offset: number): void;
    seekRelative(relativeOffset: number): void;
    setSeekIntervalSeconds(seconds: number): void;
    setPlaybackEventListener(listener: PlaybackEventListener): void;
    setSleepTimer(millisecs: number): any;
    getSleepTimerRemaining(): number;
    cancelSleepTimer(): any;
    destroy(): void;
    release(): void;
}
export declare var AudioPlayer: {
    new (): AudioPlayer;
};
export interface PlaybackEventListener {
    onPlaybackEvent(evt: PlaybackEvent, arg?: any): void;
}
