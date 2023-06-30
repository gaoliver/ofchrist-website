import { Component, OnInit } from '@angular/core';
import { mockLyrics } from '@src/app/@dummyData';
import { SongLyrics } from '@src/app/@types/types';

@Component({
  selector: 'main[app-lyrics].page-container',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
})
export class LyricsComponent implements OnInit {
  songList = mockLyrics;
  groupedSongsList: { key: string; songs: SongLyrics[] }[] = [];
  lettersList: string[] = [];

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

    return groupedByLetter;
  }

  getLettersList() {
    this.groupedSongsList.forEach((group) => {
      this.lettersList.push(group.key);
    });
  }

  ngOnInit() {
    this.groupedSongsList = this.sortAndGroupByLetter(this.songList);
    this.getLettersList();
  }
}
