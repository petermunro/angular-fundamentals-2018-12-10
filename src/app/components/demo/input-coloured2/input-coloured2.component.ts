import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-coloured2',
  templateUrl: './input-coloured2.component.html',
  styleUrls: ['./input-coloured2.component.css']
})
export class InputColoured2Component implements OnInit {
  inputValue = '';
  checkbox = false;
  fruit: string[] = ['apple', 'banana', 'cherry', 'durian'];
  selectedFruit: '';

  constructor() {}

  ngOnInit() {}

  process() {
    console.log('val: ', this.inputValue, ' check: ', this.checkbox, ' fruit: ', this.selectedFruit);
  }
}
