
declare class AudioItem extends NSObject {

	static alloc(): AudioItem; // inherited from NSObject

	static new(): AudioItem; // inherited from NSObject

	album: string;

	artist: string;

	artwork: MPMediaItemArtwork;

	artworkImage: UIImage;

	readonly highestQualityURL: AudioItemURL;

	readonly lowestQualityURL: AudioItemURL;

	readonly mediumQualityURL: AudioItemURL;

	title: string;

	trackCount: number;

	trackNumber: number;

	constructor(o: { highQualitySoundURL: NSURL; mediumQualitySoundURL: NSURL; lowQualitySoundURL: NSURL; });

	initWithHighQualitySoundURLMediumQualitySoundURLLowQualitySoundURL(highQualitySoundURL: NSURL, mediumQualitySoundURL: NSURL, lowQualitySoundURL: NSURL): this;

	parseMetadata(items: NSArray<AVMetadataItem>): void;
}

declare class AudioItemURL extends NSObject {

	static alloc(): AudioItemURL; // inherited from NSObject

	static new(): AudioItemURL; // inherited from NSObject
}

declare class AudioPlayer extends NSObject {

	static alloc(): AudioPlayer; // inherited from NSObject

	static new(): AudioPlayer; // inherited from NSObject

	adjustQualityAfterInterruptionCount: number;

	adjustQualityAutomatically: boolean;

	adjustQualityTimeInternal: number;

	allowExternalPlayback: boolean;

	bufferingStrategy: AudioPlayerBufferingStrategy;

	readonly currentItem: AudioItem;

	readonly currentItemDuration: number;

	readonly currentItemIsReady: boolean;

	readonly currentItemLoadedRange: TimeRange;

	readonly currentItemProgression: number;

	readonly currentItemSeekableRange: TimeRange;

	delegate: AudioPlayerDelegate;

	readonly failedError: NSError;

	readonly hasNext: boolean;

	readonly hasPrevious: boolean;

	readonly items: NSArray<AudioItem>;

	maximumConnectionLossTime: number;

	maximumRetryCount: number;

	preferredBufferDurationBeforePlayback: number;

	preferredForwardBufferDuration: number;

	rate: number;

	remoteCommandsEnabled: NSArray<number>;

	remoteControlSkipIntervals: NSArray<number>;

	resumeAfterConnectionLoss: boolean;

	resumeAfterInterruption: boolean;

	retryTimeout: number;

	sessionCategory: string;

	sessionMode: string;

	readonly state: AudioPlayerState;

	timePitchAlgorithm: string;

	volume: number;

	addWithItem(item: AudioItem): void;

	addWithItems(items: NSArray<AudioItem>): void;

	clearAssetCache(): void;

	next(): void;

	nextOrStop(): void;

	pause(): void;

	playWithItem(item: AudioItem): void;

	playWithItemsStartAtIndex(items: NSArray<AudioItem>, index: number): void;

	previous(): void;

	removeItemAt(index: number): void;

	resume(): void;

	seekToByAdaptingTimeToFitSeekableRangesToleranceBeforeToleranceAfterCompletionHandler(time: number, byAdaptingTimeToFitSeekableRanges: boolean, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: (p1: boolean) => void): void;

	seekToRelativeTimeCompletionHandler(relativeTime: number, completionHandler: (p1: boolean) => void): void;

	seekToSeekableRangeEndWithPaddingCompletionHandler(padding: number, completionHandler: (p1: boolean) => void): void;

	seekToSeekableRangeStartWithPaddingCompletionHandler(padding: number, completionHandler: (p1: boolean) => void): void;

	stop(): void;
}

declare const enum AudioPlayerBufferingStrategy {

	DefaultBuffering = 0,

	PlayWhenPreferredBufferDurationFull = 1,

	PlayWhenBufferNotEmpty = 2
}

interface AudioPlayerDelegate {

	audioPlayerDidChangeStateFromTo?(audioPlayer: AudioPlayer, from: AudioPlayerState, state: AudioPlayerState): void;

	audioPlayerDidFindDurationFor?(audioPlayer: AudioPlayer, duration: number, item: AudioItem): void;

	audioPlayerDidLoadEarliestLatestFor?(audioPlayer: AudioPlayer, earliest: number, latest: number, item: AudioItem): void;

	audioPlayerDidUpdateEmptyMetadataOnWithData?(audioPlayer: AudioPlayer, item: AudioItem, data: NSArray<AVMetadataItem>): void;

	audioPlayerDidUpdateProgressionToPercentageRead?(audioPlayer: AudioPlayer, time: number, percentageRead: number): void;

	audioPlayerFinishedPlaying?(audioPlayer: AudioPlayer, item: AudioItem): void;

	audioPlayerWillStartPlaying?(audioPlayer: AudioPlayer, item: AudioItem): void;
}
declare var AudioPlayerDelegate: {

	prototype: AudioPlayerDelegate;
};

declare const enum AudioPlayerRemoteCommand {

	PlayPause = 0,

	Stop = 1,

	NextTrack = 2,

	PreviousTrack = 3,

	SkipForward = 4,

	SkipBackward = 5,

	SeekForward = 6,

	SeekBackward = 7,

	ChangePlaybackRate = 8,

	ChangePlaybackPosition = 9,

	Rate = 10,

	Like = 11,

	Dislike = 12,

	Bookmark = 13,

	ChangeRepeatMode = 14,

	ChangeShuffleMode = 15
}

declare const enum AudioPlayerState {

	Buffering = 0,

	Playing = 1,

	Paused = 2,

	Stopped = 3,

	WaitingForConnection = 4,

	Failed = 5
}

declare var KDEAudioPlayerVersionNumber: number;

declare var KDEAudioPlayerVersionString: interop.Reference<number>;

declare class SeekOperation extends NSObject {

	static alloc(): SeekOperation; // inherited from NSObject

	static new(): SeekOperation; // inherited from NSObject

	adaptToFitSeekableRanges: boolean;

	completionHandler: (p1: boolean) => void;

	time: number;

	toleranceAfter: CMTime;

	toleranceBefore: CMTime;
}

declare class TimeRange extends NSObject {

	static alloc(): TimeRange; // inherited from NSObject

	static new(): TimeRange; // inherited from NSObject

	earliest: number;

	latest: number;

	constructor(o: { earliest: number; latest: number; });

	initWithEarliestLatest(earliest: number, latest: number): this;
}
