import { createReducer, on } from '@ngrx/store';
import {
  getMoreNews,
  getMoreNewsSuccess,
  getNews,
  getNewsError,
  getNewsSuccess,
} from './news.actions';
import { News } from '@src/app/components/@types/types';

export interface NewsState {
  list: News[];
  status: 'loading' | 'error' | 'success' | undefined;
  loadMoreStatus: 'loading' | 'error' | 'success' | undefined;
}

export const initialState: NewsState = {
  list: [],
  status: undefined,
  loadMoreStatus: undefined,
};

export const newsReducer = createReducer(
  initialState,
  on(getNews, (state) => ({
    ...state,
    status: 'loading' as const,
  })),
  on(getNewsSuccess, (state, { list }) => ({
    ...state,
    list,
    status: 'success' as const,
  })),
  on(getMoreNews, (state) => ({
    ...state,
    loadMoreStatus: 'loading' as const,
  })),
  on(getMoreNewsSuccess, (state, { newList }) => ({
    ...state,
    list: [...state.list, ...newList],
    loadMoreStatus: 'success' as const,
  })),
  on(getNewsError, (state) => ({
    ...state,
    status: 'error' as const,
  }))
);
