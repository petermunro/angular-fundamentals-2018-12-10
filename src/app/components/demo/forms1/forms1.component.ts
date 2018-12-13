import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from './User';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.css']
})
export class Forms1Component implements OnInit {
  user = new User();

  constructor() {}

  registerUser(form) {
    console.log(form);
  }

  ngOnInit() {}
}
