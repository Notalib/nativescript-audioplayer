import { EventData, Page } from '@nativescript/core';
import { HomeViewModel } from './home-view-model';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
  // Get the event sender
  const page = <Page>args.object;
  if (!page.bindingContext) {
    page.bindingContext = new HomeViewModel();
  }
}
