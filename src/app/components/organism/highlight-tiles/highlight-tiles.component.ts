import { Component, Input, OnInit } from '@angular/core';
import { fullDateFormat } from '@src/app/utils/dateFormat';
import { HighlightBanner } from '../../@types/types';

@Component({
  selector: 'ul[app-highlight-tiles]',
  templateUrl: './highlight-tiles.component.html',
  styleUrls: ['./highlight-tiles.component.scss'],
})
export class HighlightTilesComponent implements OnInit {
  @Input() nOfTales: number = 0;
  @Input() talesList: Array<HighlightBanner> = [];
  @Input() showReadMore?: boolean;

  ngOnInit() {
    if (this.nOfTales === 0) {
      this.nOfTales = this.talesList.length;
    }

    this.talesList = this.talesList.slice(0, this.nOfTales).map((item) => ({
      ...item,
      date: item.date && fullDateFormat(item.date).toLowerCase(),
    }));
  }
}
