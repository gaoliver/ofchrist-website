import { Component, Input, OnInit } from '@angular/core';
import { fullDateFormat } from '@src/app/utils/dateFormat';
import { HighlightBanner } from '../../@types/types';

@Component({
  selector: 'ul[app-highlight-tiles]',
  templateUrl: './highlight-tiles.component.html',
  styleUrls: ['./highlight-tiles.component.scss'],
})
export class HighlightTilesComponent implements OnInit {
  @Input() nOfTales: number = 2;
  @Input() talesList: Array<HighlightBanner> = [];

  ngOnInit() {
    this.talesList = this.talesList.slice(0, this.nOfTales).map((item) => ({
      ...item,
      date: fullDateFormat(item.date).toLowerCase(),
    }));
  }
}
