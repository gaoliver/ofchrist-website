import { createReducer, on } from '@ngrx/store';
import { getAlbums, getAlbumsError, getAlbumsSuccess } from './music.actions';
import { Album } from '@src/app/@types/types';

export interface MusicState {
  list: Album[];
  isLoading: boolean;
  status: 'loading' | 'error' | 'success' | undefined;
}

export const initialState: MusicState = {
  list: [],
  isLoading: false,
  status: undefined,
};

export const musicReducer = createReducer(
  initialState,
  on(getAlbums, (state) => ({
    ...state,
    isLoading: true,
    status: 'loading' as const,
  })),
  on(getAlbumsSuccess, (state, { list }) => ({
    ...state,
    list,
    isLoading: false,
    status: 'success' as const,
  })),
  on(getAlbumsError, (state) => ({
    ...state,
    isLoading: false,
    status: 'error' as const,
  }))
);
