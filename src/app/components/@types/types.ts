import { Document } from '@contentful/rich-text-types';
import { CtaApi } from '@src/app/@types/contentful';

export enum Icons {
  'instagram',
  'youtube',
  'facebook',
  'tiktok',
  'spotify',
  'deezer',
  'apple-music',
  'youtube-music',
  'whatsapp',
}

export type IconOptions = keyof typeof Icons;

export interface SocialNetwork {
  icon: IconOptions;
  label: string;
  href: string;
}

export interface FeaturedBanner {
  title: string;
  description?: string;
  imageUrl: string;
  date?: string;
  href: string;
  showReadMore?: boolean;
}

export interface News {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  content: string;
  videoUrl?: string;
  isFeatured?: boolean;
}

export interface Link {
  label: string;
  href: string;
  target?: '_blank' | '_self';
}

export interface FeaturedVideo {
  title: string;
  url: string;
  streaming?: Array<SocialNetwork>;
  cta?: CtaApi['fields'];
  content?: Document;
}

export interface SidebarAd {
  imageUrl: string;
  title: string;
  href: string;
  target: 'interno' | 'externo';
}
