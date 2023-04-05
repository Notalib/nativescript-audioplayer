import { Application, Trace } from '@nativescript/core'
import { notaAudioCategory } from '@nota/nativescript-audioplayer';

Trace.setCategories(notaAudioCategory);
Trace.enable();

Application.on('launch', function (args) {
  if (args.android) {
    // For Android applications, args.android is an android.content.Intent class.
    console.log(`Launched Android Application with the following intent: ${args.android}.`);
  } else if (args.ios !== undefined) {
    // For iOS applications, args.ios is NSDictionary (launchOptions).
    console.log(`Launched iOS Application with options: ${args.ios}`);
  }
});

Application.on('suspend', function (args) {
  if (args.android) {
    // For Android applications, args.android is an android activity class.
    console.log(`Suspend Activity: ${args.android}`);
  } else if (args.ios) {
    // For iOS applications, args.ios is UIApplication.
    console.log(`Suspend UIApplication: ${args.ios}`);
  }
});

Application.on('resume', function (args) {
  if (args.android) {
    // For Android applications, args.android is an android activity class.
    console.log(`Resume Activity: ${args.android}`);
  } else if (args.ios) {
    // For iOS applications, args.ios is UIApplication.
    console.log(`Resume UIApplication: ${args.ios}`);
  }
});

Application.on('exit', function (args) {
  if (args.android) {
    // For Android applications, args.android is an android activity class.
    console.log(`Exit Activity: ${args.android}`);
  } else if (args.ios) {
    // For iOS applications, args.ios is UIApplication.
    console.log(`Exit UIApplication: ${args.ios}`);
  }
});

Application.on('lowMemory', function (args) {
  if (args.android) {
    // For Android applications, args.android is an android activity class.
    console.log(`LowMemory Activity: ${args.android}`);
  } else if (args.ios) {
    // For iOS applications, args.ios is UIApplication.
    console.log(`LowMemory UIApplication: ${args.ios}`);
  }
});

Application.on('uncaughtError', function (args) {
  if (args.android) {
    // For Android applications, args.android is an NativeScriptError.
    console.log(`NativeScriptError: ${args.android}`);
  } else if (args.ios) {
    // For iOS applications, args.ios is NativeScriptError.
    console.log(`NativeScriptError: ${args.ios}`);
  }
});

Application.on(Application.launchEvent, () => {
  global['nsApp'] = Application;
});

Application.on(Application.displayedEvent, () => {
  global['nsApp'] = Application;
});

Application.on(Application.exitEvent, () => {
  global['nsApp'] = null;
});

Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the Application has been started as it will not
be executed on iOS.
*/
