import { Component, OnInit } from '@angular/core';
import { mockAlbums } from '@src/app/@dummyData';
import { Album } from '@src/app/@types/types';
import { FeaturedBanner } from '@src/app/components/@types/types';

@Component({
  selector: 'main[app-discography].page-container',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.scss'],
})
export class DiscographyComponent implements OnInit {
  discList: Array<Album> = mockAlbums;

  bannerList: Array<FeaturedBanner> = [];

  ngOnInit() {
    this.discList = this.discList.sort(
      (discA, discB) =>
        Number(new Date(discB.releaseDate).getFullYear()) -
        Number(new Date(discA.releaseDate).getFullYear())
    );

    this.bannerList = this.discList.map(album => ({
      title: album.title,
      href: album.id,
      imageUrl: album.cover,
      description: new Date(album.releaseDate).getFullYear().toString(),
    }) as FeaturedBanner);
  }
}
