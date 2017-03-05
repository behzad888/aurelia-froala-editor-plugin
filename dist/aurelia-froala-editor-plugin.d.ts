import {customElement,bindable,inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ObserverLocator} from 'aurelia-binding';
import {I18N} from 'aurelia-i18n';

export declare class FroalaEditor {
  value: any;
  config: any;
  eventHandlers: any;
  element: any;
  instance: any;
  i18n: any;
  i18nInitialized: any;
  constructor(element?: any, observerLocator?: any, i18n?: any, eventAggregator?: any);
  processLanguageChanged(): any;
  setupFroala(): any;
  updateEmptyStatus(): any;
  tearDownFroala(): any;
  attached(): any;
  detached(): any;
}

// eslint-disable-line no-unused-vars
/* Import all modules that can be concated, eg. ValueConverters, CustomElements etc, for bundling.
 * Those also need to be added to spoonx.js 'importsToAdd' and 'jsResources' and
 * the package.json's' "aurelia.build.resources" (there without extension if view/view-model and with
 * .html extension for views without view-model).
*/
// // eslint-disable-line no-unused-vars
export declare function configure(aurelia?: any, configCallback?: any): any;