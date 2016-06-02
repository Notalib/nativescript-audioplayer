import { CommonAudioPlayer, MediaTrack, Playlist } from './audioplayer.common';
export { MediaTrack, Playlist, PlaybackEvent } from './audioplayer.common';
import lyt = dk.nota.lyt.libvlc;
export declare class AudioPlayer extends CommonAudioPlayer {
    _serviceHelper: lyt.PlaybackServiceHelper;
    _service: lyt.PlaybackService;
    private _queuedSeekTo;
    constructor(playlist: Playlist);
    private onServiceConnected(service);
    private loadPlaylist(playlist);
    private getNewMediaWrapper(track);
    addToPlaylist(track: MediaTrack): void;
    getCurrentPlaylistIndex(): number;
    play(): void;
    pause(): void;
    stop(fullStop: boolean): void;
    seekTo(milisecs: number, playlistIndex?: number): void;
    skipToNext(): void;
    skipToPrevious(): void;
    private skipToIndex(newPlaylistIndex);
    setRate(rate: number): void;
    getRate(): number;
    getDuration(): number;
    getCurrentTime(): number;
    release(): void;
}
