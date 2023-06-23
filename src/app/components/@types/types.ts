export enum Icons {
  'instagram',
  'youtube',
  'facebook',
  'tiktok',
  'spotify',
  'deezer',
  'apple-music',
  'youtube-music'
}

export type IconOptions = keyof typeof Icons

export interface SocialNetwork {
  icon: IconOptions
  label: string
  href: string
}
