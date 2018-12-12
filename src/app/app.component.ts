import { Component } from '@angular/core';

let s = 'hello';
s += 7;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = s;

  onCounterChange(event) {
    console.log('counter changed', event);
  }

  onSend(message) {
    console.log(`Sending ${message}...`);
  }
}
