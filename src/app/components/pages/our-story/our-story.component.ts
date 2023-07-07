import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { SetMetaTag } from '@src/app/utils/setMetaTag';
import { AboutService } from '@src/store/about/about.service';

@Component({
  selector: 'main[app-our-story].page-container',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss'],
})
export class OurStoryComponent implements OnInit {
  pageText: string | undefined;

  constructor(
    private contentful: AboutService,
    private pageTitle: Title,
    private setMeta: SetMetaTag
  ) {
    this.contentful.getAboutService().then((data) => {
      this.pageText = documentToHtmlString(data.our_story);
    });
  }

  ngOnInit(): void {
    const title = this.pageTitle.getTitle();
    this.setMeta.updateTitle(title);
  }
}
