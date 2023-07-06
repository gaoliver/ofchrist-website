import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SetPageTitle {
  constructor(private titleService: Title) {}

  public set(title: string) {
    const currTitle = this.titleService.getTitle();
    this.titleService.setTitle(`${currTitle} ${title}`);
  }
}
