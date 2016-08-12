import {Observable} from 'data/observable';
import {AudioPlayer, Playlist, MediaTrack, PlaybackEventListener, PlaybackEvent} from '@nota/nativescript-audioplayer';

export class HelloWorldModel extends Observable implements PlaybackEventListener {
  public message: string;
  private player: AudioPlayer;
  private rateToggled: boolean = false;

  constructor() {
    super();
    this.loadAndSetupPlaylist();
    this.message = this.player.message;

    setInterval(() => {
        if (this.player && this.player.isPlaying()) {
            console.log(`Playing ${this.player.getCurrentPlaylistIndex()} @ ${this.player.getCurrentTime()} of ${this.player.getDuration()}`);
        }
    }, 1000);
  }

  public loadAndSetupPlaylist() {
    let playlist = new Playlist();
    playlist.tracks.push(new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "CoffeeSteam", "SoundSnap.com", "Short Test", null));
    playlist.tracks.push(new MediaTrack("https://archive.org/download/George-Orwell-1984-Audio-book/1984-01.mp3", "1984", "George Orwell", "Del 1 af 4", "http://bookcover.nota.dk/714070_w140_h200.jpg"));
    playlist.tracks.push(new MediaTrack("https://archive.org/download/George-Orwell-1984-Audio-book/1984-02.mp3", "1986", "George Orwell", "Del 2 af 4", "http://bookcover.nota.dk/714070_w140_h200.jpg"));
    playlist.tracks.push(new MediaTrack("https://archive.org/download/George-Orwell-1984-Audio-book/1984-03.mp3", "1986", "George Orwell", "Del 3 af 4", "http://bookcover.nota.dk/714070_w140_h200.jpg"));
    playlist.tracks.push(new MediaTrack("https://archive.org/download/George-Orwell-1984-Audio-book/1984-04.mp3", "1986", "George Orwell", "Del 4 af 4", "http://bookcover.nota.dk/714070_w140_h200.jpg"));
    playlist.tracks.push(new MediaTrack("http://mean2u.rfshq.com/downloads/music/giveyouup.mp3", "Rick n' Roll", "Rick Astley", "album", null));
    this.player = new AudioPlayer(playlist);
      // "http://www.noiseaddicts.com/samples_1w72b820/4357.mp3",
      // "http://www.noiseaddicts.com/samples_1w72b820/3816.mp3"]);
    // this.player.addToPlaylist([
    //   "http://www.noiseaddicts.com/samples_1w72b820/202.mp3",
    //   "http://www.noiseaddicts.com/samples_1w72b820/4941.mp3",
    //   "http://mean2u.rfshq.com/downloads/music/giveyouup.mp3"]);
    this.player.setPlaybackEventListener(this);
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
    console.log("setRate to "+ this.rateToggled ? 1 : 2);
    this.player.setRate(this.rateToggled ? 1 : 2);
    this.rateToggled = !this.rateToggled;
  }
  
  public seekSpecific() {
    console.log("Seeking to index 2 and 15 secs");
    this.player.seekTo(15000, 2);
  }
  
  public skipToPrevious() {
    this.player.skipToPrevious();
  }
  
  public skipToNext() {
    this.player.skipToNext();
  }

  public reload() {
    this.player.release();
    this.loadAndSetupPlaylist();
  }

  public logDuration() {
    console.log('duration: '+ this.player.getDuration());
  }

  public onPlaybackEvent(evt: PlaybackEvent) {
    console.log('Playback event received: '+ PlaybackEvent[evt]);
  }
}
