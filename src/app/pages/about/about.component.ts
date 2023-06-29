import { Component, OnInit } from '@angular/core';
import { mockFeaturedNews } from '@src/app/@dummyData';
import { mockVideos } from '@src/app/@dummyData/media';
import { pageRoutes } from '@src/app/app-routing.module';
import { FeaturedBanner } from '@src/app/components/@types/types';
import { videoIdExtractor } from '@src/app/utils/videoIdExtractor';
import { env } from '@src/environments/environment';

@Component({
  selector: 'main[app-about].page-container',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  baseUrl = env.baseUrl;

  // TO CHANGE: Check subpages

  // submenu = pageRoutes.find(
  //   (p) => p.data.label?.toLocaleLowerCase() === 'a banda'
  // )?.data.submenu;

  subpages: Array<FeaturedBanner> = [
    {
      title: 'Nossa história',
      href: 'a-banda/nossa-historia',
      imageUrl:
        'https://www.inquirer.com/resizer/RJ4KerlLSfX4Odr7i8KzLfCahYE=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/ONSWVZD5QFCETAIQ7AMUERARIQ.jpeg',
    },
    {
      title: 'Integrantes',
      href: '#',
      imageUrl: 'https://blognroll.com.br/wp-content/uploads/2017/11/RSF.jpg',
    },
  ];

  featuredNews: Array<FeaturedBanner> = mockFeaturedNews;

  // videoList = mockVideos.map((v) => ({
  //   ...v,
  //   videoUrl: videoIdExtractor(v.videoUrl),
  // }));

  videoList = mockVideos

  videoWidth = 360;
  videoHeight = 203;

  getPlayerSize() {
    const player = document.getElementById('youtube-player');

    if (player) {
      this.videoWidth = player.offsetHeight;
      this.videoHeight = player.offsetWidth;
    }
  }

  ngOnInit() {
    this.getPlayerSize();
  }
}
