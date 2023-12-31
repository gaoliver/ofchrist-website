import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/organism/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PageTitleComponent } from './components/atoms/page-title/page-title.component';
import { NewsComponent } from './components/pages/news/news.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { MusicComponent } from './components/pages/music/music.component';
import { ShowsComponent } from './components/pages/shows/shows.component';
import { PageContentComponent } from './components/atoms/page-content/page-content.component';
import { FooterComponent } from './components/organism/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './components/molecules/event/event.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { FeaturedBannerComponent } from './components/molecules/featured-banner/featured-banner.component';
import { FeaturedTilesComponent } from './components/organism/featured-tiles/featured-tiles.component';
import { NewsHeadlineComponent } from './components/molecules/news-headline/news-headline.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { OurStoryComponent } from './components/pages/our-story/our-story.component';
import { DiscographyComponent } from './components/pages/discography/discography.component';
import { YoutubePlayerComponent } from './components/atoms/youtube-player/youtube-player.component';
import { PageSectionComponent } from './components/atoms/page-section/page-section.component';
import { VideosComponent } from './components/pages/videos/videos.component';
import { FeaturedVideoComponent } from './components/organism/featured-video/featured-video.component';
import { LyricsComponent } from './components/pages/lyrics/lyrics.component';
import { SongDetailsComponent } from './components/pages/song-details/song-details.component';
import { StreamingButtonListComponent } from './components/molecules/streaming-button-list/streaming-button-list.component';
import { AlbumDetailsComponent } from './components/pages/album-details/album-details.component';
import { NewsContentComponent } from './components/pages/news-content/news-content.component';
import { SidebarAdComponent } from './components/organism/sidebar-ad/sidebar-ad.component';
import { SidemenuComponent } from './components/organism/sidemenu/sidemenu.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from '@src/store/app.state';
import { TimelineComponent } from './components/pages/timeline/timeline.component';
import { LoadingScreenComponent } from './components/organism/loading-screen/loading-screen.component';
import { LoaderComponent } from './components/atoms/loader/loader.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    PageTitleComponent,
    NewsComponent,
    ContactComponent,
    MusicComponent,
    ShowsComponent,
    PageContentComponent,
    FooterComponent,
    EventComponent,
    ButtonComponent,
    FeaturedBannerComponent,
    FeaturedTilesComponent,
    NewsHeadlineComponent,
    OurStoryComponent,
    DiscographyComponent,
    YoutubePlayerComponent,
    PageSectionComponent,
    VideosComponent,
    FeaturedVideoComponent,
    LyricsComponent,
    SongDetailsComponent,
    StreamingButtonListComponent,
    AlbumDetailsComponent,
    NewsContentComponent,
    SidebarAdComponent,
    SidemenuComponent,
    TimelineComponent,
    LoadingScreenComponent,
    LoaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    YouTubePlayerModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
