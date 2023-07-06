import { createAction, props } from '@ngrx/store';
import { Home } from '@src/app/@types/types';

// Action Types
export enum HomeActionTypes {
  GetHome = '[Home] Get Home',
  GetHomeSuccess = '[Home] Get Home Success',
  GetHomeError = '[Home] Get Home Error',
}

// Actions Interfaces
export interface GetHome {
  readonly type: HomeActionTypes.GetHome;
}
export interface GetHomeSuccess {
  readonly type: HomeActionTypes.GetHomeSuccess;
  payload: Home;
}
export interface GetHomeError {
  readonly type: HomeActionTypes.GetHomeSuccess;
}

export type HomeActions = GetHome | GetHomeSuccess | GetHomeError;

// Actions functions
export const getHome = createAction(HomeActionTypes.GetHome);
export const getHomeSuccess = createAction(
  HomeActionTypes.GetHomeSuccess,
  props<{ home: Home }>()
);
export const getHomeError = createAction(HomeActionTypes.GetHomeError);
