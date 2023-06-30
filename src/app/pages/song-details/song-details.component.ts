import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { mockLyrics } from '@src/app/@dummyData';
import { SongLyrics } from '@src/app/@types/types';

@Component({
  selector: 'main[app-song-details].page-container',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss'],
})
export class SongDetailsComponent implements OnInit {
  songList = mockLyrics;
  song: SongLyrics | undefined;
  constructor(
    private activeRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    const songSlug = this.activeRoute.snapshot.paramMap.get('slug');
    const foundSong = this.songList.find((s) => s.slug === songSlug);

    if (foundSong) {
      const currTitle = this.titleService.getTitle();
      this.titleService.setTitle(`${currTitle} ${foundSong.title}`);
    }

    this.song = foundSong;
  }
}
