import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceWinnersComponent } from './components/race-winners/race-winners.component';
import { SeasonsComponent } from './components/seasons/seasons.component';

const routes: Routes = [
  { path: 'race-winners', component: RaceWinnersComponent },
  { path: 'seasons', component: SeasonsComponent },
  { path: '',   redirectTo: '/seasons', pathMatch: 'full' },
  { path: '**', component: SeasonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
