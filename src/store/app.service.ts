import { env } from '@src/environments/environment';
import { createClient } from 'contentful';

export const contentfulConfig = createClient({
  space: env.API_SPACE,
  environment: env.API_ENV,
  accessToken: env.API_KEY,
});
