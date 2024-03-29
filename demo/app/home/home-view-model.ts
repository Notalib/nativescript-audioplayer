import { Observable } from '@nativescript/core/data/observable';
import * as fs from '@nativescript/core/file-system';
import { MediaTrack, Playlist, TNSAudioPlayer } from '@nota/nativescript-audioplayer';
import {
  EventData,
  TimeChangedEventData,
  SleepTimerChangedEventData,
  PlayingEventData,
  PausedEventData,
  PlaybackSuspendEventData,
} from '@nota/nativescript-audioplayer';

let localTestFilePath = fs.path.join(fs.knownFolders.currentApp().path, 'assets/1984-Part01.mp3');
console.log(fs.File.exists(localTestFilePath));
let localTestFile = fs.File.fromPath(localTestFilePath);
console.log(localTestFile.path);
// Example path from LYT3 local playlist
// file:///storage/emulated/0/Android/data/dk.nota.lyt.next/files/books/22368/content/03_bibliografiske_oplysninger.mp3

export class HomeViewModel extends Observable {
  private player: TNSAudioPlayer = new TNSAudioPlayer();
  private rateToggled: boolean = false;

  constructor() {
    super();

    this.player.setSeekIntervalSeconds(15);
    this.player.on(TNSAudioPlayer.bufferingEvent, this.defaultPlayerEventHandler);
    this.player.on(TNSAudioPlayer.timeChangedEvent, (args: TimeChangedEventData) => {
      console.log(`timeChangedEvent: (idx=${args.playlistIndex}) ${args.currentTime} / ${args.duration}`);
    });
    this.player.on(TNSAudioPlayer.sleepTimerChangedEvent, (args: SleepTimerChangedEventData) => {
      console.log(`sleepTimerChangedEvent: ${args.remaining}`);
    });
    this.player.on(TNSAudioPlayer.playingEvent, (args: PlayingEventData) => {
      console.log(`playingEvent: (idx=${args.playlistIndex}) ${args.currentTime} / ${args.duration}`);
    });
    this.player.on(TNSAudioPlayer.pausedEvent, (args: PausedEventData) => {
      console.log(`pausedEvent: (idx=${args.playlistIndex}) ${args.currentTime} / ${args.duration}`);
    });
    this.player.on(TNSAudioPlayer.stoppedEvent, this.defaultPlayerEventHandler);
    this.player.on(TNSAudioPlayer.playbackSuspendEvent, (args: PlaybackSuspendEventData) => {
      console.log(`playbackSuspendEvent: ${args.reason}`);
    });
    this.player.on(TNSAudioPlayer.waitingForNetworkEvent, this.defaultPlayerEventHandler);
    this.player.on(TNSAudioPlayer.endOfPlaylistReachedEvent, this.defaultPlayerEventHandler);
    this.player.on(TNSAudioPlayer.encounteredErrorEvent, this.defaultPlayerEventHandler);
    // This way of listening to playback events is deprecated (but still works for now).
    // this.player.setPlaybackEventListener(this);

    // setTimeout(() => {
    //   this.loadAndSetupPlaylist();
    // }, 500);
  }

  private defaultPlayerEventHandler(data: EventData) {
    console.log(`player event: ${data.eventName}`);
  }

