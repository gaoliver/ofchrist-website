import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { NewsState } from './news.reducer';

export const getNewsState = (store: AppState) => store.news;

export const getNewsSelector = createSelector(
  getNewsState,
  (state: NewsState) => state.list
);
