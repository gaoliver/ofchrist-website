import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AlbumApi } from '@src/app/@types/contentful';
import { Album, SongLyrics } from '@src/app/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';
import { MusicService } from '@src/store/music/music.service';

@Component({
  selector: 'main[app-album-details].page-container',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent {
  album: Album = {
    id: '',
    title: '',
    releaseDate: '',
    cover: '',
    producer: '',
    recorded: '',
    streaming: [],
  };
  songs: SongLyrics[] | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private titleService: Title,
    private contentful: MusicService
  ) {}

  findAlbum() {
    const albumId = this.activeRoute.snapshot.paramMap.get('albumId');

    this.contentful.getAlbumService(albumId!).then((album) => {
      if (album) {
        this.mapAlbum(album);
        this.setPageTitle(album.title);
        this.findSongList(album);
      }
    });
  }

  mapAlbum(album: AlbumApi) {
    this.album = {
      ...album,
      cover: album.cover.fields.file.url,
      streaming: album.streaming.map((s) => s.fields),
      releaseDate: fullDateFormat(album.releaseDate),
    };
  }

  findSongList(album: AlbumApi) {
    this.songs = album.songs.map((song) => ({
      ...song.fields,
      albumId: album.id,
    }));
  }

  setPageTitle(title: string) {
    const currTitle = this.titleService.getTitle();
    this.titleService.setTitle(`${currTitle} ${title}`);
  }

  ngOnInit() {
    this.findAlbum();
  }
}
