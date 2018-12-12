import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor() {}

  getEventEvery(period: number) {
    return interval(period);
  }
}
