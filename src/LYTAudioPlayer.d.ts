declare class LYTAudioTrack extends NSObject {

	static alloc(): LYTAudioTrack; // inherited from NSObject

	static new(): LYTAudioTrack; // inherited from NSObject

	album: string;

	albumArtCachedImage: UIImage;

	albumArtUrl: NSURL;

	artist: string;

	title: string;

	url: NSURL;

	constructor(); // inherited from NSObject

	constructor(o: { url: NSURL; title: string; artist: string; album: string; albumArtUrl: NSURL; });

	self(): LYTAudioTrack; // inherited from NSObjectProtocol
}

declare class LYTPlayer extends NSObject {

	static alloc(): LYTPlayer; // inherited from NSObject

	static new(): LYTPlayer; // inherited from NSObject

	static sharedInstance(): LYTPlayer;

	currentPlaylistIndex: number;

	/* readonly */ currentTime: number;

	/* readonly */ currentTrack: LYTAudioTrack;

	/* readonly */ currentTrackDuration: number;

	delegate: LYTPlayerDelegate;

	/* readonly */ isPlaying: boolean;

	playbackRate: number;

	/* readonly */ state: LYTPlayerState;

	constructor(); // inherited from NSObject

	loadPlaylistAndAutoplay(playlist: LYTPlaylist, autoplay: boolean): void;

	nextAudioTrack(onCompletion: () => void): void;

	pause(): void;

	play(): void;

	previousAudioTrack(onCompletion: () => void): void;

	seekToTimeMilisOnCompletion(timeMilis: number, onCompletion: () => void): void;

	self(): LYTPlayer; // inherited from NSObjectProtocol

	skipToPlaylistIndexOnCompletion(index: number, onCompletion: () => void): void;

	stop(): void;
}

interface LYTPlayerDelegate extends NSObjectProtocol {

	didChangeStateFromTo(from: LYTPlayerState, to: LYTPlayerState): void;

	didChangeToTrack(track: LYTAudioTrack): void;

	didEncounterError(error: NSError): void;

	didFindDurationForTrack(durationSeconds: number, track: LYTAudioTrack): void;

	didFinishPlayingTrack(track: LYTAudioTrack): void;

	didUpdateBufferedDurationForTrack(bufferedDuration: number, track: LYTAudioTrack): void;
}
declare var LYTPlayerDelegate: {

	prototype: LYTPlayerDelegate;
};

declare const enum LYTPlayerState {

	Buffering = 0,

	Playing = 1,

	Paused = 2,

	Stopped = 3,

	WaitingForConnection = 4,

	Failed = 5
}

declare class LYTPlaylist extends NSObject {

	static alloc(): LYTPlaylist; // inherited from NSObject

	static new(): LYTPlaylist; // inherited from NSObject

	/* readonly */ trackCount: number;

	tracks: [LYTAudioTrack];

	constructor(); // inherited from NSObject

	addTrack(audioTrack: LYTAudioTrack): void;

	self(): LYTPlaylist; // inherited from NSObjectProtocol
}