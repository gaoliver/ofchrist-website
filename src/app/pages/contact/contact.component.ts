import { Component, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { AboutService } from '@src/store/about/about.service';

@Component({
  selector: 'main[app-contact].page-container',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactText: string | undefined;

  constructor(private contectful: AboutService) {
    this.contectful.getAboutService().then((data) => {
      this.contactText = documentToHtmlString(data.contact);
    });
  }

  ngOnInit() {
  }
}
