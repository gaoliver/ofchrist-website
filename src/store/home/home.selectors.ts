import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { HomeState } from './home.reducer';

export const getHomeState = (store: AppState) => store.home;

export const getHomeSelector = createSelector(
  getHomeState,
  (state: HomeState) => state.home
);
