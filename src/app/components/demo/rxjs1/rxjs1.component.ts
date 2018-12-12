import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, Subject, Subscription } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { CompileTemplateMetadata } from '@angular/compiler';

const MILLISECONDS = 1000;

@Component({
  selector: 'app-rxjs1',
  templateUrl: './rxjs1.component.html',
  styleUrls: ['./rxjs1.component.css']
})
export class Rxjs1Component implements OnInit {
  period = 500;
  subscription: Subscription;
  event;

  constructor(private eventService: EventService) {}

  ngOnInit() {}

  onClick() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    } else {
      this.subscription = this.eventService
        .getEventEvery(this.period)
        .pipe(map(x => x * x))
        .subscribe(event => {
          console.log(event);
          this.event = event;
        });
    }
  }
}
