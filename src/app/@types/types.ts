export interface Subpage {
  label: string;
  slug: string;
}

export interface Event {
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
  title: string;
  album: string;
  composers: string;
  releaseDate: string;
  producer: string;
  recorded: string;
  lyrics: string;
  slug: string;
}
