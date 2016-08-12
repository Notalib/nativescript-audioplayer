
declare class FSAudioController extends NSObject {

	static alloc(): FSAudioController; // inherited from NSObject

	static new(): FSAudioController; // inherited from NSObject

	/* readonly */ activeStream: FSAudioStream;

	configuration: FSStreamConfiguration;

	/* readonly */ currentPlaylistItem: FSPlaylistItem;

	delegate: FSAudioControllerDelegate;

	enableDebugOutput: boolean;

	onFailure: (p1: FSAudioStreamError, p2: string) => void;

	onMetaDataAvailable: (p1: NSDictionary) => void;

	onStateChange: (p1: FSAudioStreamState) => void;

	preloadNextPlaylistItemAutomatically: boolean;

	url: NSURL;

	volume: number;

	constructor(o: { url: NSURL; });

	addItem(item: FSPlaylistItem): void;

	countOfItems(): number;

	hasNextItem(): boolean;

	hasPreviousItem(): boolean;

	initWithUrl(url: NSURL): this;

	insertItemAtIndex(item: FSPlaylistItem, index: number): void;

	isPlaying(): boolean;

	moveItemAtIndexToIndex(from: number, to: number): void;

	pause(): void;

	play(): void;

	playFromPlaylist(playlist: NSArray): void;

	playFromPlaylistItemIndex(playlist: NSArray, index: number): void;

	playFromURL(url: NSURL): void;

	playItemAtIndex(index: number): void;

	playNextItem(): void;

	playPreviousItem(): void;

	removeItemAtIndex(index: number): void;

	replaceItemAtIndexWithItem(index: number, item: FSPlaylistItem): void;

	stop(): void;
}

interface FSAudioControllerDelegate extends NSObjectProtocol {

	audioControllerAllowPreloadingForStream?(audioController: FSAudioController, stream: FSAudioStream): boolean;

	audioControllerPreloadStartedForStream?(audioController: FSAudioController, stream: FSAudioStream): void;
}
declare var FSAudioControllerDelegate: {

	prototype: FSAudioControllerDelegate;
};

declare class FSAudioStream extends NSObject {

	static alloc(): FSAudioStream; // inherited from NSObject

	static new(): FSAudioStream; // inherited from NSObject

	/* readonly */ bitRate: number;

	/* readonly */ cached: boolean;

	/* readonly */ configuration: FSStreamConfiguration;

	/* readonly */ contentLength: number;

	/* readonly */ contentType: string;

	/* readonly */ continuous: boolean;

	/* readonly */ currentSeekByteOffset: FSSeekByteOffset;

	/* readonly */ currentTimePlayed: FSStreamPosition;

	defaultContentLength: number;

	defaultContentType: string;

	delegate: FSPCMAudioStreamDelegate;

	/* readonly */ duration: FSStreamPosition;

	/* readonly */ levels: FSLevelMeterState;

	maxRetryCount: number;

	onCompletion: () => void;

	onFailure: (p1: FSAudioStreamError, p2: string) => void;

	onMetaDataAvailable: (p1: NSDictionary) => void;

	onStateChange: (p1: FSAudioStreamState) => void;

	outputFile: NSURL;

	/* readonly */ prebufferedByteCount: number;

	/* readonly */ retryCount: number;

	/* readonly */ statistics: FSStreamStatistics;

	strictContentTypeChecking: boolean;

	/* readonly */ suggestedFileExtension: string;

	/* readonly */ totalCachedObjectsSize: number;

	url: NSURL;

	volume: number;

	constructor(o: { configuration: FSStreamConfiguration; });

	constructor(o: { url: NSURL; });

	expungeCache(): void;

	initWithConfiguration(configuration: FSStreamConfiguration): this;

	initWithUrl(url: NSURL): this;

	isPlaying(): boolean;

	pause(): void;

	play(): void;

	playFromOffset(offset: FSSeekByteOffset): void;

	playFromURL(url: NSURL): void;

	playRate(): number;

	preload(): void;

