// Typings for: https://github.com/mrmaffen/vlc-android-sdk/tree/master/src/main/java/org/videolan/libvlc
declare namespace org.videolan.libvlc {
  export class LibVLC {
    constructor(options: java.util.ArrayList<string>);
  }
  export class MediaPlayer {
    constructor(libVLC: LibVLC);
    public setMedia(media: Media): void;
    public getMedia(): Media;
    public play(): void;
    public pause(): void;
    public stop(): void;
    public setTime(milisecs: number): void;
    public getTime(): void;
    public setRate(rate: number): void;
    public getRate(): number;
    public getLength(): number;
    public isPlaying(): boolean;
    public isSeekable(): boolean;
    public getPlayerState(): number;
    public getVolume(): number;
    public setVolume(vol: number): void;
    public setEventListener(listener: MediaPlayer.EventListener): void;
  }
  export class Media {
    constructor(libVLC: LibVLC, uri: android.net.Uri);
    public getDuration(): number;
    public getState(): number;
    public getType(): number;
    public getMeta(metaId: number): string;
  }
  export enum EventType {
    MediaChanged = 0x100,
    Opening = 0x102,
    Playing = 0x104,
    Paused = 0x105,
    Stopped = 0x106,
    EndReached = 0x109,
    EncounteredError = 0x10a,
    TimeChanged = 0x10b,
    PositionChanged = 0x10c,
    SeekableChanged = 0x10d,
    PausableChanged = 0x10e
  }
  export namespace MediaPlayer {
    export class Event {
      public type: number;
      public getTimeChanged(): number;
      public getPositionChanged(): number;
      public getSeekable(): boolean;
    }
    export interface EventListener {
      onEvent(event: Event): void;
    }
    export var EventListener: {
      new(impl?: any): EventListener;
      (): any;
      (value: any): any;
    }
  }
  
  export namespace util {
    export class AndroidUtil {
      public static LocationToUri(location: string): android.net.Uri;
    }
  }
}