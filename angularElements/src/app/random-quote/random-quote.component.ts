import { Component, OnInit, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { QouteService } from 'src/app/qoute.service';

@Component({
  selector: 'app-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class RandomQuoteComponent implements OnInit, OnDestroy {
  quote = '';
  @Input()
  interval = 1000;
  intervalRef = null;

  constructor(private quoteService: QouteService) { }

  ngOnInit() {
    this.intervalRef = setInterval( () => {
      this.quoteService.getRandomQuote().subscribe(resp => this.quote = resp);
    }
      , this.interval);
  }

  ngOnDestroy() {
    clearInterval(this.intervalRef);
  }
}
