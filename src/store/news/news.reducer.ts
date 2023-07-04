import { createReducer, on } from '@ngrx/store';
import { NewsState } from './news.state';
import { getNews, getNewsError, getNewsSuccess } from './news.actions';

export const initialState: NewsState = {
  news: [],
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
