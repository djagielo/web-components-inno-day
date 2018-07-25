import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@webcomponents/custom-elements';
@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const ngRandomQuote = createCustomElement(RandomQuoteComponent, { injector });
    customElements.define('ng-random-quote', ngRandomQuote);
  }
}
