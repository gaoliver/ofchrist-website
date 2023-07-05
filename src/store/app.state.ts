import { NewsState, newsReducer } from './news/news.reducer';

export interface AppState {
  news: NewsState;
}

export const appReducer = {
  news: newsReducer,
};
