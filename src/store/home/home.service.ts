import { Injectable } from '@angular/core';
import { contentfulConfig } from '../app.service';
import { Home } from '@src/app/@types/types';
import { HomeApi, SEOApi } from '@src/app/@types/contentful';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private client = contentfulConfig;

  async getHomeService(): Promise<{ home: Home; seo: SEOApi }> {
    let home: { home: Home; seo: SEOApi };
    let home_home: Home;

    const homeResponse = await this.client.getEntries({
      content_type: 'home',
      include: 2,
    });
    const seoResponse = await this.client.getEntries({ content_type: 'seo' });

    const resHomeFields = homeResponse.items[0].fields as unknown as HomeApi;
    const resSEOFields = seoResponse.items[0].fields as unknown as SEOApi;

    home_home = {
      ...resHomeFields,
      logoUrl: resHomeFields.logo.fields.file.url,
      background: resHomeFields.background.fields.file.url,
      background_mobile: resHomeFields.background_mobile.fields.file.url,
      social_networks: resHomeFields.social_networks.map((s) => s.fields),
      streaming: resHomeFields.streaming.map((s) => s.fields),
      background_video: resHomeFields.background_video.fields.file.url,
      video_release: resHomeFields.video_release?.fields,
      submenu_about_image: resHomeFields.submenu_about_image.fields.file.url,
      submenu_music_image: resHomeFields.submenu_music_image.fields.file.url,
      promo: resHomeFields.promo && {
        cta: resHomeFields.promo?.fields.cta?.fields,
        name: resHomeFields.promo?.fields.title!,
        image: resHomeFields.promo?.fields.image.fields.file.url!,
      },
    };

    home = {
      home: home_home,
      seo: resSEOFields,
    };

    return home;
  }
}
