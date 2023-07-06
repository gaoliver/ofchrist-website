import { Component, OnInit } from '@angular/core';
import { mockVideos } from '@src/app/@dummyData';
import { HomePromo } from '@src/app/@types/types';
import { FeaturedVideo } from '@src/app/components/@types/types';
import { env } from 'src/environments/environment';

@Component({
  selector: 'main[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showVideo = `${env.baseUrl}/assets/videos/show-caverna-cut.mp4`;
  promo: HomePromo | undefined;
  videoRelease: FeaturedVideo | undefined;

  ngOnInit() {
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
