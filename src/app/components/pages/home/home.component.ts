import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Store, select } from '@ngrx/store';
import { SEOApi } from '@src/app/@types/contentful';
import { Home, HomePromo } from '@src/app/@types/types';
import { FeaturedVideo } from '@src/app/components/@types/types';
import { mapFeatureVideo } from '@src/app/utils/mapFeaturedVideo';
import { SetMetaTag } from '@src/app/utils/setMetaTag';
import { AppState } from '@src/store/app.state';
import {
  getHomeSelector,
  getSEOSelector,
} from '@src/store/home/home.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'main[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showVideo: string | undefined;
  promo: HomePromo | undefined;
  videoRelease: FeaturedVideo | undefined;
  home$: Observable<Home> | undefined;
  seo$: Observable<SEOApi> | undefined;

  constructor(
    private store: Store<AppState>,
    private setMeta: SetMetaTag,
    private titleService: Title
  ) {}

  getFromStore() {
    this.home$ = this.store.pipe(select(getHomeSelector));
    this.seo$ = this.store.pipe(select(getSEOSelector));
  }

  mapVideoRelease(video: Home['video_release']) {
    if (video) this.videoRelease = mapFeatureVideo(video);
  }

  getShowVideo(home: Home) {
    this.showVideo = home.background_video;

    if (home.video_release) this.mapVideoRelease(home.video_release);
  }

  ngOnInit() {
    this.getFromStore();

    this.home$?.subscribe((data) => {
      this.getShowVideo(data);
      this.promo = data.promo;
    });

    this.seo$?.subscribe((data) => {
      this.setMeta.updateTags(data.description, data.tags);
      this.setMeta.updateOgImage(data.share_image.fields.file.url);

      this.titleService.setTitle(data.title);
    });
  }
}