  public async loadAndSetupPlaylist() {
    const playlistUID = 'UID_12345';
    if (this.player.getCurrentPlaylistUID() === playlistUID) {
      console.log(`Player already has playlist: ${this.player.getCurrentPlaylistUID()}`);

      return;
    }

    /*
    console.log(`Folder: currentApp`);
    fs.knownFolders.currentApp().getEntities().then((entities) => {
      entities.forEach(entity => {
        console.log(`- ${entity.name}`);
      });
    });

    const filePath = fs.path.join(fs.knownFolders.currentApp().path, '1984.mp3');
    console.log(`mp3 file exists? ${fs.File.exists(filePath)}`);
    fs.knownFolders.currentApp().getFile('1984.mp3').readText().then((text) => {
      console.log(`mp3 file (readText) length: ${text.length}`);
    });

    const localFile = fs.knownFolders.currentApp().getFile('1984.mp3');
    console.log(`local file: ${localFile}: file://${localFile.path}`);
    console.log(`local file: ${localFile}: ${filePath}`);
    */

    console.log(`Loading new playlist. Old UID: ${this.player.getCurrentPlaylistUID()}`);

    const playlist = new Playlist(
      playlistUID,
      // new MediaTrack(`file://${filePath}`, "Title", "Artist", "Album", null),
      // new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "SoundSnap.com", "CoffeeSteam", "Short Test", null),
      // new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "SoundSnap.com", "CoffeeSteam", "Short Test", null),
      // new MediaTrack("https://lbs.nota.dk/api/v1.0/files/6115fbee-a21b-4d19-9bd9-c4670e8e5ca3/37027/0/01_michael_kamp_bunker_.mp3", null, null, null, null),
      // new MediaTrack("https://lbs.nota.dk/api/v1.0/files/6115fbee-a21b-4d19-9bd9-c4670e8e5ca3/37027/0/02_om_denne_udgave.mp3", null, null, null, null),
      // new MediaTrack("https://lbs.nota.dk/api/v1.0/files/6115fbee-a21b-4d19-9bd9-c4670e8e5ca3/37027/0/03_kolofon_og_bibliogra.mp3", null, null, null, null),
      // new MediaTrack("https://lbs.nota.dk/api/v1.0/files/6115fbee-a21b-4d19-9bd9-c4670e8e5ca3/37027/0/04_citat.mp3", null, null, null, null),
      // new MediaTrack("https://lbs.nota.dk/api/v1.0/files/6115fbee-a21b-4d19-9bd9-c4670e8e5ca3/37027/0/05_kapitel_1.mp3", null, null, null, null),
      // new MediaTrack("https://lbs.nota.dk/api/v1.0/files/6115fbee-a21b-4d19-9bd9-c4670e8e5ca3/37027/0/06_kapitel_2.mp3", null, null, null, null),
      new MediaTrack(
        'https://ia802902.us.archive.org/16/items/huck_finn_librivox/huckfinn_01_twain_apc_64kb.mp3',
        'Mark Twain',
        'Huckleberry Finn',
        'Album 1/4',
        'http://bookcover.nota.dk/714070_w140_h200.jpg',
      ),
      new MediaTrack(
        'https://ia802902.us.archive.org/16/items/huck_finn_librivox/huckfinn_02_twain_apc_64kb.mp3',
        'Mark Twain',
        'Huckleberry Finn',
        'Album 2/4',
        'http://bookcover.nota.dk/714070_w140_h200.jpg',
      ),
      new MediaTrack(
        'https://ia802902.us.archive.org/16/items/huck_finn_librivox/huckfinn_03_twain_apc_64kb.mp3',
        'Mark Twain',
        'Huckleberry Finn',
        'Album 3/4',
        null,
      ),
      new MediaTrack(
        'https://ia802902.us.archive.org/16/items/huck_finn_librivox/huckfinn_04_twain_apc_64kb.mp3',
        'Mark Twain',
        'Huckleberry Finn',
        'Album 4/4',
        'http://bookcover.nota.dk/714070_w140_h200.jpg',
      ),
      // new MediaTrack("http://mean2u.rfshq.com/downloads/music/giveyouup.mp3", "Rick Astley", "Rick n' Roll", "album", null),
      // new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "SoundSnap.com", "CoffeeSteam2", "Short Test", "http://bookcover.nota.dk/714070_w140_h200.jpg"),
      // new MediaTrack("http://www.moviesoundclips.net/download.php?id=3706&ft=mp3", "SoundSnap.com", "CoffeeSteam3", "Short Test", null)
    );

    await this.player.loadPlaylist(playlist, 0, 1000);
  }

  public async play() {
    console.log('play');
    if (!this.player.playlist) {
      await this.loadAndSetupPlaylist();
    }
    await this.player.play();
  }

  public pause() {
    console.log('pause');
    this.player.pause();
  }

  public stop() {
    console.log('stop');
    this.player.stop();
  }

  public toggleRate() {
    const newRate = this.rateToggled ? 1 : 2;
    console.log(`setRate to ${newRate}`);
    this.player.setRate(newRate);
    this.rateToggled = !this.rateToggled;
  }

  public seekSpecific() {
    console.log('Seeking to index 2 @ 15 secs');
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
    console.log(`duration: ${this.player.getDuration()}`);
  }

  public doOne() {
    const playlist = new Playlist(
      '1',
      new MediaTrack(`file://${localTestFile.path}`, '1984', 'George Orwell', 'Del 1 af 4', 'https://bookcover.nota.dk/714070_w140_h200.jpg'),
    );
    this.player.loadPlaylist(playlist, 0, 10000);
  }

  public doTwo() {
    const playlist = new Playlist(
      '2',
      new MediaTrack('http://www.moviesoundclips.net/download.php?id=3706&ft=mp3', 'CoffeeSteam', 'SoundSnap.com', 'Short Test', null),
      new MediaTrack(
        'https://archive.org/download/1984Part01/1984-Part02.mp3',
        '1984',
        'George Orwell',
        'Del 2 af 4',
        'https://bookcover.nota.dk/714070_w140_h200.jpg',
      ),
      new MediaTrack('http://www.moviesoundclips.net/download.php?id=3706&ft=mp3', 'CoffeeSteam3', 'SoundSnap.com', 'Short Test', null),
    );
    this.player.loadPlaylist(playlist, 1, 20000);
  }

  public doThree() {
    this.player.stop();
    setTimeout(() => {
      const playlist = new Playlist(
        '3',
        new MediaTrack('http://www.moviesoundclips.net/download.php?id=3706&ft=mp3', 'CoffeeSteam', 'SoundSnap.com', 'Short Test', null),
        new MediaTrack(
          'https://archive.org/download/1984Part01/1984-Part03.mp3',
          '1984',
          'George Orwell',
          'Del 3 af 4',
          'https://bookcover.nota.dk/714070_w140_h200.jpg',
        ),
        new MediaTrack('http://www.moviesoundclips.net/download.php?id=3706&ft=mp3', 'CoffeeSteam3', 'SoundSnap.com', 'Short Test', null),
      );
      this.player.loadPlaylist(playlist, 1, 300000);
    }, 10);
  }

  public seekFix() {
    console.log('demo - skipToPlaylistIndexAndOffset 2:100000');
    this.player.skipToPlaylistIndexAndOffset(2, 100000);
    // console.log('sleep in 5 sec!');
    // this.player.setSleepTimer(5000);
    // console.log(`Player position: ${this.player.getCurrentPlaylistIndex()}@${this.player.getCurrentTime()} / ${this.player.getDuration()}`);
  }
}
