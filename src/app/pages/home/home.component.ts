import { Component } from '@angular/core';

@Component({
  selector: 'main[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  backgroundImage = '../../../assets/images/ofchrist-background-restored.png';
  showVideo = '../../../assets/videos/show-caverna-cut.mp4';
}
