import { Injectable } from '@angular/core';
import { contentfulConfig } from '../app.service';
import { Home } from '@src/app/@types/types';
import { HomeApi } from '@src/app/@types/contentful';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private client = contentfulConfig;

  async getHomeService(): Promise<Home> {
    let home: Home;

    const response = await this.client.getEntries({
      content_type: 'home',
    });

    const resFields = response.items[0].fields as unknown as HomeApi;

    home = {
      ...resFields,
      background: resFields.background.fields.file.url,
      social_networks: resFields.social_networks.map((s) => s.fields),
      streaming: resFields.streaming.map((s) => s.fields),
    };

    console.log(home);

    return home;
  }
}
