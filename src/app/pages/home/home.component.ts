import { Component, OnInit } from '@angular/core';
import { HomePromo } from '@src/app/@types/types';
import { env } from 'src/environments/environment';

@Component({
  selector: 'main[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showVideo = `${env.baseUrl}/assets/videos/show-caverna-cut.mp4`;
  promo: HomePromo | undefined;
  videoHeight = 420;
  videoWidth = 700;

  getPlayerSize() {
    const player = document.getElementById('youtube-player');

    if (player) {
      this.videoWidth = player.offsetHeight;
      this.videoHeight = player.offsetWidth;
    }
  }

  ngOnInit() {
    // this.promo = {
    //   name: 'lançamento do álbum "Confiança PT.2"',
    //   image: 'https://i.scdn.co/image/ab67616d0000b2735229e5fdd5c833e8b8620e70',
    //   videoUrl: 'https://www.youtube.com/watch?v=-XU_JybF_tU',
    //   cta: {
    //     label: 'Ouça agora!',
    //     href: '#',
    //   },
    // };

    // if (this.promo.videoUrl) {
    //   this.promo.videoUrl = this.promo.videoUrl.slice(-11);
    // }

    this.getPlayerSize();
  }
}
