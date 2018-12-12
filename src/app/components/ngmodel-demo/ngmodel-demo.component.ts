import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel-demo',
  templateUrl: './ngmodel-demo.component.html',
  styleUrls: ['./ngmodel-demo.component.css']
})
export class NgmodelDemoComponent implements OnInit {
  username = '';
  termsAccepted = false;
  selectedFruit = 'Apple';
  fruit = ['Apple', 'Banana', 'Cherry', 'Durian'];
  saved = false;

  constructor() {}

  ngOnInit() {}

  onSave() {
    console.log(this.username, this.termsAccepted, this.selectedFruit);
    this.saved = true;
  }
}
