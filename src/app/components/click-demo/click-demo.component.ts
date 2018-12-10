import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-demo',
  templateUrl: './click-demo.component.html',
  styleUrls: ['./click-demo.component.css']
})
export class ClickDemoComponent implements OnInit {
  clickStatus = false;
  inputVal = '';

  constructor() {}

  ngOnInit() {}

  onSubmit(event) {
    event.preventDefault();
    console.log('Form submitted', event);
    this.clickStatus = true;
    console.log(`Calling API with ${this.inputVal}...`);
  }

  onInput(event) {
    this.inputVal = event.target.value;
  }
}
