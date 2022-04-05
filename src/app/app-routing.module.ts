import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GamesLayoutComponent } from './Games/games-layout.component';
import { HomeLayoutComponent } from './Home/home-layout.component';
import { CareersLayoutComponent } from './Careers/careers-layout.component';
import { NewsLayoutComponent } from './News/news-layout.component';
import { CommunityLayoutComponent } from './Community/community-layout.component';
import { SupportLayoutComponent } from './Support/support-layout.component';
import { AddGameComponent } from './add-game/add-game.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Games', component: GamesLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'Careers', component: CareersLayoutComponent},
  {path: 'News', component: NewsLayoutComponent},
  {path: 'Community', component: CommunityLayoutComponent},
  {path: 'Support', component: SupportLayoutComponent},
  {path: 'admin', component: AddGameComponent},
  {path: 'auth', component: AuthenticationComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
