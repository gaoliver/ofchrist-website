import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';
import { AppState } from '@src/store/app.state';
import { Observable } from 'rxjs';
import { SEOApi } from '../@types/contentful';
import { getSEOSelector } from '@src/store/home/home.selectors';

@Injectable({
  providedIn: 'root',
})
export class SetMetaTag {
  seo$: Observable<SEOApi> | undefined;

  constructor(
    private store: Store<AppState>,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.seo$ = this.store.pipe(select(getSEOSelector));
  }

  public updateTitle(title: string) {
    let currTitle: string = '';

    this.store.subscribe((data) => {
      currTitle = data.home.seo.title;
      this.titleService.setTitle(`${title} — ${currTitle}`);
    });
  }

  public updateTags(description: string, keywords: Array<string> = []) {
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({
      name: 'keywords',
      content: keywords.join(', '),
    });
  }
}
