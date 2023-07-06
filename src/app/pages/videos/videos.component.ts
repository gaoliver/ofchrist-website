import { Component } from '@angular/core';
import { VideoApi } from '@src/app/@types/contentful';
import { FeaturedVideo } from '@src/app/components/@types/types';
import { mapFeatureVideo } from '@src/app/utils/mapFeaturedVideo';
import { AboutService } from '@src/store/about/about.service';

@Component({
  selector: 'main[app-videos].page-container',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  featuredVideo: FeaturedVideo | undefined;
  videoList: VideoApi[] | undefined;

  constructor(private contentful: AboutService) {
    this.contentful.getVideosService().then((list) => {
      this.videoList = list.filter((v) => v.type === 'Clipe');

      const featuredVideo = list.find((v) => v.featured && v.type === 'Clipe');

      if (featuredVideo) {
        this.featuredVideo = mapFeatureVideo(featuredVideo);
      }
    });
  }
}
