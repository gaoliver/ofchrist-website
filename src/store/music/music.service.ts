import { Injectable } from '@angular/core';
import { contentfulConfig } from '../app.service';
import { AlbumApi } from '@src/app/@types/contentful';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private client = contentfulConfig;

  async getAlbumsService(): Promise<AlbumApi[]> {
    let albumsList: AlbumApi[];

    const response = await this.client.getEntries({
      content_type: 'album',
    });

    albumsList = response.items.map(
      (item) => item.fields
    ) as unknown as AlbumApi[];

    return albumsList;
  }
}
