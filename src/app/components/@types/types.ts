export enum Icons {
  'instagram',
  'youtube',
  'facebook',
  'tiktok',
  'spotify',
  'deezer',
  'apple-music',
  'youtube-music',
}

export type IconOptions = keyof typeof Icons;

export interface SocialNetwork {
  icon: IconOptions;
  label: string;
  href: string;
}

export interface HighlightBanner {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  href: string;
}

export interface NewsHeadline {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  href: string;
}
