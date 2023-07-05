import { Injectable } from '@angular/core';
import { contentfulConfig } from '../app.service';
import { Show } from '@src/app/@types/types';
import { ShowApi } from '@src/app/@types/contentful';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  private client = contentfulConfig;

  async getAllShowsService(): Promise<Show[]> {
    let showList: Show[];

    const response = await this.client.getEntries({
      content_type: 'show',
    });

    const resFields = response.items.map(
      (item) => item.fields
    ) as unknown as ShowApi[];

    showList = resFields.map((show) => ({
      ...show,
      cta: show.cta.fields,
    }));

    return showList;
  }
}
