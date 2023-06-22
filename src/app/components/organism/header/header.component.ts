import { Component, OnInit } from '@angular/core';
import { pageRoutes } from 'src/app/app-routing.module';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoImage = '../../../../assets/images/ofchrist-logo.png';
  pageList = pageRoutes;

  ngOnInit() {
    const header = document.getElementById('app-header');

    document.onscroll = function () {
      if (header) {
        header.style.backgroundColor =
          header.offsetTop > 0 ? 'var(--color-black)' : 'transparent';
      }
    };
  }

  navigateHome() {
    window.location.pathname = '/';
  }
}
