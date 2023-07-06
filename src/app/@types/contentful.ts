import { Document } from '@contentful/rich-text-types';

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
}

export interface VideoApi {
  description: string;
  url: string;
  type: string;
}
