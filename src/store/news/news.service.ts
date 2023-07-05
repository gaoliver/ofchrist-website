import { Injectable } from '@angular/core';
import { contentfulConfig } from '../app.service';
import { News } from '@src/app/components/@types/types';
import { NewsApi } from '@src/app/@types/contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private client = contentfulConfig;

  mapNews(news: NewsApi) {
    return {
      title: news.title,
      slug: news.slug,
      description: news.description,
      imageUrl: news.image.fields.file.url,
      content: documentToHtmlString(news.content),
      date: news.date,
      videoUrl: news.videoUrl,
      isFeatured: news.isFeatured,
    };
  }

  async getAllNewsService(): Promise<News[]> {
    let newsList: News[];

    const response = await this.client.getEntries({
      content_type: 'news',
    });

    const resFields = response.items.map((item) => ({
      date: item.sys.createdAt,
      ...item.fields,
    })) as unknown as NewsApi[];

    newsList = resFields.map((news) => this.mapNews(news));

    return newsList;
  }

  async getNewsService(slug: string): Promise<News> {
    const response = await this.client.getEntries({
      content_type: 'news',
      'fields.slug': slug,
    });

    const resFields = response.items[0].fields as unknown as NewsApi;

    return this.mapNews({
      ...resFields,
      date: response.items[0].sys.createdAt,
    });
  }
}
