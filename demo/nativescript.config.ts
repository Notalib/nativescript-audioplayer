import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'dk.nota.audioplayerdemo',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;
