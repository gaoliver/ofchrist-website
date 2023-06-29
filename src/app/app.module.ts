import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/organism/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { PageTitleComponent } from './components/atoms/page-title/page-title.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MusicComponent } from './pages/music/music.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { PageContentComponent } from './components/atoms/page-content/page-content.component';
import { FooterComponent } from './components/organism/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './components/molecules/event/event.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { HighlightBannerComponent } from './components/molecules/highlight-banner/highlight-banner.component';
import { HighlightTilesComponent } from './components/organism/highlight-tiles/highlight-tiles.component';
import { NewsHeadlineComponent } from './components/molecules/news-headline/news-headline.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { DiscographyComponent } from './pages/discography/discography.component';
import { YoutubePlayerComponent } from './components/atoms/youtube-player/youtube-player.component';
import { PageSectionComponent } from './components/atoms/page-section/page-section.component';

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
    HighlightBannerComponent,
    HighlightTilesComponent,
    NewsHeadlineComponent,
    OurStoryComponent,
    DiscographyComponent,
    YoutubePlayerComponent,
    PageSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    HttpClientModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
