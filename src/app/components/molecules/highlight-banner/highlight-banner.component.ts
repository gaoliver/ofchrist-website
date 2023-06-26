import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-banner',
  templateUrl: './highlight-banner.component.html',
  styleUrls: ['./highlight-banner.component.scss'],
})
export class HighlightBannerComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() date: string = '';
  @Input() href: string = '';
}
