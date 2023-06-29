import { NewsHeadline } from '../components/@types/types';

export const mockHighlightNews: Array<NewsHeadline> = [
  {
    title: 'Título da primeira notícia em destaque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum. Pellentesque arcu ligula, lobortis nec ex at, cursus luctus arcu. Etiam sapien ex, ullamcorper in ex non, dapibus posuere augue.',
    imageUrl:
      'https://guitar.com/wp-content/uploads/2023/05/Corey-Taylor-Slipknot@2000x1500.jpg',
    date: '2023-05-07',
    href: '#',
  },
  {
    title: 'Título segunda notícia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum. Pellentesque arcu ligula, lobortis nec ex at, cursus luctus arcu. Etiam sapien ex, ullamcorper in ex non, dapibus posuere augue.',
    imageUrl:
      'https://i2.wp.com/live-metal.com/wp-content/uploads/2022/09/BRRF22_SlaughterToPrevail6.jpg?ssl=1',
    date: '2023-05-08',
    href: '#',
  },
  {
    title: 'Título da terceira notícia em destaque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum.',
    imageUrl:
      'https://akamai.sscdn.co/uploadfile/letras/fotos/1/4/9/9/1499af12feac6a1a82772ec66de060d6.jpg',
    date: '2023-05-09',
    href: '#',
  },
  {
    title: 'Título da quarta notícia em destaque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum. Pellentesque arcu ligula, lobortis nec ex at, cursus luctus arcu. Etiam sapien ex, ullamcorper in ex non, dapibus posuere augue.',
    imageUrl:
      'https://escolaproarte.com.br//wp-content/uploads/2017/07/dia-mundial-do-rock.jpg',
    date: '2023-05-12',
    href: '#',
  },
];

export const mockNews: NewsHeadline = {
  title: 'Este é o título da notícia',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum.',
  date: '2023-06-14',
  href: '#',
  imageUrl:
    'https://www.mlive.com/resizer/PR7ftqxOH_8z7M1eQ4we53REFKA=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/entertainment_impact/photo/22511491-standard.jpg',
};
