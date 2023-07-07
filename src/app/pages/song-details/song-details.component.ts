import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumApi } from '@src/app/@types/contentful';
import { Album, SongLyrics } from '@src/app/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';
import { SetPageTitle } from '@src/app/utils/setPageTitle';
import { MusicService } from '@src/store/music/music.service';
@Component({
  selector: 'main[app-song-details].page-container',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss'],
})
export class SongDetailsComponent implements OnInit {
  songList: SongLyrics | undefined;
  albumList: Album | undefined;
  album: Album | undefined;
  song: SongLyrics | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private contentful: MusicService,
    private setTitle: SetPageTitle
  ) {}

  findSong() {
    const songId = this.activeRoute.snapshot.paramMap.get('songId');

    if (songId) {
      this.contentful.getSongService(songId).then((res) => {
        this.song = res.song;
        this.mapAlbum(res.album);
        this.setTitle.set(res.song.title);
      });
    }
  }

  mapAlbum(album: AlbumApi) {
    this.album = {
      ...album,
      cover: album.cover.fields.file.url,
      streaming: album.streaming.map((s) => s.fields),
      releaseDate: fullDateFormat(album.releaseDate),
      songs: [],
    };
  }

  ngOnInit() {
    this.findSong();

    if (this.album) {
      this.album = {
        ...this.album,
        releaseDate: fullDateFormat(this.album.releaseDate),
      };
    }
  }
}
