import { Component } from '@angular/core';
import { mockVideos } from '@src/app/@dummyData/media';

@Component({
  selector: 'main[app-music].page-container',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent {
  videos = mockVideos.shift();
  highlightVideo = mockVideos[0];
}
