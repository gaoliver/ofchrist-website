import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { FeaturedBanner, News } from '@src/app/components/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';
import { env } from '@src/environments/environment';
import { AppState } from '@src/store/app.state';
import {
  getNews,
  getNewsError,
  getNewsSuccess,
} from '@src/store/news/news.actions';
import { getNewsList } from '@src/store/news/news.selectors';
import { NewsService } from '@src/store/news/news.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'main[app-news].page-container',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  featuredList: Array<FeaturedBanner> | undefined;
  newsList$: Observable<News[]> | undefined;
  showLoadMoreBtn = false;

  constructor(private store: Store<AppState>, private contentful: NewsService) {
    this.store.dispatch(getNews());
  }

  formatNewsDate(newsList: News[]) {
    return newsList.map((news) => ({
      ...news,
      date: fullDateFormat(news.date),
    }));
  }

  public getAllNews() {
    this.store.dispatch(getNews());
    this.contentful
      .getAllNewsService()
      .then((data) => this.store.dispatch(getNewsSuccess({ list: data })))
      .catch(() => this.store.dispatch(getNewsError()));

    this.newsList$ = this.store.pipe(
      select(getNewsList),
      map((list) => this.formatNewsDate(list))
    );
  }

  getFeaturedNews() {
    this.newsList$?.subscribe((list) => {
      this.featuredList = list
        .filter((news) => news.isFeatured)
        .map((news) => ({
          ...news,
          href: `${env.baseUrl}/news/${news.slug}`,
        }));
    });
  }

  ngOnInit() {
    this.getAllNews();
    this.getFeaturedNews();

    this.newsList$?.subscribe((list) => {
      this.showLoadMoreBtn = list.length > 15;
    });
  }
}
