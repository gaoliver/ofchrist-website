import { Injectable } from '@angular/core';
import { contentfulConfig } from '../app.service';
import { AboutApi, ShowApi } from '@src/app/@types/contentful';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private client = contentfulConfig;

  async getAboutService(): Promise<AboutApi> {
    let aboutPage: AboutApi;

    const response = await this.client.getEntries({
      content_type: 'about',
    });

    aboutPage = response.items[0].fields as unknown as AboutApi;

    return aboutPage;
  }
}
