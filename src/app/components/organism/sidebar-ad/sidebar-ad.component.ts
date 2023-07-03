import { Component } from '@angular/core';
import { SidebarAd } from '../../@types/types';
import { mockAds } from '@src/app/@dummyData/ads';

@Component({
  selector: 'app-sidebar-ad',
  templateUrl: './sidebar-ad.component.html',
  styleUrls: ['./sidebar-ad.component.scss'],
})
export class SidebarAdComponent {
  ads: Array<SidebarAd> = mockAds;
}
