import { Component, OnInit } from '@angular/core';
import { SidebarAd } from '../../@types/types';
import { mockAds } from '@src/app/@dummyData/ads';
import { NewsService } from '@src/store/news/news.service';

@Component({
  selector: 'app-sidebar-ad',
  templateUrl: './sidebar-ad.component.html',
  styleUrls: ['./sidebar-ad.component.scss'],
})
export class SidebarAdComponent implements OnInit {
  ads: SidebarAd[] | undefined;

  constructor(private contentful: NewsService) {}

  ngOnInit(): void {
    this.contentful.getAds().then((data) => {
      this.ads = data;
    });
  }
}
