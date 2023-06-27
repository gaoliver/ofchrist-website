import { Component, OnInit } from '@angular/core';
import { HighlightBanner } from '@src/app/components/@types/types';

@Component({
  selector: 'main[app-discography].page-container',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.scss'],
})
export class DiscographyComponent implements OnInit {
  discList: Array<HighlightBanner> = [
    {
      title: 'Confiança Pt. 1',
      description: '2018',
      href: '#',
      imageUrl:
        'https://i.scdn.co/image/ab67616d00001e0261a1cf60071eb7877b59c084',
    },
    {
      title: 'Confiança Pt. 2',
      description: '2020',
      href: '#',
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b2735229e5fdd5c833e8b8620e70',
    },
    {
      title: 'Abismo - single',
      description: '2023',
      href: '#',
      imageUrl:
        'https://daniellevieira.com.br/wp-content/uploads/2018/06/amar-abismo.jpg',
    }
  ];

  ngOnInit() {
    this.discList = this.discList.sort(
      (discA, discB) => Number(discB.description) - Number(discA.description)
    );
  }
}
