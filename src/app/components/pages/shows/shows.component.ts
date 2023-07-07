import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Show } from '@src/app/@types/types';
import { dateSort } from '@src/app/utils/dateSort';
import { SetMetaTag } from '@src/app/utils/setMetaTag';
import { ShowsService } from '@src/store/shows/shows.service';

@Component({
  selector: 'main[app-shows].page-container',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
})
export class ShowsComponent implements OnInit {
  eventList: Array<Show> | undefined;
  title: string | undefined;

  constructor(
    private contentful: ShowsService,
    private pageTitle: Title,
    private setMeta: SetMetaTag
  ) {
    this.contentful.getAllShowsService().then((showList) => {
      this.eventList = showList.sort((showA, showB) =>
        dateSort(showA.date, showB.date)
      );
    });
  }

  ngOnInit(): void {
    this.title = this.pageTitle.getTitle();
    this.setMeta.updateTitle(this.title);
  }
}
