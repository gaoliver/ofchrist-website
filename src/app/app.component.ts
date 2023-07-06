import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { env } from '@src/environments/environment';
import { Icons } from './components/@types/types';
import { HomeService } from '@src/store/home/home.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Of Christ';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private contentful: HomeService
  ) {
    for (const icon of Object.keys(Icons)) {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${env.baseUrl}/assets/icons/svg/${icon}.svg`
        )
      );
    }
  }

  apiLoaded = false;

  setBackgroundImage(backgroundImage: string) {
    if (!backgroundImage) return;

    const body = document.body;

    body.style.backgroundImage = `url(${backgroundImage})`;
  }

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.contentful.getHomeService().then((data) => {
      this.setBackgroundImage(data.background);
    });
  }
}
