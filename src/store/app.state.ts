import { HomeState, homeReducer } from './home/home.reducer';
import { MusicState, musicReducer } from './music/music.reducer';
import { NewsState, newsReducer } from './news/news.reducer';

export interface AppState {
  news: NewsState;
  music: MusicState;
  home: HomeState
}

export const appReducer = {
  news: newsReducer,
  music: musicReducer,
  home: homeReducer
};
