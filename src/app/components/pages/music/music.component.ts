import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AlbumApi, VideoApi } from '@src/app/@types/contentful';
import {
  FeaturedBanner,
  FeaturedVideo,
} from '@src/app/components/@types/types';
import { checkIsMobile, checkIsTablet } from '@src/app/utils/checkIsMobile';
import { dateSort } from '@src/app/utils/dateSort';
import { mapFeatureVideo } from '@src/app/utils/mapFeaturedVideo';
import { SetMetaTag } from '@src/app/utils/setMetaTag';
import { env } from '@src/environments/environment';
import { AboutService } from '@src/store/about/about.service';
import { MusicService } from '@src/store/music/music.service';

@Component({
  selector: 'main[app-music].page-container',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit {
  isMobile: boolean | undefined;
  isTablet: boolean | undefined;

  videos: VideoApi[] | undefined;
  featuredVideo: FeaturedVideo | undefined;
  albums: FeaturedBanner[] | undefined;

  constructor(
    private contentful: MusicService,
    private contentfulAbout: AboutService,
    private pageTitle: Title,
    private setMeta: SetMetaTag
  ) {
    this.contentfulAbout.getVideosService().then((list) => {
      this.videos = list.filter((v) => v.type === 'Clipe');

      const featuredVideo = list.find((v) => v.featured && v.type === 'Clipe');

      if (featuredVideo) {
        this.featuredVideo = mapFeatureVideo(featuredVideo);
      }
    });

    this.contentful.getAlbumsService().then((list) => {
      this.albums = this.mapAlbumsList(
        list.sort((albumA, albumB) =>
          dateSort(albumA.recorded, albumB.recorded)
        )
      );
    });
  }

  mapAlbumsList(list: AlbumApi[]): FeaturedBanner[] {
    return list.map((album) => ({
      href: env.baseUrl + '/musicas/album/' + album.id,
      title: album.title,
      imageUrl: album.cover.fields.file.url,
    }));
  }

  checkMobile() {
    this.isMobile = checkIsMobile();
    this.isTablet = checkIsTablet();
  }

  updatePageTitle() {
    const title = this.pageTitle.getTitle();
    this.setMeta.updateTitle(title);
  }

  ngOnInit() {
    onresize = () => {
      this.checkMobile();
    };

    this.checkMobile();
    this.updatePageTitle()
  }
}
