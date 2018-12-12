import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = 0;

  @Output()
  counterChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  increment() {
    this.count++;
    this.counterChange.emit(this.count);
  }
}
