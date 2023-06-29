import { Component, Input, OnInit } from '@angular/core';
import { videoIdExtractor } from '@src/app/utils/videoIdExtractor';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
})
export class YoutubePlayerComponent implements OnInit {
  @Input() videoUrl = '';
  @Input() height: number | undefined;
  @Input() width: number | undefined;

  videoId = '';

  ngOnInit() {
    this.videoId = videoIdExtractor(this.videoUrl);
  }
}
