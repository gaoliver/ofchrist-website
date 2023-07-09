import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { VideoApi } from '../@types/contentful';
import { FeaturedVideo } from '../components/@types/types';

export function mapFeatureVideo(video: VideoApi): FeaturedVideo {
  return {
    title: video.description,
    url: video.url,
    streaming: video.streaming?.map((s) => s.fields),
    content: video.content ? documentToHtmlString(video.content) : '',
    cta: video.cta?.fields,
  };
}
