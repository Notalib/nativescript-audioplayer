declare class LYTPlayer {
    static sharedInstance(): LYTPlayer;
    loadPlaylist(playlist: LYTPlaylist);
    play();
    pause();
    stop();
    nextAudioTrack();
    previousAudioTrack();
    currentTime();
    seekTo(time: number, playlistIndex?: number);
    currentTrack(): LYTAudioTrack;
}

declare class LYTPlaylist {
    public trackCount: number;
    
    constructor();
    addTrack(track: LYTAudioTrack);
}

declare class LYTAudioTrack {
    public url: NSURL;
    public title: String;
    public artist: String;
    public album: String;
    public albumArtUrl: NSURL;
    public albumArtCachedImage: UIImage; 
    
    constructor(url: NSURL, title: String, artist: String, album: String, albumArtUrl?: NSURL);
}