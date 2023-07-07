import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Home } from '@src/app/@types/types';
import { checkIsMobile } from '@src/app/utils/checkIsMobile';
import { AppState } from '@src/store/app.state';
import { getHomeSelector } from '@src/store/home/home.selectors';
import { Observable } from 'rxjs';
import { pageRoutes } from 'src/app/app-routing.module';
import { env } from 'src/environments/environment';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // logoImage = `${env.baseUrl}/assets/images/ofchrist-logo.png`;
  home$: Observable<Home> | undefined;
  logoImage: string | undefined;
  pageList = pageRoutes;
  isMobile: boolean | undefined;

  // Temporary variable - must delete later
  baseUrl = env.baseUrl;

  constructor(private store: Store<AppState>) {
    this.home$ = this.store.pipe(select(getHomeSelector));
  }

  navigateHome() {
    window.location.href = env.baseUrl;
  }

  openMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu?.classList.add('active-menu');
  }

  ngOnInit() {
    const header = document.getElementById('app-header');

    this.home$?.subscribe((home) => (this.logoImage = home.logoUrl));

    document.onscroll = function () {
      if (header) {
        header.style.backgroundColor =
          header.offsetTop > 50 ? 'var(--color-black)' : 'transparent';
      }
    };

    onresize = () => {
      this.isMobile = checkIsMobile();
    };

    this.isMobile = checkIsMobile();
  }
}
