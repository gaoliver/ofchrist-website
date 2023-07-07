import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { Subpage } from './@types/types';
import { AboutComponent } from './pages/about/about.component';
import { AlbumDetailsComponent } from './pages/album-details/album-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DiscographyComponent } from './pages/discography/discography.component';
import { HomeComponent } from './pages/home/home.component';
import { LyricsComponent } from './pages/lyrics/lyrics.component';
import { MusicComponent } from './pages/music/music.component';
import { NewsComponent } from './pages/news/news.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { SongDetailsComponent } from './pages/song-details/song-details.component';
import { VideosComponent } from './pages/videos/videos.component';
import { NewsContentComponent } from './pages/news-content/news-content.component';

type RoutesWithSubmenu = Route & {
  data: {
    label?: string;
    submenu?: {
      backgroundImage: string;
      subpages: Array<Subpage>;
    };
  };
};

export const pageRoutes: Array<RoutesWithSubmenu> = [
  {
    path: 'shows',
    title: 'Shows',
    component: ShowsComponent,
    data: {
      label: 'Shows',
    },
  },
  {
    path: 'news',
    title: 'News',
    component: NewsComponent,
    data: {
      label: 'News',
    },
  },
  {
    path: 'a-banda',
    title: 'A banda',
    component: AboutComponent,
    data: {
      label: 'A banda',
      submenu: {
        backgroundImage:
          'https://i.scdn.co/image/160cc9b5106d51d061663f314846428e3d9e16f5',
        subpages: [
          {
            id: 'our_story',
            label: 'Nossa história',
            slug: 'a-banda/nossa-historia',
          },
          {
            id: 'members',
            label: 'Integrantes',
            slug: '#',
          },
        ],
      },
    },
  },
  {
    path: 'musicas',
    title: 'Músicas',
    component: MusicComponent,
    data: {
      label: 'Músicas',
      submenu: {
        backgroundImage:
          'https://media.istockphoto.com/id/502088147/photo/nothing-beats-live-music.jpg?s=612x612&w=0&k=20&c=N0RrfR0z1P1Q0DUCJIcEBFV8yxT6xF-wQilMv00O7kA=',
        subpages: [
          {
            id: 'lyrics',
            label: 'Letras',
            slug: 'musicas/letras',
          },
          {
            id: 'videos',
            label: 'Videos',
            slug: 'musicas/videos',
          },
          {
            id: 'discography',
            label: 'Discografia',
            slug: 'musicas/discografia',
          },
        ],
      },
    },
  },
  {
    path: 'contato',
    title: 'Sobre nós',
    component: ContactComponent,
    data: {
      label: 'Contato',
    },
  },
];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'a-banda/nossa-historia',
    title: 'Nossa história',
    component: OurStoryComponent,
  },
  {
    path: 'musicas/discografia',
    title: 'Discografia',
    component: DiscographyComponent,
  },
  {
    path: 'musicas/videos',
    title: 'Videos',
    component: VideosComponent,
  },
  {
    path: 'musicas/letras',
    title: 'Letras',
    component: LyricsComponent,
  },
  {
    path: 'musicas/letras/:songId',
    title: 'Of Christ |',
    component: SongDetailsComponent,
  },
  {
    path: 'musicas/album/:albumId',
    title: 'Of Christ |',
    component: AlbumDetailsComponent,
  },
  {
    path: 'news/:slug',
    title: '',
    component: NewsContentComponent,
  },
  ...pageRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
