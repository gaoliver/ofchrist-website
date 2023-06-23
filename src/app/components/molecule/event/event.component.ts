import { Component, Input, OnInit } from '@angular/core';
import { dateFormat } from '@src/app/utils/dateFormat';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})

export class EventComponent implements OnInit {
  @Input() date: string = '';
  @Input() info: string = '';
  @Input() location: string = '';
  @Input() ctaUrl: string = '';
  @Input() ctaLabel: string = '';

  ngOnInit() {
    this.date = dateFormat(this.date)
  }

}
