import { Document } from '@contentful/rich-text-types';
import { SocialNetwork } from '../components/@types/types';

interface ImageApi {
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

export interface SocialNetworkApi {
  fields: SocialNetwork;
}

export interface NewsApi {
  title: string;
  slug: string;
  description: string;
  image: ImageApi;
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
  our_story_image: ImageApi;
  members_image: ImageApi;
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
