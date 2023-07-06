import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumApi } from '@src/app/@types/contentful';
import { Album, SongLyrics } from '@src/app/@types/types';
import { fullDateFormat } from '@src/app/utils/dateFormat';
import { SetPageTitle } from '@src/app/utils/setPageTitle';
import { MusicService } from '@src/store/music/music.service';

@Component({
  selector: 'main[app-album-details].page-container',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent {
  album: Album | undefined;
  songs: SongLyrics[] | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private contentful: MusicService,
    private setTitle: SetPageTitle
  ) {}

  findAlbum() {
    const albumId = this.activeRoute.snapshot.paramMap.get('albumId');

    if (albumId) {
      this.contentful.getAlbumService(albumId).then((album) => {
        if (album) {
          this.mapAlbum(album);
          this.findSongList(album);
          this.setTitle.set(album.title);
        }
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

  findSongList(album: AlbumApi) {
    this.songs = album.songs.map((song) => ({
      ...song.fields,
      albumId: album.id,
      lyrics: '',
    }));
  }

  ngOnInit() {
    this.findAlbum();
  }
}
