import * as trace from 'tns-core-modules/trace';
import { notaAudioCategory } from './audioplayer-common';

export namespace dk {
  export namespace nota {
    @JavaProxy('dk.nota.ForegroundService')
    export class ForegroundService extends android.app.Service {
      private readonly cls = `ForegroundService`;

      public onCreate(): void {
        console.log(this.cls, 'onCreate()');
        super.onCreate();
      }

      public onDestroy(): void {
        // end service, reset any variables... etc...
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onDestroy()`, notaAudioCategory);
        }
        super.onDestroy();
        this.stopForeground(true);
      }

      public onBind(param0: android.content.Intent): android.os.IBinder {
        // tslint:disable-next-line:no-console
        console.log(this.cls, 'onBind', param0);
        return null;
      }

      public onStartCommand(intent: android.content.Intent, flags: number, startId: number) {
        console.log(`${this.cls}.onStartCommand(${intent}, ${flags}, ${startId})`, notaAudioCategory);
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onStartCommand(${intent}, ${flags}, ${startId})`, notaAudioCategory);
        }

        super.onStartCommand(intent, flags, startId);
        this.startForeground(1, this.createNotification(intent));
        return android.app.Service.START_STICKY;
      }

      private createNotification(intent: android.content.Intent): android.app.Notification {
        this.createNotificationChannel();
        return this.getNotificationBuilder()
          .setSmallIcon(android.R.drawable.btn_plus)
          .setContentTitle(this.getTitle(intent))
          .build();
      }

      private getNotificationBuilder() {
        if (!androidx.core.os.BuildCompat.isAtLeastO()) {
          // Not Oreo, not creating notification channel as compatibility issues may exist
          return new androidx.core.app.NotificationCompat.Builder(this);
        }

        return new androidx.core.app.NotificationCompat.Builder(this, 'TNS-ForegroundService-1');
      }

      private createNotificationChannel() {
        if (!androidx.core.os.BuildCompat.isAtLeastO()) {
          // Not Oreo, not creating notification channel as compatibility issues may exist
          return;
        }

        const importance = androidx.core.app.NotificationManagerCompat.IMPORTANCE_LOW;
        const mChannel = new android.app.NotificationChannel('TNS-ForegroundService-1', 'TNS-ForegroundService-1', importance);
        let nm = this.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
        nm.createNotificationChannel(mChannel);
      }

      private getTitle(intent: android.content.Intent): string {
        let title = intent.getStringExtra('title');
        if (title) {
          return title;
        } else {
          return 'Running in background';
        }
      }

      public onStart(intent: android.content.Intent, startId: number) {
        super.onStart(intent, startId);
      }
    }
  }
}
