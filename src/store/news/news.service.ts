import { Injectable } from '@angular/core';
import { contentfulConfig } from '../app.service';
import { News, SidebarAd } from '@src/app/components/@types/types';
import { NewsApi, SidebarApiAd } from '@src/app/@types/contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

type GetAllService = {
  limit?: number;
  skip?: number;
};
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

  async getAllNewsService(props?: GetAllService): Promise<News[]> {
    let newsList: News[];

    const response = await this.client.getEntries({
      content_type: 'news',
      limit: props?.limit || 15,
      skip: props?.skip,
    });

    const resFields = response.items.map((item) => ({
      date: item.sys.createdAt,
      ...item.fields,
    })) as unknown as NewsApi[];

    newsList = resFields.map((news) => this.mapNews(news));

    return newsList;
  }

  async getAds(): Promise<SidebarAd[]> {
    let sidebarAds: SidebarAd[];

    const response = await this.client.getEntries({
      content_type: 'sidebar-ads',
    });

    const resFields = (
      response.items[0].fields as unknown as {
        ads: { fields: SidebarApiAd }[];
      }
    ).ads.map((item) => item.fields);

    console.log(resFields);

    sidebarAds = resFields.map((ad) => ({
      ...ad,
      imageUrl: ad.image.fields.file.url,
    }));

    return sidebarAds;
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
