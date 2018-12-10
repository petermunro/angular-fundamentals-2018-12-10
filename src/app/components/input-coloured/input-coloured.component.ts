import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-coloured',
  templateUrl: './input-coloured.component.html',
  styleUrls: ['./input-coloured.component.css']
})
export class InputColouredComponent implements OnInit {

  inputValue = '';

  constructor() { }

  ngOnInit() {
  }

  onInput(event) {
    this.inputValue = event.target.value;
  }

}
