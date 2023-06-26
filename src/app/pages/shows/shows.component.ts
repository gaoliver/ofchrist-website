import { Component } from '@angular/core';
import { Event } from '@src/app/@types/types';
import { dateSort } from '@src/app/utils/dateSort';

@Component({
  selector: 'main[app-shows].page-container',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
})
export class ShowsComponent {
  // TO CHANGE: Use data from Contentful

  eventList: Array<Event> = [
    {
      date: '2023/11/01',
      location: 'São Paulo, SP',
      info: 'Local do evento - nome do evento / informação / endereço do local',
      cta: {
        label: 'ingressos',
        href: '#',
      },
    },
    {
      date: '2023/05/04',
      location: 'Santa Cruz, RJ',
      info: 'Local do evento - nome do evento / informação / endereço do local',
      cta: {
        label: 'Ingressos',
        href: '#',
      },
    },
    {
      date: '2023/07/10',
      location: 'Rio de Janeiro, RJ',
      info: 'Local do evento - nome do evento / informação / endereço do local',
      cta: {
        label: 'Saiba mais',
        href: '#',
      },
    },
    {
      date: '2023/04/02',
      location: 'Campo Grande, RJ',
      info: 'Local do evento - nome do evento / informação / endereço do local',
      cta: {
        label: 'Saiba Mais',
        href: '#',
      },
    },
    {
      date: '2023/05/20',
      location: 'Santa Cruz, RJ',
      info: 'Local do evento - nome do evento / informação / endereço do local',
      cta: {
        label: 'saiba mais',
        href: '#',
      },
    },
    {
      date: '2023/08/15',
      location: 'Rio de Janeiro, RJ',
      info: 'Local do evento - nome do evento / informação / endereço do local',
      cta: {
        label: 'Saiba mais',
        href: '#',
      },
    },
  ].sort((eventA, eventB) => dateSort(eventA.date, eventB.date));
}
