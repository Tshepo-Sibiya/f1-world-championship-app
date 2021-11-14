import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonListComponent } from './components/season-list/season-list.component';
import { RaceWinnersComponent } from './components/race-winners/race-winners.component';



@NgModule({
  declarations: [
    SeasonListComponent,
    RaceWinnersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class F1ChampionshipModuleModule { }
