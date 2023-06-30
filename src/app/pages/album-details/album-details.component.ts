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

  album: Album | undefined;
  songs: SongLyrics | undefined;

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

    return albumFound;
  }

  filterSongs() {
    const songs = this.songList.find((s) => s.albumId === this.album?.id);

    return songs;
  }

  ngOnInit() {
    this.album = this.findAlbum();
    this.songs = this.filterSongs();

    if (this.album) {
      this.album = {
        ...this.album,
        releaseDate: fullDateFormat(this.album.releaseDate),
      };
    }
  }
}
