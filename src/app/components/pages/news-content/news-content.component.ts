import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { News } from '@src/app/components/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';
import { SetMetaTag } from '@src/app/utils/setMetaTag';
import { AppState } from '@src/store/app.state';
import { NewsService } from '@src/store/news/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'main[app-news-content].page-container',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss'],
})
export class NewsContentComponent implements OnInit {
  newsList$: Observable<News[]> | undefined;
  news: News | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private setMeta: SetMetaTag,
    private store: Store<AppState>,
    private contentful: NewsService
  ) {
    this.newsList$ = this.store.pipe(select((list) => list.news.list));
  }

  findNews() {
    let newsFound: News | undefined;
    const newsSlug = this.activeRoute.snapshot.paramMap.get('slug');

    if (newsSlug) {
      this.newsList$?.subscribe((list) =>
        list.find((news) => {
          if (news.slug === newsSlug) {
            newsFound = { ...news, date: fullDateFormat(news.date) };
            this.setMeta.updateTitle(news.title);
            this.setMeta.updateOgImage(news.imageUrl)
          }
        })
      );

      if (!newsFound) {
        this.contentful.getNewsService(newsSlug).then((data) => {
          this.news = { ...data, date: fullDateFormat(data.date) };
          this.setMeta.updateTitle(data.title);
          this.setMeta.updateOgImage(data.imageUrl)
        });
      }
    }

    return newsFound;
  }

  ngOnInit() {
    this.news = this.findNews();
  }
}
