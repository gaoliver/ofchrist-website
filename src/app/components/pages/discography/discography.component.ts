import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AlbumApi } from '@src/app/@types/contentful';
import { Album } from '@src/app/@types/types';
import { FeaturedBanner } from '@src/app/components/@types/types';
import { SetMetaTag } from '@src/app/utils/setMetaTag';
import { MusicService } from '@src/store/music/music.service';

@Component({
  selector: 'main[app-discography].page-container',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.scss'],
})
export class DiscographyComponent implements OnInit {
  discList: Album[] | undefined;
  bannerList: Array<FeaturedBanner> = [];

  constructor(
    private contentful: MusicService,
    private pageTitle: Title,
    private setMeta: SetMetaTag
  ) {
    this.contentful.getAlbumsService().then((list) => {
      this.mapAlbumsList(list);
    });
  }

  mapAlbumsList(list: AlbumApi[]) {
    const sortedAlbums = list.sort(
      (discA, discB) =>
        Number(new Date(discB.releaseDate).getFullYear()) -
        Number(new Date(discA.releaseDate).getFullYear())
    );

    const mapAlbums = sortedAlbums.map((disc) => ({
      ...disc,
      cover: disc.cover.fields.file.url,
      streaming: disc.streaming.map((s) => s.fields),
      songs: [],
    }));

    this.discList = mapAlbums;
    this.mapBannerList(mapAlbums);
  }

  mapBannerList(list: Album[]) {
    this.bannerList = list.map(
      (album) =>
        ({
          title: album.title,
          href: `musicas/album/${album.id}`,
          imageUrl: album.cover,
          description: new Date(album.releaseDate).getFullYear().toString(),
        } as FeaturedBanner)
    );
  }

  updatePageTitle() {
    const title = this.pageTitle.getTitle();
    this.setMeta.updateTitle(title);
  }

  ngOnInit() {
    this.updatePageTitle();
  }
}
