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
import { CareernavbarComponent } from './Careers/careernavbar/careernavbar.component';
import { CareerpagecardComponent } from './Careers/careerpagecard/careerpagecard.component';
import { FormComponent } from './Careers/form/form.component';
import { SquarecardComponent } from './Community/squarecard/squarecard.component';
import { HorizontalcardComponent } from './News/horizontalcard/horizontalcard.component';
import { TallcardComponent } from './Community/tallcard/tallcard.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddGameComponent } from './add-game/add-game.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

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
    SupportLayoutComponent,
    CareernavbarComponent,
    CareerpagecardComponent,
    FormComponent,
    SquarecardComponent,
    HorizontalcardComponent,
    TallcardComponent,
    UserInfoComponent,
    AddGameComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
