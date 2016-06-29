// Typings for: https://github.com/mrmaffen/vlc-android-sdk/tree/master/src/main/java/org/videolan/libvlc
declare namespace dk.nota.lyt.libvlc {
    
  export interface PlaybackEventHandler {
    update(): void;
    updateProgress(): void;
    onMediaEvent(event: media.MediaEvent): void;
    onMediaPlayerEvent(event: media.MediaPlayerEvent);
  }
  export var PlaybackEventHandler: {
    new(impl: PlaybackEventHandler): PlaybackEventHandler;
  }
  
  export interface ConnectionCallback {
    onConnected(service: PlaybackService): void;
    onDisconnected(): void;
  }
  export class ConnectionCallback {
    constructor(impl: any);
  }
  
  export class PlaybackService {
    load(media: media.MediaWrapper): void;
    load(mediaPlaylist: java.util.List<media.MediaWrapper>): void;
    append(media: media.MediaWrapper): void;
    append(mediaPlaylist: java.util.List<media.MediaWrapper>): void;
    play(): void;
    pause(): void;
    next(): void;
    previous(): void;
    playIndex(index: number, flags: number): void; 
    stopPlayback(): void;
    stopService(): void;
    hasMedia(): boolean;
    hasPlaylist(): boolean;
    setTime(milisecs: number): void;
    getTime(): number;
    getLength(): number;
    setRate(rate: number): void;
    getRate(): number;
    isPlaying(): boolean;
    isSeekable(): boolean;
    hasPrevious(): boolean;
    hasNext(): boolean;
    detectHeadset(enabled: boolean): void;
    getCurrentMediaLocation(): string;
    getCurrentMediaPosition(): number;
    getCurrentMediaWrapper(): media.MediaWrapper;
    setNotificationActivity<T extends android.app.Activity>(activity: T, action: string): void;
    addCallback(callback: PlaybackEventHandler): void;
    removeCallback(callback: PlaybackEventHandler): void;
    removeAllCallbacks(): void;
    restartMediaPlayer(): void;
  }
  export class PlaybackServiceHelper {
    constructor(context: android.content.Context);
    constructor(context: android.content.Context, callback: ConnectionCallback);
    onStart(): void;
    onStop(): void;
    registerConnectionCallback(callback: ConnectionCallback): void;
    unregisterConnectionCallback(callback: ConnectionCallback): void;
  }
  export class Utils {
    static LocationToUri(location: string): android.net.Uri;
  }
  export namespace media {
    export class MediaWrapper {
      constructor(uri: android.net.Uri);
      getDuration(): number;
      setDisplayTitle(title: string);
      setArtist(artist: string);
      setAlbum(album: string);
      setArtworkURL(artworkUrl: string);
      getMeta(metaId: number): string;
    }
    export class MediaEvent {
      static MetaChanged: number;
      static SubItemAdded: number;
      static DurationChanged: number;
      static ParsedChanged: number;
      static StateChanged: number;
      static SubItemTreeAdded: number;
      static ParsedStatus: number;
      type: number;
      metaId: number;
    }
    export class MediaPlayerEvent {
      static MediaChanged: number;
      static Opening: number;
      static Playing: number;
      static Paused: number;
      static Stopped: number;
      static EndReached: number;
      static EncounteredError: number;
      static TimeChanged: number;
      static SeekableChanged: number;
      static PausableChanged: number;
      static ESAdded: number;
      static ESDeleted: number;
      type: number;
      getTimeChanged(): number;
      getPositionChanged(): number;
      getPausable(): boolean;
      getSeekable(): boolean;
    }
  }
}