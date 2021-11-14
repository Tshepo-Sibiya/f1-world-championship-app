import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { RaceWinnersComponent } from './components/race-winners/race-winners.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonsComponent,
    RaceWinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
