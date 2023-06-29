import { Component } from '@angular/core';
import { SocialNetwork } from '@src/app/components/@types/types';

@Component({
  selector: 'main[app-videos].page-container',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  streaming: Array<SocialNetwork> = [
    {
      icon: 'spotify',
      href: '#',
      label: 'Spotify',
    },
    {
      icon: 'deezer',
      href: '#',
      label: 'Deezer',
    },
    {
      icon: 'apple-music',
      href: '#',
      label: 'Apple Music',
    },
    {
      icon: 'youtube-music',
      href: '#',
      label: 'YouTube Music',
    },
  ];
}
