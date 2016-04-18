declare module "nativescript-audioplayer" {

  export interface OnPlaybackStateChangedListener {
    onPlaybackStateChanged(state: string);
  }

  export interface AudioPlayer {
    message: string;

    addToPlaylist(path: string[]);
    skipToNext(): void;
    skipToPrevious(): void;
    play(): void;
    pause(): void;
    stop(fullStop: boolean): void;
    setRate(rate: number): void;
    getRate(): number;
    setPlaybackStateChangeListener(listener: OnPlaybackStateChangedListener): void;
    getDuration(): number;
    getCurrentTimeMilis(): number;
    seekTo(milisecs: number);
    seekTo(queueIndex: number, milisecs: number);
    release(): void;
  }
  export var AudioPlayer: {
    new (paths: string[]) : AudioPlayer;
  }
}
