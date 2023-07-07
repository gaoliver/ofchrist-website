import { Component } from '@angular/core';
import { env } from '@src/environments/environment';

@Component({
  selector: 'main[app-not-found].page-container',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  baseUrl = env.baseUrl;
}
