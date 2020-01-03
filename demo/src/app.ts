// tslint:disable:no-console
import * as application from '@nativescript/core/application';
import * as trace from '@nativescript/core/trace';
import { notaAudioCategory } from '@nota/nativescript-audioplayer';

trace.setCategories(notaAudioCategory);
trace.enable();

application.on(application.launchEvent, function(args) {
  if (args.android) {
    // For Android applications, args.android is an android.content.Intent class.
    console.log(`Launched Android application with the following intent: ${args.android}.`);
  } else if (args.ios !== undefined) {
    // For iOS applications, args.ios is NSDictionary (launchOptions).
    console.log(`Launched iOS application with options: ${args.ios}`);
  }
});

application.on(application.suspendEvent, function(args) {
  if (args.android) {
    // For Android applications, args.android is an android activity class.
    console.log(`Suspend Activity: ${args.android}`);
  } else if (args.ios) {
    // For iOS applications, args.ios is UIApplication.
    console.log(`Suspend UIApplication: ${args.ios}`);
  }
});

application.on(application.resumeEvent, function(args) {
  if (args.android) {
    // For Android applications, args.android is an android activity class.
    console.log(`Resume Activity: ${args.android}`);
  } else if (args.ios) {
    // For iOS applications, args.ios is UIApplication.
    console.log(`Resume UIApplication: ${args.ios}`);
  }
});

application.on(application.exitEvent, function(args) {
  if (args.android) {
    // For Android applications, args.android is an android activity class.
    console.log(`Exit Activity: ${args.android}`);
  } else if (args.ios) {
    // For iOS applications, args.ios is UIApplication.
    console.log(`Exit UIApplication: ${args.ios}`);
  }
});

application.on(application.lowMemoryEvent, function(args) {
  if (args.android) {
    // For Android applications, args.android is an android activity class.
    console.log(`LowMemory Activity: ${args.android}`);
  } else if (args.ios) {
    // For iOS applications, args.ios is UIApplication.
    console.log(`LowMemory UIApplication: ${args.ios}`);
  }
});

application.on(application.uncaughtErrorEvent, function(args) {
  if (args.android) {
    // For Android applications, args.android is an NativeScriptError.
    console.log(`NativeScriptError: ${args.android}`);
  } else if (args.ios) {
    // For iOS applications, args.ios is NativeScriptError.
    console.log(`NativeScriptError: ${args.ios}`);
  }
});

application.on(application.launchEvent, () => {
  global['nsApp'] = application;
});

application.on(application.displayedEvent, () => {
  global['nsApp'] = application;
});

application.on(application.exitEvent, () => {
  global['nsApp'] = null;
});

application.run({ moduleName: 'app-root' });
