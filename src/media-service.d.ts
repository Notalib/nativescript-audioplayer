declare namespace dk {
  namespace nota {
    import type { Playlist } from './audioplayer.types';
    import type { CommonAudioPlayer } from './audioplayer-common';

    class MediaService extends android.app.Service {
      public exoPlayer?: com.google.android.exoplayer2.ExoPlayer;

      public preparePlaylist(playlist: Playlist): Promise<void>;
      public setSeekIntervalSeconds(seconds: number): void;
      public setRate(rate: number): void;
      public getRate(): number;
      public setOwner(owner: CommonAudioPlayer): void;

      public isPlaying(): boolean;
      public play(): void;
      public pause(): void;
      public stop(): void;
    }

    namespace MediaService {
      class LocalBinder extends android.os.Binder {
        public getService(): MediaService;
      }
    }
  }
}
