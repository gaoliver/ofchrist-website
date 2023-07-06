import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { MusicState } from './music.reducer';

export const getAlbumsState = (store: AppState) => store.music;

export const getNewsList = createSelector(
  getAlbumsState,
  (state: MusicState) => state.list
);
