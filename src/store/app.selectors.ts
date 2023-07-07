import { createSelector } from '@ngrx/store';
import { HomeState } from './home/home.reducer';
import { getHomeState } from './home/home.selectors';
import { getNewsState } from './news/news.selectors';
import { getMusicState } from './music/music.selectors';

export const getAppLoader = createSelector(
  getHomeState,
  getNewsState,
  getMusicState,
  (state: HomeState) => state.status
);
