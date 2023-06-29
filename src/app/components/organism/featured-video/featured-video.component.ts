import { Component } from '@angular/core';
import { mockVideos } from '@src/app/@dummyData/media';

@Component({
  selector: 'app-featured-video',
  templateUrl: './featured-video.component.html',
  styleUrls: ['./featured-video.component.scss'],
})
export class FeaturedVideoComponent {
  video = mockVideos[0];
}
