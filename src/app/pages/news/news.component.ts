import { Component, OnInit } from '@angular/core';
import {
  HighlightBanner,
  NewsHeadline,
} from '@src/app/components/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';

@Component({
  selector: 'main[app-news].page-container',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  // TO CHANGE: This list will be replaced by Contentful
  highlightList: Array<HighlightBanner> = [
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
      title: 'Título da segunda notícia',
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

  mockHeadline = {
    title: 'Este é o título da notícia sd sdV sdv sdv asdv sdvasd v',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum.',
    date: '2023-06-14',
    href: '#',
    imageUrl:
      'https://guitar.com/wp-content/uploads/2023/05/Corey-Taylor-Slipknot@2000x1500.jpg',
  };

  newsList: Array<NewsHeadline> = Array(10).fill(this.mockHeadline);

  ngOnInit() {
    this.newsList = [...this.highlightList, ...this.newsList];
    this.newsList = this.newsList.map((item) => ({
      ...item,
      date: fullDateFormat(item.date),
    }));
  }
}
