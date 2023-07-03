import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-headline',
  templateUrl: './news-headline.component.html',
  styleUrls: ['./news-headline.component.scss'],
})
export class NewsHeadlineComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() date: string = '';
  @Input() slug: string = '';
}
