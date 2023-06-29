import { Component } from '@angular/core';
import { mockEventList } from '@src/app/@dummyData';
import { Event } from '@src/app/@types/types';
import { dateSort } from '@src/app/utils/dateSort';

@Component({
  selector: 'main[app-shows].page-container',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
})
export class ShowsComponent {
  // TO CHANGE: Use data from Contentful
  eventList: Array<Event> = mockEventList.sort((eventA, eventB) =>
    dateSort(eventA.date, eventB.date)
  );
}
