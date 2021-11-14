import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceWinnersComponent } from './f1-championship-module/components/race-winners/race-winners.component';
import { SeasonListComponent } from './f1-championship-module/components/season-list/season-list.component';

const routes: Routes = [
  { path: 'race-winners', component: RaceWinnersComponent },
  { path: 'seasons', component: SeasonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
