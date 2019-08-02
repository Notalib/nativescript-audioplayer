import * as trace from 'tns-core-modules/trace';
import { notaAudioCategory } from './audioplayer-common';

export namespace dk {
  export namespace nota {
    @JavaProxy('dk.nota.ForegroundService')
    export class ForegroundService extends android.app.Service {
      private get cls() {
        return `ForegroundService`;
      }

      public onCreate(): void {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onCreate()`, notaAudioCategory);
        }

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

      public onBind(param: android.content.Intent): android.os.IBinder {
        // tslint:disable-next-line:no-console
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onBind(${param})`, notaAudioCategory);
        }

        return super.onBind(param);
      }

      public onStartCommand(intent: android.content.Intent, flags: number, startId: number) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onStartCommand(${intent}, ${flags}, ${startId})`, notaAudioCategory);
        }

        super.onStartCommand(intent, flags, startId);
        this.startForeground(1, this.createNotification(intent));
        return android.app.Service.START_STICKY;
      }

      private createNotification(intent: android.content.Intent): android.app.Notification {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.createNotification(${intent})`, notaAudioCategory);
        }

        this.createNotificationChannel();

        return this.getNotificationBuilder()
          .setSmallIcon(android.R.drawable.btn_plus)
          .build();
      }

      private getNotificationBuilder() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.getNotificationBuilder() - isAtLeastO? ${!androidx.core.os.BuildCompat.isAtLeastO()}`, notaAudioCategory);
        }

        if (!androidx.core.os.BuildCompat.isAtLeastO()) {
          return new androidx.core.app.NotificationCompat.Builder(this);
        }

        return new androidx.core.app.NotificationCompat.Builder(this, 'TNS-ForegroundService-1');
      }

      private createNotificationChannel() {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.createNotificationChannel() - skipped? ${!androidx.core.os.BuildCompat.isAtLeastO()}`, notaAudioCategory);
        }

        if (!androidx.core.os.BuildCompat.isAtLeastO()) {
          // Not Oreo, not creating notification channel as compatibility issues may exist
          return;
        }

        const importance = androidx.core.app.NotificationManagerCompat.IMPORTANCE_LOW;
        const mChannel = new android.app.NotificationChannel('TNS-ForegroundService-1', 'TNS-ForegroundService-1', importance);
        let nm = this.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
        nm.createNotificationChannel(mChannel);
      }

      public onStart(intent: android.content.Intent, startId: number) {
        if (trace.isEnabled()) {
          trace.write(`${this.cls}.onStart(${intent}, ${startId})`, notaAudioCategory);
        }

        super.onStart(intent, startId);
      }
    }
  }
}
