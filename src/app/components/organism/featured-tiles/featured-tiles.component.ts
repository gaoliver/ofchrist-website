import { Component, Input, OnChanges } from '@angular/core';
import { fullDateFormat } from '@src/app/utils/dateFormat';
import { FeaturedBanner } from '../../@types/types';

@Component({
  selector: 'ul[app-featured-tiles]',
  templateUrl: './featured-tiles.component.html',
  styleUrls: ['./featured-tiles.component.scss'],
})
export class FeaturedTilesComponent implements OnChanges {
  @Input() nOfTales: number = 0;
  @Input() talesList: Array<FeaturedBanner> = [];
  @Input() showReadMore?: boolean;

  ngOnChanges() {
    if (this.nOfTales === 0) {
      this.nOfTales = this.talesList.length;
    }

    this.talesList = this.talesList.slice(0, this.nOfTales).map((item) => ({
      ...item,
      date: item.date && fullDateFormat(item.date).toLowerCase(),
    }));
  }
}
