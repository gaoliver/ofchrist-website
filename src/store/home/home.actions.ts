import { createAction, props } from '@ngrx/store';
import { SEOApi } from '@src/app/@types/contentful';
import { Home } from '@src/app/@types/types';

export enum HomeActionTypes {
  GetHome = '[Home] Get Home',
  GetHomeSuccess = '[Home] Get Home Success',
  GetHomeSEOSuccess = '[Home] Get Home SEO Success',
  GetHomeError = '[Home] Get Home Error',
}

export const getHome = createAction(HomeActionTypes.GetHome);

export const getHomeSuccess = createAction(
  HomeActionTypes.GetHomeSuccess,
  props<{ home: Home }>()
);

export const getHomeSEOSuccess = createAction(
  HomeActionTypes.GetHomeSEOSuccess,
  props<{ seo: SEOApi }>()
);

export const getHomeError = createAction(HomeActionTypes.GetHomeError);
