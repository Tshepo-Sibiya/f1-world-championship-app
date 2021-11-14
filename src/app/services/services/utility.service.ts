import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public seasonListUrl(): string {
    return 'f1/seasons.json';
  }

  public raceResultsUrl(): string {
    return '2008/5/results.json';
  }

  public baseUrl(): string {
    return 'http://ergast.com/api/';
  }


}
