import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true
})
export class ContactComponent {
  nom = 'Matteo Melandri';
  email = 'melandridalloyau.matteo@gmail.com';
  numero = '+33 7 66 42 59 35';
}
