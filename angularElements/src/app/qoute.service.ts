import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QouteService {

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<string> {
    return this.http.get('https://cors.io/?http://quotesondesign.com/wp-json/posts').pipe(
      map(resp => resp[0].content)
    );
  }
}
