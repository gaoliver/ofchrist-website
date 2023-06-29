import { Component } from '@angular/core';
import { mockVideos } from '@src/app/@dummyData';
import { FeaturedMusicVideo } from '@src/app/components/@types/types';

@Component({
  selector: 'main[app-videos].page-container',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent {
  featuredVideo: FeaturedMusicVideo = {
    title: 'Nome da música',
    url: mockVideos[0].videoUrl,
    streaming: [
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
    ],
  };
}
