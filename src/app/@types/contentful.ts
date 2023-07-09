import { Document } from '@contentful/rich-text-types';
import { SocialNetwork } from '../components/@types/types';

interface FileApi {
  fields: {
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface CtaApi {
  fields: {
    label: string;
    href: string;
  };
}

export interface PromoApi {
  fields: {
    title: string;
    image: FileApi;
    cta?: CtaApi;
  };
}

export interface SocialNetworkApi {
  fields: SocialNetwork;
}

export interface NewsApi {
  title: string;
  slug: string;
  description: string;
  image: FileApi;
  content: Document;
  isFeatured: boolean;
  date: string;
  videoUrl?: string;
}

export interface ShowApi {
  location: string;
  date: string;
  info: string;
  cta: {
    fields: {
      label: string;
      href: string;
    };
  };
}

export interface AboutApi {
  short_description: Document;
  our_story: Document;
  contact: Document;
  our_story_image: FileApi;
  timeline_image: FileApi;
}

export interface VideoApi {
  description: string;
  url: string;
  type: 'Outros' | 'Clipe';
  content?: Document;
  cta?: CtaApi;
  streaming?: SocialNetworkApi[];
  featured: boolean;
}

export interface SongLyricsApi {
  fields: {
    id: string;
    title: string;
    composers: string;
    lyrics: string;
    youtubeVideo: string;
  };
}

export interface AlbumApi {
  id: string;
  title: string;
  releaseDate: string;
  cover: FileApi;
  producer: string;
  recorded: string;
  streaming: SocialNetworkApi[];
  songs: SongLyricsApi[];
}

export interface HomeApi {
  logo: FileApi;
  description: string;
  background: FileApi;
  background_mobile: FileApi;
  social_networks: SocialNetworkApi[];
  streaming: SocialNetworkApi[];
  background_video: FileApi;
  video_release?: { fields: VideoApi };
  promo?: PromoApi;
  submenu_about_image: FileApi;
  submenu_music_image: FileApi;
}

export interface SEOApi {
  title: string;
  favicon: FileApi;
  description: string;
  tags: string[];
  share_image: FileApi;
}

export interface SidebarApiAd {
  image: FileApi;
  title: string;
  href: string;
  target: 'interno' | 'externo';
}

export interface TimelineItemApi {
  fields: {
    description: string;
    date: string;
  };
}
