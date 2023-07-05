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
  videoUrl?: string
}
