import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { Subpage } from './@types/types';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { NewsComponent } from './pages/news/news.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { ShowsComponent } from './pages/shows/shows.component';

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
    title: 'Of Christ | Shows',
    component: ShowsComponent,
    data: {
      label: 'Shows',
    },
  },
  {
    path: 'news',
    title: 'Of Christ | News',
    component: NewsComponent,
    data: {
      label: 'News',
    },
  },
  {
    path: 'a-banda',
    title: 'Of Christ | A banda',
    component: AboutComponent,
    data: {
      label: 'A banda',
      submenu: {
        backgroundImage:
          'https://i.scdn.co/image/160cc9b5106d51d061663f314846428e3d9e16f5',
        subpages: [
          {
            label: 'Nossa história',
            slug: 'a-banda/nossa-historia',
          },
          {
            label: 'Integrantes',
            slug: '#',
          },
        ],
      },
    },
  },
  {
    path: 'musicas',
    title: 'Of Christ | Músicas',
    component: MusicComponent,
    data: {
      label: 'Músicas',
      submenu: {
        backgroundImage:
          'https://media.istockphoto.com/id/502088147/photo/nothing-beats-live-music.jpg?s=612x612&w=0&k=20&c=N0RrfR0z1P1Q0DUCJIcEBFV8yxT6xF-wQilMv00O7kA=',
        subpages: [
          {
            label: 'Letras',
            slug: '#',
          },
          {
            label: 'Discografia',
            slug: '#',
          },
        ],
      },
    },
  },
  {
    path: 'contato',
    title: 'Of Christ | Sobre nós',
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
    title: 'Of Christ | Nossa história',
    component: OurStoryComponent,
  },
  ...pageRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
