import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, shareReplay, retryWhen, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactlistService {
  constructor(private http: HttpClient) {}

  getContacts(): Observable<any> {
    return this.http.get('/assets/contact-list.json').pipe(
      tap(() => console.log('Sent HTTP request...')),
      shareReplay(),
      retry(3)
      // retryWhen(errors => {
      //   return errors.pipe(tap(() => console.log('Retrying...')));
      // })
    );
  }
}
