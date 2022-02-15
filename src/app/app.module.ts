import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/Header/topnavbar.component';

import { AppComponent } from './app.component';
import { CareerCardComponent } from './CareerCard/careercard.component';
import { BottomFooterComponent } from './Footer/bottom.footer.component';
import { FooterComponent } from './Footer/footer.component';
import { SMCardComponent } from './Spider-Man Card/smcard.component';
import { WolverineCardComponent } from './Wolverine Card/wolverinecard.component';
import { VideoComponent } from './YouTube Video/video.component';
import { AppRoutingModule } from './app-routing.module';
import { GamesLayoutComponent } from './Games/games-layout.component';
import { HomeLayoutComponent } from './Home/home-layout.component';
import { CareersLayoutComponent } from './Careers/careers-layout.component';
import { NewsLayoutComponent } from './News/news-layout.component';
import { CommunityLayoutComponent } from './Community/community-layout.component';
import { SupportLayoutComponent } from './Support/support-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    BottomFooterComponent,
    VideoComponent,
    SMCardComponent,
    WolverineCardComponent,
    CareerCardComponent,
    GamesLayoutComponent,
    HomeLayoutComponent,
    CareersLayoutComponent,
    NewsLayoutComponent,
    CommunityLayoutComponent,
    SupportLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
