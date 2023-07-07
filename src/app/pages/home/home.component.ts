import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Home, HomePromo } from '@src/app/@types/types';
import { FeaturedVideo } from '@src/app/components/@types/types';
import { SetMetaTag } from '@src/app/utils/setMetaTag';
import { AppState } from '@src/store/app.state';
import { getHomeSelector } from '@src/store/home/home.selectors';
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


  constructor(private store: Store<AppState>, private setMeta: SetMetaTag) {}

  getFromStore() {
    this.home$ = this.store.pipe(select(getHomeSelector));
  }

  mapVideoRelease(video: Home['video_release']) {
    if (video) {
      this.videoRelease = {
        title: video.description,
        url: video.url,
        content: video.content,
        streaming: video.streaming?.map((s) => s.fields),
        cta: video.cta?.fields,
      };
    }
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
  }
}
