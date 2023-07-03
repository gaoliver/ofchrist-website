import { News } from '../components/@types/types';

const loremText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a ex orci. Sed eget maximus metus. Nam id tortor quis tortor dictum aliquam. Proin pharetra elementum justo nec malesuada. Nunc dignissim odio felis, in sollicitudin nisl euismod vel. Cras ante sem, scelerisque et velit id, porttitor rhoncus velit. Quisque sit amet cursus magna. Integer elit massa, luctus eget ipsum eu, pulvinar convallis metus. Ut tincidunt placerat velit vitae feugiat. Etiam a cursus lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis condimentum euismod justo, sit amet mollis libero. Ut tempus ipsum sit amet blandit porta. In molestie mi et urna lobortis porta. Sed porta sapien bibendum eleifend gravida.

Vestibulum auctor eu risus ut sodales. Ut porttitor eu est quis semper. Vestibulum bibendum, nisi eu malesuada laoreet, eros eros aliquam arcu, sit amet efficitur sapien nisi eget ligula. Phasellus eget ligula dapibus nisi porta rutrum. Nullam aliquet at libero vitae elementum. Vestibulum tempus placerat pellentesque. Nam a enim augue. Maecenas euismod ultricies ligula, eu sollicitudin ipsum suscipit eu. Nulla facilisi. Curabitur vulputate pulvinar dapibus. Quisque at condimentum orci, non fringilla ante.

In sit amet aliquam nisl, ac placerat est. Vestibulum imperdiet, arcu vel tristique commodo, sapien ante ultrices neque, ut laoreet libero urna at magna. In convallis arcu eget consectetur posuere. Praesent sagittis sem augue, rhoncus aliquam dolor mollis quis. Fusce ac tellus gravida, laoreet justo nec, tristique nunc. Duis pulvinar ac mauris viverra dictum. Aenean tincidunt, leo sed faucibus auctor, ipsum odio tincidunt massa, vel bibendum augue tellus a lorem. Sed rhoncus erat nec dui mattis scelerisque. In efficitur lectus at mauris accumsan sollicitudin. Aliquam erat volutpat. Vestibulum gravida, ipsum in malesuada bibendum, leo purus consequat felis, sed tempor tortor mi at dolor.

Integer placerat mattis volutpat. Sed pellentesque dignissim dolor. Sed fringilla lobortis vulputate. Aenean nisl velit, eleifend nec egestas ut, venenatis et lacus. Pellentesque efficitur sodales orci. In hac habitasse platea dictumst. Curabitur at vestibulum risus. Nullam sodales quis enim sed gravida. Praesent quis luctus eros. Pellentesque condimentum erat ante, id venenatis nibh lobortis vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce maximus quis nisi a dapibus.

Donec malesuada quam vitae risus ornare, eget rhoncus quam convallis. Mauris sapien augue, egestas sed sollicitudin ac, tempor ut purus. Integer egestas sagittis laoreet. Sed eget neque at urna iaculis aliquet id quis nunc. Quisque justo eros, sollicitudin eget enim in, viverra vulputate elit. Integer eget euismod neque. Phasellus sapien nisi, mattis eu elit at, faucibus mollis diam. Aliquam erat volutpat. Vivamus id nibh id ex tempor commodo. Nulla vitae posuere lacus. Praesent egestas ex dolor, eget sollicitudin velit faucibus ut. Aliquam quam enim, aliquet quis metus quis, ultricies iaculis magna.`;

export const mockFeaturedNews: Array<News> = [
  {
    title: 'Título da primeira notícia em destaque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum. Pellentesque arcu ligula, lobortis nec ex at, cursus luctus arcu. Etiam sapien ex, ullamcorper in ex non, dapibus posuere augue.',
    imageUrl:
      'https://guitar.com/wp-content/uploads/2023/05/Corey-Taylor-Slipknot@2000x1500.jpg',
    date: '2023-05-07',
    slug: 'teste-primeira-noticia',
    content: loremText,
  },
  {
    title: 'Título segunda notícia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum. Pellentesque arcu ligula, lobortis nec ex at, cursus luctus arcu. Etiam sapien ex, ullamcorper in ex non, dapibus posuere augue.',
    imageUrl:
      'https://i2.wp.com/live-metal.com/wp-content/uploads/2022/09/BRRF22_SlaughterToPrevail6.jpg?ssl=1',
    date: '2023-05-08',
    slug: 'teste-segunda-noticia',
    content: loremText,
  },
  {
    title: 'Título da terceira notícia em destaque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum.',
    imageUrl:
      'https://akamai.sscdn.co/uploadfile/letras/fotos/1/4/9/9/1499af12feac6a1a82772ec66de060d6.jpg',
    date: '2023-05-09',
    slug: 'teste-terceira-noticia',
    content: loremText,
  },
  {
    title: 'Título da quarta notícia em destaque',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum. Pellentesque arcu ligula, lobortis nec ex at, cursus luctus arcu. Etiam sapien ex, ullamcorper in ex non, dapibus posuere augue.',
    imageUrl:
      'https://escolaproarte.com.br//wp-content/uploads/2017/07/dia-mundial-do-rock.jpg',
    date: '2023-05-12',
    slug: 'teste-quarta-noticia',
    content: loremText,
  },
];

export const mockNews: News = {
  slug: 'teste-noticia-geral',
  title: 'Este é o título da notícia',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum.',
  date: '2023-06-14',
  imageUrl:
    'https://www.mlive.com/resizer/PR7ftqxOH_8z7M1eQ4we53REFKA=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/entertainment_impact/photo/22511491-standard.jpg',
  content: loremText,
};
