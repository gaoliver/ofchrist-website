import { Album, SongLyrics } from '../@types/types';

const generalLyrics = `OUTTA MY WAY\n
OUTTA MY DAY\n
OUT OF YOUR MIND AND INTO MINE\n
\n
INTO NO ONE\n
INTO NOT ONE\n
INTO YOUR STEP BUT OUT OF TIME\n
\n
HEADSTRONG\n
WHAT’S WRONG?\n
I’VE ALREADY HEARD THIS SONG BEFORE\n
YOU ARRIVED, BUT NOW IT’S TIME TO KISS YOUR ASS GOODBYE\n
\n
DRAGGING ME DOWN\n
WHY YOU AROUND?\n
SO USELESS\n
\n
IT AIN’T MY FALL\n
IT AIN’T MY CALL\n
IT AIN’T MY BITCH\n
IT AIN’T MY BITCH\n
\n
DOWN ON THE SUN\n
DOWN AND NO FUN\n
DOWN AND OUT, WHERE THE HELL YOU BEEN?\n
\n
DAMN IT ALL DOWN\n
DAMN IT UNBOUND\n
DAMN IT ALL DOWN TO HELL AGAIN\n
\n
STAND TALL\n
CAN’T FALL\n
NEVER EVEN BEND AT ALL BEFORE\n
YOU ARRIVED, BUT NOW IT’S TIME TO KISS YOUR ASS GOODBYE\n
\n
DRAGGING ME DOWN\n
WHY YOU AROUND?\n
SO USELESS\n
\n
IT AIN’T MY FALL\n
IT AIN’T MY CALL\n
IT AIN’T MY BITCH\n
\n
OUTTA MY WAY\n
\n
OUTTA MY WAY\n
OUTTA MY DAY\n
OUT OF YOUR MIND AND INTO MINE\n
\n
INTO NO ONE\n
INTO NOT ONE\n
INTO YOUR STEP BUT OUT OF TIME\n
\n
HEADSTRONG\n
WHAT’S WRONG?\n
I’VE ALREADY HEARD THIS SONG BEFORE\n
YOU ARRIVED, BUT NOW IT’S TIME TO KISS YOUR ASS GOODBYE\n
AND NOW IT’S TIME TO KISS YOUR ASS GOODBYE\n
\n
DRAGGING ME DOWN\n
WHILE YOU AROUND?\n
SO USELESS\n
\n
IT AIN’T MY FALL\n
IT AIN’T MY CALL\n
IT AIN’T MY BITCH\n
\n
NO WAY BUT DOWN\n
WHY YOU’RE AROUND\n
NO FOOLING\n
\n
IT AIN’T MY SMILE\n
IT AIN’T MY STYLE\n
IT AIN’T MY BITCH\n
OH, IT AIN’T MINE\n
\n
AIN’T MINE\n
YOUR KIND\n
YOU’RE STEPPING OUT OF TIME\n
\n
AIN’T MINE\n
YOUR KIND\n
YOU’RE STEPPING OUT OF TIME\n
\n
TAKING ME DOWN\n
WHY YOU AROUND\n
NO FOOLING\n
\n
IT AIN’T MY FALL\n
IT AIN’T MY CALL\n
IT AIN’T MY BITCH\n
YOU AIN’T MINE`;

