import { SidebarAd } from '../components/@types/types';
import { mockNews } from './news';

export const mockAds: Array<SidebarAd> = [
  {
    title: 'Ad de notícia',
    imageUrl:
      'https://lineardesign.com/wp-content/uploads/2019/12/Google-Ads-Display-Ads-MailChimp-Example-2-1.jpg',
    href: '#',
    target: 'externo',
  },
  {
    title: mockNews.title,
    href: 'news/' + mockNews.slug,
    imageUrl: mockNews.imageUrl,
    target: 'interno',
  },
];
