import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  message = '';

  @Input() maxChars = 140;
  @Output()
  send = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  sendClick() {
    this.send.emit(this.message);
  }
}
