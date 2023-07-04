import { News } from '@src/app/components/@types/types';

export interface NewsState {
  news: News[];
  isLoading: boolean;
  status: 'loading' | 'error' | 'success' | undefined;
}
