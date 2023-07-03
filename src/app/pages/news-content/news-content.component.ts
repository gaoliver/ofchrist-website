import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { mockFeaturedNews, mockNews } from '@src/app/@dummyData';
import { News } from '@src/app/components/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';

@Component({
  selector: 'main[app-news-content].page-container',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss'],
})
export class NewsContentComponent implements OnInit {
  newsList = [...mockFeaturedNews, mockNews];
  news: News | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  findNews() {
    const newsSlug = this.activeRoute.snapshot.paramMap.get('slug');
    const newsFound = this.newsList.find((news) => news.slug === newsSlug);

    if (newsFound) {
      const currTitle = this.titleService.getTitle();
      this.titleService.setTitle(`${currTitle} ${newsFound.title}`);
    }

    return newsFound;
  }

  ngOnInit() {
    this.news = this.findNews();

    if (this.news) {
      const title = this.titleService.getTitle();
      this.titleService.setTitle(title + this.news.title);

      this.news.date = fullDateFormat(this.news?.date!);
    }
  }
}
