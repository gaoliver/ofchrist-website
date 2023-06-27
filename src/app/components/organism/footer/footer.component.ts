import { Component } from '@angular/core';
import { Link, SocialNetwork } from '@components/@types/types';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', '../../../../styles.scss'],
})
export class FooterComponent {
  currYear = new Date().getFullYear();

  footerLink: Link | undefined = {
    label: 'Desenvolvido por Gabriel Ramos',
    href: 'https://gaoliver.github.io/',
    target: '_blank',
  };

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
      href: 'https://open.spotify.com/artist/1LYah3vtwsLKZbU6fca4ks',
      icon: 'spotify',
    },
    {
      label: 'Deezer',
      href: 'https://www.deezer.com/en/artist/52807832',
      icon: 'deezer',
    },
    {
      label: 'Apple Music',
      href: 'https://music.apple.com/nl/artist/of-christ/1505133392?l=en',
      icon: 'apple-music',
    },
    {
      label: 'YouTube Music',
      href: 'https://music.youtube.com/channel/UC4lsLSYY4kW5Jvg5WJYCtEg',
      icon: 'youtube-music',
    },
  ];
}
