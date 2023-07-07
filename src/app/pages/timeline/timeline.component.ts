import { Component, OnInit } from '@angular/core';
import { TimelineItem } from '@src/app/@types/types';
import { dateFormat } from '@src/app/utils/dateFormat';
import { dateSort } from '@src/app/utils/dateSort';
import { AboutService } from '@src/store/about/about.service';

@Component({
  selector: 'main[app-timeline].page-container',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  timeline: TimelineItem[] | undefined;
  groupedYearList: { year: string; items: TimelineItem[] }[] | undefined;

  constructor(private contentful: AboutService) {}

  sortAndGroupByYear(list: TimelineItem[]) {
    const sortedList = list.sort((a, b) => dateSort(b.date, a.date));
    const groupedByYear: typeof this.groupedYearList = [];

    sortedList.forEach((item) => {
      const year = new Date(item.date).getFullYear().toString();
      const timelineGroup = groupedByYear.find((group) => group.year === year);

      const formattedItem = { ...item, date: dateFormat(item.date) };

      if (!timelineGroup) {
        groupedByYear.push({
          year: year,
          items: [formattedItem],
        });
      } else {
        timelineGroup.items.push(formattedItem);
      }
    });

    this.groupedYearList = groupedByYear;
  }

  ngOnInit(): void {
    this.contentful.getTimeline().then((list) => {
      this.sortAndGroupByYear(list);
    });
  }
}
