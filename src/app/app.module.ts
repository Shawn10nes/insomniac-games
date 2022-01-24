import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/Header/topnavbar.component';

import { AppComponent } from './app.component';
import { BottomFooterComponent } from './Footer/bottom.footer.component';
import { FooterComponent } from './Footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    BottomFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
