import { createAction, props } from '@ngrx/store';
import { News } from '@src/app/components/@types/types';

export enum NewsActionTypes {
  GetNews = '[News] Get News',
  GetNewsSuccess = '[News] Get News Success',
  GetMoreNews = '[News] Get More News',
  GetMoreNewsSuccess = '[News] Get More News Success',
  GetNewsError = '[News] Get News Error',
}

export const getNews = createAction(NewsActionTypes.GetNews);
export const getMoreNews = createAction(NewsActionTypes.GetMoreNews);

export const getNewsSuccess = createAction(
  NewsActionTypes.GetNewsSuccess,
  props<{ list: News[] }>()
);

export const getMoreNewsSuccess = createAction(
  NewsActionTypes.GetMoreNewsSuccess,
  props<{ newList: News[] }>()
);

export const getNewsError = createAction(NewsActionTypes.GetNewsError);
