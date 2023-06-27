import { Component } from '@angular/core';
import { HighlightBanner } from '@src/app/components/@types/types';

@Component({
  selector: 'main[app-about].page-container',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  subpages: Array<HighlightBanner> = [
    {
      title: 'Nossa história',
      href: 'a-banda/nossa-historia',
      imageUrl: 'https://www.inquirer.com/resizer/RJ4KerlLSfX4Odr7i8KzLfCahYE=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/ONSWVZD5QFCETAIQ7AMUERARIQ.jpeg',
    },
    {
      title: 'Integrantes',
      href: '#',
      imageUrl: 'https://blognroll.com.br/wp-content/uploads/2017/11/RSF.jpg',
    }
  ];
}
