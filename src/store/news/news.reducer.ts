import { createReducer, on } from '@ngrx/store';
import {
  getMoreNewsSuccess,
  getNews,
  getNewsError,
  getNewsSuccess,
} from './news.actions';
import { News } from '@src/app/components/@types/types';

export interface NewsState {
  list: News[];
  isLoading: boolean;
  status: 'loading' | 'error' | 'success' | undefined;
}

export const initialState: NewsState = {
  list: [],
  isLoading: false,
  status: undefined,
};

export const newsReducer = createReducer(
  initialState,
  on(getNews, (state) => ({
    ...state,
    isLoading: true,
    status: 'loading' as const,
  })),
  on(getNewsSuccess, (state, { list }) => ({
    ...state,
    list,
    isLoading: false,
    status: 'success' as const,
  })),
  on(getMoreNewsSuccess, (state, { newList }) => ({
    ...state,
    list: [...state.list, ...newList],
    isLoading: false,
    status: 'success' as const,
  })),
  on(getNewsError, (state) => ({
    ...state,
    isLoading: false,
    status: 'error' as const,
  }))
);