	rewind(seconds: number): void;

	seekToPosition(position: FSStreamPosition): void;

	setPlayRate(playRate: number): void;

	stop(): void;
}

declare const enum FSAudioStreamError {

	kFsAudioStreamErrorNone = 0,

	kFsAudioStreamErrorOpen = 1,

	kFsAudioStreamErrorStreamParse = 2,

	kFsAudioStreamErrorNetwork = 3,

	kFsAudioStreamErrorUnsupportedFormat = 4,

	kFsAudioStreamErrorStreamBouncing = 5,

	kFsAudioStreamErrorTerminated = 6
}

declare var FSAudioStreamErrorNotification: string;

declare var FSAudioStreamMetaDataNotification: string;

declare var FSAudioStreamNotificationKey_Error: string;

declare var FSAudioStreamNotificationKey_MetaData: string;

declare var FSAudioStreamNotificationKey_State: string;

declare const enum FSAudioStreamState {

	kFsAudioStreamRetrievingURL = 0,

	kFsAudioStreamStopped = 1,

	kFsAudioStreamBuffering = 2,

	kFsAudioStreamPlaying = 3,

	kFsAudioStreamPaused = 4,

	kFsAudioStreamSeeking = 5,

	kFSAudioStreamEndOfFile = 6,

	kFsAudioStreamFailed = 7,

	kFsAudioStreamRetryingStarted = 8,

	kFsAudioStreamRetryingSucceeded = 9,

	kFsAudioStreamRetryingFailed = 10,

	kFsAudioStreamPlaybackCompleted = 11,

	kFsAudioStreamUnknownState = 12
}

declare var FSAudioStreamStateChangeNotification: string;

declare class FSCheckContentTypeRequest extends NSObject implements NSURLSessionDelegate {

	static alloc(): FSCheckContentTypeRequest; // inherited from NSObject

	static new(): FSCheckContentTypeRequest; // inherited from NSObject

	/* readonly */ contentType: string;

	/* readonly */ format: FSFileFormat;

	onCompletion: () => void;

	onFailure: () => void;

	/* readonly */ playlist: boolean;

	url: NSURL;

	/* readonly */ xml: boolean;

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	// /* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */  // inherited from NSObjectProtocol

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	start(): void;
}

declare const enum FSFileFormat {

	kFSFileFormatUnknown = 0,

	kFSFileFormatM3UPlaylist = 1,

	kFSFileFormatPLSPlaylist = 2,

	kFSFileFormatXML = 3,

	kFSFileFormatMP3 = 4,

	kFSFileFormatWAVE = 5,

	kFSFileFormatAIFC = 6,

	kFSFileFormatAIFF = 7,

	kFSFileFormatM4A = 8,

	kFSFileFormatMPEG4 = 9,

	kFSFileFormatCAF = 10,

	kFSFileFormatAAC_ADTS = 11,

	kFSFileFormatCount = 12
}

interface FSLevelMeterState {
	averagePower: number;
	peakPower: number;
}
declare var FSLevelMeterState: FSLevelMeterState;

interface FSPCMAudioStreamDelegate extends NSObjectProtocol {

	audioStreamSamplesAvailableFramesDescription?(audioStream: FSAudioStream, samples: AudioBufferList, frames: number, description: AudioStreamPacketDescription): void;
}
declare var FSPCMAudioStreamDelegate: {

	prototype: FSPCMAudioStreamDelegate;
};

declare class FSParsePlaylistRequest extends NSObject implements NSURLSessionDelegate {

	static alloc(): FSParsePlaylistRequest; // inherited from NSObject

	static new(): FSParsePlaylistRequest; // inherited from NSObject

	onCompletion: () => void;

	onFailure: () => void;

	/* readonly */ playlistItems: NSMutableArray;

	url: NSURL;

	/* readonly */ debugDescription: string; // inherited from NSObjectProtocol

	/* readonly */ description: string; // inherited from NSObjectProtocol

	/* readonly */ hash: number; // inherited from NSObjectProtocol

