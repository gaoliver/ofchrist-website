import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { mockAlbums, mockLyrics } from '@src/app/@dummyData';
import { Album, SongLyrics } from '@src/app/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';

@Component({
  selector: 'main[app-album-details].page-container',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent {
  songList = mockLyrics;
  albumList = mockAlbums;

  album: Album = {
    id: '',
    title: '',
    releaseDate: '',
    cover: '',
    producer: '',
    recorded: '',
    streaming: [],
  };
  songs: SongLyrics[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  findAlbum() {
    const albumId = this.activeRoute.snapshot.paramMap.get('albumId');
    const albumFound = this.albumList.find((a) => a.id === albumId);

    if (albumFound) {
      const currTitle = this.titleService.getTitle();
      this.titleService.setTitle(`${currTitle} ${albumFound.title}`);
    }

    if (albumFound) {
      this.album = albumFound;
    }
  }

  filterSongs() {
    const songs = this.songList.filter((s) => s.albumId === this.album?.id);

    if (songs) {
      this.songs = songs;
    }
  }

  ngOnInit() {
    this.findAlbum();
    this.filterSongs();

    if (this.album) {
      this.album = {
        ...this.album,
        releaseDate: fullDateFormat(this.album.releaseDate),
      };
    }
  }
}
