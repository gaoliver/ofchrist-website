import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';
import { FeaturedBanner, News } from '@src/app/components/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';
import { SetMetaTag } from '@src/app/utils/setMetaTag';
import { env } from '@src/environments/environment';
import { getAppSelector } from '@src/store/app.selectors';
import { AppState } from '@src/store/app.state';
import { HomeState } from '@src/store/home/home.reducer';
import {
  getMoreNews,
  getMoreNewsSuccess,
  getNews,
  getNewsError,
  getNewsSuccess,
} from '@src/store/news/news.actions';
import { getNewsSelector } from '@src/store/news/news.selectors';
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
  app$: Observable<AppState> | undefined;
  showLoadMoreBtn = false;
  isLoading: HomeState['status'] | undefined;

  constructor(
    private store: Store<AppState>,
    private contentful: NewsService,
    private pageTitle: Title,
    private setMeta: SetMetaTag
  ) {
    this.store.dispatch(getNews());

    this.app$ = this.store.pipe(select(getAppSelector));
  }

  formatNewsDate(newsList: News[]) {
    return newsList.map((news) => ({
      ...news,
      date: fullDateFormat(news.date),
    }));
  }

  onLoadNews() {
    this.store.dispatch(getNews());
  }

  getNewsFromStore() {
    this.newsList$ = this.store.pipe(
      select(getNewsSelector),
      map((list) => this.formatNewsDate(list))
    );
  }

  getAllNews() {
    this.onLoadNews();

    this.contentful
      .getAllNewsService()
      .then((data) => this.store.dispatch(getNewsSuccess({ list: data })))
      .catch(() => this.store.dispatch(getNewsError()));

    this.getNewsFromStore();

    this.store.subscribe((list) => this.getFeaturedNews(list.news.list));
  }

  getFeaturedNews(list: News[]) {
    this.featuredList = list
      .filter((news) => news.isFeatured)
      .map((news) => ({
        ...news,
        href: `${env.baseUrl}/news/${news.slug}`,
      }));
  }

  onLoadMore() {
    let newsLength;

    this.store.dispatch(getMoreNews());

    this.newsList$?.subscribe((list) => (newsLength = list.length));

    this.contentful
      .getAllNewsService({ skip: newsLength })
      .then((data) => {
        this.store.dispatch(getMoreNewsSuccess({ newList: data }));
      })
      .catch(() => this.store.dispatch(getNewsError()));
  }

  setPageTitle() {
    const title = this.pageTitle.getTitle();
    this.setMeta.updateTitle(title);
  }

  ngOnInit() {
    this.getAllNews();
    this.setPageTitle();

    this.newsList$?.subscribe((list) => {
      this.showLoadMoreBtn = list.length >= 15;
    });

    this.app$?.subscribe((status) => {
      this.isLoading = status.news.loadMoreStatus;
    });
  }
}
