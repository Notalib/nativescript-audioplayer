import { Observable } from '@nativescript/core/data/observable';
import { MediaTrack, PlaybackEvent, PlaybackEventListener, Playlist, TNSAudioPlayer } from '@nota/nativescript-audioplayer';

export class HomeViewModel extends Observable implements PlaybackEventListener {
  private player: TNSAudioPlayer;
  private rateToggled: boolean = false;

  constructor() {
    super();

    // setTimeout(() => {
    //   this.loadAndSetupPlaylist();
    // }, 500);
    // setInterval(() => {
    //   if (this.player && this.player.isPlaying()) {
    //     console.log(`Playing playlist UID (${this.player.getCurrentPlaylistUID()}). Index ${this.player.getCurrentPlaylistIndex()} @ ${this.player.getCurrentTime()} of ${this.player.getDuration()}`);
    //   }
    // }, 1000);
  }

  public async loadAndSetupPlaylist() {
    this.player = new TNSAudioPlayer();
    // this.player.setPlaybackEventListener(this);
    this.player.setSeekIntervalSeconds(15);
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
        'https://archive.org/download/1984Part01/1984-Part01.mp3',
        'George Orwell',
        '1984',
        'Album 1/4',
        'http://bookcover.nota.dk/714070_w140_h200.jpg',
      ),
      new MediaTrack(
        'https://archive.org/download/1984Part01/1984-Part02.mp3',
        'George Orwell',
        '1984',
        'Album 2/4',
        'http://bookcover.nota.dk/714070_w140_h200.jpg',
      ),
      new MediaTrack(
        'https://archive.org/download/1984Part01/1984-Part03.mp3',
        'George Orwell',
        '1984',
        'Album 3/4',
        null,
      ),
      new MediaTrack(
        'https://archive.org/download/1984Part01/1984-Part04.mp3',
        'George Orwell',
        '1984',
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
    await this.loadAndSetupPlaylist();
    // console.log("play");
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
      new MediaTrack('http://www.moviesoundclips.net/download.php?id=3706&ft=mp3', 'CoffeeSteam', 'SoundSnap.com', 'Short Test', null),
      new MediaTrack(
        'https://archive.org/download/George-Orwell-1984-Audio-book/1984-01.mp3',
        '1984',
        'George Orwell',
        'Del 1 af 4',
        'https://bookcover.nota.dk/714070_w140_h200.jpg',
      ),
      new MediaTrack('http://www.moviesoundclips.net/download.php?id=3706&ft=mp3', 'CoffeeSteam3', 'SoundSnap.com', 'Short Test', null),
    );
    this.player.loadPlaylist(playlist, 0, 10000);
  }

  public doTwo() {
    const playlist = new Playlist(
      '2',
      new MediaTrack('http://www.moviesoundclips.net/download.php?id=3706&ft=mp3', 'CoffeeSteam', 'SoundSnap.com', 'Short Test', null),
      new MediaTrack(
        'https://archive.org/download/George-Orwell-1984-Audio-book/1984-02.mp3',
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
      this.player = new TNSAudioPlayer();
      this.player.setPlaybackEventListener(this);
      this.player.setSeekIntervalSeconds(15);
      const playlist = new Playlist(
        '3',
        new MediaTrack('http://www.moviesoundclips.net/download.php?id=3706&ft=mp3', 'CoffeeSteam', 'SoundSnap.com', 'Short Test', null),
        new MediaTrack(
          'https://archive.org/download/George-Orwell-1984-Audio-book/1984-03.mp3',
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

  public onPlaybackEvent(evt: PlaybackEvent, data: any) {
    // console.log('onPlaybackEvent', { evt, data });
  }
}
