import { Component, OnInit } from '@angular/core';
import { pageRoutes } from '@src/app/app-routing.module';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  pageList = pageRoutes;

  closeMenu() {
    const menu = document.getElementById('mobile-menu');
    menu?.classList.remove('active-menu');
  }

  ngOnInit() {}
}
