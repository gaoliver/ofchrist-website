import { Component, OnInit } from '@angular/core';
import { mockHighlightNews, mockNews } from '@src/app/@dummyData';
import { NewsHeadline } from '@src/app/components/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';

@Component({
  selector: 'main[app-news].page-container',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  // TO CHANGE: This list will be replaced by Contentful
  highlightList: Array<NewsHeadline> = mockHighlightNews;
  mockHeadline: NewsHeadline = mockNews;

  newsList: Array<NewsHeadline> = Array(13).fill(this.mockHeadline);

  //
  //
  // FIXED CODE: Not to be changed
  showLoadMoreBtn = false;

  ngOnInit() {
    this.newsList = [...this.highlightList, ...this.newsList];
    this.newsList = this.newsList.map((item) => ({
      ...item,
      date: fullDateFormat(item.date),
    }));

    this.showLoadMoreBtn = this.newsList.length > 15;
  }
}
