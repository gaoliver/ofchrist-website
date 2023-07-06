import { createReducer, on } from '@ngrx/store';
import { getHome, getHomeError, getHomeSuccess } from './home.actions';
import { Home } from '@src/app/@types/types';

export interface HomeState {
  home: Home;
  isLoading: boolean;
  status: 'loading' | 'error' | 'success' | undefined;
}

export const initialState: HomeState = {
  home: {
    description: '',
    background: '',
    social_networks: [],
    streaming: []
  },
  isLoading: false,
  status: undefined,
};

export const homeReducer = createReducer(
  initialState,
  on(getHome, (state) => ({
    ...state,
    isLoading: true,
    status: 'loading' as const,
  })),
  on(getHomeSuccess, (state, { home }) => ({
    ...state,
    home,
    isLoading: false,
    status: 'success' as const,
  })),
  on(getHomeError, (state) => ({
    ...state,
    isLoading: false,
    status: 'error' as const,
  }))
);
