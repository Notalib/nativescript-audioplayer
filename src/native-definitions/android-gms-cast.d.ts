import globalCom = com;

declare module com {
  export module google {
    export module android {
      export module gms {
        export module actions {
          export class ItemListIntents {
            public static class: java.lang.Class<com.google.android.gms.actions.ItemListIntents>;
            public static ACTION_CREATE_ITEM_LIST: string;
            public static ACTION_DELETE_ITEM_LIST: string;
            public static ACTION_APPEND_ITEM_LIST: string;
            public static ACTION_ACCEPT_ITEM: string;
            public static ACTION_REJECT_ITEM: string;
            public static ACTION_DELETE_ITEM: string;
            public static EXTRA_LIST_NAME: string;
            public static EXTRA_LIST_QUERY: string;
            public static EXTRA_ITEM_NAME: string;
            public static EXTRA_ITEM_NAMES: string;
            public static EXTRA_ITEM_QUERY: string;
          }
          export class NoteIntents {
            public static class: java.lang.Class<com.google.android.gms.actions.NoteIntents>;
            public static ACTION_CREATE_NOTE: string;
            public static ACTION_APPEND_NOTE: string;
            public static ACTION_DELETE_NOTE: string;
            public static EXTRA_NAME: string;
            public static EXTRA_TEXT: string;
            public static EXTRA_NOTE_QUERY: string;
          }
          export class ReserveIntents {
            public static class: java.lang.Class<com.google.android.gms.actions.ReserveIntents>;
            public static ACTION_RESERVE_TAXI_RESERVATION: string;
          }
          export class SearchIntents {
            public static class: java.lang.Class<com.google.android.gms.actions.SearchIntents>;
            public static ACTION_SEARCH: string;
            public static EXTRA_QUERY: string;
          }
        }
        export module auth {
          export module api {
            export module signin {
              export class GoogleSignInAccount extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
                implements com.google.android.gms.common.internal.ReflectedParcelable {
                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInAccount>;
                public getAccount(): globalAndroid.accounts.Account;
                public getGrantedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
                public getGivenName(): string;
                public static createDefault(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                public equals(param0: any): boolean;
                public getIdToken(): string;
                public getDisplayName(): string;
                public isExpired(): boolean;
                public zab(): string;
                public getFamilyName(): string;
                public getRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public static zaa(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                public getPhotoUrl(): globalAndroid.net.Uri;
                public getEmail(): string;
                public getServerAuthCode(): string;
                public zac(): string;
                public requestExtraScopes(
                  param0: native.Array<com.google.android.gms.common.api.Scope>,
                ): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                public getId(): string;
                public hashCode(): number;
              }
              export class GoogleSignInOptions extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
                implements com.google.android.gms.common.api.Api.ApiOptions.Optional, com.google.android.gms.common.internal.ReflectedParcelable {
                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
                public static zar: com.google.android.gms.common.api.Scope;
                public static zas: com.google.android.gms.common.api.Scope;
                public static zat: com.google.android.gms.common.api.Scope;
                public static zau: com.google.android.gms.common.api.Scope;
                public static zav: com.google.android.gms.common.api.Scope;
                public static DEFAULT_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                public static DEFAULT_GAMES_SIGN_IN: com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions>;
                public getAccount(): globalAndroid.accounts.Account;
                public getServerClientId(): string;
                public isForceCodeForRefreshToken(): boolean;
                public equals(param0: any): boolean;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public static zab(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                public zae(): string;
                public getScopes(): java.util.ArrayList<com.google.android.gms.common.api.Scope>;
                public isServerAuthCodeRequested(): boolean;
                public isIdTokenRequested(): boolean;
                public hashCode(): number;
                public getExtensions(): java.util.ArrayList<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
                public getScopeArray(): native.Array<com.google.android.gms.common.api.Scope>;
              }
              export module GoogleSignInOptions {
                export class Builder {
                  public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder>;
                  public requestServerAuthCode(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public constructor();
                  public requestScopes(
                    param0: com.google.android.gms.common.api.Scope,
                    param1: native.Array<com.google.android.gms.common.api.Scope>,
                  ): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public requestIdToken(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public addExtension(
                    param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension,
                  ): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public requestEmail(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public setAccountName(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public requestServerAuthCode(param0: string, param1: boolean): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public setHostedDomain(param0: string): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptions);
                  public requestId(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public requestProfile(): com.google.android.gms.auth.api.signin.GoogleSignInOptions.Builder;
                  public build(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                }
              }
              export class GoogleSignInOptionsExtension {
                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension>;
                /**
                 * Constructs a new instance of the com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getExtensionType(): number;
                  toBundle(): globalAndroid.os.Bundle;
                  getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
                });
                public constructor();
                public static FITNESS: number;
                public static GAMES: number;
                public toBundle(): globalAndroid.os.Bundle;
                public getImpliedScopes(): java.util.List<com.google.android.gms.common.api.Scope>;
                public getExtensionType(): number;
              }
              export module internal {
                export class GoogleSignInOptionsExtensionParcelable extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
                  public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable>;
                  public static CREATOR: globalAndroid.os.Parcelable.Creator<
                    com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable
                  >;
                  public constructor();
                  public constructor(param0: com.google.android.gms.auth.api.signin.GoogleSignInOptionsExtension);
                  public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                  public getType(): number;
                }
                export class HashAccumulator {
                  public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.HashAccumulator>;
                  public constructor();
                  public zaa(param0: boolean): com.google.android.gms.auth.api.signin.internal.HashAccumulator;
                  public addObject(param0: any): com.google.android.gms.auth.api.signin.internal.HashAccumulator;
                  public hash(): number;
                }
                export class Storage {
                  public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.Storage>;
                  public getSavedRefreshToken(): string;
                  public getSavedDefaultGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                  public clear(): void;
                  public zaf(): void;
                  public getSavedDefaultGoogleSignInOptions(): com.google.android.gms.auth.api.signin.GoogleSignInOptions;
                  public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.auth.api.signin.internal.Storage;
                  public saveDefaultGoogleSignInAccount(
                    param0: com.google.android.gms.auth.api.signin.GoogleSignInAccount,
                    param1: com.google.android.gms.auth.api.signin.GoogleSignInOptions,
                  ): void;
                }
                export class zaa extends globalAndroid.os.Parcelable.Creator<
                  com.google.android.gms.auth.api.signin.internal.GoogleSignInOptionsExtensionParcelable
                > {
                  public static class: java.lang.Class<com.google.android.gms.auth.api.signin.internal.zaa>;
                  public constructor();
                }
							}
              export class zaa {
                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zaa>;
                public compare(param0: any, param1: any): number;
              }
              export class zab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInAccount> {
                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zab>;
                public constructor();
              }
              export class zac extends java.util.Comparator<com.google.android.gms.common.api.Scope> {
                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zac>;
              }
              export class zad extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.auth.api.signin.GoogleSignInOptions> {
                public static class: java.lang.Class<com.google.android.gms.auth.api.signin.zad>;
                public constructor();
              }
            }
          }
        }
        export module cast {
          export class AdBreakClipInfo extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.AdBreakClipInfo>;
            public static AD_BREAK_CLIP_NOT_SKIPPABLE: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakClipInfo>;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getTitle(): string;
            public getClickThroughUrl(): string;
            public toJson(): org.json.JSONObject;
            public getVastAdsRequest(): com.google.android.gms.cast.VastAdsRequest;
            public getMimeType(): string;
            public getWhenSkippableInMs(): number;
            public getContentUrl(): string;
            public getHlsSegmentFormat(): string;
            public getId(): string;
            public getCustomData(): org.json.JSONObject;
            public getDurationInMs(): number;
            public getContentId(): string;
            public getImageUrl(): string;
          }
          export module AdBreakClipInfo {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.AdBreakClipInfo.Builder>;
              public setContentId(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
              public setImageUrl(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
              public setVastAdsRequest(param0: com.google.android.gms.cast.VastAdsRequest): com.google.android.gms.cast.AdBreakClipInfo.Builder;
              public setDurationInMs(param0: number): com.google.android.gms.cast.AdBreakClipInfo.Builder;
              public setHlsSegmentFormat(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
              public setTitle(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
              public setMimeType(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
              public setWhenSkippableInMs(param0: number): com.google.android.gms.cast.AdBreakClipInfo.Builder;
              public constructor(param0: string);
              public build(): com.google.android.gms.cast.AdBreakClipInfo;
              public setContentUrl(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
              public setClickThroughUrl(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
              public setCustomDataJsonString(param0: string): com.google.android.gms.cast.AdBreakClipInfo.Builder;
            }
          }
          export class AdBreakInfo extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.AdBreakInfo>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakInfo>;
            public toJson(): org.json.JSONObject;
            public constructor();
            public constructor(param0: number, param1: string, param2: number, param3: boolean, param4: native.Array<string>, param5: boolean);
            public getPlaybackPositionInMs(): number;
            public isEmbedded(): boolean;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getBreakClipIds(): native.Array<string>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getId(): string;
            public getDurationInMs(): number;
            public isWatched(): boolean;
          }
          export module AdBreakInfo {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.AdBreakInfo.Builder>;
              public setIsEmbedded(param0: boolean): com.google.android.gms.cast.AdBreakInfo.Builder;
              public setBreakClipIds(param0: native.Array<string>): com.google.android.gms.cast.AdBreakInfo.Builder;
              public build(): com.google.android.gms.cast.AdBreakInfo;
              public setDurationInMs(param0: number): com.google.android.gms.cast.AdBreakInfo.Builder;
              public setIsWatched(param0: boolean): com.google.android.gms.cast.AdBreakInfo.Builder;
              public setId(param0: string): com.google.android.gms.cast.AdBreakInfo.Builder;
              public constructor(param0: number);
            }
          }
          export class AdBreakStatus extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.AdBreakStatus>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakStatus>;
            public static AD_BREAK_CLIP_NOT_SKIPPABLE: number;
            public getBreakClipId(): string;
            public getBreakId(): string;
            public getWhenSkippableInMs(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getCurrentBreakTimeInMs(): number;
            public getCurrentBreakClipTimeInMs(): number;
          }
          export class ApplicationMetadata extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.ApplicationMetadata>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.ApplicationMetadata>;
            public getSupportedNamespaces(): java.util.List<string>;
            public getApplicationId(): string;
            public isNamespaceSupported(param0: string): boolean;
            public areNamespacesSupported(param0: java.util.List<string>): boolean;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getSenderAppIdentifier(): string;
            public getImages(): java.util.List<com.google.android.gms.common.images.WebImage>;
            public getName(): string;
            public toString(): string;
          }
          export class Cast {
            public static class: java.lang.Class<com.google.android.gms.cast.Cast>;
            public static MAX_MESSAGE_LENGTH: number;
            public static MAX_NAMESPACE_LENGTH: number;
            public static ACTIVE_INPUT_STATE_UNKNOWN: number;
            public static ACTIVE_INPUT_STATE_NO: number;
            public static ACTIVE_INPUT_STATE_YES: number;
            public static STANDBY_STATE_UNKNOWN: number;
            public static STANDBY_STATE_NO: number;
            public static STANDBY_STATE_YES: number;
            public static EXTRA_APP_NO_LONGER_RUNNING: string;
            public static API: com.google.android.gms.common.api.Api<com.google.android.gms.cast.Cast.CastOptions>;
          }
          export module Cast {
            export class ApplicationConnectionResult extends com.google.android.gms.common.api.Result {
              public static class: java.lang.Class<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.Cast$ApplicationConnectionResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
                getApplicationStatus(): string;
                getSessionId(): string;
                getWasLaunched(): boolean;
                getStatus(): com.google.android.gms.common.api.Status;
              });
              public constructor();
              public getStatus(): com.google.android.gms.common.api.Status;
              public getSessionId(): string;
              public getApplicationStatus(): string;
              public getWasLaunched(): boolean;
              public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
            }
            export class CastApi {
              public static class: java.lang.Class<com.google.android.gms.cast.Cast.CastApi>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.Cast$CastApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                requestStatus(param0: com.google.android.gms.common.api.GoogleApiClient): void;
                sendMessage(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                  param2: string,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
                launchApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                launchApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                  param2: boolean,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                launchApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                  param2: com.google.android.gms.cast.LaunchOptions,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                joinApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                  param2: string,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                joinApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                joinApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                leaveApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
                stopApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
                stopApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
                setVolume(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number): void;
                getVolume(param0: com.google.android.gms.common.api.GoogleApiClient): number;
                setMute(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): void;
                isMute(param0: com.google.android.gms.common.api.GoogleApiClient): boolean;
                getActiveInputState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
                getStandbyState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
                getApplicationMetadata(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.cast.ApplicationMetadata;
                getApplicationStatus(param0: com.google.android.gms.common.api.GoogleApiClient): string;
                setMessageReceivedCallbacks(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                  param2: com.google.android.gms.cast.Cast.MessageReceivedCallback,
                ): void;
                removeMessageReceivedCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): void;
              });
              public constructor();
              /** @deprecated */
              public launchApplication(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: string,
                param2: boolean,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
              public joinApplication(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: string,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
              public setVolume(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number): void;
              public isMute(param0: com.google.android.gms.common.api.GoogleApiClient): boolean;
              public stopApplication(
                param0: com.google.android.gms.common.api.GoogleApiClient,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
              public requestStatus(param0: com.google.android.gms.common.api.GoogleApiClient): void;
              public setMessageReceivedCallbacks(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: string,
                param2: com.google.android.gms.cast.Cast.MessageReceivedCallback,
              ): void;
              public getApplicationStatus(param0: com.google.android.gms.common.api.GoogleApiClient): string;
              public removeMessageReceivedCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): void;
              public launchApplication(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: string,
                param2: com.google.android.gms.cast.LaunchOptions,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
              public getActiveInputState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
              public leaveApplication(
                param0: com.google.android.gms.common.api.GoogleApiClient,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
              public getApplicationMetadata(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.cast.ApplicationMetadata;
              public joinApplication(
                param0: com.google.android.gms.common.api.GoogleApiClient,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
              public stopApplication(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: string,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
              public getStandbyState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
              public getVolume(param0: com.google.android.gms.common.api.GoogleApiClient): number;
              public launchApplication(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: string,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
              public joinApplication(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: string,
                param2: string,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
              public sendMessage(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: string,
                param2: string,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
              public setMute(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): void;
            }
            export module CastApi {
              export class zza extends com.google.android.gms.cast.Cast.CastApi {
                public static class: java.lang.Class<com.google.android.gms.cast.Cast.CastApi.zza>;
                public joinApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                public removeMessageReceivedCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string): void;
                public sendMessage(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                  param2: string,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
                public joinApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                public isMute(param0: com.google.android.gms.common.api.GoogleApiClient): boolean;
                public leaveApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
                public joinApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                  param2: string,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                public setMute(param0: com.google.android.gms.common.api.GoogleApiClient, param1: boolean): void;
                public constructor();
                public stopApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
                public launchApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                public launchApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                  param2: com.google.android.gms.cast.LaunchOptions,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                public getVolume(param0: com.google.android.gms.common.api.GoogleApiClient): number;
                public getApplicationStatus(param0: com.google.android.gms.common.api.GoogleApiClient): string;
                public setMessageReceivedCallbacks(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                  param2: com.google.android.gms.cast.Cast.MessageReceivedCallback,
                ): void;
                public getApplicationMetadata(param0: com.google.android.gms.common.api.GoogleApiClient): com.google.android.gms.cast.ApplicationMetadata;
                /** @deprecated */
                public launchApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                  param2: boolean,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.Cast.ApplicationConnectionResult>;
                public getActiveInputState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
                public stopApplication(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                  param1: string,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
                public setVolume(param0: com.google.android.gms.common.api.GoogleApiClient, param1: number): void;
                public requestStatus(param0: com.google.android.gms.common.api.GoogleApiClient): void;
                public getStandbyState(param0: com.google.android.gms.common.api.GoogleApiClient): number;
              }
            }
            export class CastOptions extends com.google.android.gms.common.api.Api.ApiOptions.HasOptions {
              public static class: java.lang.Class<com.google.android.gms.cast.Cast.CastOptions>;
              /** @deprecated */
              public static builder(
                param0: com.google.android.gms.cast.CastDevice,
                param1: com.google.android.gms.cast.Cast.Listener,
              ): com.google.android.gms.cast.Cast.CastOptions.Builder;
            }
            export module CastOptions {
              export class Builder {
                public static class: java.lang.Class<com.google.android.gms.cast.Cast.CastOptions.Builder>;
                public build(): com.google.android.gms.cast.Cast.CastOptions;
                public setVerboseLoggingEnabled(param0: boolean): com.google.android.gms.cast.Cast.CastOptions.Builder;
                public constructor(param0: com.google.android.gms.cast.CastDevice, param1: com.google.android.gms.cast.Cast.Listener);
              }
            }
            export class Listener {
              public static class: java.lang.Class<com.google.android.gms.cast.Cast.Listener>;
              public constructor();
              public onStandbyStateChanged(param0: number): void;
              public onApplicationDisconnected(param0: number): void;
              public onApplicationMetadataChanged(param0: com.google.android.gms.cast.ApplicationMetadata): void;
              public onActiveInputStateChanged(param0: number): void;
              public onVolumeChanged(): void;
              public onApplicationStatusChanged(): void;
            }
            export class MessageReceivedCallback {
              public static class: java.lang.Class<com.google.android.gms.cast.Cast.MessageReceivedCallback>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.Cast$MessageReceivedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onMessageReceived(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: string): void });
              public constructor();
              public onMessageReceived(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: string): void;
            }
            export class zza extends com.google.android.gms.internal.cast.zzcl<com.google.android.gms.cast.Cast.ApplicationConnectionResult> {
              public static class: java.lang.Class<com.google.android.gms.cast.Cast.zza>;
              public constructor();
              public setResult(param0: any): void;
              public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              /** @deprecated */
              public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
              public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
              public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
            }
          }
          export class CastDevice extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
            implements com.google.android.gms.common.internal.ReflectedParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.CastDevice>;
            public static CAPABILITY_VIDEO_OUT: number;
            public static CAPABILITY_VIDEO_IN: number;
            public static CAPABILITY_AUDIO_OUT: number;
            public static CAPABILITY_AUDIO_IN: number;
            public static CAPABILITY_MULTIZONE_GROUP: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.CastDevice>;
            public hasIcons(): boolean;
            public putInBundle(param0: globalAndroid.os.Bundle): void;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getDeviceId(): string;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public static getFromBundle(param0: globalAndroid.os.Bundle): com.google.android.gms.cast.CastDevice;
            public hasIPv6Address(): boolean;
            public isOnLocalNetwork(): boolean;
            public getIcons(): java.util.List<com.google.android.gms.common.images.WebImage>;
            public hasIPv4Address(): boolean;
            public getFriendlyName(): string;
            public getDeviceVersion(): string;
            public toString(): string;
            public isSameDevice(param0: com.google.android.gms.cast.CastDevice): boolean;
            public hasCapabilities(param0: native.Array<number>): boolean;
            public getInetAddress(): java.net.InetAddress;
            public getIcon(param0: number, param1: number): com.google.android.gms.common.images.WebImage;
            public hasCapability(param0: number): boolean;
            /** @deprecated */
            public getIpAddress(): java.net.Inet4Address;
            public getModelName(): string;
            public getServicePort(): number;
          }
          export class CastMediaControlIntent {
            public static class: java.lang.Class<com.google.android.gms.cast.CastMediaControlIntent>;
            public static DEFAULT_MEDIA_RECEIVER_APPLICATION_ID: string;
            public static ACTION_SYNC_STATUS: string;
            public static EXTRA_CUSTOM_DATA: string;
            public static EXTRA_CAST_APPLICATION_ID: string;
            public static EXTRA_CAST_RELAUNCH_APPLICATION: string;
            public static EXTRA_CAST_LANGUAGE_CODE: string;
            public static EXTRA_CAST_STOP_APPLICATION_WHEN_SESSION_ENDS: string;
            public static EXTRA_DEBUG_LOGGING_ENABLED: string;
            public static EXTRA_ERROR_CODE: string;
            public static ERROR_CODE_REQUEST_FAILED: number;
            public static ERROR_CODE_SESSION_START_FAILED: number;
            public static ERROR_CODE_TEMPORARILY_DISCONNECTED: number;
            public static categoryForRemotePlayback(): string;
            public static categoryForCast(param0: java.util.Collection<string>): string;
            public static categoryForCast(param0: string, param1: java.util.Collection<string>): string;
            public static categoryForRemotePlayback(param0: string): string;
            public static languageTagForLocale(param0: java.util.Locale): string;
            public static categoryForCast(param0: string): string;
          }
          export class CastPresentation {
            public static class: java.lang.Class<com.google.android.gms.cast.CastPresentation>;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.Display, param2: number);
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.Display);
          }
          export class CastRemoteDisplay {
            public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay>;
            public static CONFIGURATION_INTERACTIVE_REALTIME: number;
            public static CONFIGURATION_INTERACTIVE_NONREALTIME: number;
            public static CONFIGURATION_NONINTERACTIVE: number;
            public static EXTRA_INT_SESSION_ENDED_STATUS_CODE: string;
            public static API: com.google.android.gms.common.api.Api<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions>;
            public static CastRemoteDisplayApi: com.google.android.gms.cast.CastRemoteDisplayApi;
            public static getClient(param0: globalAndroid.content.Context): com.google.android.gms.cast.CastRemoteDisplayClient;
            public static isRemoteDisplaySdkSupported(param0: globalAndroid.content.Context): boolean;
          }
          export module CastRemoteDisplay {
            export class CastRemoteDisplayOptions extends com.google.android.gms.common.api.Api.ApiOptions.HasOptions {
              public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions>;
            }
            export module CastRemoteDisplayOptions {
              export class Builder {
                public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions.Builder>;
                public setConfigPreset(param0: number): com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions.Builder;
                public constructor(
                  param0: com.google.android.gms.cast.CastDevice,
                  param1: com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionCallbacks,
                );
                public build(): com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions;
              }
            }
            export class CastRemoteDisplaySessionCallbacks {
              public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionCallbacks>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.CastRemoteDisplay$CastRemoteDisplaySessionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onRemoteDisplayEnded(param0: com.google.android.gms.common.api.Status): void });
              public constructor();
              public onRemoteDisplayEnded(param0: com.google.android.gms.common.api.Status): void;
            }
            export class CastRemoteDisplaySessionResult extends com.google.android.gms.common.api.Result {
              public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.CastRemoteDisplay$CastRemoteDisplaySessionResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getPresentationDisplay(): globalAndroid.view.Display;
                getStatus(): com.google.android.gms.common.api.Status;
              });
              public constructor();
              public getStatus(): com.google.android.gms.common.api.Status;
              public getPresentationDisplay(): globalAndroid.view.Display;
            }
            export class Configuration {
              public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplay.Configuration>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.CastRemoteDisplay$Configuration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
          export class CastRemoteDisplayApi {
            public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayApi>;
            /**
             * Constructs a new instance of the com.google.android.gms.cast.CastRemoteDisplayApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              startRemoteDisplay(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: string,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
              stopRemoteDisplay(
                param0: com.google.android.gms.common.api.GoogleApiClient,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
            });
            public constructor();
            public startRemoteDisplay(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: string,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
            public stopRemoteDisplay(
              param0: com.google.android.gms.common.api.GoogleApiClient,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
          }
          export class CastRemoteDisplayClient extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
            public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayClient>;
            public stopRemoteDisplay(): com.google.android.gms.tasks.Task<java.lang.Void>;
            public startRemoteDisplay(
              param0: com.google.android.gms.cast.CastDevice,
              param1: string,
              param2: number,
              param3: globalAndroid.app.PendingIntent,
            ): com.google.android.gms.tasks.Task<globalAndroid.view.Display>;
          }
          export module CastRemoteDisplayClient {
            export class zza extends com.google.android.gms.internal.cast.zzem {
              public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayClient.zza>;
              public onError(param0: number): void;
              public onDisconnected(): void;
            }
          }
          export abstract class CastRemoteDisplayLocalService {
            public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService>;
            public constructor();
            public static startServiceWithOptions(
              param0: globalAndroid.content.Context,
              param1: java.lang.Class<any>,
              param2: string,
              param3: com.google.android.gms.cast.CastDevice,
              param4: com.google.android.gms.cast.CastRemoteDisplayLocalService.Options,
              param5: com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings,
              param6: com.google.android.gms.cast.CastRemoteDisplayLocalService.Callbacks,
            ): void;
            public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
            public onCreatePresentation(param0: globalAndroid.view.Display): void;
            public static startService(
              param0: globalAndroid.content.Context,
              param1: java.lang.Class<any>,
              param2: string,
              param3: com.google.android.gms.cast.CastDevice,
              param4: com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings,
              param5: com.google.android.gms.cast.CastRemoteDisplayLocalService.Callbacks,
            ): void;
            public getDisplay(): globalAndroid.view.Display;
            public static getInstance(): com.google.android.gms.cast.CastRemoteDisplayLocalService;
            public onCreate(): void;
            public onDismissPresentation(): void;
            public static stopService(): void;
            public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
            public static setDebugEnabled(): void;
            public updateNotificationSettings(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings): void;
          }
          export module CastRemoteDisplayLocalService {
            export class Callbacks {
              public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.Callbacks>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.CastRemoteDisplayLocalService$Callbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onServiceCreated(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
                onRemoteDisplaySessionStarted(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
                onRemoteDisplaySessionError(param0: com.google.android.gms.common.api.Status): void;
                onRemoteDisplaySessionEnded(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
              });
              public constructor();
              public onRemoteDisplaySessionError(param0: com.google.android.gms.common.api.Status): void;
              public onRemoteDisplaySessionEnded(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
              public onServiceCreated(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
              public onRemoteDisplaySessionStarted(param0: com.google.android.gms.cast.CastRemoteDisplayLocalService): void;
            }
            export class NotificationSettings {
              public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings>;
            }
            export module NotificationSettings {
              export class Builder {
                public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings.Builder>;
                public setNotificationText(param0: string): com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings.Builder;
                public build(): com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings;
                public setNotification(
                  param0: globalAndroid.app.Notification,
                ): com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings.Builder;
                public setNotificationPendingIntent(
                  param0: globalAndroid.app.PendingIntent,
                ): com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings.Builder;
                public setNotificationTitle(param0: string): com.google.android.gms.cast.CastRemoteDisplayLocalService.NotificationSettings.Builder;
                public constructor();
              }
            }
            export class Options {
              public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.Options>;
              public constructor();
              public getConfigPreset(): number;
              public setConfigPreset(param0: number): void;
            }
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.zza>;
            }
            export class zzb {
              public static class: java.lang.Class<com.google.android.gms.cast.CastRemoteDisplayLocalService.zzb>;
              public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            }
          }
          export class CastStatusCodes extends com.google.android.gms.common.api.CommonStatusCodes {
            public static class: java.lang.Class<com.google.android.gms.cast.CastStatusCodes>;
            public static SUCCESS: number;
            public static NETWORK_ERROR: number;
            public static TIMEOUT: number;
            public static INTERRUPTED: number;
            public static INTERNAL_ERROR: number;
            public static UNKNOWN_ERROR: number;
            public static AUTHENTICATION_FAILED: number;
            public static INVALID_REQUEST: number;
            public static CANCELED: number;
            public static NOT_ALLOWED: number;
            public static APPLICATION_NOT_FOUND: number;
            public static APPLICATION_NOT_RUNNING: number;
            public static MESSAGE_TOO_LARGE: number;
            public static MESSAGE_SEND_BUFFER_TOO_FULL: number;
            public static DEVICE_CONNECTION_SUSPENDED: number;
            public static FAILED: number;
            public static REPLACED: number;
            public static ERROR_SERVICE_CREATION_FAILED: number;
            public static ERROR_SERVICE_DISCONNECTED: number;
            public static ERROR_STOPPING_SERVICE_FAILED: number;
            public static getStatusCodeString(param0: number): string;
          }
          export class HlsSegmentFormat {
            public static class: java.lang.Class<com.google.android.gms.cast.HlsSegmentFormat>;
            /**
             * Constructs a new instance of the com.google.android.gms.cast.HlsSegmentFormat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static AC3: string;
            public static MP3: string;
            public static AAC: string;
            public static TS_AAC: string;
            public static TS: string;
          }
          export class LaunchOptions extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.LaunchOptions>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.LaunchOptions>;
            public getRelaunchIfRunning(): boolean;
            public constructor();
            public setRelaunchIfRunning(param0: boolean): void;
            public setLanguage(param0: string): void;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getLanguage(): string;
            public toString(): string;
          }
          export module LaunchOptions {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.LaunchOptions.Builder>;
              public constructor();
              public build(): com.google.android.gms.cast.LaunchOptions;
              public setLocale(param0: java.util.Locale): com.google.android.gms.cast.LaunchOptions.Builder;
              public setRelaunchIfRunning(param0: boolean): com.google.android.gms.cast.LaunchOptions.Builder;
            }
          }
          export class MediaInfo extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
            implements com.google.android.gms.common.internal.ReflectedParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.MediaInfo>;
            public static STREAM_TYPE_NONE: number;
            public static STREAM_TYPE_BUFFERED: number;
            public static STREAM_TYPE_LIVE: number;
            public static STREAM_TYPE_INVALID: number;
            public static UNKNOWN_DURATION: number;
            public static UNKNOWN_START_ABSOLUTE_TIME: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaInfo>;
            public getStartAbsoluteTime(): number;
            public getVmapAdsRequest(): com.google.android.gms.cast.VastAdsRequest;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public setTextTrackStyle(param0: com.google.android.gms.cast.TextTrackStyle): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getStreamDuration(): number;
            public getAdBreaks(): java.util.List<com.google.android.gms.cast.AdBreakInfo>;
            public getEntity(): string;
            public getMetadata(): com.google.android.gms.cast.MediaMetadata;
            public getTextTrackStyle(): com.google.android.gms.cast.TextTrackStyle;
            public toJson(): org.json.JSONObject;
            public getStreamType(): number;
            public getMediaTracks(): java.util.List<com.google.android.gms.cast.MediaTrack>;
            public getContentType(): string;
            public getCustomData(): org.json.JSONObject;
            public getAdBreakClips(): java.util.List<com.google.android.gms.cast.AdBreakClipInfo>;
            public getContentId(): string;
          }
          export module MediaInfo {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaInfo.Builder>;
              public setTextTrackStyle(param0: com.google.android.gms.cast.TextTrackStyle): com.google.android.gms.cast.MediaInfo.Builder;
              public setVmapAdsRequest(param0: com.google.android.gms.cast.VastAdsRequest): com.google.android.gms.cast.MediaInfo.Builder;
              public setMetadata(param0: com.google.android.gms.cast.MediaMetadata): com.google.android.gms.cast.MediaInfo.Builder;
              public constructor(param0: string, param1: string);
              public setMediaTracks(param0: java.util.List<com.google.android.gms.cast.MediaTrack>): com.google.android.gms.cast.MediaInfo.Builder;
              public setStreamDuration(param0: number): com.google.android.gms.cast.MediaInfo.Builder;
              public constructor(param0: string);
              public setStreamType(param0: number): com.google.android.gms.cast.MediaInfo.Builder;
              public setAdBreaks(param0: java.util.List<com.google.android.gms.cast.AdBreakInfo>): com.google.android.gms.cast.MediaInfo.Builder;
              public setContentType(param0: string): com.google.android.gms.cast.MediaInfo.Builder;
              public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaInfo.Builder;
              public setAdBreakClips(param0: java.util.List<com.google.android.gms.cast.AdBreakClipInfo>): com.google.android.gms.cast.MediaInfo.Builder;
              public setEntity(param0: string): com.google.android.gms.cast.MediaInfo.Builder;
              public build(): com.google.android.gms.cast.MediaInfo;
            }
          }
          export class MediaLiveSeekableRange {
            public static class: java.lang.Class<com.google.android.gms.cast.MediaLiveSeekableRange>;
            public getStartTime(): number;
            public getEndTime(): number;
            public isLiveDone(): boolean;
            public isMovingWindow(): boolean;
            public hashCode(): number;
            public equals(param0: any): boolean;
          }
          export class MediaLoadOptions {
            public static class: java.lang.Class<com.google.android.gms.cast.MediaLoadOptions>;
            public static PLAYBACK_RATE_MIN: number;
            public static PLAYBACK_RATE_MAX: number;
            public getCredentialsType(): string;
            public getPlaybackRate(): number;
            public getCustomData(): org.json.JSONObject;
            public getActiveTrackIds(): native.Array<number>;
            public getCredentials(): string;
            public getPlayPosition(): number;
            public getAutoplay(): boolean;
          }
          export module MediaLoadOptions {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaLoadOptions.Builder>;
              public constructor();
              public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaLoadOptions.Builder;
              public setAutoplay(param0: boolean): com.google.android.gms.cast.MediaLoadOptions.Builder;
              public setCredentials(param0: string): com.google.android.gms.cast.MediaLoadOptions.Builder;
              public setPlaybackRate(param0: number): com.google.android.gms.cast.MediaLoadOptions.Builder;
              public setPlayPosition(param0: number): com.google.android.gms.cast.MediaLoadOptions.Builder;
              public setCredentialsType(param0: string): com.google.android.gms.cast.MediaLoadOptions.Builder;
              public build(): com.google.android.gms.cast.MediaLoadOptions;
              public setActiveTrackIds(param0: native.Array<number>): com.google.android.gms.cast.MediaLoadOptions.Builder;
            }
          }
          export class MediaLoadRequestData {
            public static class: java.lang.Class<com.google.android.gms.cast.MediaLoadRequestData>;
            public static PLAYBACK_RATE_MIN: number;
            public static PLAYBACK_RATE_MAX: number;
            public getQueueData(): com.google.android.gms.cast.MediaQueueData;
            public getCredentialsType(): string;
            public getPlaybackRate(): number;
            public getMediaInfo(): com.google.android.gms.cast.MediaInfo;
            public getAutoplay(): java.lang.Boolean;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getCustomData(): org.json.JSONObject;
            public getActiveTrackIds(): native.Array<number>;
            public getCredentials(): string;
            public getCurrentTime(): number;
          }
          export module MediaLoadRequestData {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaLoadRequestData.Builder>;
              public constructor();
              public setQueueData(param0: com.google.android.gms.cast.MediaQueueData): com.google.android.gms.cast.MediaLoadRequestData.Builder;
              public setActiveTrackIds(param0: native.Array<number>): com.google.android.gms.cast.MediaLoadRequestData.Builder;
              public setCredentials(param0: string): com.google.android.gms.cast.MediaLoadRequestData.Builder;
              public setCredentialsType(param0: string): com.google.android.gms.cast.MediaLoadRequestData.Builder;
              public setPlaybackRate(param0: number): com.google.android.gms.cast.MediaLoadRequestData.Builder;
              public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaLoadRequestData.Builder;
              public setMediaInfo(param0: com.google.android.gms.cast.MediaInfo): com.google.android.gms.cast.MediaLoadRequestData.Builder;
              public setAutoplay(param0: java.lang.Boolean): com.google.android.gms.cast.MediaLoadRequestData.Builder;
              public setCurrentTime(param0: number): com.google.android.gms.cast.MediaLoadRequestData.Builder;
              public build(): com.google.android.gms.cast.MediaLoadRequestData;
            }
          }
          export class MediaMetadata extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.MediaMetadata>;
            public static MEDIA_TYPE_GENERIC: number;
            public static MEDIA_TYPE_MOVIE: number;
            public static MEDIA_TYPE_TV_SHOW: number;
            public static MEDIA_TYPE_MUSIC_TRACK: number;
            public static MEDIA_TYPE_PHOTO: number;
            public static MEDIA_TYPE_AUDIOBOOK_CHAPTER: number;
            public static MEDIA_TYPE_USER: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaMetadata>;
            public static KEY_CREATION_DATE: string;
            public static KEY_RELEASE_DATE: string;
            public static KEY_BROADCAST_DATE: string;
            public static KEY_TITLE: string;
            public static KEY_SUBTITLE: string;
            public static KEY_ARTIST: string;
            public static KEY_ALBUM_ARTIST: string;
            public static KEY_ALBUM_TITLE: string;
            public static KEY_BOOK_TITLE: string;
            public static KEY_CHAPTER_NUMBER: string;
            public static KEY_CHAPTER_TITLE: string;
            public static KEY_COMPOSER: string;
            public static KEY_DISC_NUMBER: string;
            public static KEY_TRACK_NUMBER: string;
            public static KEY_SEASON_NUMBER: string;
            public static KEY_EPISODE_NUMBER: string;
            public static KEY_SERIES_TITLE: string;
            public static KEY_STUDIO: string;
            public static KEY_WIDTH: string;
            public static KEY_HEIGHT: string;
            public static KEY_LOCATION_NAME: string;
            public static KEY_LOCATION_LATITUDE: string;
            public static KEY_LOCATION_LONGITUDE: string;
            public static KEY_QUEUE_ITEM_ID: string;
            public static KEY_SECTION_DURATION: string;
            public static KEY_SECTION_START_ABSOLUTE_TIME: string;
            public static KEY_SECTION_START_TIME_IN_CONTAINER: string;
            public static KEY_SECTION_START_TIME_IN_MEDIA: string;
            public putDate(param0: string, param1: java.util.Calendar): void;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getTimeMillis(param0: string): number;
            public getDate(param0: string): java.util.Calendar;
            public getDouble(param0: string): number;
            public getMediaType(): number;
            public hasImages(): boolean;
            public getDateAsString(param0: string): string;
            public constructor();
            public putTimeMillis(param0: string, param1: number): void;
            public clearImages(): void;
            public addImage(param0: com.google.android.gms.common.images.WebImage): void;
            public keySet(): java.util.Set<string>;
            public containsKey(param0: string): boolean;
            public toJson(): org.json.JSONObject;
            public getInt(param0: string): number;
            public constructor(param0: number);
            public putInt(param0: string, param1: number): void;
            public clear(): void;
            public putString(param0: string, param1: string): void;
            public getImages(): java.util.List<com.google.android.gms.common.images.WebImage>;
            public putDouble(param0: string, param1: number): void;
            public getString(param0: string): string;
          }
          export module MediaMetadata {
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaMetadata.zza>;
              public constructor();
            }
          }
          export class MediaQueueContainerMetadata {
            public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueContainerMetadata>;
            public static MEDIA_QUEUE_CONTAINER_TYPE_GENERIC: number;
            public static MEDIA_QUEUE_CONTAINER_TYPE_AUDIO_BOOK: number;
            public getContainerType(): number;
            public toJson(): org.json.JSONObject;
            public getSections(): java.util.List<com.google.android.gms.cast.MediaMetadata>;
            public getContainerDuration(): number;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getContainerImages(): java.util.List<com.google.android.gms.common.images.WebImage>;
            public getTitle(): string;
          }
          export module MediaQueueContainerMetadata {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueContainerMetadata.Builder>;
              public constructor();
              public build(): com.google.android.gms.cast.MediaQueueContainerMetadata;
              public setContainerType(param0: number): com.google.android.gms.cast.MediaQueueContainerMetadata.Builder;
              public setTitle(param0: string): com.google.android.gms.cast.MediaQueueContainerMetadata.Builder;
              public setContainerImages(
                param0: java.util.List<com.google.android.gms.common.images.WebImage>,
              ): com.google.android.gms.cast.MediaQueueContainerMetadata.Builder;
              public setSections(
                param0: java.util.List<com.google.android.gms.cast.MediaMetadata>,
              ): com.google.android.gms.cast.MediaQueueContainerMetadata.Builder;
              public setContainerDuration(param0: number): com.google.android.gms.cast.MediaQueueContainerMetadata.Builder;
            }
            export class MediaQueueContainerType {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueContainerMetadata.MediaQueueContainerType>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.MediaQueueContainerMetadata$MediaQueueContainerType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
          export class MediaQueueData {
            public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueData>;
            public static MEDIA_QUEUE_TYPE_GENERIC: number;
            public static MEDIA_QUEUE_TYPE_ALBUM: number;
            public static MEDIA_QUEUE_TYPE_PLAYLIST: number;
            public static MEDIA_QUEUE_TYPE_AUDIO_BOOK: number;
            public static MEDIA_QUEUE_TYPE_RADIO_STATION: number;
            public static MEDIA_QUEUE_TYPE_PODCAST_SERIES: number;
            public static MEDIA_QUEUE_TYPE_TV_SERIES: number;
            public static MEDIA_QUEUE_TYPE_VIDEO_PLAYLIST: number;
            public static MEDIA_QUEUE_TYPE_LIVE_TV: number;
            public static MEDIA_QUEUE_TYPE_MOVIE: number;
            public getItems(): java.util.List<com.google.android.gms.cast.MediaQueueItem>;
            public getStartTime(): number;
            public getQueueId(): string;
            public toJson(): org.json.JSONObject;
            public getContainerMetadata(): com.google.android.gms.cast.MediaQueueContainerMetadata;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getRepeatMode(): number;
            public getEntity(): string;
            public getStartIndex(): number;
            public getName(): string;
            public getQueueType(): number;
          }
          export module MediaQueueData {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueData.Builder>;
              public constructor();
              public setQueueType(param0: number): com.google.android.gms.cast.MediaQueueData.Builder;
              public setItems(param0: java.util.List<com.google.android.gms.cast.MediaQueueItem>): com.google.android.gms.cast.MediaQueueData.Builder;
              public setQueueId(param0: string): com.google.android.gms.cast.MediaQueueData.Builder;
              public build(): com.google.android.gms.cast.MediaQueueData;
              public setStartIndex(param0: number): com.google.android.gms.cast.MediaQueueData.Builder;
              public setName(param0: string): com.google.android.gms.cast.MediaQueueData.Builder;
              public setEntity(param0: string): com.google.android.gms.cast.MediaQueueData.Builder;
              public setContainerMetadata(param0: com.google.android.gms.cast.MediaQueueContainerMetadata): com.google.android.gms.cast.MediaQueueData.Builder;
              public setRepeatMode(param0: number): com.google.android.gms.cast.MediaQueueData.Builder;
              public setStartTime(param0: number): com.google.android.gms.cast.MediaQueueData.Builder;
            }
            export class MediaQueueType {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueData.MediaQueueType>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.MediaQueueData$MediaQueueType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
          export class MediaQueueItem extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueItem>;
            public static INVALID_ITEM_ID: number;
            public static DEFAULT_PLAYBACK_DURATION: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaQueueItem>;
            public getStartTime(): number;
            public toJson(): org.json.JSONObject;
            public getPreloadTime(): number;
            public getPlaybackDuration(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getCustomData(): org.json.JSONObject;
            public getActiveTrackIds(): native.Array<number>;
            public getMedia(): com.google.android.gms.cast.MediaInfo;
            public getItemId(): number;
            public getAutoplay(): boolean;
          }
          export module MediaQueueItem {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaQueueItem.Builder>;
              public setStartTime(param0: number): com.google.android.gms.cast.MediaQueueItem.Builder;
              public constructor(param0: org.json.JSONObject);
              public constructor(param0: com.google.android.gms.cast.MediaInfo);
              public constructor(param0: com.google.android.gms.cast.MediaQueueItem);
              public setPlaybackDuration(param0: number): com.google.android.gms.cast.MediaQueueItem.Builder;
              public setPreloadTime(param0: number): com.google.android.gms.cast.MediaQueueItem.Builder;
              public setActiveTrackIds(param0: native.Array<number>): com.google.android.gms.cast.MediaQueueItem.Builder;
              public setAutoplay(param0: boolean): com.google.android.gms.cast.MediaQueueItem.Builder;
              public clearItemId(): com.google.android.gms.cast.MediaQueueItem.Builder;
              public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaQueueItem.Builder;
              public build(): com.google.android.gms.cast.MediaQueueItem;
            }
          }
          export class MediaSeekOptions {
            public static class: java.lang.Class<com.google.android.gms.cast.MediaSeekOptions>;
            public static RESUME_STATE_UNCHANGED: number;
            public static RESUME_STATE_PLAY: number;
            public static RESUME_STATE_PAUSE: number;
            public isSeekToInfinite(): boolean;
            public getPosition(): number;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getResumeState(): number;
            public getCustomData(): org.json.JSONObject;
          }
          export module MediaSeekOptions {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaSeekOptions.Builder>;
              public constructor();
              public setPosition(param0: number): com.google.android.gms.cast.MediaSeekOptions.Builder;
              public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaSeekOptions.Builder;
              public build(): com.google.android.gms.cast.MediaSeekOptions;
              public setResumeState(param0: number): com.google.android.gms.cast.MediaSeekOptions.Builder;
              public setIsSeekToInfinite(param0: boolean): com.google.android.gms.cast.MediaSeekOptions.Builder;
            }
            export class ResumeState {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaSeekOptions.ResumeState>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.MediaSeekOptions$ResumeState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
          export class MediaStatus extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.MediaStatus>;
            public static COMMAND_PAUSE: number;
            public static COMMAND_SEEK: number;
            public static COMMAND_SET_VOLUME: number;
            public static COMMAND_TOGGLE_MUTE: number;
            public static COMMAND_SKIP_FORWARD: number;
            public static COMMAND_SKIP_BACKWARD: number;
            public static PLAYER_STATE_UNKNOWN: number;
            public static PLAYER_STATE_IDLE: number;
            public static PLAYER_STATE_PLAYING: number;
            public static PLAYER_STATE_PAUSED: number;
            public static PLAYER_STATE_BUFFERING: number;
            public static PLAYER_STATE_LOADING: number;
            public static IDLE_REASON_NONE: number;
            public static IDLE_REASON_FINISHED: number;
            public static IDLE_REASON_CANCELED: number;
            public static IDLE_REASON_INTERRUPTED: number;
            public static IDLE_REASON_ERROR: number;
            public static REPEAT_MODE_REPEAT_OFF: number;
            public static REPEAT_MODE_REPEAT_ALL: number;
            public static REPEAT_MODE_REPEAT_SINGLE: number;
            public static REPEAT_MODE_REPEAT_ALL_AND_SHUFFLE: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaStatus>;
            public getIdleReason(): number;
            public getQueueItems(): java.util.List<com.google.android.gms.cast.MediaQueueItem>;
            public getPlaybackRate(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getQueueItemById(param0: number): com.google.android.gms.cast.MediaQueueItem;
            public getPlayerState(): number;
            public getCurrentAdBreak(): com.google.android.gms.cast.AdBreakInfo;
            public getMediaInfo(): com.google.android.gms.cast.MediaInfo;
            public getStreamPosition(): number;
            public isMediaCommandSupported(param0: number): boolean;
            public getCustomData(): org.json.JSONObject;
            public getActiveTrackIds(): native.Array<number>;
            public getLoadingItemId(): number;
            public getItemById(param0: number): com.google.android.gms.cast.MediaQueueItem;
            public getQueueItem(param0: number): com.google.android.gms.cast.MediaQueueItem;
            public constructor();
            public getItemByIndex(param0: number): com.google.android.gms.cast.MediaQueueItem;
            public getLiveSeekableRange(): com.google.android.gms.cast.MediaLiveSeekableRange;
            public getStreamVolume(): number;
            public getQueueData(): com.google.android.gms.cast.MediaQueueData;
            public getPreloadedItemId(): number;
            public constructor(param0: org.json.JSONObject);
            public getQueueRepeatMode(): number;
            public isMute(): boolean;
            public isPlayingAd(): boolean;
            public getQueueItemCount(): number;
            public getVideoInfo(): com.google.android.gms.cast.VideoInfo;
            public getIndexById(param0: number): java.lang.Integer;
            public getCurrentAdBreakClip(): com.google.android.gms.cast.AdBreakClipInfo;
            public getCurrentItemId(): number;
            public getAdBreakStatus(): com.google.android.gms.cast.AdBreakStatus;
          }
          export class MediaTrack extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
            implements com.google.android.gms.common.internal.ReflectedParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.MediaTrack>;
            public static TYPE_UNKNOWN: number;
            public static TYPE_TEXT: number;
            public static TYPE_AUDIO: number;
            public static TYPE_VIDEO: number;
            public static SUBTYPE_UNKNOWN: number;
            public static SUBTYPE_NONE: number;
            public static SUBTYPE_SUBTITLES: number;
            public static SUBTYPE_CAPTIONS: number;
            public static SUBTYPE_DESCRIPTIONS: number;
            public static SUBTYPE_CHAPTERS: number;
            public static SUBTYPE_METADATA: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaTrack>;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getType(): number;
            public getName(): string;
            public getId(): number;
            public setContentType(param0: string): void;
            public setContentId(param0: string): void;
            public getSubtype(): number;
            public toJson(): org.json.JSONObject;
            public getContentType(): string;
            public getCustomData(): org.json.JSONObject;
            public getLanguage(): string;
            public getContentId(): string;
          }
          export module MediaTrack {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.MediaTrack.Builder>;
              public setContentType(param0: string): com.google.android.gms.cast.MediaTrack.Builder;
              public setLanguage(param0: string): com.google.android.gms.cast.MediaTrack.Builder;
              public constructor(param0: number, param1: number);
              public setSubtype(param0: number): com.google.android.gms.cast.MediaTrack.Builder;
              public setContentId(param0: string): com.google.android.gms.cast.MediaTrack.Builder;
              public setCustomData(param0: org.json.JSONObject): com.google.android.gms.cast.MediaTrack.Builder;
              public build(): com.google.android.gms.cast.MediaTrack;
              public setName(param0: string): com.google.android.gms.cast.MediaTrack.Builder;
              public setLanguage(param0: java.util.Locale): com.google.android.gms.cast.MediaTrack.Builder;
            }
          }
          export class RemoteMediaPlayer extends com.google.android.gms.cast.Cast.MessageReceivedCallback {
            public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer>;
            public static NAMESPACE: string;
            public static RESUME_STATE_UNCHANGED: number;
            public static RESUME_STATE_PLAY: number;
            public static RESUME_STATE_PAUSE: number;
            public static STATUS_SUCCEEDED: number;
            public static STATUS_FAILED: number;
            public static STATUS_CANCELED: number;
            public static STATUS_TIMED_OUT: number;
            public static STATUS_REPLACED: number;
            public queueAppendItem(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.cast.MediaQueueItem,
              param2: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public queueMoveItemToNewIndex(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: number,
              param2: number,
              param3: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public queueSetRepeatMode(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: number,
              param2: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public onMessageReceived(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: string): void;
            public queueLoad(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: native.Array<com.google.android.gms.cast.MediaQueueItem>,
              param2: number,
              param3: number,
              param4: number,
              param5: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public seek(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: number,
              param2: number,
              param3: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public load(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.cast.MediaInfo,
              param2: boolean,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public stop(
              param0: com.google.android.gms.common.api.GoogleApiClient,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public queueRemoveItem(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: number,
              param2: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public pause(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public play(
              param0: com.google.android.gms.common.api.GoogleApiClient,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public setStreamMute(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: boolean,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public play(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public setOnQueueStatusUpdatedListener(param0: com.google.android.gms.cast.RemoteMediaPlayer.OnQueueStatusUpdatedListener): void;
            public setStreamVolume(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: number,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public queueUpdateItems(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: native.Array<com.google.android.gms.cast.MediaQueueItem>,
              param2: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public getMediaInfo(): com.google.android.gms.cast.MediaInfo;
            public requestStatus(
              param0: com.google.android.gms.common.api.GoogleApiClient,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public setOnPreloadStatusUpdatedListener(param0: com.google.android.gms.cast.RemoteMediaPlayer.OnPreloadStatusUpdatedListener): void;
            public queueLoad(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: native.Array<com.google.android.gms.cast.MediaQueueItem>,
              param2: number,
              param3: number,
              param4: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public queueRemoveItems(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: native.Array<number>,
              param2: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public queueJumpToItem(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: number,
              param2: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public setTextTrackStyle(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.cast.TextTrackStyle,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public constructor();
            public queuePrev(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public setOnMetadataUpdatedListener(param0: com.google.android.gms.cast.RemoteMediaPlayer.OnMetadataUpdatedListener): void;
            public seek(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: number,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public queueInsertAndPlayItem(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.cast.MediaQueueItem,
              param2: number,
              param3: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public queueNext(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public getStreamDuration(): number;
            public seek(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: number,
              param2: number,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public setActiveMediaTracks(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: native.Array<number>,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public setOnStatusUpdatedListener(param0: com.google.android.gms.cast.RemoteMediaPlayer.OnStatusUpdatedListener): void;
            public queueInsertAndPlayItem(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.cast.MediaQueueItem,
              param2: number,
              param3: number,
              param4: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public getApproximateStreamPosition(): number;
            public load(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.cast.MediaInfo,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public stop(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public queueReorderItems(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: native.Array<number>,
              param2: number,
              param3: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public pause(
              param0: com.google.android.gms.common.api.GoogleApiClient,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public getNamespace(): string;
            public getMediaStatus(): com.google.android.gms.cast.MediaStatus;
            public setStreamMute(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: boolean,
              param2: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public load(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.cast.MediaInfo,
              param2: boolean,
              param3: number,
              param4: native.Array<number>,
              param5: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public setStreamVolume(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: number,
              param2: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public load(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.cast.MediaInfo,
              param2: boolean,
              param3: number,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public queueInsertItems(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: native.Array<com.google.android.gms.cast.MediaQueueItem>,
              param2: number,
              param3: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public queueJumpToItem(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: number,
              param2: number,
              param3: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
            public load(
              param0: com.google.android.gms.common.api.GoogleApiClient,
              param1: com.google.android.gms.cast.MediaInfo,
              param2: boolean,
              param3: number,
              param4: org.json.JSONObject,
            ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
          }
          export module RemoteMediaPlayer {
            export class MediaChannelResult extends com.google.android.gms.common.api.Result {
              public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.RemoteMediaPlayer$MediaChannelResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getCustomData(): org.json.JSONObject; getStatus(): com.google.android.gms.common.api.Status });
              public constructor();
              public getStatus(): com.google.android.gms.common.api.Status;
              public getCustomData(): org.json.JSONObject;
            }
            export class OnMetadataUpdatedListener {
              public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.OnMetadataUpdatedListener>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.RemoteMediaPlayer$OnMetadataUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onMetadataUpdated(): void });
              public constructor();
              public onMetadataUpdated(): void;
            }
            export class OnPreloadStatusUpdatedListener {
              public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.OnPreloadStatusUpdatedListener>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.RemoteMediaPlayer$OnPreloadStatusUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onPreloadStatusUpdated(): void });
              public constructor();
              public onPreloadStatusUpdated(): void;
            }
            export class OnQueueStatusUpdatedListener {
              public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.OnQueueStatusUpdatedListener>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.RemoteMediaPlayer$OnQueueStatusUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onQueueStatusUpdated(): void });
              public constructor();
              public onQueueStatusUpdated(): void;
            }
            export class OnStatusUpdatedListener {
              public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.OnStatusUpdatedListener>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.RemoteMediaPlayer$OnStatusUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onStatusUpdated(): void });
              public constructor();
              public onStatusUpdated(): void;
            }
            export class zza extends com.google.android.gms.internal.cast.zzdr {
              public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.zza>;
              public constructor(param0: com.google.android.gms.cast.RemoteMediaPlayer);
            }
            export abstract class zzb extends com.google.android.gms.internal.cast.zzcl<com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult> {
              public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.zzb>;
              public setResult(param0: any): void;
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
            }
            export class zzc extends com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult {
              public static class: java.lang.Class<com.google.android.gms.cast.RemoteMediaPlayer.zzc>;
              public getStatus(): com.google.android.gms.common.api.Status;
              public getCustomData(): org.json.JSONObject;
            }
          }
          export class TextTrackStyle extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.TextTrackStyle>;
            public static DEFAULT_FONT_SCALE: number;
            public static COLOR_UNSPECIFIED: number;
            public static EDGE_TYPE_UNSPECIFIED: number;
            public static EDGE_TYPE_NONE: number;
            public static EDGE_TYPE_OUTLINE: number;
            public static EDGE_TYPE_DROP_SHADOW: number;
            public static EDGE_TYPE_RAISED: number;
            public static EDGE_TYPE_DEPRESSED: number;
            public static WINDOW_TYPE_UNSPECIFIED: number;
            public static WINDOW_TYPE_NONE: number;
            public static WINDOW_TYPE_NORMAL: number;
            public static WINDOW_TYPE_ROUNDED: number;
            public static FONT_FAMILY_UNSPECIFIED: number;
            public static FONT_FAMILY_SANS_SERIF: number;
            public static FONT_FAMILY_MONOSPACED_SANS_SERIF: number;
            public static FONT_FAMILY_SERIF: number;
            public static FONT_FAMILY_MONOSPACED_SERIF: number;
            public static FONT_FAMILY_CASUAL: number;
            public static FONT_FAMILY_CURSIVE: number;
            public static FONT_FAMILY_SMALL_CAPITALS: number;
            public static FONT_STYLE_UNSPECIFIED: number;
            public static FONT_STYLE_NORMAL: number;
            public static FONT_STYLE_BOLD: number;
            public static FONT_STYLE_ITALIC: number;
            public static FONT_STYLE_BOLD_ITALIC: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.TextTrackStyle>;
            public getFontGenericFamily(): number;
            public setCustomData(param0: org.json.JSONObject): void;
            public getForegroundColor(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public setWindowType(param0: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public setWindowColor(param0: number): void;
            public setFontScale(param0: number): void;
            public getEdgeColor(): number;
            public getEdgeType(): number;
            public getWindowCornerRadius(): number;
            public getWindowColor(): number;
            public setEdgeColor(param0: number): void;
            public setBackgroundColor(param0: number): void;
            public getCustomData(): org.json.JSONObject;
            public setFontGenericFamily(param0: number): void;
            public getFontStyle(): number;
            public getBackgroundColor(): number;
            public constructor();
            public static fromSystemSettings(param0: globalAndroid.content.Context): com.google.android.gms.cast.TextTrackStyle;
            public setFontStyle(param0: number): void;
            public getWindowType(): number;
            public toJson(): org.json.JSONObject;
            public setFontFamily(param0: string): void;
            public getFontScale(): number;
            public setForegroundColor(param0: number): void;
            public setEdgeType(param0: number): void;
            public setWindowCornerRadius(param0: number): void;
            public getFontFamily(): string;
          }
          export class VastAdsRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.VastAdsRequest>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.VastAdsRequest>;
            public toJson(): org.json.JSONObject;
            public getAdsResponse(): string;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getAdTagUrl(): string;
            public static fromJson(param0: org.json.JSONObject): com.google.android.gms.cast.VastAdsRequest;
          }
          export module VastAdsRequest {
            export class Builder {
              public static class: java.lang.Class<com.google.android.gms.cast.VastAdsRequest.Builder>;
              public constructor();
              public setAdsResponse(param0: string): com.google.android.gms.cast.VastAdsRequest.Builder;
              public build(): com.google.android.gms.cast.VastAdsRequest;
              public setAdTagUrl(param0: string): com.google.android.gms.cast.VastAdsRequest.Builder;
            }
          }
          export class VideoInfo extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.VideoInfo>;
            public static HDR_TYPE_UNKNOWN: number;
            public static HDR_TYPE_SDR: number;
            public static HDR_TYPE_HDR10: number;
            public static HDR_TYPE_DV: number;
            public static HDR_TYPE_HDR: number;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.VideoInfo>;
            public getWidth(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getHeight(): number;
            public getHdrType(): number;
          }
          export module framework {
            export class AppVisibilityListener {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.AppVisibilityListener>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.AppVisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onAppEnteredForeground(): void; onAppEnteredBackground(): void });
              public constructor();
              public onAppEnteredForeground(): void;
              public onAppEnteredBackground(): void;
            }
            export class CastButtonFactory {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.CastButtonFactory>;
              public static setUpMediaRouteButton(param0: globalAndroid.content.Context, param1: any /* globalAndroid.support.v7.app.MediaRouteButton */): void;
              public static setUpMediaRouteButton(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.view.Menu,
                param2: number,
              ): globalAndroid.view.MenuItem;
            }
            export class CastContext {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.CastContext>;
              public static OPTIONS_PROVIDER_CLASS_NAME_KEY: string;
              public onDispatchVolumeKeyEventBeforeJellyBean(param0: globalAndroid.view.KeyEvent): boolean;
              public getMergedSelector(): any /* globalAndroid.support.v7.media.MediaRouteSelector */;
              public removeCastStateListener(param0: com.google.android.gms.cast.framework.CastStateListener): void;
              public getSessionManager(): com.google.android.gms.cast.framework.SessionManager;
              public getPrecacheManager(): com.google.android.gms.cast.framework.PrecacheManager;
              public getCastState(): number;
              public static getSharedInstance(): com.google.android.gms.cast.framework.CastContext;
              /** @deprecated */
              public removeAppVisibilityListener(param0: com.google.android.gms.cast.framework.AppVisibilityListener): void;
              public getMediaNotificationManager(): com.google.android.gms.cast.framework.MediaNotificationManager;
              public addCastStateListener(param0: com.google.android.gms.cast.framework.CastStateListener): void;
              /** @deprecated */
              public addAppVisibilityListener(param0: com.google.android.gms.cast.framework.AppVisibilityListener): void;
              public static getSharedInstance(param0: globalAndroid.content.Context): com.google.android.gms.cast.framework.CastContext;
              public getCastOptions(): com.google.android.gms.cast.framework.CastOptions;
              public setReceiverApplicationId(param0: string): void;
              public isAppVisible(): boolean;
            }
            export class CastOptions extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.CastOptions>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.CastOptions>;
              public getStopReceiverApplicationWhenEndingSession(): boolean;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getLaunchOptions(): com.google.android.gms.cast.LaunchOptions;
              public getVolumeDeltaBeforeIceCreamSandwich(): number;
              public getReceiverApplicationId(): string;
              public getCastMediaOptions(): com.google.android.gms.cast.framework.media.CastMediaOptions;
              public setReceiverApplicationId(param0: string): void;
              public getEnableReconnectionService(): boolean;
              public getSupportedNamespaces(): java.util.List<string>;
              public getResumeSavedSession(): boolean;
            }
            export module CastOptions {
              export class Builder {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.CastOptions.Builder>;
                public setLaunchOptions(param0: com.google.android.gms.cast.LaunchOptions): com.google.android.gms.cast.framework.CastOptions.Builder;
                public setStopReceiverApplicationWhenEndingSession(param0: boolean): com.google.android.gms.cast.framework.CastOptions.Builder;
                public build(): com.google.android.gms.cast.framework.CastOptions;
                public setCastMediaOptions(
                  param0: com.google.android.gms.cast.framework.media.CastMediaOptions,
                ): com.google.android.gms.cast.framework.CastOptions.Builder;
                public setSupportedNamespaces(param0: java.util.List<string>): com.google.android.gms.cast.framework.CastOptions.Builder;
                public setVolumeDeltaBeforeIceCreamSandwich(param0: number): com.google.android.gms.cast.framework.CastOptions.Builder;
                public setReceiverApplicationId(param0: string): com.google.android.gms.cast.framework.CastOptions.Builder;
                public setResumeSavedSession(param0: boolean): com.google.android.gms.cast.framework.CastOptions.Builder;
                public setEnableReconnectionService(param0: boolean): com.google.android.gms.cast.framework.CastOptions.Builder;
                public constructor();
              }
            }
            export class CastSession extends com.google.android.gms.cast.framework.Session {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.CastSession>;
              public setVolume(param0: number): void;
              public getSessionRemainingTimeMs(): number;
              public onStarting(param0: globalAndroid.os.Bundle): void;
              public end(param0: boolean): void;
              public resume(param0: globalAndroid.os.Bundle): void;
              public requestStatus(): void;
              public setMute(param0: boolean): void;
              public setMessageReceivedCallbacks(param0: string, param1: com.google.android.gms.cast.Cast.MessageReceivedCallback): void;
              public getStandbyState(): number;
              public getRemoteMediaClient(): com.google.android.gms.cast.framework.media.RemoteMediaClient;
              public getActiveInputState(): number;
              public start(param0: globalAndroid.os.Bundle): void;
              public getApplicationConnectionResult(): com.google.android.gms.cast.Cast.ApplicationConnectionResult;
              public getVolume(): number;
              public addCastListener(param0: com.google.android.gms.cast.Cast.Listener): void;
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
              public getCastDevice(): com.google.android.gms.cast.CastDevice;
              public sendMessage(param0: string, param1: string): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
              public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
              public removeCastListener(param0: com.google.android.gms.cast.Cast.Listener): void;
              public onResuming(param0: globalAndroid.os.Bundle): void;
              public isMute(): boolean;
              public removeMessageReceivedCallbacks(param0: string): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: string,
                param2: string,
                param3: com.google.android.gms.cast.framework.CastOptions,
                param4: com.google.android.gms.cast.Cast.CastApi,
                param5: any /* com.google.android.gms.internal.cast.zzf*/,
                param6: any /* com.google.android.gms.internal.cast.zzah*/,
              );
              public getApplicationStatus(): string;
            }
            export module CastSession {
              export class zza extends com.google.android.gms.cast.framework.zzab {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.CastSession.zza>;
              }
              export class zzb extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.cast.Cast.ApplicationConnectionResult> {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.CastSession.zzb>;
                public onResult(param0: any): void;
              }
              export class zzc
                implements
                  com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.CastSession.zzc>;
                public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
              export class zzd extends com.google.android.gms.cast.Cast.Listener {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.CastSession.zzd>;
                public onApplicationDisconnected(param0: number): void;
                public onVolumeChanged(): void;
                public onActiveInputStateChanged(param0: number): void;
                public onStandbyStateChanged(param0: number): void;
                public onApplicationMetadataChanged(param0: com.google.android.gms.cast.ApplicationMetadata): void;
                public onApplicationStatusChanged(): void;
              }
            }
            export class CastState {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.CastState>;
              public static NO_DEVICES_AVAILABLE: number;
              public static NOT_CONNECTED: number;
              public static CONNECTING: number;
              public static CONNECTED: number;
              public static toString(param0: number): string;
            }
            export class CastStateListener {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.CastStateListener>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.CastStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onCastStateChanged(param0: number): void });
              public constructor();
              public onCastStateChanged(param0: number): void;
            }
            export class IntroductoryOverlay {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.IntroductoryOverlay>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.IntroductoryOverlay interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { show(): void; remove(): void });
              public constructor();
              public show(): void;
              public remove(): void;
            }
            export module IntroductoryOverlay {
              export class Builder {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.IntroductoryOverlay.Builder>;
                public setButtonText(param0: string): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
                public setOverlayColor(param0: number): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
                public setOnOverlayDismissedListener(
                  param0: com.google.android.gms.cast.framework.IntroductoryOverlay.OnOverlayDismissedListener,
                ): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
                public getActivity(): globalAndroid.app.Activity;
                public build(): com.google.android.gms.cast.framework.IntroductoryOverlay;
                public setFocusRadiusId(param0: number): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
                public setButtonText(param0: number): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
                public setTitleText(param0: number): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
                public setSingleTime(): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
                public constructor(param0: globalAndroid.app.Activity, param1: any /* globalAndroid.support.v7.app.MediaRouteButton */);
                public setFocusRadius(param0: number): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
                public constructor(param0: globalAndroid.app.Activity, param1: globalAndroid.view.MenuItem);
                public setTitleText(param0: string): com.google.android.gms.cast.framework.IntroductoryOverlay.Builder;
              }
              export class OnOverlayDismissedListener {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.IntroductoryOverlay.OnOverlayDismissedListener>;
                /**
                 * Constructs a new instance of the com.google.android.gms.cast.framework.IntroductoryOverlay$OnOverlayDismissedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onOverlayDismissed(): void });
                public constructor();
                public onOverlayDismissed(): void;
              }
              export class zza {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.IntroductoryOverlay.zza>;
              }
            }
            export class MediaNotificationManager {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.MediaNotificationManager>;
              public constructor(param0: com.google.android.gms.cast.framework.SessionManager);
              public updateNotification(): void;
            }
            export class OptionsProvider {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.OptionsProvider>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.OptionsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getCastOptions(param0: globalAndroid.content.Context): com.google.android.gms.cast.framework.CastOptions;
                getAdditionalSessionProviders(param0: globalAndroid.content.Context): java.util.List<com.google.android.gms.cast.framework.SessionProvider>;
              });
              public constructor();
              public getCastOptions(param0: globalAndroid.content.Context): com.google.android.gms.cast.framework.CastOptions;
              public getAdditionalSessionProviders(
                param0: globalAndroid.content.Context,
              ): java.util.List<com.google.android.gms.cast.framework.SessionProvider>;
            }
            export class PrecacheManager {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.PrecacheManager>;
              public precache(param0: string): void;
              public constructor(
                param0: com.google.android.gms.cast.framework.CastOptions,
                param1: com.google.android.gms.cast.framework.SessionManager,
                param2: any /* com.google.android.gms.internal.cast.zzcn*/,
              );
            }
            export class ReconnectionService {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.ReconnectionService>;
              public constructor();
              public onCreate(): void;
              public onDestroy(): void;
              public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
              public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
            }
            export abstract class Session extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.Session>;
              public isResuming(): boolean;
              public notifySessionEnded(param0: number): void;
              public notifySessionStarted(param0: string): void;
              public getSessionRemainingTimeMs(): number;
              public isDisconnecting(): boolean;
              public isConnected(): boolean;
              public notifyFailedToResumeSession(param0: number): void;
              public onStarting(param0: globalAndroid.os.Bundle): void;
              public isDisconnected(): boolean;
              public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
              public end(param0: boolean): void;
              public resume(param0: globalAndroid.os.Bundle): void;
              public isConnecting(): boolean;
              public onResuming(param0: globalAndroid.os.Bundle): void;
              public getCategory(): string;
              public isSuspended(): boolean;
              public getSessionId(): string;
              public notifySessionResumed(param0: boolean): void;
              public start(param0: globalAndroid.os.Bundle): void;
              public notifyFailedToStartSession(param0: number): void;
              public notifySessionSuspended(param0: number): void;
            }
            export module Session {
              export class zza extends com.google.android.gms.cast.framework.zzab {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.Session.zza>;
                public start(param0: globalAndroid.os.Bundle): void;
                public resume(param0: globalAndroid.os.Bundle): void;
                public onResuming(param0: globalAndroid.os.Bundle): void;
                public onStarting(param0: globalAndroid.os.Bundle): void;
                public end(param0: boolean): void;
                public getSessionRemainingTimeMs(): number;
              }
            }
            export class SessionManager {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.SessionManager>;
              public addSessionManagerListener(
                param0: com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session>,
              ): void;
              public getCurrentCastSession(): com.google.android.gms.cast.framework.CastSession;
              public getCurrentSession(): com.google.android.gms.cast.framework.Session;
              public startSession(param0: globalAndroid.content.Intent): void;
              public removeSessionManagerListener(
                param0: com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session>,
              ): void;
              public endCurrentSession(param0: boolean): void;
              public constructor(param0: any /* com.google.android.gms.cast.framework.zzw*/, param1: globalAndroid.content.Context);
              public addSessionManagerListener(param0: com.google.android.gms.cast.framework.SessionManagerListener<any>, param1: java.lang.Class<any>): void;
              public removeSessionManagerListener(
                param0: com.google.android.gms.cast.framework.SessionManagerListener<any>,
                param1: java.lang.Class<any>,
              ): void;
            }
            export class SessionManagerListener<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.SessionManagerListener<any>>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.SessionManagerListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onSessionStarting(param0: T): void;
                onSessionStarted(param0: T, param1: string): void;
                onSessionStartFailed(param0: T, param1: number): void;
                onSessionEnding(param0: T): void;
                onSessionEnded(param0: T, param1: number): void;
                onSessionResuming(param0: T, param1: string): void;
                onSessionResumed(param0: T, param1: boolean): void;
                onSessionResumeFailed(param0: T, param1: number): void;
                onSessionSuspended(param0: T, param1: number): void;
              });
              public constructor();
              public onSessionStarting(param0: T): void;
              public onSessionEnding(param0: T): void;
              public onSessionResumeFailed(param0: T, param1: number): void;
              public onSessionStartFailed(param0: T, param1: number): void;
              public onSessionSuspended(param0: T, param1: number): void;
              public onSessionEnded(param0: T, param1: number): void;
              public onSessionResuming(param0: T, param1: string): void;
              public onSessionStarted(param0: T, param1: string): void;
              public onSessionResumed(param0: T, param1: boolean): void;
            }
            export abstract class SessionProvider {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.SessionProvider>;
              public getCategory(): string;
              public getContext(): globalAndroid.content.Context;
              public isSessionRecoverable(): boolean;
              public createSession(param0: string): com.google.android.gms.cast.framework.Session;
              public constructor(param0: globalAndroid.content.Context, param1: string);
            }
            export module SessionProvider {
              export class zza extends com.google.android.gms.cast.framework.zzz {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.SessionProvider.zza>;
                public getCategory(): string;
                public isSessionRecoverable(): boolean;
              }
            }
            export module internal {
              export module featurehighlight {
                export class HelpTextView implements com.google.android.gms.cast.framework.internal.featurehighlight.zzi {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.HelpTextView>;
                  public setText(param0: string, param1: string): void;
                  public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                  public asView(): globalAndroid.view.View;
                  public onFinishInflate(): void;
                }
                export class InnerZoneDrawable {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.InnerZoneDrawable>;
                  public setAlpha(param0: number): void;
                  public draw(param0: globalAndroid.graphics.Canvas): void;
                  public setScale(param0: number): void;
                  public setPulseAlpha(param0: number): void;
                  public constructor(param0: globalAndroid.content.Context);
                  public getOpacity(): number;
                  public setPulseScale(param0: number): void;
                  public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                }
                export class OuterHighlightDrawable {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.OuterHighlightDrawable>;
                  public setScale(param0: number): void;
                  public getColor(): number;
                  public setTranslationY(param0: number): void;
                  public setTranslationX(param0: number): void;
                  public getAlpha(): number;
                  public setAlpha(param0: number): void;
                  public draw(param0: globalAndroid.graphics.Canvas): void;
                  public setColor(param0: number): void;
                  public constructor(param0: globalAndroid.content.Context);
                  public getCenterX(): number;
                  public getCenterY(): number;
                  public getOpacity(): number;
                  public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
                }
                export class zza {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zza>;
                  public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
                }
                export class zzb {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzb>;
                  public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
                  public onDraw(param0: globalAndroid.graphics.Canvas): void;
                  public constructor(param0: globalAndroid.content.Context);
                  public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
                  public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                  public onMeasure(param0: number, param1: number): void;
                  public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
                  public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
                  public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
                  public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
                }
                export class zzc {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzc>;
                  public onLayoutChange(
                    param0: globalAndroid.view.View,
                    param1: number,
                    param2: number,
                    param3: number,
                    param4: number,
                    param5: number,
                    param6: number,
                    param7: number,
                    param8: number,
                  ): void;
                }
                export class zzd {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzd>;
                  public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
                }
                export class zze {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zze>;
                  public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
                }
                export class zzf {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzf>;
                  public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
                }
                export class zzg {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzg>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.cast.framework.internal.featurehighlight.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { zzap(): void; dismiss(): void });
                  public constructor();
                  public dismiss(): void;
                }
                export class zzh {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzh>;
                  public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
                }
                export class zzi {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzi>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.cast.framework.internal.featurehighlight.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { setText(param0: string, param1: string): void; asView(): globalAndroid.view.View });
                  public constructor();
                  public setText(param0: string, param1: string): void;
                  public asView(): globalAndroid.view.View;
                }
                export class zzj {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.internal.featurehighlight.zzj>;
                }
              }
            }
            export module media {
              export class CastMediaOptions extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.CastMediaOptions>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.CastMediaOptions>;
                public getMediaIntentReceiverClassName(): string;
                public getNotificationOptions(): com.google.android.gms.cast.framework.media.NotificationOptions;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public getExpandedControllerActivityClassName(): string;
                public getImagePicker(): com.google.android.gms.cast.framework.media.ImagePicker;
              }
              export module CastMediaOptions {
                export class Builder {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.CastMediaOptions.Builder>;
                  public constructor();
                  public build(): com.google.android.gms.cast.framework.media.CastMediaOptions;
                  public setNotificationOptions(
                    param0: com.google.android.gms.cast.framework.media.NotificationOptions,
                  ): com.google.android.gms.cast.framework.media.CastMediaOptions.Builder;
                  public setImagePicker(
                    param0: com.google.android.gms.cast.framework.media.ImagePicker,
                  ): com.google.android.gms.cast.framework.media.CastMediaOptions.Builder;
                  public setMediaIntentReceiverClassName(param0: string): com.google.android.gms.cast.framework.media.CastMediaOptions.Builder;
                  public setExpandedControllerActivityClassName(param0: string): com.google.android.gms.cast.framework.media.CastMediaOptions.Builder;
                }
              }
              export class ImageHints extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.ImageHints>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.ImageHints>;
                public getType(): number;
                public getHeightInPixels(): number;
                public constructor(param0: number, param1: number, param2: number);
                public constructor();
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public getWidthInPixels(): number;
              }
              export class ImagePicker {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.ImagePicker>;
                public static IMAGE_TYPE_UNKNOWN: number;
                public static IMAGE_TYPE_MEDIA_ROUTE_CONTROLLER_DIALOG_BACKGROUND: number;
                public static IMAGE_TYPE_NOTIFICATION_THUMBNAIL: number;
                public static IMAGE_TYPE_MINI_CONTROLLER_THUMBNAIL: number;
                public static IMAGE_TYPE_LOCK_SCREEN_BACKGROUND: number;
                public static IMAGE_TYPE_EXPANDED_CONTROLLER_BACKGROUND: number;
                public onPickImage(
                  param0: com.google.android.gms.cast.MediaMetadata,
                  param1: com.google.android.gms.cast.framework.media.ImageHints,
                ): com.google.android.gms.common.images.WebImage;
                /** @deprecated */
                public onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
                public constructor();
              }
              export module ImagePicker {
                export class zza extends com.google.android.gms.cast.framework.media.zzb.zza {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.ImagePicker.zza>;
                  public onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
                }
              }
              export class MediaIntentReceiver {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaIntentReceiver>;
                public static ACTION_TOGGLE_PLAYBACK: string;
                public static ACTION_SKIP_NEXT: string;
                public static ACTION_SKIP_PREV: string;
                public static ACTION_FORWARD: string;
                public static ACTION_REWIND: string;
                public static ACTION_STOP_CASTING: string;
                public static ACTION_DISCONNECT: string;
                public static EXTRA_SKIP_STEP_MS: string;
                public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
                public onReceiveActionSkipPrev(param0: com.google.android.gms.cast.framework.Session): void;
                public onReceiveActionRewind(param0: com.google.android.gms.cast.framework.Session, param1: number): void;
                public onReceiveActionForward(param0: com.google.android.gms.cast.framework.Session, param1: number): void;
                public onReceiveActionTogglePlayback(param0: com.google.android.gms.cast.framework.Session): void;
                public constructor();
                public onReceiveOtherAction(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.content.Intent): void;
                /** @deprecated */
                public onReceiveOtherAction(param0: string, param1: globalAndroid.content.Intent): void;
                public onReceiveActionSkipNext(param0: com.google.android.gms.cast.framework.Session): void;
                public onReceiveActionMediaButton(param0: com.google.android.gms.cast.framework.Session, param1: globalAndroid.content.Intent): void;
              }
              export class MediaNotificationService {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaNotificationService>;
                public static ACTION_UPDATE_NOTIFICATION: string;
                public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
                public onCreate(): void;
                public constructor();
                public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
                public onDestroy(): void;
              }
              export module MediaNotificationService {
                export class zza {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaNotificationService.zza>;
                  public constructor(param0: com.google.android.gms.common.images.WebImage);
                }
                export class zzb {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaNotificationService.zzb>;
                  public streamType: number;
                  public constructor(
                    param0: boolean,
                    param1: number,
                    param2: string,
                    param3: string,
                    param4: globalAndroid.support.v4.media.session.MediaSessionCompat.Token,
                    param5: boolean,
                    param6: boolean,
                  );
                }
              }
              export class MediaQueue {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueue>;
                public registerCallback(param0: com.google.android.gms.cast.framework.media.MediaQueue.Callback): void;
                public clear(): void;
                public unregisterCallback(param0: com.google.android.gms.cast.framework.media.MediaQueue.Callback): void;
                public getItemIds(): native.Array<number>;
                public fetchMoreItemsRelativeToIndex(
                  param0: number,
                  param1: number,
                  param2: number,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public getItemCount(): number;
                public setCacheCapacity(param0: number): void;
                public itemIdAtIndex(param0: number): number;
                public reload(): void;
                public getItemAtIndex(param0: number, param1: boolean): com.google.android.gms.cast.MediaQueueItem;
                public indexOfItemWithId(param0: number): number;
                public getItemAtIndex(param0: number): com.google.android.gms.cast.MediaQueueItem;
              }
              export module MediaQueue {
                export class Callback {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueue.Callback>;
                  public itemsUpdatedAtIndexes(param0: native.Array<number>): void;
                  public constructor();
                  public itemsInsertedInRange(param0: number, param1: number): void;
                  public itemsReloaded(): void;
                  public itemsRemovedAtIndexes(param0: native.Array<number>): void;
                  public mediaQueueChanged(): void;
                  public mediaQueueWillChange(): void;
                }
                export class zza extends com.google.android.gms.common.api.ResultCallback<
                  com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult
                > {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueue.zza>;
                  public onResult(param0: any): void;
                }
                export class zzb extends com.google.android.gms.common.api.ResultCallback<
                  com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult
                > {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueue.zzb>;
                  public onResult(param0: any): void;
                }
                export class zzc extends com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueue.zzc>;
                  public constructor();
                  public constructor(param0: com.google.android.gms.cast.framework.media.MediaQueue);
                  public onStatusUpdated(): void;
                }
                export class zzd extends com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.CastSession> {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueue.zzd>;
                  public onSessionEnding(param0: any): void;
                  public onSessionStarted(param0: any, param1: string): void;
                  public onSessionResumeFailed(param0: any, param1: number): void;
                  public onSessionStartFailed(param0: any, param1: number): void;
                  public onSessionSuspended(param0: any, param1: number): void;
                  public onSessionEnded(param0: any, param1: number): void;
                  public onSessionResuming(param0: any, param1: string): void;
                  public onSessionResumed(param0: any, param1: boolean): void;
                  public onSessionStarting(param0: any): void;
                }
              }
              export class MediaQueueArrayAdapter extends globalAndroid.widget.ArrayAdapter<com.google.android.gms.cast.MediaQueueItem> {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueueArrayAdapter>;
                public dispose(): void;
                public getItem(param0: number): com.google.android.gms.cast.MediaQueueItem;
                public getMediaQueue(): com.google.android.gms.cast.framework.media.MediaQueue;
                public constructor(param0: com.google.android.gms.cast.framework.media.MediaQueue, param1: globalAndroid.content.Context, param2: number);
                public isEmpty(): boolean;
                public areAllItemsEnabled(): boolean;
                public hasStableIds(): boolean;
                public getCount(): number;
                public getItemId(param0: number): number;
                public isEnabled(param0: number): boolean;
              }
              export module MediaQueueArrayAdapter {
                export class zza extends com.google.android.gms.cast.framework.media.MediaQueue.Callback {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueueArrayAdapter.zza>;
                  public itemsUpdatedAtIndexes(param0: native.Array<number>): void;
                  public itemsInsertedInRange(param0: number, param1: number): void;
                  public itemsReloaded(): void;
                  public itemsRemovedAtIndexes(param0: native.Array<number>): void;
                  public mediaQueueChanged(): void;
                  public mediaQueueWillChange(): void;
                }
              }
              export abstract class MediaQueueRecyclerViewAdapter<VH> extends androidx.recyclerview.widget.RecyclerView.Adapter<any> {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueueRecyclerViewAdapter<any>>;
                public dispose(): void;
                public getItem(param0: number): com.google.android.gms.cast.MediaQueueItem;
                public getMediaQueue(): com.google.android.gms.cast.framework.media.MediaQueue;
                public getItemCount(): number;
                public constructor(param0: com.google.android.gms.cast.framework.media.MediaQueue);
                public getItemId(param0: number): number;
              }
              export module MediaQueueRecyclerViewAdapter {
                export class zza extends com.google.android.gms.cast.framework.media.MediaQueue.Callback {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaQueueRecyclerViewAdapter.zza>;
                  public itemsUpdatedAtIndexes(param0: native.Array<number>): void;
                  public itemsInsertedInRange(param0: number, param1: number): void;
                  public itemsReloaded(): void;
                  public itemsRemovedAtIndexes(param0: native.Array<number>): void;
                  public mediaQueueChanged(): void;
                  public mediaQueueWillChange(): void;
                }
              }
              export class MediaUtils {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.MediaUtils>;
                public static getImageUri(param0: com.google.android.gms.cast.MediaInfo, param1: number): globalAndroid.net.Uri;
                public static getImageUrl(param0: com.google.android.gms.cast.MediaInfo, param1: number): string;
                public static getTrackLanguage(param0: com.google.android.gms.cast.MediaTrack): java.util.Locale;
              }
              export class NotificationAction extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationAction>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.NotificationAction>;
                public getAction(): string;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public getContentDescription(): string;
                public getIconResId(): number;
              }
              export module NotificationAction {
                export class Builder {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationAction.Builder>;
                  public constructor();
                  public setContentDescription(param0: string): com.google.android.gms.cast.framework.media.NotificationAction.Builder;
                  public setIconResId(param0: number): com.google.android.gms.cast.framework.media.NotificationAction.Builder;
                  public setAction(param0: string): com.google.android.gms.cast.framework.media.NotificationAction.Builder;
                  public build(): com.google.android.gms.cast.framework.media.NotificationAction;
                }
              }
              export abstract class NotificationActionsProvider {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationActionsProvider>;
                public getCompactViewActionIndices(): native.Array<number>;
                public constructor(param0: globalAndroid.content.Context);
                public getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
                public getApplicationContext(): globalAndroid.content.Context;
              }
              export module NotificationActionsProvider {
                export class zza extends com.google.android.gms.cast.framework.media.zzc.zza {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationActionsProvider.zza>;
                  public getCompactViewActionIndices(): native.Array<number>;
                  public getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
                }
              }
              export class NotificationOptions extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationOptions>;
                public static SKIP_STEP_TEN_SECONDS_IN_MS: number;
                public static SKIP_STEP_THIRTY_SECONDS_IN_MS: number;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.NotificationOptions>;
                public getForward30DrawableResId(): number;
                public getActions(): java.util.List<string>;
                public getRewindDrawableResId(): number;
                public getRewind10DrawableResId(): number;
                public getSmallIconDrawableResId(): number;
                public constructor();
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public constructor(
                  param0: java.util.List<string>,
                  param1: native.Array<number>,
                  param2: number,
                  param3: string,
                  param4: number,
                  param5: number,
                  param6: number,
                  param7: number,
                  param8: number,
                  param9: number,
                  param10: number,
                  param11: number,
                  param12: number,
                  param13: number,
                  param14: number,
                  param15: number,
                  param16: number,
                  param17: number,
                  param18: number,
                  param19: number,
                  param20: number,
                  param21: number,
                  param22: number,
                  param23: number,
                  param24: number,
                  param25: number,
                  param26: number,
                  param27: number,
                  param28: number,
                  param29: number,
                  param30: number,
                  param31: globalAndroid.os.IBinder,
                );
                public getSkipNextDrawableResId(): number;
                public getForward10DrawableResId(): number;
                public getCompatActionIndices(): native.Array<number>;
                public getSkipPrevDrawableResId(): number;
                public getStopLiveStreamDrawableResId(): number;
                public getCastingToDeviceStringResId(): number;
                public getForwardDrawableResId(): number;
                public getDisconnectDrawableResId(): number;
                public getSkipStepMs(): number;
                public getStopLiveStreamTitleResId(): number;
                public getTargetActivityClassName(): string;
                public getPauseDrawableResId(): number;
                public getPlayDrawableResId(): number;
                public getRewind30DrawableResId(): number;
              }
              export module NotificationOptions {
                export class Builder {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.NotificationOptions.Builder>;
                  public constructor();
                  public setSmallIconDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setTargetActivityClassName(param0: string): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setSkipStepMs(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setPlayDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setSkipNextDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setRewindDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setNotificationActionsProvider(
                    param0: com.google.android.gms.cast.framework.media.NotificationActionsProvider,
                  ): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setRewind30DrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setForward30DrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setForwardDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public build(): com.google.android.gms.cast.framework.media.NotificationOptions;
                  public setSkipPrevDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setPauseDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setStopLiveStreamDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setDisconnectDrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setForward10DrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setRewind10DrawableResId(param0: number): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                  public setActions(
                    param0: java.util.List<string>,
                    param1: native.Array<number>,
                  ): com.google.android.gms.cast.framework.media.NotificationOptions.Builder;
                }
              }
              export class RemoteMediaClient extends com.google.android.gms.cast.Cast.MessageReceivedCallback {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient>;
                public static NAMESPACE: string;
                public static RESUME_STATE_UNCHANGED: number;
                public static RESUME_STATE_PLAY: number;
                public static RESUME_STATE_PAUSE: number;
                public static STATUS_SUCCEEDED: number;
                public static STATUS_FAILED: number;
                public static STATUS_REPLACED: number;
                public requestStatus(): com.google.android.gms.common.api.PendingResult<
                  com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult
                >;
                public setPlaybackRate(
                  param0: number,
                  param1: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public getApproximateStreamPosition(): number;
                public pause(): com.google.android.gms.common.api.PendingResult<
                  com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult
                >;
                /** @deprecated */
                public load(
                  param0: com.google.android.gms.cast.MediaInfo,
                  param1: boolean,
                  param2: number,
                  param3: native.Array<number>,
                  param4: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public setStreamMute(
                  param0: boolean,
                  param1: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public setTextTrackStyle(
                  param0: com.google.android.gms.cast.TextTrackStyle,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public queueRemoveItems(
                  param0: native.Array<number>,
                  param1: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public getLoadingItem(): com.google.android.gms.cast.MediaQueueItem;
                public getPreloadedItem(): com.google.android.gms.cast.MediaQueueItem;
                public queueAppendItem(
                  param0: com.google.android.gms.cast.MediaQueueItem,
                  param1: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                /** @deprecated */
                public addListener(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener): void;
                public addProgressListener(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener, param1: number): boolean;
                public pause(
                  param0: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public getPlayerState(): number;
                /** @deprecated */
                public load(
                  param0: com.google.android.gms.cast.MediaInfo,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public getApproximateAdBreakClipPositionMs(): number;
                public isBuffering(): boolean;
                public setPlaybackRate(
                  param0: number,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public play(
                  param0: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                /** @deprecated */
                public seek(
                  param0: number,
                  param1: number,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                /** @deprecated */
                public load(
                  param0: com.google.android.gms.cast.MediaInfo,
                  param1: boolean,
                  param2: number,
                  param3: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public queueInsertItems(
                  param0: native.Array<com.google.android.gms.cast.MediaQueueItem>,
                  param1: number,
                  param2: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public removeProgressListener(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener): void;
                public queueNext(
                  param0: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public isPaused(): boolean;
                public getStreamDuration(): number;
                public queueUpdateItems(
                  param0: native.Array<com.google.android.gms.cast.MediaQueueItem>,
                  param1: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public setStreamMute(
                  param0: boolean,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public queueRemoveItem(
                  param0: number,
                  param1: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public queueLoad(
                  param0: native.Array<com.google.android.gms.cast.MediaQueueItem>,
                  param1: number,
                  param2: number,
                  param3: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public queueMoveItemToNewIndex(
                  param0: number,
                  param1: number,
                  param2: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public isPlaying(): boolean;
                public registerCallback(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback): void;
                public constructor(param0: any /* com.google.android.gms.internal.cast.zzdn*/, param1: com.google.android.gms.cast.Cast.CastApi);
                public togglePlayback(): void;
                public getCurrentItem(): com.google.android.gms.cast.MediaQueueItem;
                public isLiveStream(): boolean;
                /** @deprecated */
                public seek(
                  param0: number,
                  param1: number,
                  param2: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public queueInsertAndPlayItem(
                  param0: com.google.android.gms.cast.MediaQueueItem,
                  param1: number,
                  param2: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public stop(): com.google.android.gms.common.api.PendingResult<
                  com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult
                >;
                public setStreamVolume(
                  param0: number,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public queueJumpToItem(
                  param0: number,
                  param1: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public setParseAdsInfoCallback(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.ParseAdsInfoCallback): void;
                public queueReorderItems(
                  param0: native.Array<number>,
                  param1: number,
                  param2: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public onMessageReceived(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: string): void;
                public getNamespace(): string;
                public getMediaQueue(): com.google.android.gms.cast.framework.media.MediaQueue;
                public setActiveMediaTracks(
                  param0: native.Array<number>,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                /** @deprecated */
                public seek(
                  param0: number,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public setStreamVolume(
                  param0: number,
                  param1: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public skipAd(): com.google.android.gms.common.api.PendingResult<
                  com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult
                >;
                public getApproximateLiveSeekableRangeStart(): number;
                /** @deprecated */
                public removeListener(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener): void;
                public unregisterCallback(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback): void;
                /** @deprecated */
                public load(
                  param0: com.google.android.gms.cast.MediaInfo,
                  param1: boolean,
                  param2: number,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public play(): com.google.android.gms.common.api.PendingResult<
                  com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult
                >;
                public queuePrev(
                  param0: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public isPlayingAd(): boolean;
                public queueInsertAndPlayItem(
                  param0: com.google.android.gms.cast.MediaQueueItem,
                  param1: number,
                  param2: number,
                  param3: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public stop(
                  param0: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public getMediaInfo(): com.google.android.gms.cast.MediaInfo;
                /** @deprecated */
                public load(
                  param0: com.google.android.gms.cast.MediaInfo,
                  param1: boolean,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public load(
                  param0: com.google.android.gms.cast.MediaLoadRequestData,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public getApproximateLiveSeekableRangeEnd(): number;
                public getMediaStatus(): com.google.android.gms.cast.MediaStatus;
                public isLoadingNextItem(): boolean;
                public getIdleReason(): number;
                public load(
                  param0: com.google.android.gms.cast.MediaInfo,
                  param1: com.google.android.gms.cast.MediaLoadOptions,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public queueSetRepeatMode(
                  param0: number,
                  param1: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public hasMediaSession(): boolean;
                public seek(
                  param0: com.google.android.gms.cast.MediaSeekOptions,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public queueJumpToItem(
                  param0: number,
                  param1: number,
                  param2: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                public queueLoad(
                  param0: native.Array<com.google.android.gms.cast.MediaQueueItem>,
                  param1: number,
                  param2: number,
                  param3: number,
                  param4: org.json.JSONObject,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
              }
              export module RemoteMediaClient {
                export class Callback {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback>;
                  public constructor();
                  public onQueueStatusUpdated(): void;
                  public onAdBreakStatusUpdated(): void;
                  public onPreloadStatusUpdated(): void;
                  public onMetadataUpdated(): void;
                  public onSendingRemoteMediaRequest(): void;
                  public onStatusUpdated(): void;
                }
                export class Listener {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.cast.framework.media.RemoteMediaClient$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    onStatusUpdated(): void;
                    onMetadataUpdated(): void;
                    onQueueStatusUpdated(): void;
                    onPreloadStatusUpdated(): void;
                    onSendingRemoteMediaRequest(): void;
                    onAdBreakStatusUpdated(): void;
                  });
                  public constructor();
                  public onQueueStatusUpdated(): void;
                  public onAdBreakStatusUpdated(): void;
                  public onPreloadStatusUpdated(): void;
                  public onMetadataUpdated(): void;
                  public onSendingRemoteMediaRequest(): void;
                  public onStatusUpdated(): void;
                }
                export class MediaChannelResult extends com.google.android.gms.common.api.Result {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.cast.framework.media.RemoteMediaClient$MediaChannelResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { getCustomData(): org.json.JSONObject; getStatus(): com.google.android.gms.common.api.Status });
                  public constructor();
                  public getStatus(): com.google.android.gms.common.api.Status;
                  public getCustomData(): org.json.JSONObject;
                }
                export class ParseAdsInfoCallback {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.ParseAdsInfoCallback>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.cast.framework.media.RemoteMediaClient$ParseAdsInfoCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    parseIsPlayingAdFromMediaStatus(param0: com.google.android.gms.cast.MediaStatus): boolean;
                    parseAdBreaksFromMediaStatus(param0: com.google.android.gms.cast.MediaStatus): java.util.List<com.google.android.gms.cast.AdBreakInfo>;
                  });
                  public constructor();
                  public parseIsPlayingAdFromMediaStatus(param0: com.google.android.gms.cast.MediaStatus): boolean;
                  public parseAdBreaksFromMediaStatus(param0: com.google.android.gms.cast.MediaStatus): java.util.List<com.google.android.gms.cast.AdBreakInfo>;
                }
                export class ProgressListener {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.cast.framework.media.RemoteMediaClient$ProgressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { onProgressUpdated(param0: number, param1: number): void });
                  public constructor();
                  public onProgressUpdated(param0: number, param1: number): void;
                }
                export class zza extends com.google.android.gms.internal.cast.zzdr {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.zza>;
                  public constructor(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient);
                }
                export class zzb extends com.google.android.gms.common.api.internal.BasePendingResult<
                  com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult
                > {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.zzb>;
                }
                export abstract class zzc extends com.google.android.gms.internal.cast.zzcl<
                  com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult
                > {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc>;
                  public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
                  public setResult(param0: any): void;
                }
                export class zzd extends com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.zzd>;
                  public getStatus(): com.google.android.gms.common.api.Status;
                  public getCustomData(): org.json.JSONObject;
                }
                export class zze {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.RemoteMediaClient.zze>;
                  public constructor(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient, param1: number);
                  public start(): void;
                  public isStarted(): boolean;
                  public hasListener(): boolean;
                  public stop(): void;
                }
              }
              export class TracksChooserDialogFragment {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.TracksChooserDialogFragment>;
                /** @deprecated */
                public constructor();
                public onDestroyView(): void;
                public static newInstance(): com.google.android.gms.cast.framework.media.TracksChooserDialogFragment;
                public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                /** @deprecated */
                public static newInstance(
                  param0: com.google.android.gms.cast.MediaInfo,
                  param1: native.Array<number>,
                ): com.google.android.gms.cast.framework.media.TracksChooserDialogFragment;
              }
              export module uicontroller {
                export class UIController {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.UIController>;
                  public constructor();
                  public getRemoteMediaClient(): com.google.android.gms.cast.framework.media.RemoteMediaClient;
                  public onSendingRemoteMediaRequest(): void;
                  public onSessionEnded(): void;
                  public onMediaStatusUpdated(): void;
                  public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
                }
                export class UIMediaController extends java.lang.Object {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.UIMediaController>;
                  public bindImageViewToPlayPauseToggle(
                    param0: globalAndroid.widget.ImageView,
                    param1: globalAndroid.graphics.drawable.Drawable,
                    param2: globalAndroid.graphics.drawable.Drawable,
                    param3: globalAndroid.graphics.drawable.Drawable,
                    param4: globalAndroid.view.View,
                    param5: boolean,
                  ): void;
                  public onSessionStarted(param0: any, param1: string): void;
                  public onSessionResumeFailed(param0: any, param1: number): void;
                  public bindTextViewToMetadataOfPreloadedItem(param0: globalAndroid.widget.TextView, param1: java.util.List<string>): void;
                  /** @deprecated */
                  public bindImageViewToImageOfCurrentItem(param0: globalAndroid.widget.ImageView, param1: number, param2: number): void;
                  public bindImageViewToImageOfCurrentItem(
                    param0: globalAndroid.widget.ImageView,
                    param1: com.google.android.gms.cast.framework.media.ImageHints,
                    param2: globalAndroid.view.View,
                  ): void;
                  public bindImageViewToImageOfCurrentItem(
                    param0: globalAndroid.widget.ImageView,
                    param1: com.google.android.gms.cast.framework.media.ImageHints,
                    param2: number,
                  ): void;
                  public onSeekBarStartTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
                  public bindViewToForward(param0: globalAndroid.view.View, param1: number): void;
                  public bindSeekBar(param0: globalAndroid.widget.SeekBar): void;
                  public onSessionResumed(param0: com.google.android.gms.cast.framework.CastSession, param1: boolean): void;
                  public bindTextViewToStreamPosition(param0: globalAndroid.widget.TextView, param1: boolean, param2: number): void;
                  public onSessionStartFailed(param0: com.google.android.gms.cast.framework.CastSession, param1: number): void;
                  public onLaunchExpandedControllerClicked(param0: globalAndroid.view.View): void;
                  public onQueueStatusUpdated(): void;
                  public onSkipNextClicked(param0: globalAndroid.view.View): void;
                  public onMetadataUpdated(): void;
                  public onSendingRemoteMediaRequest(): void;
                  public bindViewToSkipPrev(param0: globalAndroid.view.View, param1: number): void;
                  public bindImageViewToImageOfPreloadedItem(
                    param0: globalAndroid.widget.ImageView,
                    param1: com.google.android.gms.cast.framework.media.ImageHints,
                    param2: number,
                  ): void;
                  public onForwardClicked(param0: globalAndroid.view.View, param1: number): void;
                  public onSessionEnding(param0: any): void;
                  public bindProgressBar(param0: globalAndroid.widget.ProgressBar): void;
                  public onSessionEnding(param0: com.google.android.gms.cast.framework.CastSession): void;
                  public onSeekBarProgressChanged(param0: globalAndroid.widget.SeekBar, param1: number, param2: boolean): void;
                  public onAdBreakStatusUpdated(): void;
                  public setPostRemoteMediaClientListener(param0: com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener): void;
                  public onSessionStarted(param0: com.google.android.gms.cast.framework.CastSession, param1: string): void;
                  public bindViewToSkipNext(param0: globalAndroid.view.View, param1: number): void;
                  public onSessionStarting(param0: any): void;
                  public bindProgressBar(param0: globalAndroid.widget.ProgressBar, param1: number): void;
                  public bindViewVisibilityToMediaSession(param0: globalAndroid.view.View, param1: number): void;
                  public bindViewToLaunchExpandedController(param0: globalAndroid.view.View): void;
                  public constructor(param0: globalAndroid.app.Activity);
                  public bindSeekBar(param0: com.google.android.gms.cast.framework.media.widget.CastSeekBar, param1: number): void;
                  public onStatusUpdated(): void;
                  public onSkipPrevClicked(param0: globalAndroid.view.View): void;
                  public onSessionResumed(param0: any, param1: boolean): void;
                  public bindTextViewToMetadataOfCurrentItem(param0: globalAndroid.widget.TextView, param1: java.util.List<string>): void;
                  public bindTextViewToStreamDuration(param0: globalAndroid.widget.TextView, param1: globalAndroid.view.View): void;
                  public getRemoteMediaClient(): com.google.android.gms.cast.framework.media.RemoteMediaClient;
                  public bindViewVisibilityToPreloadingEvent(param0: globalAndroid.view.View, param1: number): void;
                  public onSeekBarStopTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
                  public bindSeekBar(param0: globalAndroid.widget.SeekBar, param1: number): void;
                  public onSessionResuming(param0: any, param1: string): void;
                  public onClosedCaptionClicked(param0: globalAndroid.view.View): void;
                  public bindTextViewToStreamDuration(param0: globalAndroid.widget.TextView): void;
                  public bindViewToLoadingIndicator(param0: globalAndroid.view.View): void;
                  public bindTextViewToStreamPosition(param0: globalAndroid.widget.TextView, param1: boolean): void;
                  public onSessionStarting(param0: com.google.android.gms.cast.framework.CastSession): void;
                  public bindTextViewToMetadataOfCurrentItem(param0: globalAndroid.widget.TextView, param1: string): void;
                  public bindViewToClosedCaption(param0: globalAndroid.view.View): void;
                  public onRewindClicked(param0: globalAndroid.view.View, param1: number): void;
                  public onSessionSuspended(param0: any, param1: number): void;
                  public bindTextViewToMetadataOfPreloadedItem(param0: globalAndroid.widget.TextView, param1: string): void;
                  public onMuteToggleClicked(param0: globalAndroid.widget.ImageView): void;
                  public onSessionResumeFailed(param0: com.google.android.gms.cast.framework.CastSession, param1: number): void;
                  public onSessionResuming(param0: com.google.android.gms.cast.framework.CastSession, param1: string): void;
                  public bindImageViewToMuteToggle(param0: globalAndroid.widget.ImageView): void;
                  public dispose(): void;
                  public onSessionEnded(param0: any, param1: number): void;
                  public isActive(): boolean;
                  public bindViewToRewind(param0: globalAndroid.view.View, param1: number): void;
                  /** @deprecated */
                  public bindImageViewToImageOfCurrentItem(param0: globalAndroid.widget.ImageView, param1: number, param2: globalAndroid.view.View): void;
                  public onPreloadStatusUpdated(): void;
                  public onSessionStartFailed(param0: any, param1: number): void;
                  public bindViewToUIController(
                    param0: globalAndroid.view.View,
                    param1: com.google.android.gms.cast.framework.media.uicontroller.UIController,
                  ): void;
                  public onSessionEnded(param0: com.google.android.gms.cast.framework.CastSession, param1: number): void;
                  /** @deprecated */
                  public bindImageViewToImageOfPreloadedItem(param0: globalAndroid.widget.ImageView, param1: number, param2: number): void;
                  public bindSeekBar(param0: com.google.android.gms.cast.framework.media.widget.CastSeekBar): void;
                  public onPlayPauseToggleClicked(param0: globalAndroid.widget.ImageView): void;
                  public bindTextViewToSmartSubtitle(param0: globalAndroid.widget.TextView): void;
                  public onSessionSuspended(param0: com.google.android.gms.cast.framework.CastSession, param1: number): void;
                }
                export class zza {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zza>;
                  public getMaxProgress(): number;
                }
                export class zzb extends java.lang.Object {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzb>;
                }
                export class zzc {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzc>;
                }
                export class zzd {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzd>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
                export class zze {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zze>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
                export class zzf {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzf>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
                export class zzg {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzg>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
                export class zzh {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzh>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
                export class zzi {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzi>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
                export class zzj {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzj>;
                  public onProgressChanged(param0: globalAndroid.widget.SeekBar, param1: number, param2: boolean): void;
                  public onStartTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
                  public onStopTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
                }
                export class zzk extends com.google.android.gms.cast.framework.media.widget.CastSeekBar.zzc {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzk>;
                }
                export class zzl {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzl>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
                export class zzm {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.uicontroller.zzm>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
              }
              export module widget {
                export class CastSeekBar {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.CastSeekBar>;
                  public getMaxProgress(): number;
                  public onDraw(param0: globalAndroid.graphics.Canvas): void;
                  public constructor(param0: globalAndroid.content.Context);
                  public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
                  public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
                  public getProgress(): number;
                  public onMeasure(param0: number, param1: number): void;
                  public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
                  public onDetachedFromWindow(): void;
                }
                export module CastSeekBar {
                  export class zza {
                    public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.CastSeekBar.zza>;
                    public progress: number;
                    public equals(param0: any): boolean;
                    public hashCode(): number;
                    public constructor(param0: number);
                  }
                  export class zzb {
                    public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.CastSeekBar.zzb>;
                    public equals(param0: any): boolean;
                    public hashCode(): number;
                    public constructor();
                  }
                  export class zzc {
                    public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.CastSeekBar.zzc>;
                    public constructor();
                  }
                  export class zzd {
                    public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.CastSeekBar.zzd>;
                    public onInitializeAccessibilityNodeInfo(
                      param0: globalAndroid.view.View,
                      param1: globalAndroid.view.accessibility.AccessibilityNodeInfo,
                    ): void;
                    public performAccessibilityAction(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.os.Bundle): boolean;
                    public onInitializeAccessibilityEvent(param0: globalAndroid.view.View, param1: globalAndroid.view.accessibility.AccessibilityEvent): void;
                  }
                }
                export class ControlButtonsContainer {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.ControlButtonsContainer>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.cast.framework.media.widget.ControlButtonsContainer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    getButtonSlotCount(): number;
                    getButtonTypeAt(param0: number): number;
                    getButtonImageViewAt(param0: number): globalAndroid.widget.ImageView;
                    getUIMediaController(): com.google.android.gms.cast.framework.media.uicontroller.UIMediaController;
                  });
                  public constructor();
                  public getButtonTypeAt(param0: number): number;
                  public getButtonSlotCount(): number;
                  public getButtonImageViewAt(param0: number): globalAndroid.widget.ImageView;
                  public getUIMediaController(): com.google.android.gms.cast.framework.media.uicontroller.UIMediaController;
                }
                export class ExpandedControllerActivity implements com.google.android.gms.cast.framework.media.widget.ControlButtonsContainer {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity>;
                  public constructor();
                  public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
                  public getButtonImageViewAt(param0: number): globalAndroid.widget.ImageView;
                  public onWindowFocusChanged(param0: boolean): void;
                  public getStatusTextView(): globalAndroid.widget.TextView;
                  public onPause(): void;
                  public getButtonTypeAt(param0: number): number;
                  public onResume(): void;
                  public onCreate(param0: globalAndroid.os.Bundle): void;
                  /** @deprecated */
                  public getSeekBar(): globalAndroid.widget.SeekBar;
                  public getButtonSlotCount(): number;
                  public onDestroy(): void;
                  public getUIMediaController(): com.google.android.gms.cast.framework.media.uicontroller.UIMediaController;
                }
                export module ExpandedControllerActivity {
                  export class zza extends com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener {
                    public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity.zza>;
                    public onSendingRemoteMediaRequest(): void;
                    public onStatusUpdated(): void;
                    public onAdBreakStatusUpdated(): void;
                    public onMetadataUpdated(): void;
                    public onQueueStatusUpdated(): void;
                    public onPreloadStatusUpdated(): void;
                  }
                  export class zzb extends com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.CastSession> {
                    public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity.zzb>;
                    public onSessionResumeFailed(param0: any, param1: number): void;
                    public onSessionResuming(param0: any, param1: string): void;
                    public onSessionResumed(param0: any, param1: boolean): void;
                    public onSessionStartFailed(param0: any, param1: number): void;
                    public onSessionSuspended(param0: any, param1: number): void;
                    public onSessionStarted(param0: any, param1: string): void;
                    public onSessionEnding(param0: any): void;
                    public onSessionStarting(param0: any): void;
                    public onSessionEnded(param0: any, param1: number): void;
                  }
                }
                export class MiniControllerFragment implements com.google.android.gms.cast.framework.media.widget.ControlButtonsContainer {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.MiniControllerFragment>;
                  public constructor();
                  public onCreateView(
                    param0: globalAndroid.view.LayoutInflater,
                    param1: globalAndroid.view.ViewGroup,
                    param2: globalAndroid.os.Bundle,
                  ): globalAndroid.view.View;
                  public getButtonTypeAt(param0: number): number;
                  public getButtonSlotCount(): number;
                  public onInflate(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: globalAndroid.os.Bundle): void;
                  public getButtonImageViewAt(param0: number): globalAndroid.widget.ImageView;
                  public onDestroy(): void;
                  public getUIMediaController(): com.google.android.gms.cast.framework.media.uicontroller.UIMediaController;
                }
                export class zza {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zza>;
                  public run(): void;
                }
                export class zzb {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zzb>;
                }
                export class zzc extends com.google.android.gms.internal.cast.zzz {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zzc>;
                }
                export class zzd {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zzd>;
                  public run(): void;
                }
                export class zze {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zze>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
                export class zzf {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zzf>;
                  public run(): void;
                }
                export class zzg {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.widget.zzg>;
                }
              }
              export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.CastMediaOptions> {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zza>;
                public constructor();
              }
              export class zzaa extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaa>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzab extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzab>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzac extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzac>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzad extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzad>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzae extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzae>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzaf extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaf>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzag extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzag>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzah extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzah>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzai extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzai>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzaj extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaj>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzak extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzak>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzal extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzal>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzam extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzam>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzan extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzan>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzao extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzao>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzap extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzap>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzaq extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaq>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzar extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzar>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzas extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzas>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzat extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzat>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzau extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.common.api.Status> {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzau>;
                public onResult(param0: any): void;
              }
              export class zzav extends com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzav>;
                public getStatus(): com.google.android.gms.common.api.Status;
                public getCustomData(): org.json.JSONObject;
              }
              export class zzaw extends com.google.android.gms.internal.cast.zzdu {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaw>;
              }
              export class zzax extends com.google.android.gms.cast.framework.media.RemoteMediaClient.MediaChannelResult {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzax>;
                public getStatus(): com.google.android.gms.common.api.Status;
                public getCustomData(): org.json.JSONObject;
              }
              export class zzay {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzay>;
                public run(): void;
              }
              export class zzaz {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzaz>;
                public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
              }
              export class zzb {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzb>;
                /**
                 * Constructs a new instance of the com.google.android.gms.cast.framework.media.zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zzn(): number;
                  onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
                  zzay(): com.google.android.gms.dynamic.IObjectWrapper;
                  zza(
                    param0: com.google.android.gms.cast.MediaMetadata,
                    param1: com.google.android.gms.cast.framework.media.ImageHints,
                  ): com.google.android.gms.common.images.WebImage;
                });
                public constructor();
                public onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
              }
              export module zzb {
                export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.media.zzb {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzb.zza>;
                  public constructor(param0: string);
                  public constructor();
                  public onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
                  public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
                }
              }
              export class zzba {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzba>;
                public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
              }
              export class zzbb {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzbb>;
              }
              export class zzbc extends globalAndroid.widget.ArrayAdapter<com.google.android.gms.cast.MediaTrack>
                implements globalAndroid.view.View.OnClickListener {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzbc>;
                public constructor(param0: globalAndroid.content.Context, param1: java.util.List<com.google.android.gms.cast.MediaTrack>, param2: number);
                public onClick(param0: globalAndroid.view.View): void;
                public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
              }
              export class zzbd {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzbd>;
              }
              export class zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzc>;
                /**
                 * Constructs a new instance of the com.google.android.gms.cast.framework.media.zzc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zzn(): number;
                  zzay(): com.google.android.gms.dynamic.IObjectWrapper;
                  getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
                  getCompactViewActionIndices(): native.Array<number>;
                });
                public constructor();
                public getCompactViewActionIndices(): native.Array<number>;
                public getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
              }
              export module zzc {
                export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.media.zzc {
                  public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzc.zza>;
                  public constructor(param0: string);
                  public constructor();
                  public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
                  public getCompactViewActionIndices(): native.Array<number>;
                  public getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
                }
              }
              export class zzd extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.media.zzb {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzd>;
                public onPickImage(param0: com.google.android.gms.cast.MediaMetadata, param1: number): com.google.android.gms.common.images.WebImage;
              }
              export class zze extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.media.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zze>;
                public getCompactViewActionIndices(): native.Array<number>;
                public getNotificationActions(): java.util.List<com.google.android.gms.cast.framework.media.NotificationAction>;
              }
              export class zzf extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.ImageHints> {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzf>;
                public constructor();
              }
              export class zzg {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzg>;
              }
              export class zzh {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzh>;
                public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
              }
              export class zzi extends com.google.android.gms.internal.cast.zzz {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzi>;
              }
              export class zzj extends com.google.android.gms.cast.framework.AppVisibilityListener {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzj>;
                public onAppEnteredForeground(): void;
                public onAppEnteredBackground(): void;
              }
              export class zzk {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzk>;
                public run(): void;
              }
              export class zzl extends globalAndroid.util.LruCache<java.lang.Integer, com.google.android.gms.cast.MediaQueueItem> {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzl>;
              }
              export class zzm {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzm>;
              }
              export class zzn {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzn>;
              }
              export class zzo extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.NotificationAction> {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzo>;
                public constructor();
              }
              export class zzp {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzp>;
              }
              export class zzq extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.media.NotificationOptions> {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzq>;
                public constructor();
              }
              export class zzr extends com.google.android.gms.internal.cast.zzdp {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzr>;
                public onQueueStatusUpdated(): void;
                public onPreloadStatusUpdated(): void;
                public onAdBreakStatusUpdated(): void;
                public onStatusUpdated(): void;
                public onMetadataUpdated(): void;
              }
              export class zzs extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzs>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzt extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzt>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzu extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzu>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzv extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzv>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzw extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzw>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzx extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzx>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzy extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzy>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zzz extends com.google.android.gms.cast.framework.media.RemoteMediaClient.zzc {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.media.zzz>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
            }
            export class zza extends com.google.android.gms.cast.framework.zzf {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zza>;
              public constructor();
              public constructor(param0: string);
              public constructor(param0: com.google.android.gms.cast.framework.AppVisibilityListener);
              public onAppEnteredForeground(): void;
              public onAppEnteredBackground(): void;
            }
            export class zzaa {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzaa>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzn(): number;
                zzk(param0: string): com.google.android.gms.dynamic.IObjectWrapper;
                isSessionRecoverable(): boolean;
                getCategory(): string;
              });
              public constructor();
              public getCategory(): string;
              public isSessionRecoverable(): boolean;
            }
            export abstract class zzab extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzac {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzab>;
              public constructor();
              public onResuming(param0: globalAndroid.os.Bundle): void;
              public getSessionRemainingTimeMs(): number;
              public constructor(param0: string);
              public onStarting(param0: globalAndroid.os.Bundle): void;
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
              public end(param0: boolean): void;
              public resume(param0: globalAndroid.os.Bundle): void;
              public start(param0: globalAndroid.os.Bundle): void;
            }
            export class zzac {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzac>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzac interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzn(): number;
                zzac(): com.google.android.gms.dynamic.IObjectWrapper;
                onStarting(param0: globalAndroid.os.Bundle): void;
                start(param0: globalAndroid.os.Bundle): void;
                onResuming(param0: globalAndroid.os.Bundle): void;
                resume(param0: globalAndroid.os.Bundle): void;
                end(param0: boolean): void;
                getSessionRemainingTimeMs(): number;
              });
              public constructor();
              public onResuming(param0: globalAndroid.os.Bundle): void;
              public getSessionRemainingTimeMs(): number;
              public onStarting(param0: globalAndroid.os.Bundle): void;
              public end(param0: boolean): void;
              public resume(param0: globalAndroid.os.Bundle): void;
              public start(param0: globalAndroid.os.Bundle): void;
            }
            export class zzad {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzad>;
            }
            export class zzae<T> extends java.lang.Object /* com.google.android.gms.cast.framework.zzx*/ {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzae<any>>;
              public constructor();
              public constructor(param0: string);
              public constructor(param0: com.google.android.gms.cast.framework.SessionManagerListener<any>, param1: java.lang.Class<any>);
            }
            export class zzaf {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzaf>;
            }
            export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.framework.CastOptions> {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzb>;
              public constructor();
            }
            export class zzc {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzc>;
            }
            export class zzd {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzd>;
            }
            export class zze extends com.google.android.gms.cast.framework.zzn {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zze>;
              public constructor();
              public constructor(param0: com.google.android.gms.cast.framework.CastStateListener);
              public constructor(param0: string);
              public onCastStateChanged(param0: number): void;
            }
            export abstract class zzf extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzg {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzf>;
              public constructor();
              public constructor(param0: string);
              public onAppEnteredForeground(): void;
              public onAppEnteredBackground(): void;
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
            export class zzg {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzg>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzn(): number;
                zzo(): com.google.android.gms.dynamic.IObjectWrapper;
                onAppEnteredForeground(): void;
                onAppEnteredBackground(): void;
              });
              public constructor();
              public onAppEnteredForeground(): void;
              public onAppEnteredBackground(): void;
            }
            export abstract class zzh extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzi {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzh>;
              public constructor();
              public constructor(param0: string);
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
            export class zzi {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzi>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzn(): number;
                zza(param0: string, param1: string): void;
                zza(param0: string, param1: com.google.android.gms.cast.LaunchOptions): void;
                zzj(param0: string): void;
                zzh(param0: number): void;
              });
              public constructor();
            }
            export class zzj {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzj>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzw(): globalAndroid.os.Bundle;
                isAppVisible(): boolean;
                zza(param0: any /* com.google.android.gms.cast.framework.zzg*/): void;
                zzb(param0: any /* com.google.android.gms.cast.framework.zzg*/): void;
                zzx(): any /* com.google.android.gms.cast.framework.zzw*/;
                zzy(): any /* com.google.android.gms.cast.framework.zzq*/;
                zza(param0: string, param1: java.util.Map<any, any>): void;
                zzr(): boolean;
              });
              public constructor();
              public isAppVisible(): boolean;
            }
            export module zzj {
              export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzj {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.zzj.zza>;
                public isAppVisible(): boolean;
              }
            }
            export class zzk {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzk>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onConnected(param0: globalAndroid.os.Bundle): void;
                onConnectionSuspended(param0: number): void;
                onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
                zza(param0: com.google.android.gms.cast.ApplicationMetadata, param1: string, param2: string, param3: boolean): void;
                zzi(param0: number): void;
                zza(param0: boolean, param1: number): void;
              });
              public constructor();
              public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
              public onConnected(param0: globalAndroid.os.Bundle): void;
              public onConnectionSuspended(param0: number): void;
            }
            export module zzk {
              export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzk {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.zzk.zza>;
                public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
            }
            export class zzl extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzj {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzl>;
              public isAppVisible(): boolean;
            }
            export class zzm extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzk {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzm>;
              public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
              public onConnected(param0: globalAndroid.os.Bundle): void;
              public onConnectionSuspended(param0: number): void;
            }
            export abstract class zzn extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzo {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzn>;
              public constructor();
              public constructor(param0: string);
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
              public onCastStateChanged(param0: number): void;
            }
            export class zzo {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzo>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzn(): number;
                zzo(): com.google.android.gms.dynamic.IObjectWrapper;
                onCastStateChanged(param0: number): void;
              });
              public constructor();
              public onCastStateChanged(param0: number): void;
            }
            export class zzp extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzq {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzp>;
            }
            export class zzq {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzq>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzz(): com.google.android.gms.dynamic.IObjectWrapper });
              public constructor();
            }
            export class zzr {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzr>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onCreate(): void;
                onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
                onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
                onDestroy(): void;
              });
              public constructor();
              public onCreate(): void;
              public onDestroy(): void;
              public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
              public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
            }
            export module zzr {
              export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzr {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.zzr.zza>;
                public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
                public onCreate(): void;
                public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
                public onDestroy(): void;
              }
            }
            export class zzs {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzs>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzaa(): com.google.android.gms.dynamic.IObjectWrapper;
                getCategory(): string;
                getSessionId(): string;
                isConnected(): boolean;
                isConnecting(): boolean;
                isDisconnecting(): boolean;
                isDisconnected(): boolean;
                isResuming(): boolean;
                isSuspended(): boolean;
                notifySessionStarted(param0: string): void;
                notifyFailedToStartSession(param0: number): void;
                notifySessionEnded(param0: number): void;
                notifySessionResumed(param0: boolean): void;
                notifyFailedToResumeSession(param0: number): void;
                notifySessionSuspended(param0: number): void;
              });
              public constructor();
              public isResuming(): boolean;
              public notifySessionEnded(param0: number): void;
              public notifySessionStarted(param0: string): void;
              public isDisconnecting(): boolean;
              public isConnected(): boolean;
              public notifyFailedToResumeSession(param0: number): void;
              public isDisconnected(): boolean;
              public isConnecting(): boolean;
              public getCategory(): string;
              public isSuspended(): boolean;
              public getSessionId(): string;
              public notifySessionResumed(param0: boolean): void;
              public notifyFailedToStartSession(param0: number): void;
              public notifySessionSuspended(param0: number): void;
            }
            export module zzs {
              export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzs {
                public static class: java.lang.Class<com.google.android.gms.cast.framework.zzs.zza>;
                public isResuming(): boolean;
                public isSuspended(): boolean;
                public getSessionId(): string;
                public isDisconnecting(): boolean;
                public notifySessionResumed(param0: boolean): void;
                public notifySessionSuspended(param0: number): void;
                public notifySessionEnded(param0: number): void;
                public isConnected(): boolean;
                public getCategory(): string;
                public notifyFailedToResumeSession(param0: number): void;
                public isDisconnected(): boolean;
                public isConnecting(): boolean;
                public notifySessionStarted(param0: string): void;
                public notifyFailedToStartSession(param0: number): void;
              }
            }
            export class zzt extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzr {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzt>;
              public onCreate(): void;
              public onDestroy(): void;
              public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
              public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
            }
            export class zzu extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzs {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzu>;
              public isResuming(): boolean;
              public notifySessionEnded(param0: number): void;
              public notifySessionStarted(param0: string): void;
              public isDisconnecting(): boolean;
              public isConnected(): boolean;
              public notifyFailedToResumeSession(param0: number): void;
              public isDisconnected(): boolean;
              public isConnecting(): boolean;
              public getCategory(): string;
              public isSuspended(): boolean;
              public getSessionId(): string;
              public notifySessionResumed(param0: boolean): void;
              public notifyFailedToStartSession(param0: number): void;
              public notifySessionSuspended(param0: number): void;
            }
            export class zzv extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.cast.framework.zzw {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzv>;
              public getCastState(): number;
            }
            export class zzw {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzw>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzab(): com.google.android.gms.dynamic.IObjectWrapper;
                zza(param0: any /* com.google.android.gms.cast.framework.zzy*/): void;
                zzb(param0: any /* com.google.android.gms.cast.framework.zzy*/): void;
                zza(param0: any /* com.google.android.gms.cast.framework.zzo*/): void;
                zzb(param0: any /* com.google.android.gms.cast.framework.zzo*/): void;
                zza(param0: boolean, param1: boolean): void;
                zzz(): com.google.android.gms.dynamic.IObjectWrapper;
                getCastState(): number;
                zzc(param0: globalAndroid.os.Bundle): void;
              });
              public constructor();
              public getCastState(): number;
            }
            export abstract class zzx extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzy {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzx>;
              public constructor();
              public constructor(param0: string);
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
            export class zzy {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzy>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.framework.zzy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzn(): number;
                zzo(): com.google.android.gms.dynamic.IObjectWrapper;
                zza(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
                zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string): void;
                zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
                zzb(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
                zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
                zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string): void;
                zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: boolean): void;
                zzc(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
                zzd(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: number): void;
              });
              public constructor();
            }
            export abstract class zzz extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.cast.framework.zzaa {
              public static class: java.lang.Class<com.google.android.gms.cast.framework.zzz>;
              public constructor();
              public getCategory(): string;
              public constructor(param0: string);
              public isSessionRecoverable(): boolean;
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
          }
          export module games {
            export class GameManagerClient {
              public static class: java.lang.Class<com.google.android.gms.cast.games.GameManagerClient>;
              public static STATUS_INCORRECT_VERSION: number;
              public static STATUS_TOO_MANY_PLAYERS: number;
              public static PLAYER_STATE_UNKNOWN: number;
              public static PLAYER_STATE_DROPPED: number;
              public static PLAYER_STATE_QUIT: number;
              public static PLAYER_STATE_AVAILABLE: number;
              public static PLAYER_STATE_READY: number;
              public static PLAYER_STATE_IDLE: number;
              public static PLAYER_STATE_PLAYING: number;
              public static LOBBY_STATE_UNKNOWN: number;
              public static LOBBY_STATE_OPEN: number;
              public static LOBBY_STATE_CLOSED: number;
              public static GAMEPLAY_STATE_UNKNOWN: number;
              public static GAMEPLAY_STATE_LOADING: number;
              public static GAMEPLAY_STATE_RUNNING: number;
              public static GAMEPLAY_STATE_PAUSED: number;
              public static GAMEPLAY_STATE_SHOWING_INFO_SCREEN: number;
              public static getInstanceFor(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: string,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerInstanceResult>;
              public sendGameMessage(param0: string, param1: org.json.JSONObject): void;
              public sendPlayerPlayingRequest(
                param0: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
              public sendPlayerQuitRequest(
                param0: string,
                param1: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
              public dispose(): void;
              public sendGameMessage(param0: org.json.JSONObject): void;
              public getCurrentState(): com.google.android.gms.cast.games.GameManagerState;
              public isDisposed(): boolean;
              public getLastUsedPlayerId(): string;
              public sendPlayerPlayingRequest(
                param0: string,
                param1: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
              public sendPlayerQuitRequest(
                param0: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
              public sendPlayerIdleRequest(
                param0: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
              public sendPlayerAvailableRequest(
                param0: string,
                param1: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
              public sendGameRequest(
                param0: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
              public setSessionLabel(param0: string): void;
              public sendPlayerAvailableRequest(
                param0: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
              public sendPlayerReadyRequest(
                param0: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
              public sendPlayerIdleRequest(
                param0: string,
                param1: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
              public setListener(param0: com.google.android.gms.cast.games.GameManagerClient.Listener): void;
              public sendGameRequest(
                param0: string,
                param1: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
              public sendPlayerReadyRequest(
                param0: string,
                param1: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
            }
            export module GameManagerClient {
              export class GameManagerInstanceResult extends com.google.android.gms.common.api.Result {
                public static class: java.lang.Class<com.google.android.gms.cast.games.GameManagerClient.GameManagerInstanceResult>;
                /**
                 * Constructs a new instance of the com.google.android.gms.cast.games.GameManagerClient$GameManagerInstanceResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getGameManagerClient(): com.google.android.gms.cast.games.GameManagerClient;
                  getStatus(): com.google.android.gms.common.api.Status;
                });
                public constructor();
                public getGameManagerClient(): com.google.android.gms.cast.games.GameManagerClient;
                public getStatus(): com.google.android.gms.common.api.Status;
              }
              export class GameManagerResult extends com.google.android.gms.common.api.Result {
                public static class: java.lang.Class<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
                /**
                 * Constructs a new instance of the com.google.android.gms.cast.games.GameManagerClient$GameManagerResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getPlayerId(): string;
                  getRequestId(): number;
                  getExtraMessageData(): org.json.JSONObject;
                  getStatus(): com.google.android.gms.common.api.Status;
                });
                public constructor();
                public getPlayerId(): string;
                public getRequestId(): number;
                public getStatus(): com.google.android.gms.common.api.Status;
                public getExtraMessageData(): org.json.JSONObject;
              }
              export class Listener {
                public static class: java.lang.Class<com.google.android.gms.cast.games.GameManagerClient.Listener>;
                /**
                 * Constructs a new instance of the com.google.android.gms.cast.games.GameManagerClient$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  onStateChanged(param0: com.google.android.gms.cast.games.GameManagerState, param1: com.google.android.gms.cast.games.GameManagerState): void;
                  onGameMessageReceived(param0: string, param1: org.json.JSONObject): void;
                });
                public constructor();
                public onGameMessageReceived(param0: string, param1: org.json.JSONObject): void;
                public onStateChanged(
                  param0: com.google.android.gms.cast.games.GameManagerState,
                  param1: com.google.android.gms.cast.games.GameManagerState,
                ): void;
              }
            }
            export class GameManagerState {
              public static class: java.lang.Class<com.google.android.gms.cast.games.GameManagerState>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.games.GameManagerState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getLobbyState(): number;
                getGameplayState(): number;
                getGameData(): org.json.JSONObject;
                getGameStatusText(): string;
                getApplicationName(): string;
                getMaxPlayers(): number;
                getPlayersInState(param0: number): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
                getPlayer(param0: string): com.google.android.gms.cast.games.PlayerInfo;
                getPlayers(): java.util.Collection<com.google.android.gms.cast.games.PlayerInfo>;
                getControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
                getConnectedPlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
                getConnectedControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
                hasLobbyStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
                hasGameplayStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
                hasGameDataChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
                hasGameStatusTextChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
                hasPlayerChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
                hasPlayerStateChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
                hasPlayerDataChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
                getListOfChangedPlayers(param0: com.google.android.gms.cast.games.GameManagerState): java.util.Collection<string>;
              });
              public constructor();
              public hasGameplayStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
              public getPlayer(param0: string): com.google.android.gms.cast.games.PlayerInfo;
              public getControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
              public hasGameDataChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
              public getGameplayState(): number;
              public getPlayers(): java.util.Collection<com.google.android.gms.cast.games.PlayerInfo>;
              public hasPlayerDataChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
              public getPlayersInState(param0: number): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
              public getGameData(): org.json.JSONObject;
              public getListOfChangedPlayers(param0: com.google.android.gms.cast.games.GameManagerState): java.util.Collection<string>;
              public getGameStatusText(): string;
              public getApplicationName(): string;
              public getConnectedControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
              public getLobbyState(): number;
              public getMaxPlayers(): number;
              public hasGameStatusTextChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
              public hasPlayerChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
              public getConnectedPlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
              public hasPlayerStateChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
              public hasLobbyStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
            }
            export class PlayerInfo {
              public static class: java.lang.Class<com.google.android.gms.cast.games.PlayerInfo>;
              /**
               * Constructs a new instance of the com.google.android.gms.cast.games.PlayerInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getPlayerState(): number;
                getPlayerData(): org.json.JSONObject;
                getPlayerId(): string;
                isConnected(): boolean;
                isControllable(): boolean;
              });
              public constructor();
              public getPlayerState(): number;
              public getPlayerData(): org.json.JSONObject;
              public isConnected(): boolean;
              public isControllable(): boolean;
              public getPlayerId(): string;
            }
          }
          export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakClipInfo> {
            public static class: java.lang.Class<com.google.android.gms.cast.zza>;
            public constructor();
          }
          export class zzaa extends com.google.android.gms.tasks.OnCompleteListener<java.lang.Void> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzaa>;
            public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
            public onComplete(param0: com.google.android.gms.tasks.Task<java.lang.Void>): void;
          }
          export class zzab extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzac>*/ {
            public static class: java.lang.Class<com.google.android.gms.cast.zzab>;
            public constructor();
          }
          export class zzac extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.zzac>;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzac>*/;
            public constructor();
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public constructor(param0: number, param1: number, param2: number);
          }
          export class zzad extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzae>*/ {
            public static class: java.lang.Class<com.google.android.gms.cast.zzad>;
            public constructor();
          }
          export class zzae extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.zzae>;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzae>*/;
            public constructor(param0: any /* com.google.android.gms.cast.zzac*/, param1: any /* com.google.android.gms.cast.zzac*/);
            public constructor();
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
          }
          export class zzaf {
            public static class: java.lang.Class<com.google.android.gms.cast.zzaf>;
          }
          export class zzag extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzah>*/ {
            public static class: java.lang.Class<com.google.android.gms.cast.zzag>;
            public constructor();
          }
          export class zzah extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.zzah>;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzah>*/;
            public constructor();
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toString(): string;
          }
          export class zzai extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.LaunchOptions> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzai>;
            public constructor();
          }
          export class zzaj extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaInfo> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzaj>;
            public constructor();
          }
          export class zzak {
            public static class: java.lang.Class<com.google.android.gms.cast.zzak>;
          }
          export class zzal {
            public static class: java.lang.Class<com.google.android.gms.cast.zzal>;
          }
          export class zzam extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaMetadata> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzam>;
            public constructor();
          }
          export class zzan {
            public static class: java.lang.Class<com.google.android.gms.cast.zzan>;
          }
          export class zzao {
            public static class: java.lang.Class<com.google.android.gms.cast.zzao>;
          }
          export class zzap {
            public static class: java.lang.Class<com.google.android.gms.cast.zzap>;
          }
          export class zzaq extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaQueueItem> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzaq>;
            public constructor();
          }
          export class zzar {
            public static class: java.lang.Class<com.google.android.gms.cast.zzar>;
          }
          export class zzas extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaStatus> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzas>;
            public constructor();
          }
          export class zzat extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.MediaTrack> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzat>;
            public constructor();
          }
          export class zzau extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzau>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzav extends com.google.android.gms.internal.cast.zzdp {
            public static class: java.lang.Class<com.google.android.gms.cast.zzav>;
            public onAdBreakStatusUpdated(): void;
            public onQueueStatusUpdated(): void;
            public onPreloadStatusUpdated(): void;
            public onMetadataUpdated(): void;
            public onStatusUpdated(): void;
          }
          export class zzaw extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzaw>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzax extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzax>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzay extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzay>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzaz extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzaz>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakInfo> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzb>;
            public constructor();
          }
          export class zzba extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzba>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbb extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbb>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbc extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbc>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbd extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbd>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbe extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbe>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbf extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbf>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbg extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbg>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbh extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbh>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbi extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbi>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbj extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbj>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbk extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbk>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbl extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbl>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbm extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbm>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbn extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbn>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbo extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbo>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbp extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbp>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbq extends com.google.android.gms.cast.RemoteMediaPlayer.zzb {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbq>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzbr extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.common.api.Status> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbr>;
            public onResult(param0: any): void;
          }
          export class zzbs extends com.google.android.gms.cast.RemoteMediaPlayer.MediaChannelResult {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbs>;
            public getCustomData(): org.json.JSONObject;
            public getStatus(): com.google.android.gms.common.api.Status;
          }
          export class zzbt extends com.google.android.gms.internal.cast.zzdu {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbt>;
          }
          export class zzbu extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzbv>*/ {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbu>;
            public constructor();
          }
          export class zzbv extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbv>;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.zzbv>*/;
            public toJson(): org.json.JSONObject;
            public constructor();
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public constructor(param0: string, param1: number, param2: number, param3: string);
          }
          export class zzbw extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.TextTrackStyle> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbw>;
            public constructor();
          }
          export class zzbx extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.VastAdsRequest> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzbx>;
            public constructor();
          }
          export class zzby extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.VideoInfo> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzby>;
            public constructor();
          }
          export class zzc extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.AdBreakStatus> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzc>;
            public constructor();
          }
          export class zzd extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.ApplicationMetadata> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzd>;
            public constructor();
          }
          export class zze extends com.google.android.gms.common.api.Api.AbstractClientBuilder<
            com.google.android.gms.internal.cast.zzct,
            com.google.android.gms.cast.Cast.CastOptions
          > {
            public static class: java.lang.Class<com.google.android.gms.cast.zze>;
          }
          export class zzf extends com.google.android.gms.internal.cast.zzdg {
            public static class: java.lang.Class<com.google.android.gms.cast.zzf>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzg extends com.google.android.gms.cast.Cast.zza {
            public static class: java.lang.Class<com.google.android.gms.cast.zzg>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzh extends com.google.android.gms.cast.Cast.zza {
            public static class: java.lang.Class<com.google.android.gms.cast.zzh>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzi extends com.google.android.gms.internal.cast.zzdg {
            public static class: java.lang.Class<com.google.android.gms.cast.zzi>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzj extends com.google.android.gms.cast.Cast.zza {
            public static class: java.lang.Class<com.google.android.gms.cast.zzj>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzk extends com.google.android.gms.internal.cast.zzdg {
            public static class: java.lang.Class<com.google.android.gms.cast.zzk>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzl extends com.google.android.gms.internal.cast.zzdg {
            public static class: java.lang.Class<com.google.android.gms.cast.zzl>;
            public setResult(param0: any): void;
            public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
          }
          export class zzm extends com.google.android.gms.cast.Cast.ApplicationConnectionResult {
            public static class: java.lang.Class<com.google.android.gms.cast.zzm>;
            public getWasLaunched(): boolean;
            public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
            public getSessionId(): string;
            public getStatus(): com.google.android.gms.common.api.Status;
            public getApplicationStatus(): string;
          }
          export class zzn extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.cast.CastDevice> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzn>;
            public constructor();
          }
          export class zzo extends com.google.android.gms.common.api.Api.AbstractClientBuilder<
            com.google.android.gms.internal.cast.zzeh,
            com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplayOptions
          > {
            public static class: java.lang.Class<com.google.android.gms.cast.zzo>;
          }
          export class zzp extends com.google.android.gms.common.api.Api.AbstractClientBuilder<
            com.google.android.gms.internal.cast.zzei,
            com.google.android.gms.common.api.Api.ApiOptions.NoOptions
          > {
            public static class: java.lang.Class<com.google.android.gms.cast.zzp>;
          }
          export class zzq extends com.google.android.gms.cast.CastRemoteDisplayClient.zza {
            public static class: java.lang.Class<com.google.android.gms.cast.zzq>;
            public onDisconnected(): void;
            public onError(param0: number): void;
          }
          export class zzr extends com.google.android.gms.common.api.internal.TaskApiCall<
            com.google.android.gms.internal.cast.zzei,
            globalAndroid.view.Display
          > {
            public static class: java.lang.Class<com.google.android.gms.cast.zzr>;
          }
          export class zzs extends com.google.android.gms.cast.CastRemoteDisplayClient.zza {
            public static class: java.lang.Class<com.google.android.gms.cast.zzs>;
            public onDisconnected(): void;
            public onError(param0: number): void;
          }
          export class zzt extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.internal.cast.zzei, java.lang.Void> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzt>;
          }
          export class zzu {
            public static class: java.lang.Class<com.google.android.gms.cast.zzu>;
            public run(): void;
          }
          export class zzv {
            public static class: java.lang.Class<com.google.android.gms.cast.zzv>;
            public onRouteUnselected(param0: any /* androidx.mediarouter.media.MediaRouter */, param1: any /* androidx.mediarouter.media.MediaRouter.RouteInfo */): void;
          }
          export class zzw {
            public static class: java.lang.Class<com.google.android.gms.cast.zzw>;
            public run(): void;
          }
          export class zzx {
            public static class: java.lang.Class<com.google.android.gms.cast.zzx>;
            public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
            public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
          }
          export class zzy extends com.google.android.gms.tasks.OnCompleteListener<globalAndroid.view.Display> {
            public static class: java.lang.Class<com.google.android.gms.cast.zzy>;
            public onComplete(param0: com.google.android.gms.tasks.Task<globalAndroid.view.Display>): void;
            public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
          }
          export class zzz {
            public static class: java.lang.Class<com.google.android.gms.cast.zzz>;
            public run(): void;
          }
        }
        export module common {
          export class AccountPicker {
            public static class: java.lang.Class<com.google.android.gms.common.AccountPicker>;
            public static newChooseAccountIntent(
              param0: globalAndroid.accounts.Account,
              param1: java.util.ArrayList<globalAndroid.accounts.Account>,
              param2: native.Array<string>,
              param3: boolean,
              param4: string,
              param5: string,
              param6: native.Array<string>,
              param7: globalAndroid.os.Bundle,
            ): globalAndroid.content.Intent;
          }
          export class BlockingServiceConnection {
            public static class: java.lang.Class<com.google.android.gms.common.BlockingServiceConnection>;
            public constructor();
            public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
            public getService(): globalAndroid.os.IBinder;
            public getServiceWithTimeout(param0: number, param1: java.util.concurrent.TimeUnit): globalAndroid.os.IBinder;
            public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
          }
          export class ConnectionResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.common.ConnectionResult>;
            public static UNKNOWN: number;
            public static SUCCESS: number;
            public static SERVICE_MISSING: number;
            public static SERVICE_VERSION_UPDATE_REQUIRED: number;
            public static SERVICE_DISABLED: number;
            public static SIGN_IN_REQUIRED: number;
            public static INVALID_ACCOUNT: number;
            public static RESOLUTION_REQUIRED: number;
            public static NETWORK_ERROR: number;
            public static INTERNAL_ERROR: number;
            public static SERVICE_INVALID: number;
            public static DEVELOPER_ERROR: number;
            public static LICENSE_CHECK_FAILED: number;
            public static CANCELED: number;
            public static TIMEOUT: number;
            public static INTERRUPTED: number;
            public static API_UNAVAILABLE: number;
            public static SIGN_IN_FAILED: number;
            public static SERVICE_UPDATING: number;
            public static SERVICE_MISSING_PERMISSION: number;
            public static RESTRICTED_PROFILE: number;
            public static DRIVE_EXTERNAL_STORAGE_REQUIRED: number;
            public static RESULT_SUCCESS: com.google.android.gms.common.ConnectionResult;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.ConnectionResult>;
            public hasResolution(): boolean;
            public getErrorMessage(): string;
            public constructor();
            public getErrorCode(): number;
            public getResolution(): globalAndroid.app.PendingIntent;
            public isSuccess(): boolean;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toString(): string;
            public constructor(param0: number, param1: globalAndroid.app.PendingIntent);
            public constructor(param0: number);
            public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
            public constructor(param0: number, param1: globalAndroid.app.PendingIntent, param2: string);
          }
          export class ErrorDialogFragment {
            public static class: java.lang.Class<com.google.android.gms.common.ErrorDialogFragment>;
            public show(param0: globalAndroid.app.FragmentManager, param1: string): void;
            public constructor();
            public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.ErrorDialogFragment;
            public onCancel(param0: globalAndroid.content.DialogInterface): void;
            public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
            public static newInstance(
              param0: globalAndroid.app.Dialog,
              param1: globalAndroid.content.DialogInterface.OnCancelListener,
            ): com.google.android.gms.common.ErrorDialogFragment;
          }
          export class Feature extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.common.Feature>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.Feature>;
            public constructor();
            public constructor(param0: string, param1: number);
            public constructor(param0: string, param1: number, param2: number);
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getVersion(): number;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public getName(): string;
            public toString(): string;
          }
          export class FirstPartyScopes {
            public static class: java.lang.Class<com.google.android.gms.common.FirstPartyScopes>;
            public static GAMES_1P: string;
          }
          export class GoogleApiAvailability extends com.google.android.gms.common.GoogleApiAvailabilityLight {
            public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailability>;
            public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
            public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
            public static getInstance(): com.google.android.gms.common.GoogleApiAvailabilityLight;
            public getErrorDialog(
              param0: globalAndroid.app.Activity,
              param1: number,
              param2: number,
              param3: globalAndroid.content.DialogInterface.OnCancelListener,
            ): globalAndroid.app.Dialog;
            public zaa(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.api.internal.zabr,
            ): com.google.android.gms.common.api.internal.zabq;
            public showErrorDialogFragment(param0: globalAndroid.app.Activity, param1: number, param2: number): boolean;
            public zaa(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult, param2: number): boolean;
            public showErrorNotification(param0: globalAndroid.content.Context, param1: number): void;
            public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.app.PendingIntent;
            public getErrorResolutionPendingIntent(
              param0: globalAndroid.content.Context,
              param1: number,
              param2: number,
              param3: string,
            ): globalAndroid.app.PendingIntent;
            public zaa(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.common.api.internal.LifecycleFragment,
              param2: number,
              param3: number,
              param4: globalAndroid.content.DialogInterface.OnCancelListener,
            ): boolean;
            public setDefaultNotificationChannelId(param0: globalAndroid.content.Context, param1: string): void;
            /** @deprecated */
            public getErrorResolutionIntent(param0: number): globalAndroid.content.Intent;
            public getErrorDialog(param0: globalAndroid.app.Activity, param1: number, param2: number): globalAndroid.app.Dialog;
            public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
            public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
            public makeGooglePlayServicesAvailable(param0: globalAndroid.app.Activity): com.google.android.gms.tasks.Task<java.lang.Void>;
            public showErrorNotification(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.ConnectionResult): void;
            public getErrorResolutionPendingIntent(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.common.ConnectionResult,
            ): globalAndroid.app.PendingIntent;
            public getClientVersion(param0: globalAndroid.content.Context): number;
            public static getInstance(): com.google.android.gms.common.GoogleApiAvailability;
            public checkApiAvailability(
              param0: com.google.android.gms.common.api.GoogleApi<any>,
              param1: native.Array<com.google.android.gms.common.api.GoogleApi<any>>,
            ): com.google.android.gms.tasks.Task<java.lang.Void>;
            public getErrorResolutionIntent(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.content.Intent;
            public showErrorDialogFragment(
              param0: globalAndroid.app.Activity,
              param1: number,
              param2: number,
              param3: globalAndroid.content.DialogInterface.OnCancelListener,
            ): boolean;
            public getErrorString(param0: number): string;
            public isUserResolvableError(param0: number): boolean;
          }
          export module GoogleApiAvailability {
            export class zaa extends com.google.android.gms.internal.base.zal {
              public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailability.zaa>;
              public constructor();
              public constructor(param0: globalAndroid.os.Looper);
              public constructor(param0: com.google.android.gms.common.GoogleApiAvailability, param1: globalAndroid.content.Context);
              public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
              public handleMessage(param0: globalAndroid.os.Message): void;
            }
          }
          export class GoogleApiAvailabilityLight {
            public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailabilityLight>;
            public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
            public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
            public static GOOGLE_PLAY_STORE_PACKAGE: string;
            public static getInstance(): com.google.android.gms.common.GoogleApiAvailabilityLight;
            public getClientVersion(param0: globalAndroid.content.Context): number;
            public isPlayStorePossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
            public getErrorResolutionPendingIntent(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.app.PendingIntent;
            public isUninstalledAppPossiblyUpdating(param0: globalAndroid.content.Context, param1: string): boolean;
            public getErrorResolutionIntent(param0: globalAndroid.content.Context, param1: number, param2: string): globalAndroid.content.Intent;
            public getErrorResolutionPendingIntent(
              param0: globalAndroid.content.Context,
              param1: number,
              param2: number,
              param3: string,
            ): globalAndroid.app.PendingIntent;
            /** @deprecated */
            public getErrorResolutionIntent(param0: number): globalAndroid.content.Intent;
            public getApkVersion(param0: globalAndroid.content.Context): number;
            public cancelAvailabilityErrorNotifications(param0: globalAndroid.content.Context): void;
            public getErrorString(param0: number): string;
            public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
            public verifyGooglePlayServicesIsAvailable(param0: globalAndroid.content.Context, param1: number): void;
            public isPlayServicesPossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
            public isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
            public isUserResolvableError(param0: number): boolean;
          }
          export class GooglePlayServicesNotAvailableException {
            public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesNotAvailableException>;
            public errorCode: number;
            public constructor(param0: number);
          }
          export class GooglePlayServicesRepairableException extends com.google.android.gms.common.UserRecoverableException {
            public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesRepairableException>;
            public getConnectionStatusCode(): number;
            public constructor(param0: number, param1: string, param2: globalAndroid.content.Intent);
            public constructor(param0: string, param1: globalAndroid.content.Intent);
          }
          export class GooglePlayServicesUtil extends com.google.android.gms.common.GooglePlayServicesUtilLight {
            public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesUtil>;
            public static GMS_ERROR_DIALOG: string;
            public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
            public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
            public static GOOGLE_PLAY_STORE_PACKAGE: string;
            /** @deprecated */
            public static showErrorNotification(param0: number, param1: globalAndroid.content.Context): void;
            /** @deprecated */
            public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
            public static showErrorDialogFragment(
              param0: number,
              param1: globalAndroid.app.Activity,
              param2: androidx.fragment.app.Fragment,
              param3: number,
              param4: globalAndroid.content.DialogInterface.OnCancelListener,
            ): boolean;
            public static getRemoteContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
            /** @deprecated */
            public static getErrorString(param0: number): string;
            public static getRemoteResource(param0: globalAndroid.content.Context): globalAndroid.content.res.Resources;
            /** @deprecated */
            public static showErrorDialogFragment(
              param0: number,
              param1: globalAndroid.app.Activity,
              param2: number,
              param3: globalAndroid.content.DialogInterface.OnCancelListener,
            ): boolean;
            /** @deprecated */
            public static getErrorPendingIntent(param0: number, param1: globalAndroid.content.Context, param2: number): globalAndroid.app.PendingIntent;
            /** @deprecated */
            public static isUserRecoverableError(param0: number): boolean;
            /** @deprecated */
            public static getErrorDialog(
              param0: number,
              param1: globalAndroid.app.Activity,
              param2: number,
              param3: globalAndroid.content.DialogInterface.OnCancelListener,
            ): globalAndroid.app.Dialog;
            /** @deprecated */
            public static showErrorDialogFragment(param0: number, param1: globalAndroid.app.Activity, param2: number): boolean;
            /** @deprecated */
            public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
            /** @deprecated */
            public static getErrorDialog(param0: number, param1: globalAndroid.app.Activity, param2: number): globalAndroid.app.Dialog;
          }
          export class GooglePlayServicesUtilLight {
            public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesUtilLight>;
            public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
            public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
            public static GOOGLE_PLAY_GAMES_PACKAGE: string;
            public static GOOGLE_PLAY_STORE_PACKAGE: string;
            /** @deprecated */
            public static ensurePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): void;
            /** @deprecated */
            public static uidHasPackageName(param0: globalAndroid.content.Context, param1: number, param2: string): boolean;
            /** @deprecated */
            public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context, param1: number): number;
            /** @deprecated */
            public static cancelAvailabilityErrorNotifications(param0: globalAndroid.content.Context): void;
            public static enableUsingApkIndependentContext(): void;
            /** @deprecated */
            public static isPlayStorePossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
            public static getRemoteContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
            /** @deprecated */
            public static getErrorString(param0: number): string;
            /** @deprecated */
            public static getGooglePlayServicesAvailabilityRecoveryIntent(param0: number): globalAndroid.content.Intent;
            public static isRestrictedUserProfile(param0: globalAndroid.content.Context): boolean;
            public static honorsDebugCertificates(param0: globalAndroid.content.Context): boolean;
            /** @deprecated */
            public static isSidewinderDevice(param0: globalAndroid.content.Context): boolean;
            public static getRemoteResource(param0: globalAndroid.content.Context): globalAndroid.content.res.Resources;
            /** @deprecated */
            public static isGooglePlayServicesUid(param0: globalAndroid.content.Context, param1: number): boolean;
            /** @deprecated */
            public static getErrorPendingIntent(param0: number, param1: globalAndroid.content.Context, param2: number): globalAndroid.app.PendingIntent;
            /** @deprecated */
            public static isUserRecoverableError(param0: number): boolean;
            /** @deprecated */
            public static isPlayServicesPossiblyUpdating(param0: globalAndroid.content.Context, param1: number): boolean;
            /** @deprecated */
            public static getClientVersion(param0: globalAndroid.content.Context): number;
            /** @deprecated */
            public static getApkVersion(param0: globalAndroid.content.Context): number;
            /** @deprecated */
            public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
          }
          export class GoogleSignatureVerifier {
            public static class: java.lang.Class<com.google.android.gms.common.GoogleSignatureVerifier>;
            public isGooglePublicSignedPackage(param0: globalAndroid.content.pm.PackageInfo): boolean;
            public isPackageGoogleSigned(param0: string): boolean;
            public isUidGoogleSigned(param0: number): boolean;
            public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.common.GoogleSignatureVerifier;
          }
          export class ProGuardCanary {
            public static class: java.lang.Class<com.google.android.gms.common.ProGuardCanary>;
          }
          export class Scopes {
            public static class: java.lang.Class<com.google.android.gms.common.Scopes>;
            public static PROFILE: string;
            public static EMAIL: string;
            public static OPEN_ID: string;
            public static PLUS_LOGIN: string;
            public static PLUS_ME: string;
            public static GAMES: string;
            public static GAMES_LITE: string;
            public static CLOUD_SAVE: string;
            public static APP_STATE: string;
            public static DRIVE_FILE: string;
            public static DRIVE_APPFOLDER: string;
            public static DRIVE_FULL: string;
            public static DRIVE_APPS: string;
            public static FITNESS_ACTIVITY_READ: string;
            public static FITNESS_ACTIVITY_READ_WRITE: string;
            public static FITNESS_LOCATION_READ: string;
            public static FITNESS_LOCATION_READ_WRITE: string;
            public static FITNESS_BODY_READ: string;
            public static FITNESS_BODY_READ_WRITE: string;
            public static FITNESS_NUTRITION_READ: string;
            public static FITNESS_NUTRITION_READ_WRITE: string;
            public static FITNESS_BLOOD_PRESSURE_READ: string;
            public static FITNESS_BLOOD_PRESSURE_READ_WRITE: string;
            public static FITNESS_BLOOD_GLUCOSE_READ: string;
            public static FITNESS_BLOOD_GLUCOSE_READ_WRITE: string;
            public static FITNESS_OXYGEN_SATURATION_READ: string;
            public static FITNESS_OXYGEN_SATURATION_READ_WRITE: string;
            public static FITNESS_BODY_TEMPERATURE_READ: string;
            public static FITNESS_BODY_TEMPERATURE_READ_WRITE: string;
            public static FITNESS_REPRODUCTIVE_HEALTH_READ: string;
            public static FITNESS_REPRODUCTIVE_HEALTH_READ_WRITE: string;
          }
          export class SignInButton {
            public static class: java.lang.Class<com.google.android.gms.common.SignInButton>;
            public static SIZE_STANDARD: number;
            public static SIZE_WIDE: number;
            public static SIZE_ICON_ONLY: number;
            public static COLOR_DARK: number;
            public static COLOR_LIGHT: number;
            public static COLOR_AUTO: number;
            public setSize(param0: number): void;
            /** @deprecated */
            public setScopes(param0: native.Array<com.google.android.gms.common.api.Scope>): void;
            /** @deprecated */
            public setStyle(param0: number, param1: number, param2: native.Array<com.google.android.gms.common.api.Scope>): void;
            public constructor(param0: globalAndroid.content.Context);
            public setColorScheme(param0: number): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
            public setStyle(param0: number, param1: number): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public setEnabled(param0: boolean): void;
            public onClick(param0: globalAndroid.view.View): void;
          }
          export module SignInButton {
            export class ButtonSize {
              public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ButtonSize>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.SignInButton$ButtonSize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class ColorScheme {
              public static class: java.lang.Class<com.google.android.gms.common.SignInButton.ColorScheme>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.SignInButton$ColorScheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
          export class SupportErrorDialogFragment {
            public static class: java.lang.Class<com.google.android.gms.common.SupportErrorDialogFragment>;
            public constructor();
            public onCancel(param0: globalAndroid.content.DialogInterface): void;
            public show(param0: androidx.fragment.app.FragmentManager, param1: string): void;
            public static newInstance(
              param0: globalAndroid.app.Dialog,
              param1: globalAndroid.content.DialogInterface.OnCancelListener,
            ): com.google.android.gms.common.SupportErrorDialogFragment;
            public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
            public static newInstance(param0: globalAndroid.app.Dialog): com.google.android.gms.common.SupportErrorDialogFragment;
          }
          export class UserRecoverableException {
            public static class: java.lang.Class<com.google.android.gms.common.UserRecoverableException>;
            public getIntent(): globalAndroid.content.Intent;
            public constructor(param0: string, param1: globalAndroid.content.Intent);
          }
          export module annotation {
            export class KeepForSdk {
              public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdk>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
          export module annotation {
            export class KeepForSdkWithFieldsAndMethods {
              public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class KeepForSdkWithMembers {
              public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithMembers>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithMembers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class KeepName {
              public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepName>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.annotation.KeepName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
          export module api {
            export class Api<O> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.api.Api<any>>;
              public constructor(
                param0: string,
                param1: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any>,
                param2: com.google.android.gms.common.api.Api.ClientKey<any>,
              );
              public zah(): com.google.android.gms.common.api.Api.BaseClientBuilder<any, O>;
              public getClientKey(): com.google.android.gms.common.api.Api.AnyClientKey<any>;
              public zai(): com.google.android.gms.common.api.Api.AbstractClientBuilder<any, O>;
              public getName(): string;
            }
            export module Api {
              export abstract class AbstractClientBuilder<T, O> extends com.google.android.gms.common.api.Api.BaseClientBuilder<any, any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.Api.AbstractClientBuilder<any, any>>;
                public buildClient(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: com.google.android.gms.common.internal.ClientSettings,
                  param3: any,
                  param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                ): any;
                public constructor();
              }
              export class AnyClient {
                public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClient>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.Api$AnyClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export class AnyClientKey<C> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.api.Api.AnyClientKey<any>>;
                public constructor();
              }
              export class ApiOptions {
                public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
              export module ApiOptions {
                export class HasAccountOptions
                  implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
                  public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasAccountOptions>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { getAccount(): globalAndroid.accounts.Account });
                  public constructor();
                  public getAccount(): globalAndroid.accounts.Account;
                }
                export class HasGoogleSignInAccountOptions extends com.google.android.gms.common.api.Api.ApiOptions.HasOptions {
                  public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasGoogleSignInAccountOptions>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasGoogleSignInAccountOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount });
                  public constructor();
                  public getGoogleSignInAccount(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
                }
                export class HasOptions extends com.google.android.gms.common.api.Api.ApiOptions {
                  public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.HasOptions>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$HasOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {});
                  public constructor();
                }
                export class NoOptions extends com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
                  public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
                }
                export class NotRequiredOptions extends com.google.android.gms.common.api.Api.ApiOptions {
                  public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$NotRequiredOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {});
                  public constructor();
                }
                export class Optional
                  implements com.google.android.gms.common.api.Api.ApiOptions.HasOptions, com.google.android.gms.common.api.Api.ApiOptions.NotRequiredOptions {
                  public static class: java.lang.Class<com.google.android.gms.common.api.Api.ApiOptions.Optional>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.Api$ApiOptions$Optional interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {});
                  public constructor();
                }
              }
              export class BaseClientBuilder<T, O> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.api.Api.BaseClientBuilder<any, any>>;
                public static API_PRIORITY_GAMES: number;
                public static API_PRIORITY_PLUS: number;
                public static API_PRIORITY_OTHER: number;
                public getImpliedScopes(param0: O): java.util.List<com.google.android.gms.common.api.Scope>;
                public getPriority(): number;
                public constructor();
              }
              export class Client extends com.google.android.gms.common.api.Api.AnyClient {
                public static class: java.lang.Class<com.google.android.gms.common.api.Api.Client>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.Api$Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
                  disconnect(): void;
                  isConnected(): boolean;
                  isConnecting(): boolean;
                  getRemoteService(
                    param0: com.google.android.gms.common.internal.IAccountAccessor,
                    param1: java.util.Set<com.google.android.gms.common.api.Scope>,
                  ): void;
                  requiresSignIn(): boolean;
                  onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
                  requiresAccount(): boolean;
                  requiresGooglePlayServices(): boolean;
                  providesSignIn(): boolean;
                  getSignInIntent(): globalAndroid.content.Intent;
                  dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                  getServiceBrokerBinder(): globalAndroid.os.IBinder;
                  getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
                  getEndpointPackageName(): string;
                  getMinApkVersion(): number;
                  getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
                });
                public constructor();
                public getRemoteService(
                  param0: com.google.android.gms.common.internal.IAccountAccessor,
                  param1: java.util.Set<com.google.android.gms.common.api.Scope>,
                ): void;
                public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
                public requiresSignIn(): boolean;
                public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
                public getSignInIntent(): globalAndroid.content.Intent;
                public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
                public getServiceBrokerBinder(): globalAndroid.os.IBinder;
                public getEndpointPackageName(): string;
                public requiresGooglePlayServices(): boolean;
                public isConnected(): boolean;
                public requiresAccount(): boolean;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public getMinApkVersion(): number;
                public disconnect(): void;
                public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
                public isConnecting(): boolean;
                public providesSignIn(): boolean;
              }
              export class ClientKey<C> extends com.google.android.gms.common.api.Api.AnyClientKey<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.Api.ClientKey<any>>;
                public constructor();
              }
              export class SimpleClient<T> extends com.google.android.gms.common.api.Api.AnyClient {
                public static class: java.lang.Class<com.google.android.gms.common.api.Api.SimpleClient<any>>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.Api$SimpleClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getStartServiceAction(): string;
                  getServiceDescriptor(): string;
                  createServiceInterface(param0: globalAndroid.os.IBinder): any;
                  getContext(): globalAndroid.content.Context;
                  setState(param0: number, param1: any): void;
                });
                public constructor();
                public getStartServiceAction(): string;
                public createServiceInterface(param0: globalAndroid.os.IBinder): any;
                public getContext(): globalAndroid.content.Context;
                public getServiceDescriptor(): string;
                public setState(param0: number, param1: any): void;
              }
              export class zaa<T, O> extends com.google.android.gms.common.api.Api.BaseClientBuilder<any, any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.Api.zaa<any, any>>;
              }
              export class zab<C> extends com.google.android.gms.common.api.Api.AnyClientKey<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.Api.zab<any>>;
              }
            }
            export class ApiException {
              public static class: java.lang.Class<com.google.android.gms.common.api.ApiException>;
              public mStatus: com.google.android.gms.common.api.Status;
              public getStatusCode(): number;
              public constructor(param0: com.google.android.gms.common.api.Status);
              /** @deprecated */
              public getStatusMessage(): string;
            }
            export class AvailabilityException {
              public static class: java.lang.Class<com.google.android.gms.common.api.AvailabilityException>;
              public zaj(): androidx.collection.ArrayMap<
                com.google.android.gms.common.api.internal.zai<any>,
                com.google.android.gms.common.ConnectionResult
              >;
              public constructor(
                param0: androidx.collection.ArrayMap<
                  com.google.android.gms.common.api.internal.zai<any>,
                  com.google.android.gms.common.ConnectionResult
                >,
              );
              public getMessage(): string;
              public getConnectionResult(param0: com.google.android.gms.common.api.GoogleApi<any>): com.google.android.gms.common.ConnectionResult;
            }
            export class Batch extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.common.api.BatchResult> {
              public static class: java.lang.Class<com.google.android.gms.common.api.Batch>;
              public cancel(): void;
              public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.BatchResult;
              public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
            }
            export module Batch {
              export class Builder {
                public static class: java.lang.Class<com.google.android.gms.common.api.Batch.Builder>;
                public build(): com.google.android.gms.common.api.Batch;
                public add(param0: com.google.android.gms.common.api.PendingResult<any>): com.google.android.gms.common.api.BatchResultToken<any>;
                public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
              }
            }
            export class BatchResult extends com.google.android.gms.common.api.Result {
              public static class: java.lang.Class<com.google.android.gms.common.api.BatchResult>;
              public getStatus(): com.google.android.gms.common.api.Status;
              public take(param0: com.google.android.gms.common.api.BatchResultToken<any>): com.google.android.gms.common.api.Result;
            }
            export class BatchResultToken<R> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.api.BatchResultToken<any>>;
              public mId: number;
            }
            export class BooleanResult extends com.google.android.gms.common.api.Result {
              public static class: java.lang.Class<com.google.android.gms.common.api.BooleanResult>;
              public constructor(param0: com.google.android.gms.common.api.Status, param1: boolean);
              public getStatus(): com.google.android.gms.common.api.Status;
              public hashCode(): number;
              public getValue(): boolean;
              public equals(param0: any): boolean;
            }
            export class CommonStatusCodes {
              public static class: java.lang.Class<com.google.android.gms.common.api.CommonStatusCodes>;
              public static SUCCESS_CACHE: number;
              public static SUCCESS: number;
              public static SERVICE_VERSION_UPDATE_REQUIRED: number;
              public static SERVICE_DISABLED: number;
              public static SIGN_IN_REQUIRED: number;
              public static INVALID_ACCOUNT: number;
              public static RESOLUTION_REQUIRED: number;
              public static NETWORK_ERROR: number;
              public static INTERNAL_ERROR: number;
              public static DEVELOPER_ERROR: number;
              public static ERROR: number;
              public static INTERRUPTED: number;
              public static TIMEOUT: number;
              public static CANCELED: number;
              public static API_NOT_CONNECTED: number;
              public constructor();
              public static getStatusCodeString(param0: number): string;
            }
            export class DataBufferResponse<T, R> extends com.google.android.gms.common.api.Response<any>
              implements com.google.android.gms.common.data.DataBuffer<any> {
              public static class: java.lang.Class<com.google.android.gms.common.api.DataBufferResponse<any, any>>;
              public constructor();
              public singleRefIterator(): java.util.Iterator<any>;
              public getMetadata(): globalAndroid.os.Bundle;
              public close(): void;
              public iterator(): java.util.Iterator<any>;
              /** @deprecated */
              public close(): void;
              public get(param0: number): any;
              public isClosed(): boolean;
              public release(): void;
              /** @deprecated */
              public isClosed(): boolean;
              public getCount(): number;
              public constructor(param0: any);
            }
            export class GoogleApi<O> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi<any>>;
              public zabm: com.google.android.gms.common.api.internal.GoogleApiManager;
              public doRegisterEventListener(
                param0: com.google.android.gms.common.api.internal.RegistrationMethods<any, any>,
              ): com.google.android.gms.tasks.Task<any>;
              public registerListener(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
              public zaa(
                param0: globalAndroid.os.Looper,
                param1: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<O>,
              ): com.google.android.gms.common.api.Api.Client;
              public doWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any, any>): com.google.android.gms.tasks.Task<any>;
              public doBestEffortWrite(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
              ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
              public doUnregisterEventListener(
                param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>,
              ): com.google.android.gms.tasks.Task<java.lang.Boolean>;
              public getLooper(): globalAndroid.os.Looper;
              public getApi(): com.google.android.gms.common.api.Api<O>;
              /** @deprecated */
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.common.api.Api<O>,
                param2: O,
                param3: com.google.android.gms.common.api.internal.StatusExceptionMapper,
              );
              public getApiOptions(): O;
              public constructor(
                param0: globalAndroid.app.Activity,
                param1: com.google.android.gms.common.api.Api<O>,
                param2: O,
                param3: com.google.android.gms.common.api.GoogleApi.Settings,
              );
              public zak(): com.google.android.gms.common.api.internal.zai<O>;
              public createClientSettingsBuilder(): com.google.android.gms.common.internal.ClientSettings.Builder;
              /** @deprecated */
              public doRegisterEventListener(
                param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<any, any>,
                param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any, any>,
              ): com.google.android.gms.tasks.Task<any>;
              public getInstanceId(): number;
              /** @deprecated */
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.common.api.Api<O>,
                param2: O,
                param3: globalAndroid.os.Looper,
                param4: com.google.android.gms.common.api.internal.StatusExceptionMapper,
              );
              public doRead(param0: com.google.android.gms.common.api.internal.TaskApiCall<any, any>): com.google.android.gms.tasks.Task<any>;
              public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<O>, param2: globalAndroid.os.Looper);
              public getApplicationContext(): globalAndroid.content.Context;
              public doWrite(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
              ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
              /** @deprecated */
              public constructor(
                param0: globalAndroid.app.Activity,
                param1: com.google.android.gms.common.api.Api<O>,
                param2: O,
                param3: com.google.android.gms.common.api.internal.StatusExceptionMapper,
              );
              public disconnectService(): com.google.android.gms.tasks.Task<java.lang.Boolean>;
              public zaa(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): com.google.android.gms.common.api.internal.zace;
              public doBestEffortWrite(param0: com.google.android.gms.common.api.internal.TaskApiCall<any, any>): com.google.android.gms.tasks.Task<any>;
              public asGoogleApiClient(): com.google.android.gms.common.api.GoogleApiClient;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.common.api.Api<O>,
                param2: O,
                param3: com.google.android.gms.common.api.GoogleApi.Settings,
              );
              public doRead(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
              ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
            }
            export module GoogleApi {
              export class Settings {
                public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi.Settings>;
                public static DEFAULT_SETTINGS: com.google.android.gms.common.api.GoogleApi.Settings;
                public zabn: com.google.android.gms.common.api.internal.StatusExceptionMapper;
                public zabo: globalAndroid.os.Looper;
              }
              export module Settings {
                export class Builder {
                  public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApi.Settings.Builder>;
                  public constructor();
                  public setLooper(param0: globalAndroid.os.Looper): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
                  public build(): com.google.android.gms.common.api.GoogleApi.Settings;
                  public setMapper(
                    param0: com.google.android.gms.common.api.internal.StatusExceptionMapper,
                  ): com.google.android.gms.common.api.GoogleApi.Settings.Builder;
                }
              }
            }
            export class GoogleApiActivity {
              public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiActivity>;
              public constructor();
              public onCancel(param0: globalAndroid.content.DialogInterface): void;
              public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public static zaa(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.app.PendingIntent,
                param2: number,
              ): globalAndroid.app.PendingIntent;
              public static zaa(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.app.PendingIntent,
                param2: number,
                param3: boolean,
              ): globalAndroid.content.Intent;
              public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
            }
            export abstract class GoogleApiClient {
              public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient>;
              public static DEFAULT_ACCOUNT: string;
              public static SIGN_IN_MODE_REQUIRED: number;
              public static SIGN_IN_MODE_OPTIONAL: number;
              public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
              public static dumpAll(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
              public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
              public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
              public getLooper(): globalAndroid.os.Looper;
              public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              public zaa(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
              public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
              public blockingConnect(): com.google.android.gms.common.ConnectionResult;
              public zab(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
              public connect(): void;
              public stopAutoManage(param0: androidx.fragment.app.FragmentActivity): void;
              public execute(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
              ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
              public maybeSignOut(): void;
              public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
              public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
              public constructor();
              public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
              public getContext(): globalAndroid.content.Context;
              public disconnect(): void;
              public isConnected(): boolean;
              public reconnect(): void;
              public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
              public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
              public isConnecting(): boolean;
              public enqueue(
                param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
              ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
              public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
              public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
              public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
              public static getAllClients(): java.util.Set<com.google.android.gms.common.api.GoogleApiClient>;
              public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
              public connect(param0: number): void;
            }
            export module GoogleApiClient {
              export class Builder {
                public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.Builder>;
                public build(): com.google.android.gms.common.api.GoogleApiClient;
                public useDefaultAccount(): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addConnectionCallbacks(
                  param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public buildClientSettings(): com.google.android.gms.common.internal.ClientSettings;
                public addScopeNames(param0: native.Array<string>): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addScope(param0: com.google.android.gms.common.api.Scope): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addOnConnectionFailedListener(
                  param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public enableAutoManage(
                  param0: androidx.fragment.app.FragmentActivity,
                  param1: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                );
                public enableAutoManage(
                  param0: androidx.fragment.app.FragmentActivity,
                  param1: number,
                  param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public setViewForPopups(param0: globalAndroid.view.View): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public setHandler(param0: globalAndroid.os.Handler): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addApiIfAvailable(
                  param0: com.google.android.gms.common.api.Api<any>,
                  param1: native.Array<com.google.android.gms.common.api.Scope>,
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public constructor(param0: globalAndroid.content.Context);
                public addApi(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addApi(
                  param0: com.google.android.gms.common.api.Api<any>,
                  param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions,
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public addApiIfAvailable(
                  param0: com.google.android.gms.common.api.Api<any>,
                  param1: com.google.android.gms.common.api.Api.ApiOptions.HasOptions,
                  param2: native.Array<com.google.android.gms.common.api.Scope>,
                ): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public setGravityForPopups(param0: number): com.google.android.gms.common.api.GoogleApiClient.Builder;
                public setAccountName(param0: string): com.google.android.gms.common.api.GoogleApiClient.Builder;
              }
              export class ConnectionCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$ConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onConnected(param0: globalAndroid.os.Bundle): void; onConnectionSuspended(param0: number): void });
                public constructor();
                public static CAUSE_SERVICE_DISCONNECTED: number;
                public static CAUSE_NETWORK_LOST: number;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
              export class OnConnectionFailedListener {
                public static class: java.lang.Class<com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.GoogleApiClient$OnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void });
                public constructor();
                public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
              }
            }
            export abstract class OptionalPendingResult<R> extends com.google.android.gms.common.api.PendingResult<any> {
              public static class: java.lang.Class<com.google.android.gms.common.api.OptionalPendingResult<any>>;
              public constructor();
              public get(): any;
              public isDone(): boolean;
            }
            export abstract class PendingResult<R> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult<any>>;
              public constructor();
              public cancel(): void;
              public isCanceled(): boolean;
              public await(param0: number, param1: java.util.concurrent.TimeUnit): R;
              public await(): R;
              public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
              public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
              public setResultCallback(
                param0: com.google.android.gms.common.api.ResultCallback<any>,
                param1: number,
                param2: java.util.concurrent.TimeUnit,
              ): void;
              public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
              public zam(): java.lang.Integer;
            }
            export module PendingResult {
              export class StatusListener {
                public static class: java.lang.Class<com.google.android.gms.common.api.PendingResult.StatusListener>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.PendingResult$StatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onComplete(param0: com.google.android.gms.common.api.Status): void });
                public constructor();
                public onComplete(param0: com.google.android.gms.common.api.Status): void;
              }
            }
            export class PendingResults {
              public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults>;
              public static immediateFailedResult(
                param0: com.google.android.gms.common.api.Result,
                param1: com.google.android.gms.common.api.GoogleApiClient,
              ): com.google.android.gms.common.api.PendingResult<any>;
              public static immediatePendingResult(
                param0: com.google.android.gms.common.api.Status,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
              public static canceledPendingResult(param0: com.google.android.gms.common.api.Result): com.google.android.gms.common.api.PendingResult<any>;
              public static immediatePendingResult(
                param0: com.google.android.gms.common.api.Result,
                param1: com.google.android.gms.common.api.GoogleApiClient,
              ): com.google.android.gms.common.api.OptionalPendingResult<any>;
              public static immediatePendingResult(
                param0: com.google.android.gms.common.api.Result,
              ): com.google.android.gms.common.api.OptionalPendingResult<any>;
              public static immediatePendingResult(
                param0: com.google.android.gms.common.api.Status,
                param1: com.google.android.gms.common.api.GoogleApiClient,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
              public static canceledPendingResult(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
            }
            export module PendingResults {
              export class zaa<R> extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zaa<any>>;
                public constructor(param0: any);
                public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
                public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
                public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
                public constructor();
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
              }
              export class zab<R> extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zab<any>>;
                public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
                public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
                public constructor(param0: com.google.android.gms.common.api.GoogleApiClient, param1: any);
                public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
                public constructor();
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
              }
              export class zac<R> extends com.google.android.gms.common.api.internal.BasePendingResult<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.PendingResults.zac<any>>;
                public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
                public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
                public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
                public constructor();
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
              }
            }
            export class Releasable {
              public static class: java.lang.Class<com.google.android.gms.common.api.Releasable>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.api.Releasable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { release(): void });
              public constructor();
              public release(): void;
            }
            export class ResolvableApiException extends com.google.android.gms.common.api.ApiException {
              public static class: java.lang.Class<com.google.android.gms.common.api.ResolvableApiException>;
              public constructor(param0: com.google.android.gms.common.api.Status);
              public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
              public getResolution(): globalAndroid.app.PendingIntent;
            }
            export abstract class ResolvingResultCallbacks<R> extends com.google.android.gms.common.api.ResultCallbacks<any> {
              public static class: java.lang.Class<com.google.android.gms.common.api.ResolvingResultCallbacks<any>>;
              public constructor();
              public onSuccess(param0: any): void;
              public constructor(param0: globalAndroid.app.Activity, param1: number);
              public onUnresolvableFailure(param0: com.google.android.gms.common.api.Status): void;
              public onResult(param0: any): void;
              public onFailure(param0: com.google.android.gms.common.api.Status): void;
            }
            export class Response<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.api.Response<any>>;
              public constructor();
              public getResult(): T;
              public constructor(param0: T);
              public setResult(param0: T): void;
            }
            export class Result {
              public static class: java.lang.Class<com.google.android.gms.common.api.Result>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.api.Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getStatus(): com.google.android.gms.common.api.Status });
              public constructor();
              public getStatus(): com.google.android.gms.common.api.Status;
            }
            export class ResultCallback<R> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallback<any>>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.api.ResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onResult(param0: R): void });
              public constructor();
              public onResult(param0: R): void;
            }
            export abstract class ResultCallbacks<R> extends com.google.android.gms.common.api.ResultCallback<any> {
              public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallbacks<any>>;
              public constructor();
              public onSuccess(param0: any): void;
              public onResult(param0: any): void;
              public onFailure(param0: com.google.android.gms.common.api.Status): void;
            }
            export abstract class ResultTransform<R, S> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.api.ResultTransform<any, any>>;
              public constructor();
              public onSuccess(param0: R): com.google.android.gms.common.api.PendingResult<S>;
              public createFailedResult(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.PendingResult<S>;
              public onFailure(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.Status;
            }
            export class Scope extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
              implements com.google.android.gms.common.internal.ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.api.Scope>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Scope>;
              public constructor();
              public getScopeUri(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public hashCode(): number;
              public constructor(param0: string);
              public toString(): string;
              public equals(param0: any): boolean;
            }
            export class Status extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
              implements com.google.android.gms.common.api.Result, com.google.android.gms.common.internal.ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.api.Status>;
              public static RESULT_SUCCESS: com.google.android.gms.common.api.Status;
              public static RESULT_INTERRUPTED: com.google.android.gms.common.api.Status;
              public static RESULT_INTERNAL_ERROR: com.google.android.gms.common.api.Status;
              public static RESULT_TIMEOUT: com.google.android.gms.common.api.Status;
              public static RESULT_CANCELED: com.google.android.gms.common.api.Status;
              public static RESULT_DEAD_CLIENT: com.google.android.gms.common.api.Status;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Status>;
              public constructor();
              public hasResolution(): boolean;
              public getStatus(): com.google.android.gms.common.api.Status;
              public isInterrupted(): boolean;
              public hashCode(): number;
              public toString(): string;
              public getResolution(): globalAndroid.app.PendingIntent;
              public constructor(param0: number);
              public isCanceled(): boolean;
              public getStatusCode(): number;
              public getStatusMessage(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: number, param1: string, param2: globalAndroid.app.PendingIntent);
              public startResolutionForResult(param0: globalAndroid.app.Activity, param1: number): void;
              public equals(param0: any): boolean;
              public isSuccess(): boolean;
              public constructor(param0: number, param1: string);
            }
            export abstract class TransformedResult<R> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.api.TransformedResult<any>>;
              public constructor();
              public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
              public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
            }
            export class UnsupportedApiCallException {
              public static class: java.lang.Class<com.google.android.gms.common.api.UnsupportedApiCallException>;
              public constructor(param0: com.google.android.gms.common.Feature);
              public getMessage(): string;
            }
            export module internal {
              export abstract class ActivityLifecycleObserver {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.ActivityLifecycleObserver>;
                public onStopCallOnce(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
                public static of(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
                public constructor();
              }
              export class ApiExceptionMapper extends com.google.android.gms.common.api.internal.StatusExceptionMapper {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.ApiExceptionMapper>;
                public constructor();
                public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
              }
              export class BackgroundDetector {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.BackgroundDetector>;
                public readCurrentStateIfPossible(param0: boolean): boolean;
                public isInBackground(): boolean;
                public onActivityResumed(param0: globalAndroid.app.Activity): void;
                public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
                public onTrimMemory(param0: number): void;
                public onLowMemory(): void;
                public addListener(param0: com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener): void;
                public onActivityStarted(param0: globalAndroid.app.Activity): void;
                public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
                public onActivityPaused(param0: globalAndroid.app.Activity): void;
                public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
                public static initialize(param0: globalAndroid.app.Application): void;
                public onActivityStopped(param0: globalAndroid.app.Activity): void;
                public static getInstance(): com.google.android.gms.common.api.internal.BackgroundDetector;
              }
              export module BackgroundDetector {
                export class BackgroundStateChangeListener {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.internal.BackgroundDetector$BackgroundStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { onBackgroundStateChanged(param0: boolean): void });
                  public constructor();
                  public onBackgroundStateChanged(param0: boolean): void;
                }
              }
              export class BaseImplementation {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation>;
                public constructor();
              }
              export module BaseImplementation {
                export abstract class ApiMethodImpl<R, A> extends com.google.android.gms.common.api.internal.BasePendingResult<any>
                  implements com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any> {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>>;
                  public constructor();
                  public getApi(): com.google.android.gms.common.api.Api<any>;
                  /** @deprecated */
                  public constructor(
                    param0: com.google.android.gms.common.api.Api.AnyClientKey<any>,
                    param1: com.google.android.gms.common.api.GoogleApiClient,
                  );
                  public run(param0: any): void;
                  public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
                  public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
                  /** @deprecated */
                  public constructor(param0: globalAndroid.os.Looper);
                  public getClientKey(): com.google.android.gms.common.api.Api.AnyClientKey<any>;
                  public onSetFailedResult(param0: any): void;
                  public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
                  public doExecute(param0: any): void;
                  public setResult(param0: any): void;
                  public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
                }
                export class ResultHolder<R> extends java.lang.Object {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<any>>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.internal.BaseImplementation$ResultHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { setResult(param0: R): void; setFailedResult(param0: com.google.android.gms.common.api.Status): void });
                  public constructor();
                  public setResult(param0: R): void;
                  public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
                }
              }
              export abstract class BasePendingResult<R> extends com.google.android.gms.common.api.PendingResult<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult<any>>;
                public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
                public setCancelToken(param0: com.google.android.gms.common.internal.ICancelToken): void;
                public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
                public static zab(param0: com.google.android.gms.common.api.Result): void;
                public cancel(): void;
                public zab(param0: com.google.android.gms.common.api.Status): void;
                public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
                public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
                public zat(): boolean;
                public createFailedResult(param0: com.google.android.gms.common.api.Status): any;
                public constructor();
                public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
                public setResultCallback(
                  param0: com.google.android.gms.common.api.ResultCallback<any>,
                  param1: number,
                  param2: java.util.concurrent.TimeUnit,
                ): void;
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
                public setResult(param0: any): void;
                public await(): any;
                public zaa(param0: com.google.android.gms.common.api.internal.zacs): void;
                public zau(): void;
                public isCanceled(): boolean;
                public isReady(): boolean;
                public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
                public zam(): java.lang.Integer;
              }
              export module BasePendingResult {
                export class CallbackHandler<R> extends com.google.android.gms.internal.base.zal {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>>;
                  public constructor();
                  public zaa(param0: com.google.android.gms.common.api.ResultCallback<any>, param1: any): void;
                  public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
                  public handleMessage(param0: globalAndroid.os.Message): void;
                  public constructor(param0: globalAndroid.os.Looper);
                }
                export class zaa {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.BasePendingResult.zaa>;
                  public finalize(): void;
                }
              }
              export abstract class DataHolderNotifier<L> extends com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderNotifier<any>>;
                public onNotifyListenerFailed(): void;
                public notifyListener(param0: any, param1: com.google.android.gms.common.data.DataHolder): void;
                public notifyListener(param0: any): void;
                public constructor(param0: com.google.android.gms.common.data.DataHolder);
              }
              export class DataHolderResult implements com.google.android.gms.common.api.Releasable, com.google.android.gms.common.api.Result {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.DataHolderResult>;
                public mStatus: com.google.android.gms.common.api.Status;
                public mDataHolder: com.google.android.gms.common.data.DataHolder;
                public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: com.google.android.gms.common.api.Status);
                public getStatus(): com.google.android.gms.common.api.Status;
                public release(): void;
                public constructor(param0: com.google.android.gms.common.data.DataHolder);
              }
              export class GoogleApiManager {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager>;
                public static zahw: com.google.android.gms.common.api.Status;
                public zac(param0: com.google.android.gms.common.api.GoogleApi<any>): com.google.android.gms.tasks.Task<java.lang.Boolean>;
                public zao(): void;
                public handleMessage(param0: globalAndroid.os.Message): boolean;
                public zaa(param0: com.google.android.gms.common.api.internal.zaae): void;
                public static zabc(): com.google.android.gms.common.api.internal.GoogleApiManager;
                public zabd(): number;
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApi<any>,
                  param1: com.google.android.gms.common.api.internal.RegisterListenerMethod<any, any>,
                  param2: com.google.android.gms.common.api.internal.UnregisterListenerMethod<any, any>,
                ): com.google.android.gms.tasks.Task<any>;
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApi<any>,
                  param1: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>,
                ): com.google.android.gms.tasks.Task<any>;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
                public static reportSignOut(): void;
                public zaa(
                  param0: java.lang.Iterable<any>,
                ): com.google.android.gms.tasks.Task<java.util.Map<com.google.android.gms.common.api.internal.zai<any>, string>>;
                public zaa(param0: com.google.android.gms.common.api.GoogleApi<any>): void;
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApi<any>,
                  param1: number,
                  param2: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApi<any>,
                  param1: number,
                  param2: com.google.android.gms.common.api.internal.TaskApiCall<any, any>,
                  param3: com.google.android.gms.tasks.TaskCompletionSource<any>,
                  param4: com.google.android.gms.common.api.internal.StatusExceptionMapper,
                ): void;
              }
              export module GoogleApiManager {
                export class zaa<O> extends java.lang.Object {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>>;
                  public zag(param0: com.google.android.gms.common.ConnectionResult): void;
                  public zabm(): com.google.android.gms.common.ConnectionResult;
                  public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
                  public requiresSignIn(): boolean;
                  public zaa(param0: com.google.android.gms.common.api.internal.zab): void;
                  public connect(): void;
                  public zabl(): void;
                  public zaa(param0: com.google.android.gms.common.api.internal.zak): void;
                  public getInstanceId(): number;
                  public onConnected(param0: globalAndroid.os.Bundle): void;
                  public constructor(param0: com.google.android.gms.common.api.GoogleApi<O>);
                  public zabp(): boolean;
                  public onConnectionSuspended(param0: number): void;
                  public zaab(): com.google.android.gms.common.api.Api.Client;
                  public zabk(): java.util.Map<
                    com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>,
                    com.google.android.gms.common.api.internal.zabw
                  >;
                  public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
                  public resume(): void;
                  public zaav(): void;
                  public zabj(): void;
                  public zac(param0: com.google.android.gms.common.api.Status): void;
                }
                export class zab {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager.zab>;
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                  public toString(): string;
                }
                export class zac
                  implements
                    com.google.android.gms.common.api.internal.zach,
                    com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleApiManager.zac>;
                  public zag(param0: com.google.android.gms.common.ConnectionResult): void;
                  public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
                  public constructor(param0: com.google.android.gms.common.api.Api.Client, param1: com.google.android.gms.common.api.internal.zai<any>);
                  public zaa(
                    param0: com.google.android.gms.common.internal.IAccountAccessor,
                    param1: java.util.Set<com.google.android.gms.common.api.Scope>,
                  ): void;
                }
              }
              export class GoogleServices {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleServices>;
                public static isMeasurementExplicitlyDisabled(): boolean;
                public static initialize(param0: globalAndroid.content.Context, param1: string, param2: boolean): com.google.android.gms.common.api.Status;
                public static getGoogleAppId(): string;
                public static initialize(param0: globalAndroid.content.Context): com.google.android.gms.common.api.Status;
                public static isMeasurementEnabled(): boolean;
              }
              export class IStatusCallback {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.IStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onResult(param0: com.google.android.gms.common.api.Status): void });
                public constructor();
                public onResult(param0: com.google.android.gms.common.api.Status): void;
              }
              export module IStatusCallback {
                export abstract class Stub extends com.google.android.gms.internal.base.zab
                  implements com.google.android.gms.common.api.internal.IStatusCallback {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback.Stub>;
                  public constructor(param0: string);
                  public constructor();
                  public onResult(param0: com.google.android.gms.common.api.Status): void;
                  public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
                  public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.api.internal.IStatusCallback;
                }
                export module Stub {
                  export class zaa extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.api.internal.IStatusCallback {
                    public static class: java.lang.Class<com.google.android.gms.common.api.internal.IStatusCallback.Stub.zaa>;
                    public onResult(param0: com.google.android.gms.common.api.Status): void;
                  }
                }
              }
              export class LifecycleActivity {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleActivity>;
                public asObject(): any;
                public asFragmentActivity(): androidx.fragment.app.FragmentActivity;
                public constructor(param0: globalAndroid.app.Activity);
                public constructor(param0: globalAndroid.content.ContextWrapper);
                public isChimera(): boolean;
                public isSupport(): boolean;
                public asActivity(): globalAndroid.app.Activity;
              }
              export class LifecycleCallback {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleCallback>;
                public mLifecycleFragment: com.google.android.gms.common.api.internal.LifecycleFragment;
                public static getFragment(param0: globalAndroid.content.ContextWrapper): com.google.android.gms.common.api.internal.LifecycleFragment;
                public onResume(): void;
                public static getFragment(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.LifecycleFragment;
                public onDestroy(): void;
                public static getFragment(
                  param0: com.google.android.gms.common.api.internal.LifecycleActivity,
                ): com.google.android.gms.common.api.internal.LifecycleFragment;
                public getActivity(): globalAndroid.app.Activity;
                public onStop(): void;
                public constructor(param0: com.google.android.gms.common.api.internal.LifecycleFragment);
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public onStart(): void;
                public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
                public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
              }
              export class LifecycleFragment {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleFragment>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.LifecycleFragment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  getCallbackOrNull(param0: string, param1: java.lang.Class<any>): com.google.android.gms.common.api.internal.LifecycleCallback;
                  addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
                  startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
                  getLifecycleActivity(): globalAndroid.app.Activity;
                  isCreated(): boolean;
                  isStarted(): boolean;
                });
                public constructor();
                public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
                public isCreated(): boolean;
                public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
                public getCallbackOrNull(param0: string, param1: java.lang.Class<any>): com.google.android.gms.common.api.internal.LifecycleCallback;
                public isStarted(): boolean;
                public getLifecycleActivity(): globalAndroid.app.Activity;
              }
              export class ListenerHolder<L> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder<any>>;
                public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
                public clear(): void;
                public notifyListener(param0: com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>): void;
                public hasListener(): boolean;
              }
              export module ListenerHolder {
                export class ListenerKey<L> extends java.lang.Object {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>>;
                  public hashCode(): number;
                  public equals(param0: any): boolean;
                }
                export class Notifier<L> extends java.lang.Object {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.Notifier<any>>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.api.internal.ListenerHolder$Notifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { notifyListener(param0: L): void; onNotifyListenerFailed(): void });
                  public constructor();
                  public notifyListener(param0: L): void;
                  public onNotifyListenerFailed(): void;
                }
                export class zaa extends com.google.android.gms.internal.base.zal {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolder.zaa>;
                  public constructor();
                  public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
                  public handleMessage(param0: globalAndroid.os.Message): void;
                  public constructor(param0: globalAndroid.os.Looper);
                  public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<any>, param1: globalAndroid.os.Looper);
                }
              }
              export class ListenerHolders {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.ListenerHolders>;
                public static createListenerKey(param0: any, param1: string): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>;
                public constructor();
                public static createListenerHolder(
                  param0: any,
                  param1: globalAndroid.os.Looper,
                  param2: string,
                ): com.google.android.gms.common.api.internal.ListenerHolder<any>;
                public release(): void;
                public zaa(param0: any, param1: globalAndroid.os.Looper, param2: string): com.google.android.gms.common.api.internal.ListenerHolder<any>;
              }
              export class OptionalPendingResultImpl<R> extends com.google.android.gms.common.api.OptionalPendingResult<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.OptionalPendingResultImpl<any>>;
                public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
                public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
                public cancel(): void;
                public get(): any;
                public constructor();
                public isDone(): boolean;
                public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
                public setResultCallback(
                  param0: com.google.android.gms.common.api.ResultCallback<any>,
                  param1: number,
                  param2: java.util.concurrent.TimeUnit,
                ): void;
                public await(): any;
                public isCanceled(): boolean;
                public constructor(param0: com.google.android.gms.common.api.PendingResult<any>);
                public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
                public zam(): java.lang.Integer;
              }
              export abstract class PendingResultFacade<A, B> extends com.google.android.gms.common.api.PendingResult<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.PendingResultFacade<any, any>>;
              }
              export abstract class RegisterListenerMethod<A, L> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegisterListenerMethod<any, any>>;
                public registerListener(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
                public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
                public clearListener(): void;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.ListenerHolder<L>,
                  param1: native.Array<com.google.android.gms.common.Feature>,
                  param2: boolean,
                );
                public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder<L>);
                public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
                public shouldAutoResolveMissingFeatures(): boolean;
              }
              export class RegistrationMethods<A, L> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods<any, any>>;
                public zajy: com.google.android.gms.common.api.internal.RegisterListenerMethod<A, L>;
                public zajz: com.google.android.gms.common.api.internal.UnregisterListenerMethod<A, L>;
                public static builder(): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any, any>;
              }
              export module RegistrationMethods {
                export class Builder<A, L> extends java.lang.Object {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.RegistrationMethods.Builder<any, any>>;
                  public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
                  public withHolder(
                    param0: com.google.android.gms.common.api.internal.ListenerHolder<L>,
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
                  /** @deprecated */
                  public register(
                    param0: com.google.android.gms.common.util.BiConsumer<A, com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>>,
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
                  public unregister(
                    param0: com.google.android.gms.common.api.internal.RemoteCall<A, com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>>,
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
                  public register(
                    param0: com.google.android.gms.common.api.internal.RemoteCall<A, com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>>,
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
                  public build(): com.google.android.gms.common.api.internal.RegistrationMethods<A, L>;
                  public setFeatures(
                    param0: native.Array<com.google.android.gms.common.Feature>,
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
                  /** @deprecated */
                  public unregister(
                    param0: com.google.android.gms.common.util.BiConsumer<A, com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>>,
                  ): com.google.android.gms.common.api.internal.RegistrationMethods.Builder<A, L>;
                }
              }
              export class RemoteCall<T, U> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.RemoteCall<any, any>>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.RemoteCall<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { accept(param0: T, param1: U): void });
                public constructor();
                public accept(param0: T, param1: U): void;
              }
              export class SignInConnectionListener {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.SignInConnectionListener>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.SignInConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onComplete(): void });
                public constructor();
                public onComplete(): void;
              }
              export class StatusCallback extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusCallback>;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>,
                );
                public constructor();
                public onResult(param0: com.google.android.gms.common.api.Status): void;
                public constructor(param0: string);
              }
              export class StatusExceptionMapper {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusExceptionMapper>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.StatusExceptionMapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception });
                public constructor();
                public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
              }
              export class StatusPendingResult extends com.google.android.gms.common.api.internal.BasePendingResult<com.google.android.gms.common.api.Status> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusPendingResult>;
                public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
                public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
                public constructor();
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
              }
              export abstract class TaskApiCall<A, ResultT> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall<any, any>>;
                /** @deprecated */
                public constructor();
                public zabt(): native.Array<com.google.android.gms.common.Feature>;
                public doExecute(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<ResultT>): void;
                public shouldAutoResolveMissingFeatures(): boolean;
                public static builder(): com.google.android.gms.common.api.internal.TaskApiCall.Builder<any, any>;
              }
              export module TaskApiCall {
                export class Builder<A, ResultT> extends java.lang.Object {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskApiCall.Builder<any, any>>;
                  public setFeatures(
                    param0: native.Array<com.google.android.gms.common.Feature>,
                  ): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A, ResultT>;
                  public build(): com.google.android.gms.common.api.internal.TaskApiCall<A, ResultT>;
                  public run(
                    param0: com.google.android.gms.common.api.internal.RemoteCall<A, com.google.android.gms.tasks.TaskCompletionSource<ResultT>>,
                  ): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A, ResultT>;
                  public setAutoResolveMissingFeatures(param0: boolean): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A, ResultT>;
                  /** @deprecated */
                  public execute(
                    param0: com.google.android.gms.common.util.BiConsumer<A, com.google.android.gms.tasks.TaskCompletionSource<ResultT>>,
                  ): com.google.android.gms.common.api.internal.TaskApiCall.Builder<A, ResultT>;
                }
              }
              export class TaskUtil {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.TaskUtil>;
                public static setResultOrApiException(
                  param0: com.google.android.gms.common.api.Status,
                  param1: any,
                  param2: com.google.android.gms.tasks.TaskCompletionSource<any>,
                ): void;
                public static setResultOrApiException(
                  param0: com.google.android.gms.common.api.Status,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>,
                ): void;
                public constructor();
                /** @deprecated */
                public static toVoidTaskThatFailsOnFalse(
                  param0: com.google.android.gms.tasks.Task<java.lang.Boolean>,
                ): com.google.android.gms.tasks.Task<java.lang.Void>;
              }
              export abstract class UnregisterListenerMethod<A, L> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.UnregisterListenerMethod<any, any>>;
                public getListenerKey(): com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>;
                public unregisterListener(param0: A, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
                public constructor(param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<L>);
              }
              export class zaa extends com.google.android.gms.common.api.internal.ActivityLifecycleObserver {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaa>;
                public onStopCallOnce(param0: java.lang.Runnable): com.google.android.gms.common.api.internal.ActivityLifecycleObserver;
                public constructor(param0: globalAndroid.app.Activity);
                public constructor();
              }
              export module zaa {
                export class zaa extends com.google.android.gms.common.api.internal.LifecycleCallback {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaa.zaa>;
                  public onStop(): void;
                }
              }
              export class zaaa extends com.google.android.gms.tasks.OnCompleteListener<
                java.util.Map<com.google.android.gms.common.api.internal.zai<any>, string>
              > {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaa>;
                public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
                public onComplete(param0: com.google.android.gms.tasks.Task<java.util.Map<com.google.android.gms.common.api.internal.zai<any>, string>>): void;
              }
              export class zaab {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaab>;
                public constructor();
                public zaai(): void;
                public zaah(): void;
              }
              export class zaac extends com.google.android.gms.common.api.PendingResult.StatusListener {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaac>;
                public onComplete(param0: com.google.android.gms.common.api.Status): void;
              }
              export class zaad extends com.google.android.gms.tasks.OnCompleteListener<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaad>;
                public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
              }
              export class zaae extends com.google.android.gms.common.api.internal.zal {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaae>;
                public zao(): void;
                public static zaa(
                  param0: globalAndroid.app.Activity,
                  param1: com.google.android.gms.common.api.internal.GoogleApiManager,
                  param2: com.google.android.gms.common.api.internal.zai<any>,
                ): void;
                public onResume(): void;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
                public onStop(): void;
                public onStart(): void;
              }
              export class zaaf {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaf>;
                public constructor(param0: com.google.android.gms.common.api.internal.zai<any>);
                public zaal(): com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>;
                public zak(): com.google.android.gms.common.api.internal.zai<any>;
              }
              export class zaag extends com.google.android.gms.common.api.GoogleApiClient {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaag>;
                public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
                public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
                public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
                public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public constructor();
                public connect(param0: number): void;
                public connect(): void;
                public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
                public stopAutoManage(param0: androidx.fragment.app.FragmentActivity): void;
                public isConnected(): boolean;
                public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
                public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
                public reconnect(): void;
                public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
                public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
                public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public constructor(param0: string);
                public disconnect(): void;
                public isConnecting(): boolean;
              }
              export class zaah extends com.google.android.gms.common.api.internal.zabd {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaah>;
                public disconnect(): boolean;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public constructor(param0: com.google.android.gms.common.api.internal.zabe);
                public begin(): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public connect(): void;
                public onConnectionSuspended(param0: number): void;
              }
              export class zaai extends com.google.android.gms.common.api.internal.zabf {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaai>;
                public zaan(): void;
              }
              export class zaaj extends com.google.android.gms.common.api.internal.zabf {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaj>;
                public zaan(): void;
              }
              export class zaak extends com.google.android.gms.common.api.internal.zabd {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaak>;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
                public disconnect(): boolean;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public begin(): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zabe,
                  param1: com.google.android.gms.common.internal.ClientSettings,
                  param2: java.util.Map<com.google.android.gms.common.api.Api<any>, java.lang.Boolean>,
                  param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                  param4: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, com.google.android.gms.signin.SignInOptions>,
                  param5: java.util.concurrent.locks.Lock,
                  param6: globalAndroid.content.Context,
                );
                public connect(): void;
                public onConnectionSuspended(param0: number): void;
              }
              export class zaal {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaal>;
                public run(): void;
              }
              export class zaam extends com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaam>;
                public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zaak,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: boolean,
                );
              }
              export class zaan extends com.google.android.gms.common.api.internal.zaau {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaan>;
                public constructor(param0: java.util.Map<com.google.android.gms.common.api.Api.Client, com.google.android.gms.common.api.internal.zaam>);
                public zaan(): void;
              }
              export class zaao extends com.google.android.gms.common.api.internal.zabf {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaao>;
                public zaan(): void;
              }
              export class zaap extends com.google.android.gms.common.api.internal.zabf {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaap>;
                public zaan(): void;
              }
              export class zaaq extends com.google.android.gms.common.api.internal.zaau {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaq>;
                public constructor(param0: java.util.ArrayList<com.google.android.gms.common.api.Api.Client>);
                public zaan(): void;
              }
              export class zaar extends com.google.android.gms.signin.internal.zac {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaar>;
                public zah(param0: com.google.android.gms.common.api.Status): void;
                public zag(param0: com.google.android.gms.common.api.Status): void;
                public zab(param0: com.google.android.gms.signin.internal.zaj): void;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
                public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
              }
              export class zaas extends com.google.android.gms.common.api.internal.zabf {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaas>;
                public zaan(): void;
              }
              export class zaat
                implements
                  com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaat>;
                public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
              export abstract class zaau {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaau>;
                public zaan(): void;
                public run(): void;
              }
              export class zaav extends com.google.android.gms.common.api.internal.zabd {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaav>;
                public disconnect(): boolean;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public constructor(param0: com.google.android.gms.common.api.internal.zabe);
                public begin(): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public connect(): void;
                public onConnectionSuspended(param0: number): void;
              }
              export class zaaw extends com.google.android.gms.common.api.GoogleApiClient implements com.google.android.gms.common.api.internal.zabt {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaw>;
                public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: java.util.concurrent.locks.Lock,
                  param2: globalAndroid.os.Looper,
                  param3: com.google.android.gms.common.internal.ClientSettings,
                  param4: com.google.android.gms.common.GoogleApiAvailability,
                  param5: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, com.google.android.gms.signin.SignInOptions>,
                  param6: java.util.Map<com.google.android.gms.common.api.Api<any>, java.lang.Boolean>,
                  param7: java.util.List<com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks>,
                  param8: java.util.List<com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener>,
                  param9: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>, com.google.android.gms.common.api.Api.Client>,
                  param10: number,
                  param11: number,
                  param12: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>,
                  param13: boolean,
                );
                public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
                public getClient(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>): com.google.android.gms.common.api.Api.Client;
                public zab(param0: globalAndroid.os.Bundle): void;
                public zab(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
                public getContext(): globalAndroid.content.Context;
                public connect(param0: number): void;
                public zaa(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
                public connect(): void;
                public static zaa(param0: java.lang.Iterable<com.google.android.gms.common.api.Api.Client>, param1: boolean): number;
                public stopAutoManage(param0: androidx.fragment.app.FragmentActivity): void;
                public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
                public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
                public hasConnectedApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public clearDefaultAccountAndReconnect(): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public constructor();
                public maybeSignOut(): void;
                public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
                public zab(param0: number, param1: boolean): void;
                public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
                public zac(param0: com.google.android.gms.common.ConnectionResult): void;
                public isConnected(): boolean;
                public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
                public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
                public reconnect(): void;
                public hasApi(param0: com.google.android.gms.common.api.Api<any>): boolean;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public disconnect(): void;
                public isConnecting(): boolean;
                public registerListener(param0: any): com.google.android.gms.common.api.internal.ListenerHolder<any>;
                public getLooper(): globalAndroid.os.Looper;
              }
              export class zaax extends com.google.android.gms.common.internal.GmsClientEventManager.GmsClientEventState {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaax>;
                public getConnectionHint(): globalAndroid.os.Bundle;
                public isConnected(): boolean;
              }
              export class zaay extends com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaay>;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
              export class zaaz extends com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaaz>;
                public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
              }
              export abstract class zab {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zab>;
                public zaa(param0: com.google.android.gms.common.api.Status): void;
                public constructor(param0: number);
                public zaa(param0: java.lang.RuntimeException): void;
                public zaa(param0: com.google.android.gms.common.api.internal.zaab, param1: boolean): void;
                public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
              }
              export class zaba extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.common.api.Status> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaba>;
                public onResult(param0: any): void;
              }
              export class zabb extends com.google.android.gms.internal.base.zal {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabb>;
                public handleMessage(param0: globalAndroid.os.Message): void;
              }
              export class zabc extends com.google.android.gms.common.api.internal.zabr {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabc>;
                public zas(): void;
              }
              export class zabd {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabd>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  begin(): void;
                  enqueue(
                    param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                  ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                  execute(
                    param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                  ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                  disconnect(): boolean;
                  connect(): void;
                  onConnected(param0: globalAndroid.os.Bundle): void;
                  zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
                  onConnectionSuspended(param0: number): void;
                });
                public constructor();
                public disconnect(): boolean;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public begin(): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public connect(): void;
                public onConnectionSuspended(param0: number): void;
              }
              export class zabe implements com.google.android.gms.common.api.internal.zabs, com.google.android.gms.common.api.internal.zar {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabe>;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public maybeSignOut(): void;
                public connect(): void;
                public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
                public isConnected(): boolean;
                public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.internal.zaaw,
                  param2: java.util.concurrent.locks.Lock,
                  param3: globalAndroid.os.Looper,
                  param4: com.google.android.gms.common.GoogleApiAvailabilityLight,
                  param5: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>, com.google.android.gms.common.api.Api.Client>,
                  param6: com.google.android.gms.common.internal.ClientSettings,
                  param7: java.util.Map<com.google.android.gms.common.api.Api<any>, java.lang.Boolean>,
                  param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, com.google.android.gms.signin.SignInOptions>,
                  param9: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>,
                  param10: com.google.android.gms.common.api.internal.zabt,
                );
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public disconnect(): void;
                public zaw(): void;
                public isConnecting(): boolean;
                public onConnectionSuspended(param0: number): void;
              }
              export abstract class zabf {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabf>;
                public zaan(): void;
                public constructor(param0: com.google.android.gms.common.api.internal.zabd);
                public zac(param0: com.google.android.gms.common.api.internal.zabe): void;
              }
              export class zabg extends com.google.android.gms.internal.base.zal {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabg>;
                public handleMessage(param0: globalAndroid.os.Message): void;
              }
              export class zabh {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabh>;
                public static zabb(): java.util.concurrent.ExecutorService;
              }
              export class zabi extends com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabi>;
                public onBackgroundStateChanged(param0: boolean): void;
              }
              export class zabj {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabj>;
                public run(): void;
              }
              export class zabk {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabk>;
                public run(): void;
              }
              export class zabl {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabl>;
                public run(): void;
              }
              export class zabm extends com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabm>;
                public onSignOutComplete(): void;
              }
              export class zabn {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabn>;
                public run(): void;
              }
              export class zabo {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabo>;
                public run(): void;
              }
              export class zabp<O> extends com.google.android.gms.common.api.internal.zaag {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabp<any>>;
                public constructor(param0: com.google.android.gms.common.api.GoogleApi<any>);
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public constructor();
                public constructor(param0: string);
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public zab(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
                public getContext(): globalAndroid.content.Context;
                public zaa(param0: com.google.android.gms.common.api.internal.zacm<any>): void;
                public getLooper(): globalAndroid.os.Looper;
              }
              export class zabq {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabq>;
                public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
                public constructor(param0: com.google.android.gms.common.api.internal.zabr);
                public zac(param0: globalAndroid.content.Context): void;
                public unregister(): void;
              }
              export abstract class zabr {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabr>;
                public constructor();
                public zas(): void;
              }
              export class zabs {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabs>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  enqueue(
                    param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                  ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                  execute(
                    param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                  ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                  connect(): void;
                  blockingConnect(): com.google.android.gms.common.ConnectionResult;
                  blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
                  disconnect(): void;
                  getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
                  isConnected(): boolean;
                  isConnecting(): boolean;
                  maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
                  maybeSignOut(): void;
                  dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                  zaw(): void;
                });
                public constructor();
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public maybeSignOut(): void;
                public connect(): void;
                public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
                public isConnected(): boolean;
                public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public disconnect(): void;
                public zaw(): void;
                public isConnecting(): boolean;
              }
              export class zabt {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabt>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zabt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zab(param0: globalAndroid.os.Bundle): void;
                  zac(param0: com.google.android.gms.common.ConnectionResult): void;
                  zab(param0: number, param1: boolean): void;
                });
                public constructor();
                public zac(param0: com.google.android.gms.common.ConnectionResult): void;
                public zab(param0: globalAndroid.os.Bundle): void;
                public zab(param0: number, param1: boolean): void;
              }
              export class zabu extends com.google.android.gms.common.api.internal.zal {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabu>;
                public zao(): void;
                public getTask(): com.google.android.gms.tasks.Task<java.lang.Void>;
                public onDestroy(): void;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
                public static zac(param0: globalAndroid.app.Activity): com.google.android.gms.common.api.internal.zabu;
              }
              export class zabv {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabv>;
                public zajq: com.google.android.gms.common.api.internal.zab;
                public zajr: number;
                public zajs: com.google.android.gms.common.api.GoogleApi<any>;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zab,
                  param1: number,
                  param2: com.google.android.gms.common.api.GoogleApi<any>,
                );
              }
              export class zabw {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabw>;
                public zajw: com.google.android.gms.common.api.internal.RegisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient, any>;
                public zajx: com.google.android.gms.common.api.internal.UnregisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient, any>;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.RegisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient, any>,
                  param1: com.google.android.gms.common.api.internal.UnregisterListenerMethod<com.google.android.gms.common.api.Api.AnyClient, any>,
                );
              }
              export class zabx {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabx>;
              }
              export class zaby extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaby>;
                public accept(param0: any, param1: any): void;
              }
              export class zabz extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zabz>;
                public accept(param0: any, param1: any): void;
              }
              export abstract class zac extends com.google.android.gms.common.api.internal.zab {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zac>;
                public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
                public constructor(param0: number);
                public zab(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): native.Array<com.google.android.gms.common.Feature>;
              }
              export class zaca extends com.google.android.gms.common.api.internal.RegisterListenerMethod<any, any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaca>;
                public registerListener(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>): void;
              }
              export class zacb extends com.google.android.gms.common.api.internal.UnregisterListenerMethod<any, any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacb>;
                public unregisterListener(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>): void;
              }
              export class zacc {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacc>;
                public static zabb(): java.util.concurrent.ExecutorService;
              }
              export class zacd<R> extends com.google.android.gms.common.api.PendingResult<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacd<any>>;
                public constructor(param0: com.google.android.gms.common.api.Status);
                public setResultCallback(param0: com.google.android.gms.common.api.ResultCallback<any>): void;
                public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
                public cancel(): void;
                public isCanceled(): boolean;
                public addStatusListener(param0: com.google.android.gms.common.api.PendingResult.StatusListener): void;
                public constructor();
                public await(param0: number, param1: java.util.concurrent.TimeUnit): any;
                public setResultCallback(
                  param0: com.google.android.gms.common.api.ResultCallback<any>,
                  param1: number,
                  param2: java.util.concurrent.TimeUnit,
                ): void;
                public await(): any;
                public zam(): java.lang.Integer;
              }
              export class zace extends com.google.android.gms.signin.internal.zac
                implements
                  com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zace>;
                public zag(param0: com.google.android.gms.common.api.Status): void;
                public zaa(param0: com.google.android.gms.common.api.internal.zach): void;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Handler,
                  param2: com.google.android.gms.common.internal.ClientSettings,
                  param3: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, com.google.android.gms.signin.SignInOptions>,
                );
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
                public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
                public constructor();
                public zabq(): com.google.android.gms.signin.zad;
                public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
                public zabs(): void;
                public zah(param0: com.google.android.gms.common.api.Status): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public zab(param0: com.google.android.gms.signin.internal.zaj): void;
                public constructor(param0: string);
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Handler,
                  param2: com.google.android.gms.common.internal.ClientSettings,
                );
                public onConnectionSuspended(param0: number): void;
              }
              export class zacf {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacf>;
                public run(): void;
              }
              export class zacg {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacg>;
                public run(): void;
              }
              export class zach {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zach>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zach interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zag(param0: com.google.android.gms.common.ConnectionResult): void;
                  zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
                });
                public constructor();
                public zag(param0: com.google.android.gms.common.ConnectionResult): void;
                public zaa(
                  param0: com.google.android.gms.common.internal.IAccountAccessor,
                  param1: java.util.Set<com.google.android.gms.common.api.Scope>,
                ): void;
              }
              export class zaci {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaci>;
              }
              export class zacj extends com.google.android.gms.common.api.internal.RemoteCall<any, any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacj>;
                public accept(param0: any, param1: any): void;
              }
              export class zack extends com.google.android.gms.common.api.internal.TaskApiCall<any, any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zack>;
                public doExecute(param0: any, param1: com.google.android.gms.tasks.TaskCompletionSource<any>): void;
              }
              export class zacl extends com.google.android.gms.tasks.Continuation<java.lang.Boolean, java.lang.Void> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacl>;
                public then(param0: com.google.android.gms.tasks.Task<any>): any;
              }
              export class zacm<R> extends com.google.android.gms.common.api.TransformedResult<any>
                implements com.google.android.gms.common.api.ResultCallback<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacm<any>>;
                public constructor(param0: java.lang.ref.WeakReference<com.google.android.gms.common.api.GoogleApiClient>);
                public then(param0: com.google.android.gms.common.api.ResultTransform<any, any>): com.google.android.gms.common.api.TransformedResult<any>;
                public zaa(param0: com.google.android.gms.common.api.PendingResult<any>): void;
                public constructor();
                public onResult(param0: any): void;
                public andFinally(param0: com.google.android.gms.common.api.ResultCallbacks<any>): void;
              }
              export class zacn {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacn>;
                public run(): void;
              }
              export class zaco extends com.google.android.gms.internal.base.zal {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaco>;
                public constructor(param0: com.google.android.gms.common.api.internal.zacm<any>, param1: globalAndroid.os.Looper);
                public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
                public handleMessage(param0: globalAndroid.os.Message): void;
                public constructor();
                public constructor(param0: globalAndroid.os.Looper);
              }
              export class zacp {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacp>;
                public static zakw: com.google.android.gms.common.api.Status;
                public constructor(
                  param0: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>, com.google.android.gms.common.api.Api.Client>,
                );
                public release(): void;
                public zabx(): void;
              }
              export class zacq extends com.google.android.gms.common.api.internal.zacs {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacq>;
                public zac(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void;
              }
              export class zacr extends com.google.android.gms.common.api.internal.zacs {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacr>;
                public binderDied(): void;
                public zac(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void;
              }
              export class zacs {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zacs>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zacs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { zac(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void });
                public constructor();
                public zac(param0: com.google.android.gms.common.api.internal.BasePendingResult<any>): void;
              }
              export abstract class zad<T> extends com.google.android.gms.common.api.internal.zac {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zad<any>>;
                public zacm: com.google.android.gms.tasks.TaskCompletionSource<any>;
                public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource<any>);
                public zaa(param0: com.google.android.gms.common.api.Status): void;
                public constructor(param0: number);
                public zaa(param0: java.lang.RuntimeException): void;
                public zaa(param0: com.google.android.gms.common.api.internal.zaab, param1: boolean): void;
                public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
                public zad(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
              }
              export class zae<A> extends com.google.android.gms.common.api.internal.zab {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zae<any>>;
                public zaa(param0: com.google.android.gms.common.api.Status): void;
                public constructor(param0: number);
                public zaa(param0: java.lang.RuntimeException): void;
                public zaa(param0: com.google.android.gms.common.api.internal.zaab, param1: boolean): void;
                public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
                public constructor(param0: number, param1: any);
              }
              export class zaf extends com.google.android.gms.common.api.internal.zad<java.lang.Void> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaf>;
                public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource<any>);
                public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
                public constructor(param0: number);
                public zad(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.zabw,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Void>,
                );
                public zab(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): native.Array<com.google.android.gms.common.Feature>;
              }
              export class zag<ResultT> extends com.google.android.gms.common.api.internal.zac {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zag<any>>;
                public zaa(param0: com.google.android.gms.common.api.Status): void;
                public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
                public constructor(param0: number);
                public constructor(
                  param0: number,
                  param1: com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.common.api.Api.AnyClient, any>,
                  param2: com.google.android.gms.tasks.TaskCompletionSource<any>,
                  param3: com.google.android.gms.common.api.internal.StatusExceptionMapper,
                );
                public zaa(param0: java.lang.RuntimeException): void;
                public zaa(param0: com.google.android.gms.common.api.internal.zaab, param1: boolean): void;
                public zaa(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
                public zab(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): native.Array<com.google.android.gms.common.Feature>;
              }
              export class zah extends com.google.android.gms.common.api.internal.zad<java.lang.Boolean> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zah>;
                public constructor(param0: number, param1: com.google.android.gms.tasks.TaskCompletionSource<any>);
                public zac(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): boolean;
                public constructor(param0: number);
                public constructor(
                  param0: com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey<any>,
                  param1: com.google.android.gms.tasks.TaskCompletionSource<java.lang.Boolean>,
                );
                public zad(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): void;
                public zab(param0: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>): native.Array<com.google.android.gms.common.Feature>;
              }
              export class zai<O> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zai<any>>;
                public equals(param0: any): boolean;
                public zan(): string;
                public static zaa(
                  param0: com.google.android.gms.common.api.Api<any>,
                  param1: com.google.android.gms.common.api.Api.ApiOptions,
                ): com.google.android.gms.common.api.internal.zai<any>;
                public static zaa(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.api.internal.zai<any>;
                public hashCode(): number;
              }
              export class zaj extends com.google.android.gms.common.api.internal.zal {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaj>;
                public zao(): void;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public zaa(
                  param0: number,
                  param1: com.google.android.gms.common.api.GoogleApiClient,
                  param2: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                ): void;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
                public zaa(param0: number): void;
                public onStop(): void;
                public onStart(): void;
              }
              export module zaj {
                export class zaa extends com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
                  public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaj.zaa>;
                  public zacw: number;
                  public zacx: com.google.android.gms.common.api.GoogleApiClient;
                  public zacy: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener;
                  public constructor(
                    param0: com.google.android.gms.common.api.internal.zaj,
                    param1: number,
                    param2: com.google.android.gms.common.api.GoogleApiClient,
                    param3: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                  );
                  public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
                }
              }
              export class zak {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zak>;
                public constructor(param0: java.lang.Iterable<any>);
                public zap(): java.util.Set<com.google.android.gms.common.api.internal.zai<any>>;
                public getTask(): com.google.android.gms.tasks.Task<java.util.Map<com.google.android.gms.common.api.internal.zai<any>, string>>;
                public zaa(
                  param0: com.google.android.gms.common.api.internal.zai<any>,
                  param1: com.google.android.gms.common.ConnectionResult,
                  param2: string,
                ): void;
              }
              export abstract class zal extends com.google.android.gms.common.api.internal.LifecycleCallback {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zal>;
                public mStarted: boolean;
                public zade: java.util.concurrent.atomic.AtomicReference<com.google.android.gms.common.api.internal.zam>;
                public zacc: com.google.android.gms.common.GoogleApiAvailability;
                public zab(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
                public zao(): void;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public onCancel(param0: globalAndroid.content.DialogInterface): void;
                public zaq(): void;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: number): void;
                public onStop(): void;
                public constructor(param0: com.google.android.gms.common.api.internal.LifecycleFragment);
                public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
                public onStart(): void;
                public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
              }
              export class zam {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zam>;
              }
              export class zan {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zan>;
                public run(): void;
              }
              export class zao extends com.google.android.gms.common.api.internal.zabr {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zao>;
                public zas(): void;
              }
              export class zap extends java.lang.ThreadLocal<java.lang.Boolean> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zap>;
              }
              export class zaq
                implements
                  com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaq>;
                public mApi: com.google.android.gms.common.api.Api<any>;
                public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: boolean);
                public onConnectionSuspended(param0: number): void;
                public zaa(param0: com.google.android.gms.common.api.internal.zar): void;
              }
              export class zar extends com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zar>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.api.internal.zar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
                  onConnected(param0: globalAndroid.os.Bundle): void;
                  onConnectionSuspended(param0: number): void;
                });
                public constructor();
                public static CAUSE_SERVICE_DISCONNECTED: number;
                public static CAUSE_NETWORK_LOST: number;
                public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.common.api.Api<any>, param2: boolean): void;
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
              export class zas extends com.google.android.gms.common.api.internal.zabs {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zas>;
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public maybeSignOut(): void;
                public connect(): void;
                public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
                public isConnected(): boolean;
                public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public disconnect(): void;
                public zaw(): void;
                public static zaa(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.internal.zaaw,
                  param2: java.util.concurrent.locks.Lock,
                  param3: globalAndroid.os.Looper,
                  param4: com.google.android.gms.common.GoogleApiAvailabilityLight,
                  param5: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>, com.google.android.gms.common.api.Api.Client>,
                  param6: com.google.android.gms.common.internal.ClientSettings,
                  param7: java.util.Map<com.google.android.gms.common.api.Api<any>, java.lang.Boolean>,
                  param8: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, com.google.android.gms.signin.SignInOptions>,
                  param9: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>,
                ): com.google.android.gms.common.api.internal.zas;
                public isConnecting(): boolean;
              }
              export class zat {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zat>;
                public run(): void;
              }
              export class zau extends com.google.android.gms.common.api.internal.zabt {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zau>;
                public zac(param0: com.google.android.gms.common.ConnectionResult): void;
                public zab(param0: globalAndroid.os.Bundle): void;
                public zab(param0: number, param1: boolean): void;
              }
              export class zav extends com.google.android.gms.common.api.internal.zabt {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zav>;
                public zac(param0: com.google.android.gms.common.ConnectionResult): void;
                public zab(param0: globalAndroid.os.Bundle): void;
                public zab(param0: number, param1: boolean): void;
              }
              export class zaw<O> extends com.google.android.gms.common.api.GoogleApi<any> {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaw<any>>;
                public constructor(
                  param0: globalAndroid.app.Activity,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: any,
                  param3: com.google.android.gms.common.api.GoogleApi.Settings,
                );
                public zaab(): com.google.android.gms.common.api.Api.Client;
                public zaa(
                  param0: globalAndroid.os.Looper,
                  param1: com.google.android.gms.common.api.internal.GoogleApiManager.zaa<any>,
                ): com.google.android.gms.common.api.Api.Client;
                public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
                /** @deprecated */
                public constructor(
                  param0: globalAndroid.app.Activity,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: any,
                  param3: com.google.android.gms.common.api.internal.StatusExceptionMapper,
                );
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: any,
                  param3: com.google.android.gms.common.api.GoogleApi.Settings,
                );
                /** @deprecated */
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: any,
                  param3: com.google.android.gms.common.api.internal.StatusExceptionMapper,
                );
                public zaa(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler): com.google.android.gms.common.api.internal.zace;
                /** @deprecated */
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: any,
                  param3: globalAndroid.os.Looper,
                  param4: com.google.android.gms.common.api.internal.StatusExceptionMapper,
                );
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: com.google.android.gms.common.api.Api<any>,
                  param2: globalAndroid.os.Looper,
                  param3: com.google.android.gms.common.api.Api.Client,
                  param4: com.google.android.gms.common.api.internal.zaq,
                  param5: com.google.android.gms.common.internal.ClientSettings,
                  param6: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, com.google.android.gms.signin.SignInOptions>,
                );
              }
              export class zax extends com.google.android.gms.common.api.internal.zabs {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zax>;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: java.util.concurrent.locks.Lock,
                  param2: globalAndroid.os.Looper,
                  param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                  param4: java.util.Map<com.google.android.gms.common.api.Api.AnyClientKey<any>, com.google.android.gms.common.api.Api.Client>,
                  param5: com.google.android.gms.common.internal.ClientSettings,
                  param6: java.util.Map<com.google.android.gms.common.api.Api<any>, java.lang.Boolean>,
                  param7: com.google.android.gms.common.api.Api.AbstractClientBuilder<any, com.google.android.gms.signin.SignInOptions>,
                  param8: java.util.ArrayList<com.google.android.gms.common.api.internal.zaq>,
                  param9: com.google.android.gms.common.api.internal.zaaw,
                  param10: boolean,
                );
                public enqueue(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public blockingConnect(param0: number, param1: java.util.concurrent.TimeUnit): com.google.android.gms.common.ConnectionResult;
                public blockingConnect(): com.google.android.gms.common.ConnectionResult;
                public maybeSignOut(): void;
                public connect(): void;
                public maybeSignIn(param0: com.google.android.gms.common.api.internal.SignInConnectionListener): boolean;
                public isConnected(): boolean;
                public getConnectionResult(param0: com.google.android.gms.common.api.Api<any>): com.google.android.gms.common.ConnectionResult;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public execute(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>,
                ): com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any, any>;
                public disconnect(): void;
                public zaw(): void;
                public isConnecting(): boolean;
              }
              export class zay {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zay>;
              }
              export class zaz extends com.google.android.gms.tasks.OnCompleteListener<
                java.util.Map<com.google.android.gms.common.api.internal.zai<any>, string>
              > {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zaz>;
                public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
                public onComplete(param0: com.google.android.gms.tasks.Task<java.util.Map<com.google.android.gms.common.api.internal.zai<any>, string>>): void;
              }
              export class zza implements com.google.android.gms.common.api.internal.LifecycleFragment {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zza>;
                public onResume(): void;
                public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
                public constructor();
                public onDestroy(): void;
                public onStop(): void;
                public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
                public isCreated(): boolean;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public getCallbackOrNull(param0: string, param1: java.lang.Class<any>): com.google.android.gms.common.api.internal.LifecycleCallback;
                public isStarted(): boolean;
                public getLifecycleActivity(): globalAndroid.app.Activity;
                public onStart(): void;
                public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
                public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
              }
              export class zzb {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzb>;
                public run(): void;
              }
              export class zzc implements com.google.android.gms.common.api.internal.LifecycleFragment {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzc>;
                public onResume(): void;
                public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
                public constructor();
                public onDestroy(): void;
                public onStop(): void;
                public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
                public isCreated(): boolean;
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public getCallbackOrNull(param0: string, param1: java.lang.Class<any>): com.google.android.gms.common.api.internal.LifecycleCallback;
                public isStarted(): boolean;
                public onStart(): void;
                public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
                public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
                public getLifecycleActivity(): globalAndroid.app.Activity;
              }
              export class zzd {
                public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzd>;
                public run(): void;
              }
            }
          }
          export module api {
            export class zaa extends com.google.android.gms.common.api.PendingResult.StatusListener {
              public static class: java.lang.Class<com.google.android.gms.common.api.zaa>;
              public onComplete(param0: com.google.android.gms.common.api.Status): void;
            }
          }
          export module api {
            export class zab {
              public static class: java.lang.Class<com.google.android.gms.common.api.zab>;
            }
          }
          export module api {
            export abstract class zac {
              public static class: java.lang.Class<com.google.android.gms.common.api.zac>;
              public constructor();
              public remove(param0: number): void;
            }
          }
          export module api {
            export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Scope> {
              public static class: java.lang.Class<com.google.android.gms.common.api.zza>;
              public constructor();
            }
          }
          export module api {
            export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.api.Status> {
              public static class: java.lang.Class<com.google.android.gms.common.api.zzb>;
              public constructor();
            }
          }
          export module config {
            export abstract class GservicesValue<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.config.GservicesValue<any>>;
              public mKey: string;
              public static value(param0: string, param1: string): com.google.android.gms.common.config.GservicesValue<string>;
              /** @deprecated */
              public getBinderSafe(): T;
              public constructor(param0: string, param1: T);
              public static value(param0: string, param1: java.lang.Float): com.google.android.gms.common.config.GservicesValue<java.lang.Float>;
              public resetOverride(): void;
              public static value(param0: string, param1: java.lang.Long): com.google.android.gms.common.config.GservicesValue<java.lang.Long>;
              public static value(param0: string, param1: java.lang.Integer): com.google.android.gms.common.config.GservicesValue<java.lang.Integer>;
              public static isInitialized(): boolean;
              public get(): T;
              public static value(param0: string, param1: boolean): com.google.android.gms.common.config.GservicesValue<java.lang.Boolean>;
              public override(param0: T): void;
            }
            export module GservicesValue {
              export class zza {
                public static class: java.lang.Class<com.google.android.gms.common.config.GservicesValue.zza>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.config.GservicesValue$zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zza(param0: string, param1: java.lang.Boolean): java.lang.Boolean;
                  getLong(param0: string, param1: java.lang.Long): java.lang.Long;
                  zza(param0: string, param1: java.lang.Integer): java.lang.Integer;
                  zza(param0: string, param1: java.lang.Float): java.lang.Float;
                  getString(param0: string, param1: string): string;
                });
                public constructor();
                public getString(param0: string, param1: string): string;
                public getLong(param0: string, param1: java.lang.Long): java.lang.Long;
              }
            }
          }
          export module config {
            export class zza extends com.google.android.gms.common.config.GservicesValue<java.lang.Boolean> {
              public static class: java.lang.Class<com.google.android.gms.common.config.zza>;
            }
          }
          export module config {
            export class zzb extends com.google.android.gms.common.config.GservicesValue<java.lang.Long> {
              public static class: java.lang.Class<com.google.android.gms.common.config.zzb>;
            }
          }
          export module config {
            export class zzc extends com.google.android.gms.common.config.GservicesValue<java.lang.Integer> {
              public static class: java.lang.Class<com.google.android.gms.common.config.zzc>;
            }
          }
          export module config {
            export class zzd extends com.google.android.gms.common.config.GservicesValue<java.lang.Float> {
              public static class: java.lang.Class<com.google.android.gms.common.config.zzd>;
            }
          }
          export module config {
            export class zze extends com.google.android.gms.common.config.GservicesValue<string> {
              public static class: java.lang.Class<com.google.android.gms.common.config.zze>;
            }
          }
          export module data {
            export abstract class AbstractDataBuffer<T> extends com.google.android.gms.common.data.DataBuffer<any> {
              public static class: java.lang.Class<com.google.android.gms.common.data.AbstractDataBuffer<any>>;
              public mDataHolder: com.google.android.gms.common.data.DataHolder;
              public singleRefIterator(): java.util.Iterator<any>;
              public getMetadata(): globalAndroid.os.Bundle;
              public iterator(): java.util.Iterator<any>;
              /** @deprecated */
              public close(): void;
              public get(param0: number): any;
              public release(): void;
              /** @deprecated */
              public isClosed(): boolean;
              public constructor(param0: com.google.android.gms.common.data.DataHolder);
              public getCount(): number;
            }
          }
          export module data {
            export class BitmapTeleporter extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
              implements com.google.android.gms.common.internal.ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.data.BitmapTeleporter>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.BitmapTeleporter>;
              public constructor();
              public constructor(param0: globalAndroid.graphics.Bitmap);
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public release(): void;
              public setTempDir(param0: java.io.File): void;
              public get(): globalAndroid.graphics.Bitmap;
            }
          }
          export module data {
            export class DataBuffer<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.data.DataBuffer<any>>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.data.DataBuffer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getCount(): number;
                get(param0: number): T;
                getMetadata(): globalAndroid.os.Bundle;
                close(): void;
                isClosed(): boolean;
                iterator(): java.util.Iterator<T>;
                singleRefIterator(): java.util.Iterator<T>;
                release(): void;
                release(): void;
              });
              public constructor();
              public get(param0: number): T;
              public getMetadata(): globalAndroid.os.Bundle;
              /** @deprecated */
              public close(): void;
              public release(): void;
              /** @deprecated */
              public isClosed(): boolean;
              public singleRefIterator(): java.util.Iterator<T>;
              public getCount(): number;
              public iterator(): java.util.Iterator<T>;
            }
          }
          export module data {
            export class DataBufferIterator<T> extends java.util.Iterator<any> {
              public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferIterator<any>>;
              public zalj: com.google.android.gms.common.data.DataBuffer<any>;
              public zalk: number;
              public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
              public hasNext(): boolean;
              public remove(): void;
              public next(): any;
            }
          }
          export module data {
            export class DataBufferObserver {
              public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onDataChanged(): void;
                onDataRangeChanged(param0: number, param1: number): void;
                onDataRangeInserted(param0: number, param1: number): void;
                onDataRangeRemoved(param0: number, param1: number): void;
                onDataRangeMoved(param0: number, param1: number, param2: number): void;
              });
              public constructor();
              public onDataRangeInserted(param0: number, param1: number): void;
              public onDataChanged(): void;
              public onDataRangeChanged(param0: number, param1: number): void;
              public onDataRangeRemoved(param0: number, param1: number): void;
              public onDataRangeMoved(param0: number, param1: number, param2: number): void;
            }
            export module DataBufferObserver {
              export class Observable {
                public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserver.Observable>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.data.DataBufferObserver$Observable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
                  removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
                });
                public constructor();
                public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
                public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
              }
            }
          }
          export module data {
            export class DataBufferObserverSet
              implements com.google.android.gms.common.data.DataBufferObserver, com.google.android.gms.common.data.DataBufferObserver.Observable {
              public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferObserverSet>;
              public constructor();
              public addObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
              public removeObserver(param0: com.google.android.gms.common.data.DataBufferObserver): void;
              public hasObservers(): boolean;
              public onDataRangeInserted(param0: number, param1: number): void;
              public clear(): void;
              public onDataChanged(): void;
              public onDataRangeChanged(param0: number, param1: number): void;
              public onDataRangeRemoved(param0: number, param1: number): void;
              public onDataRangeMoved(param0: number, param1: number, param2: number): void;
            }
          }
          export module data {
            export class DataBufferRef {
              public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferRef>;
              public mDataHolder: com.google.android.gms.common.data.DataHolder;
              public mDataRow: number;
              public getInteger(param0: string): number;
              public hasColumn(param0: string): boolean;
              public hashCode(): number;
              public getFloat(param0: string): number;
              public parseUri(param0: string): globalAndroid.net.Uri;
              public getByteArray(param0: string): native.Array<number>;
              public copyToBuffer(param0: string, param1: globalAndroid.database.CharArrayBuffer): void;
              public getDouble(param0: string): number;
              public hasNull(param0: string): boolean;
              public isDataValid(): boolean;
              public getLong(param0: string): number;
              public getString(param0: string): string;
              public zag(param0: number): void;
              public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: number);
              public getDataRow(): number;
              public equals(param0: any): boolean;
              public getBoolean(param0: string): boolean;
            }
          }
          export module data {
            export class DataBufferSafeParcelable<T> extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
              public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferSafeParcelable<any>>;
              public singleRefIterator(): java.util.Iterator<any>;
              public constructor(param0: com.google.android.gms.common.data.DataHolder, param1: globalAndroid.os.Parcelable.Creator<any>);
              public getMetadata(): globalAndroid.os.Bundle;
              public iterator(): java.util.Iterator<any>;
              /** @deprecated */
              public close(): void;
              public get(param0: number): any;
              public static addValue(
                param0: com.google.android.gms.common.data.DataHolder.Builder,
                param1: com.google.android.gms.common.internal.safeparcel.SafeParcelable,
              ): void;
              public release(): void;
              /** @deprecated */
              public isClosed(): boolean;
              public constructor(param0: com.google.android.gms.common.data.DataHolder);
              public getCount(): number;
              public static buildDataHolder(): com.google.android.gms.common.data.DataHolder.Builder;
            }
          }
          export module data {
            export class DataBufferUtils {
              public static class: java.lang.Class<com.google.android.gms.common.data.DataBufferUtils>;
              public static KEY_NEXT_PAGE_TOKEN: string;
              public static KEY_PREV_PAGE_TOKEN: string;
              public static freezeAndClose(param0: com.google.android.gms.common.data.DataBuffer<any>): java.util.ArrayList<any>;
              public static hasData(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
              public static hasPrevPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
              public static hasNextPage(param0: com.google.android.gms.common.data.DataBuffer<any>): boolean;
            }
          }
          export module data {
            export class DataHolder extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.DataHolder>;
              public constructor();
              public getString(param0: string, param1: number, param2: number): string;
              public close(): void;
              public static empty(param0: number): com.google.android.gms.common.data.DataHolder;
              public hasColumn(param0: string): boolean;
              public hasNull(param0: string, param1: number, param2: number): boolean;
              public constructor(param0: globalAndroid.database.Cursor, param1: number, param2: globalAndroid.os.Bundle);
              public finalize(): void;
              public zaca(): void;
              public getLong(param0: string, param1: number, param2: number): number;
              public isClosed(): boolean;
              public zab(param0: string, param1: number, param2: number): number;
              public getCount(): number;
              public zaa(param0: string, param1: number, param2: number, param3: globalAndroid.database.CharArrayBuffer): void;
              public constructor(
                param0: native.Array<string>,
                param1: native.Array<globalAndroid.database.CursorWindow>,
                param2: number,
                param3: globalAndroid.os.Bundle,
              );
              public getStatusCode(): number;
              public getMetadata(): globalAndroid.os.Bundle;
              public getInteger(param0: string, param1: number, param2: number): number;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public static builder(param0: native.Array<string>): com.google.android.gms.common.data.DataHolder.Builder;
              public zaa(param0: string, param1: number, param2: number): number;
              public getBoolean(param0: string, param1: number, param2: number): boolean;
              public getByteArray(param0: string, param1: number, param2: number): native.Array<number>;
              public getWindowIndex(param0: number): number;
            }
            export module DataHolder {
              export class Builder {
                public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder.Builder>;
                public build(param0: number, param1: globalAndroid.os.Bundle): com.google.android.gms.common.data.DataHolder;
                public zaa(param0: java.util.HashMap<string, any>): com.google.android.gms.common.data.DataHolder.Builder;
                public build(param0: number): com.google.android.gms.common.data.DataHolder;
                public withRow(param0: globalAndroid.content.ContentValues): com.google.android.gms.common.data.DataHolder.Builder;
              }
              export class zaa {
                public static class: java.lang.Class<com.google.android.gms.common.data.DataHolder.zaa>;
                public constructor(param0: string);
              }
            }
          }
          export module data {
            export abstract class EntityBuffer<T> extends com.google.android.gms.common.data.AbstractDataBuffer<any> {
              public static class: java.lang.Class<com.google.android.gms.common.data.EntityBuffer<any>>;
              public singleRefIterator(): java.util.Iterator<any>;
              public getMetadata(): globalAndroid.os.Bundle;
              public getChildDataMarkerColumn(): string;
              public iterator(): java.util.Iterator<any>;
              public getPrimaryDataMarkerColumn(): string;
              /** @deprecated */
              public close(): void;
              public get(param0: number): any;
              public release(): void;
              /** @deprecated */
              public isClosed(): boolean;
              public constructor(param0: com.google.android.gms.common.data.DataHolder);
              public getCount(): number;
              public getEntry(param0: number, param1: number): any;
            }
          }
          export module data {
            export class Freezable<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.data.Freezable<any>>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.data.Freezable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { freeze(): T; isDataValid(): boolean });
              public constructor();
              public isDataValid(): boolean;
              public freeze(): T;
            }
          }
          export module data {
            export class FreezableUtils {
              public static class: java.lang.Class<com.google.android.gms.common.data.FreezableUtils>;
              public constructor();
              public static freezeIterable(param0: java.lang.Iterable<any>): java.util.ArrayList<any>;
              public static freeze(param0: java.util.ArrayList<any>): java.util.ArrayList<any>;
              public static freeze(param0: native.Array<com.google.android.gms.common.data.Freezable<any>>): java.util.ArrayList<any>;
            }
          }
          export module data {
            export class SingleRefDataBufferIterator<T> extends com.google.android.gms.common.data.DataBufferIterator<any> {
              public static class: java.lang.Class<com.google.android.gms.common.data.SingleRefDataBufferIterator<any>>;
              public constructor(param0: com.google.android.gms.common.data.DataBuffer<any>);
              public next(): any;
            }
          }
          export module data {
            export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.BitmapTeleporter> {
              public static class: java.lang.Class<com.google.android.gms.common.data.zaa>;
              public constructor();
            }
          }
          export module data {
            export class zab extends com.google.android.gms.common.data.DataHolder.Builder {
              public static class: java.lang.Class<com.google.android.gms.common.data.zab>;
              public withRow(param0: globalAndroid.content.ContentValues): com.google.android.gms.common.data.DataHolder.Builder;
              public zaa(param0: java.util.HashMap<string, any>): com.google.android.gms.common.data.DataHolder.Builder;
            }
          }
          export module data {
            export class zac extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.data.DataHolder> {
              public static class: java.lang.Class<com.google.android.gms.common.data.zac>;
              public constructor();
            }
          }
          export module images {
            export class ImageManager {
              public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager>;
              public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri): void;
              public loadImage(
                param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener,
                param1: globalAndroid.net.Uri,
                param2: number,
              ): void;
              public loadImage(param0: globalAndroid.widget.ImageView, param1: number): void;
              public loadImage(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri): void;
              public loadImage(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri, param2: number): void;
              public static create(param0: globalAndroid.content.Context): com.google.android.gms.common.images.ImageManager;
            }
            export module ImageManager {
              export class ImageReceiver {
                public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.ImageReceiver>;
                public zace(): void;
                public zab(param0: com.google.android.gms.common.images.zaa): void;
                public zac(param0: com.google.android.gms.common.images.zaa): void;
                public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
              }
              export class OnImageLoadedListener {
                public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.OnImageLoadedListener>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.images.ImageManager$OnImageLoadedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
                });
                public constructor();
                public onImageLoaded(param0: globalAndroid.net.Uri, param1: globalAndroid.graphics.drawable.Drawable, param2: boolean): void;
              }
              export class zaa extends androidx.collection.LruCache<com.google.android.gms.common.images.zab, globalAndroid.graphics.Bitmap> {
                public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zaa>;
              }
              export class zab {
                public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zab>;
                public constructor(
                  param0: com.google.android.gms.common.images.ImageManager,
                  param1: globalAndroid.net.Uri,
                  param2: globalAndroid.os.ParcelFileDescriptor,
                );
                public run(): void;
              }
              export class zac {
                public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zac>;
                public constructor(param0: com.google.android.gms.common.images.ImageManager, param1: com.google.android.gms.common.images.zaa);
                public run(): void;
              }
              export class zad {
                public static class: java.lang.Class<com.google.android.gms.common.images.ImageManager.zad>;
                public constructor(
                  param0: com.google.android.gms.common.images.ImageManager,
                  param1: globalAndroid.net.Uri,
                  param2: globalAndroid.graphics.Bitmap,
                  param3: boolean,
                  param4: java.util.concurrent.CountDownLatch,
                );
                public run(): void;
              }
            }
          }
          export module images {
            export class Size {
              public static class: java.lang.Class<com.google.android.gms.common.images.Size>;
              public getWidth(): number;
              public getHeight(): number;
              public constructor(param0: number, param1: number);
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public static parseSize(param0: string): com.google.android.gms.common.images.Size;
            }
          }
          export module images {
            export class WebImage extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.images.WebImage>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.images.WebImage>;
              public constructor();
              public getWidth(): number;
              public getHeight(): number;
              public constructor(param0: globalAndroid.net.Uri);
              public getUrl(): globalAndroid.net.Uri;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: globalAndroid.net.Uri, param1: number, param2: number);
              public constructor(param0: org.json.JSONObject);
              public hashCode(): number;
              public toJson(): org.json.JSONObject;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
          export module images {
            export abstract class zaa {
              public static class: java.lang.Class<com.google.android.gms.common.images.zaa>;
              public zamw: number;
              public constructor(param0: globalAndroid.net.Uri, param1: number);
              public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
              public zaa(param0: boolean, param1: boolean): boolean;
            }
          }
          export module images {
            export class zab {
              public static class: java.lang.Class<com.google.android.gms.common.images.zab>;
              public uri: globalAndroid.net.Uri;
              public constructor(param0: globalAndroid.net.Uri);
              public hashCode(): number;
              public equals(param0: any): boolean;
            }
          }
          export module images {
            export class zac extends com.google.android.gms.common.images.zaa {
              public static class: java.lang.Class<com.google.android.gms.common.images.zac>;
              public constructor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.net.Uri);
              public hashCode(): number;
              public constructor(param0: globalAndroid.net.Uri, param1: number);
              public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
              public equals(param0: any): boolean;
              public zaa(param0: boolean, param1: boolean): boolean;
              public constructor(param0: globalAndroid.widget.ImageView, param1: number);
            }
          }
          export module images {
            export class zad extends com.google.android.gms.common.images.zaa {
              public static class: java.lang.Class<com.google.android.gms.common.images.zad>;
              public hashCode(): number;
              public constructor(param0: globalAndroid.net.Uri, param1: number);
              public zaa(param0: globalAndroid.graphics.drawable.Drawable, param1: boolean, param2: boolean, param3: boolean): void;
              public equals(param0: any): boolean;
              public constructor(param0: com.google.android.gms.common.images.ImageManager.OnImageLoadedListener, param1: globalAndroid.net.Uri);
              public zaa(param0: boolean, param1: boolean): boolean;
            }
          }
          export module images {
            export class zae extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.images.WebImage> {
              public static class: java.lang.Class<com.google.android.gms.common.images.zae>;
              public constructor();
            }
          }
          export module internal {
            export class AccountAccessor extends com.google.android.gms.common.internal.IAccountAccessor.Stub {
              public static class: java.lang.Class<com.google.android.gms.common.internal.AccountAccessor>;
              public getAccount(): globalAndroid.accounts.Account;
              public static getAccountBinderSafe(param0: com.google.android.gms.common.internal.IAccountAccessor): globalAndroid.accounts.Account;
              public equals(param0: any): boolean;
            }
            export class AccountType {
              public static class: java.lang.Class<com.google.android.gms.common.internal.AccountType>;
              public static GOOGLE: string;
            }
            export class ApiExceptionUtil {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ApiExceptionUtil>;
              public constructor();
              public static fromStatus(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
            }
            export class Asserts {
              public static class: java.lang.Class<com.google.android.gms.common.internal.Asserts>;
              public static checkNotNull(param0: any, param1: any): void;
              public static checkState(param0: boolean, param1: any): void;
              public static checkNotMainThread(param0: string): void;
              public static checkNull(param0: any): void;
              public static checkNotNull(param0: any): void;
              public static checkMainThread(param0: string): void;
              public static checkState(param0: boolean): void;
            }
            export class AuthAccountRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.AuthAccountRequest>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.AuthAccountRequest>;
              public constructor();
              public constructor(param0: globalAndroid.accounts.Account, param1: java.util.Set<com.google.android.gms.common.api.Scope>);
              public setPolicyAction(param0: java.lang.Integer): com.google.android.gms.common.internal.AuthAccountRequest;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
              public getAccount(): globalAndroid.accounts.Account;
              /** @deprecated */
              public constructor(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
              );
              public setOauthPolicy(param0: java.lang.Integer): com.google.android.gms.common.internal.AuthAccountRequest;
              public getPolicyAction(): java.lang.Integer;
              public getOauthPolicy(): java.lang.Integer;
            }
            export abstract class BaseGmsClient<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient<any>>;
              public static CONNECT_STATE_DISCONNECTED: number;
              public static CONNECT_STATE_CONNECTED: number;
              public static CONNECT_STATE_DISCONNECTING: number;
              public static KEY_PENDING_INTENT: string;
              public static DEFAULT_ACCOUNT: string;
              public static GOOGLE_PLUS_REQUIRED_FEATURES: native.Array<string>;
              public getStartServiceAction(): string;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public onConnectedLocked(param0: T): void;
              public getServiceDescriptor(): string;
              public getLooper(): globalAndroid.os.Looper;
              public onConnectionSuspended(param0: number): void;
              public checkConnected(): void;
              public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              public onPostInitHandler(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle, param3: number): void;
              public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param7: string,
              );
              public getAccount(): globalAndroid.accounts.Account;
              public createServiceInterface(param0: globalAndroid.os.IBinder): T;
              public getEndpointPackageName(): string;
              public triggerConnectionSuspended(param0: number): void;
              public getSignInIntent(): globalAndroid.content.Intent;
              public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
              public getApiFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public getConnectionHint(): globalAndroid.os.Bundle;
              public getService(): T;
              public getLocalStartServiceAction(): string;
              public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
              public getStartServicePackage(): string;
              public getContext(): globalAndroid.content.Context;
              public requiresAccount(): boolean;
              public checkAvailabilityAndConnect(): void;
              public disconnect(): void;
              public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public triggerNotAvailable(
                param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks,
                param1: number,
                param2: globalAndroid.app.PendingIntent,
              ): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param5: string,
              );
              public isConnecting(): boolean;
              public getMinApkVersion(): number;
              public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
              );
              public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
              ): void;
              public requiresSignIn(): boolean;
            }
            export module BaseGmsClient {
              export class BaseConnectionCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$BaseConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onConnected(param0: globalAndroid.os.Bundle): void; onConnectionSuspended(param0: number): void });
                public constructor();
                public onConnected(param0: globalAndroid.os.Bundle): void;
                public onConnectionSuspended(param0: number): void;
              }
              export class BaseOnConnectionFailedListener {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$BaseOnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void });
                public constructor();
                public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
              }
              export class ConnectionProgressReportCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$ConnectionProgressReportCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void });
                public constructor();
                public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
              }
              export class LegacyClientCallbackAdapter extends com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.LegacyClientCallbackAdapter>;
                public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
                public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>);
              }
              export class SignOutCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$SignOutCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onSignOutComplete(): void });
                public constructor();
                public onSignOutComplete(): void;
              }
              export abstract class zza extends com.google.android.gms.common.internal.BaseGmsClient.zzc<java.lang.Boolean> {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zza>;
                public constructor(param0: any);
                public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: globalAndroid.os.Bundle);
              }
              export class zzb extends com.google.android.gms.internal.common.zze {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzb>;
                public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: globalAndroid.os.Looper);
                public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
                public handleMessage(param0: globalAndroid.os.Message): void;
                public constructor();
                public constructor(param0: globalAndroid.os.Looper);
              }
              export abstract class zzc<TListener> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzc<any>>;
                public removeListener(): void;
                public constructor(param0: TListener);
                public unregister(): void;
              }
              export class zzd extends com.google.android.gms.common.internal.IGmsCallbacks.zza {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzd>;
                public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number);
                public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
                public constructor();
                public constructor(param0: string);
              }
              export class zze {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zze>;
                public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
                public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number);
                public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
              }
              export class zzf extends java.lang.Object /* com.google.android.gms.common.internal.BaseGmsClient.zza*/ {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzf>;
                public constructor(param0: any);
                public constructor(
                  param0: com.google.android.gms.common.internal.BaseGmsClient<any>,
                  param1: number,
                  param2: globalAndroid.os.IBinder,
                  param3: globalAndroid.os.Bundle,
                );
                public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: globalAndroid.os.Bundle);
              }
              export class zzg extends java.lang.Object /* com.google.android.gms.common.internal.BaseGmsClient.zza*/ {
                public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzg>;
                public constructor(param0: any);
                public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: globalAndroid.os.Bundle);
              }
            }
            export class BinderWrapper {
              public static class: java.lang.Class<com.google.android.gms.common.internal.BinderWrapper>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.BinderWrapper>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public constructor(param0: globalAndroid.os.IBinder);
            }
            export class ClientIdentity extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ClientIdentity>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ClientIdentity>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public constructor(param0: number, param1: string);
            }
            export class ClientSettings {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings>;
              public static KEY_CLIENT_SESSION_ID: string;
              public getClientSessionId(): java.lang.Integer;
              public getGravityForPopups(): number;
              public getRealClientPackageName(): string;
              public setClientSessionId(param0: java.lang.Integer): void;
              public static createDefault(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.ClientSettings;
              public getViewForPopups(): globalAndroid.view.View;
              public getOptionalApiSettings(): java.util.Map<
                com.google.android.gms.common.api.Api<any>,
                com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings
              >;
              public getRequiredScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
              public getRealClientClassName(): string;
              public getAccountOrDefault(): globalAndroid.accounts.Account;
              public getApplicableScopes(param0: com.google.android.gms.common.api.Api<any>): java.util.Set<com.google.android.gms.common.api.Scope>;
              /** @deprecated */
              public getAccountName(): string;
              public getAccount(): globalAndroid.accounts.Account;
              public getAllRequestedScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
              public getSignInOptions(): com.google.android.gms.signin.SignInOptions;
              public constructor(
                param0: globalAndroid.accounts.Account,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
                param2: java.util.Map<com.google.android.gms.common.api.Api<any>, com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings>,
                param3: number,
                param4: globalAndroid.view.View,
                param5: string,
                param6: string,
                param7: com.google.android.gms.signin.SignInOptions,
              );
            }
            export module ClientSettings {
              export class Builder {
                public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings.Builder>;
                public setGravityForPopups(param0: number): com.google.android.gms.common.internal.ClientSettings.Builder;
                public setRealClientClassName(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
                public setAccount(param0: globalAndroid.accounts.Account): com.google.android.gms.common.internal.ClientSettings.Builder;
                public setSignInOptions(param0: com.google.android.gms.signin.SignInOptions): com.google.android.gms.common.internal.ClientSettings.Builder;
                public build(): com.google.android.gms.common.internal.ClientSettings;
                public setViewForPopups(param0: globalAndroid.view.View): com.google.android.gms.common.internal.ClientSettings.Builder;
                public addAllRequiredScopes(
                  param0: java.util.Collection<com.google.android.gms.common.api.Scope>,
                ): com.google.android.gms.common.internal.ClientSettings.Builder;
                public setOptionalApiSettingsMap(
                  param0: java.util.Map<com.google.android.gms.common.api.Api<any>, com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings>,
                ): com.google.android.gms.common.internal.ClientSettings.Builder;
                public addRequiredScope(param0: com.google.android.gms.common.api.Scope): com.google.android.gms.common.internal.ClientSettings.Builder;
                public constructor();
                public setRealClientPackageName(param0: string): com.google.android.gms.common.internal.ClientSettings.Builder;
              }
              export class OptionalApiSettings {
                public static class: java.lang.Class<com.google.android.gms.common.internal.ClientSettings.OptionalApiSettings>;
                public mScopes: java.util.Set<com.google.android.gms.common.api.Scope>;
                public constructor(param0: java.util.Set<com.google.android.gms.common.api.Scope>);
              }
            }
            export class ConnectionErrorMessages {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ConnectionErrorMessages>;
              public static getErrorMessage(param0: globalAndroid.content.Context, param1: number): string;
              public static getAppName(param0: globalAndroid.content.Context): string;
              public static getErrorTitle(param0: globalAndroid.content.Context, param1: number): string;
              public static getDefaultNotificationChannelName(param0: globalAndroid.content.Context): string;
              public static getErrorDialogButtonMessage(param0: globalAndroid.content.Context, param1: number): string;
              public static getErrorNotificationMessage(param0: globalAndroid.content.Context, param1: number): string;
              public static getErrorNotificationTitle(param0: globalAndroid.content.Context, param1: number): string;
            }
            export class Constants {
              public static class: java.lang.Class<com.google.android.gms.common.internal.Constants>;
              public static KEY_GMS_ERROR_CODE: string;
              public static KEY_NETWORK_TO_USE: string;
              public static ACTION_LOAD_IMAGE: string;
              public static EXTRA_URI: string;
              public static EXTRA_RESULT_RECEIVER: string;
              public static EXTRA_PRIORITY: string;
              public constructor();
            }
            export abstract class DialogRedirect {
              public static class: java.lang.Class<com.google.android.gms.common.internal.DialogRedirect>;
              public constructor();
              public static getInstance(
                param0: androidx.fragment.app.Fragment,
                param1: globalAndroid.content.Intent,
                param2: number,
              ): com.google.android.gms.common.internal.DialogRedirect;
              public redirect(): void;
              public static getInstance(
                param0: globalAndroid.app.Activity,
                param1: globalAndroid.content.Intent,
                param2: number,
              ): com.google.android.gms.common.internal.DialogRedirect;
              public static getInstance(
                param0: com.google.android.gms.common.api.internal.LifecycleFragment,
                param1: globalAndroid.content.Intent,
                param2: number,
              ): com.google.android.gms.common.internal.DialogRedirect;
              public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
            }
            export abstract class DowngradeableSafeParcel extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
              implements com.google.android.gms.common.internal.ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.DowngradeableSafeParcel>;
              public constructor();
              public static canUnparcelSafely(param0: string): boolean;
              public setShouldDowngrade(param0: boolean): void;
              public prepareForClientVersion(param0: number): boolean;
              public static getUnparcelClientVersion(): java.lang.Integer;
              public shouldDowngrade(): boolean;
            }
            export abstract class FallbackServiceBroker extends com.google.android.gms.common.internal.IGmsServiceBroker.Stub {
              public static class: java.lang.Class<com.google.android.gms.common.internal.FallbackServiceBroker>;
              public constructor();
              public getService(
                param0: com.google.android.gms.common.internal.IGmsCallbacks,
                param1: com.google.android.gms.common.internal.GetServiceRequest,
              ): void;
            }
            export class GetServiceRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.GetServiceRequest>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.GetServiceRequest>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getExtraArgs(): globalAndroid.os.Bundle;
              public constructor(param0: number);
            }
            export abstract class GmsClient<T> extends com.google.android.gms.common.internal.BaseGmsClient<any> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClient<any>>;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              public validateScopes(param0: java.util.Set<com.google.android.gms.common.api.Scope>): java.util.Set<com.google.android.gms.common.api.Scope>;
              public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param7: string,
              );
              public getAccount(): globalAndroid.accounts.Account;
              public getClientSettings(): com.google.android.gms.common.internal.ClientSettings;
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public requiresAccount(): boolean;
              public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param5: string,
              );
              public isConnecting(): boolean;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
              );
              public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
              ): void;
              public requiresSignIn(): boolean;
            }
            export class GmsClientEventManager {
              public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientEventManager>;
              public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
              public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
              public onUnintentionalDisconnection(param0: number): void;
              public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
              public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
              public disableCallbacks(): void;
              public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
              public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
              public onConnectionSuccess(): void;
              public onConnectionFailure(param0: com.google.android.gms.common.ConnectionResult): void;
              public handleMessage(param0: globalAndroid.os.Message): boolean;
              public constructor(param0: globalAndroid.os.Looper, param1: com.google.android.gms.common.internal.GmsClientEventManager.GmsClientEventState);
              public onConnectionSuccess(param0: globalAndroid.os.Bundle): void;
              public enableCallbacks(): void;
              public areCallbacksEnabled(): boolean;
            }
            export module GmsClientEventManager {
              export class GmsClientEventState {
                public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientEventManager.GmsClientEventState>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.GmsClientEventManager$GmsClientEventState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { isConnected(): boolean; getConnectionHint(): globalAndroid.os.Bundle });
                public constructor();
                public getConnectionHint(): globalAndroid.os.Bundle;
                public isConnected(): boolean;
              }
            }
            export abstract class GmsClientSupervisor {
              public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientSupervisor>;
              public constructor();
              public bindService(param0: string, param1: globalAndroid.content.ServiceConnection, param2: string): boolean;
              public unbindService(param0: globalAndroid.content.ComponentName, param1: globalAndroid.content.ServiceConnection, param2: string): void;
              public unbindService(param0: string, param1: globalAndroid.content.ServiceConnection, param2: string): void;
              public bindService(param0: globalAndroid.content.ComponentName, param1: globalAndroid.content.ServiceConnection, param2: string): boolean;
              public static getInstance(param0: globalAndroid.content.Context): com.google.android.gms.common.internal.GmsClientSupervisor;
            }
            export module GmsClientSupervisor {
              export class zza {
                public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientSupervisor.zza>;
                public toString(): string;
                public constructor(param0: globalAndroid.content.ComponentName, param1: number);
                public getComponentName(): globalAndroid.content.ComponentName;
                public constructor(param0: string, param1: string, param2: number);
                public equals(param0: any): boolean;
                public getPackage(): string;
                public hashCode(): number;
                public constructor(param0: string, param1: number);
              }
            }
            export class GmsLogger {
              public static class: java.lang.Class<com.google.android.gms.common.internal.GmsLogger>;
              public d(param0: string, param1: string, param2: java.lang.Throwable): void;
              public efmt(param0: string, param1: string, param2: native.Array<any>): void;
              public w(param0: string, param1: string): void;
              public v(param0: string, param1: string): void;
              public w(param0: string, param1: string, param2: java.lang.Throwable): void;
              public constructor(param0: string, param1: string);
              public canLog(param0: number): boolean;
              public i(param0: string, param1: string, param2: java.lang.Throwable): void;
              public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
              public i(param0: string, param1: string): void;
              public pii(param0: string, param1: string): void;
              public v(param0: string, param1: string, param2: java.lang.Throwable): void;
              public constructor(param0: string);
              public wfmt(param0: string, param1: string, param2: native.Array<any>): void;
              public e(param0: string, param1: string, param2: java.lang.Throwable): void;
              public pii(param0: string, param1: string, param2: java.lang.Throwable): void;
              public d(param0: string, param1: string): void;
              public canLogPii(): boolean;
              public e(param0: string, param1: string): void;
            }
            export class GoogleApiAvailabilityCache {
              public static class: java.lang.Class<com.google.android.gms.common.internal.GoogleApiAvailabilityCache>;
              public constructor();
              public getClientAvailability(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api.Client): number;
              public constructor(param0: com.google.android.gms.common.GoogleApiAvailabilityLight);
              public flush(): void;
            }
            export class HideFirstParty {
              public static class: java.lang.Class<com.google.android.gms.common.internal.HideFirstParty>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.HideFirstParty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class IAccountAccessor {
              public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.IAccountAccessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getAccount(): globalAndroid.accounts.Account });
              public constructor();
              public getAccount(): globalAndroid.accounts.Account;
            }
            export module IAccountAccessor {
              export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.IAccountAccessor {
                public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor.Stub>;
                public getAccount(): globalAndroid.accounts.Account;
                public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.IAccountAccessor;
                public constructor();
                public constructor(param0: string);
              }
              export module Stub {
                export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.IAccountAccessor {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor.Stub.zza>;
                  public getAccount(): globalAndroid.accounts.Account;
                }
              }
            }
            export class ICancelToken {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.ICancelToken interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { cancel(): void });
              public constructor();
              public cancel(): void;
            }
            export module ICancelToken {
              export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.ICancelToken {
                public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken.Stub>;
                public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.ICancelToken;
                public cancel(): void;
                public constructor();
                public constructor(param0: string);
              }
              export module Stub {
                export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.ICancelToken {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken.Stub.zza>;
                  public cancel(): void;
                }
              }
            }
            export class IGmsCallbacks {
              public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsCallbacks>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.IGmsCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
                zza(param0: number, param1: globalAndroid.os.Bundle): void;
                zza(param0: number, param1: globalAndroid.os.IBinder, param2: any /* com.google.android.gms.common.internal.zzb*/): void;
              });
              public constructor();
              public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
            }
            export module IGmsCallbacks {
              export abstract class zza extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.IGmsCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsCallbacks.zza>;
                public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
                public constructor();
                public constructor(param0: string);
              }
            }
            export class IGmsServiceBroker {
              public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.IGmsServiceBroker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getService(
                  param0: com.google.android.gms.common.internal.IGmsCallbacks,
                  param1: com.google.android.gms.common.internal.GetServiceRequest,
                ): void;
              });
              public constructor();
              public getService(
                param0: com.google.android.gms.common.internal.IGmsCallbacks,
                param1: com.google.android.gms.common.internal.GetServiceRequest,
              ): void;
            }
            export module IGmsServiceBroker {
              export abstract class Stub implements com.google.android.gms.common.internal.IGmsServiceBroker {
                public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker.Stub>;
                public constructor();
                public getService(
                  param0: com.google.android.gms.common.internal.IGmsCallbacks,
                  param1: com.google.android.gms.common.internal.GetServiceRequest,
                ): void;
                public asBinder(): globalAndroid.os.IBinder;
                public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
              }
              export module Stub {
                export class zza extends com.google.android.gms.common.internal.IGmsServiceBroker {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker.Stub.zza>;
                  public asBinder(): globalAndroid.os.IBinder;
                  public getService(
                    param0: com.google.android.gms.common.internal.IGmsCallbacks,
                    param1: com.google.android.gms.common.internal.GetServiceRequest,
                  ): void;
                }
              }
            }
            export class IResolveAccountCallbacks {
              public static class: java.lang.Class<com.google.android.gms.common.internal.IResolveAccountCallbacks>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.IResolveAccountCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void });
              public constructor();
              public onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void;
            }
            export module IResolveAccountCallbacks {
              export abstract class Stub extends com.google.android.gms.internal.base.zab
                implements com.google.android.gms.common.internal.IResolveAccountCallbacks {
                public static class: java.lang.Class<com.google.android.gms.common.internal.IResolveAccountCallbacks.Stub>;
                public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.IResolveAccountCallbacks;
                public onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void;
                public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
                public constructor();
                public constructor(param0: string);
              }
              export module Stub {
                export class Proxy extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.internal.IResolveAccountCallbacks {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.IResolveAccountCallbacks.Stub.Proxy>;
                  public onAccountResolutionComplete(param0: com.google.android.gms.common.internal.ResolveAccountResponse): void;
                }
              }
            }
            export class ISignInButtonCreator {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ISignInButtonCreator>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.ISignInButtonCreator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                newSignInButton(
                  param0: com.google.android.gms.dynamic.IObjectWrapper,
                  param1: number,
                  param2: number,
                ): com.google.android.gms.dynamic.IObjectWrapper;
                newSignInButtonFromConfig(
                  param0: com.google.android.gms.dynamic.IObjectWrapper,
                  param1: com.google.android.gms.common.internal.SignInButtonConfig,
                ): com.google.android.gms.dynamic.IObjectWrapper;
              });
              public constructor();
              public newSignInButtonFromConfig(
                param0: com.google.android.gms.dynamic.IObjectWrapper,
                param1: com.google.android.gms.common.internal.SignInButtonConfig,
              ): com.google.android.gms.dynamic.IObjectWrapper;
              public newSignInButton(
                param0: com.google.android.gms.dynamic.IObjectWrapper,
                param1: number,
                param2: number,
              ): com.google.android.gms.dynamic.IObjectWrapper;
            }
            export class ImagesContract {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ImagesContract>;
              public static URL: string;
              public static LOCAL: string;
              public constructor();
            }
            export abstract class LegacyInternalGmsClient<T> extends com.google.android.gms.common.internal.GmsClient<any> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.LegacyInternalGmsClient<any>>;
              public onConnectedLocked(param0: any): void;
              public isConnectionFailedListenerRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): boolean;
              public registerConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
              public unregisterConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
              public registerConnectionCallbacks(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): void;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public onConnectionSuspended(param0: number): void;
              public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param7: string,
              );
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public isConnectionCallbacksRegistered(param0: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks): boolean;
              public requiresAccount(): boolean;
              public checkAvailabilityAndConnect(): void;
              public disconnect(): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: number,
                param2: com.google.android.gms.common.internal.ClientSettings,
                param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public unregisterConnectionFailedListener(param0: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param5: string,
              );
              public isConnecting(): boolean;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
              );
              public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
              public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
              ): void;
              public requiresSignIn(): boolean;
            }
            export class LibraryVersion {
              public static class: java.lang.Class<com.google.android.gms.common.internal.LibraryVersion>;
              public constructor();
              public static getInstance(): com.google.android.gms.common.internal.LibraryVersion;
              public getVersion(param0: string): string;
            }
            export class Objects {
              public static class: java.lang.Class<com.google.android.gms.common.internal.Objects>;
              public static toStringHelper(param0: any): com.google.android.gms.common.internal.Objects.ToStringHelper;
              public static hashCode(param0: native.Array<any>): number;
              public static equal(param0: any, param1: any): boolean;
            }
            export module Objects {
              export class ToStringHelper {
                public static class: java.lang.Class<com.google.android.gms.common.internal.Objects.ToStringHelper>;
                public toString(): string;
                public add(param0: string, param1: any): com.google.android.gms.common.internal.Objects.ToStringHelper;
              }
            }
            export class PendingResultUtil {
              public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil>;
              public constructor();
              public static toVoidTask(param0: com.google.android.gms.common.api.PendingResult<any>): com.google.android.gms.tasks.Task<any>;
              public static toTask(
                param0: com.google.android.gms.common.api.PendingResult<any>,
                param1: com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any, any>,
              ): com.google.android.gms.tasks.Task<any>;
              public static toResponseTask(
                param0: com.google.android.gms.common.api.PendingResult<any>,
                param1: com.google.android.gms.common.api.Response<any>,
              ): com.google.android.gms.tasks.Task<any>;
            }
            export module PendingResultUtil {
              export class ResultConverter<R, T> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any, any>>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.PendingResultUtil$ResultConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { convert(param0: R): T });
                public constructor();
                public convert(param0: R): T;
              }
              export class zaa {
                public static class: java.lang.Class<com.google.android.gms.common.internal.PendingResultUtil.zaa>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.PendingResultUtil$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { zaf(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException });
                public constructor();
                public zaf(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
              }
            }
            export class Preconditions {
              public static class: java.lang.Class<com.google.android.gms.common.internal.Preconditions>;
              public static checkArgument(param0: boolean): void;
              public static checkNotMainThread(param0: string): void;
              public static checkHandlerThread(param0: globalAndroid.os.Handler): void;
              public static checkNotZero(param0: number): number;
              public static checkState(param0: boolean, param1: string, param2: native.Array<any>): void;
              public static checkNotEmpty(param0: string): string;
              public static checkNotNull(param0: any): any;
              public static checkState(param0: boolean): void;
              public static checkState(param0: boolean, param1: any): void;
              public static checkNotEmpty(param0: string, param1: any): string;
              public static checkNotZero(param0: number, param1: any): number;
              public static checkMainThread(param0: string): void;
              public static checkNotMainThread(): void;
              public static checkNotNull(param0: any, param1: any): any;
              public static checkArgument(param0: boolean, param1: any): void;
              public static checkArgument(param0: boolean, param1: string, param2: native.Array<any>): void;
            }
            export class ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ReflectedParcelable>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.ReflectedParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class ResolveAccountRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ResolveAccountRequest>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ResolveAccountRequest>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getAccount(): globalAndroid.accounts.Account;
              public getSessionId(): number;
              public constructor(param0: globalAndroid.accounts.Account, param1: number, param2: com.google.android.gms.auth.api.signin.GoogleSignInAccount);
              public getSignInAccountHint(): com.google.android.gms.auth.api.signin.GoogleSignInAccount;
            }
            export class ResolveAccountResponse extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ResolveAccountResponse>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ResolveAccountResponse>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public setSaveDefaultAccount(param0: boolean): com.google.android.gms.common.internal.ResolveAccountResponse;
              public getSaveDefaultAccount(): boolean;
              public setIsFromCrossClientAuth(param0: boolean): com.google.android.gms.common.internal.ResolveAccountResponse;
              public getAccountAccessor(): com.google.android.gms.common.internal.IAccountAccessor;
              public setAccountAccessor(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
              ): com.google.android.gms.common.internal.ResolveAccountResponse;
              public isFromCrossClientAuth(): boolean;
              public equals(param0: any): boolean;
              public constructor(param0: com.google.android.gms.common.ConnectionResult);
              public constructor(param0: number);
              public getConnectionResult(): com.google.android.gms.common.ConnectionResult;
            }
            export class ResourceUtils {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ResourceUtils>;
            }
            export class ServiceSpecificExtraArgs {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs>;
            }
            export module ServiceSpecificExtraArgs {
              export class CastExtraArgs {
                public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.CastExtraArgs>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$CastExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static LISTENER: string;
              }
              export class GamesExtraArgs {
                public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.GamesExtraArgs>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$GamesExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static DESIRED_LOCALE: string;
                public static SIGNIN_OPTIONS: string;
                public static GAME_PACKAGE_NAME: string;
                public static WINDOW_TOKEN: string;
              }
              export class PlusExtraArgs {
                public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.PlusExtraArgs>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$PlusExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static PLUS_AUTH_PACKAGE: string;
              }
            }
            export class ShowFirstParty {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ShowFirstParty>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.ShowFirstParty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class SignInButtonConfig extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.SignInButtonConfig>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.SignInButtonConfig>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getButtonSize(): number;
              public getColorScheme(): number;
              /** @deprecated */
              public getScopes(): native.Array<com.google.android.gms.common.api.Scope>;
              public constructor(param0: number, param1: number, param2: native.Array<com.google.android.gms.common.api.Scope>);
            }
            export class SignInButtonCreator extends com.google.android.gms.dynamic.RemoteCreator<com.google.android.gms.common.internal.ISignInButtonCreator> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.SignInButtonCreator>;
              public getRemoteCreator(param0: globalAndroid.os.IBinder): any;
              public static createView(param0: globalAndroid.content.Context, param1: number, param2: number): globalAndroid.view.View;
              public getRemoteCreator(param0: globalAndroid.os.IBinder): com.google.android.gms.common.internal.ISignInButtonCreator;
            }
            export class SignInButtonImpl {
              public static class: java.lang.Class<com.google.android.gms.common.internal.SignInButtonImpl>;
              public configure(param0: globalAndroid.content.res.Resources, param1: com.google.android.gms.common.internal.SignInButtonConfig): void;
              public configure(param0: globalAndroid.content.res.Resources, param1: number, param2: number): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
              public constructor(param0: globalAndroid.content.Context);
            }
            export class SimpleClientAdapter<T> extends com.google.android.gms.common.internal.GmsClient<any> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.SimpleClientAdapter<any>>;
              public getStartServiceAction(): string;
              public getClient(): com.google.android.gms.common.api.Api.SimpleClient<any>;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public getServiceDescriptor(): string;
              public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param7: string,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.Api.SimpleClient<any>,
              );
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public createServiceInterface(param0: globalAndroid.os.IBinder): any;
              public requiresAccount(): boolean;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public onSetConnectState(param0: number, param1: any): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param5: string,
              );
              public isConnecting(): boolean;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
              );
              public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
              public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
              ): void;
              public requiresSignIn(): boolean;
            }
            export class StringResourceValueReader {
              public static class: java.lang.Class<com.google.android.gms.common.internal.StringResourceValueReader>;
              public getString(param0: string): string;
              public constructor(param0: globalAndroid.content.Context);
            }
            export class ViewUtils {
              public static class: java.lang.Class<com.google.android.gms.common.internal.ViewUtils>;
              public static getXmlAttributeString(
                param0: string,
                param1: string,
                param2: globalAndroid.content.Context,
                param3: globalAndroid.util.AttributeSet,
                param4: boolean,
                param5: boolean,
                param6: string,
              ): string;
            }
            export module constants {
              export class ListAppsActivityContract {
                public static class: java.lang.Class<com.google.android.gms.common.internal.constants.ListAppsActivityContract>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.constants.ListAppsActivityContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static EXTRA_PRESELECTED_FILTER: string;
                public static ACTION_APPS: string;
                public static PRESELECTED_FILTER_FITNESS_APPS: number;
              }
            }
            export module safeparcel {
              export abstract class AbstractSafeParcelable extends com.google.android.gms.common.internal.safeparcel.SafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable>;
                public describeContents(): number;
                public constructor();
              }
            }
            export module safeparcel {
              export class SafeParcelReader {
                public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelReader>;
                public static createParcelable(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.os.Parcelable.Creator<any>,
                ): globalAndroid.os.Parcelable;
                public static createBundle(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.Bundle;
                public static createStringList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<string>;
                public static createIBinderArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<globalAndroid.os.IBinder>;
                public static readIntegerObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Integer;
                public static readShort(param0: globalAndroid.os.Parcel, param1: number): number;
                public static createFloatArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<number>;
                public static readList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<any>, param3: java.lang.ClassLoader): void;
                public static createIntegerList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Integer>;
                public static createTypedList(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.os.Parcelable.Creator<any>,
                ): java.util.ArrayList<any>;
                public static readInt(param0: globalAndroid.os.Parcel, param1: number): number;
                public static readDoubleObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Double;
                public static createParcel(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.Parcel;
                public static createSparseBooleanArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseBooleanArray;
                public static createByteArrayArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<native.Array<number>>;
                public static readLong(param0: globalAndroid.os.Parcel, param1: number): number;
                public static createStringArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<string>;
                public static readByte(param0: globalAndroid.os.Parcel, param1: number): number;
                public static skipUnknownField(param0: globalAndroid.os.Parcel, param1: number): void;
                public static createParcelArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<globalAndroid.os.Parcel>;
                public static readBoolean(param0: globalAndroid.os.Parcel, param1: number): boolean;
                public static createTypedSparseArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.os.Parcelable.Creator<any>,
                    ): globalAndroid.util.SparseArray<any>;
                public static createParcelList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<globalAndroid.os.Parcel>;
                public static createTypedArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.os.Parcelable.Creator<any>,
                ): native.Array<any>;
                public static createLongList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Long>;
                public static readSize(param0: globalAndroid.os.Parcel, param1: number): number;
                public static createLongArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<number>;
                public static createDoubleList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Double>;
                public static validateObjectHeader(param0: globalAndroid.os.Parcel): number;
                public static createFloatList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Float>;
                public static readHeader(param0: globalAndroid.os.Parcel): number;
                public static readIBinder(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.os.IBinder;
                public static readFloatObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Float;
                public static createStringSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<string>;
                public static readBooleanObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Boolean;
                public static createBooleanList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<java.lang.Boolean>;
                public static createBooleanArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<boolean>;
                public static createDoubleSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<java.lang.Double>;
                public static createIBinderList(param0: globalAndroid.os.Parcel, param1: number): java.util.ArrayList<globalAndroid.os.IBinder>;
                public static createBigInteger(param0: globalAndroid.os.Parcel, param1: number): java.math.BigInteger;
                public static readChar(param0: globalAndroid.os.Parcel, param1: number): string;
                public static createByteArraySparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<native.Array<number>>;
                public static createIntArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<number>;
                public static ensureAtEnd(param0: globalAndroid.os.Parcel, param1: number): void;
                public static getFieldId(param0: number): number;
                public static readDouble(param0: globalAndroid.os.Parcel, param1: number): number;
                public static createIBinderSparseArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                ): globalAndroid.util.SparseArray<globalAndroid.os.IBinder>;
                public static createBigDecimal(param0: globalAndroid.os.Parcel, param1: number): java.math.BigDecimal;
                public static createString(param0: globalAndroid.os.Parcel, param1: number): string;
                public static createCharArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<string>;
                public static readLongObject(param0: globalAndroid.os.Parcel, param1: number): java.lang.Long;
                public static createSparseIntArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseIntArray;
                public static createByteArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<number>;
                public static createDoubleArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<number>;
                public static createBigIntegerArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<java.math.BigInteger>;
                public static createSparseLongArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseLongArray;
                public static createBigDecimalArray(param0: globalAndroid.os.Parcel, param1: number): native.Array<java.math.BigDecimal>;
                public static createParcelSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<globalAndroid.os.Parcel>;
                public static createFloatSparseArray(param0: globalAndroid.os.Parcel, param1: number): globalAndroid.util.SparseArray<java.lang.Float>;
                public static readFloat(param0: globalAndroid.os.Parcel, param1: number): number;
              }
              export module SafeParcelReader {
                export class ParseException {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelReader.ParseException>;
                  public constructor(param0: string, param1: globalAndroid.os.Parcel);
                }
              }
            }
            export module safeparcel {
              export class SafeParcelWriter {
                public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelWriter>;
                public static writeIBinderArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: native.Array<globalAndroid.os.IBinder>,
                  param3: boolean,
                ): void;
                public static writeIntArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
                public static writeParcelArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: native.Array<globalAndroid.os.Parcel>,
                  param3: boolean,
                ): void;
                public static writeStringSparseArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.util.SparseArray<string>,
                  param3: boolean,
                ): void;
                public static writeLongArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
                public static writeSparseIntArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.util.SparseIntArray,
                  param3: boolean,
                ): void;
                public static writeDouble(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeBooleanArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<boolean>, param3: boolean): void;
                public static writeBigIntegerArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: native.Array<java.math.BigInteger>,
                  param3: boolean,
                ): void;
                public static writeTypedArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: native.Array<globalAndroid.os.Parcelable>,
                  param3: number,
                  param4: boolean,
                ): void;
                public static writeSparseBooleanArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.util.SparseBooleanArray,
                  param3: boolean,
                ): void;
                public static writeStringArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<string>, param3: boolean): void;
                public static writeBooleanObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Boolean, param3: boolean): void;
                public static writeParcelSparseArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.util.SparseArray<globalAndroid.os.Parcel>,
                  param3: boolean,
                ): void;
                public static writeShort(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeFloat(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeBundle(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Bundle, param3: boolean): void;
                public static writeIBinder(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.IBinder, param3: boolean): void;
                public static writeSparseLongArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.util.SparseLongArray,
                  param3: boolean,
                ): void;
                public static writeChar(param0: globalAndroid.os.Parcel, param1: number, param2: string): void;
                public static writeString(param0: globalAndroid.os.Parcel, param1: number, param2: string, param3: boolean): void;
                public static writeParcel(param0: globalAndroid.os.Parcel, param1: number, param2: globalAndroid.os.Parcel, param3: boolean): void;
                public static writeBooleanList(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: java.util.List<java.lang.Boolean>,
                  param3: boolean,
                ): void;
                public static writeLongObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Long, param3: boolean): void;
                public static writeBigDecimalArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: native.Array<java.math.BigDecimal>,
                  param3: boolean,
                ): void;
                public static writeFloatSparseArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.util.SparseArray<java.lang.Float>,
                  param3: boolean,
                ): void;
                public static writeBoolean(param0: globalAndroid.os.Parcel, param1: number, param2: boolean): void;
                public static writeCharArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<string>, param3: boolean): void;
                public static writeDoubleArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
                public static writeDoubleSparseArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.util.SparseArray<java.lang.Double>,
                  param3: boolean,
                ): void;
                public static writeFloatList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Float>, param3: boolean): void;
                public static writeStringList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<string>, param3: boolean): void;
                public static writeFloatObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Float, param3: boolean): void;
                public static writeParcelable(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.os.Parcelable,
                  param3: number,
                  param4: boolean,
                ): void;
                public static writeFloatArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
                public static writeTypedSparseArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.util.SparseArray<any>,
                  param3: boolean,
                ): void;
                public static writeTypedList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<any>, param3: boolean): void;
                public static finishObjectHeader(param0: globalAndroid.os.Parcel, param1: number): void;
                public static writeIntegerList(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: java.util.List<java.lang.Integer>,
                  param3: boolean,
                ): void;
                public static beginObjectHeader(param0: globalAndroid.os.Parcel): number;
                public static writeByte(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeLong(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeLongList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Long>, param3: boolean): void;
                public static writeIntegerObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Integer, param3: boolean): void;
                public static writeList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<any>, param3: boolean): void;
                public static writeDoubleList(param0: globalAndroid.os.Parcel, param1: number, param2: java.util.List<java.lang.Double>, param3: boolean): void;
                public static writeBigInteger(param0: globalAndroid.os.Parcel, param1: number, param2: java.math.BigInteger, param3: boolean): void;
                public static writeDoubleObject(param0: globalAndroid.os.Parcel, param1: number, param2: java.lang.Double, param3: boolean): void;
                public static writeIBinderList(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: java.util.List<globalAndroid.os.IBinder>,
                  param3: boolean,
                ): void;
                public static writeInt(param0: globalAndroid.os.Parcel, param1: number, param2: number): void;
                public static writeByteArray(param0: globalAndroid.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
                public static writeBigDecimal(param0: globalAndroid.os.Parcel, param1: number, param2: java.math.BigDecimal, param3: boolean): void;
                public static writeIBinderSparseArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.util.SparseArray<globalAndroid.os.IBinder>,
                  param3: boolean,
                ): void;
                public static writeByteArraySparseArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: globalAndroid.util.SparseArray<native.Array<number>>,
                  param3: boolean,
                ): void;
                public static writeParcelList(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: java.util.List<globalAndroid.os.Parcel>,
                  param3: boolean,
                ): void;
                public static writeByteArrayArray(
                  param0: globalAndroid.os.Parcel,
                  param1: number,
                  param2: native.Array<native.Array<number>>,
                  param3: boolean,
                ): void;
              }
            }
            export module safeparcel {
              export class SafeParcelable extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static NULL: string;
              }
              export module SafeParcelable {
                export class Class {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Class>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Class interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { creator(): string; validate(): boolean });
                  public constructor();
                  public creator(): string;
                  public validate(): boolean;
                }
                export class Constructor {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Constructor>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Constructor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {});
                  public constructor();
                }
                export class Field {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Field>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Field interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    id(): number;
                    getter(): string;
                    type(): string;
                    defaultValue(): string;
                    defaultValueUnchecked(): string;
                  });
                  public constructor();
                  public getter(): string;
                  public defaultValueUnchecked(): string;
                  public type(): string;
                  public id(): number;
                  public defaultValue(): string;
                }
                export class Indicator {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Indicator>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Indicator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { getter(): string });
                  public constructor();
                  public getter(): string;
                }
                export class Param {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Param>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Param interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { id(): number });
                  public constructor();
                  public id(): number;
                }
                export class Reserved {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Reserved>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Reserved interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { value(): native.Array<number> });
                  public constructor();
                  public value(): native.Array<number>;
                }
                export class VersionField {
                  public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.VersionField>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$VersionField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { id(): number; getter(): string; type(): string });
                  public constructor();
                  public getter(): string;
                  public type(): string;
                  public id(): number;
                }
              }
            }
            export module safeparcel {
              export class SafeParcelableSerializer {
                public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelableSerializer>;
                public static serializeToString(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable): string;
                public static deserializeFromString(
                  param0: string,
                  param1: globalAndroid.os.Parcelable.Creator<any>,
                ): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
                public static serializeToIntentExtra(
                  param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable,
                  param1: globalAndroid.content.Intent,
                  param2: string,
                ): void;
                public static serializeToBytes(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable): native.Array<number>;
                public static deserializeFromIntentExtra(
                  param0: globalAndroid.content.Intent,
                  param1: string,
                  param2: globalAndroid.os.Parcelable.Creator<any>,
                ): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
                public constructor();
                public static serializeIterableToIntentExtra(param0: java.lang.Iterable<any>, param1: globalAndroid.content.Intent, param2: string): void;
                public static deserializeIterableFromIntentExtra(
                  param0: globalAndroid.content.Intent,
                  param1: string,
                  param2: globalAndroid.os.Parcelable.Creator<any>,
                ): java.util.ArrayList<any>;
                  public static serializeIterableToBundle(param0: java.lang.Iterable<any>, param1: globalAndroid.os.Bundle, param2: string): void;
                public static deserializeFromBytes(
                  param0: native.Array<number>,
                  param1: globalAndroid.os.Parcelable.Creator<any>,
                ): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
                public static deserializeIterableFromBundle(
                  param0: globalAndroid.os.Bundle,
                  param1: string,
                  param2: globalAndroid.os.Parcelable.Creator<any>,
                ): java.util.ArrayList<any>;
              }
            }
            export module service {
              export class Common {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.Common>;
                public static CLIENT_KEY: com.google.android.gms.common.api.Api.ClientKey<com.google.android.gms.common.internal.service.zai>;
                public static API: com.google.android.gms.common.api.Api<com.google.android.gms.common.api.Api.ApiOptions.NoOptions>;
                public static zaph: com.google.android.gms.common.internal.service.zac;
                public constructor();
              }
            }
            export module service {
              export class zaa extends com.google.android.gms.common.internal.service.zak {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaa>;
                public zaj(param0: number): void;
                public constructor();
                public constructor(param0: string);
              }
            }
            export module service {
              export class zab extends com.google.android.gms.common.api.Api.AbstractClientBuilder<
                com.google.android.gms.common.internal.service.zai,
                com.google.android.gms.common.api.Api.ApiOptions.NoOptions
              > {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zab>;
              }
            }
            export module service {
              export class zac {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zac>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.service.zac interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zaa(
                    param0: com.google.android.gms.common.api.GoogleApiClient,
                  ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
                });
                public constructor();
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
              }
            }
            export module service {
              export class zad extends com.google.android.gms.common.internal.service.zac {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zad>;
                public constructor();
                public zaa(
                  param0: com.google.android.gms.common.api.GoogleApiClient,
                ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.common.api.Status>;
              }
            }
            export module service {
              export class zae extends com.google.android.gms.common.internal.service.zah {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zae>;
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
            }
            export module service {
              export class zaf extends com.google.android.gms.common.internal.service.zaa {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaf>;
                public constructor(
                  param0: com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder<com.google.android.gms.common.api.Status>,
                );
                public zaj(param0: number): void;
                public constructor();
                public constructor(param0: string);
              }
            }
            export module service {
              export abstract class zag<R> extends com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<
                any,
                com.google.android.gms.common.internal.service.zai
              > {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zag<any>>;
                public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
                public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
                public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
                public constructor();
                /** @deprecated */
                public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
            }
            export module service {
              export abstract class zah extends com.google.android.gms.common.internal.service.zag<com.google.android.gms.common.api.Status> {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zah>;
                public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
                public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
                public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
                public constructor();
                /** @deprecated */
                public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
                /** @deprecated */
                public constructor(param0: globalAndroid.os.Looper);
                public setResult(param0: any): void;
                public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              }
            }
            export module service {
              export class zai extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.common.internal.service.zal> {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zai>;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Handler,
                  param2: number,
                  param3: com.google.android.gms.common.internal.ClientSettings,
                );
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: com.google.android.gms.common.internal.ClientSettings,
                  param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                );
                public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
                public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
                public getServiceBrokerBinder(): globalAndroid.os.IBinder;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: number,
                  param3: com.google.android.gms.common.internal.ClientSettings,
                  param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                );
                public getEndpointPackageName(): string;
                public requiresGooglePlayServices(): boolean;
                public requiresAccount(): boolean;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: number,
                  param3: com.google.android.gms.common.internal.ClientSettings,
                );
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Handler,
                  param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                  param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                  param4: number,
                  param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                  param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                );
                public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: number,
                  param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                  param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                  param5: string,
                );
                public getMinApkVersion(): number;
                public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
                public getServiceDescriptor(): string;
                public getRemoteService(
                  param0: com.google.android.gms.common.internal.IAccountAccessor,
                  param1: java.util.Set<com.google.android.gms.common.api.Scope>,
                ): void;
                public getConnectionHint(): globalAndroid.os.Bundle;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                  param3: com.google.android.gms.common.GoogleApiAvailability,
                  param4: number,
                  param5: com.google.android.gms.common.internal.ClientSettings,
                  param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                );
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Looper,
                  param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                  param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                  param4: number,
                  param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                  param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                  param7: string,
                );
                public requiresSignIn(): boolean;
                public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
                public getSignInIntent(): globalAndroid.content.Intent;
                public isConnected(): boolean;
                public constructor(
                  param0: globalAndroid.content.Context,
                  param1: globalAndroid.os.Handler,
                  param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                  param3: com.google.android.gms.common.GoogleApiAvailability,
                  param4: number,
                  param5: com.google.android.gms.common.internal.ClientSettings,
                  param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                  param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
                );
                public getStartServiceAction(): string;
                public disconnect(): void;
                public isConnecting(): boolean;
                public providesSignIn(): boolean;
              }
            }
            export module service {
              export class zaj {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zaj>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.service.zaj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { zaj(param0: number): void });
                public constructor();
                public zaj(param0: number): void;
              }
            }
            export module service {
              export abstract class zak extends com.google.android.gms.internal.base.zab implements com.google.android.gms.common.internal.service.zaj {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zak>;
                public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
                public zaj(param0: number): void;
                public constructor();
                public constructor(param0: string);
              }
            }
            export module service {
              export class zal {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zal>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.internal.service.zal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { zaa(param0: com.google.android.gms.common.internal.service.zaj): void });
                public constructor();
                public zaa(param0: com.google.android.gms.common.internal.service.zaj): void;
              }
            }
            export module service {
              export class zam extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.internal.service.zal {
                public static class: java.lang.Class<com.google.android.gms.common.internal.service.zam>;
                public zaa(): globalAndroid.os.Parcel;
                public zaa(param0: com.google.android.gms.common.internal.service.zaj): void;
                public zaa(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
              }
            }
            export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.AuthAccountRequest> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zaa>;
              public constructor();
            }
            export class zab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ClientIdentity> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zab>;
              public constructor();
            }
            export class zac extends com.google.android.gms.common.internal.DialogRedirect {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zac>;
              public redirect(): void;
            }
            export class zad extends com.google.android.gms.common.internal.DialogRedirect {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zad>;
              public redirect(): void;
            }
            export class zae extends com.google.android.gms.common.internal.DialogRedirect {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zae>;
              public redirect(): void;
            }
            export class zaf extends com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zaf>;
              public onConnected(param0: globalAndroid.os.Bundle): void;
              public onConnectionSuspended(param0: number): void;
            }
            export class zag extends com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zag>;
              public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
            }
            export class zah extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.common.internal.ISignInButtonCreator {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zah>;
              public newSignInButtonFromConfig(
                param0: com.google.android.gms.dynamic.IObjectWrapper,
                param1: com.google.android.gms.common.internal.SignInButtonConfig,
              ): com.google.android.gms.dynamic.IObjectWrapper;
              public newSignInButton(
                param0: com.google.android.gms.dynamic.IObjectWrapper,
                param1: number,
                param2: number,
              ): com.google.android.gms.dynamic.IObjectWrapper;
            }
            export class zai extends com.google.android.gms.common.internal.PendingResultUtil.zaa {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zai>;
              public zaf(param0: com.google.android.gms.common.api.Status): com.google.android.gms.common.api.ApiException;
            }
            export class zaj extends com.google.android.gms.common.api.PendingResult.StatusListener {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zaj>;
              public onComplete(param0: com.google.android.gms.common.api.Status): void;
            }
            export class zak extends com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any, any> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zak>;
              public convert(param0: any): any;
            }
            export class zal extends com.google.android.gms.common.internal.PendingResultUtil.ResultConverter<any, java.lang.Void> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zal>;
              public convert(param0: any): any;
            }
            export class zam extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ResolveAccountRequest> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zam>;
              public constructor();
            }
            export class zan extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.ResolveAccountResponse> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zan>;
              public constructor();
            }
            export class zao extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.SignInButtonConfig> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zao>;
              public constructor();
            }
            export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.BinderWrapper> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zza>;
            }
            export class zzb extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzb>;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzb>*/;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            }
            export class zzc extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzb>*/ {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzc>;
              public constructor();
            }
            export class zzd extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.GetServiceRequest> {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzd>;
              public constructor();
            }
            export class zze extends com.google.android.gms.common.internal.GmsClientSupervisor {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zze>;
              public handleMessage(param0: globalAndroid.os.Message): boolean;
            }
            export class zzf {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzf>;
              public constructor(
                param0: any /* com.google.android.gms.common.internal.zze*/,
                param1: any /* com.google.android.gms.common.internal.GmsClientSupervisor.zza*/,
              );
              public isBound(): boolean;
              public getBinder(): globalAndroid.os.IBinder;
              public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
              public getState(): number;
              public getComponentName(): globalAndroid.content.ComponentName;
              public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
            }
            export class zzg {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzg>;
            }
            export class zzh {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzh>;
              public constructor(param0: string, param1: string, param2: boolean, param3: number);
            }
            export class zzi {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzi>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzb(): com.google.android.gms.dynamic.IObjectWrapper; zzc(): number });
              public constructor();
            }
            export abstract class zzj extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.zzi {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzj>;
              public constructor();
              public constructor(param0: string);
            }
            export class zzk extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.zzi {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzk>;
            }
            export class zzl extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.IGmsCallbacks {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzl>;
              public onPostInitComplete(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle): void;
            }
            export class zzm {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzm>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.internal.zzm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(param0: any /* com.google.android.gms.common.zzk*/, param1: com.google.android.gms.dynamic.IObjectWrapper): boolean;
              });
              public constructor();
            }
            export abstract class zzn extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.zzm {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzn>;
            }
            export class zzo extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.zzm {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzo>;
            }
            export class zzp {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzp>;
            }
            export class zzq {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzq>;
            }
            export class zzr extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzr>;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzr>*/;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            }
          }
          export module internal {
            export class zzs extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.internal.zzr>*/ {
              public static class: java.lang.Class<com.google.android.gms.common.internal.zzs>;
              public constructor();
            }
          }
          export module logging {
            export class Logger {
              public static class: java.lang.Class<com.google.android.gms.common.logging.Logger>;
              public v(param0: string, param1: native.Array<any>): void;
              public e(param0: string, param1: java.lang.Throwable, param2: native.Array<any>): void;
              public wtf(param0: java.lang.Throwable): void;
              public i(param0: string, param1: native.Array<any>): void;
              public isLoggable(param0: number): boolean;
              public e(param0: string, param1: native.Array<any>): void;
              public wtf(param0: string, param1: java.lang.Throwable, param2: native.Array<any>): void;
              public constructor(param0: string, param1: native.Array<string>);
              public w(param0: string, param1: native.Array<any>): void;
              public d(param0: string, param1: native.Array<any>): void;
            }
          }
          export module providers {
            export class PooledExecutorsProvider {
              public static class: java.lang.Class<com.google.android.gms.common.providers.PooledExecutorsProvider>;
              public static getInstance(): com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory;
            }
            export module PooledExecutorsProvider {
              export class PooledExecutorFactory {
                public static class: java.lang.Class<com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.providers.PooledExecutorsProvider$PooledExecutorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService });
                public constructor();
                public newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
              }
            }
          }
          export module providers {
            export class zza extends com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory {
              public static class: java.lang.Class<com.google.android.gms.common.providers.zza>;
              public newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
            }
          }
          export module server {
            export class FavaDiagnosticsEntity extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
              implements com.google.android.gms.common.internal.ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.server.FavaDiagnosticsEntity>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.FavaDiagnosticsEntity>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: number, param1: string, param2: number);
              public constructor(param0: string, param1: number);
            }
          }
          export module server {
            export module converter {
              export class StringToIntConverter extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
                implements com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<string, java.lang.Integer> {
                public static class: java.lang.Class<com.google.android.gms.common.server.converter.StringToIntConverter>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter>;
                public convert(param0: any): any;
                public zacj(): number;
                public zack(): number;
                public add(param0: string, param1: number): com.google.android.gms.common.server.converter.StringToIntConverter;
                public constructor();
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public convertBack(param0: any): any;
              }
              export module StringToIntConverter {
                export class zaa extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
                  public static class: java.lang.Class<com.google.android.gms.common.server.converter.StringToIntConverter.zaa>;
                  public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter.zaa>;
                  public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                }
              }
            }
          }
          export module server {
            export module converter {
              export class zaa extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.common.server.converter.zaa>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.zaa>;
                public zaci(): com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any, any>;
                public static zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any, any>,
                ): com.google.android.gms.common.server.converter.zaa;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
          export module server {
            export module converter {
              export class zab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.zaa> {
                public static class: java.lang.Class<com.google.android.gms.common.server.converter.zab>;
                public constructor();
              }
            }
          }
          export module server {
            export module converter {
              export class zac extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter> {
                public static class: java.lang.Class<com.google.android.gms.common.server.converter.zac>;
                public constructor();
              }
            }
          }
          export module server {
            export module converter {
              export class zad extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.converter.StringToIntConverter.zaa> {
                public static class: java.lang.Class<com.google.android.gms.common.server.converter.zad>;
                public constructor();
              }
            }
          }
          export module server {
            export module response {
              export abstract class FastJsonResponse extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse>;
                public toString(): string;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.Map<any, any>): void;
                public setIntegerInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: number,
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Integer>,
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.Map<string, string>,
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.math.BigInteger,
                ): void;
                public zad(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Float>,
                ): void;
                public addConcreteTypeInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: com.google.android.gms.common.server.response.FastJsonResponse,
                ): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: number): void;
                public setStringsInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<string>,
                ): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.math.BigDecimal): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.math.BigDecimal,
                ): void;
                public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public setLongInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: number,
                ): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public setDecodedBytesInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: native.Array<number>,
                ): void;
                public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public zac(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Long>,
                ): void;
                public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public zag(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Boolean>,
                ): void;
                public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: native.Array<number>): void;
                public static zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: any): any;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: boolean): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.math.BigInteger): void;
                public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string): void;
                public zab(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.math.BigInteger>,
                ): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: number): void;
                public constructor();
                public zah(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public getFieldMappings(): java.util.Map<string, com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>>;
                public zae(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Double>,
                ): void;
                public isPrimitiveFieldSet(param0: string): boolean;
                public addConcreteTypeArrayInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<any>,
                ): void;
                public isFieldSet(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>): boolean;
                public getValueObject(param0: string): any;
                public zaf(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.math.BigDecimal>,
                ): void;
                public setBooleanInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: boolean,
                ): void;
                public getFieldValue(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>): any;
                public setStringInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: string,
                ): void;
              }
              export module FastJsonResponse {
                export class Field<I, O> extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
                  public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>>;
                  public zapq: number;
                  public zapr: boolean;
                  public zaps: number;
                  public zapt: boolean;
                  public zapu: string;
                  public zapv: number;
                  public zapw: java.lang.Class<any>;
                  public static CREATOR: com.google.android.gms.common.server.response.zai;
                  public static forBase64(
                    param0: string,
                    param1: number,
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<native.Array<number>, native.Array<number>>;
                  public zacp(): com.google.android.gms.common.server.response.FastJsonResponse;
                  public convertBack(param0: any): any;
                  public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                  public static forConcreteTypeArray(
                    param0: string,
                    param1: number,
                    param2: java.lang.Class<any>,
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>;
                  public static forBoolean(
                    param0: string,
                    param1: number,
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Boolean, java.lang.Boolean>;
                  public toString(): string;
                  public convert(param0: any): any;
                  public static forLong(
                    param0: string,
                    param1: number,
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Long, java.lang.Long>;
                  public static forStrings(
                    param0: string,
                    param1: number,
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.util.ArrayList<string>, java.util.ArrayList<string>>;
                  public static forFloat(
                    param0: string,
                    param1: number,
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Float, java.lang.Float>;
                  public zacl(): com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>;
                  public getSafeParcelableFieldId(): number;
                  public static forString(param0: string, param1: number): com.google.android.gms.common.server.response.FastJsonResponse.Field<string, string>;
                  public static forDouble(
                    param0: string,
                    param1: number,
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Double, java.lang.Double>;
                  public zacq(): java.util.Map<string, com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>>;
                  public zaa(param0: com.google.android.gms.common.server.response.zak): void;
                  public static forConcreteType(
                    param0: string,
                    param1: number,
                    param2: java.lang.Class<any>,
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>;
                  public static forInteger(
                    param0: string,
                    param1: number,
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<java.lang.Integer, java.lang.Integer>;
                  public static withConverter(
                    param0: string,
                    param1: number,
                    param2: com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any, any>,
                    param3: boolean,
                  ): com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>;
                  public zacn(): boolean;
                }
                export class FieldConverter<I, O> extends java.lang.Object {
                  public static class: java.lang.Class<com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter<any, any>>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.server.response.FastJsonResponse$FieldConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: { zacj(): number; zack(): number; convert(param0: I): O; convertBack(param0: O): I });
                  public constructor();
                  public zack(): number;
                  public convertBack(param0: O): I;
                  public zacj(): number;
                  public convert(param0: I): O;
                }
              }
            }
          }
          export module server {
            export module response {
              export class FastParser<T> extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser<any>>;
                public constructor();
                public parse(param0: java.io.InputStream, param1: T): void;
              }
              export module FastParser {
                export class ParseException {
                  public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser.ParseException>;
                  public constructor(param0: java.lang.Throwable);
                  public constructor(param0: string);
                  public constructor(param0: string, param1: java.lang.Throwable);
                }
                export class zaa<O> extends java.lang.Object {
                  public static class: java.lang.Class<com.google.android.gms.common.server.response.FastParser.zaa<any>>;
                  /**
                   * Constructs a new instance of the com.google.android.gms.common.server.response.FastParser$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): O;
                  });
                  public constructor();
                  public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): O;
                }
              }
            }
          }
          export module server {
            export module response {
              export abstract class FastSafeParcelableJsonResponse extends com.google.android.gms.common.server.response.FastJsonResponse
                implements com.google.android.gms.common.internal.safeparcel.SafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse>;
                public describeContents(): number;
                public isPrimitiveFieldSet(param0: string): boolean;
                public equals(param0: any): boolean;
                public toByteArray(): native.Array<number>;
                public getValueObject(param0: string): any;
                public constructor();
                public hashCode(): number;
              }
            }
          }
          export module server {
            export module response {
              export class SafeParcelResponse extends com.google.android.gms.common.server.response.FastSafeParcelableJsonResponse {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.SafeParcelResponse>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.SafeParcelResponse>;
                public toString(): string;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.Map<any, any>): void;
                public setIntegerInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: number,
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Integer>,
                ): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.Map<string, string>,
                ): void;
                public static from(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse,
                ): com.google.android.gms.common.server.response.SafeParcelResponse;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.math.BigInteger,
                ): void;
                public zad(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Float>,
                ): void;
                public addConcreteTypeInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: com.google.android.gms.common.server.response.FastJsonResponse,
                ): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: number): void;
                public setStringsInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<string>,
                ): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.math.BigDecimal): void;
                public zaa(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.math.BigDecimal,
                ): void;
                public zae(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public setLongInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: number,
                ): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public setDecodedBytesInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: native.Array<number>,
                ): void;
                public zac(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Long>,
                ): void;
                public zad(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public zac(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public zag(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Boolean>,
                ): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: native.Array<number>): void;
                public zag(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public static zab(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: any): any;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: boolean): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.math.BigInteger): void;
                public zaf(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: java.util.ArrayList<any>): void;
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string): void;
                public zab(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.math.BigInteger>,
                ): void;
                public constructor(param0: com.google.android.gms.common.server.response.zak, param1: string);
                public zaa(param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>, param1: string, param2: number): void;
                public constructor();
                public getFieldMappings(): java.util.Map<string, com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>>;
                public zae(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.lang.Double>,
                ): void;
                public isPrimitiveFieldSet(param0: string): boolean;
                public addConcreteTypeArrayInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<any>,
                ): void;
                public getValueObject(param0: string): any;
                public zaf(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: java.util.ArrayList<java.math.BigDecimal>,
                ): void;
                public setBooleanInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: boolean,
                ): void;
                public setStringInternal(
                  param0: com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>,
                  param1: string,
                  param2: string,
                ): void;
              }
            }
          }
          export module server {
            export module response {
              export class zaa extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Integer> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zaa>;
                public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
              }
            }
          }
          export module server {
            export module response {
              export class zab extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Long> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zab>;
                public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
              }
            }
          }
          export module server {
            export module response {
              export class zac extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Float> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zac>;
                public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
              }
            }
          }
          export module server {
            export module response {
              export class zad extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Double> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zad>;
                public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
              }
            }
          }
          export module server {
            export module response {
              export class zae extends com.google.android.gms.common.server.response.FastParser.zaa<java.lang.Boolean> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zae>;
                public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
              }
            }
          }
          export module server {
            export module response {
              export class zaf extends com.google.android.gms.common.server.response.FastParser.zaa<string> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zaf>;
                public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
              }
            }
          }
          export module server {
            export module response {
              export class zag extends com.google.android.gms.common.server.response.FastParser.zaa<java.math.BigInteger> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zag>;
                public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
              }
            }
          }
          export module server {
            export module response {
              export class zah extends com.google.android.gms.common.server.response.FastParser.zaa<java.math.BigDecimal> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zah>;
                public zah(param0: com.google.android.gms.common.server.response.FastParser<any>, param1: java.io.BufferedReader): any;
              }
            }
          }
          export module server {
            export module response {
              export class zai extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zai>;
                public constructor();
              }
            }
          }
          export module server {
            export module response {
              export class zaj extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zam> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zaj>;
                public constructor();
              }
            }
          }
          export module server {
            export module response {
              export class zak extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zak>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zak>;
                public zaa(param0: java.lang.Class<any>): boolean;
                public toString(): string;
                public zai(param0: string): java.util.Map<string, com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>>;
                public zacs(): void;
                public constructor();
                public zaa(
                  param0: java.lang.Class<any>,
                  param1: java.util.Map<string, com.google.android.gms.common.server.response.FastJsonResponse.Field<any, any>>,
                ): void;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public zacr(): void;
                public constructor(param0: java.lang.Class<any>);
                public zact(): string;
              }
            }
          }
          export module server {
            export module response {
              export class zal extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zal>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zal>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
          export module server {
            export module response {
              export class zam extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zam>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zam>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
          export module server {
            export module response {
              export class zan extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zak> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zan>;
                public constructor();
              }
            }
          }
          export module server {
            export module response {
              export class zao extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.zal> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zao>;
                public constructor();
              }
            }
          }
          export module server {
            export module response {
              export class zap extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.response.SafeParcelResponse> {
                public static class: java.lang.Class<com.google.android.gms.common.server.response.zap>;
                public constructor();
              }
            }
          }
          export module server {
            export class zaa extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.server.FavaDiagnosticsEntity> {
              public static class: java.lang.Class<com.google.android.gms.common.server.zaa>;
              public constructor();
            }
          }
          export module sqlite {
            export class CursorWrapper {
              public static class: java.lang.Class<com.google.android.gms.common.sqlite.CursorWrapper>;
              public setWindow(param0: globalAndroid.database.CursorWindow): void;
              public getWindow(): globalAndroid.database.CursorWindow;
              public constructor(param0: globalAndroid.database.Cursor);
              public fillWindow(param0: number, param1: globalAndroid.database.CursorWindow): void;
              public onMove(param0: number, param1: number): boolean;
            }
          }
          export module stats {
            export class ConnectionTracker {
              public static class: java.lang.Class<com.google.android.gms.common.stats.ConnectionTracker>;
              public static getInstance(): com.google.android.gms.common.stats.ConnectionTracker;
              public bindService(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.content.Intent,
                param2: globalAndroid.content.ServiceConnection,
                param3: number,
              ): boolean;
              public unbindService(param0: globalAndroid.content.Context, param1: globalAndroid.content.ServiceConnection): void;
            }
          }
          export module stats {
            export class LoggingConstants {
              public static class: java.lang.Class<com.google.android.gms.common.stats.LoggingConstants>;
              public static EXTRA_WAKE_LOCK_KEY: string;
            }
          }
          export module stats {
            export abstract class StatsEvent extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
              implements com.google.android.gms.common.internal.ReflectedParcelable {
              public static class: java.lang.Class<com.google.android.gms.common.stats.StatsEvent>;
              public constructor();
              public toString(): string;
              public getEventType(): number;
              public getTimeMillis(): number;
            }
            export module StatsEvent {
              export class Types {
                public static class: java.lang.Class<com.google.android.gms.common.stats.StatsEvent.Types>;
                /**
                 * Constructs a new instance of the com.google.android.gms.common.stats.StatsEvent$Types interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
                public static EVENT_TYPE_RELEASE_WAKE_LOCK: number;
                public static EVENT_TYPE_ACQUIRE_WAKE_LOCK: number;
              }
            }
          }
          export module stats {
            export class StatsUtils {
              public static class: java.lang.Class<com.google.android.gms.common.stats.StatsUtils>;
              public constructor();
              public static getEventKey(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): string;
              public static getEventKey(param0: globalAndroid.os.PowerManager.WakeLock, param1: string): string;
            }
          }
          export module stats {
            export class WakeLockEvent extends com.google.android.gms.common.stats.StatsEvent {
              public static class: java.lang.Class<com.google.android.gms.common.stats.WakeLockEvent>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.stats.WakeLockEvent>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(
                param0: number,
                param1: number,
                param2: string,
                param3: number,
                param4: java.util.List<string>,
                param5: string,
                param6: number,
                param7: number,
                param8: string,
                param9: string,
                param10: number,
                param11: number,
                param12: string,
              );
              public getEventType(): number;
              public getTimeMillis(): number;
            }
          }
          export module stats {
            export class WakeLockTracker {
              public static class: java.lang.Class<com.google.android.gms.common.stats.WakeLockTracker>;
              public constructor();
              public registerReleaseEvent(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
              public registerEvent(
                param0: globalAndroid.content.Context,
                param1: string,
                param2: number,
                param3: string,
                param4: string,
                param5: string,
                param6: number,
                param7: java.util.List<string>,
              ): void;
              public registerAcquireEvent(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.content.Intent,
                param2: string,
                param3: string,
                param4: string,
                param5: number,
                param6: string,
              ): void;
              public registerEvent(
                param0: globalAndroid.content.Context,
                param1: string,
                param2: number,
                param3: string,
                param4: string,
                param5: string,
                param6: number,
                param7: java.util.List<string>,
                param8: number,
              ): void;
              public static getInstance(): com.google.android.gms.common.stats.WakeLockTracker;
            }
          }
          export module stats {
            export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.stats.WakeLockEvent> {
              public static class: java.lang.Class<com.google.android.gms.common.stats.zza>;
              public constructor();
            }
          }
          export module util {
            export class AndroidUtilsLight {
              public static class: java.lang.Class<com.google.android.gms.common.util.AndroidUtilsLight>;
              public constructor();
              public static getPackageCertificateHashBytes(param0: globalAndroid.content.Context, param1: string): native.Array<number>;
              public static getDeviceProtectedStorageContext(param0: globalAndroid.content.Context): globalAndroid.content.Context;
            }
          }
          export module util {
            export class ArrayUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.ArrayUtils>;
              public static removeAll(param0: native.Array<any>, param1: native.Array<any>): native.Array<any>;
              public static contains(param0: native.Array<number>, param1: number): boolean;
              public static contains(param0: native.Array<any>, param1: any): boolean;
              public static concat(param0: native.Array<native.Array<any>>): native.Array<any>;
              public static writeArray(param0: java.lang.StringBuilder, param1: native.Array<any>): void;
              public static newArrayList(): java.util.ArrayList<any>;
              public static toPrimitiveArray(param0: java.util.Collection<java.lang.Integer>): native.Array<number>;
              public static writeStringArray(param0: java.lang.StringBuilder, param1: native.Array<string>): void;
              public static toWrapperArray(param0: native.Array<number>): native.Array<java.lang.Integer>;
              public static concatByteArrays(param0: native.Array<native.Array<number>>): native.Array<number>;
              public static writeArray(param0: java.lang.StringBuilder, param1: native.Array<number>): void;
              public static writeArray(param0: java.lang.StringBuilder, param1: native.Array<boolean>): void;
              public static toArrayList(param0: native.Array<any>): java.util.ArrayList<any>;
              public static appendToArray(param0: native.Array<any>, param1: any): native.Array<any>;
            }
          }
          export module util {
            export class Base64Utils {
              public static class: java.lang.Class<com.google.android.gms.common.util.Base64Utils>;
              public constructor();
              public static encode(param0: native.Array<number>): string;
              public static decode(param0: string): native.Array<number>;
              public static encodeUrlSafe(param0: native.Array<number>): string;
              public static encodeUrlSafeNoPadding(param0: native.Array<number>): string;
              public static decodeUrlSafe(param0: string): native.Array<number>;
              public static decodeUrlSafeNoPadding(param0: string): native.Array<number>;
            }
          }
          export module util {
            export class BiConsumer<T, U> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.util.BiConsumer<any, any>>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.BiConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { accept(param0: T, param1: U): void });
              public constructor();
              public accept(param0: T, param1: U): void;
            }
          }
          export module util {
            export class ClientLibraryUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.ClientLibraryUtils>;
              public static getClientVersion(param0: globalAndroid.content.Context, param1: string): number;
              public static isPackageSide(): boolean;
            }
          }
          export module util {
            export class Clock {
              public static class: java.lang.Class<com.google.android.gms.common.util.Clock>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                currentTimeMillis(): number;
                elapsedRealtime(): number;
                nanoTime(): number;
                currentThreadTimeMillis(): number;
              });
              public constructor();
              public currentThreadTimeMillis(): number;
              public nanoTime(): number;
              public elapsedRealtime(): number;
              public currentTimeMillis(): number;
            }
            export module Clock {
              export class CC {
                public static class: java.lang.Class<com.google.android.gms.common.util.Clock.CC>;
                public static currentThreadTimeMillis(param0: com.google.android.gms.common.util.Clock): number;
              }
            }
          }
          export module util {
            export class CollectionUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.CollectionUtils>;
              public static mutableSetOfWithSize(param0: number): java.util.Set<any>;
              public static mapOf(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Map<any, any>;
              public static isEmpty(param0: java.util.Collection<any>): boolean;
              /** @deprecated */
              public static setOf(param0: any, param1: any, param2: any): java.util.Set<any>;
              /** @deprecated */
              public static setOf(param0: native.Array<any>): java.util.Set<any>;
              /** @deprecated */
              public static listOf(): java.util.List<any>;
              public static mapOf(
                param0: any,
                param1: any,
                param2: any,
                param3: any,
                param4: any,
                param5: any,
                param6: any,
                param7: any,
                param8: any,
                param9: any,
                param10: any,
                param11: any,
              ): java.util.Map<any, any>;
              /** @deprecated */
              public static listOf(param0: native.Array<any>): java.util.List<any>;
              /** @deprecated */
              public static listOf(param0: any): java.util.List<any>;
              public static mapOfKeyValueArrays(param0: native.Array<any>, param1: native.Array<any>): java.util.Map<any, any>;
            }
          }
          export module util {
            export class CrashUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.CrashUtils>;
              public constructor();
              public static addDynamiteErrorToDropBox(param0: globalAndroid.content.Context, param1: java.lang.Throwable): boolean;
            }
          }
          export module util {
            export class DataUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.DataUtils>;
              public constructor();
              public static copyStringToBuffer(param0: string, param1: globalAndroid.database.CharArrayBuffer): void;
              public static loadImageBytes(param0: globalAndroid.graphics.Bitmap): native.Array<number>;
            }
          }
          export module util {
            export class DefaultClock extends com.google.android.gms.common.util.Clock {
              public static class: java.lang.Class<com.google.android.gms.common.util.DefaultClock>;
              public currentThreadTimeMillis(): number;
              public nanoTime(): number;
              public elapsedRealtime(): number;
              public currentTimeMillis(): number;
              public static getInstance(): com.google.android.gms.common.util.Clock;
            }
          }
          export module util {
            export class DeviceProperties {
              public static class: java.lang.Class<com.google.android.gms.common.util.DeviceProperties>;
              public static isTablet(param0: globalAndroid.content.res.Resources): boolean;
              public static isTv(param0: globalAndroid.content.Context): boolean;
              public static isLatchsky(param0: globalAndroid.content.Context): boolean;
              public static isWearable(param0: globalAndroid.content.Context): boolean;
              public static isUserBuild(): boolean;
              public static isWearableWithoutPlayStore(param0: globalAndroid.content.Context): boolean;
              public static isSidewinder(param0: globalAndroid.content.Context): boolean;
              public static isAuto(param0: globalAndroid.content.Context): boolean;
            }
          }
          export module util {
            export class DynamiteApi {
              public static class: java.lang.Class<com.google.android.gms.common.util.DynamiteApi>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.DynamiteApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
          export module util {
            export class GmsVersion {
              public static class: java.lang.Class<com.google.android.gms.common.util.GmsVersion>;
              public static VERSION_HALLOUMI: number;
              public static VERSION_JARLSBERG: number;
              public static VERSION_KENAFA: number;
              public static VERSION_LONGHORN: number;
              public static VERSION_MANCHEGO: number;
              public static VERSION_ORLA: number;
              public static VERSION_PARMESAN: number;
              public static VERSION_QUESO: number;
              public static VERSION_REBLOCHON: number;
              public static VERSION_SAGA: number;
              public static isAtLeastFenacho(param0: number): boolean;
            }
          }
          export module util {
            export class Hex {
              public static class: java.lang.Class<com.google.android.gms.common.util.Hex>;
              public constructor();
              public static bytesToStringUppercase(param0: native.Array<number>, param1: boolean): string;
              public static stringToBytes(param0: string): native.Array<number>;
              public static bytesToStringUppercase(param0: native.Array<number>): string;
            }
          }
          export module util {
            export class HexDumpUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.HexDumpUtils>;
              public constructor();
              public static dump(param0: native.Array<number>, param1: number, param2: number, param3: boolean): string;
            }
          }
          export module util {
            export class HttpUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.HttpUtils>;
              public static parse(param0: java.net.URI, param1: string): java.util.Map<string, string>;
            }
          }
          export module util {
            export class IOUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.IOUtils>;
              public static readInputStreamFully(param0: java.io.InputStream): native.Array<number>;
              public static closeQuietly(param0: globalAndroid.os.ParcelFileDescriptor): void;
              public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream, param2: boolean, param3: number): number;
              public static readInputStreamFully(param0: java.io.InputStream, param1: boolean): native.Array<number>;
              public static toByteArray(param0: java.io.InputStream): native.Array<number>;
              public static closeQuietly(param0: java.io.Closeable): void;
              public static isGzipByteBuffer(param0: native.Array<number>): boolean;
              public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream): number;
            }
          }
          export module util {
            export class JsonUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.JsonUtils>;
              public static escapeString(param0: string): string;
              public static areJsonValuesEquivalent(param0: any, param1: any): boolean;
              public static unescapeString(param0: string): string;
            }
          }
          export module util {
            export class MapUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.MapUtils>;
              public constructor();
              public static writeStringMapToJson(param0: java.lang.StringBuilder, param1: java.util.HashMap<string, string>): void;
            }
          }
          export module util {
            export class MurmurHash3 {
              public static class: java.lang.Class<com.google.android.gms.common.util.MurmurHash3>;
              public static murmurhash3_x86_32(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
            }
          }
          export module util {
            export class NumberUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.NumberUtils>;
              public static parseHexLong(param0: string): number;
            }
          }
          export module util {
            export class PlatformVersion {
              public static class: java.lang.Class<com.google.android.gms.common.util.PlatformVersion>;
              public static isAtLeastJellyBean(): boolean;
              public static isAtLeastLollipop(): boolean;
              public static isAtLeastN(): boolean;
              public static isAtLeastO(): boolean;
              public static isAtLeastJellyBeanMR1(): boolean;
              public static isAtLeastHoneycombMR1(): boolean;
              public static isAtLeastHoneycomb(): boolean;
              public static isAtLeastJellyBeanMR2(): boolean;
              public static isAtLeastP(): boolean;
              public static isAtLeastLollipopMR1(): boolean;
              public static isAtLeastM(): boolean;
              public static isAtLeastIceCreamSandwich(): boolean;
              public static isAtLeastKitKatWatch(): boolean;
              public static isAtLeastKitKat(): boolean;
              public static isAtLeastIceCreamSandwichMR1(): boolean;
            }
          }
          export module util {
            export class Predicate<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.common.util.Predicate<any>>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { apply(param0: T): boolean });
              public constructor();
              public apply(param0: T): boolean;
            }
          }
          export module util {
            export class ProcessUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.ProcessUtils>;
              public static getMyProcessName(): string;
            }
          }
          export module util {
            export class RetainForClient {
              public static class: java.lang.Class<com.google.android.gms.common.util.RetainForClient>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.RetainForClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
          export module util {
            export class ScopeUtil {
              public static class: java.lang.Class<com.google.android.gms.common.util.ScopeUtil>;
              public static toScopeString(param0: java.util.Set<com.google.android.gms.common.api.Scope>): native.Array<string>;
            }
          }
          export module util {
            export class SharedPreferencesUtils {
              public static class: java.lang.Class<com.google.android.gms.common.util.SharedPreferencesUtils>;
              /** @deprecated */
              public static publishWorldReadableSharedPreferences(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.content.SharedPreferences.Editor,
                param2: string,
              ): void;
            }
          }
          export module util {
            export class Strings {
              public static class: java.lang.Class<com.google.android.gms.common.util.Strings>;
              public static isEmptyOrWhitespace(param0: string): boolean;
              public static emptyToNull(param0: string): string;
            }
          }
          export module util {
            export class UidVerifier {
              public static class: java.lang.Class<com.google.android.gms.common.util.UidVerifier>;
              public static isGooglePlayServicesUid(param0: globalAndroid.content.Context, param1: number): boolean;
              public static uidHasPackageName(param0: globalAndroid.content.Context, param1: number, param2: string): boolean;
            }
          }
          export module util {
            export class VisibleForTesting {
              public static class: java.lang.Class<com.google.android.gms.common.util.VisibleForTesting>;
              /**
               * Constructs a new instance of the com.google.android.gms.common.util.VisibleForTesting interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
          export module util {
            export class WorkSourceUtil {
              public static class: java.lang.Class<com.google.android.gms.common.util.WorkSourceUtil>;
              public static fromPackage(param0: globalAndroid.content.Context, param1: string): globalAndroid.os.WorkSource;
              public static hasWorkSourcePermission(param0: globalAndroid.content.Context): boolean;
              public static getNames(param0: globalAndroid.os.WorkSource): java.util.List<string>;
              public static fromPackageAndModuleExperimentalPi(
                param0: globalAndroid.content.Context,
                param1: string,
                param2: string,
              ): globalAndroid.os.WorkSource;
            }
          }
          export module util {
            export module concurrent {
              export class HandlerExecutor {
                public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.HandlerExecutor>;
                public execute(param0: java.lang.Runnable): void;
                public constructor(param0: globalAndroid.os.Looper);
              }
            }
          }
          export module util {
            export module concurrent {
              export class NamedThreadFactory {
                public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.NamedThreadFactory>;
                public constructor(param0: string);
                public newThread(param0: java.lang.Runnable): java.lang.Thread;
              }
            }
          }
          export module util {
            export module concurrent {
              export class NumberedThreadFactory {
                public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.NumberedThreadFactory>;
                public constructor(param0: string);
                public newThread(param0: java.lang.Runnable): java.lang.Thread;
              }
            }
          }
          export module util {
            export module concurrent {
              export class zza {
                public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.zza>;
                public constructor(param0: java.lang.Runnable, param1: number);
                public run(): void;
              }
            }
          }
          export module util {
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.common.util.zza>;
            }
          }
          export module util {
            export class zzb {
              public static class: java.lang.Class<com.google.android.gms.common.util.zzb>;
            }
          }
          export module util {
            export class zzc {
              public static class: java.lang.Class<com.google.android.gms.common.util.zzc>;
              public static isMainThread(): boolean;
            }
          }
          export module util {
            export class zzd {
              public static class: java.lang.Class<com.google.android.gms.common.util.zzd>;
              public static unescape(param0: string): string;
            }
          }
          export module wrappers {
            export class InstantApps {
              public static class: java.lang.Class<com.google.android.gms.common.wrappers.InstantApps>;
              public constructor();
              public static isInstantApp(param0: globalAndroid.content.Context): boolean;
            }
          }
          export module wrappers {
            export class PackageManagerWrapper {
              public static class: java.lang.Class<com.google.android.gms.common.wrappers.PackageManagerWrapper>;
              public checkCallingOrSelfPermission(param0: string): number;
              public getPackagesForUid(param0: number): native.Array<string>;
              public checkPermission(param0: string, param1: string): number;
              public getApplicationInfo(param0: string, param1: number): globalAndroid.content.pm.ApplicationInfo;
              public isCallerInstantApp(): boolean;
              public constructor(param0: globalAndroid.content.Context);
              public getPackageInfo(param0: string, param1: number): globalAndroid.content.pm.PackageInfo;
              public getApplicationLabel(param0: string): string;
            }
          }
          export module wrappers {
            export class Wrappers {
              public static class: java.lang.Class<com.google.android.gms.common.wrappers.Wrappers>;
              public constructor();
              public static packageManager(param0: globalAndroid.content.Context): com.google.android.gms.common.wrappers.PackageManagerWrapper;
            }
          }
          export class zaa extends com.google.android.gms.tasks.Continuation<
            java.util.Map<com.google.android.gms.common.api.internal.zai<any>, string>,
            java.lang.Void
          > {
            public static class: java.lang.Class<com.google.android.gms.common.zaa>;
            public then(param0: com.google.android.gms.tasks.Task<any>): any;
          }
          export class zza extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.ConnectionResult> {
            public static class: java.lang.Class<com.google.android.gms.common.zza>;
            public constructor();
          }
          export class zzb extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.Feature> {
            public static class: java.lang.Class<com.google.android.gms.common.zzb>;
            public constructor();
          }
          export class zzc {
            public static class: java.lang.Class<com.google.android.gms.common.zzc>;
          }
          export class zzd {
            public static class: java.lang.Class<com.google.android.gms.common.zzd>;
            public call(): any;
          }
          export abstract class zze extends com.google.android.gms.common.internal.zzj {
            public static class: java.lang.Class<com.google.android.gms.common.zze>;
            public constructor();
            public constructor(param0: native.Array<number>);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string);
          }
          export class zzf extends com.google.android.gms.common.zze {
            public static class: java.lang.Class<com.google.android.gms.common.zzf>;
          }
          export abstract class zzg extends com.google.android.gms.common.zze {
            public static class: java.lang.Class<com.google.android.gms.common.zzg>;
          }
          export class zzh {
            public static class: java.lang.Class<com.google.android.gms.common.zzh>;
          }
          export class zzi extends com.google.android.gms.common.zzg {
            public static class: java.lang.Class<com.google.android.gms.common.zzi>;
          }
          export class zzj extends com.google.android.gms.common.zzg {
            public static class: java.lang.Class<com.google.android.gms.common.zzj>;
          }
          export class zzk extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
            public static class: java.lang.Class<com.google.android.gms.common.zzk>;
            public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.zzk>*/;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
          }
          export class zzl extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.common.zzk>*/ {
            public static class: java.lang.Class<com.google.android.gms.common.zzl>;
            public constructor();
          }
          export class zzm {
            public static class: java.lang.Class<com.google.android.gms.common.zzm>;
          }
          export class zzn {
            public static class: java.lang.Class<com.google.android.gms.common.zzn>;
          }
          export class zzo extends com.google.android.gms.common.zzm {
            public static class: java.lang.Class<com.google.android.gms.common.zzo>;
          }
        }
        export module dynamic {
          export abstract class DeferredLifecycleHelper<T> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.dynamic.DeferredLifecycleHelper<any>>;
            public constructor();
            public onResume(): void;
            public createDelegate(param0: com.google.android.gms.dynamic.OnDelegateCreatedListener<T>): void;
            public handleGooglePlayUnavailable(param0: globalAndroid.widget.FrameLayout): void;
            public onStop(): void;
            public onLowMemory(): void;
            public onPause(): void;
            public onDestroyView(): void;
            public onDestroy(): void;
            public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
            public onCreate(param0: globalAndroid.os.Bundle): void;
            public onCreateView(
              param0: globalAndroid.view.LayoutInflater,
              param1: globalAndroid.view.ViewGroup,
              param2: globalAndroid.os.Bundle,
            ): globalAndroid.view.View;
            public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
            public static showGooglePlayUnavailableMessage(param0: globalAndroid.widget.FrameLayout): void;
            public onStart(): void;
            public getDelegate(): T;
          }
          export module DeferredLifecycleHelper {
            export class zaa {
              public static class: java.lang.Class<com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa>;
              /**
               * Constructs a new instance of the com.google.android.gms.dynamic.DeferredLifecycleHelper$zaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getState(): number; zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void });
              public constructor();
              public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
              public getState(): number;
            }
          }
          export class FragmentWrapper extends com.google.android.gms.dynamic.IFragmentWrapper.Stub {
            public static class: java.lang.Class<com.google.android.gms.dynamic.FragmentWrapper>;
            public static wrap(param0: globalAndroid.app.Fragment): com.google.android.gms.dynamic.FragmentWrapper;
            public setRetainInstance(param0: boolean): void;
            public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
            public isRemoving(): boolean;
            public setHasOptionsMenu(param0: boolean): void;
            public setMenuVisibility(param0: boolean): void;
            public getRetainInstance(): boolean;
            public getUserVisibleHint(): boolean;
            public isResumed(): boolean;
            public getId(): number;
            public isInLayout(): boolean;
            public getArguments(): globalAndroid.os.Bundle;
            public isHidden(): boolean;
            public startActivity(param0: globalAndroid.content.Intent): void;
            public getTargetRequestCode(): number;
            public isVisible(): boolean;
            public isAdded(): boolean;
            public getTag(): string;
            public isDetached(): boolean;
            public setUserVisibleHint(param0: boolean): void;
          }
          export class IFragmentWrapper {
            public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper>;
            /**
             * Constructs a new instance of the com.google.android.gms.dynamic.IFragmentWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              zzad(): com.google.android.gms.dynamic.IObjectWrapper;
              getArguments(): globalAndroid.os.Bundle;
              getId(): number;
              zzae(): com.google.android.gms.dynamic.IFragmentWrapper;
              zzaf(): com.google.android.gms.dynamic.IObjectWrapper;
              getRetainInstance(): boolean;
              getTag(): string;
              zzag(): com.google.android.gms.dynamic.IFragmentWrapper;
              getTargetRequestCode(): number;
              getUserVisibleHint(): boolean;
              zzah(): com.google.android.gms.dynamic.IObjectWrapper;
              isAdded(): boolean;
              isDetached(): boolean;
              isHidden(): boolean;
              isInLayout(): boolean;
              isRemoving(): boolean;
              isResumed(): boolean;
              isVisible(): boolean;
              zza(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
              setHasOptionsMenu(param0: boolean): void;
              setMenuVisibility(param0: boolean): void;
              setRetainInstance(param0: boolean): void;
              setUserVisibleHint(param0: boolean): void;
              startActivity(param0: globalAndroid.content.Intent): void;
              startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
              zzb(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
            });
            public constructor();
            public setRetainInstance(param0: boolean): void;
            public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
            public isRemoving(): boolean;
            public setHasOptionsMenu(param0: boolean): void;
            public setMenuVisibility(param0: boolean): void;
            public getRetainInstance(): boolean;
            public getUserVisibleHint(): boolean;
            public isResumed(): boolean;
            public getId(): number;
            public isInLayout(): boolean;
            public getArguments(): globalAndroid.os.Bundle;
            public isHidden(): boolean;
            public startActivity(param0: globalAndroid.content.Intent): void;
            public getTargetRequestCode(): number;
            public isVisible(): boolean;
            public isAdded(): boolean;
            public getTag(): string;
            public isDetached(): boolean;
            public setUserVisibleHint(param0: boolean): void;
          }
          export module IFragmentWrapper {
            export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.dynamic.IFragmentWrapper {
              public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper.Stub>;
              public constructor();
              public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.dynamic.IFragmentWrapper;
              public isResumed(): boolean;
              public isAdded(): boolean;
              public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
              public isVisible(): boolean;
              public isDetached(): boolean;
              public isRemoving(): boolean;
              public getTag(): string;
              public startActivity(param0: globalAndroid.content.Intent): void;
              public setRetainInstance(param0: boolean): void;
              public setUserVisibleHint(param0: boolean): void;
              public getArguments(): globalAndroid.os.Bundle;
              public isHidden(): boolean;
              public getRetainInstance(): boolean;
              public getUserVisibleHint(): boolean;
              public constructor(param0: string);
              public setHasOptionsMenu(param0: boolean): void;
              public setMenuVisibility(param0: boolean): void;
              public getId(): number;
              public getTargetRequestCode(): number;
              public isInLayout(): boolean;
            }
            export module Stub {
              export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamic.IFragmentWrapper {
                public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper.Stub.zza>;
                public setRetainInstance(param0: boolean): void;
                public isRemoving(): boolean;
                public startActivity(param0: globalAndroid.content.Intent): void;
                public getArguments(): globalAndroid.os.Bundle;
                public getRetainInstance(): boolean;
                public isResumed(): boolean;
                public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
                public setHasOptionsMenu(param0: boolean): void;
                public setMenuVisibility(param0: boolean): void;
                public isHidden(): boolean;
                public isInLayout(): boolean;
                public getId(): number;
                public getUserVisibleHint(): boolean;
                public getTag(): string;
                public getTargetRequestCode(): number;
                public isAdded(): boolean;
                public isDetached(): boolean;
                public isVisible(): boolean;
                public setUserVisibleHint(param0: boolean): void;
              }
            }
          }
          export class IObjectWrapper {
            public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper>;
            /**
             * Constructs a new instance of the com.google.android.gms.dynamic.IObjectWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
          }
          export module IObjectWrapper {
            export class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.dynamic.IObjectWrapper {
              public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper.Stub>;
              public constructor();
              public static asInterface(param0: globalAndroid.os.IBinder): com.google.android.gms.dynamic.IObjectWrapper;
              public constructor(param0: string);
            }
            export module Stub {
              export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamic.IObjectWrapper {
                public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper.Stub.zza>;
              }
            }
          }
          export class LifecycleDelegate {
            public static class: java.lang.Class<com.google.android.gms.dynamic.LifecycleDelegate>;
            /**
             * Constructs a new instance of the com.google.android.gms.dynamic.LifecycleDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
              onCreate(param0: globalAndroid.os.Bundle): void;
              onCreateView(
                param0: globalAndroid.view.LayoutInflater,
                param1: globalAndroid.view.ViewGroup,
                param2: globalAndroid.os.Bundle,
              ): globalAndroid.view.View;
              onStart(): void;
              onResume(): void;
              onPause(): void;
              onStop(): void;
              onDestroyView(): void;
              onDestroy(): void;
              onLowMemory(): void;
              onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
            });
            public constructor();
            public onDestroyView(): void;
            public onDestroy(): void;
            public onInflate(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle): void;
            public onResume(): void;
            public onCreate(param0: globalAndroid.os.Bundle): void;
            public onCreateView(
              param0: globalAndroid.view.LayoutInflater,
              param1: globalAndroid.view.ViewGroup,
              param2: globalAndroid.os.Bundle,
            ): globalAndroid.view.View;
            public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
            public onStop(): void;
            public onLowMemory(): void;
            public onStart(): void;
            public onPause(): void;
          }
          export class ObjectWrapper<T> extends com.google.android.gms.dynamic.IObjectWrapper.Stub {
            public static class: java.lang.Class<com.google.android.gms.dynamic.ObjectWrapper<any>>;
            public static unwrap(param0: com.google.android.gms.dynamic.IObjectWrapper): any;
            public static wrap(param0: any): com.google.android.gms.dynamic.IObjectWrapper;
          }
          export class OnDelegateCreatedListener<T> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.dynamic.OnDelegateCreatedListener<any>>;
            /**
             * Constructs a new instance of the com.google.android.gms.dynamic.OnDelegateCreatedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onDelegateCreated(param0: T): void });
            public constructor();
            public onDelegateCreated(param0: T): void;
          }
          export abstract class RemoteCreator<T> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.dynamic.RemoteCreator<any>>;
            public getRemoteCreator(param0: globalAndroid.os.IBinder): T;
            public getRemoteCreatorInstance(param0: globalAndroid.content.Context): T;
            public constructor(param0: string);
          }
          export module RemoteCreator {
            export class RemoteCreatorException {
              public static class: java.lang.Class<com.google.android.gms.dynamic.RemoteCreator.RemoteCreatorException>;
              public constructor(param0: string);
              public constructor(param0: string, param1: java.lang.Throwable);
            }
          }
          export class SupportFragmentWrapper extends com.google.android.gms.dynamic.IFragmentWrapper.Stub {
            public static class: java.lang.Class<com.google.android.gms.dynamic.SupportFragmentWrapper>;
            public setRetainInstance(param0: boolean): void;
            public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
            public isRemoving(): boolean;
            public setHasOptionsMenu(param0: boolean): void;
            public setMenuVisibility(param0: boolean): void;
            public getRetainInstance(): boolean;
            public getUserVisibleHint(): boolean;
            public isResumed(): boolean;
            public getId(): number;
            public isInLayout(): boolean;
            public getArguments(): globalAndroid.os.Bundle;
            public isHidden(): boolean;
            public startActivity(param0: globalAndroid.content.Intent): void;
            public getTargetRequestCode(): number;
            public isVisible(): boolean;
            public isAdded(): boolean;
            public getTag(): string;
            public isDetached(): boolean;
            public static wrap(param0: androidx.fragment.app.Fragment): com.google.android.gms.dynamic.SupportFragmentWrapper;
            public setUserVisibleHint(param0: boolean): void;
          }
        }
        export module dynamic {
          export class zaa extends com.google.android.gms.dynamic.OnDelegateCreatedListener<any> {
            public static class: java.lang.Class<com.google.android.gms.dynamic.zaa>;
            public onDelegateCreated(param0: any): void;
          }
        }
        export module dynamic {
          export class zab extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
            public static class: java.lang.Class<com.google.android.gms.dynamic.zab>;
            public getState(): number;
            public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
          }
        }
        export module dynamic {
          export class zac extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
            public static class: java.lang.Class<com.google.android.gms.dynamic.zac>;
            public getState(): number;
            public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
          }
        }
        export module dynamic {
          export class zad extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
            public static class: java.lang.Class<com.google.android.gms.dynamic.zad>;
            public getState(): number;
            public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
          }
        }
        export module dynamic {
          export class zae {
            public static class: java.lang.Class<com.google.android.gms.dynamic.zae>;
            public onClick(param0: globalAndroid.view.View): void;
          }
        }
        export module dynamic {
          export class zaf extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
            public static class: java.lang.Class<com.google.android.gms.dynamic.zaf>;
            public getState(): number;
            public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
          }
        }
        export module dynamic {
          export class zag extends com.google.android.gms.dynamic.DeferredLifecycleHelper.zaa {
            public static class: java.lang.Class<com.google.android.gms.dynamic.zag>;
            public getState(): number;
            public zaa(param0: com.google.android.gms.dynamic.LifecycleDelegate): void;
          }
        }
        export module dynamite {
          export class DynamiteModule {
            public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule>;
            public static PREFER_REMOTE: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
            public static PREFER_HIGHEST_OR_LOCAL_VERSION: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
            public static PREFER_HIGHEST_OR_LOCAL_VERSION_NO_FORCE_STAGING: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
            public static PREFER_HIGHEST_OR_REMOTE_VERSION: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
            public static getRemoteVersion(param0: globalAndroid.content.Context, param1: string): number;
            public static getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
            public getModuleContext(): globalAndroid.content.Context;
            public instantiate(param0: string): globalAndroid.os.IBinder;
            public static load(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy,
              param2: string,
            ): com.google.android.gms.dynamite.DynamiteModule;
          }
          export module DynamiteModule {
            export class DynamiteLoaderClassLoader {
              public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.DynamiteLoaderClassLoader>;
              public static sClassLoader: java.lang.ClassLoader;
              public constructor();
            }
            export class LoadingException {
              public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.LoadingException>;
            }
            export class VersionPolicy {
              public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy>;
              /**
               * Constructs a new instance of the com.google.android.gms.dynamite.DynamiteModule$VersionPolicy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(
                  param0: globalAndroid.content.Context,
                  param1: string,
                  param2: any /* com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza*/,
                ): any /* com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zzb*/;
              });
              public constructor();
            }
            export module VersionPolicy {
              export class zza {
                public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza>;
                /**
                 * Constructs a new instance of the com.google.android.gms.dynamite.DynamiteModule$VersionPolicy$zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  zza(param0: globalAndroid.content.Context, param1: string, param2: boolean): number;
                  getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
                });
                public constructor();
                public getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
              }
              export class zzb {
                public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zzb>;
                public constructor();
              }
            }
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.zza>;
            }
            export class zzb extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza {
              public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.zzb>;
              public constructor(param0: number, param1: number);
              public getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
            }
          }
          export module descriptors {
            export module com {
              export module google {
                export module android {
                  export module gms {
                    export module flags {
                      export class ModuleDescriptor {
                        public static class: java.lang.Class<globalCom.google.android.gms.dynamite.descriptors.com.google.android.gms.flags.ModuleDescriptor>;
                        public static MODULE_ID: string;
                        public static MODULE_VERSION: number;
                        public constructor();
                      }
                    }
                  }
                }
              }
            }
          }

          export class zza extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zza>;
            public getLocalVersion(param0: globalAndroid.content.Context, param1: string): number;
          }
          export class zzb extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzb>;
          }
          export class zzc extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzc>;
          }
          export class zzd extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzd>;
          }
          export class zze extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zze>;
          }
          export class zzf extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzf>;
          }
          export class zzg extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzg>;
          }
          export class zzh {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzh>;
            public loadClass(param0: string, param1: boolean): java.lang.Class<any>;
          }
          export class zzi {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzi>;
            /**
             * Constructs a new instance of the com.google.android.gms.dynamite.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
              zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: boolean): number;
              zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
              zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: boolean): number;
              zzaj(): number;
            });
            public constructor();
          }
          export class zzj extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamite.zzi {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzj>;
          }
          export class zzk {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzk>;
            /**
             * Constructs a new instance of the com.google.android.gms.dynamite.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              zza(
                param0: com.google.android.gms.dynamic.IObjectWrapper,
                param1: string,
                param2: number,
                param3: com.google.android.gms.dynamic.IObjectWrapper,
              ): com.google.android.gms.dynamic.IObjectWrapper;
              zzb(
                param0: com.google.android.gms.dynamic.IObjectWrapper,
                param1: string,
                param2: number,
                param3: com.google.android.gms.dynamic.IObjectWrapper,
              ): com.google.android.gms.dynamic.IObjectWrapper;
            });
            public constructor();
          }
          export class zzl extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamite.zzk {
            public static class: java.lang.Class<com.google.android.gms.dynamite.zzl>;
          }
        }
        export module flags {
          export abstract class Flag<T> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.flags.Flag<any>>;
            public get(): T;
            /** @deprecated */
            public getSource(): number;
            /** @deprecated */
            public static define(param0: number, param1: string, param2: java.lang.Boolean): com.google.android.gms.flags.Flag.BooleanFlag;
            /** @deprecated */
            public static define(param0: number, param1: string, param2: number): com.google.android.gms.flags.Flag.LongFlag;
            /** @deprecated */
            public static define(param0: number, param1: string, param2: string): com.google.android.gms.flags.Flag.StringFlag;
            public getKey(): string;
            /** @deprecated */
            public static define(param0: number, param1: string, param2: number): com.google.android.gms.flags.Flag.IntegerFlag;
          }
          export module Flag {
            export class BooleanFlag extends com.google.android.gms.flags.Flag<java.lang.Boolean> {
              public static class: java.lang.Class<com.google.android.gms.flags.Flag.BooleanFlag>;
              public constructor(param0: number, param1: string, param2: java.lang.Boolean);
            }
            export class IntegerFlag extends com.google.android.gms.flags.Flag<java.lang.Integer> {
              public static class: java.lang.Class<com.google.android.gms.flags.Flag.IntegerFlag>;
              public constructor(param0: number, param1: string, param2: java.lang.Integer);
            }
            export class LongFlag extends com.google.android.gms.flags.Flag<java.lang.Long> {
              public static class: java.lang.Class<com.google.android.gms.flags.Flag.LongFlag>;
              public constructor(param0: number, param1: string, param2: java.lang.Long);
            }
            export class StringFlag extends com.google.android.gms.flags.Flag<string> {
              public static class: java.lang.Class<com.google.android.gms.flags.Flag.StringFlag>;
              public constructor(param0: number, param1: string, param2: string);
            }
          }
          export class FlagRegistry {
            public static class: java.lang.Class<com.google.android.gms.flags.FlagRegistry>;
            public constructor();
            public static initialize(param0: globalAndroid.content.Context): void;
          }
          export class FlagSource {
            public static class: java.lang.Class<com.google.android.gms.flags.FlagSource>;
            /**
             * Constructs a new instance of the com.google.android.gms.flags.FlagSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {});
            public constructor();
            public static G: number;
          }
          export class Singletons {
            public static class: java.lang.Class<com.google.android.gms.flags.Singletons>;
            public static flagRegistry(): com.google.android.gms.flags.FlagRegistry;
          }
          export module impl {
            export class FlagProviderImpl extends com.google.android.gms.flags.zzd {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.FlagProviderImpl>;
              public constructor();
              public getLongFlagValue(param0: string, param1: number, param2: number): number;
              public constructor(param0: string);
              public init(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
              public getStringFlagValue(param0: string, param1: string, param2: number): string;
              public getBooleanFlagValue(param0: string, param1: boolean, param2: number): boolean;
              public getIntFlagValue(param0: string, param1: number, param2: number): number;
            }
          }
          export module impl {
            export class zza<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.zza<any>>;
            }
          }
          export module impl {
            export class zzb extends com.google.android.gms.flags.impl.zza<java.lang.Boolean> {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.zzb>;
            }
          }
          export module impl {
            export class zzc extends java.util.concurrent.Callable<java.lang.Boolean> {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.zzc>;
            }
          }
          export module impl {
            export class zzd extends com.google.android.gms.flags.impl.zza<java.lang.Integer> {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.zzd>;
            }
          }
          export module impl {
            export class zze extends java.util.concurrent.Callable<java.lang.Integer> {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.zze>;
            }
          }
          export module impl {
            export class zzf extends com.google.android.gms.flags.impl.zza<java.lang.Long> {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.zzf>;
            }
          }
          export module impl {
            export class zzg extends java.util.concurrent.Callable<java.lang.Long> {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.zzg>;
            }
          }
          export module impl {
            export class zzh extends java.lang.Object /* com.google.android.gms.flags.impl.zza<string>*/ {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.zzh>;
            }
          }
          export module impl {
            export class zzi extends java.util.concurrent.Callable<string> {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.zzi>;
            }
          }
          export module impl {
            export class zzj {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.zzj>;
            }
          }
          export module impl {
            export class zzk extends java.util.concurrent.Callable<globalAndroid.content.SharedPreferences> {
              public static class: java.lang.Class<com.google.android.gms.flags.impl.zzk>;
            }
          }
          export class zza {
            public static class: java.lang.Class<com.google.android.gms.flags.zza>;
          }
          export class zzb {
            public static class: java.lang.Class<com.google.android.gms.flags.zzb>;
            public constructor();
            public initialize(param0: globalAndroid.content.Context): void;
          }
          export class zzc {
            public static class: java.lang.Class<com.google.android.gms.flags.zzc>;
            /**
             * Constructs a new instance of the com.google.android.gms.flags.zzc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              init(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
              getBooleanFlagValue(param0: string, param1: boolean, param2: number): boolean;
              getIntFlagValue(param0: string, param1: number, param2: number): number;
              getLongFlagValue(param0: string, param1: number, param2: number): number;
              getStringFlagValue(param0: string, param1: string, param2: number): string;
            });
            public constructor();
            public init(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
            public getBooleanFlagValue(param0: string, param1: boolean, param2: number): boolean;
            public getStringFlagValue(param0: string, param1: string, param2: number): string;
            public getLongFlagValue(param0: string, param1: number, param2: number): number;
            public getIntFlagValue(param0: string, param1: number, param2: number): number;
          }
          export abstract class zzd extends com.google.android.gms.internal.flags.zzb implements com.google.android.gms.flags.zzc {
            public static class: java.lang.Class<com.google.android.gms.flags.zzd>;
            public constructor();
            public init(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
            public static asInterface(param0: globalAndroid.os.IBinder): any /* com.google.android.gms.flags.zzc*/;
            public getBooleanFlagValue(param0: string, param1: boolean, param2: number): boolean;
            public getStringFlagValue(param0: string, param1: string, param2: number): string;
            public getLongFlagValue(param0: string, param1: number, param2: number): number;
            public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            public getIntFlagValue(param0: string, param1: number, param2: number): number;
            public constructor(param0: string);
          }
          export class zze extends com.google.android.gms.internal.flags.zza implements com.google.android.gms.flags.zzc {
            public static class: java.lang.Class<com.google.android.gms.flags.zze>;
            public init(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
            public getBooleanFlagValue(param0: string, param1: boolean, param2: number): boolean;
            public getStringFlagValue(param0: string, param1: string, param2: number): string;
            public getLongFlagValue(param0: string, param1: number, param2: number): number;
            public getIntFlagValue(param0: string, param1: number, param2: number): number;
          }
        }
        export module internal {
          export module base {
            export class zaa {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zaa>;
              public constructor(param0: globalAndroid.os.IBinder, param1: string);
              public asBinder(): globalAndroid.os.IBinder;
              public zaa(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
              public zac(param0: number, param1: globalAndroid.os.Parcel): void;
              public zaa(): globalAndroid.os.Parcel;
              public zab(param0: number, param1: globalAndroid.os.Parcel): void;
            }
            export class zab {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zab>;
              public asBinder(): globalAndroid.os.IBinder;
              public constructor(param0: string);
              public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
            export class zac {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zac>;
              public static writeBoolean(param0: globalAndroid.os.Parcel, param1: boolean): void;
              public static zaa(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable.Creator<any>): globalAndroid.os.Parcelable;
              public static zaa(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable): void;
              public static zaa(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.IInterface): void;
            }
            export class zad {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zad>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.base.zad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class zae {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zae>;
              public invalidateDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
              public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
              public unscheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
              public startTransition(param0: number): void;
              public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
              public draw(param0: globalAndroid.graphics.Canvas): void;
              public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
              public getIntrinsicHeight(): number;
              public scheduleDrawable(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
              public getChangingConfigurations(): number;
              public mutate(): globalAndroid.graphics.drawable.Drawable;
              public setAlpha(param0: number): void;
              public zacf(): globalAndroid.graphics.drawable.Drawable;
              public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.graphics.drawable.Drawable);
              public getIntrinsicWidth(): number;
              public getOpacity(): number;
            }
            export class zaf {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zaf>;
            }
            export class zag {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zag>;
              public setAlpha(param0: number): void;
              public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
              public draw(param0: globalAndroid.graphics.Canvas): void;
              public getOpacity(): number;
              public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
            }
            export class zah {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zah>;
              public newDrawable(): globalAndroid.graphics.drawable.Drawable;
              public getChangingConfigurations(): number;
            }
            export class zai {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zai>;
              public newDrawable(): globalAndroid.graphics.drawable.Drawable;
              public getChangingConfigurations(): number;
            }
            export class zaj {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zaj>;
              public onMeasure(param0: number, param1: number): void;
              public static zach(): number;
              public onDraw(param0: globalAndroid.graphics.Canvas): void;
              public static zaa(param0: globalAndroid.net.Uri): void;
              public static zai(param0: number): void;
            }
            export class zak extends androidx.collection.LruCache<any, globalAndroid.graphics.drawable.Drawable> {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zak>;
              public constructor();
            }
            export class zal {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zal>;
              public constructor();
              public constructor(param0: globalAndroid.os.Looper);
              public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
            }
            export class zam {
              public static class: java.lang.Class<com.google.android.gms.internal.base.zam>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.base.zam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zza extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zza>;
              public asBinder(): globalAndroid.os.IBinder;
              public constructor(param0: string);
              public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
            export class zzaa {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaa>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzaa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onPostExecute(param0: globalAndroid.graphics.Bitmap): void });
              public constructor();
              public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzab {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzab>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzac extends com.google.android.gms.internal.cast.zzai {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzac>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzad {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzad>;
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzae {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzae>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzb(param0: globalAndroid.net.Uri): globalAndroid.graphics.Bitmap });
              public constructor();
            }
            export module zzae {
              export abstract class zza extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.internal.cast.zzae {
                public static class: java.lang.Class<com.google.android.gms.internal.cast.zzae.zza>;
              }
            }
          }
        }
        export module internal {
          export module cast {
            export class zzaf {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaf>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzn(): number; zza(param0: number, param1: number): void });
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzag extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.internal.cast.zzae {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzag>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzah extends com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzah>;
              public onAdBreakStatusUpdated(): void;
              public onStatusUpdated(): void;
              public onMetadataUpdated(): void;
              public onSendingRemoteMediaRequest(): void;
              public onPreloadStatusUpdated(): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.cast.framework.CastOptions,
                param2: any /* com.google.android.gms.internal.cast.zzv*/,
              );
              public onQueueStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzai extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.internal.cast.zzaf {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzai>;
              public constructor();
              public constructor(param0: string);
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzaj extends com.google.android.gms.internal.cast.zzz {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaj>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzak {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzak>;
              public run(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzal {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzal>;
              public onMediaButtonEvent(param0: globalAndroid.content.Intent): boolean;
              public onStop(): void;
              public onPause(): void;
              public onPlay(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzam extends com.google.android.gms.internal.cast.zzz {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzam>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzan {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzan>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzao extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzao>;
              public constructor();
              public onSessionEnded(): void;
              public constructor(param0: globalAndroid.view.View, param1: globalAndroid.content.Context);
              public onSendingRemoteMediaRequest(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzap extends com.google.android.gms.cast.framework.media.uicontroller.UIController
              implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzap>;
              public constructor();
              public onProgressUpdated(param0: number, param1: number): void;
              public constructor(
                param0: com.google.android.gms.cast.framework.media.widget.CastSeekBar,
                param1: number,
                param2: any /* com.google.android.gms.cast.framework.media.uicontroller.zza*/,
              );
              public onSessionEnded(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzaq extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaq>;
              public constructor();
              public constructor(
                param0: globalAndroid.widget.ImageView,
                param1: globalAndroid.content.Context,
                param2: com.google.android.gms.cast.framework.media.ImageHints,
                param3: number,
              );
              public onSessionEnded(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzar extends com.google.android.gms.cast.framework.media.uicontroller.UIController
              implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzar>;
              public constructor();
              public onProgressUpdated(param0: number, param1: number): void;
              public onSessionEnded(): void;
              public onSendingRemoteMediaRequest(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public constructor(param0: globalAndroid.view.View, param1: any /* com.google.android.gms.cast.framework.media.uicontroller.zza*/);
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzas extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzas>;
              public constructor();
              public constructor(
                param0: globalAndroid.widget.ImageView,
                param1: globalAndroid.content.Context,
                param2: com.google.android.gms.cast.framework.media.ImageHints,
                param3: number,
                param4: globalAndroid.view.View,
              );
              public onSessionEnded(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzat extends com.google.android.gms.internal.cast.zzz {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzat>;
            }
            export class zzau extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzau>;
              public constructor();
              public constructor(param0: globalAndroid.view.View);
              public onSessionEnded(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
            }
            export class zzav extends com.google.android.gms.internal.cast.zzz {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzav>;
            }
            export class zzaw extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaw>;
              public constructor();
              public constructor(param0: globalAndroid.widget.TextView, param1: java.util.List<string>);
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzax extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzax>;
              public constructor();
              public constructor(param0: globalAndroid.view.View);
              public onSessionEnded(): void;
              public onSendingRemoteMediaRequest(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzay extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzay>;
              public constructor();
              public onSessionEnded(): void;
              public onSendingRemoteMediaRequest(): void;
              public constructor(param0: globalAndroid.widget.ImageView, param1: globalAndroid.content.Context);
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzaz extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzaz>;
              public constructor();
              public constructor(param0: globalAndroid.widget.TextView, param1: java.util.List<string>);
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzb {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzb>;
              public constructor(param0: globalAndroid.os.IBinder, param1: string);
              public asBinder(): globalAndroid.os.IBinder;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzba extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzba>;
              public constructor();
              public constructor(
                param0: globalAndroid.widget.ImageView,
                param1: globalAndroid.content.Context,
                param2: globalAndroid.graphics.drawable.Drawable,
                param3: globalAndroid.graphics.drawable.Drawable,
                param4: globalAndroid.graphics.drawable.Drawable,
                param5: globalAndroid.view.View,
                param6: boolean,
              );
              public onSessionEnded(): void;
              public onSendingRemoteMediaRequest(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbb extends com.google.android.gms.cast.Cast.Listener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbb>;
              public onVolumeChanged(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbc extends com.google.android.gms.cast.framework.media.uicontroller.UIController
              implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbc>;
              public constructor();
              public onProgressUpdated(param0: number, param1: number): void;
              public onSessionEnded(): void;
              public onSendingRemoteMediaRequest(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public constructor(param0: globalAndroid.view.View, param1: any /* com.google.android.gms.cast.framework.media.uicontroller.zza*/);
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbd extends com.google.android.gms.cast.framework.media.uicontroller.UIController
              implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbd>;
              public constructor();
              public onProgressUpdated(param0: number, param1: number): void;
              public constructor(param0: globalAndroid.widget.ProgressBar, param1: number);
              public onSessionEnded(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbe {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbe>;
              public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbf extends com.google.android.gms.cast.framework.media.uicontroller.UIController
              implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbf>;
              public constructor();
              public onProgressUpdated(param0: number, param1: number): void;
              public onSessionEnded(): void;
              public constructor(
                param0: globalAndroid.widget.SeekBar,
                param1: number,
                param2: any /* com.google.android.gms.cast.framework.media.uicontroller.zza*/,
              );
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbg extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbg>;
              public constructor();
              public onSessionEnded(): void;
              public onSendingRemoteMediaRequest(): void;
              public constructor(param0: globalAndroid.view.View, param1: number);
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbh extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbh>;
              public constructor();
              public onSessionEnded(): void;
              public onSendingRemoteMediaRequest(): void;
              public constructor(param0: globalAndroid.view.View, param1: number);
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbi extends com.google.android.gms.cast.framework.media.uicontroller.UIController
              implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbi>;
              public constructor();
              public onProgressUpdated(param0: number, param1: number): void;
              public constructor(param0: globalAndroid.widget.TextView, param1: string, param2: globalAndroid.view.View);
              public onSessionEnded(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbj extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbj>;
              public constructor();
              public constructor(param0: globalAndroid.widget.TextView);
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzbk extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbk>;
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbl extends com.google.android.gms.internal.cast.zzbk
              implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbl>;
              public constructor();
              public constructor(param0: globalAndroid.widget.TextView, param1: number, param2: string);
              public onProgressUpdated(param0: number, param1: number): void;
              public onSessionEnded(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbm extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbm>;
              public constructor();
              public onSessionEnded(): void;
              public constructor(param0: globalAndroid.view.View, param1: number);
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbn extends com.google.android.gms.cast.framework.media.uicontroller.UIController {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbn>;
              public constructor();
              public onSessionEnded(): void;
              public constructor(param0: globalAndroid.view.View, param1: number);
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbo extends com.google.android.gms.cast.framework.media.uicontroller.UIController
              implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbo>;
              public constructor();
              public constructor(param0: globalAndroid.widget.TextView, param1: any /* com.google.android.gms.cast.framework.media.uicontroller.zza*/);
              public onProgressUpdated(param0: number, param1: number): void;
              public onSessionEnded(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbp extends com.google.android.gms.cast.framework.media.uicontroller.UIController
              implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbp>;
              public constructor();
              public constructor(param0: globalAndroid.widget.TextView, param1: any /* com.google.android.gms.cast.framework.media.uicontroller.zza*/);
              public onProgressUpdated(param0: number, param1: number): void;
              public onSessionEnded(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbq extends com.google.android.gms.cast.framework.media.uicontroller.UIController
              implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbq>;
              public constructor();
              public onProgressUpdated(param0: number, param1: number): void;
              public onSessionEnded(): void;
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public constructor(param0: globalAndroid.view.View, param1: any /* com.google.android.gms.cast.framework.media.uicontroller.zza*/);
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbr extends com.google.android.gms.internal.cast.zzbk {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbr>;
              public constructor();
              public onSessionEnded(): void;
              public constructor(
                param0: globalAndroid.widget.RelativeLayout,
                param1: com.google.android.gms.cast.framework.media.widget.CastSeekBar,
                param2: any /* com.google.android.gms.cast.framework.media.uicontroller.zza*/,
              );
              public onSessionConnected(param0: com.google.android.gms.cast.framework.CastSession): void;
              public onMediaStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbs extends com.google.android.gms.internal.cast.zzco {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbs>;
              public sendGameMessage(param0: string, param1: org.json.JSONObject): void;
              public dispose(): void;
              public constructor(param0: com.google.android.gms.common.api.GoogleApiClient, param1: string, param2: com.google.android.gms.cast.Cast.CastApi);
              public constructor(param0: string, param1: string, param2: string);
              public getCurrentState(): com.google.android.gms.cast.games.GameManagerState;
              public setListener(param0: com.google.android.gms.cast.games.GameManagerClient.Listener): void;
              public isDisposed(): boolean;
              public getLastUsedPlayerId(): string;
              public sendGameRequest(
                param0: string,
                param1: org.json.JSONObject,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.games.GameManagerClient.GameManagerResult>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbt extends com.google.android.gms.cast.Cast.MessageReceivedCallback {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbt>;
              public onMessageReceived(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: string): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbu extends com.google.android.gms.internal.cast.zzcc {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbu>;
              public setResult(param0: any): void;
              public execute(): void;
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbv extends com.google.android.gms.internal.cast.zzbx {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbv>;
              public setResult(param0: any): void;
              public execute(): void;
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzbw extends com.google.android.gms.internal.cast.zzbx {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbw>;
              public setResult(param0: any): void;
              public execute(): void;
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzbx extends com.google.android.gms.internal.cast.zzbz<
              com.google.android.gms.cast.games.GameManagerClient.GameManagerResult
            > {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbx>;
              public constructor();
              public setResult(param0: any): void;
              public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              public constructor(param0: any /* com.google.android.gms.internal.cast.zzbs*/);
              /** @deprecated */
              public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
              public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
              public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzby extends com.google.android.gms.common.api.ResultCallback<com.google.android.gms.common.api.Status> {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzby>;
              public onResult(param0: any): void;
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzbz<R> extends java.lang.Object /* com.google.android.gms.internal.cast.zzcl<any>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzbz<any>>;
              public constructor();
              public setResult(param0: any): void;
              public execute(): void;
              public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              /** @deprecated */
              public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
              public constructor(param0: any /* com.google.android.gms.internal.cast.zzbs*/);
              public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
              public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzc {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzc>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzca extends com.google.android.gms.internal.cast.zzdu {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzca>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcb extends com.google.android.gms.internal.cast.zzdu {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcb>;
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzcc extends com.google.android.gms.internal.cast.zzbz<
              com.google.android.gms.cast.games.GameManagerClient.GameManagerInstanceResult
            > {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcc>;
              public constructor();
              public setResult(param0: any): void;
              public constructor(param0: any /* com.google.android.gms.internal.cast.zzbs*/, param1: com.google.android.gms.cast.games.GameManagerClient);
              public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              public constructor(param0: any /* com.google.android.gms.internal.cast.zzbs*/);
              /** @deprecated */
              public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
              public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
              public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcd extends com.google.android.gms.cast.games.GameManagerClient.GameManagerResult {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcd>;
              public getStatus(): com.google.android.gms.common.api.Status;
              public getRequestId(): number;
              public getExtraMessageData(): org.json.JSONObject;
              public getPlayerId(): string;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzce extends com.google.android.gms.cast.games.GameManagerClient.GameManagerInstanceResult {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzce>;
              public getStatus(): com.google.android.gms.common.api.Status;
              public getGameManagerClient(): com.google.android.gms.cast.games.GameManagerClient;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcf {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcf>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcg {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcg>;
              public constructor(param0: org.json.JSONObject);
              public getMaxPlayers(): number;
              public getVersion(): string;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzch extends com.google.android.gms.cast.games.PlayerInfo {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzch>;
              public getPlayerState(): number;
              public getPlayerData(): org.json.JSONObject;
              public hashCode(): number;
              public isConnected(): boolean;
              public isControllable(): boolean;
              public getPlayerId(): string;
              public equals(param0: any): boolean;
              public constructor(param0: string, param1: number, param2: org.json.JSONObject, param3: boolean);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzci extends com.google.android.gms.cast.games.GameManagerState {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzci>;
              public hasGameplayStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
              public getPlayer(param0: string): com.google.android.gms.cast.games.PlayerInfo;
              public hashCode(): number;
              public getControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
              public hasGameDataChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
              public getGameplayState(): number;
              public getPlayers(): java.util.Collection<com.google.android.gms.cast.games.PlayerInfo>;
              public hasPlayerDataChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
              public constructor(
                param0: number,
                param1: number,
                param2: string,
                param3: org.json.JSONObject,
                param4: java.util.Collection<com.google.android.gms.cast.games.PlayerInfo>,
                param5: string,
                param6: number,
              );
              public getPlayersInState(param0: number): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
              public getGameData(): org.json.JSONObject;
              public getListOfChangedPlayers(param0: com.google.android.gms.cast.games.GameManagerState): java.util.Collection<string>;
              public getGameStatusText(): string;
              public getApplicationName(): string;
              public getConnectedControllablePlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
              public getLobbyState(): number;
              public getMaxPlayers(): number;
              public hasGameStatusTextChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
              public hasPlayerChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
              public getConnectedPlayers(): java.util.List<com.google.android.gms.cast.games.PlayerInfo>;
              public equals(param0: any): boolean;
              public hasPlayerStateChanged(param0: string, param1: com.google.android.gms.cast.games.GameManagerState): boolean;
              public hasLobbyStateChanged(param0: com.google.android.gms.cast.games.GameManagerState): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcj extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcj>;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.cast.zzcj>*/;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public hashCode(): number;
              public equals(param0: any): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzck {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzck>;
              public getPlayerState(): number;
              public constructor(param0: org.json.JSONObject);
              public getPlayerData(): org.json.JSONObject;
              public getPlayerId(): string;
              public equals(param0: any): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzcl<R> extends java.lang
              .Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<any,com.google.android.gms.internal.cast.zzct>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcl<any>>;
              public constructor();
              public setResult(param0: any): void;
              public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              /** @deprecated */
              public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
              public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
              public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcm extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.cast.zzcj>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcm>;
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcn extends com.google.android.gms.common.api.GoogleApi<com.google.android.gms.common.api.Api.ApiOptions.NoOptions> {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcn>;
              /** @deprecated */
              public constructor(
                param0: globalAndroid.app.Activity,
                param1: com.google.android.gms.common.api.Api<any>,
                param2: any,
                param3: com.google.android.gms.common.api.internal.StatusExceptionMapper,
              );
              /** @deprecated */
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.common.api.Api<any>,
                param2: any,
                param3: globalAndroid.os.Looper,
                param4: com.google.android.gms.common.api.internal.StatusExceptionMapper,
              );
              public constructor(
                param0: globalAndroid.app.Activity,
                param1: com.google.android.gms.common.api.Api<any>,
                param2: any,
                param3: com.google.android.gms.common.api.GoogleApi.Settings,
              );
              /** @deprecated */
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.common.api.Api<any>,
                param2: any,
                param3: com.google.android.gms.common.api.internal.StatusExceptionMapper,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.common.api.Api<any>,
                param2: any,
                param3: com.google.android.gms.common.api.GoogleApi.Settings,
              );
              public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.common.api.Api<any>, param2: globalAndroid.os.Looper);
              public constructor(param0: globalAndroid.content.Context);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzco extends com.google.android.gms.internal.cast.zzcu {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzco>;
              public constructor(param0: string, param1: string, param2: string);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcp extends com.google.android.gms.common.api.internal.TaskApiCall<com.google.android.gms.internal.cast.zzcr, java.lang.Void> {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcp>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcq extends com.google.android.gms.common.api.Api.AbstractClientBuilder<
              com.google.android.gms.internal.cast.zzcr,
              com.google.android.gms.common.api.Api.ApiOptions.NoOptions
            > {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcq>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcr extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.cast.zzdj>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcr>;
              public getStartServiceAction(): string;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public getServiceDescriptor(): string;
              public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param7: string,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.ClientSettings,
                param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public getApiFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public requiresAccount(): boolean;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param5: string,
              );
              public isConnecting(): boolean;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
              );
              public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
              public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
              ): void;
              public requiresSignIn(): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcs extends com.google.android.gms.common.api.internal.IStatusCallback.Stub {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcs>;
              public onResult(param0: com.google.android.gms.common.api.Status): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzct extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.cast.zzdf>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzct>;
              public setVolume(param0: number): void;
              public getStartServiceAction(): string;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public getServiceDescriptor(): string;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.ClientSettings,
                param3: com.google.android.gms.cast.CastDevice,
                param4: number,
                param5: com.google.android.gms.cast.Cast.Listener,
                param6: globalAndroid.os.Bundle,
                param7: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param8: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              public onPostInitHandler(param0: number, param1: globalAndroid.os.IBinder, param2: globalAndroid.os.Bundle, param3: number): void;
              public requestStatus(): void;
              public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param7: string,
              );
              public setMute(param0: boolean): void;
              public setMessageReceivedCallbacks(param0: string, param1: com.google.android.gms.cast.Cast.MessageReceivedCallback): void;
              public getStandbyState(): number;
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public getActiveInputState(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
              public requiresAccount(): boolean;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public getVolume(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param5: string,
              );
              public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
              public isConnecting(): boolean;
              public isMute(): boolean;
              public removeMessageReceivedCallbacks(param0: string): void;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
              );
              public getApplicationStatus(): string;
              public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
              public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
              ): void;
              public requiresSignIn(): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcu {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcu>;
              public setSessionLabel(param0: string): void;
              public constructor(param0: string, param1: string, param2: string);
              public getNamespace(): string;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcv extends com.google.android.gms.internal.cast.zzdk {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcv>;
              public constructor();
              public onApplicationDisconnected(param0: number): void;
              public constructor(param0: string);
              public isDisposed(): boolean;
              public constructor(param0: any /* com.google.android.gms.internal.cast.zzct*/);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcw extends com.google.android.gms.cast.Cast.ApplicationConnectionResult {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcw>;
              public constructor(
                param0: com.google.android.gms.common.api.Status,
                param1: com.google.android.gms.cast.ApplicationMetadata,
                param2: string,
                param3: string,
                param4: boolean,
              );
              public getStatus(): com.google.android.gms.common.api.Status;
              public constructor(param0: com.google.android.gms.common.api.Status);
              public getSessionId(): string;
              public getApplicationStatus(): string;
              public getWasLaunched(): boolean;
              public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcx {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcx>;
              public run(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcy {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcy>;
              public run(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzcz {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzcz>;
              public run(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzd {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzd>;
              public static writeBoolean(param0: globalAndroid.os.Parcel, param1: boolean): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzda {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzda>;
              public run(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdb extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdb>;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.cast.zzdb>*/;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public hashCode(): number;
              public getStandbyState(): number;
              public getVolume(): number;
              public equals(param0: any): boolean;
              public getActiveInputState(): number;
              public getApplicationMetadata(): com.google.android.gms.cast.ApplicationMetadata;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdc {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdc>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdd {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdd>;
              public static initialize(param0: globalAndroid.content.Context): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzde extends java.lang.Object /* globalAndroid.os.Parcelable.Creator<com.google.android.gms.internal.cast.zzdb>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzde>;
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdf {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdf>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzdf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                disconnect(): void;
                zzel(): void;
                zzj(param0: string): void;
                requestStatus(): void;
                zza(param0: number, param1: number, param2: boolean): void;
                zza(param0: boolean, param1: number, param2: boolean): void;
                zza(param0: string, param1: string, param2: number): void;
                zzt(param0: string): void;
                zzu(param0: string): void;
                zzb(param0: string, param1: com.google.android.gms.cast.LaunchOptions): void;
                zza(param0: string, param1: string, param2: any /* com.google.android.gms.cast.zzah*/): void;
              });
              public constructor();
              public requestStatus(): void;
              public disconnect(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdg extends com.google.android.gms.internal.cast.zzcl<com.google.android.gms.common.api.Status> {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdg>;
              public constructor();
              public setResult(param0: any): void;
              public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              /** @deprecated */
              public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
              public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
              public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdh {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdh>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzdh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzu(param0: number): void;
                zza(param0: com.google.android.gms.cast.ApplicationMetadata, param1: string, param2: string, param3: boolean): void;
                zzi(param0: number): void;
                zza(param0: string, param1: number, param2: boolean): void;
                zzb(param0: string, param1: string): void;
                zza(param0: string, param1: native.Array<number>): void;
                zzw(param0: number): void;
                zzv(param0: number): void;
                onApplicationDisconnected(param0: number): void;
                zza(param0: string, param1: number, param2: number): void;
                zza(param0: string, param1: number): void;
                zzb(param0: any /* com.google.android.gms.internal.cast.zzcj*/): void;
                zzb(param0: any /* com.google.android.gms.internal.cast.zzdb*/): void;
              });
              public constructor();
              public onApplicationDisconnected(param0: number): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdi extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.internal.cast.zzdf {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdi>;
              public requestStatus(): void;
              public disconnect(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdj {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdj>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzdj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(
                  param0: com.google.android.gms.common.api.internal.IStatusCallback,
                  param1: native.Array<string>,
                  param2: string,
                  param3: any /* java.util.List<com.google.android.gms.cast.zzbv>*/,
                ): void;
              });
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzdk extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.internal.cast.zzdh {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdk>;
              public constructor();
              public onApplicationDisconnected(param0: number): void;
              public constructor(param0: string);
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdl {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdl>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdm extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.internal.cast.zzdj {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdm>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdn extends com.google.android.gms.internal.cast.zzco {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdn>;
              public static NAMESPACE: string;
              public getApproximateLiveSeekableRangeEnd(): number;
              public getMediaInfo(): com.google.android.gms.cast.MediaInfo;
              public getApproximateAdBreakClipPositionMs(): number;
              public constructor(param0: string);
              public getApproximateStreamPosition(): number;
              public constructor(param0: string, param1: string, param2: string);
              public getMediaStatus(): com.google.android.gms.cast.MediaStatus;
              public getApproximateLiveSeekableRangeStart(): number;
              public getStreamDuration(): number;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdo {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdo>;
              public i(param0: string, param1: native.Array<any>): void;
              public e(param0: string, param1: native.Array<any>): void;
              public constructor(param0: string);
              public w(param0: string, param1: native.Array<any>): void;
              public d(param0: string, param1: native.Array<any>): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdp {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdp>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzdp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onStatusUpdated(): void;
                onMetadataUpdated(): void;
                onQueueStatusUpdated(): void;
                onPreloadStatusUpdated(): void;
                onAdBreakStatusUpdated(): void;
                zza(param0: native.Array<number>): void;
                zza(param0: native.Array<number>, param1: number): void;
                zzb(param0: native.Array<number>): void;
                zzc(param0: native.Array<number>): void;
                zzb(param0: native.Array<com.google.android.gms.cast.MediaQueueItem>): void;
              });
              public constructor();
              public onAdBreakStatusUpdated(): void;
              public onStatusUpdated(): void;
              public onMetadataUpdated(): void;
              public onPreloadStatusUpdated(): void;
              public onQueueStatusUpdated(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdq extends com.google.android.gms.internal.cast.zzdu {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdq>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdr {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdr>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzdr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: string, param1: string, param2: number, param3: string): void; zzm(): number });
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzds {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzds>;
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdt {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdt>;
              public test(param0: number): boolean;
              public constructor(param0: number);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdu {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdu>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzdu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: number, param1: number, param2: any): void; zzb(param0: number): void });
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdv {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdv>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdw {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdw>;
              public run(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdx extends com.google.android.gms.cast.CastRemoteDisplayApi {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdx>;
              public constructor(param0: com.google.android.gms.common.api.Api<any>);
              public stopRemoteDisplay(
                param0: com.google.android.gms.common.api.GoogleApiClient,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
              public startRemoteDisplay(
                param0: com.google.android.gms.common.api.GoogleApiClient,
                param1: string,
              ): com.google.android.gms.common.api.PendingResult<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdy {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdy>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzdz extends com.google.android.gms.internal.cast.zzee {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzdz>;
              public setResult(param0: any): void;
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zze {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zze>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzea extends com.google.android.gms.internal.cast.zzeq {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzea>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzeb extends com.google.android.gms.internal.cast.zzem {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeb>;
              public onError(param0: number): void;
              public onDisconnected(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzec extends com.google.android.gms.internal.cast.zzee {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzec>;
              public setResult(param0: any): void;
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzed extends com.google.android.gms.internal.cast.zzeb {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzed>;
              public constructor();
              public onError(param0: number): void;
              public constructor(param0: string);
              public constructor(param0: any /* com.google.android.gms.internal.cast.zzee*/, param1: any /* com.google.android.gms.internal.cast.zzeh*/);
              public onDisconnected(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzee extends java.lang
              .Object /* com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl<com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult,com.google.android.gms.internal.cast.zzeh>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzee>;
              public constructor();
              public setResult(param0: any): void;
              public constructor(param0: com.google.android.gms.common.api.GoogleApiClient);
              public setFailedResult(param0: com.google.android.gms.common.api.Status): void;
              /** @deprecated */
              public constructor(param0: globalAndroid.os.Looper);
              /** @deprecated */
              public constructor(param0: com.google.android.gms.common.api.Api.AnyClientKey<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
              public constructor(param0: any /* com.google.android.gms.internal.cast.zzdx*/, param1: com.google.android.gms.common.api.GoogleApiClient);
              public constructor(param0: com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler<any>);
              public constructor(param0: com.google.android.gms.common.api.Api<any>, param1: com.google.android.gms.common.api.GoogleApiClient);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzef extends com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionResult {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzef>;
              public getStatus(): com.google.android.gms.common.api.Status;
              public constructor(param0: com.google.android.gms.common.api.Status);
              public constructor(param0: globalAndroid.view.Display);
              public getPresentationDisplay(): globalAndroid.view.Display;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzeg extends com.google.android.gms.internal.cast.zzeb {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeg>;
              public constructor();
              public onError(param0: number): void;
              public constructor(param0: any /* com.google.android.gms.internal.cast.zzee*/);
              public constructor(param0: string);
              public onDisconnected(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzeh extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.cast.zzel>*/
              implements globalAndroid.os.IBinder.DeathRecipient {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeh>;
              public getStartServiceAction(): string;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public getServiceDescriptor(): string;
              public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param7: string,
              );
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.ClientSettings,
                param3: com.google.android.gms.cast.CastDevice,
                param4: globalAndroid.os.Bundle,
                param5: com.google.android.gms.cast.CastRemoteDisplay.CastRemoteDisplaySessionCallbacks,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public requiresAccount(): boolean;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param5: string,
              );
              public isConnecting(): boolean;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public binderDied(): void;
              public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
              );
              public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
              public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
              ): void;
              public requiresSignIn(): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzei extends java.lang.Object /* com.google.android.gms.common.internal.GmsClient<com.google.android.gms.internal.cast.zzel>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzei>;
              public getStartServiceAction(): string;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public getServiceDescriptor(): string;
              public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param7: string,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.ClientSettings,
                param3: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param4: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public requiresAccount(): boolean;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param5: string,
              );
              public isConnecting(): boolean;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
              );
              public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
              public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
              ): void;
              public requiresSignIn(): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzej {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzej>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzej interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(param0: number, param1: number, param2: globalAndroid.view.Surface): void;
                onError(param0: number): void;
                onDisconnected(): void;
                zzd(): void;
              });
              public constructor();
              public onError(param0: number): void;
              public onDisconnected(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzek extends com.google.android.gms.internal.cast.zzeq {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzek>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzel {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzel>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                disconnect(): void;
                zza(
                  param0: any /* com.google.android.gms.internal.cast.zzej*/,
                  param1: any /* com.google.android.gms.internal.cast.zzen*/,
                  param2: string,
                  param3: string,
                  param4: globalAndroid.os.Bundle,
                ): void;
                zza(
                  param0: any /* com.google.android.gms.internal.cast.zzej*/,
                  param1: globalAndroid.app.PendingIntent,
                  param2: string,
                  param3: string,
                  param4: globalAndroid.os.Bundle,
                ): void;
                zza(param0: any /* com.google.android.gms.internal.cast.zzej*/, param1: number): void;
                zza(param0: any /* com.google.android.gms.internal.cast.zzej*/): void;
              });
              public constructor();
              public disconnect(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzem extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.internal.cast.zzej {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzem>;
              public constructor();
              public onError(param0: number): void;
              public constructor(param0: string);
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
              public onDisconnected(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzen {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzen>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzen interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzy(param0: number): void });
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzeo extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.internal.cast.zzel {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeo>;
              public disconnect(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzep {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzep>;
              public constructor();
              public constructor(param0: globalAndroid.os.Looper);
              public dispatchMessage(param0: globalAndroid.os.Message): void;
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzeq extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.internal.cast.zzen {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeq>;
              public constructor();
              public constructor(param0: string);
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzer {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzer>;
              public constructor();
              public onAnimationStart(param0: globalAndroid.animation.Animator): void;
              public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzes {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzes>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzet extends com.google.android.gms.internal.cast.zzey {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzet>;
              public doFrame(param0: number): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzeu extends com.google.android.gms.internal.cast.zzer {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzeu>;
              public animator: globalAndroid.animation.Animator;
              public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzev extends java.lang.Object /* java.lang.ThreadLocal<com.google.android.gms.internal.cast.zzew>*/ {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzev>;
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzew {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzew>;
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzex {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzex>;
              public doFrame(param0: number): void;
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzey {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzey>;
              public constructor();
              public doFrame(param0: number): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzez extends com.google.android.gms.internal.cast.zzew {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzez>;
              public constructor();
              public constructor(param0: globalAndroid.os.Looper);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzf {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzf>;
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzfa {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfa>;
              public run(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzfb {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfb>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzfc extends com.google.android.gms.internal.cast.zzew {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfc>;
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzfd {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfd>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzfe {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzfe>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzff {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzff>;
              public static checkNotNull(param0: any): any;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzg extends com.google.android.gms.cast.framework.SessionProvider {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzg>;
              public isSessionRecoverable(): boolean;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: com.google.android.gms.cast.framework.CastOptions,
                param2: any /* com.google.android.gms.internal.cast.zzv*/,
              );
              public createSession(param0: string): com.google.android.gms.cast.framework.Session;
              public constructor(param0: globalAndroid.content.Context, param1: string);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzh extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.internal.cast.zzi {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzh>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzi {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzi>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(
                  param0: com.google.android.gms.dynamic.IObjectWrapper,
                  param1: com.google.android.gms.cast.framework.CastOptions,
                  param2: any /* com.google.android.gms.internal.cast.zzk*/,
                  param3: java.util.Map<any, any>,
                ): any /* com.google.android.gms.cast.framework.zzj*/;
                zza(
                  param0: string,
                  param1: string,
                  param2: any /* com.google.android.gms.cast.framework.zzac*/,
                ): any /* com.google.android.gms.cast.framework.zzs*/;
                zza(
                  param0: com.google.android.gms.cast.framework.CastOptions,
                  param1: com.google.android.gms.dynamic.IObjectWrapper,
                  param2: any /* com.google.android.gms.cast.framework.zzi*/,
                ): any /* com.google.android.gms.cast.framework.zzk*/;
                zza(
                  param0: com.google.android.gms.dynamic.IObjectWrapper,
                  param1: com.google.android.gms.dynamic.IObjectWrapper,
                  param2: com.google.android.gms.dynamic.IObjectWrapper,
                ): any /* com.google.android.gms.cast.framework.zzr*/;
                zza(
                  param0: com.google.android.gms.dynamic.IObjectWrapper,
                  param1: any /* com.google.android.gms.internal.cast.zzaf*/,
                  param2: number,
                  param3: number,
                  param4: boolean,
                  param5: number,
                  param6: number,
                  param7: number,
                  param8: number,
                ): any /* com.google.android.gms.internal.cast.zzae*/;
              });
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export abstract class zzj extends com.google.android.gms.internal.cast.zza implements com.google.android.gms.internal.cast.zzk {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzj>;
              public constructor();
              public constructor(param0: string);
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzk {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzk>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzn(): number;
                zza(param0: globalAndroid.os.Bundle, param1: any /* com.google.android.gms.internal.cast.zzm*/): void;
                zza(param0: globalAndroid.os.Bundle, param1: number): void;
                zzd(param0: globalAndroid.os.Bundle): void;
                zzb(param0: globalAndroid.os.Bundle, param1: number): boolean;
                zzl(param0: string): void;
                zzal(): void;
                zzam(): boolean;
                zzm(param0: string): globalAndroid.os.Bundle;
                zzan(): string;
                zzao(): void;
              });
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzl extends com.google.android.gms.internal.cast.zzb implements com.google.android.gms.internal.cast.zzm {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzl>;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzm {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzm>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(param0: string, param1: globalAndroid.os.Bundle): void;
                zzb(param0: string, param1: globalAndroid.os.Bundle): void;
                zzc(param0: string, param1: globalAndroid.os.Bundle): void;
                zzd(param0: string, param1: globalAndroid.os.Bundle): void;
                zza(param0: string, param1: globalAndroid.os.Bundle, param2: number): void;
              });
              public constructor();
            }
          }
        }
        export module internal {
          export module cast {
            export class zzn extends com.google.android.gms.cast.framework.internal.featurehighlight.zzg {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzn>;
              public dismiss(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzo implements com.google.android.gms.cast.framework.IntroductoryOverlay {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzo>;
              public constructor(param0: com.google.android.gms.cast.framework.IntroductoryOverlay.Builder);
              public show(): void;
              public remove(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzp {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzp>;
              public run(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzq {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzq>;
              public run(): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzr {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzr>;
              public onClick(param0: globalAndroid.view.View): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzs implements com.google.android.gms.cast.framework.IntroductoryOverlay {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzs>;
              public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
              public onDetachedFromWindow(): void;
              public constructor(param0: com.google.android.gms.cast.framework.IntroductoryOverlay.Builder);
              public show(): void;
              public remove(): void;
              public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzt {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzt>;
              public x: number;
              public y: number;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzu {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzu>;
              public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzv extends com.google.android.gms.internal.cast.zzj {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzv>;
              public constructor();
              public setMediaSessionCompat(param0: globalAndroid.support.v4.media.session.MediaSessionCompat): void;
              public constructor(param0: string);
              public constructor(param0: any /* androidx.mediarouter.media.MediaRouter */);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzw {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzw>;
              public constructor(param0: any /* com.google.android.gms.internal.cast.zzm*/);
              public onRouteAdded(param0: any /* androidx.mediarouter.media.MediaRouter */, param1: any /* androidx.mediarouter.media.MediaRouter.RouteInfo */): void;
              public onRouteChanged(param0: any /* androidx.mediarouter.media.MediaRouter */, param1: any /* androidx.mediarouter.media.MediaRouter.RouteInfo */): void;
              public onRouteUnselected(
                param0: any /* androidx.mediarouter.media.MediaRouter */,
                param1: any /* androidx.mediarouter.media.MediaRouter.RouteInfo */,
                param2: number,
              ): void;
              public onRouteRemoved(param0: any /* androidx.mediarouter.media.MediaRouter */, param1: any /* androidx.mediarouter.media.MediaRouter.RouteInfo */): void;
              public onRouteSelected(param0: any /* androidx.mediarouter.media.MediaRouter */, param1: any /* androidx.mediarouter.media.MediaRouter.RouteInfo */): void;
            }
          }
        }
        export module internal {
          export module cast {
            export class zzx extends com.google.android.gms.internal.cast.zzaa {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzx>;
              public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
              public clear(): void;
              public constructor(param0: globalAndroid.content.Context);
              public constructor(param0: globalAndroid.content.Context, param1: com.google.android.gms.cast.framework.media.ImageHints);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzy extends globalAndroid.os.AsyncTask<globalAndroid.net.Uri, java.lang.Long, globalAndroid.graphics.Bitmap> {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzy>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: number,
                param2: number,
                param3: boolean,
                param4: any /* com.google.android.gms.internal.cast.zzaa*/,
              );
              public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.gms.internal.cast.zzaa*/);
            }
          }
        }
        export module internal {
          export module cast {
            export class zzz {
              public static class: java.lang.Class<com.google.android.gms.internal.cast.zzz>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.cast.zzz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: globalAndroid.graphics.Bitmap): void });
              public constructor();
            }
          }
        }
        export module internal {
          export module common {
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zza>;
              public constructor(param0: globalAndroid.os.IBinder, param1: string);
              public asBinder(): globalAndroid.os.IBinder;
            }
            export class zzb {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzb>;
              public asBinder(): globalAndroid.os.IBinder;
              public constructor(param0: string);
              public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
            export class zzc {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzc>;
              public static writeBoolean(param0: globalAndroid.os.Parcel, param1: boolean): void;
            }
            export class zzd {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzd>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.common.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class zze {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zze>;
              public constructor();
              public constructor(param0: globalAndroid.os.Looper);
              public constructor(param0: globalAndroid.os.Looper, param1: globalAndroid.os.Handler.Callback);
            }
            export class zzf {
              public static class: java.lang.Class<com.google.android.gms.internal.common.zzf>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.common.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
          export module flags {
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.internal.flags.zza>;
              public constructor(param0: globalAndroid.os.IBinder, param1: string);
              public asBinder(): globalAndroid.os.IBinder;
            }
            export class zzb {
              public static class: java.lang.Class<com.google.android.gms.internal.flags.zzb>;
              public asBinder(): globalAndroid.os.IBinder;
              public constructor(param0: string);
              public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
            }
            export class zzc {
              public static class: java.lang.Class<com.google.android.gms.internal.flags.zzc>;
              public static writeBoolean(param0: globalAndroid.os.Parcel, param1: boolean): void;
            }
            export class zzd {
              public static class: java.lang.Class<com.google.android.gms.internal.flags.zzd>;
              /**
               * Constructs a new instance of the com.google.android.gms.internal.flags.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
            export class zze {
              public static class: java.lang.Class<com.google.android.gms.internal.flags.zze>;
            }
          }
        }
        export module security {
          export class ProviderInstaller {
            public static class: java.lang.Class<com.google.android.gms.security.ProviderInstaller>;
            public static PROVIDER_NAME: string;
            public constructor();
            public static installIfNeeded(param0: globalAndroid.content.Context): void;
            public static installIfNeededAsync(
              param0: globalAndroid.content.Context,
              param1: com.google.android.gms.security.ProviderInstaller.ProviderInstallListener,
            ): void;
          }
          export module ProviderInstaller {
            export class ProviderInstallListener {
              public static class: java.lang.Class<com.google.android.gms.security.ProviderInstaller.ProviderInstallListener>;
              /**
               * Constructs a new instance of the com.google.android.gms.security.ProviderInstaller$ProviderInstallListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onProviderInstalled(): void;
                onProviderInstallFailed(param0: number, param1: globalAndroid.content.Intent): void;
              });
              public constructor();
              public onProviderInstalled(): void;
              public onProviderInstallFailed(param0: number, param1: globalAndroid.content.Intent): void;
            }
          }
          export class zza extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, java.lang.Integer> {
            public static class: java.lang.Class<com.google.android.gms.security.zza>;
          }
        }
        export module signin {
          export class SignInOptions extends com.google.android.gms.common.api.Api.ApiOptions.Optional {
            public static class: java.lang.Class<com.google.android.gms.signin.SignInOptions>;
            public static DEFAULT: com.google.android.gms.signin.SignInOptions;
            public isIdTokenRequested(): boolean;
            public waitForAccessTokenRefresh(): boolean;
            public getServerClientId(): string;
            public isForceCodeForRefreshToken(): boolean;
            public getHostedDomain(): string;
            public isOfflineAccessRequested(): boolean;
            public getAuthApiSignInModuleVersion(): java.lang.Long;
            public getRealClientLibraryVersion(): java.lang.Long;
          }
          export module SignInOptions {
            export class zaa {
              public static class: java.lang.Class<com.google.android.gms.signin.SignInOptions.zaa>;
              public constructor();
            }
          }
          export module internal {
            export class SignInClientImpl extends com.google.android.gms.common.internal.GmsClient<com.google.android.gms.signin.internal.zaf>
              implements com.google.android.gms.signin.zad {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.SignInClientImpl>;
              public getStartServiceAction(): string;
              public requiresGooglePlayServices(): boolean;
              public getServiceBrokerBinder(): globalAndroid.os.IBinder;
              public getServiceDescriptor(): string;
              public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param7: string,
              );
              public zacv(): void;
              public connect(): void;
              public getEndpointPackageName(): string;
              public getSignInIntent(): globalAndroid.content.Intent;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public static createBundleFromClientSettings(param0: com.google.android.gms.common.internal.ClientSettings): globalAndroid.os.Bundle;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
              );
              public getConnectionHint(): globalAndroid.os.Bundle;
              public getGetServiceRequestExtraArgs(): globalAndroid.os.Bundle;
              public requiresAccount(): boolean;
              public disconnect(): void;
              public isConnected(): boolean;
              public providesSignIn(): boolean;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: boolean,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.signin.SignInOptions,
                param5: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param6: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public zaa(param0: com.google.android.gms.signin.internal.zad): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
                param5: string,
              );
              public isConnecting(): boolean;
              public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
              public getMinApkVersion(): number;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: number,
                param3: com.google.android.gms.common.internal.ClientSettings,
                param4: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param5: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Looper,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailability,
                param4: number,
                param5: com.google.android.gms.common.internal.ClientSettings,
                param6: com.google.android.gms.common.api.GoogleApiClient.ConnectionCallbacks,
                param7: com.google.android.gms.common.api.GoogleApiClient.OnConnectionFailedListener,
              );
              public constructor(
                param0: globalAndroid.content.Context,
                param1: globalAndroid.os.Handler,
                param2: com.google.android.gms.common.internal.GmsClientSupervisor,
                param3: com.google.android.gms.common.GoogleApiAvailabilityLight,
                param4: number,
                param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks,
                param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener,
              );
              public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
              public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
              public getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
              ): void;
              public requiresSignIn(): boolean;
            }
          }
          export module internal {
            export class zaa extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable
              implements com.google.android.gms.common.api.Result {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.zaa>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaa>;
              public constructor();
              public getStatus(): com.google.android.gms.common.api.Status;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            }
          }
          export module internal {
            export class zab extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaa> {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.zab>;
              public constructor();
            }
          }
          export module internal {
            export class zac extends com.google.android.gms.signin.internal.zae {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.zac>;
              public constructor();
              public constructor(param0: string);
              public zah(param0: com.google.android.gms.common.api.Status): void;
              public zag(param0: com.google.android.gms.common.api.Status): void;
              public zab(param0: com.google.android.gms.signin.internal.zaj): void;
              public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
              public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
            }
          }
          export module internal {
            export class zad {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.zad>;
              /**
               * Constructs a new instance of the com.google.android.gms.signin.internal.zad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
                zag(param0: com.google.android.gms.common.api.Status): void;
                zah(param0: com.google.android.gms.common.api.Status): void;
                zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
                zab(param0: com.google.android.gms.signin.internal.zaj): void;
              });
              public constructor();
              public zah(param0: com.google.android.gms.common.api.Status): void;
              public zag(param0: com.google.android.gms.common.api.Status): void;
              public zab(param0: com.google.android.gms.signin.internal.zaj): void;
              public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
              public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
            }
          }
          export module internal {
            export abstract class zae extends com.google.android.gms.internal.base.zab implements com.google.android.gms.signin.internal.zad {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.zae>;
              public constructor();
              public constructor(param0: string);
              public zah(param0: com.google.android.gms.common.api.Status): void;
              public dispatchTransaction(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
              public zag(param0: com.google.android.gms.common.api.Status): void;
              public zab(param0: com.google.android.gms.signin.internal.zaj): void;
              public zaa(param0: com.google.android.gms.common.ConnectionResult, param1: com.google.android.gms.signin.internal.zaa): void;
              public zaa(param0: com.google.android.gms.common.api.Status, param1: com.google.android.gms.auth.api.signin.GoogleSignInAccount): void;
            }
          }
          export module internal {
            export class zaf {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.zaf>;
              /**
               * Constructs a new instance of the com.google.android.gms.signin.internal.zaf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zam(param0: number): void;
                zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: number, param2: boolean): void;
                zaa(param0: com.google.android.gms.signin.internal.zah, param1: com.google.android.gms.signin.internal.zad): void;
              });
              public constructor();
              public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: number, param2: boolean): void;
              public zaa(param0: com.google.android.gms.signin.internal.zah, param1: com.google.android.gms.signin.internal.zad): void;
              public zam(param0: number): void;
            }
          }
          export module internal {
            export class zag extends com.google.android.gms.internal.base.zaa implements com.google.android.gms.signin.internal.zaf {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.zag>;
              public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: number, param2: boolean): void;
              public zaa(param0: com.google.android.gms.signin.internal.zah, param1: com.google.android.gms.signin.internal.zad): void;
              public zaa(param0: number, param1: globalAndroid.os.Parcel): globalAndroid.os.Parcel;
              public zaa(): globalAndroid.os.Parcel;
              public zam(param0: number): void;
            }
          }
          export module internal {
            export class zah extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.zah>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zah>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: com.google.android.gms.common.internal.ResolveAccountRequest);
            }
          }
          export module internal {
            export class zai extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zah> {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.zai>;
              public constructor();
            }
          }
          export module internal {
            export class zaj extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.zaj>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaj>;
              public constructor();
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public zacw(): com.google.android.gms.common.internal.ResolveAccountResponse;
              public constructor(param0: number);
              public getConnectionResult(): com.google.android.gms.common.ConnectionResult;
            }
          }
          export module internal {
            export class zak extends globalAndroid.os.Parcelable.Creator<com.google.android.gms.signin.internal.zaj> {
              public static class: java.lang.Class<com.google.android.gms.signin.internal.zak>;
              public constructor();
            }
          }
          export class zaa {
            public static class: java.lang.Class<com.google.android.gms.signin.zaa>;
            public static zapg: com.google.android.gms.common.api.Api.AbstractClientBuilder<
              com.google.android.gms.signin.internal.SignInClientImpl,
              com.google.android.gms.signin.SignInOptions
            >;
            public static API: com.google.android.gms.common.api.Api<com.google.android.gms.signin.SignInOptions>;
          }
          export class zab extends com.google.android.gms.common.api.Api.AbstractClientBuilder<
            com.google.android.gms.signin.internal.SignInClientImpl,
            com.google.android.gms.signin.SignInOptions
          > {
            public static class: java.lang.Class<com.google.android.gms.signin.zab>;
          }
          export class zac extends com.google.android.gms.common.api.Api.AbstractClientBuilder<com.google.android.gms.signin.internal.SignInClientImpl, any> {
            public static class: java.lang.Class<com.google.android.gms.signin.zac>;
          }
          export class zad extends com.google.android.gms.common.api.Api.Client {
            public static class: java.lang.Class<com.google.android.gms.signin.zad>;
            /**
             * Constructs a new instance of the com.google.android.gms.signin.zad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              zaa(param0: com.google.android.gms.signin.internal.zad): void;
              zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
              zacv(): void;
              connect(): void;
              connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
              disconnect(): void;
              isConnected(): boolean;
              isConnecting(): boolean;
              getRemoteService(
                param0: com.google.android.gms.common.internal.IAccountAccessor,
                param1: java.util.Set<com.google.android.gms.common.api.Scope>,
              ): void;
              requiresSignIn(): boolean;
              onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
              requiresAccount(): boolean;
              requiresGooglePlayServices(): boolean;
              providesSignIn(): boolean;
              getSignInIntent(): globalAndroid.content.Intent;
              dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
              getServiceBrokerBinder(): globalAndroid.os.IBinder;
              getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
              getEndpointPackageName(): string;
              getMinApkVersion(): number;
              getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
            });
            public constructor();
            public requiresGooglePlayServices(): boolean;
            public requiresAccount(): boolean;
            public zaa(param0: com.google.android.gms.signin.internal.zad): void;
            public getServiceBrokerBinder(): globalAndroid.os.IBinder;
            public providesSignIn(): boolean;
            public isConnected(): boolean;
            public getEndpointPackageName(): string;
            public zaa(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: boolean): void;
            public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
            public connect(): void;
            public getMinApkVersion(): number;
            public isConnecting(): boolean;
            public getRemoteService(
              param0: com.google.android.gms.common.internal.IAccountAccessor,
              param1: java.util.Set<com.google.android.gms.common.api.Scope>,
            ): void;
            public getRequiredFeatures(): native.Array<com.google.android.gms.common.Feature>;
            public disconnect(): void;
            public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
            public getSignInIntent(): globalAndroid.content.Intent;
            public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
            public requiresSignIn(): boolean;
            public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
            public zacv(): void;
          }
        }
        export module tasks {
          export abstract class CancellationToken {
            public static class: java.lang.Class<com.google.android.gms.tasks.CancellationToken>;
            public constructor();
            public isCancellationRequested(): boolean;
            public onCanceledRequested(param0: com.google.android.gms.tasks.OnTokenCanceledListener): com.google.android.gms.tasks.CancellationToken;
          }
          export class CancellationTokenSource {
            public static class: java.lang.Class<com.google.android.gms.tasks.CancellationTokenSource>;
            public constructor();
            public cancel(): void;
            public getToken(): com.google.android.gms.tasks.CancellationToken;
          }
          export class Continuation<TResult, TContinuationResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.Continuation<any, any>>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.Continuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { then(param0: com.google.android.gms.tasks.Task<TResult>): TContinuationResult });
            public constructor();
            public then(param0: com.google.android.gms.tasks.Task<TResult>): TContinuationResult;
          }
          export class OnCanceledListener {
            public static class: java.lang.Class<com.google.android.gms.tasks.OnCanceledListener>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onCanceled(): void });
            public constructor();
            public onCanceled(): void;
          }
          export class OnCompleteListener<TResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.OnCompleteListener<any>>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnCompleteListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void });
            public constructor();
            public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
          }
          export class OnFailureListener {
            public static class: java.lang.Class<com.google.android.gms.tasks.OnFailureListener>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnFailureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onFailure(param0: java.lang.Exception): void });
            public constructor();
            public onFailure(param0: java.lang.Exception): void;
          }
          export class OnSuccessListener<TResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.OnSuccessListener<any>>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnSuccessListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onSuccess(param0: TResult): void });
            public constructor();
            public onSuccess(param0: TResult): void;
          }
          export class OnTokenCanceledListener {
            public static class: java.lang.Class<com.google.android.gms.tasks.OnTokenCanceledListener>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnTokenCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onCanceled(): void });
            public constructor();
            public onCanceled(): void;
          }
          export class RuntimeExecutionException {
            public static class: java.lang.Class<com.google.android.gms.tasks.RuntimeExecutionException>;
            public constructor(param0: java.lang.Throwable);
          }
          export class SuccessContinuation<TResult, TContinuationResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.SuccessContinuation<any, any>>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.SuccessContinuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { then(param0: TResult): com.google.android.gms.tasks.Task<TContinuationResult> });
            public constructor();
            public then(param0: TResult): com.google.android.gms.tasks.Task<TContinuationResult>;
          }
          export abstract class Task<TResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.Task<any>>;
            public addOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
            public continueWithTask(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<any, any>,
            ): com.google.android.gms.tasks.Task<any>;
            public addOnFailureListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnFailureListener,
            ): com.google.android.gms.tasks.Task<TResult>;
            public addOnCompleteListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnCompleteListener<TResult>,
            ): com.google.android.gms.tasks.Task<TResult>;
            public continueWithTask(param0: com.google.android.gms.tasks.Continuation<any, any>): com.google.android.gms.tasks.Task<any>;
            public addOnFailureListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnFailureListener,
            ): com.google.android.gms.tasks.Task<TResult>;
            public addOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
            public continueWith(param0: com.google.android.gms.tasks.Continuation<any, any>): com.google.android.gms.tasks.Task<any>;
            public continueWith(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<any, any>,
            ): com.google.android.gms.tasks.Task<any>;
            public addOnCanceledListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnCanceledListener,
            ): com.google.android.gms.tasks.Task<TResult>;
            public addOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
            public isSuccessful(): boolean;
            public addOnSuccessListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnSuccessListener<any>,
            ): com.google.android.gms.tasks.Task<TResult>;
            public addOnSuccessListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnSuccessListener<any>,
            ): com.google.android.gms.tasks.Task<TResult>;
            public addOnCanceledListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnCanceledListener,
            ): com.google.android.gms.tasks.Task<TResult>;
            public onSuccessTask(param0: com.google.android.gms.tasks.SuccessContinuation<any, any>): com.google.android.gms.tasks.Task<any>;
            public constructor();
            public addOnCompleteListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnCompleteListener<TResult>,
            ): com.google.android.gms.tasks.Task<TResult>;
            public onSuccessTask(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.SuccessContinuation<any, any>,
            ): com.google.android.gms.tasks.Task<any>;
            public addOnCanceledListener(param0: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
            public getResult(): TResult;
            public isComplete(): boolean;
            public isCanceled(): boolean;
            public getResult(param0: java.lang.Class<any>): any;
            public getException(): java.lang.Exception;
          }
          export class TaskCompletionSource<TResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.TaskCompletionSource<any>>;
            public trySetResult(param0: TResult): boolean;
            public getTask(): com.google.android.gms.tasks.Task<TResult>;
            public constructor();
            public constructor(param0: com.google.android.gms.tasks.CancellationToken);
            public trySetException(param0: java.lang.Exception): boolean;
            public setException(param0: java.lang.Exception): void;
            public setResult(param0: TResult): void;
          }
          export class TaskExecutors {
            public static class: java.lang.Class<com.google.android.gms.tasks.TaskExecutors>;
            public static MAIN_THREAD: java.util.concurrent.Executor;
          }
          export module TaskExecutors {
            export class zza {
              public static class: java.lang.Class<com.google.android.gms.tasks.TaskExecutors.zza>;
              public constructor();
              public execute(param0: java.lang.Runnable): void;
            }
          }
          export class Tasks {
            public static class: java.lang.Class<com.google.android.gms.tasks.Tasks>;
            public static await(param0: com.google.android.gms.tasks.Task<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
            public static forResult(param0: any): com.google.android.gms.tasks.Task<any>;
            public static call(param0: java.util.concurrent.Executor, param1: java.util.concurrent.Callable<any>): com.google.android.gms.tasks.Task<any>;
            public static whenAllComplete(
              param0: native.Array<com.google.android.gms.tasks.Task<any>>,
            ): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.tasks.Task<any>>>;
            public static whenAllSuccess(param0: java.util.Collection<any>): com.google.android.gms.tasks.Task<any>;
            public static whenAll(param0: java.util.Collection<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
            public static forException(param0: java.lang.Exception): com.google.android.gms.tasks.Task<any>;
            public static await(param0: com.google.android.gms.tasks.Task<any>): any;
            public static whenAllSuccess(param0: native.Array<com.google.android.gms.tasks.Task<any>>): com.google.android.gms.tasks.Task<any>;
            public static whenAllComplete(
              param0: java.util.Collection<any>,
            ): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.tasks.Task<any>>>;
            public static forCanceled(): com.google.android.gms.tasks.Task<any>;
            public static call(param0: java.util.concurrent.Callable<any>): com.google.android.gms.tasks.Task<any>;
            public static whenAll(param0: native.Array<com.google.android.gms.tasks.Task<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
          }
          export module Tasks {
            export class zza extends com.google.android.gms.tasks.Tasks.zzb {
              public static class: java.lang.Class<com.google.android.gms.tasks.Tasks.zza>;
              public onSuccess(param0: any): void;
              public onFailure(param0: java.lang.Exception): void;
              public await(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
              public await(): void;
              public onCanceled(): void;
            }
            export class zzb extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.gms.tasks.Tasks.zzb>;
              /**
               * Constructs a new instance of the com.google.android.gms.tasks.Tasks$zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onCanceled(): void; onFailure(param0: java.lang.Exception): void; onSuccess(param0: any): void });
              public constructor();
              public onSuccess(param0: any): void;
              public onFailure(param0: java.lang.Exception): void;
              public onCanceled(): void;
            }
            export class zzc extends com.google.android.gms.tasks.Tasks.zzb {
              public static class: java.lang.Class<com.google.android.gms.tasks.Tasks.zzc>;
              public constructor(param0: number, param1: com.google.android.gms.tasks.zzu<java.lang.Void>);
              public onSuccess(param0: any): void;
              public onFailure(param0: java.lang.Exception): void;
              public onCanceled(): void;
            }
          }
          export class zza extends com.google.android.gms.tasks.CancellationToken {
            public static class: java.lang.Class<com.google.android.gms.tasks.zza>;
            public isCancellationRequested(): boolean;
            public cancel(): void;
            public onCanceledRequested(param0: com.google.android.gms.tasks.OnTokenCanceledListener): com.google.android.gms.tasks.CancellationToken;
          }
          export class zzb extends com.google.android.gms.tasks.OnSuccessListener<java.lang.Void> {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzb>;
            public onSuccess(param0: any): void;
          }
          export class zzc<TResult, TContinuationResult> extends java.lang.Object /* com.google.android.gms.tasks.zzq<any>*/ {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzc<any, any>>;
            public cancel(): void;
            public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
            public constructor(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<any, any>,
              param2: any /* com.google.android.gms.tasks.zzu<any>*/,
            );
          }
          export class zzd {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzd>;
            public run(): void;
          }
          export class zze<TResult, TContinuationResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.zze<any, any>>;
            public onFailure(param0: java.lang.Exception): void;
            public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
            public cancel(): void;
            public constructor(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<TResult, com.google.android.gms.tasks.Task<TContinuationResult>>,
              param2: any /* com.google.android.gms.tasks.zzu<TContinuationResult>*/,
            );
            public onSuccess(param0: TContinuationResult): void;
            public onCanceled(): void;
            public onSuccess(param0: TResult): void;
          }
          export class zzf {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzf>;
            public run(): void;
          }
          export class zzg<TResult> extends java.lang.Object /* com.google.android.gms.tasks.zzq<any>*/ {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzg<any>>;
            public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
            public cancel(): void;
            public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
            public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCanceledListener);
          }
          export class zzh {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzh>;
            public run(): void;
          }
          export class zzi<TResult> extends java.lang.Object /* com.google.android.gms.tasks.zzq<any>*/ {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzi<any>>;
            public cancel(): void;
            public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
            public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCompleteListener<any>);
          }
          export class zzj {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzj>;
            public run(): void;
          }
          export class zzk<TResult> extends java.lang.Object /* com.google.android.gms.tasks.zzq<any>*/ {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzk<any>>;
            public cancel(): void;
            public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
            public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnFailureListener);
          }
          export class zzl {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzl>;
            public run(): void;
          }
          export class zzm<TResult> extends java.lang.Object /* com.google.android.gms.tasks.zzq<any>*/ {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzm<any>>;
            public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnSuccessListener<any>);
            public cancel(): void;
            public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
          }
          export class zzn {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzn>;
            public run(): void;
          }
          export class zzo<TResult, TContinuationResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzo<any, any>>;
            public constructor(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.SuccessContinuation<TResult, TContinuationResult>,
              param2: any /* com.google.android.gms.tasks.zzu<TContinuationResult>*/,
            );
            public onFailure(param0: java.lang.Exception): void;
            public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
            public cancel(): void;
            public onSuccess(param0: TContinuationResult): void;
            public onCanceled(): void;
            public onSuccess(param0: TResult): void;
          }
          export class zzp {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzp>;
            public run(): void;
          }
          export class zzq<TResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzq<any>>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.zzq<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void; cancel(): void });
            public constructor();
            public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
            public cancel(): void;
          }
          export class zzr<TResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzr<any>>;
          }
          export class zzs extends com.google.android.gms.tasks.OnTokenCanceledListener {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzs>;
            public onCanceled(): void;
          }
          export class zzt {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzt>;
            public execute(param0: java.lang.Runnable): void;
          }
          export class zzu<TResult> extends com.google.android.gms.tasks.Task<any> {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzu<any>>;
            public setResult(param0: any): void;
            public addOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.android.gms.tasks.Task<any>;
            public addOnCanceledListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnCanceledListener,
            ): com.google.android.gms.tasks.Task<any>;
            public addOnSuccessListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnSuccessListener<any>,
            ): com.google.android.gms.tasks.Task<any>;
            public continueWithTask(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<any, any>,
            ): com.google.android.gms.tasks.Task<any>;
            public continueWithTask(param0: com.google.android.gms.tasks.Continuation<any, any>): com.google.android.gms.tasks.Task<any>;
            public continueWith(param0: com.google.android.gms.tasks.Continuation<any, any>): com.google.android.gms.tasks.Task<any>;
            public continueWith(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.Continuation<any, any>,
            ): com.google.android.gms.tasks.Task<any>;
            public isSuccessful(): boolean;
            public trySetResult(param0: any): boolean;
            public setException(param0: java.lang.Exception): void;
            public addOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<any>;
            public addOnFailureListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnFailureListener,
            ): com.google.android.gms.tasks.Task<any>;
            public onSuccessTask(param0: com.google.android.gms.tasks.SuccessContinuation<any, any>): com.google.android.gms.tasks.Task<any>;
            public trySetException(param0: java.lang.Exception): boolean;
            public getResult(): any;
            public onSuccessTask(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.SuccessContinuation<any, any>,
            ): com.google.android.gms.tasks.Task<any>;
            public addOnCanceledListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnCanceledListener,
            ): com.google.android.gms.tasks.Task<any>;
            public isComplete(): boolean;
            public isCanceled(): boolean;
            public getResult<T>(param0: java.lang.Class<T>): any;
            public addOnCompleteListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnCompleteListener<any>,
            ): com.google.android.gms.tasks.Task<any>;
            public addOnFailureListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnFailureListener,
            ): com.google.android.gms.tasks.Task<any>;
            public addOnSuccessListener(
              param0: java.util.concurrent.Executor,
              param1: com.google.android.gms.tasks.OnSuccessListener<any>,
            ): com.google.android.gms.tasks.Task<any>;
            public getException(): java.lang.Exception;
            public addOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<any>;
            public addOnCanceledListener(param0: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<any>;
            public addOnCompleteListener(
              param0: globalAndroid.app.Activity,
              param1: com.google.android.gms.tasks.OnCompleteListener<any>,
            ): com.google.android.gms.tasks.Task<any>;
          }
          export module zzu {
            export class zza extends com.google.android.gms.common.api.internal.LifecycleCallback {
              public static class: java.lang.Class<com.google.android.gms.tasks.zzu.zza>;
              public onStop(): void;
            }
          }
          export class zzv {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzv>;
            public run(): void;
          }
          export class zzw extends com.google.android.gms.tasks.Continuation<java.lang.Void, java.util.List<any>> {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzw>;
            public then(param0: com.google.android.gms.tasks.Task<any>): any;
          }
          export class zzx extends com.google.android.gms.tasks.Continuation<
            java.lang.Void,
            com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.tasks.Task<any>>>
          > {
            public static class: java.lang.Class<com.google.android.gms.tasks.zzx>;
            public then(param0: com.google.android.gms.tasks.Task<any>): any;
          }
        }
      }
    }
    export module firebase {
      export class FirebaseApiNotAvailableException extends com.google.firebase.FirebaseException {
        public static class: java.lang.Class<com.google.firebase.FirebaseApiNotAvailableException>;
        /** @deprecated */
        public constructor();
        public constructor(param0: string, param1: java.lang.Throwable);
        public constructor(param0: string);
      }
      export class FirebaseException {
        public static class: java.lang.Class<com.google.firebase.FirebaseException>;
        /** @deprecated */
        public constructor();
        public constructor(param0: string, param1: java.lang.Throwable);
        public constructor(param0: string);
      }
      export class FirebaseExceptionMapper extends com.google.android.gms.common.api.internal.StatusExceptionMapper {
        public static class: java.lang.Class<com.google.firebase.FirebaseExceptionMapper>;
        public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
        public constructor();
      }
    }
  }
}

//Generics information:
//com.google.android.gms.cast.framework.SessionManagerListener:1
//com.google.android.gms.cast.framework.media.MediaQueueRecyclerViewAdapter:1
//com.google.android.gms.cast.framework.zzae:1
//com.google.android.gms.common.api.Api:1
//com.google.android.gms.common.api.Api.AbstractClientBuilder:2
//com.google.android.gms.common.api.Api.AnyClientKey:1
//com.google.android.gms.common.api.Api.BaseClientBuilder:2
//com.google.android.gms.common.api.Api.ClientKey:1
//com.google.android.gms.common.api.Api.SimpleClient:1
//com.google.android.gms.common.api.Api.zaa:2
//com.google.android.gms.common.api.Api.zab:1
//com.google.android.gms.common.api.BatchResultToken:1
//com.google.android.gms.common.api.DataBufferResponse:2
//com.google.android.gms.common.api.GoogleApi:1
//com.google.android.gms.common.api.OptionalPendingResult:1
//com.google.android.gms.common.api.PendingResult:1
//com.google.android.gms.common.api.PendingResults.zaa:1
//com.google.android.gms.common.api.PendingResults.zab:1
//com.google.android.gms.common.api.PendingResults.zac:1
//com.google.android.gms.common.api.ResolvingResultCallbacks:1
//com.google.android.gms.common.api.Response:1
//com.google.android.gms.common.api.ResultCallback:1
//com.google.android.gms.common.api.ResultCallbacks:1
//com.google.android.gms.common.api.ResultTransform:2
//com.google.android.gms.common.api.TransformedResult:1
//com.google.android.gms.common.api.internal.BaseImplementation.ApiMethodImpl:2
//com.google.android.gms.common.api.internal.BaseImplementation.ResultHolder:1
//com.google.android.gms.common.api.internal.BasePendingResult:1
//com.google.android.gms.common.api.internal.BasePendingResult.CallbackHandler:1
//com.google.android.gms.common.api.internal.DataHolderNotifier:1
//com.google.android.gms.common.api.internal.GoogleApiManager.zaa:1
//com.google.android.gms.common.api.internal.ListenerHolder:1
//com.google.android.gms.common.api.internal.ListenerHolder.ListenerKey:1
//com.google.android.gms.common.api.internal.ListenerHolder.Notifier:1
//com.google.android.gms.common.api.internal.OptionalPendingResultImpl:1
//com.google.android.gms.common.api.internal.PendingResultFacade:2
//com.google.android.gms.common.api.internal.RegisterListenerMethod:2
//com.google.android.gms.common.api.internal.RegistrationMethods:2
//com.google.android.gms.common.api.internal.RegistrationMethods.Builder:2
//com.google.android.gms.common.api.internal.RemoteCall:2
//com.google.android.gms.common.api.internal.TaskApiCall:2
//com.google.android.gms.common.api.internal.TaskApiCall.Builder:2
//com.google.android.gms.common.api.internal.UnregisterListenerMethod:2
//com.google.android.gms.common.api.internal.zabp:1
//com.google.android.gms.common.api.internal.zacd:1
//com.google.android.gms.common.api.internal.zacm:1
//com.google.android.gms.common.api.internal.zad:1
//com.google.android.gms.common.api.internal.zae:1
//com.google.android.gms.common.api.internal.zag:1
//com.google.android.gms.common.api.internal.zai:1
//com.google.android.gms.common.api.internal.zaw:1
//com.google.android.gms.common.config.GservicesValue:1
//com.google.android.gms.common.data.AbstractDataBuffer:1
//com.google.android.gms.common.data.DataBuffer:1
//com.google.android.gms.common.data.DataBufferIterator:1
//com.google.android.gms.common.data.DataBufferSafeParcelable:1
//com.google.android.gms.common.data.EntityBuffer:1
//com.google.android.gms.common.data.Freezable:1
//com.google.android.gms.common.data.SingleRefDataBufferIterator:1
//com.google.android.gms.common.internal.BaseGmsClient:1
//com.google.android.gms.common.internal.BaseGmsClient.zzc:1
//com.google.android.gms.common.internal.GmsClient:1
//com.google.android.gms.common.internal.LegacyInternalGmsClient:1
//com.google.android.gms.common.internal.PendingResultUtil.ResultConverter:2
//com.google.android.gms.common.internal.SimpleClientAdapter:1
//com.google.android.gms.common.internal.service.zag:1
//com.google.android.gms.common.server.response.FastJsonResponse.Field:2
//com.google.android.gms.common.server.response.FastJsonResponse.FieldConverter:2
//com.google.android.gms.common.server.response.FastParser:1
//com.google.android.gms.common.server.response.FastParser.zaa:1
//com.google.android.gms.common.util.BiConsumer:2
//com.google.android.gms.common.util.Predicate:1
//com.google.android.gms.dynamic.DeferredLifecycleHelper:1
//com.google.android.gms.dynamic.ObjectWrapper:1
//com.google.android.gms.dynamic.OnDelegateCreatedListener:1
//com.google.android.gms.dynamic.RemoteCreator:1
//com.google.android.gms.flags.Flag:1
//com.google.android.gms.flags.impl.zza:1
//com.google.android.gms.internal.cast.zzbz:1
//com.google.android.gms.internal.cast.zzcl:1
//com.google.android.gms.tasks.Continuation:2
//com.google.android.gms.tasks.OnCompleteListener:1
//com.google.android.gms.tasks.OnSuccessListener:1
//com.google.android.gms.tasks.SuccessContinuation:2
//com.google.android.gms.tasks.Task:1
//com.google.android.gms.tasks.TaskCompletionSource:1
//com.google.android.gms.tasks.zzc:2
//com.google.android.gms.tasks.zze:2
//com.google.android.gms.tasks.zzg:1
//com.google.android.gms.tasks.zzi:1
//com.google.android.gms.tasks.zzk:1
//com.google.android.gms.tasks.zzm:1
//com.google.android.gms.tasks.zzo:2
//com.google.android.gms.tasks.zzq:1
//com.google.android.gms.tasks.zzr:1
//com.google.android.gms.tasks.zzu:1
