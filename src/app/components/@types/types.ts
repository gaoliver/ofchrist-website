export enum Icons {
  'instagram',
  'youtube',
  'facebook',
  'tiktok'
}

export type IconOptions = keyof typeof Icons

export interface SocialNetwork {
  icon: IconOptions
  label: string
  href: string
}
