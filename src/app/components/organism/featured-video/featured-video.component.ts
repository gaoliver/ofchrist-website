import { Component, Input } from '@angular/core';
import { FeaturedVideo } from '../../@types/types';

@Component({
  selector: 'app-featured-video',
  templateUrl: './featured-video.component.html',
  styleUrls: ['./featured-video.component.scss'],
})
export class FeaturedVideoComponent {
  @Input() isMusicVideo?: boolean;
  @Input() videoUrl: string = '';
  @Input() title: string = '';
  @Input() streaming?: FeaturedVideo['streaming'];
}
