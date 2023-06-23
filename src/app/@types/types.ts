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
