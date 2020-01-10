declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ext {
					export module mediasession {
						export class BuildConfig {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.BuildConfig>;
							public static DEBUG: boolean;
							public static LIBRARY_PACKAGE_NAME: string;
							public static APPLICATION_ID: string;
							public static BUILD_TYPE: string;
							public static FLAVOR: string;
							public static VERSION_CODE: number;
							public static VERSION_NAME: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ext {
					export module mediasession {
						export class MediaSessionConnector {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector>;
							public static ALL_PLAYBACK_ACTIONS: number;
							public static DEFAULT_PLAYBACK_ACTIONS: number;
							public static DEFAULT_FAST_FORWARD_MS: number;
							public static DEFAULT_REWIND_MS: number;
							public static EXTRAS_SPEED: string;
							public static EXTRAS_PITCH: string;
							public mediaSession: globalAndroid.support.v4.media.session.MediaSessionCompat;
							public setCustomErrorMessage(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
							public setCustomActionProviders(param0: native.Array<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CustomActionProvider>): void;
							public setEnabledPlaybackActions(param0: number): void;
							public setErrorMessageProvider(param0: com.google.android.exoplayer2.util.ErrorMessageProvider<any>): void;
							public constructor(param0: globalAndroid.support.v4.media.session.MediaSessionCompat);
							public invalidateMediaSessionMetadata(): void;
							public setQueueEditor(param0: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueEditor): void;
							public setQueueNavigator(param0: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueNavigator): void;
							public setRatingCallback(param0: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.RatingCallback): void;
							public setCustomErrorMessage(param0: string): void;
							public setRewindIncrementMs(param0: number): void;
							public setCustomErrorMessage(param0: string, param1: number): void;
							public setPlayer(param0: com.google.android.exoplayer2.Player): void;
							public setMediaButtonEventHandler(param0: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaButtonEventHandler): void;
							public setFastForwardIncrementMs(param0: number): void;
							public invalidateMediaSessionPlaybackState(): void;
							public invalidateMediaSessionQueue(): void;
							public registerCustomCommandReceiver(param0: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver): void;
							public setControlDispatcher(param0: com.google.android.exoplayer2.ControlDispatcher): void;
							public unregisterCustomCommandReceiver(param0: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver): void;
							public setPlaybackPreparer(param0: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.PlaybackPreparer): void;
							public setMediaMetadataProvider(param0: com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaMetadataProvider): void;
						}
						export module MediaSessionConnector {
							export class CommandReceiver {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector$CommandReceiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
								});
								public constructor();
								public onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
							}
							export class ComponentListener {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.ComponentListener>;
								public onRewind(): void;
								public onPlayFromSearch(param0: string, param1: globalAndroid.os.Bundle): void;
								public onSetShuffleMode(param0: number): void;
								public onPlaybackParametersChanged(param0: com.google.android.exoplayer2.PlaybackParameters): void;
								public onSetRating(param0: globalAndroid.support.v4.media.RatingCompat, param1: globalAndroid.os.Bundle): void;
								public onPrepare(): void;
								public onPrepareFromMediaId(param0: string, param1: globalAndroid.os.Bundle): void;
								public onRemoveQueueItem(param0: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
								public onPlayFromMediaId(param0: string, param1: globalAndroid.os.Bundle): void;
								public onAddQueueItem(param0: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
								public onMediaButtonEvent(param0: globalAndroid.content.Intent): boolean;
								public onIsPlayingChanged(param0: boolean): void;
								public onSkipToQueueItem(param0: number): void;
								public onPositionDiscontinuity(param0: number): void;
								public onCustomAction(param0: string, param1: globalAndroid.os.Bundle): void;
								public onSetRepeatMode(param0: number): void;
								public onSkipToNext(): void;
								public onSkipToPrevious(): void;
								public onSeekTo(param0: number): void;
								public onPlayFromUri(param0: globalAndroid.net.Uri, param1: globalAndroid.os.Bundle): void;
								public onCommand(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.ResultReceiver): void;
								public onStop(): void;
								public onSetRating(param0: globalAndroid.support.v4.media.RatingCompat): void;
								public onPause(): void;
								public onFastForward(): void;
								public onPrepareFromSearch(param0: string, param1: globalAndroid.os.Bundle): void;
								public onPrepareFromUri(param0: globalAndroid.net.Uri, param1: globalAndroid.os.Bundle): void;
								public onRepeatModeChanged(param0: number): void;
								public onPlay(): void;
								public onTimelineChanged(param0: com.google.android.exoplayer2.Timeline, param1: any, param2: number): void;
								public onAddQueueItem(param0: globalAndroid.support.v4.media.MediaDescriptionCompat, param1: number): void;
								public onShuffleModeEnabledChanged(param0: boolean): void;
								public onPlayerStateChanged(param0: boolean, param1: number): void;
							}
							export class CustomActionProvider {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CustomActionProvider>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector$CustomActionProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onCustomAction(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle): void;
									getCustomAction(param0: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.session.PlaybackStateCompat.CustomAction;
								});
								public constructor();
								public onCustomAction(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle): void;
								public getCustomAction(param0: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.session.PlaybackStateCompat.CustomAction;
							}
							export class DefaultMediaMetadataProvider extends com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaMetadataProvider {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.DefaultMediaMetadataProvider>;
								public constructor(param0: globalAndroid.support.v4.media.session.MediaControllerCompat, param1: string);
								public getMetadata(param0: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.MediaMetadataCompat;
							}
							export class MediaButtonEventHandler {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaButtonEventHandler>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector$MediaButtonEventHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onMediaButtonEvent(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: globalAndroid.content.Intent): boolean;
								});
								public constructor();
								public onMediaButtonEvent(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: globalAndroid.content.Intent): boolean;
							}
							export class MediaMetadataProvider {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.MediaMetadataProvider>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector$MediaMetadataProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getMetadata(param0: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.MediaMetadataCompat;
								});
								public constructor();
								public getMetadata(param0: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.MediaMetadataCompat;
							}
							export class PlaybackActions {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.PlaybackActions>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector$PlaybackActions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
							}
							export class PlaybackPreparer extends com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.PlaybackPreparer>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector$PlaybackPreparer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getSupportedPrepareActions(): number;
									onPrepare(param0: boolean): void;
									onPrepareFromMediaId(param0: string, param1: boolean, param2: globalAndroid.os.Bundle): void;
									onPrepareFromSearch(param0: string, param1: boolean, param2: globalAndroid.os.Bundle): void;
									onPrepareFromUri(param0: globalAndroid.net.Uri, param1: boolean, param2: globalAndroid.os.Bundle): void;
									onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
								});
								public constructor();
								public static ACTIONS: number;
								public onPrepare(param0: boolean): void;
								public onPrepareFromSearch(param0: string, param1: boolean, param2: globalAndroid.os.Bundle): void;
								public getSupportedPrepareActions(): number;
								public onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
								public onPrepareFromUri(param0: globalAndroid.net.Uri, param1: boolean, param2: globalAndroid.os.Bundle): void;
								public onPrepareFromMediaId(param0: string, param1: boolean, param2: globalAndroid.os.Bundle): void;
							}
							export class QueueEditor extends com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueEditor>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector$QueueEditor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onAddQueueItem(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
									onAddQueueItem(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.MediaDescriptionCompat, param2: number): void;
									onRemoveQueueItem(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
									onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
								});
								public constructor();
								public onRemoveQueueItem(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
								public onAddQueueItem(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
								public onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
								public onAddQueueItem(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.MediaDescriptionCompat, param2: number): void;
							}
							export class QueueNavigator extends com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueNavigator>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector$QueueNavigator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getSupportedQueueNavigatorActions(param0: com.google.android.exoplayer2.Player): number;
									onTimelineChanged(param0: com.google.android.exoplayer2.Player): void;
									onCurrentWindowIndexChanged(param0: com.google.android.exoplayer2.Player): void;
									getActiveQueueItemId(param0: com.google.android.exoplayer2.Player): number;
									onSkipToPrevious(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher): void;
									onSkipToQueueItem(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: number): void;
									onSkipToNext(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher): void;
									onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
								});
								public constructor();
								public static ACTIONS: number;
								public getSupportedQueueNavigatorActions(param0: com.google.android.exoplayer2.Player): number;
								public getActiveQueueItemId(param0: com.google.android.exoplayer2.Player): number;
								public onSkipToPrevious(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher): void;
								public onCurrentWindowIndexChanged(param0: com.google.android.exoplayer2.Player): void;
								public onSkipToNext(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher): void;
								public onTimelineChanged(param0: com.google.android.exoplayer2.Player): void;
								public onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
								public onSkipToQueueItem(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: number): void;
							}
							export class RatingCallback extends com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.RatingCallback>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector$RatingCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSetRating(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.RatingCompat): void;
									onSetRating(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.RatingCompat, param2: globalAndroid.os.Bundle): void;
									onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
								});
								public constructor();
								public onSetRating(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.RatingCompat): void;
								public onSetRating(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.RatingCompat, param2: globalAndroid.os.Bundle): void;
								public onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ext {
					export module mediasession {
						export class RepeatModeActionProvider extends com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CustomActionProvider {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.RepeatModeActionProvider>;
							public static DEFAULT_REPEAT_TOGGLE_MODES: number;
							public constructor(param0: globalAndroid.content.Context, param1: number);
							public getCustomAction(param0: com.google.android.exoplayer2.Player): globalAndroid.support.v4.media.session.PlaybackStateCompat.CustomAction;
							public constructor(param0: globalAndroid.content.Context);
							public onCustomAction(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ext {
					export module mediasession {
						export class TimelineQueueEditor implements com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueEditor, com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.CommandReceiver {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor>;
							public static COMMAND_MOVE_QUEUE_ITEM: string;
							public static EXTRA_FROM_INDEX: string;
							public static EXTRA_TO_INDEX: string;
							public constructor(param0: globalAndroid.support.v4.media.session.MediaControllerCompat, param1: com.google.android.exoplayer2.source.ConcatenatingMediaSource, param2: com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.QueueDataAdapter, param3: com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaSourceFactory, param4: com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaDescriptionEqualityChecker);
							public constructor(param0: globalAndroid.support.v4.media.session.MediaControllerCompat, param1: com.google.android.exoplayer2.source.ConcatenatingMediaSource, param2: com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.QueueDataAdapter, param3: com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaSourceFactory);
							public onAddQueueItem(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.MediaDescriptionCompat, param2: number): void;
							public onAddQueueItem(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
							public onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
							public onRemoveQueueItem(param0: com.google.android.exoplayer2.Player, param1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
						}
						export module TimelineQueueEditor {
							export class MediaDescriptionEqualityChecker {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaDescriptionEqualityChecker>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor$MediaDescriptionEqualityChecker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									equals(param0: globalAndroid.support.v4.media.MediaDescriptionCompat, param1: globalAndroid.support.v4.media.MediaDescriptionCompat): boolean;
								});
								public constructor();
								public equals(param0: globalAndroid.support.v4.media.MediaDescriptionCompat, param1: globalAndroid.support.v4.media.MediaDescriptionCompat): boolean;
							}
							export class MediaIdEqualityChecker extends com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaDescriptionEqualityChecker {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaIdEqualityChecker>;
								public equals(param0: globalAndroid.support.v4.media.MediaDescriptionCompat, param1: globalAndroid.support.v4.media.MediaDescriptionCompat): boolean;
								public constructor();
							}
							export class MediaSourceFactory {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.MediaSourceFactory>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor$MediaSourceFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									createMediaSource(param0: globalAndroid.support.v4.media.MediaDescriptionCompat): com.google.android.exoplayer2.source.MediaSource;
								});
								public constructor();
								public createMediaSource(param0: globalAndroid.support.v4.media.MediaDescriptionCompat): com.google.android.exoplayer2.source.MediaSource;
							}
							export class QueueDataAdapter {
								public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor.QueueDataAdapter>;
								/**
								 * Constructs a new instance of the com.google.android.exoplayer2.ext.mediasession.TimelineQueueEditor$QueueDataAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									add(param0: number, param1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
									remove(param0: number): void;
									move(param0: number, param1: number): void;
								});
								public constructor();
								public remove(param0: number): void;
								public add(param0: number, param1: globalAndroid.support.v4.media.MediaDescriptionCompat): void;
								public move(param0: number, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module exoplayer2 {
				export module ext {
					export module mediasession {
						export abstract class TimelineQueueNavigator extends com.google.android.exoplayer2.ext.mediasession.MediaSessionConnector.QueueNavigator {
							public static class: java.lang.Class<com.google.android.exoplayer2.ext.mediasession.TimelineQueueNavigator>;
							public static MAX_POSITION_FOR_SEEK_TO_PREVIOUS: number;
							public static DEFAULT_MAX_QUEUE_SIZE: number;
							public onSkipToPrevious(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher): void;
							public getSupportedQueueNavigatorActions(param0: com.google.android.exoplayer2.Player): number;
							public onCurrentWindowIndexChanged(param0: com.google.android.exoplayer2.Player): void;
							public getActiveQueueItemId(param0: com.google.android.exoplayer2.Player): number;
							public onSkipToNext(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher): void;
							public constructor(param0: globalAndroid.support.v4.media.session.MediaSessionCompat);
							public constructor(param0: globalAndroid.support.v4.media.session.MediaSessionCompat, param1: number);
							public getMediaDescription(param0: com.google.android.exoplayer2.Player, param1: number): globalAndroid.support.v4.media.MediaDescriptionCompat;
							public onSkipToQueueItem(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: number): void;
							public onCommand(param0: com.google.android.exoplayer2.Player, param1: com.google.android.exoplayer2.ControlDispatcher, param2: string, param3: globalAndroid.os.Bundle, param4: globalAndroid.os.ResultReceiver): boolean;
							public onTimelineChanged(param0: com.google.android.exoplayer2.Player): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:

