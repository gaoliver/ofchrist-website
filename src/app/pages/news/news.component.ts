import { Component, OnInit } from '@angular/core';
import { mockFeaturedNews, mockNews } from '@src/app/@dummyData';
import { FeaturedBanner, News } from '@src/app/components/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';
import { env } from '@src/environments/environment';

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

  newsList: Array<Omit<News, 'content'>> = Array(13).fill(this.mockHeadline);

  //
  //
  // FIXED CODE: Not to be changed
  showLoadMoreBtn = false;

  ngOnInit() {
    const newsFeaturedList: Array<typeof this.mockHeadline> =
      this.featuredList.map((news) => ({
        date: news.date!,
        description: news.description!,
        imageUrl: news.imageUrl,
        title: news.title,
        slug: news.href.replace(`${env.baseUrl}/news/`, ''),
      }));

    const mappedNewsList: Array<Omit<News, 'content'>> = this.newsList.map(
      (news) =>
        ({
          date: news.date,
          description: news.description,
          imageUrl: news.imageUrl,
          slug: news.slug,
          title: news.title,
          videoUrl: news.videoUrl,
        } as Omit<News, 'content'>)
    );

    this.newsList = [...newsFeaturedList, ...mappedNewsList];

    this.newsList = this.newsList.map((item) => ({
      ...item,
      date: fullDateFormat(item.date),
    }));

    this.showLoadMoreBtn = this.newsList.length > 15;
  }
}
