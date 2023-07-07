import { Component, OnInit } from '@angular/core';
import { pageRoutes } from '@src/app/app-routing.module';
import { SocialNetwork } from '../../@types/types';
import { Store, select } from '@ngrx/store';
import { AppState } from '@src/store/app.state';
import { Observable } from 'rxjs';
import { Home } from '@src/app/@types/types';
import { getHomeSelector } from '@src/store/home/home.selectors';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  pageList = pageRoutes;
  socialNetworks: SocialNetwork[] | undefined;
  home$: Observable<Home> | undefined;

  constructor(private store: Store<AppState>) {}

  getFromStore() {
    this.home$ = this.store.pipe(select(getHomeSelector));
  }

  closeMenu() {
    const menu = document.getElementById('mobile-menu');
    menu?.classList.remove('active-menu');
  }

  ngOnInit() {
    this.getFromStore();

    this.home$?.subscribe((home) => {
      this.socialNetworks = home.social_networks;
    });
  }
}
