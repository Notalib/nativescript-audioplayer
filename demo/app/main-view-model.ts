import {Observable} from 'data/observable';
import {AudioPlayer, OnPlaybackStateChangedListener} from 'nativescript-audioplayer';

export class HelloWorldModel extends Observable implements OnPlaybackStateChangedListener {
  public message: string;
  private player: AudioPlayer;
  private rateToggled: boolean = false;

  constructor() {
    super();

    this.player = new AudioPlayer([
      "http://www.noiseaddicts.com/samples_1w72b820/4357.mp3",
      "http://www.noiseaddicts.com/samples_1w72b820/3816.mp3"]);
    this.player.addToPlaylist([
      "http://www.noiseaddicts.com/samples_1w72b820/202.mp3",
      "http://www.noiseaddicts.com/samples_1w72b820/4941.mp3",
      "http://mean2u.rfshq.com/downloads/music/giveyouup.mp3"]);
    this.player.setPlaybackStateChangeListener(this);
    this.message = this.player.message;
  }

  public play() {
    console.log("play");
    this.player.play();
  }

  public pause() {
    console.log("pause");
    this.player.pause();
  }
  
  public toggleRate() {
    this.player.setRate(this.rateToggled ? 1 : 2);
    this.rateToggled = !this.rateToggled;
  }
  
  public seekSpecific() {
    this.player.seekTo(15000, 2);
  }
  
  public skipToPrevious() {
    this.player.skipToPrevious();
  }
  
  public skipToNext() {
    this.player.skipToNext();
  }

  public onPlaybackStateChanged(state: string) {
    console.log('Playback state received: '+ state);
  }
}
