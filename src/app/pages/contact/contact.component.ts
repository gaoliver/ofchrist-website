import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main[app-contact].page-container',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  email = 'contato@sitedabanda.com.br';
  whatsappNumber = '21991015627';
  whatsappUrl = `https://api.whatsapp.com/send/?phone=%2B55${this.whatsappNumber}`;

  ngOnInit() {
    this.whatsappNumber = `(${this.whatsappNumber.slice(
      0,
      2
    )}) ${this.whatsappNumber.slice(2, 7)}-${this.whatsappNumber.slice(7, 11)}`;
  }
}
