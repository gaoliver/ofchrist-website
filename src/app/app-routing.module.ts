import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { AlbumDetailsComponent } from './components/pages/album-details/album-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DiscographyComponent } from './components/pages/discography/discography.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LyricsComponent } from './components/pages/lyrics/lyrics.component';
import { MusicComponent } from './components/pages/music/music.component';
import { NewsComponent } from './components/pages/news/news.component';
import { OurStoryComponent } from './components/pages/our-story/our-story.component';
import { ShowsComponent } from './components/pages/shows/shows.component';
import { SongDetailsComponent } from './components/pages/song-details/song-details.component';
import { VideosComponent } from './components/pages/videos/videos.component';
import { NewsContentComponent } from './components/pages/news-content/news-content.component';
import { TimelineComponent } from './components/pages/timeline/timeline.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export interface Subpage {
  id: string;
  title: string;
  slug: string;
}

type RoutesWithSubmenu = Route & {
  data?: {
    submenu?: {
      id: string;
      subpages: Array<Subpage>;
    };
  };
};

export const pageRoutes: Array<RoutesWithSubmenu> = [
  {
    path: 'shows',
    title: 'Shows',
    component: ShowsComponent,
  },
  {
    path: 'news',
    title: 'News',
    component: NewsComponent,
  },
  {
    path: 'a-banda',
    title: 'A banda',
    component: AboutComponent,
    data: {
      submenu: {
        id: 'about',
        subpages: [
          {
            id: 'our_story',
            title: 'Nossa história',
            slug: 'a-banda/nossa-historia',
          },
          {
            id: 'timeline',
            title: 'Linha do tempo',
            slug: 'a-banda/linha-do-tempo',
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
      submenu: {
        id: 'music',
        subpages: [
          {
            id: 'lyrics',
            title: 'Letras',
            slug: 'musicas/letras',
          },
          {
            id: 'videos',
            title: 'Videos',
            slug: 'musicas/videos',
          },
          {
            id: 'discography',
            title: 'Discografia',
            slug: 'musicas/discografia',
          },
        ],
      },
    },
  },
  {
    path: 'contato',
    title: 'Contato',
    component: ContactComponent,
  },
];

const routes: Routes = [
  ...pageRoutes,
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
    path: 'a-banda/linha-do-tempo',
    title: 'Linha do tempo',
    component: TimelineComponent,
  },
  {
    path: 'musicas/letras/:songId',
    component: SongDetailsComponent,
  },
  {
    path: 'musicas/album/:albumId',
    component: AlbumDetailsComponent,
  },
  {
    path: 'news/:slug',
    component: NewsContentComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
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
