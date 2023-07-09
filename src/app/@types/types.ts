import { SocialNetwork } from '../components/@types/types';
import { VideoApi } from './contentful';

export interface Show {
  date: string;
  location: string;
  info: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface HomePromo {
  image: string;
  name: string;
  cta?: {
    label: string;
    href: string;
  };
}

export interface SongLyrics {
  id: string;
  title: string;
  albumId: string;
  composers: string;
  lyrics: string;
  youtubeVideo: string;
}

export interface Album {
  id: string;
  title: string;
  releaseDate: string;
  cover: string;
  producer: string;
  recorded: string;
  streaming: SocialNetwork[];
  songs: SongLyrics[];
}

export interface Home {
  logoUrl: string;
  description: string;
  background: string;
  background_mobile: string;
  social_networks: SocialNetwork[];
  streaming: SocialNetwork[];
  background_video?: string;
  video_release?: VideoApi;
  promo?: HomePromo;
  submenu_about_image: string;
  submenu_music_image: string;
}

export interface TimelineItem {
  description: string;
  date: string;
}
