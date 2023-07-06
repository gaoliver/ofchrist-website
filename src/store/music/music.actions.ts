import { createAction, props } from '@ngrx/store';
import { Album } from '@src/app/@types/types';
import { News } from '@src/app/components/@types/types';

// Action Types
export enum AlbumsActionTypes {
  GetAlbums = '[Albums] Get Albums',
  GetAlbumsSuccess = '[Albums] Get Albums Success',
  GetAlbumsError = '[Albums] Get Albums Error',
}

// Actions Interfaces
export interface GetAlbums {
  readonly type: AlbumsActionTypes.GetAlbums;
}
export interface GetAlbumsSuccess {
  readonly type: AlbumsActionTypes.GetAlbumsSuccess;
  payload: Album[];
}
export interface GetAlbumsError {
  readonly type: AlbumsActionTypes.GetAlbumsSuccess;
}

export type AlbumsActions = GetAlbums | GetAlbumsSuccess | GetAlbumsError;

// Actions functions
export const getAlbums = createAction(AlbumsActionTypes.GetAlbums);
export const getAlbumsSuccess = createAction(
  AlbumsActionTypes.GetAlbumsSuccess,
  props<{ list: Album[] }>()
);
export const getAlbumsError = createAction(AlbumsActionTypes.GetAlbumsError);
