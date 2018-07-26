import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { HttpClientModule } from '@angular/common/http';
import { QouteService } from './qoute.service';
@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [QouteService],
  bootstrap: [AppComponent],
  entryComponents: [RandomQuoteComponent]
})
export class AppModule {
}
