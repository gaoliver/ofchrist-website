import { Component } from '@angular/core';
import { mockAlbums } from '@src/app/@dummyData';
import { mockVideos } from '@src/app/@dummyData/media';
import {
  FeaturedBanner,
  FeaturedMusicVideo,
} from '@src/app/components/@types/types';
import { env } from '@src/environments/environment';

@Component({
  selector: 'main[app-music].page-container',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent {
  videos = mockVideos.shift();

  featuredVideo: FeaturedMusicVideo = {
    url: mockVideos[0].videoUrl,
    title: 'Música nova da banda',
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

  albums: FeaturedBanner[] = mockAlbums.map((album) => ({
    href: env.baseUrl + '/musicas/album/' + album.id,
    title: album.title,
    imageUrl: album.cover,
  }));
}
