import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { mockFeaturedNews, mockNews } from '@src/app/@dummyData';
import { FeaturedBanner, News } from '@src/app/components/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';
import { env } from '@src/environments/environment';
import { AppState } from '@src/store/app.state';
import { getNews } from '@src/store/news/news.actions';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'main[app-news].page-container',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  // TO CHANGE: This list will be replaced by Contentful
  featuredList: Array<FeaturedBanner> = mockFeaturedNews.map((news) => ({
    ...news,
    href: `${env.baseUrl}/news/${news.slug}`,
  }));
  mockHeadline: Omit<News, 'content'> = mockNews;

  newsList$: Observable<News[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(getNews());
    this.newsList$ = this.store.pipe(
      map((list) =>
        list.news.list.map((news) => ({
          ...news,
          date: fullDateFormat(news.date),
        }))
      )
    );
  }

  //
  //
  // FIXED CODE: Not to be changed
  showLoadMoreBtn = false;

  ngOnInit() {
    this.newsList$.subscribe((list) => {
      this.showLoadMoreBtn = list.length > 15;
    });
  }
}
