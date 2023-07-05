import { Component } from '@angular/core';
import { mockEventList } from '@src/app/@dummyData';
import { Show } from '@src/app/@types/types';
import { dateSort } from '@src/app/utils/dateSort';
import { ShowsService } from '@src/store/shows/shows.service';

@Component({
  selector: 'main[app-shows].page-container',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
})
export class ShowsComponent {
  eventList: Array<Show> | undefined;

  constructor(private contentful: ShowsService) {
    this.contentful.getAllShowsService().then((showList) => {
      this.eventList = showList.sort((showA, showB) =>
        dateSort(showA.date, showB.date)
      );
    });
  }
}
