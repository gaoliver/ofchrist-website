import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { MusicState } from './music.reducer';

export const getMusicState = (store: AppState) => store.music;

export const getNewsList = createSelector(
  getMusicState,
  (state: MusicState) => state.list
);
