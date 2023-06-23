import { Component } from '@angular/core';
import { env } from 'src/environments/environment';
import { SocialNetwork } from '../../@types/types';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currYear = new Date().getFullYear();

  socialNetworks: Array<SocialNetwork> = [
    {
      label: 'YouTube',
      href: 'https://www.instagram.com/ofchristrock/',
      icon: 'youtube'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ofchristrock/',
      icon: 'instagram'
    },
    {
      label: 'Facebook',
      href: 'https://www.instagram.com/ofchristrock/',
      icon: 'facebook'
    },
    {
      label: 'TikTok',
      href: 'https://www.instagram.com/ofchristrock/',
      icon: 'tiktok'
    },
  ];
}
