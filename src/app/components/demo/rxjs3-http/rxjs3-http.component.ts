import { Component, OnInit } from '@angular/core';
import { ContactlistService } from 'src/app/services/contactlist.service';

@Component({
  selector: 'app-rxjs3-http',
  templateUrl: './rxjs3-http.component.html',
  styleUrls: ['./rxjs3-http.component.css']
})
export class Rxjs3HttpComponent implements OnInit {
  constructor(private contactListService: ContactlistService) {}

  ngOnInit() {
    this.contactListService
      .getContacts()
      .subscribe(
        res => console.log('HTTP response', res),
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      );
  }
}
