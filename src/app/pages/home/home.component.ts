import { Component } from '@angular/core';
import { env } from 'src/environments/environment';

@Component({
  selector: 'main[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // backgroundImage = '../../../assets/images/ofchrist-background-restored.png';
  showVideo = `${env.baseUrl}/assets/videos/show-caverna-cut.mp4`;
}
