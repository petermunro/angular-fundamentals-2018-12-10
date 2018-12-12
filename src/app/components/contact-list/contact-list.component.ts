import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Contact {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Contact[]>('/assets/contact-list.json').subscribe(data => (this.contacts = data));
  }
}
