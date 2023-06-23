import { Component } from '@angular/core';
import { SocialNetwork } from '@components/@types/types';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../../../styles.scss'],
})
export class FooterComponent {
  currYear = new Date().getFullYear();

  socialNetworks: Array<SocialNetwork> = [
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@BandaOfChrist',
      icon: 'youtube',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/ofchristrock/',
      icon: 'instagram',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/bandaofchrist/',
      icon: 'facebook',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@ofchristofficial',
      icon: 'tiktok',
    },
  ];

  streamingPlatforms: Array<SocialNetwork> = [
    {
      label: 'Spotify',
      href: '',
      icon: 'spotify',
    },
    {
      label: 'Deezer',
      href: '',
      icon: 'deezer',
    },
    {
      label: 'Apple Music',
      href: '',
      icon: 'apple-music',
    },
    {
      label: 'YouTube Music',
      href: '',
      icon: 'youtube-music',
    },
  ];
}
