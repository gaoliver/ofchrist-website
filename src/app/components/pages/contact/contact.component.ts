import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { SetMetaTag } from '@src/app/utils/setMetaTag';
import { AboutService } from '@src/store/about/about.service';

@Component({
  selector: 'main[app-contact].page-container',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactText: string | undefined;

  constructor(
    private contectful: AboutService,
    private pageTitle: Title,
    private setMeta: SetMetaTag
  ) {
    this.contectful.getAboutService().then((data) => {
      this.contactText = documentToHtmlString(data.contact);
    });
  }

  ngOnInit() {
    const title = this.pageTitle.getTitle();
    this.setMeta.updateTitle(title);
  }
}
