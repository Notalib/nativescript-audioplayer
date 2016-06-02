import { AudioPlayer, MediaTrack, Playlist, PlaybackEvent, PlaybackEventListener } from './types';
export * from './types';
export declare abstract class CommonAudioPlayer implements AudioPlayer {
    android: any;
    ios: any;
    message: string;
    playlist: Playlist;
    private _listener;
    constructor(playlist: Playlist);
    abstract addToPlaylist(track: MediaTrack): any;
    abstract play(): any;
    abstract pause(): any;
    abstract stop(fullStop: boolean): any;
    abstract skipToNext(): any;
    abstract skipToPrevious(): any;
    abstract setRate(rate: number): any;
    abstract getRate(): number;
    abstract getDuration(): number;
    abstract getCurrentTime(): number;
    abstract getCurrentPlaylistIndex(): number;
    abstract seekTo(milisecs: number, playlistIndex?: number): any;
    abstract release(): any;
    setPlaybackEventListener(listener: PlaybackEventListener): void;
    protected _onPlaybackEvent(evt: PlaybackEvent): void;
    protected _log(...args: any[]): void;
}
