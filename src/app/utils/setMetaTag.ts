import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SetMetaTag {
  constructor(private titleService: Title, private metaService: Meta) {}

  public updateTitle(title: string) {
    const currTitle = this.titleService.getTitle();
    this.titleService.setTitle(`${currTitle} ${title}`);
  }

  public updateTags(description: string, keywords: Array<string> = []) {
    this.metaService.removeTag('description');
    this.metaService.removeTag('keywords');
    this.metaService.addTags([
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
    ]);
  }
}
