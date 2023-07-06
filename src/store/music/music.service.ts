import { Injectable } from '@angular/core';
import { contentfulConfig } from '../app.service';
import { AlbumApi, SongLyricsApi } from '@src/app/@types/contentful';
import { SongLyrics } from '@src/app/@types/types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
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

  async getAlbumService(albumId: string): Promise<AlbumApi> {
    const response = await this.client.getEntries({
      content_type: 'album',
      'fields.id': albumId,
    });

    const resFields = response.items[0].fields as unknown as AlbumApi;

    return resFields;
  }

  async getSongService(
    songId: string
  ): Promise<{ song: SongLyrics; album: AlbumApi }> {
    let song: SongLyrics;

    const response = await this.client.getEntries({
      content_type: 'song',
      'fields.id': songId,
    });

    const albumResponse = await this.client.getEntries({
      content_type: 'album',
      links_to_entry: response.items[0].sys.id,
      select: [
        'fields.id',
        'fields.title',
        'fields.releaseDate',
        'fields.cover',
        'fields.producer',
        'fields.recorded',
        'fields.streaming',
      ],
    });

    const resItem = response.items[0] as unknown as SongLyricsApi;
    const albumFields = albumResponse.items[0].fields as unknown as AlbumApi;

    song = {
      ...resItem.fields,
      lyrics: resItem.fields.lyrics.replace(/\n/g, '<br/>'),
      albumId: albumFields.id,
    };

    return {
      song,
      album: { ...albumFields, songs: [] },
    };
  }
}
