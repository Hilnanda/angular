/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {Component, NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({selector: 'hello-world', template: 'Hello World!'})
export class HelloWorldComponent {
}

@NgModule({declarations: [HelloWorldComponent]})
export class HelloWorldModule {
}

platformBrowserDynamic().bootstrapModule(HelloWorldModule);
