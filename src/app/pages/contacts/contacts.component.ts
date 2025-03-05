import { Component } from '@angular/core';
import { contacts } from '../../data/info';
import { contact } from '../../model/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
contactlist:contact[]= contacts
}
