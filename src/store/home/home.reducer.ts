import { createReducer, on } from '@ngrx/store';
import {
  getHome,
  getHomeError,
  getHomeSEOSuccess,
  getHomeSuccess,
} from './home.actions';
import { Home } from '@src/app/@types/types';
import { SEOApi } from '@src/app/@types/contentful';

export interface HomeState {
  home: Home;
  seo: SEOApi;
  status: 'loading' | 'error' | 'success' | undefined;
}

export const initialState: HomeState = {
  home: {
    logoUrl: '',
    description: '',
    background: '',
    social_networks: [],
    streaming: [],
    submenu_about_image: '',
    submenu_music_image: ''
  },
  seo: {
    title: '',
    favicon: {
      fields: {
        file: {
          url: '',
          details: {
            size: 0,
            image: {
              width: 0,
              height: 0,
            },
          },
          fileName: '',
          contentType: '',
        },
      },
    },
    description: '',
    tags: [],
    share_image: {
      fields: {
        file: {
          url: '',
          details: {
            size: 0,
            image: {
              width: 0,
              height: 0,
            },
          },
          fileName: '',
          contentType: '',
        },
      },
    },
  },
  status: 'loading',
};

export const homeReducer = createReducer(
  initialState,
  on(getHome, (state) => ({
    ...state,
    status: 'loading' as const,
  })),
  on(getHomeSuccess, (state, { home }) => ({
    ...state,
    home,
    status: 'success' as const,
  })),
  on(getHomeSEOSuccess, (state, { seo }) => ({
    ...state,
    seo,
    status: 'success' as const,
  })),
  on(getHomeError, (state) => ({
    ...state,
    status: 'error' as const,
  }))
);
