import { Component, OnInit } from '@angular/core';
import { pageRoutes } from 'src/app/app-routing.module';
import { env } from 'src/environments/environment';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoImage = `${env.baseUrl}/assets/images/ofchrist-logo.png`;
  pageList = pageRoutes;
  isMobile: boolean | undefined;

  // Temporary variable - must delete later
  baseUrl = env.baseUrl;

  navigateHome() {
    window.location.href = env.baseUrl;
  }

  checkIfMobile() {
    const screen = window.screen.width;
    return screen <= 600;
  }

  openMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    console.log("test", menu)
    // menu?.classList.remove('close-menu');
    menu?.classList.add('active-menu');
  }

  ngOnInit() {
    const header = document.getElementById('app-header');

    document.onscroll = function () {
      if (header) {
        header.style.backgroundColor =
          header.offsetTop > 50 ? 'var(--color-black)' : 'transparent';
      }
    };

    onresize = () => {
      this.isMobile = this.checkIfMobile();
    };

    this.isMobile = this.checkIfMobile();
  }
}
