import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { env } from '@src/environments/environment';
import { Icons } from './components/@types/types';
import { HomeService } from '@src/store/home/home.service';
import { Home } from './@types/types';
import { Store, select } from '@ngrx/store';
import { AppState } from '@src/store/app.state';
import {
  getHome,
  getHomeSEOSuccess,
  getHomeSuccess,
} from '@src/store/home/home.actions';
import { SEOApi } from './@types/contentful';
import { Observable } from 'rxjs';
import { getAppSelector } from '@src/store/app.selectors';
import { checkIsMobile } from './utils/checkIsMobile';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  apiLoaded = false;
  isLoading: boolean | undefined;
  isMobile: boolean | undefined;

  app$: Observable<AppState> | undefined;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private contentful: HomeService,
    private store: Store<AppState>
  ) {
    this.app$ = this.store.pipe(select(getAppSelector));

    for (const icon of Object.keys(Icons)) {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${env.baseUrl}/assets/icons/svg/${icon}.svg`
        )
      );
    }
  }

  setBackgroundImage(backgroundImage: string) {
    if (!backgroundImage) return;

    const body = document.body;

    body.style.backgroundImage = `url(${backgroundImage})`;
  }

  storeContentful(data: { home: Home; seo: SEOApi }) {
    this.store.dispatch(getHome());

    this.setBackgroundImage(
      this.isMobile ? data.home.background_mobile : data.home.background
    );

    this.store.dispatch(getHomeSuccess({ home: data.home }));
    this.store.dispatch(getHomeSEOSuccess({ seo: data.seo }));
  }

  getFavicon(seo: SEOApi) {
    document
      .getElementById('app-favicon')
      ?.setAttribute('href', seo.favicon.fields.file.url);
  }

  ngOnInit() {
    this.isMobile = checkIsMobile();

    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.contentful.getHomeService().then((data) => {
      this.storeContentful(data);
      this.getFavicon(data.seo);
    });

    // Loading event
    this.app$?.subscribe((app) => {
      if (
        app.home.status === 'loading' ||
        app.music.status === 'loading' ||
        app.news.status === 'loading'
      ) {
        this.isLoading = true;
      } else {
        this.isLoading = false;
      }

      onresize = () => {
        this.isMobile = checkIsMobile();

        const home = app.home.home;
        const bgImage = this.isMobile
          ? home.background_mobile
          : home.background;

        this.setBackgroundImage(bgImage);
      };
    });
  }
}
