import { SocialNetwork } from '../components/@types/types';
import { VideoApi } from './contentful';

export interface Subpage {
  id: string;
  label: string;
  slug: string;
}

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
  videoUrl?: string;
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
  description: string;
  background: string;
  social_networks: SocialNetwork[];
  streaming: SocialNetwork[];
  background_video?: string;
  video_release?: VideoApi;
}
