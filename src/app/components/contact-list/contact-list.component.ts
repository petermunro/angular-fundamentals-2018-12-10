import { ContactApiService } from './../../services/contact-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts = [];

  constructor(private contactApi: ContactApiService) {}

  ngOnInit() {
    this.contactApi.getContacts().subscribe(data => (this.contacts = data));
  }
}
