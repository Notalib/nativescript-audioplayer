
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

	parseMetadata(items: NSArray): void;
}

declare class AudioItemURL extends NSObject {

	static alloc(): AudioItemURL; // inherited from NSObject

	static new(): AudioItemURL; // inherited from NSObject

	readonly url: NSURL;
}

declare class AudioPlayer extends NSObject {

	static alloc(): AudioPlayer; // inherited from NSObject

	static new(): AudioPlayer; // inherited from NSObject

	adjustQualityAfterInterruptionCount: number;

	adjustQualityAutomatically: boolean;

	adjustQualityTimeInternal: number;

	bufferingStrategy: AudioPlayerBufferingStrategy;

	readonly currentItem: AudioItem;

	readonly currentItemLoadedRange: TimeRange;

	readonly currentItemSeekableRange: TimeRange;

	delegate: AudioPlayerDelegate;

	readonly hasNext: boolean;

	readonly hasPrevious: boolean;

	readonly items: NSArray;

	maximumConnectionLossTime: number;

	maximumRetryCount: number;

	preferredBufferDurationBeforePlayback: number;

	preferredForwardBufferDuration: number;

	rate: number;

	resumeAfterConnectionLoss: boolean;

	resumeAfterInterruption: boolean;

	retryTimeout: number;

	readonly state: AudioPlayerState;

	volume: number;

	static readonly assetPreloadKeys: NSArray;

	addWithItem(item: AudioItem): void;

	addWithItems(items: NSArray): void;

	clearAssetCache(): void;

	getAVPlayerItemForUrl(forUrl: NSURL): AVPlayerItem;

	getAVURLAssetForUrl(forUrl: NSURL): AVURLAsset;

	next(): void;

	nextOrStop(): void;

	pause(): void;

	playWithItem(item: AudioItem): void;

	playWithItemsStartAtIndex(items: NSArray, index: number): void;

	preloadItemAssetWithAssetOnComplete(asset: AVURLAsset, onComplete: (p1: AVURLAsset) => void): void;

	preloadNextItemAsset(): void;

	previous(): void;

	remoteControlReceivedWith(event: UIEvent): void;

	removeItemAt(index: number): void;

	resume(): void;

	seekToByAdaptingTimeToFitSeekableRangesToleranceBeforeToleranceAfterCompletionHandler(time: number, byAdaptingTimeToFitSeekableRanges: boolean, toleranceBefore: CMTime, toleranceAfter: CMTime, completionHandler: (p1: boolean) => void): void;

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

	audioPlayerDidUpdateEmptyMetadataOnWithData?(audioPlayer: AudioPlayer, item: AudioItem, data: NSArray): void;

	audioPlayerDidUpdateProgressionToPercentageRead?(audioPlayer: AudioPlayer, time: number, percentageRead: number): void;

	audioPlayerWillStartPlaying?(audioPlayer: AudioPlayer, item: AudioItem): void;

	audioPlayerFinishedPlaying?(audioPlayer: AudioPlayer, item: AudioItem): void;
}
declare var AudioPlayerDelegate: {

	prototype: AudioPlayerDelegate;
};

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

declare class TimeRange extends NSObject {

	static alloc(): TimeRange; // inherited from NSObject

	static new(): TimeRange; // inherited from NSObject

	earliest: number;

	latest: number;

	constructor(o: { earliest: number; latest: number; });

	initWithEarliestLatest(earliest: number, latest: number): this;
}
