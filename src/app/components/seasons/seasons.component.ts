import { Component, OnInit } from '@angular/core';
import { ChampionshipsService } from 'src/app/services/championships.service';
import { HttpConfigService } from 'src/app/shared/congfigs/http-config.service';
import {
  MRData,
  Season,
  SeasonElement,
} from 'src/app/shared/models/season-model';
import { HttpService } from 'src/app/shared/services/http.service';
import { faInfoCircle, faList, faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css'],
})
export class SeasonsComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  faList = faList;
  faGlobeAfrica = faGlobeAfrica;
  seasons: SeasonElement[] | undefined;
  loading!: boolean;
  constructor(
    private championshipsService: ChampionshipsService,
    private router: Router,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.getSeasons();
    console.log('Fetching seasons...');
  }

  getSeasons() {
    this.loading = true;
    let data: Season;
    let sessionData = this.sessionService.getSeasons();
    if (sessionData.MRData != undefined) {
      data = this.sessionService.getSeasons();
      this.seasons = this.sortSeasons(data.MRData);
      this.loading = false;
    } else {
      this.championshipsService.getSeasons().subscribe(
        (response: any) => {
          data = <Season>response;
          this.seasons = this.sortSeasons(data.MRData);
          this.loading = false;
          this.sessionService.setSeasons(data);
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
    }
  }

  sortSeasons(seasons: MRData): SeasonElement[] {
    return seasons.SeasonTable.Seasons.filter(
      (season) => season.season > 2004
    ).sort((a, b) => (a.season < b.season ? 1 : -1));
  }

  viewDetails(season: number): void {
    this.router.navigate(['/race-winners'], {
      queryParams: { season: season },
    });
  }
}
