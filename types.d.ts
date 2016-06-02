export declare class MediaTrack {
    constructor(url: string, title: string, artist: string, album: string, albumArtUrl: string);
    url: string;
    title: string;
    artist: string;
    album: string;
    albumArtUrl: string;
}
export declare class Playlist {
    constructor(...tracks: MediaTrack[]);
    tracks: MediaTrack[];
    length: number;
}
export declare enum PlaybackEvent {
    Stopped = 0,
    Opening = 1,
    Playing = 2,
    Paused = 3,
    EndOfTrackReached = 4,
    EndOfPlaylistReached = 5,
}
export interface AudioPlayer {
    message: string;
    playlist: Playlist;
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
    setPlaybackEventListener(listener: PlaybackEventListener): void;
    release(): void;
}
export declare var AudioPlayer: {
    new (playlist: Playlist): AudioPlayer;
};
export interface PlaybackEventListener {
    onPlaybackEvent(evt: PlaybackEvent): void;
}
