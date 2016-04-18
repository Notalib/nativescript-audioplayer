import * as def from 'nativescript-audioplayer';
import * as app from 'application';
// import * as dialogs from 'ui/dialogs';

export abstract class CommonAudioPlayer implements def.AudioPlayer {
  public _paths: string[];
  public _listener: def.OnPlaybackStateChangedListener;
  public android: any;
  public ios: any;
  public message: string;

  constructor(paths: string[]) {
    this._paths = paths;
    console.log("CommonAudioPlayer created with paths: "+ paths.length);
    this.message = Utils.SUCCESS_MSG();
  }

  public abstract addToPlaylist(path: string[]);
  public abstract play();
  public abstract pause();
  public abstract stop(fullStop: boolean);
  public abstract skipToNext();
  public abstract skipToPrevious();
  public abstract setRate(rate: number);
  public abstract getRate(): number;
  public abstract getDuration(): number;
  public abstract getCurrentTimeMilis();
  //public abstract getMeta(metaId: number): string;
  public abstract seekTo(milisecs: number, plalistIndex?: number);
  public abstract release();

  public setPlaybackStateChangeListener(listener: def.OnPlaybackStateChangedListener) {
    this._listener = listener;
  }

  protected _updateState(state: string) {
    if (this._listener) this._listener.onPlaybackStateChanged(state);
  }
}

export class Utils {
  public static SUCCESS_MSG(): string {
    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

    // setTimeout(() => {
    //   dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
    // }, 2000);

    return msg;
  }
}
