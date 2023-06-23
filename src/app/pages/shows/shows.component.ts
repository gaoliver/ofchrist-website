import { Component } from '@angular/core';
import { Event } from '@src/app/@types/types';
import { dateSort } from '@src/app/utils/dateSort';

@Component({
  selector: 'main[app-shows].page-container',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
})
export class ShowsComponent {
  eventList: Array<Event> = [
    {
      date: '2023/11/01',
      location: 'São Paulo, SP',
      info: 'Igreja Batista Aliança - Bairro Nobre',
      cta: {
        label: 'ingressos',
        href: '#',
      },
    },
    {
      date: '2023/05/04',
      location: 'Santa Cruz, RJ',
      info: 'Clube dos Aliados - com Oficina G3 e Alva',
      cta: {
        label: 'Ingressos',
        href: '#',
      },
    },
    {
      date: '2023/07/10',
      location: 'Rio de Janeiro, RJ',
      info: 'Igreja Batista Oásis - Santa Cruz.',
      cta: {
        label: 'Saiba mais',
        href: '#',
      },
    },
    {
      date: '2023/04/02',
      location: 'Campo Grande, RJ',
      info: 'ParkShopping - Show de Inverno',
      cta: {
        label: 'Saiba Mais',
        href: '#',
      },
    },
    {
      date: '2023/05/20',
      location: 'Santa Cruz, RJ',
      info: 'Igreja Presbiteriana de Santa Cruz - Culto dos jovens',
      cta: {
        label: 'saiba mais',
        href: '#',
      },
    },
    {
      date: '2023/08/15',
      location: 'Rio de Janeiro, RJ',
      info: 'Igreja Batista do Recreio - Recreio dos Bandeirantes, RJ',
      cta: {
        label: 'Saiba mais',
        href: '#',
      },
    },
  ].sort((eventA, eventB) => dateSort(eventA.date, eventB.date));
}
