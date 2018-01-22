import * as application from 'tns-core-modules/application';

application.on(application.launchEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

application.on(application.suspendEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Suspent Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("Suspent UIApplication: " + args.ios);
    }
});

application.on(application.resumeEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Resume Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("Resume UIApplication: " + args.ios);
    }
});

application.on(application.exitEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Exit Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("Exit UIApplication: " + args.ios);
    }
});

application.on(application.lowMemoryEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("LowMemory Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("LowMemory UIApplication: " + args.ios);
    }
});

application.on(application.uncaughtErrorEvent, function (args) {
    if (args.android) {
        // For Android applications, args.android is an NativeScriptError.
        console.log("NativeScriptError: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is NativeScriptError.
        console.log("NativeScriptError: " + args.ios);
    }
});


// var MyAppDelegate = UIResponder.extend({
//     // Implement a method from UIApplicationDelegate.
//     // We will obtain the method signature from the protocol.
//     canBecomeFirstResponder: function() {
//       return true;
//     },
//     applicationDidFinishLaunchingWithOptions: function (application, launchOptions) {
//       console.log('========== APP LAUNCHED ==========');
//       this.becomeFirstResponder();
//     }
// }, {
//     // The name for the registered Objective-C class.
//     name: "MyAppDelegate",
//     // Declare that the native Objective-C class will implement the UIApplicationDelegate Objective-C protocol.
//     protocols: [UIApplicationDelegate]
// });

// application.ios.delegate = MyAppDelegate;
import "./bundle-config";
application.start({ moduleName: "main-page" });
