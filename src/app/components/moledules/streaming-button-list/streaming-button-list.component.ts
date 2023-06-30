import { Component, Input } from '@angular/core';
import { SocialNetwork } from '../../@types/types';

@Component({
  selector: 'app-streaming-button-list',
  templateUrl: './streaming-button-list.component.html',
  styleUrls: ['./streaming-button-list.component.scss'],
})
export class StreamingButtonListComponent {
  @Input() streamingList: Array<SocialNetwork> = [];
  @Input() label: string | undefined;
}
