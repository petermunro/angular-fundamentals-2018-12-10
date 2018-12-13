import { Contact } from './../common/Contact';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get<Contact[]>('/assets/contact-list.json');
  }
}
