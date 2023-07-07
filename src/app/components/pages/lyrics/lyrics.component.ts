import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SongLyricsApi } from '@src/app/@types/contentful';
import { SongLyrics } from '@src/app/@types/types';
import { SetMetaTag } from '@src/app/utils/setMetaTag';
import { MusicService } from '@src/store/music/music.service';

@Component({
  selector: 'main[app-lyrics].page-container',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit {
  songList: SongLyrics[] | undefined;
  groupedSongsList: { key: string; songs: SongLyrics[] }[] | undefined;
  lettersList: string[] = [];

  constructor(
    private contentful: MusicService,
    private pageTitle: Title,
    private setMeta: SetMetaTag
  ) {}

  mapSongList(list: SongLyricsApi[]) {
    let mappedSongs = list.map((song) => ({ ...song.fields, albumId: '' }));

    this.songList = mappedSongs;
    this.sortAndGroupByLetter(mappedSongs);
  }

  onSearchSong(query: string) {
    if (this.songList) {
      const filteredList = this.songList.filter((song) =>
        song.title.toLowerCase().match(query.toLowerCase())
      );

      this.sortAndGroupByLetter(filteredList);
    }
  }

  sortAndGroupByLetter(list: SongLyrics[]) {
    const sortedList = list.sort((a, b) => a.title.localeCompare(b.title));
    const groupedByLetter: typeof this.groupedSongsList = [];

    sortedList.forEach((song) => {
      const letter = song.title.charAt(0).toLowerCase();
      const songsGroup = groupedByLetter.find((group) => group.key === letter);

      if (!songsGroup) {
        groupedByLetter.push({
          key: letter,
          songs: [song],
        });
      } else {
        songsGroup.songs.push(song);
      }
    });

    this.groupedSongsList = groupedByLetter;
    this.getLettersList();
  }

  getLettersList() {
    this.lettersList = [];

    this.groupedSongsList?.forEach((group) => {
      this.lettersList.push(group.key);
    });
  }

  updatePageTitle() {
    const title = this.pageTitle.getTitle();
    this.setMeta.updateTitle(title);
  }

  ngOnInit() {
    this.contentful.getAllSongs().then((list) => {
      this.mapSongList(list);
    });

    this.updatePageTitle()
  }
}
