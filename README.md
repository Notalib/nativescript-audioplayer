# Nativescript plugin for Audio playback (WIP)

## Usage

This plugin is prepared to allow you to test and try it out via the `demo` folder.
Additionally it provides a proper `.gitignore` to keep GitHub tidy as well as `.npmignore` to ensure everyone is happy when you publish your plugin via npm.

### Prepare

```
"preparedemo": "npm run build && cd demo && tns plugin remove nativescript-yourplugin && tns plugin add .. && tns install",
```

Replace `nativescript-yourplugin` with your actual plugin name.

### Development:

Install typescript: `npm install -g typescript`

1. Make changes to plugin files
2. Make changes in `demo` that would test those changes out
3. `npm run demo.ios` or `npm run demo.android`  **(must be run from the root directory)**

Those `demo` tasks are just general helpers. You may want to have more granular control on the device and/or emulator you want to run. For that, you can just run things the manual way:

```
cd demo

// when developing, to ensure the latest code is built into the demo, it's a gaurantee to remove the plugin and add it back
tns plugin remove nativescript-audioplayer-plugin
tns plugin add ..

// manual platform adds
tns platform add ios
// and/or
tns platform add android
```

Then use any of the available options from the `tns` command line:

* [Emulate your project](https://github.com/NativeScript/nativescript-cli#emulate-your-project)
* [Run your project](https://github.com/NativeScript/nativescript-cli#run-your-project)
* [Full list of commands](https://github.com/NativeScript/nativescript-cli#the-commands)
