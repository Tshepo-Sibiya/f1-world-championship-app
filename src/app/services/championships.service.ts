import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../shared/services/http.service';
import { HttpConfigService } from '../shared/congfigs/http-config.service';
import { Observable } from 'rxjs';
import { Season } from '../shared/models/season-model';

@Injectable({
  providedIn: 'root'
})
export class ChampionshipsService {

  constructor(private httpClient: HttpClient, private httpService: HttpService) { }

  public getSeasons(): Observable<Season[]> {
    const url = this.httpService.getEndPoint(HttpConfigService.SeasonListUrl);
    return this.httpClient.get<Season[]>(url);
  }

  public getWinnersByYear(year: string): Observable<Season> {
    const url = this.httpService.getEndPoint(year + HttpConfigService.RaceWinnersUrl);
    return this.httpClient.get<Season>(url);
  }



}
