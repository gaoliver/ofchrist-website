import { Injectable } from '@angular/core';
import { contentfulConfig } from '../app.service';
import { News } from '@src/app/components/@types/types';
import { NewsApi } from '@src/app/@types/contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Observable, from } from 'rxjs';
import { Entry } from 'contentful';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private client = contentfulConfig;

  constructor() {}

  async getNewsService() {
    let newsList: News[];

    const response = await this.client.getEntries({
      content_type: 'news',
    });

    const resFields = response.items.map((item) => ({
      date: item.sys.createdAt,
      ...item.fields,
    })) as unknown as NewsApi[];

    newsList = resFields.map((news) => ({
      title: news.title,
      slug: news.slug,
      description: news.description,
      imageUrl: news.image.fields.file.url,
      content: documentToHtmlString(news.content),
      date: news.date,
      videoUrl: news.videoUrl,
      isFeatured: news.isFeatured,
    }));

    return newsList;
  }
}
