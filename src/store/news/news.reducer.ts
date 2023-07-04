import { createReducer, on } from '@ngrx/store';
import { getNews, getNewsError, getNewsSuccess } from './news.actions';
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
  on(getNewsSuccess, (state, { news }) => ({
    ...state,
    news,
    isLoading: false,
    status: 'success' as const,
  })),
  on(getNewsError, (state) => ({
    ...state,
    isLoading: false,
    status: 'error' as const,
  }))
);
