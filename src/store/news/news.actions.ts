import { createAction, props } from '@ngrx/store';
import { News } from '@src/app/components/@types/types';

// Action Types
export enum NewsActionTypes {
  GetNews = '[News] Get News',
  GetNewsSuccess = '[News] Get News Success',
  GetMoreNewsSuccess = '[News] Get More News Success',
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

export interface GetMoreNewsSuccess {
  readonly type: NewsActionTypes.GetMoreNewsSuccess;
  payload: News[];
}
export interface GetNewsError {
  readonly type: NewsActionTypes.GetNewsSuccess;
}

export type NewsActions =
  | GetNews
  | GetNewsSuccess
  | GetMoreNewsSuccess
  | GetNewsError;

// Actions functions
export const getNews = createAction(NewsActionTypes.GetNews);
export const getNewsSuccess = createAction(
  NewsActionTypes.GetNewsSuccess,
  props<{ list: News[] }>()
);
export const getMoreNewsSuccess = createAction(
  NewsActionTypes.GetMoreNewsSuccess,
  props<{ newList: News[] }>()
);
export const getNewsError = createAction(NewsActionTypes.GetNewsError);
