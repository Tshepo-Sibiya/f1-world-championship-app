import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionshipsService } from 'src/app/services/championships.service';
import { HttpConfigService } from 'src/app/shared/configs/http-config.service';
import { RaceTable } from 'src/app/shared/models/race-model';

@Component({
  selector: 'app-race-winners',
  templateUrl: './race-winners.component.html',
  styleUrls: ['./race-winners.component.css'],
})
export class RaceWinnersComponent implements OnInit {
  season!: string;
  races!: any[];
  loading!:boolean;
  position!: string;
  raceTable!: RaceTable;
  constructor(
    private championshipsService: ChampionshipsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getWinners('2005');
    this.route.queryParams.subscribe((params: any) => {
      this.season = params.season;
    });
  }

  getWinners(season: string) {
    this.loading = true;
    this.championshipsService.getWinnersByYear(season).subscribe((response: any) => {
      this.races = response.MRData.RaceTable.Races;
      this.raceTable = response.MRData;
      this.raceTable.position
      this.loading = false;
    });
  }
}
