import { Component, Injector } from '@angular/core';
import { DomSanitizer } from '../../node_modules/@angular/platform-browser';
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = null;

  constructor(private injector: Injector, private domSanitizer: DomSanitizer) {
    const randomQuoteElement = createCustomElement(RandomQuoteComponent, { injector: injector });
    customElements.define('ng-random-quote', randomQuoteElement);
    setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml('<ng-random-quote></ng-random-quote>');
    }, 2000);
  }

  title = 'app';
}
