import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { mockVideos } from '@src/app/@dummyData';
import { Home, HomePromo } from '@src/app/@types/types';
import { FeaturedVideo } from '@src/app/components/@types/types';
import { AppState } from '@src/store/app.state';
import { getHomeSelector } from '@src/store/home/home.selectors';
import { Observable } from 'rxjs';
import { env } from 'src/environments/environment';

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

  constructor(private store: Store<AppState>) {}

  getFromStore() {
    this.home$ = this.store.pipe(select(getHomeSelector));
  }

  getShowVideo(home: Home) {
    this.showVideo = home.background_video;
  }

  ngOnInit() {
    this.getFromStore();

    this.home$?.subscribe((data) => {
      this.getShowVideo(data);
    });

    // this.promo = {
    //   name: 'lançamento do álbum "Confiança PT.2"',
    //   image: 'https://i.scdn.co/image/ab67616d0000b2735229e5fdd5c833e8b8620e70',
    //   videoUrl: '',
    //   cta: {
    //     label: 'Ouça agora!',
    //     href: '#',
    //   },
    // };
    // this.videoRelease = {
    //   title: 'Novo Lançamento Musical',
    //   url: mockVideos[0].videoUrl,
    //   streaming: [
    //     {
    //       icon: 'spotify',
    //       href: '#',
    //       label: 'Spotify',
    //     },
    //     {
    //       icon: 'deezer',
    //       href: '#',
    //       label: 'Deezer',
    //     },
    //     {
    //       icon: 'apple-music',
    //       href: '#',
    //       label: 'Apple Music',
    //     },
    //     {
    //       icon: 'youtube-music',
    //       href: '#',
    //       label: 'YouTube Music',
    //     },
    //   ],
    // };
  }
}
