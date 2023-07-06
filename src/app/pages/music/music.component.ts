import { Component, OnInit } from '@angular/core';
import { mockAlbums } from '@src/app/@dummyData';
import { mockVideos } from '@src/app/@dummyData/media';
import { VideoApi } from '@src/app/@types/contentful';
import {
  FeaturedBanner,
  FeaturedVideo,
} from '@src/app/components/@types/types';
import { checkIsMobile, checkIsTablet } from '@src/app/utils/checkIsMobile';
import { mapFeatureVideo } from '@src/app/utils/mapFeaturedVideo';
import { env } from '@src/environments/environment';
import { AboutService } from '@src/store/about/about.service';

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

  albums: FeaturedBanner[] = mockAlbums.map((album) => ({
    href: env.baseUrl + '/musicas/album/' + album.id,
    title: album.title,
    imageUrl: album.cover,
  }));

  constructor(private contentfulAbout: AboutService) {
    this.contentfulAbout.getVideosService().then((list) => {
      this.videos = list.filter((v) => v.type === 'Clipe');

      const featuredVideo = list.find((v) => v.featured && v.type === 'Clipe');

      if (featuredVideo) {
        this.featuredVideo = mapFeatureVideo(featuredVideo);
      }
    });
  }

  checkMobile() {
    this.isMobile = checkIsMobile();
    this.isTablet = checkIsTablet();
  }

  ngOnInit() {
    onresize = () => {
      this.checkMobile();
    };

    this.checkMobile();
  }
}