export const mockLyrics: Array<SongLyrics> = [
  {
    id: 'abismo',
    title: 'Abismo',
    albumId: 'abismo',
    composers: 'G.A. Oliver, Caio, Willer, Vinni',
    lyrics: generalLyrics,
    youtubeVideo: 'https://www.youtube.com/watch?v=nycN6OZ-szY',
  },
  {
    id: 'oracao-do-justo',
    title: 'Oração do Justo',
    albumId: 'confianca-pt2',
    composers: 'G.A. Oliver, Caio, Willer, Vinni',
    lyrics: generalLyrics,
    youtubeVideo: 'https://www.youtube.com/watch?v=nycN6OZ-szY',
  },
  {
    id: 'confianca',
    title: 'Confiança',
    albumId: 'confianca-pt2',
    composers: 'G.A. Oliver, Caio, Willer, Vinni',
    lyrics: generalLyrics,
    youtubeVideo: 'https://www.youtube.com/watch?v=nycN6OZ-szY',
  },
  {
    id: 'forca-pra-vencer',
    title: 'Força Pra Vencer',
    albumId: 'confianca-pt1',
    composers: 'G.A. Oliver, Caio, Willer, Vinni',
    lyrics: generalLyrics,
    youtubeVideo: 'https://www.youtube.com/watch?v=nycN6OZ-szY',
  },
  {
    id: 'o-mal-que-me-persegue',
    title: 'O Mal Que Me Persegue',
    albumId: 'confianca-pt2',
    composers: 'G.A. Oliver, Caio, Willer, Vinni',
    lyrics: generalLyrics,
    youtubeVideo: 'https://www.youtube.com/watch?v=nycN6OZ-szY',
  },
  {
    id: 'fe',
    title: 'Fé',
    albumId: 'confianca-pt1',
    composers: 'G.A. Oliver, Caio, Willer, Vinni',
    lyrics: generalLyrics,
    youtubeVideo: 'https://www.youtube.com/watch?v=nycN6OZ-szY',
  },
  {
    id: 'livre',
    title: 'Livre',
    albumId: 'confianca-pt1',
    composers: 'G.A. Oliver, Caio, Willer, Vinni',
    lyrics: generalLyrics,
    youtubeVideo: 'https://www.youtube.com/watch?v=nycN6OZ-szY',
  },
  {
    id: 'nao-temas',
    title: 'Não Temas',
    albumId: 'confianca-pt2',
    composers: 'G.A. Oliver, Caio, Willer, Vinni',
    lyrics: generalLyrics,
    youtubeVideo: 'https://www.youtube.com/watch?v=nycN6OZ-szY',
  },
  {
    id: 'posso-viver',
    title: 'Posso Viver',
    albumId: 'confianca-pt2',
    composers: 'G.A. Oliver, Caio, Willer, Vinni',
    lyrics: generalLyrics,
    youtubeVideo: 'https://www.youtube.com/watch?v=nycN6OZ-szY',
  },
];

export const mockAlbums: Array<Album> = [
  {
    title: 'Abismo - single',
    id: 'abismo',
    producer: 'Fulano de Tal',
    recorded: 'Fulano de Tal Records',
    releaseDate: '2023-07-10',
    cover:
      'https://daniellevieira.com.br/wp-content/uploads/2018/06/amar-abismo.jpg',
    streaming: [
      {
        label: 'Spotify',
        icon: 'spotify',
        href: '',
      },
      {
        label: 'Deezer',
        icon: 'deezer',
        href: '',
      },
      {
        label: 'Apple Music',
        icon: 'apple-music',
        href: '',
      },
      {
        label: 'YouTube Music',
        icon: 'youtube-music',
        href: '',
      },
    ],
    songs: []
  },
  {
    title: 'Confiança Pt. 1',
    id: 'confianca-pt1',
    producer: 'Fulano de Tal',
    recorded: 'Fulano de Tal Records',
    releaseDate: '2020-07-10',
    cover: 'https://i.scdn.co/image/ab67616d00001e0261a1cf60071eb7877b59c084',
    streaming: [
      {
        label: 'Spotify',
        icon: 'spotify',
        href: '',
      },
      {
        label: 'Deezer',
        icon: 'deezer',
        href: '',
      },
      {
        label: 'Apple Music',
        icon: 'apple-music',
        href: '',
      },
      {
        label: 'YouTube Music',
        icon: 'youtube-music',
        href: '',
      },
    ],
    songs: []
  },
  {
    title: 'Confiança Pt. 2',
    id: 'confianca-pt2',
    producer: 'Fulano de Tal',
    recorded: 'Fulano de Tal Records',
    releaseDate: '2022-07-10',
    cover: 'https://i.scdn.co/image/ab67616d0000b2735229e5fdd5c833e8b8620e70',
    streaming: [
      {
        label: 'Spotify',
        icon: 'spotify',
        href: '',
      },
      {
        label: 'Deezer',
        icon: 'deezer',
        href: '',
      },
      {
        label: 'Apple Music',
        icon: 'apple-music',
        href: '',
      },
      {
        label: 'YouTube Music',
        icon: 'youtube-music',
        href: '',
      },
    ],
    songs: []
  },
];
