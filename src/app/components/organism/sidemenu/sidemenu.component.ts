import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  closeMenu() {
    const menu = document.getElementById('mobile-menu')
    menu?.classList.remove('active-menu')
  }

  ngOnInit() {}
}
