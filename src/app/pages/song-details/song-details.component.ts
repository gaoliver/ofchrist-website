import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { mockAlbums, mockLyrics } from '@src/app/@dummyData';
import { Album, SongLyrics } from '@src/app/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';

@Component({
  selector: 'main[app-song-details].page-container',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss'],
})
export class SongDetailsComponent implements OnInit {
  songList = mockLyrics;
  albumList = mockAlbums;

  album: Album | undefined;
  song: SongLyrics | undefined;
  constructor(
    private activeRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  findSong() {
    const songSlug = this.activeRoute.snapshot.paramMap.get('slug');
    const foundSong = this.songList.find((s) => s.slug === songSlug);

    if (foundSong) {
      const currTitle = this.titleService.getTitle();
      this.titleService.setTitle(`${currTitle} ${foundSong.title}`);
    }

    return foundSong;
  }

  findAlbum() {
    const album = this.albumList.find((a) => a.id === this.song?.albumId);

    return album;
  }

  ngOnInit() {
    this.song = this.findSong();
    this.album = this.findAlbum();

    if (this.album) {
      this.album = {
        ...this.album,
        releaseDate: fullDateFormat(this.album.releaseDate),
      };
    }

    console.log(this.song, this.album);
  }
}