	// /* readonly */ isProxy: boolean; // inherited from NSObjectProtocol

	/* readonly */ superclass: typeof NSObject; // inherited from NSObjectProtocol

	/* readonly */  // inherited from NSObjectProtocol

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	cancel(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	start(): void;
}

declare class FSParseRssPodcastFeedRequest extends FSXMLHttpRequest {

	static alloc(): FSParseRssPodcastFeedRequest; // inherited from NSObject

	static new(): FSParseRssPodcastFeedRequest; // inherited from NSObject

	/* readonly */ playlistItems: NSMutableArray;
}

declare const enum FSPlaylistFormat {

	kFSPlaylistFormatNone = 0,

	kFSPlaylistFormatM3U = 1,

	kFSPlaylistFormatPLS = 2
}

declare class FSPlaylistItem extends NSObject {

	static alloc(): FSPlaylistItem; // inherited from NSObject

	static new(): FSPlaylistItem; // inherited from NSObject

	originatingUrl: NSURL;

	title: string;

	url: NSURL;
}

interface FSSeekByteOffset {
	start: number;
	end: number;
	position: number;
}
declare var FSSeekByteOffset: FSSeekByteOffset;

declare class FSStreamConfiguration extends NSObject {

	static alloc(): FSStreamConfiguration; // inherited from NSObject

	static new(): FSStreamConfiguration; // inherited from NSObject

	automaticAudioSessionHandlingEnabled: boolean;

	bounceInterval: number;

	bufferCount: number;

	bufferSize: number;

	cacheDirectory: string;

	cacheEnabled: boolean;

	enableTimeAndPitchConversion: boolean;

	httpConnectionBufferSize: number;

	maxBounceCount: number;

	maxDiskCacheSize: number;

	maxPacketDescs: number;

	maxPrebufferedByteCount: number;

	maxRetryCount: number;

	outputNumChannels: number;

	outputSampleRate: number;

	predefinedHttpHeaderValues: NSDictionary;

	requireStrictContentTypeChecking: boolean;

	requiredInitialPrebufferedByteCountForContinuousStream: number;

	requiredInitialPrebufferedByteCountForNonContinuousStream: number;

	requiredInitialPrebufferedPacketCount: number;

	requiredPrebufferSizeInSeconds: number;

	seekingFromCacheEnabled: boolean;

	startupWatchdogPeriod: number;

	usePrebufferSizeCalculationInPackets: boolean;

	usePrebufferSizeCalculationInSeconds: boolean;

	userAgent: string;
}

interface FSStreamPosition {
	minute: number;
	second: number;
	playbackTimeInSeconds: number;
	position: number;
}
declare var FSStreamPosition: FSStreamPosition;

declare class FSStreamStatistics extends NSObject {

	static alloc(): FSStreamStatistics; // inherited from NSObject

	static new(): FSStreamStatistics; // inherited from NSObject

	audioQueuePCMPacketQueueCount: number;

	audioQueueUsedBufferCount: number;

	audioStreamPacketCount: number;

	snapshotTime: Date;

	/* readonly */ snapshotTimeFormatted: string;
}

declare class FSXMLHttpRequest extends NSObject {

	static alloc(): FSXMLHttpRequest; // inherited from NSObject

	static new(): FSXMLHttpRequest; // inherited from NSObject

	/* readonly */ lastError: FSXMLHttpRequestError;

	onCompletion: () => void;

	onFailure: () => void;

	url: NSURL;

	cancel(): void;

	contentForNode(node: any): string;

	contentForNodeAttributeAttribute(node: any, attr: string): string;

	dateFromNode(node: any): Date;

	performXPathQuery(query: string): NSArray;

	start(): void;
}

declare const enum FSXMLHttpRequestError {

	NoError = 0,

	Connection_Failed = 1,

	Invalid_Http_Status = 2,

	XML_Parser_Failed = 3
}

declare var FreeStreamerVersionNumber: number;

declare var FreeStreamerVersionString: number;

declare function freeStreamerReleaseVersion(): string;
