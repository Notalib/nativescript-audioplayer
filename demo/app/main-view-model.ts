import { Observable } from 'data/observable';
import { TNSAudioPlayer, Playlist, MediaTrack, PlaybackEventListener, PlaybackEvent } from '@nota/nativescript-audioplayer';

export class HelloWorldModel extends Observable implements PlaybackEventListener {
  public message: string = 'Demo';
  private player: TNSAudioPlayer;
  private rateToggled: boolean = false;

  constructor() {
    super();
    this.player = new TNSAudioPlayer();
    this.player.debugOutputEnabled = true;
    this.player.setPlaybackEventListener(this);
    this.player.setSeekIntervalSeconds(30);
    setTimeout(() => {
      this.loadAndSetupPlaylist();
    }, 500);
    // setInterval(() => {
    //   if (this.player && this.player.isPlaying()) {
    //     console.log(`Playing playlist UID (${this.player.getCurrentPlaylistUID()}). Index ${this.player.getCurrentPlaylistIndex()} @ ${this.player.getCurrentTime()} of ${this.player.getDuration()}`);
    //   }
    // }, 1000);
  }

  public loadAndSetupPlaylist() {
    const playlistUID = "UID_12345";
    if (this.player.getCurrentPlaylistUID() == playlistUID) {
      console.log('Player already has playlist: '+ this.player.getCurrentPlaylistUID());
    } else {
      console.log('Loading new playlist. Old UID: '+ this.player.getCurrentPlaylistUID());
      const playlist = new Playlist(playlistUID,
        // new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "CoffeeSteam", "SoundSnap.com", "Short Test", null),
        new MediaTrack("https://archive.org/download/George-Orwell-1984-Audio-book/1984-01.mp3", "1984", "George Orwell", "Del 1 af 4", "http://bookcover.nota.dk/714070_w140_h200.jpg"),
        new MediaTrack("https://archive.org/download/George-Orwell-1984-Audio-book/1984-02.mp3", "1986", "George Orwell", "Del 2 af 4", "http://bookcover.nota.dk/714070_w140_h200.jpg"),
        new MediaTrack("https://archive.org/download/George-Orwell-1984-Audio-book/1984-03.mp3", "1986", "George Orwell", "Del 3 af 4", "http://bookcover.nota.dk/714070_w140_h200.jpg"),
        new MediaTrack("https://archive.org/download/George-Orwell-1984-Audio-book/1984-04.mp3", "1986", "George Orwell", "Del 4 af 4", "http://bookcover.nota.dk/714070_w140_h200.jpg"),
        //new MediaTrack("http://mean2u.rfshq.com/downloads/music/giveyouup.mp3", "Rick n' Roll", "Rick Astley", "album", null),
        new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "CoffeeSteam2", "SoundSnap.com", "Short Test", null),
        new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "CoffeeSteam3", "SoundSnap.com", "Short Test", null)
      );
      this.player.loadPlaylist(playlist);
    }
      // "http://www.noiseaddicts.com/samples_1w72b820/4357.mp3",
      // "http://www.noiseaddicts.com/samples_1w72b820/3816.mp3"]);
    // this.player.addToPlaylist([
    //   "http://www.noiseaddicts.com/samples_1w72b820/202.mp3",
    //   "http://www.noiseaddicts.com/samples_1w72b820/4941.mp3",
    //   "http://mean2u.rfshq.com/downloads/music/giveyouup.mp3"]);
  }

  public play() {
    console.log("play");
    this.player.play();
  }

  public pause() {
    console.log("pause");
    this.player.pause();
  }

  public stop() {
    console.log("stop");
    this.player.stop();
  }
  
  public toggleRate() {
    console.log("setRate to "+ this.rateToggled ? 1 : 2);
    this.player.setRate(this.rateToggled ? 1 : 2);
    this.rateToggled = !this.rateToggled;
  }
  
  public seekSpecific() {
    console.log("Seeking to index 2 @ 15 secs");
    this.player.skipToPlaylistIndexAndOffset(2, 15000);
  }
  
  public skipToPrevious() {
    this.player.skipToPrevious();
    // let seekTo = this.player.getCurrentTime() - 15000;
    // console.log('demo - seekTo '+ seekTo);
    // this.player.seekTo(Math.max(seekTo, 0));
  }
  
  public skipToNext() {
    this.player.skipToNext();
    // let seekTo = this.player.getCurrentTime() + 15000;
    // console.log('demo - seekTo '+ seekTo);
    // this.player.seekTo(Math.min(seekTo, this.player.getDuration()));
  }

  public sleep() {
    this.player.setSleepTimer(5000);
  }

  public cancelSleep() {
    this.player.cancelSleepTimer();
  }

  public reload() {
    this.player.setSeekIntervalSeconds(60);
  }

  public logDuration() {
    console.log('duration: '+ this.player.getDuration());
  }

  public doOne() {
    const playlist = new Playlist('1',
      new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "CoffeeSteam", "SoundSnap.com", "Short Test", null),
      new MediaTrack("https://archive.org/download/George-Orwell-1984-Audio-book/1984-01.mp3", "1984", "George Orwell", "Del 1 af 4", "https://bookcover.nota.dk/714070_w140_h200.jpg"),
      new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "CoffeeSteam3", "SoundSnap.com", "Short Test", null)
    );
    this.player.loadPlaylist(playlist, 1, 10000);
  }

  public doTwo() {
    const playlist = new Playlist('2',
      new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "CoffeeSteam", "SoundSnap.com", "Short Test", null),
      new MediaTrack("https://archive.org/download/George-Orwell-1984-Audio-book/1984-02.mp3", "1986", "George Orwell", "Del 2 af 4", "https://bookcover.nota.dk/714070_w140_h200.jpg"),
      new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "CoffeeSteam3", "SoundSnap.com", "Short Test", null)
    );
    this.player.loadPlaylist(playlist, 1, 10000);
  }

  public doThree() {
    const playlist = new Playlist('3',
      new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "CoffeeSteam", "SoundSnap.com", "Short Test", null),
      new MediaTrack("https://archive.org/download/George-Orwell-1984-Audio-book/1984-03.mp3", "1986", "George Orwell", "Del 3 af 4", "https://bookcover.nota.dk/714070_w140_h200.jpg"),
      new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "CoffeeSteam3", "SoundSnap.com", "Short Test", null)
    );
    this.player.loadPlaylist(playlist, 1, 10000);
  }

  public seekFix() {
    const relativeSeek = -5000;
    console.log('demo - seekRelative '+ relativeSeek);
    this.player.seekRelative(relativeSeek);
  }

  public onPlaybackEvent(evt: PlaybackEvent) {
    if (evt == PlaybackEvent.SleepTimerChanged)
      console.log('SleepTimerChanged: '+ this.player.getSleepTimerRemaining());
    else
      console.log(`Playback event received: ${PlaybackEvent[evt]} - ${this.player.getCurrentPlaylistIndex()}@${this.player.getCurrentTime()}`);
  }
}
