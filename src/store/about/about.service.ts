import { Injectable } from '@angular/core';
import { contentfulConfig } from '../app.service';
import {
  AboutApi,
  TimelineItemApi,
  VideoApi,
} from '@src/app/@types/contentful';
import { TimelineItem } from '@src/app/@types/types';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private client = contentfulConfig;

  async getAboutService(): Promise<AboutApi> {
    let aboutPage: AboutApi;

    const response = await this.client.getEntries({
      content_type: 'about',
    });

    aboutPage = response.items[0].fields as unknown as AboutApi;

    return aboutPage;
  }

  async getVideosService(props?: { limit: number }): Promise<VideoApi[]> {
    let videosList: VideoApi[];

    const response = await this.client.getEntries({
      content_type: 'video',
      limit: props?.limit,
    });

    videosList = response.items.map(
      (item) => item.fields
    ) as unknown as VideoApi[];

    return videosList;
  }

  async getTimeline(): Promise<TimelineItem[]> {
    let timeline: TimelineItem[];

    const response = await this.client.getEntries({
      content_type: 'timeline',
    });

    const resFields = response.items as unknown as TimelineItemApi[];

    timeline = resFields.map((item) => item.fields);

    return timeline;
  }
}
