import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-featured-banner',
  templateUrl: './featured-banner.component.html',
  styleUrls: ['./featured-banner.component.scss'],
})
export class FeaturedBannerComponent {
  @Input() title: string = '';
  @Input() description?: string;
  @Input() imageUrl: string = '';
  @Input() date?: string;
  @Input() href?: string;
  @Input() showReadMore?: boolean;
}
