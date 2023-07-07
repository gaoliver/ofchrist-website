import { Component, OnInit } from '@angular/core';
import { Link, SocialNetwork } from '@components/@types/types';
import { Store, select } from '@ngrx/store';
import { Home } from '@src/app/@types/types';
import { AppState } from '@src/store/app.state';
import { getHomeSelector } from '@src/store/home/home.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../../../styles.scss'],
})
export class FooterComponent implements OnInit {
  currYear: number | undefined;
  socialNetworks: Array<SocialNetwork> | undefined;
  streamingPlatforms: Array<SocialNetwork> | undefined;
  home$: Observable<Home> | undefined;

  footerLink: Link | undefined = {
    label: 'Desenvolvido por Gabriel Ramos',
    href: 'https://gaoliver.github.io/',
    target: '_blank',
  };

  constructor(private store: Store<AppState>) {
    this.currYear = new Date().getFullYear();
  }

  getFooterIcons() {
    this.home$?.subscribe((home) => {
      this.socialNetworks = home.social_networks;
      this.streamingPlatforms = home.streaming;
    });
  }

  ngOnInit(): void {
    this.home$ = this.store.pipe(select(getHomeSelector));

    this.getFooterIcons();
  }
}
