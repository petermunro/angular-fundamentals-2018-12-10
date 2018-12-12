import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs2-async',
  templateUrl: './rxjs2-async.component.html',
  styleUrls: ['./rxjs2-async.component.css']
})
export class Rxjs2AsyncComponent implements OnInit {
  eventStream: Observable<number[]>;

  constructor() {
    this.eventStream = of([1, 3, 5, 7, 9]);
  }

  ngOnInit() {}
}
