import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Store } from '@ngrx/store';
import { VideoApi } from '@src/app/@types/contentful';
import { pageRoutes } from '@src/app/app-routing.module';
import { FeaturedBanner } from '@src/app/components/@types/types';
import { SetMetaTag } from '@src/app/utils/setMetaTag';
import { env } from '@src/environments/environment';
import { AboutService } from '@src/store/about/about.service';
import { AppState } from '@src/store/app.state';
import { getNews, getNewsSuccess } from '@src/store/news/news.actions';
import { NewsService } from '@src/store/news/news.service';

@Component({
  selector: 'main[app-about].page-container',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  baseUrl = env.baseUrl;

  subpages: Array<FeaturedBanner> | undefined;
  videoList: VideoApi[] | undefined;
  featuredNews: Array<FeaturedBanner> | undefined;
  shortIntro: string | undefined;

  constructor(
    private contentful: AboutService,
    private contentfulNews: NewsService,
    private pageTitle: Title,
    private setMeta: SetMetaTag,
    private store: Store<AppState>
  ) {
    this.store.dispatch(getNews());

    this.contentful.getAboutService().then((data) => {
      this.shortIntro = documentToHtmlString(data.short_description);
      this.mapSubpages({
        our_story: data.our_story_image.fields.file.url,
        members: data.timeline_image.fields.file.url,
      });
    });

    this.contentfulNews.getAllNewsService({ limit: 10 }).then((newsList) => {
      this.featuredNews = newsList
        .filter((news) => news.isFeatured)
        .map((news) => ({
          ...news,
          href: `${this.baseUrl}/news/${news.slug}`,
        }));

      this.store.dispatch(getNewsSuccess({ list: [] }));
    });

    this.contentful.getVideosService().then((list) => {
      this.videoList = list;
    });
  }

  mapSubpages({ members, our_story }: { our_story: string; members: string }) {
    const submenu = pageRoutes.find(
      (p) => (p.title! as string).toLowerCase() === 'a banda'
    )?.data?.submenu;

    if (submenu) {
      const mappedSubPages: FeaturedBanner[] = submenu.subpages.map((page) => ({
        title: page.title,
        href: page.slug,
        imageUrl: page.id.match('our_story') ? our_story : members,
      }));

      this.subpages = mappedSubPages;
    }
  }

  updatePageTitle() {
    const title = this.pageTitle.getTitle();
    this.setMeta.updateTitle(title);
  }

  ngOnInit() {
    this.updatePageTitle();
  }
}
