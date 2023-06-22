import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';

export const pageRoutes: Routes = [
  {
    path: 'shows',
    title: 'Of Christ | Shows',
    component: NewsComponent,
    data: {
      label: 'Shows'
    }
  },
  {
    path: 'news',
    title: 'Of Christ | News',
    component: NewsComponent,
    data: {
      label: 'News'
    }
  },
  {
    path: 'a-banda',
    title: 'Of Christ | A banda',
    component: AboutComponent,
    data: {
      label: 'A banda'
    }
  },
  {
    path: 'musicas',
    title: 'Of Christ | Músicas',
    component: AboutComponent,
    data: {
      label: 'Músicas'
    }
  },
  {
    path: 'contato',
    title: 'Of Christ | Sobre nós',
    component: AboutComponent,
    data: {
      label: 'Contato'
    }
  },
];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  ...pageRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
