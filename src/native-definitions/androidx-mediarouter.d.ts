declare module androidx {
  export module mediarouter {
    export module app {
      export class MediaRouteActionProvider {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteActionProvider>;
        public onCreateMediaRouteButton(): androidx.mediarouter.app.MediaRouteButton;
        public isVisible(): boolean;
        public getDialogFactory(): androidx.mediarouter.app.MediaRouteDialogFactory;
        public getMediaRouteButton(): androidx.mediarouter.app.MediaRouteButton;
        public constructor(param0: globalAndroid.content.Context);
        public setDialogFactory(param0: androidx.mediarouter.app.MediaRouteDialogFactory): void;
        public onPerformDefaultAction(): boolean;
        public onCreateActionView(): globalAndroid.view.View;
        public overridesItemVisibility(): boolean;
        public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
        public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
      }
      export module MediaRouteActionProvider {
        export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteActionProvider.MediaRouterCallback>;
          public onProviderChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
          public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public constructor();
          public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onProviderAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
          public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onProviderRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
          public constructor(param0: androidx.mediarouter.app.MediaRouteActionProvider);
        }
      }
      export class MediaRouteButton {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteButton>;
        public drawableStateChanged(): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public jumpDrawablesToCurrentState(): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        public setDialogFactory(param0: androidx.mediarouter.app.MediaRouteDialogFactory): void;
        public verifyDrawable(param0: globalAndroid.graphics.drawable.Drawable): boolean;
        public performClick(): boolean;
        public setRemoteIndicatorDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
        public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
        public showDialog(): boolean;
        public setVisibility(param0: number): void;
        public getDialogFactory(): androidx.mediarouter.app.MediaRouteDialogFactory;
        public onDraw(param0: globalAndroid.graphics.Canvas): void;
        public constructor(param0: globalAndroid.content.Context);
        public onMeasure(param0: number, param1: number): void;
        public onDetachedFromWindow(): void;
        public onCreateDrawableState(param0: number): native.Array<number>;
        public onAttachedToWindow(): void;
        public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
      }
      export module MediaRouteButton {
        export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteButton.MediaRouterCallback>;
          public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onProviderChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
          public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteUnselected(
            param0: androidx.mediarouter.media.MediaRouter,
            param1: androidx.mediarouter.media.MediaRouter.RouteInfo,
            param2: number,
          ): void;
          public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onProviderAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
          public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onProviderRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
          public onRouteSelected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
        }
        export class RemoteIndicatorLoader extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, globalAndroid.graphics.drawable.Drawable> {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteButton.RemoteIndicatorLoader>;
          public doInBackground(param0: native.Array<java.lang.Void>): globalAndroid.graphics.drawable.Drawable;
          public onPostExecute(param0: globalAndroid.graphics.drawable.Drawable): void;
          public onCancelled(param0?: globalAndroid.graphics.drawable.Drawable): void;
        }
      }
      export class MediaRouteCastDialog {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteCastDialog>;
        public onCreate(param0: globalAndroid.os.Bundle): void;
        public constructor(param0: globalAndroid.content.Context);
        public onDetachedFromWindow(): void;
        public constructor(param0: globalAndroid.content.Context, param1: number);
        public onFilterRoutes(param0: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>): void;
        public refreshRoutes(): void;
        public onAttachedToWindow(): void;
        public getMediaSession(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
        public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
        public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
        public onFilterRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): boolean;
      }
      export module MediaRouteCastDialog {
        export class FetchArtTask extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, globalAndroid.graphics.Bitmap> {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteCastDialog.FetchArtTask>;
          public getIconBitmap(): globalAndroid.graphics.Bitmap;
          public onPreExecute(): void;
          public getIconUri(): globalAndroid.net.Uri;
          public doInBackground(param0: native.Array<java.lang.Void>): globalAndroid.graphics.Bitmap;
          public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
        }
        export class MediaControllerCallback {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteCastDialog.MediaControllerCallback>;
          public onSessionDestroyed(): void;
          public onMetadataChanged(param0: globalAndroid.support.v4.media.MediaMetadataCompat): void;
        }
        export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteCastDialog.MediaRouterCallback>;
          public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteUnselected(
            param0: androidx.mediarouter.media.MediaRouter,
            param1: androidx.mediarouter.media.MediaRouter.RouteInfo,
            param2: number,
          ): void;
          public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteSelected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
        }
        export class RecyclerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteCastDialog.RecyclerAdapter>;
          public getItem(param0: number): androidx.mediarouter.app.MediaRouteCastDialog.RecyclerAdapter.Item;
          public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public getItemCount(): number;
          public getItemViewType(param0: number): number;
          public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
        }
        export module RecyclerAdapter {
          export class GroupViewHolder {
            public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteCastDialog.RecyclerAdapter.GroupViewHolder>;
            public bindGroupViewHolder(param0: androidx.mediarouter.app.MediaRouteCastDialog.RecyclerAdapter.Item): void;
          }
          export class GroupVolumeViewHolder {
            public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteCastDialog.RecyclerAdapter.GroupVolumeViewHolder>;
            public bindGroupVolumeView(param0: androidx.mediarouter.app.MediaRouteCastDialog.RecyclerAdapter.Item): void;
          }
          export class HeaderViewHolder {
            public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteCastDialog.RecyclerAdapter.HeaderViewHolder>;
            public bindHeaderViewHolder(param0: androidx.mediarouter.app.MediaRouteCastDialog.RecyclerAdapter.Item): void;
          }
          export class Item {
            public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteCastDialog.RecyclerAdapter.Item>;
            public getType(): number;
            public getData(): any;
          }
          export class RouteViewHolder {
            public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteCastDialog.RecyclerAdapter.RouteViewHolder>;
            public bindRouteViewHolder(param0: androidx.mediarouter.app.MediaRouteCastDialog.RecyclerAdapter.Item): void;
          }
        }
        export class VolumeChangeListener {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteCastDialog.VolumeChangeListener>;
          public onStopTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
          public onProgressChanged(param0: globalAndroid.widget.SeekBar, param1: number, param2: boolean): void;
          public onStartTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
        }
      }
      export class MediaRouteChooserDialog {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog>;
        public onCreate(param0: globalAndroid.os.Bundle): void;
        public constructor(param0: globalAndroid.content.Context);
        public setTitle(param0: number): void;
        public onDetachedFromWindow(): void;
        public constructor(param0: globalAndroid.content.Context, param1: number);
        public onFilterRoutes(param0: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>): void;
        public refreshRoutes(): void;
        public onAttachedToWindow(): void;
        public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
        public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
        public onFilterRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): boolean;
        public setTitle(param0: string): void;
      }
      export module MediaRouteChooserDialog {
        export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog.MediaRouterCallback>;
          public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteSelected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
        }
        export class RouteAdapter extends globalAndroid.widget.ArrayAdapter<androidx.mediarouter.media.MediaRouter.RouteInfo>
          implements globalAndroid.widget.AdapterView.OnItemClickListener {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog.RouteAdapter>;
          public areAllItemsEnabled(): boolean;
          public onItemClick(param0: globalAndroid.widget.AdapterView<any>, param1: globalAndroid.view.View, param2: number, param3: number): void;
          public isEnabled(param0: number): boolean;
          public constructor(param0: globalAndroid.content.Context, param1: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>);
          public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
        }
        export class RouteComparator extends java.util.Comparator<androidx.mediarouter.media.MediaRouter.RouteInfo> {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialog.RouteComparator>;
          public static sInstance: androidx.mediarouter.app.MediaRouteChooserDialog.RouteComparator;
          public compare(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): number;
        }
      }
      export class MediaRouteChooserDialogFragment {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteChooserDialogFragment>;
        public onCreateChooserDialog(param0: globalAndroid.content.Context, param1: globalAndroid.os.Bundle): androidx.mediarouter.app.MediaRouteChooserDialog;
        public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
        public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
        public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
        public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
        public constructor();
        public onCreateDevicePickerDialog(param0: globalAndroid.content.Context): androidx.mediarouter.app.MediaRouteDevicePickerDialog;
      }
      export class MediaRouteControllerDialog {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog>;
        public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
        public onCreateMediaControlView(param0: globalAndroid.os.Bundle): globalAndroid.view.View;
        public setVolumeControlEnabled(param0: boolean): void;
        public getMediaSession(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
        public onCreate(param0: globalAndroid.os.Bundle): void;
        public onKeyUp(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
        public isVolumeControlEnabled(): boolean;
        public constructor(param0: globalAndroid.content.Context);
        public getRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
        public getMediaControlView(): globalAndroid.view.View;
        public onDetachedFromWindow(): void;
        public constructor(param0: globalAndroid.content.Context, param1: number);
        public onAttachedToWindow(): void;
      }
      export module MediaRouteControllerDialog {
        export class ClickListener {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.ClickListener>;
          public onClick(param0: globalAndroid.view.View): void;
        }
        export class FetchArtTask extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, globalAndroid.graphics.Bitmap> {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.FetchArtTask>;
          public getIconBitmap(): globalAndroid.graphics.Bitmap;
          public onPreExecute(): void;
          public getIconUri(): globalAndroid.net.Uri;
          public doInBackground(param0: native.Array<java.lang.Void>): globalAndroid.graphics.Bitmap;
          public onPostExecute(param0: globalAndroid.graphics.Bitmap): void;
        }
        export class MediaControllerCallback {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.MediaControllerCallback>;
          public onSessionDestroyed(): void;
          public onMetadataChanged(param0: globalAndroid.support.v4.media.MediaMetadataCompat): void;
          public onPlaybackStateChanged(param0: globalAndroid.support.v4.media.session.PlaybackStateCompat): void;
        }
        export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.MediaRouterCallback>;
          public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteVolumeChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteUnselected(
            param0: androidx.mediarouter.media.MediaRouter,
            param1: androidx.mediarouter.media.MediaRouter.RouteInfo,
            param2: number,
          ): void;
          public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
        }
        export class VolumeChangeListener {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.VolumeChangeListener>;
          public onStopTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
          public onProgressChanged(param0: globalAndroid.widget.SeekBar, param1: number, param2: boolean): void;
          public onStartTrackingTouch(param0: globalAndroid.widget.SeekBar): void;
        }
        export class VolumeGroupAdapter extends globalAndroid.widget.ArrayAdapter<androidx.mediarouter.media.MediaRouter.RouteInfo> {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialog.VolumeGroupAdapter>;
          public isEnabled(param0: number): boolean;
          public constructor(param0: globalAndroid.content.Context, param1: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>);
          public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
        }
      }
      export class MediaRouteControllerDialogFragment {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteControllerDialogFragment>;
        public onCreateControllerDialog(
          param0: globalAndroid.content.Context,
          param1: globalAndroid.os.Bundle,
        ): androidx.mediarouter.app.MediaRouteControllerDialog;
        public onStop(): void;
        public onCreateCastDialog(param0: globalAndroid.content.Context): androidx.mediarouter.app.MediaRouteCastDialog;
        public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
        public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
        public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
        public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
        public constructor();
      }
      export class MediaRouteDevicePickerDialog {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDevicePickerDialog>;
        public onCreate(param0: globalAndroid.os.Bundle): void;
        public constructor(param0: globalAndroid.content.Context);
        public onDetachedFromWindow(): void;
        public constructor(param0: globalAndroid.content.Context, param1: number);
        public onFilterRoutes(param0: java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>): void;
        public refreshRoutes(): void;
        public onAttachedToWindow(): void;
        public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
        public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
        public onFilterRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): boolean;
      }
      export module MediaRouteDevicePickerDialog {
        export class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDevicePickerDialog.MediaRouterCallback>;
          public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteSelected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
        }
        export class RecyclerAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDevicePickerDialog.RecyclerAdapter>;
          public getItem(param0: number): androidx.mediarouter.app.MediaRouteDevicePickerDialog.RecyclerAdapter.Item;
          public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
          public getItemCount(): number;
          public getItemViewType(param0: number): number;
          public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
        }
        export module RecyclerAdapter {
          export class HeaderViewHolder {
            public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDevicePickerDialog.RecyclerAdapter.HeaderViewHolder>;
            public binHeaderView(param0: androidx.mediarouter.app.MediaRouteDevicePickerDialog.RecyclerAdapter.Item): void;
          }
          export class Item {
            public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDevicePickerDialog.RecyclerAdapter.Item>;
            public getType(): number;
            public getData(): any;
          }
          export class RouteViewHolder {
            public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDevicePickerDialog.RecyclerAdapter.RouteViewHolder>;
            public bindRouteView(param0: androidx.mediarouter.app.MediaRouteDevicePickerDialog.RecyclerAdapter.Item): void;
          }
        }
        export class RouteComparator extends java.util.Comparator<androidx.mediarouter.media.MediaRouter.RouteInfo> {
          public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDevicePickerDialog.RouteComparator>;
          public static sInstance: androidx.mediarouter.app.MediaRouteDevicePickerDialog.RouteComparator;
          public compare(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): number;
        }
      }
      export class MediaRouteDialogFactory {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDialogFactory>;
        public onCreateChooserDialogFragment(): androidx.mediarouter.app.MediaRouteChooserDialogFragment;
        public onCreateControllerDialogFragment(): androidx.mediarouter.app.MediaRouteControllerDialogFragment;
        public static getDefault(): androidx.mediarouter.app.MediaRouteDialogFactory;
        public constructor();
      }
      export class MediaRouteDialogHelper {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDialogHelper>;
        public static getItemsAdded(param0: java.util.List<any>, param1: java.util.List<any>): java.util.Set<any>;
        public static getItemBoundMap(param0: globalAndroid.widget.ListView, param1: globalAndroid.widget.ArrayAdapter<any>): java.util.HashMap<any, any>;
        public static listUnorderedEquals(param0: java.util.List<any>, param1: java.util.List<any>): boolean;
        public static getItemsRemoved(param0: java.util.List<any>, param1: java.util.List<any>): java.util.Set<any>;
        public static getItemBitmapMap(
          param0: globalAndroid.content.Context,
          param1: globalAndroid.widget.ListView,
          param2: globalAndroid.widget.ArrayAdapter<any>,
        ): java.util.HashMap<any, any>;
        public static getDialogWidth(param0: globalAndroid.content.Context): number;
      }
      export class MediaRouteDiscoveryFragment {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteDiscoveryFragment>;
        public onPrepareCallbackFlags(): number;
        public getMediaRouter(): androidx.mediarouter.media.MediaRouter;
        public onStart(): void;
        public onCreateCallback(): androidx.mediarouter.media.MediaRouter.Callback;
        public onStop(): void;
        public getRouteSelector(): androidx.mediarouter.media.MediaRouteSelector;
        public setRouteSelector(param0: androidx.mediarouter.media.MediaRouteSelector): void;
        public constructor();
      }
      export class MediaRouteExpandCollapseButton {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteExpandCollapseButton>;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public constructor(param0: globalAndroid.content.Context);
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
      }
      export class MediaRouteVolumeSlider {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouteVolumeSlider>;
        public drawableStateChanged(): void;
        public setThumb(param0: globalAndroid.graphics.drawable.Drawable): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public constructor(param0: globalAndroid.content.Context);
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        public setColor(param0: number): void;
        public setHideThumb(param0: boolean): void;
      }
      export class MediaRouterThemeHelper {
        public static class: java.lang.Class<androidx.mediarouter.app.MediaRouterThemeHelper>;
      }
      export class OverlayListView {
        public static class: java.lang.Class<androidx.mediarouter.app.OverlayListView>;
        public stopAnimationAll(): void;
        public onDraw(param0: globalAndroid.graphics.Canvas): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
        public startAnimationAll(): void;
        public constructor(param0: globalAndroid.content.Context);
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
        public addOverlayObject(param0: androidx.mediarouter.app.OverlayListView.OverlayObject): void;
      }
      export module OverlayListView {
        export class OverlayObject {
          public static class: java.lang.Class<androidx.mediarouter.app.OverlayListView.OverlayObject>;
          public setDuration(param0: number): androidx.mediarouter.app.OverlayListView.OverlayObject;
          public stopAnimation(): void;
          public setAnimationEndListener(
            param0: androidx.mediarouter.app.OverlayListView.OverlayObject.OnAnimationEndListener,
          ): androidx.mediarouter.app.OverlayListView.OverlayObject;
          public setAlphaAnimation(param0: number, param1: number): androidx.mediarouter.app.OverlayListView.OverlayObject;
          public constructor(param0: globalAndroid.graphics.drawable.BitmapDrawable, param1: globalAndroid.graphics.Rect);
          public setTranslateYAnimation(param0: number): androidx.mediarouter.app.OverlayListView.OverlayObject;
          public startAnimation(param0: number): void;
          public update(param0: number): boolean;
          public setInterpolator(param0: globalAndroid.view.animation.Interpolator): androidx.mediarouter.app.OverlayListView.OverlayObject;
          public isAnimationStarted(): boolean;
          public getBitmapDrawable(): globalAndroid.graphics.drawable.BitmapDrawable;
        }
        export module OverlayObject {
          export class OnAnimationEndListener {
            public static class: java.lang.Class<androidx.mediarouter.app.OverlayListView.OverlayObject.OnAnimationEndListener>;
            /**
             * Constructs a new instance of the androidx.mediarouter.app.OverlayListView$OverlayObject$OnAnimationEndListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { onAnimationEnd(): void });
            public constructor();
            public onAnimationEnd(): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaControlIntent {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaControlIntent>;
        public static CATEGORY_LIVE_AUDIO: string;
        public static CATEGORY_LIVE_VIDEO: string;
        public static CATEGORY_REMOTE_PLAYBACK: string;
        public static ACTION_PLAY: string;
        public static ACTION_ENQUEUE: string;
        public static ACTION_SEEK: string;
        public static ACTION_GET_STATUS: string;
        public static ACTION_REMOVE: string;
        public static ACTION_PAUSE: string;
        public static ACTION_RESUME: string;
        public static ACTION_STOP: string;
        public static ACTION_START_SESSION: string;
        public static ACTION_GET_SESSION_STATUS: string;
        public static ACTION_END_SESSION: string;
        public static ACTION_SEND_MESSAGE: string;
        public static EXTRA_SESSION_ID: string;
        public static EXTRA_SESSION_STATUS: string;
        public static EXTRA_SESSION_STATUS_UPDATE_RECEIVER: string;
        public static EXTRA_MESSAGE_RECEIVER: string;
        public static EXTRA_ITEM_ID: string;
        public static EXTRA_ITEM_STATUS: string;
        public static EXTRA_ITEM_CONTENT_POSITION: string;
        public static EXTRA_ITEM_METADATA: string;
        public static EXTRA_ITEM_HTTP_HEADERS: string;
        public static EXTRA_ITEM_STATUS_UPDATE_RECEIVER: string;
        public static EXTRA_MESSAGE: string;
        public static EXTRA_ERROR_CODE: string;
        public static ERROR_UNKNOWN: number;
        public static ERROR_UNSUPPORTED_OPERATION: number;
        public static ERROR_INVALID_SESSION_ID: number;
        public static ERROR_INVALID_ITEM_ID: number;
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaItemMetadata {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaItemMetadata>;
        public static KEY_ALBUM_ARTIST: string;
        public static KEY_ALBUM_TITLE: string;
        public static KEY_ARTWORK_URI: string;
        public static KEY_ARTIST: string;
        public static KEY_AUTHOR: string;
        public static KEY_COMPOSER: string;
        public static KEY_TITLE: string;
        public static KEY_YEAR: string;
        public static KEY_TRACK_NUMBER: string;
        public static KEY_DISC_NUMBER: string;
        public static KEY_DURATION: string;
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaItemStatus {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaItemStatus>;
        public static PLAYBACK_STATE_PENDING: number;
        public static PLAYBACK_STATE_PLAYING: number;
        public static PLAYBACK_STATE_PAUSED: number;
        public static PLAYBACK_STATE_BUFFERING: number;
        public static PLAYBACK_STATE_FINISHED: number;
        public static PLAYBACK_STATE_CANCELED: number;
        public static PLAYBACK_STATE_INVALIDATED: number;
        public static PLAYBACK_STATE_ERROR: number;
        public static EXTRA_HTTP_STATUS_CODE: string;
        public static EXTRA_HTTP_RESPONSE_HEADERS: string;
        public getPlaybackState(): number;
        public getExtras(): globalAndroid.os.Bundle;
        public getContentPosition(): number;
        public getContentDuration(): number;
        public toString(): string;
        public getTimestamp(): number;
        public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaItemStatus;
        public asBundle(): globalAndroid.os.Bundle;
      }
      export module MediaItemStatus {
        export class Builder {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaItemStatus.Builder>;
          public setTimestamp(param0: number): androidx.mediarouter.media.MediaItemStatus.Builder;
          public setExtras(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaItemStatus.Builder;
          public setContentPosition(param0: number): androidx.mediarouter.media.MediaItemStatus.Builder;
          public build(): androidx.mediarouter.media.MediaItemStatus;
          public setPlaybackState(param0: number): androidx.mediarouter.media.MediaItemStatus.Builder;
          public constructor(param0: androidx.mediarouter.media.MediaItemStatus);
          public setContentDuration(param0: number): androidx.mediarouter.media.MediaItemStatus.Builder;
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaRouteDescriptor {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteDescriptor>;
        public getId(): string;
        public getExtras(): globalAndroid.os.Bundle;
        public getGroupMemberIds(): java.util.List<string>;
        public getConnectionState(): number;
        public getDescription(): string;
        public getPlaybackType(): number;
        public getMinClientVersion(): number;
        public getDeviceType(): number;
        public getPresentationDisplayId(): number;
        public asBundle(): globalAndroid.os.Bundle;
        public getVolumeHandling(): number;
        public getIconUri(): globalAndroid.net.Uri;
        public getVolumeMax(): number;
        public getPlaybackStream(): number;
        /** @deprecated */
        public isConnecting(): boolean;
        public getName(): string;
        public isValid(): boolean;
        public toString(): string;
        public getVolume(): number;
        public canDisconnectAndKeepPlaying(): boolean;
        public getControlFilters(): java.util.List<globalAndroid.content.IntentFilter>;
        public getSettingsActivity(): globalAndroid.content.IntentSender;
        public isEnabled(): boolean;
        public getMaxClientVersion(): number;
        public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteDescriptor;
      }
      export module MediaRouteDescriptor {
        export class Builder {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteDescriptor.Builder>;
          public setIconUri(param0: globalAndroid.net.Uri): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public build(): androidx.mediarouter.media.MediaRouteDescriptor;
          public addControlFilter(param0: globalAndroid.content.IntentFilter): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setName(param0: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setConnectionState(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setDeviceType(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public constructor(param0: androidx.mediarouter.media.MediaRouteDescriptor);
          public constructor(param0: string, param1: string);
          public addGroupMemberIds(param0: java.util.Collection<string>): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setPlaybackStream(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setVolume(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setDescription(param0: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public addControlFilters(param0: java.util.Collection<globalAndroid.content.IntentFilter>): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setVolumeMax(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setSettingsActivity(param0: globalAndroid.content.IntentSender): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setVolumeHandling(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public addGroupMemberId(param0: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setPlaybackType(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setEnabled(param0: boolean): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          /** @deprecated */
          public setConnecting(param0: boolean): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setPresentationDisplayId(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setExtras(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setMinClientVersion(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setCanDisconnect(param0: boolean): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setMaxClientVersion(param0: number): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
          public setId(param0: string): androidx.mediarouter.media.MediaRouteDescriptor.Builder;
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaRouteDiscoveryRequest {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteDiscoveryRequest>;
        public hashCode(): number;
        public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteDiscoveryRequest;
        public equals(param0: any): boolean;
        public constructor(param0: androidx.mediarouter.media.MediaRouteSelector, param1: boolean);
        public isValid(): boolean;
        public toString(): string;
        public getSelector(): androidx.mediarouter.media.MediaRouteSelector;
        public asBundle(): globalAndroid.os.Bundle;
        public isActiveScan(): boolean;
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export abstract class MediaRouteProvider {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider>;
        public setDiscoveryRequest(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
        public setDescriptor(param0: androidx.mediarouter.media.MediaRouteProviderDescriptor): void;
        public getHandler(): globalAndroid.os.Handler;
        public onDiscoveryRequestChanged(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
        public onCreateRouteController(param0: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
        public onCreateRouteController(param0: string, param1: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
        public getContext(): globalAndroid.content.Context;
        public setCallback(param0: androidx.mediarouter.media.MediaRouteProvider.Callback): void;
        public constructor(param0: globalAndroid.content.Context);
        public getMetadata(): androidx.mediarouter.media.MediaRouteProvider.ProviderMetadata;
        public getDescriptor(): androidx.mediarouter.media.MediaRouteProviderDescriptor;
        public getDiscoveryRequest(): androidx.mediarouter.media.MediaRouteDiscoveryRequest;
      }
      export module MediaRouteProvider {
        export abstract class Callback {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.Callback>;
          public constructor();
          public onDescriptorChanged(
            param0: androidx.mediarouter.media.MediaRouteProvider,
            param1: androidx.mediarouter.media.MediaRouteProviderDescriptor,
          ): void;
        }
        export class ProviderHandler {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.ProviderHandler>;
          public handleMessage(param0: globalAndroid.os.Message): void;
        }
        export class ProviderMetadata {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.ProviderMetadata>;
          public toString(): string;
          public getComponentName(): globalAndroid.content.ComponentName;
          public getPackageName(): string;
        }
        export abstract class RouteController {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProvider.RouteController>;
          public onUnselect(): void;
          public onSetVolume(param0: number): void;
          public constructor();
          public onSelect(): void;
          public onUnselect(param0: number): void;
          public onControlRequest(param0: globalAndroid.content.Intent, param1: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
          public onRelease(): void;
          public onUpdateVolume(param0: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaRouteProviderDescriptor {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderDescriptor>;
        public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouteDescriptor>;
        public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteProviderDescriptor;
        public isValid(): boolean;
        public toString(): string;
        public asBundle(): globalAndroid.os.Bundle;
      }
      export module MediaRouteProviderDescriptor {
        export class Builder {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderDescriptor.Builder>;
          public constructor();
          public constructor(param0: androidx.mediarouter.media.MediaRouteProviderDescriptor);
          public addRoute(param0: androidx.mediarouter.media.MediaRouteDescriptor): androidx.mediarouter.media.MediaRouteProviderDescriptor.Builder;
          public addRoutes(
            param0: java.util.Collection<androidx.mediarouter.media.MediaRouteDescriptor>,
          ): androidx.mediarouter.media.MediaRouteProviderDescriptor.Builder;
          public build(): androidx.mediarouter.media.MediaRouteProviderDescriptor;
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export abstract class MediaRouteProviderProtocol {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderProtocol>;
        public static SERVICE_INTERFACE: string;
        public static CLIENT_MSG_REGISTER: number;
        public static CLIENT_MSG_UNREGISTER: number;
        public static CLIENT_MSG_CREATE_ROUTE_CONTROLLER: number;
        public static CLIENT_MSG_RELEASE_ROUTE_CONTROLLER: number;
        public static CLIENT_MSG_SELECT_ROUTE: number;
        public static CLIENT_MSG_UNSELECT_ROUTE: number;
        public static CLIENT_MSG_SET_ROUTE_VOLUME: number;
        public static CLIENT_MSG_UPDATE_ROUTE_VOLUME: number;
        public static CLIENT_MSG_ROUTE_CONTROL_REQUEST: number;
        public static CLIENT_MSG_SET_DISCOVERY_REQUEST: number;
        public static CLIENT_DATA_ROUTE_ID: string;
        public static CLIENT_DATA_ROUTE_LIBRARY_GROUP: string;
        public static CLIENT_DATA_VOLUME: string;
        public static CLIENT_DATA_UNSELECT_REASON: string;
        public static SERVICE_MSG_GENERIC_FAILURE: number;
        public static SERVICE_MSG_GENERIC_SUCCESS: number;
        public static SERVICE_MSG_REGISTERED: number;
        public static SERVICE_MSG_CONTROL_REQUEST_SUCCEEDED: number;
        public static SERVICE_MSG_CONTROL_REQUEST_FAILED: number;
        public static SERVICE_MSG_DESCRIPTOR_CHANGED: number;
        public static SERVICE_DATA_ERROR: string;
        public static CLIENT_VERSION_1: number;
        public static CLIENT_VERSION_2: number;
        public static CLIENT_VERSION_CURRENT: number;
        public static SERVICE_VERSION_1: number;
        public static SERVICE_VERSION_CURRENT: number;
        public static isValidRemoteMessenger(param0: globalAndroid.os.Messenger): boolean;
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export abstract class MediaRouteProviderService {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService>;
        public static SERVICE_INTERFACE: string;
        public getMediaRouteProvider(): androidx.mediarouter.media.MediaRouteProvider;
        public onUnbind(param0: globalAndroid.content.Intent): boolean;
        public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
        public onCreateMediaRouteProvider(): androidx.mediarouter.media.MediaRouteProvider;
        public constructor();
      }
      export module MediaRouteProviderService {
        export class ClientRecord {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.ClientRecord>;
          public mMessenger: globalAndroid.os.Messenger;
          public mVersion: number;
          public mDiscoveryRequest: androidx.mediarouter.media.MediaRouteDiscoveryRequest;
          public hasMessenger(param0: globalAndroid.os.Messenger): boolean;
          public binderDied(): void;
          public toString(): string;
          public createRouteController(param0: string, param1: string, param2: number): boolean;
          public dispose(): void;
          public register(): boolean;
          public setDiscoveryRequest(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): boolean;
          public constructor(param0: androidx.mediarouter.media.MediaRouteProviderService, param1: globalAndroid.os.Messenger, param2: number);
          public releaseRouteController(param0: number): boolean;
          public getRouteController(param0: number): androidx.mediarouter.media.MediaRouteProvider.RouteController;
        }
        export class PrivateHandler {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.PrivateHandler>;
          public handleMessage(param0: globalAndroid.os.Message): void;
        }
        export class ProviderCallback extends androidx.mediarouter.media.MediaRouteProvider.Callback {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.ProviderCallback>;
          public onDescriptorChanged(
            param0: androidx.mediarouter.media.MediaRouteProvider,
            param1: androidx.mediarouter.media.MediaRouteProviderDescriptor,
          ): void;
        }
        export class ReceiveHandler {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteProviderService.ReceiveHandler>;
          public handleMessage(param0: globalAndroid.os.Message): void;
          public constructor(param0: androidx.mediarouter.media.MediaRouteProviderService);
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaRouteSelector {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteSelector>;
        public static EMPTY: androidx.mediarouter.media.MediaRouteSelector;
        public contains(param0: androidx.mediarouter.media.MediaRouteSelector): boolean;
        public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaRouteSelector;
        public hashCode(): number;
        public hasControlCategory(param0: string): boolean;
        public equals(param0: any): boolean;
        public matchesControlFilters(param0: java.util.List<globalAndroid.content.IntentFilter>): boolean;
        public isEmpty(): boolean;
        public isValid(): boolean;
        public toString(): string;
        public getControlCategories(): java.util.List<string>;
        public asBundle(): globalAndroid.os.Bundle;
      }
      export module MediaRouteSelector {
        export class Builder {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouteSelector.Builder>;
          public addControlCategory(param0: string): androidx.mediarouter.media.MediaRouteSelector.Builder;
          public constructor();
          public constructor(param0: androidx.mediarouter.media.MediaRouteSelector);
          public addSelector(param0: androidx.mediarouter.media.MediaRouteSelector): androidx.mediarouter.media.MediaRouteSelector.Builder;
          public build(): androidx.mediarouter.media.MediaRouteSelector;
          public addControlCategories(param0: java.util.Collection<string>): androidx.mediarouter.media.MediaRouteSelector.Builder;
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaRouter {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter>;
        public static UNSELECT_REASON_UNKNOWN: number;
        public static UNSELECT_REASON_DISCONNECTED: number;
        public static UNSELECT_REASON_STOPPED: number;
        public static UNSELECT_REASON_ROUTE_CHANGED: number;
        public static CALLBACK_FLAG_PERFORM_ACTIVE_SCAN: number;
        public static CALLBACK_FLAG_UNFILTERED_EVENTS: number;
        public static CALLBACK_FLAG_REQUEST_DISCOVERY: number;
        public static CALLBACK_FLAG_FORCE_DISCOVERY: number;
        public static AVAILABILITY_FLAG_IGNORE_DEFAULT_ROUTE: number;
        public static AVAILABILITY_FLAG_REQUIRE_MATCH: number;
        public getDefaultRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
        public selectRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
        public removeRemoteControlClient(param0: any): void;
        public getBluetoothRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
        public unselect(param0: number): void;
        public getMediaSessionToken(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
        public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
        public addRemoteControlClient(param0: any): void;
        public getSelectedRoute(): androidx.mediarouter.media.MediaRouter.RouteInfo;
        public removeProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
        public updateSelectedRoute(param0: androidx.mediarouter.media.MediaRouteSelector): androidx.mediarouter.media.MediaRouter.RouteInfo;
        public addCallback(param0: androidx.mediarouter.media.MediaRouteSelector, param1: androidx.mediarouter.media.MediaRouter.Callback): void;
        public addProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
        public static getInstance(param0: globalAndroid.content.Context): androidx.mediarouter.media.MediaRouter;
        public addCallback(
          param0: androidx.mediarouter.media.MediaRouteSelector,
          param1: androidx.mediarouter.media.MediaRouter.Callback,
          param2: number,
        ): void;
        public getProviders(): java.util.List<androidx.mediarouter.media.MediaRouter.ProviderInfo>;
        public setMediaSessionCompat(param0: globalAndroid.support.v4.media.session.MediaSessionCompat): void;
        public removeCallback(param0: androidx.mediarouter.media.MediaRouter.Callback): void;
        public setMediaSession(param0: any): void;
        public isRouteAvailable(param0: androidx.mediarouter.media.MediaRouteSelector, param1: number): boolean;
      }
      export module MediaRouter {
        export abstract class Callback {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.Callback>;
          public onRouteUnselected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteVolumeChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onProviderChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
          public onRouteUnselected(
            param0: androidx.mediarouter.media.MediaRouter,
            param1: androidx.mediarouter.media.MediaRouter.RouteInfo,
            param2: number,
          ): void;
          public onRouteAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public constructor();
          public onRouteRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onProviderAdded(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
          public onRouteChanged(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onProviderRemoved(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
          public onRouteSelected(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRoutePresentationDisplayChanged(
            param0: androidx.mediarouter.media.MediaRouter,
            param1: androidx.mediarouter.media.MediaRouter.RouteInfo,
          ): void;
        }
        export class CallbackRecord {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.CallbackRecord>;
          public mRouter: androidx.mediarouter.media.MediaRouter;
          public mCallback: androidx.mediarouter.media.MediaRouter.Callback;
          public mSelector: androidx.mediarouter.media.MediaRouteSelector;
          public mFlags: number;
          public filterRouteEvent(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): boolean;
          public constructor(param0: androidx.mediarouter.media.MediaRouter, param1: androidx.mediarouter.media.MediaRouter.Callback);
        }
        export abstract class ControlRequestCallback {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.ControlRequestCallback>;
          public constructor();
          public onResult(param0: globalAndroid.os.Bundle): void;
          public onError(param0: string, param1: globalAndroid.os.Bundle): void;
        }
        export class GlobalMediaRouter
          implements androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback, androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher.Callback {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter>;
          public getMediaSessionToken(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
          public getProviderContext(param0: string): globalAndroid.content.Context;
          public getDisplay(param0: number): globalAndroid.view.Display;
          public addProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
          public start(): void;
          public setMediaSession(param0: any): void;
          public requestSetVolume(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: number): void;
          public removeRemoteControlClient(param0: any): void;
          public sendControlRequest(
            param0: androidx.mediarouter.media.MediaRouter.RouteInfo,
            param1: globalAndroid.content.Intent,
            param2: androidx.mediarouter.media.MediaRouter.ControlRequestCallback,
          ): void;
          public onSystemRouteSelectedByDescriptorId(param0: string): void;
          public requestUpdateVolume(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: number): void;
          public updateDiscoveryRequest(): void;
          public setMediaSessionCompat(param0: globalAndroid.support.v4.media.session.MediaSessionCompat): void;
          public getRouter(param0: globalAndroid.content.Context): androidx.mediarouter.media.MediaRouter;
          public getContentResolver(): globalAndroid.content.ContentResolver;
          public removeProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
          public getRoute(param0: string): androidx.mediarouter.media.MediaRouter.RouteInfo;
          public addRemoteControlClient(param0: any): void;
          public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
          public isRouteAvailable(param0: androidx.mediarouter.media.MediaRouteSelector, param1: number): boolean;
        }
        export module GlobalMediaRouter {
          export class CallbackHandler {
            public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.CallbackHandler>;
            public static MSG_ROUTE_ADDED: number;
            public static MSG_ROUTE_REMOVED: number;
            public static MSG_ROUTE_CHANGED: number;
            public static MSG_ROUTE_VOLUME_CHANGED: number;
            public static MSG_ROUTE_PRESENTATION_DISPLAY_CHANGED: number;
            public static MSG_ROUTE_SELECTED: number;
            public static MSG_ROUTE_UNSELECTED: number;
            public static MSG_PROVIDER_ADDED: number;
            public static MSG_PROVIDER_REMOVED: number;
            public static MSG_PROVIDER_CHANGED: number;
            public post(param0: number, param1: any): void;
            public post(param0: number, param1: any, param2: number): void;
            public handleMessage(param0: globalAndroid.os.Message): void;
          }
          export class MediaSessionRecord {
            public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.MediaSessionRecord>;
            public getToken(): globalAndroid.support.v4.media.session.MediaSessionCompat.Token;
            public clearVolumeHandling(): void;
            public configureVolume(param0: number, param1: number, param2: number): void;
          }
          export class ProviderCallback extends androidx.mediarouter.media.MediaRouteProvider.Callback {
            public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.ProviderCallback>;
            public onDescriptorChanged(
              param0: androidx.mediarouter.media.MediaRouteProvider,
              param1: androidx.mediarouter.media.MediaRouteProviderDescriptor,
            ): void;
          }
          export class RemoteControlClientRecord extends androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback {
            public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.GlobalMediaRouter.RemoteControlClientRecord>;
            public disconnect(): void;
            public getRemoteControlClient(): any;
            public updatePlaybackInfo(): void;
            public onVolumeSetRequest(param0: number): void;
            public onVolumeUpdateRequest(param0: number): void;
            public constructor(param0: androidx.mediarouter.media.MediaRouter.GlobalMediaRouter, param1: any);
          }
        }
        export class ProviderInfo {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.ProviderInfo>;
          public toString(): string;
          public getComponentName(): globalAndroid.content.ComponentName;
          public getPackageName(): string;
          public getProviderInstance(): androidx.mediarouter.media.MediaRouteProvider;
          public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
        }
        export class RouteGroup extends androidx.mediarouter.media.MediaRouter.RouteInfo {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.RouteGroup>;
          public getRouteCount(): number;
          public toString(): string;
          public getRouteAt(param0: number): androidx.mediarouter.media.MediaRouter.RouteInfo;
          public getRoutes(): java.util.List<androidx.mediarouter.media.MediaRouter.RouteInfo>;
        }
        export class RouteInfo {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouter.RouteInfo>;
          public static CONNECTION_STATE_DISCONNECTED: number;
          public static CONNECTION_STATE_CONNECTING: number;
          public static CONNECTION_STATE_CONNECTED: number;
          public static PLAYBACK_TYPE_LOCAL: number;
          public static PLAYBACK_TYPE_REMOTE: number;
          public static DEVICE_TYPE_UNKNOWN: number;
          public static DEVICE_TYPE_TV: number;
          public static DEVICE_TYPE_SPEAKER: number;
          public static DEVICE_TYPE_BLUETOOTH: number;
          public static PLAYBACK_VOLUME_FIXED: number;
          public static PLAYBACK_VOLUME_VARIABLE: number;
          public static PRESENTATION_DISPLAY_ID_NONE: number;
          public isDeviceSpeaker(): boolean;
          public getId(): string;
          public getPresentationDisplay(): globalAndroid.view.Display;
          public getVolumeHandling(): number;
          public isDefaultOrBluetooth(): boolean;
          public getVolume(): number;
          public isDefault(): boolean;
          public getDeviceType(): number;
          public getVolumeMax(): number;
          public matchesSelector(param0: androidx.mediarouter.media.MediaRouteSelector): boolean;
          public getConnectionState(): number;
          public toString(): string;
          public getExtras(): globalAndroid.os.Bundle;
          public getProvider(): androidx.mediarouter.media.MediaRouter.ProviderInfo;
          public isEnabled(): boolean;
          public sendControlRequest(param0: globalAndroid.content.Intent, param1: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): void;
          public requestUpdateVolume(param0: number): void;
          public getSettingsIntent(): globalAndroid.content.IntentSender;
          public getProviderInstance(): androidx.mediarouter.media.MediaRouteProvider;
          public supportsControlCategory(param0: string): boolean;
          public getIconUri(): globalAndroid.net.Uri;
          public getPlaybackStream(): number;
          public canDisconnect(): boolean;
          public select(): void;
          public getPlaybackType(): number;
          public supportsControlRequest(param0: globalAndroid.content.Intent): boolean;
          public isBluetooth(): boolean;
          public getName(): string;
          public getPresentationDisplayId(): number;
          public getControlFilters(): java.util.List<globalAndroid.content.IntentFilter>;
          public requestSetVolume(param0: number): void;
          public getDescription(): string;
          public isConnecting(): boolean;
          public supportsControlAction(param0: string, param1: string): boolean;
          public isSelected(): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaRouterApi24 {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterApi24>;
      }
      export module MediaRouterApi24 {
        export class RouteInfo {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterApi24.RouteInfo>;
          public static getDeviceType(param0: any): number;
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaRouterJellybean {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean>;
        public static DEVICE_OUT_BLUETOOTH: number;
        public static ROUTE_TYPE_LIVE_AUDIO: number;
        public static ROUTE_TYPE_LIVE_VIDEO: number;
        public static ROUTE_TYPE_USER: number;
        public static ALL_ROUTE_TYPES: number;
        public static createRouteCategory(param0: any, param1: string, param2: boolean): any;
        public static getSelectedRoute(param0: any, param1: number): any;
        public static addCallback(param0: any, param1: number, param2: any): void;
        public static selectRoute(param0: any, param1: number, param2: any): void;
        public static createCallback(param0: androidx.mediarouter.media.MediaRouterJellybean.Callback): any;
        public static createVolumeCallback(param0: androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback): any;
        public static createUserRoute(param0: any, param1: any): any;
        public static getMediaRouter(param0: globalAndroid.content.Context): any;
        public static removeCallback(param0: any, param1: any): void;
        public static getRoutes(param0: any): java.util.List<any>;
        public static getCategories(param0: any): java.util.List<any>;
        public static addUserRoute(param0: any, param1: any): void;
        public static removeUserRoute(param0: any, param1: any): void;
      }
      export module MediaRouterJellybean {
        export class Callback {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.Callback>;
          /**
           * Constructs a new instance of the androidx.mediarouter.media.MediaRouterJellybean$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onRouteSelected(param0: number, param1: any): void;
            onRouteUnselected(param0: number, param1: any): void;
            onRouteAdded(param0: any): void;
            onRouteRemoved(param0: any): void;
            onRouteChanged(param0: any): void;
            onRouteGrouped(param0: any, param1: any, param2: number): void;
            onRouteUngrouped(param0: any, param1: any): void;
            onRouteVolumeChanged(param0: any): void;
          });
          public constructor();
          public onRouteRemoved(param0: any): void;
          public onRouteVolumeChanged(param0: any): void;
          public onRouteUngrouped(param0: any, param1: any): void;
          public onRouteAdded(param0: any): void;
          public onRouteGrouped(param0: any, param1: any, param2: number): void;
          public onRouteUnselected(param0: number, param1: any): void;
          public onRouteSelected(param0: number, param1: any): void;
          public onRouteChanged(param0: any): void;
        }
        export class CallbackProxy<T> extends globalAndroid.media.MediaRouter.Callback {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.CallbackProxy<any>>;
          public mCallback: any;
          public onRouteUnselected(param0: globalAndroid.media.MediaRouter, param1: number, param2: globalAndroid.media.MediaRouter.RouteInfo): void;
          public onRouteAdded(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo): void;
          public onRouteRemoved(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo): void;
          public constructor(param0: any);
          public onRouteGrouped(
            param0: globalAndroid.media.MediaRouter,
            param1: globalAndroid.media.MediaRouter.RouteInfo,
            param2: globalAndroid.media.MediaRouter.RouteGroup,
            param3: number,
          ): void;
          public onRouteChanged(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo): void;
          public onRouteSelected(param0: globalAndroid.media.MediaRouter, param1: number, param2: globalAndroid.media.MediaRouter.RouteInfo): void;
          public onRouteVolumeChanged(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo): void;
          public onRouteUngrouped(
            param0: globalAndroid.media.MediaRouter,
            param1: globalAndroid.media.MediaRouter.RouteInfo,
            param2: globalAndroid.media.MediaRouter.RouteGroup,
          ): void;
        }
        export class GetDefaultRouteWorkaround {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.GetDefaultRouteWorkaround>;
          public constructor();
          public getDefaultRoute(param0: any): any;
        }
        export class RouteCategory {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.RouteCategory>;
          public static isGroupable(param0: any): boolean;
          public static getName(param0: any, param1: globalAndroid.content.Context): string;
          public static getRoutes(param0: any): java.util.List<any>;
          public static getSupportedTypes(param0: any): number;
        }
        export class RouteGroup {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.RouteGroup>;
          public static getGroupedRoutes(param0: any): java.util.List<any>;
        }
        export class RouteInfo {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.RouteInfo>;
          public static requestSetVolume(param0: any, param1: number): void;
          public static getPlaybackStream(param0: any): number;
          public static requestUpdateVolume(param0: any, param1: number): void;
          public static getStatus(param0: any): string;
          public static getName(param0: any, param1: globalAndroid.content.Context): string;
          public static setTag(param0: any, param1: any): void;
          public static getVolumeHandling(param0: any): number;
          public static getTag(param0: any): any;
          public static getIconDrawable(param0: any): globalAndroid.graphics.drawable.Drawable;
          public static getVolume(param0: any): number;
          public static getVolumeMax(param0: any): number;
          public static getPlaybackType(param0: any): number;
          public static getSupportedTypes(param0: any): number;
          public static getGroup(param0: any): any;
          public static isGroup(param0: any): boolean;
          public static getCategory(param0: any): any;
        }
        export class SelectRouteWorkaround {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.SelectRouteWorkaround>;
          public constructor();
          public selectRoute(param0: any, param1: number, param2: any): void;
        }
        export class UserRouteInfo {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.UserRouteInfo>;
          public static setName(param0: any, param1: string): void;
          public static setVolumeHandling(param0: any, param1: number): void;
          public static setIconDrawable(param0: any, param1: globalAndroid.graphics.drawable.Drawable): void;
          public static setVolumeCallback(param0: any, param1: any): void;
          public static setVolume(param0: any, param1: number): void;
          public static setPlaybackType(param0: any, param1: number): void;
          public static setVolumeMax(param0: any, param1: number): void;
          public static setRemoteControlClient(param0: any, param1: any): void;
          public static setPlaybackStream(param0: any, param1: number): void;
          public static setStatus(param0: any, param1: string): void;
        }
        export class VolumeCallback {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback>;
          /**
           * Constructs a new instance of the androidx.mediarouter.media.MediaRouterJellybean$VolumeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onVolumeSetRequest(param0: any, param1: number): void;
            onVolumeUpdateRequest(param0: any, param1: number): void;
          });
          public constructor();
          public onVolumeUpdateRequest(param0: any, param1: number): void;
          public onVolumeSetRequest(param0: any, param1: number): void;
        }
        export class VolumeCallbackProxy<T> extends globalAndroid.media.MediaRouter.VolumeCallback {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybean.VolumeCallbackProxy<any>>;
          public mCallback: any;
          public onVolumeSetRequest(param0: globalAndroid.media.MediaRouter.RouteInfo, param1: number): void;
          public onVolumeUpdateRequest(param0: globalAndroid.media.MediaRouter.RouteInfo, param1: number): void;
          public constructor(param0: any);
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaRouterJellybeanMr1 {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1>;
        public static createCallback(param0: androidx.mediarouter.media.MediaRouterJellybeanMr1.Callback): any;
      }
      export module MediaRouterJellybeanMr1 {
        export class ActiveScanWorkaround {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.ActiveScanWorkaround>;
          public run(): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.os.Handler);
          public setActiveScanRouteTypes(param0: number): void;
        }
        export class Callback extends androidx.mediarouter.media.MediaRouterJellybean.Callback {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.Callback>;
          /**
           * Constructs a new instance of the androidx.mediarouter.media.MediaRouterJellybeanMr1$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onRoutePresentationDisplayChanged(param0: any): void;
            onRouteSelected(param0: number, param1: any): void;
            onRouteUnselected(param0: number, param1: any): void;
            onRouteAdded(param0: any): void;
            onRouteRemoved(param0: any): void;
            onRouteChanged(param0: any): void;
            onRouteGrouped(param0: any, param1: any, param2: number): void;
            onRouteUngrouped(param0: any, param1: any): void;
            onRouteVolumeChanged(param0: any): void;
          });
          public constructor();
          public onRouteRemoved(param0: any): void;
          public onRouteVolumeChanged(param0: any): void;
          public onRouteUngrouped(param0: any, param1: any): void;
          public onRouteAdded(param0: any): void;
          public onRouteGrouped(param0: any, param1: any, param2: number): void;
          public onRouteUnselected(param0: number, param1: any): void;
          public onRoutePresentationDisplayChanged(param0: any): void;
          public onRouteSelected(param0: number, param1: any): void;
          public onRouteChanged(param0: any): void;
        }
        export class CallbackProxy<T> extends androidx.mediarouter.media.MediaRouterJellybean.CallbackProxy<any> {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.CallbackProxy<any>>;
          public onRoutePresentationDisplayChanged(param0: globalAndroid.media.MediaRouter, param1: globalAndroid.media.MediaRouter.RouteInfo): void;
          public constructor(param0: any);
        }
        export class IsConnectingWorkaround {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.IsConnectingWorkaround>;
          public isConnecting(param0: any): boolean;
          public constructor();
        }
        export class RouteInfo {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr1.RouteInfo>;
          public static getPresentationDisplay(param0: any): globalAndroid.view.Display;
          public static isEnabled(param0: any): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaRouterJellybeanMr2 {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr2>;
        public static getDefaultRoute(param0: any): any;
        public static addCallback(param0: any, param1: number, param2: any, param3: number): void;
      }
      export module MediaRouterJellybeanMr2 {
        export class RouteInfo {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr2.RouteInfo>;
          public static isConnecting(param0: any): boolean;
          public static getDescription(param0: any): string;
        }
        export class UserRouteInfo {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaRouterJellybeanMr2.UserRouteInfo>;
          public static setDescription(param0: any, param1: string): void;
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class MediaSessionStatus {
        public static class: java.lang.Class<androidx.mediarouter.media.MediaSessionStatus>;
        public static SESSION_STATE_ACTIVE: number;
        public static SESSION_STATE_ENDED: number;
        public static SESSION_STATE_INVALIDATED: number;
        public getSessionState(): number;
        public getExtras(): globalAndroid.os.Bundle;
        public toString(): string;
        public static fromBundle(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaSessionStatus;
        public getTimestamp(): number;
        public asBundle(): globalAndroid.os.Bundle;
        public isQueuePaused(): boolean;
      }
      export module MediaSessionStatus {
        export class Builder {
          public static class: java.lang.Class<androidx.mediarouter.media.MediaSessionStatus.Builder>;
          public setQueuePaused(param0: boolean): androidx.mediarouter.media.MediaSessionStatus.Builder;
          public setExtras(param0: globalAndroid.os.Bundle): androidx.mediarouter.media.MediaSessionStatus.Builder;
          public build(): androidx.mediarouter.media.MediaSessionStatus;
          public setTimestamp(param0: number): androidx.mediarouter.media.MediaSessionStatus.Builder;
          public setSessionState(param0: number): androidx.mediarouter.media.MediaSessionStatus.Builder;
          public constructor(param0: androidx.mediarouter.media.MediaSessionStatus);
          public constructor(param0: number);
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class RegisteredMediaRouteProvider extends androidx.mediarouter.media.MediaRouteProvider {
        public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider>;
        public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
        public rebindIfDisconnected(): void;
        public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
        public stop(): void;
        public onCreateRouteController(param0: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
        public onDiscoveryRequestChanged(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
        public onCreateRouteController(param0: string, param1: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
        public hasComponentName(param0: string, param1: string): boolean;
        public constructor(param0: globalAndroid.content.Context);
        public start(): void;
        public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.ComponentName);
        public toString(): string;
      }
      export module RegisteredMediaRouteProvider {
        export class Connection {
          public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection>;
          public onDescriptorChanged(param0: globalAndroid.os.Bundle): boolean;
          public releaseRouteController(param0: number): void;
          public dispose(): void;
          public onGenericSuccess(param0: number): boolean;
          public onControlRequestSucceeded(param0: number, param1: globalAndroid.os.Bundle): boolean;
          public selectRoute(param0: number): void;
          public onRegistered(param0: number, param1: number, param2: globalAndroid.os.Bundle): boolean;
          public constructor(param0: androidx.mediarouter.media.RegisteredMediaRouteProvider, param1: globalAndroid.os.Messenger);
          public binderDied(): void;
          public createRouteController(param0: string, param1: string): number;
          public updateVolume(param0: number, param1: number): void;
          public onControlRequestFailed(param0: number, param1: string, param2: globalAndroid.os.Bundle): boolean;
          public sendControlRequest(
            param0: number,
            param1: globalAndroid.content.Intent,
            param2: androidx.mediarouter.media.MediaRouter.ControlRequestCallback,
          ): boolean;
          public unselectRoute(param0: number, param1: number): void;
          public setDiscoveryRequest(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
          public register(): boolean;
          public onGenericFailure(param0: number): boolean;
          public setVolume(param0: number, param1: number): void;
        }
        export class Controller extends androidx.mediarouter.media.MediaRouteProvider.RouteController {
          public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.Controller>;
          public onUnselect(): void;
          public attachConnection(param0: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection): void;
          public onSetVolume(param0: number): void;
          public constructor();
          public constructor(param0: androidx.mediarouter.media.RegisteredMediaRouteProvider, param1: string, param2: string);
          public onSelect(): void;
          public onUnselect(param0: number): void;
          public onControlRequest(param0: globalAndroid.content.Intent, param1: androidx.mediarouter.media.MediaRouter.ControlRequestCallback): boolean;
          public onRelease(): void;
          public detachConnection(): void;
          public onUpdateVolume(param0: number): void;
        }
        export class PrivateHandler {
          public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.PrivateHandler>;
        }
        export class ReceiveHandler {
          public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProvider.ReceiveHandler>;
          public dispose(): void;
          public handleMessage(param0: globalAndroid.os.Message): void;
          public constructor(param0: androidx.mediarouter.media.RegisteredMediaRouteProvider.Connection);
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class RegisteredMediaRouteProviderWatcher {
        public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher>;
        public stop(): void;
        public start(): void;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher.Callback);
      }
      export module RegisteredMediaRouteProviderWatcher {
        export class Callback {
          public static class: java.lang.Class<androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher.Callback>;
          /**
           * Constructs a new instance of the androidx.mediarouter.media.RegisteredMediaRouteProviderWatcher$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            addProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
            removeProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
          });
          public constructor();
          public addProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
          public removeProvider(param0: androidx.mediarouter.media.MediaRouteProvider): void;
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export abstract class RemoteControlClientCompat {
        public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat>;
        public mContext: globalAndroid.content.Context;
        public mRcc: any;
        public mVolumeCallback: androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback;
        public setPlaybackInfo(param0: androidx.mediarouter.media.RemoteControlClientCompat.PlaybackInfo): void;
        public getRemoteControlClient(): any;
        public constructor(param0: globalAndroid.content.Context, param1: any);
        public static obtain(param0: globalAndroid.content.Context, param1: any): androidx.mediarouter.media.RemoteControlClientCompat;
        public setVolumeCallback(param0: androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback): void;
      }
      export module RemoteControlClientCompat {
        export class JellybeanImpl extends androidx.mediarouter.media.RemoteControlClientCompat {
          public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.JellybeanImpl>;
          public constructor(param0: globalAndroid.content.Context, param1: any);
          public setPlaybackInfo(param0: androidx.mediarouter.media.RemoteControlClientCompat.PlaybackInfo): void;
        }
        export module JellybeanImpl {
          export class VolumeCallbackWrapper extends androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback {
            public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.JellybeanImpl.VolumeCallbackWrapper>;
            public onVolumeSetRequest(param0: any, param1: number): void;
            public constructor(param0: androidx.mediarouter.media.RemoteControlClientCompat.JellybeanImpl);
            public onVolumeUpdateRequest(param0: any, param1: number): void;
          }
        }
        export class LegacyImpl extends androidx.mediarouter.media.RemoteControlClientCompat {
          public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.LegacyImpl>;
          public constructor(param0: globalAndroid.content.Context, param1: any);
        }
        export class PlaybackInfo {
          public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.PlaybackInfo>;
          public volume: number;
          public volumeMax: number;
          public volumeHandling: number;
          public playbackStream: number;
          public playbackType: number;
          public constructor();
        }
        export class VolumeCallback {
          public static class: java.lang.Class<androidx.mediarouter.media.RemoteControlClientCompat.VolumeCallback>;
          /**
           * Constructs a new instance of the androidx.mediarouter.media.RemoteControlClientCompat$VolumeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onVolumeUpdateRequest(param0: number): void; onVolumeSetRequest(param0: number): void });
          public constructor();
          public onVolumeUpdateRequest(param0: number): void;
          public onVolumeSetRequest(param0: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export class RemotePlaybackClient {
        public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient>;
        public release(): void;
        public setOnMessageReceivedListener(param0: androidx.mediarouter.media.RemotePlaybackClient.OnMessageReceivedListener): void;
        public setStatusCallback(param0: androidx.mediarouter.media.RemotePlaybackClient.StatusCallback): void;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.MediaRouter.RouteInfo);
        public isRemotePlaybackSupported(): boolean;
        public getStatus(param0: string, param1: globalAndroid.os.Bundle, param2: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
        public isQueuingSupported(): boolean;
        public play(
          param0: globalAndroid.net.Uri,
          param1: string,
          param2: globalAndroid.os.Bundle,
          param3: number,
          param4: globalAndroid.os.Bundle,
          param5: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback,
        ): void;
        public startSession(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
        public resume(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
        public seek(
          param0: string,
          param1: number,
          param2: globalAndroid.os.Bundle,
          param3: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback,
        ): void;
        public getSessionStatus(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
        public stop(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
        public sendMessage(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
        public enqueue(
          param0: globalAndroid.net.Uri,
          param1: string,
          param2: globalAndroid.os.Bundle,
          param3: number,
          param4: globalAndroid.os.Bundle,
          param5: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback,
        ): void;
        public pause(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
        public isSessionManagementSupported(): boolean;
        public endSession(param0: globalAndroid.os.Bundle, param1: androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback): void;
        public setSessionId(param0: string): void;
        public isMessagingSupported(): boolean;
        public remove(param0: string, param1: globalAndroid.os.Bundle, param2: androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback): void;
        public hasSession(): boolean;
        public getSessionId(): string;
      }
      export module RemotePlaybackClient {
        export abstract class ActionCallback {
          public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.ActionCallback>;
          public constructor();
          public onError(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
        }
        export class ActionReceiver {
          public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.ActionReceiver>;
          public static ACTION_ITEM_STATUS_CHANGED: string;
          public static ACTION_SESSION_STATUS_CHANGED: string;
          public static ACTION_MESSAGE_RECEIVED: string;
          public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
        }
        export abstract class ItemActionCallback extends androidx.mediarouter.media.RemotePlaybackClient.ActionCallback {
          public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.ItemActionCallback>;
          public constructor();
          public onResult(
            param0: globalAndroid.os.Bundle,
            param1: string,
            param2: androidx.mediarouter.media.MediaSessionStatus,
            param3: string,
            param4: androidx.mediarouter.media.MediaItemStatus,
          ): void;
        }
        export class OnMessageReceivedListener {
          public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.OnMessageReceivedListener>;
          /**
           * Constructs a new instance of the androidx.mediarouter.media.RemotePlaybackClient$OnMessageReceivedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onMessageReceived(param0: string, param1: globalAndroid.os.Bundle): void });
          public constructor();
          public onMessageReceived(param0: string, param1: globalAndroid.os.Bundle): void;
        }
        export abstract class SessionActionCallback extends androidx.mediarouter.media.RemotePlaybackClient.ActionCallback {
          public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.SessionActionCallback>;
          public constructor();
          public onResult(param0: globalAndroid.os.Bundle, param1: string, param2: androidx.mediarouter.media.MediaSessionStatus): void;
        }
        export abstract class StatusCallback {
          public static class: java.lang.Class<androidx.mediarouter.media.RemotePlaybackClient.StatusCallback>;
          public onSessionChanged(param0: string): void;
          public constructor();
          public onItemStatusChanged(
            param0: globalAndroid.os.Bundle,
            param1: string,
            param2: androidx.mediarouter.media.MediaSessionStatus,
            param3: string,
            param4: androidx.mediarouter.media.MediaItemStatus,
          ): void;
          public onSessionStatusChanged(param0: globalAndroid.os.Bundle, param1: string, param2: androidx.mediarouter.media.MediaSessionStatus): void;
        }
      }
    }
  }
}

declare module androidx {
  export module mediarouter {
    export module media {
      export abstract class SystemMediaRouteProvider extends androidx.mediarouter.media.MediaRouteProvider {
        public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider>;
        public static PACKAGE_NAME: string;
        public static DEFAULT_ROUTE_ID: string;
        public onSyncRouteAdded(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
        public getSystemRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): any;
        public onSyncRouteRemoved(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
        public constructor(param0: globalAndroid.content.Context);
        public getDefaultRoute(): any;
        public onSyncRouteSelected(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
        public static obtain(
          param0: globalAndroid.content.Context,
          param1: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback,
        ): androidx.mediarouter.media.SystemMediaRouteProvider;
        public onSyncRouteChanged(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
      }
      export module SystemMediaRouteProvider {
        export class Api24Impl extends androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr2Impl {
          public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.Api24Impl>;
          public onVolumeUpdateRequest(param0: any, param1: number): void;
          public onRouteUngrouped(param0: any, param1: any): void;
          public onRouteGrouped(param0: any, param1: any, param2: number): void;
          public onVolumeSetRequest(param0: any, param1: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
          public onBuildSystemRouteDescriptor(
            param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord,
            param1: androidx.mediarouter.media.MediaRouteDescriptor.Builder,
          ): void;
          public onRouteSelected(param0: number, param1: any): void;
          public onRouteChanged(param0: any): void;
          public constructor(param0: globalAndroid.content.Context);
          public onRouteRemoved(param0: any): void;
          public onRouteVolumeChanged(param0: any): void;
          public onRouteAdded(param0: any): void;
          public onRouteUnselected(param0: number, param1: any): void;
          public onRoutePresentationDisplayChanged(param0: any): void;
        }
        export class JellybeanImpl extends androidx.mediarouter.media.SystemMediaRouteProvider
          implements androidx.mediarouter.media.MediaRouterJellybean.Callback, androidx.mediarouter.media.MediaRouterJellybean.VolumeCallback {
          public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl>;
          public mRouterObj: any;
          public mCallbackObj: any;
          public mVolumeCallbackObj: any;
          public mUserRouteCategoryObj: any;
          public mRouteTypes: number;
          public mActiveScan: boolean;
          public mCallbackRegistered: boolean;
          public mSystemRouteRecords: java.util.ArrayList<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord>;
          public mUserRouteRecords: java.util.ArrayList<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord>;
          public getRouteName(param0: any): string;
          public onRouteGrouped(param0: any, param1: any, param2: number): void;
          public onDiscoveryRequestChanged(param0: androidx.mediarouter.media.MediaRouteDiscoveryRequest): void;
          public getUserRouteRecord(param0: any): androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord;
          public onRouteSelected(param0: number, param1: any): void;
          public onRouteChanged(param0: any): void;
          public onRouteRemoved(param0: any): void;
          public onRouteVolumeChanged(param0: any): void;
          public findSystemRouteRecord(param0: any): number;
          public onRouteAdded(param0: any): void;
          public createCallbackObj(): any;
          public publishRoutes(): void;
          public updateUserRouteProperties(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord): void;
          public findSystemRouteRecordByDescriptorId(param0: string): number;
          public onSyncRouteSelected(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onRouteUngrouped(param0: any, param1: any): void;
          public onVolumeUpdateRequest(param0: any, param1: number): void;
          public onVolumeSetRequest(param0: any, param1: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
          public getSystemRoute(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): any;
          public onCreateRouteController(param0: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
          public onBuildSystemRouteDescriptor(
            param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord,
            param1: androidx.mediarouter.media.MediaRouteDescriptor.Builder,
          ): void;
          public updateCallback(): void;
          public updateSystemRouteDescriptor(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord): void;
          public constructor(param0: globalAndroid.content.Context);
          public getDefaultRoute(): any;
          public selectRoute(param0: any): void;
          public onRouteUnselected(param0: number, param1: any): void;
          public onSyncRouteChanged(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public onSyncRouteRemoved(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public findUserRouteRecord(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): number;
          public onSyncRouteAdded(param0: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
          public createVolumeCallbackObj(): any;
          public onCreateRouteController(param0: string, param1: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
        }
        export module JellybeanImpl {
          export class SystemRouteController extends androidx.mediarouter.media.MediaRouteProvider.RouteController {
            public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteController>;
            public onSetVolume(param0: number): void;
            public constructor();
            public constructor(param0: any);
            public onUpdateVolume(param0: number): void;
          }
          export class SystemRouteRecord {
            public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord>;
            public mRouteObj: any;
            public mRouteDescriptorId: string;
            public mRouteDescriptor: androidx.mediarouter.media.MediaRouteDescriptor;
            public constructor(param0: any, param1: string);
          }
          export class UserRouteRecord {
            public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord>;
            public mRoute: androidx.mediarouter.media.MediaRouter.RouteInfo;
            public mRouteObj: any;
            public constructor(param0: androidx.mediarouter.media.MediaRouter.RouteInfo, param1: any);
          }
        }
        export class JellybeanMr1Impl extends androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl
          implements androidx.mediarouter.media.MediaRouterJellybeanMr1.Callback {
          public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr1Impl>;
          public onRouteUngrouped(param0: any, param1: any): void;
          public onVolumeUpdateRequest(param0: any, param1: number): void;
          public onRouteGrouped(param0: any, param1: any, param2: number): void;
          public onVolumeSetRequest(param0: any, param1: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
          public onBuildSystemRouteDescriptor(
            param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord,
            param1: androidx.mediarouter.media.MediaRouteDescriptor.Builder,
          ): void;
          public updateCallback(): void;
          public onRouteSelected(param0: number, param1: any): void;
          public onRouteChanged(param0: any): void;
          public constructor(param0: globalAndroid.content.Context);
          public onRouteRemoved(param0: any): void;
          public onRouteVolumeChanged(param0: any): void;
          public onRouteAdded(param0: any): void;
          public createCallbackObj(): any;
          public isConnecting(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord): boolean;
          public onRouteUnselected(param0: number, param1: any): void;
          public onRoutePresentationDisplayChanged(param0: any): void;
        }
        export class JellybeanMr2Impl extends androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr1Impl {
          public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanMr2Impl>;
          public onVolumeUpdateRequest(param0: any, param1: number): void;
          public onRouteUngrouped(param0: any, param1: any): void;
          public onRouteGrouped(param0: any, param1: any, param2: number): void;
          public onVolumeSetRequest(param0: any, param1: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback);
          public onBuildSystemRouteDescriptor(
            param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord,
            param1: androidx.mediarouter.media.MediaRouteDescriptor.Builder,
          ): void;
          public updateCallback(): void;
          public onRouteSelected(param0: number, param1: any): void;
          public onRouteChanged(param0: any): void;
          public constructor(param0: globalAndroid.content.Context);
          public onRouteRemoved(param0: any): void;
          public onRouteVolumeChanged(param0: any): void;
          public getDefaultRoute(): any;
          public selectRoute(param0: any): void;
          public onRouteAdded(param0: any): void;
          public isConnecting(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.SystemRouteRecord): boolean;
          public onRouteUnselected(param0: number, param1: any): void;
          public onRoutePresentationDisplayChanged(param0: any): void;
          public updateUserRouteProperties(param0: androidx.mediarouter.media.SystemMediaRouteProvider.JellybeanImpl.UserRouteRecord): void;
        }
        export class LegacyImpl extends androidx.mediarouter.media.SystemMediaRouteProvider {
          public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.LegacyImpl>;
          public constructor(param0: globalAndroid.content.Context);
          public onCreateRouteController(param0: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
          public onCreateRouteController(param0: string, param1: string): androidx.mediarouter.media.MediaRouteProvider.RouteController;
        }
        export module LegacyImpl {
          export class DefaultRouteController extends androidx.mediarouter.media.MediaRouteProvider.RouteController {
            public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.LegacyImpl.DefaultRouteController>;
            public onSetVolume(param0: number): void;
            public onUpdateVolume(param0: number): void;
          }
          export class VolumeChangeReceiver {
            public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.LegacyImpl.VolumeChangeReceiver>;
            public static VOLUME_CHANGED_ACTION: string;
            public static EXTRA_VOLUME_STREAM_TYPE: string;
            public static EXTRA_VOLUME_STREAM_VALUE: string;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
        }
        export class SyncCallback {
          public static class: java.lang.Class<androidx.mediarouter.media.SystemMediaRouteProvider.SyncCallback>;
          /**
           * Constructs a new instance of the androidx.mediarouter.media.SystemMediaRouteProvider$SyncCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSystemRouteSelectedByDescriptorId(param0: string): void });
          public constructor();
          public onSystemRouteSelectedByDescriptorId(param0: string): void;
        }
      }
    }
  }
}
