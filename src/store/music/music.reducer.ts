import { createReducer, on } from '@ngrx/store';
import { getAlbums, getAlbumsError, getAlbumsSuccess } from './music.actions';
import { Album } from '@src/app/@types/types';

export interface MusicState {
  list: Album[];
  status: 'loading' | 'error' | 'success' | undefined;
}

export const initialState: MusicState = {
  list: [],
  status: undefined,
};

export const musicReducer = createReducer(
  initialState,
  on(getAlbums, (state) => ({
    ...state,
    status: 'loading' as const,
  })),
  on(getAlbumsSuccess, (state, { list }) => ({
    ...state,
    list,
    status: 'success' as const,
  })),
  on(getAlbumsError, (state) => ({
    ...state,
    status: 'error' as const,
  }))
);
