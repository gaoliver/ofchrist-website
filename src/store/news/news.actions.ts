import { createAction, props } from '@ngrx/store';
import { News } from '@src/app/components/@types/types';

// Action Types
export enum NewsActionTypes {
  GetNews = '[News] Get News',
  GetNewsSuccess = '[News] Get News Success',
  GetNewsError = '[News] Get News Error',
}

// Actions Interfaces
export interface GetNews {
  readonly type: NewsActionTypes.GetNews;
}
export interface GetNewsSuccess {
  readonly type: NewsActionTypes.GetNewsSuccess;
  payload: News[];
}
export interface GetNewsError {
  readonly type: NewsActionTypes.GetNewsSuccess;
}

export type NewsActions = GetNews | GetNewsSuccess | GetNewsError;

// Actions functions
export const getNews = createAction(NewsActionTypes.GetNews);
export const getNewsSuccess = createAction(
  NewsActionTypes.GetNewsSuccess,
  props<{ news: News[] }>()
);
export const getNewsError = createAction(NewsActionTypes.GetNewsError);
