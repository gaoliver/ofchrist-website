import { Component, OnInit } from '@angular/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { mockFeaturedNews } from '@src/app/@dummyData';
import { mockVideos } from '@src/app/@dummyData/media';
import { VideoApi } from '@src/app/@types/contentful';
import { FeaturedBanner } from '@src/app/components/@types/types';
import { env } from '@src/environments/environment';
import { AboutService } from '@src/store/about/about.service';
import { NewsService } from '@src/store/news/news.service';

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

  videoList: VideoApi[] | undefined;
  featuredNews: Array<FeaturedBanner> | undefined;
  shortIntro: string | undefined;

  constructor(
    private contentful: AboutService,
    private contentfulNews: NewsService
  ) {
    this.contentful.getAboutService().then((data) => {
      this.shortIntro = documentToHtmlString(data.short_description);
    });

    this.contentfulNews.getAllNewsService({ limit: 10 }).then((newsList) => {
      this.featuredNews = newsList
        .filter((news) => news.isFeatured)
        .map((news) => ({
          ...news,
          href: `${this.baseUrl}/news/${news.slug}`,
        }));
    });

    this.contentful.getVideosService().then((list) => {
      this.videoList = list;
    });
  }

  ngOnInit() {}
}
