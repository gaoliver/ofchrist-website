import { Component } from '@angular/core';
import { HighlightBanner } from '../../@types/types';

@Component({
  selector: 'ul[app-highlight-tiles]',
  templateUrl: './highlight-tiles.component.html',
  styleUrls: ['./highlight-tiles.component.scss'],
})
export class HighlightTilesComponent {
  highlightList: Array<HighlightBanner> = [
    {
      title: 'Título da primeira notícia em destaque',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum. Pellentesque arcu ligula, lobortis nec ex at, cursus luctus arcu. Etiam sapien ex, ullamcorper in ex non, dapibus posuere augue.',
      imageUrl:
        'https://guitar.com/wp-content/uploads/2023/05/Corey-Taylor-Slipknot@2000x1500.jpg',
    },
    {
      title: 'Título da segunda notícia em destaque',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum. Pellentesque arcu ligula, lobortis nec ex at, cursus luctus arcu. Etiam sapien ex, ullamcorper in ex non, dapibus posuere augue.',
      imageUrl:
        'https://i2.wp.com/live-metal.com/wp-content/uploads/2022/09/BRRF22_SlaughterToPrevail6.jpg?ssl=1',
    },
    {
      title: 'Título da terceira notícia em destaque',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum. Pellentesque arcu ligula, lobortis nec ex at, cursus luctus arcu. Etiam sapien ex, ullamcorper in ex non, dapibus posuere augue.',
      imageUrl:
        'https://akamai.sscdn.co/uploadfile/letras/fotos/1/4/9/9/1499af12feac6a1a82772ec66de060d6.jpg',
    },
    {
      title: 'Título da quarta notícia em destaque',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in sapien at leo efficitur rutrum. Pellentesque arcu ligula, lobortis nec ex at, cursus luctus arcu. Etiam sapien ex, ullamcorper in ex non, dapibus posuere augue.',
      imageUrl:
        'https://escolaproarte.com.br//wp-content/uploads/2017/07/dia-mundial-do-rock.jpg',
    },
  ];
}
