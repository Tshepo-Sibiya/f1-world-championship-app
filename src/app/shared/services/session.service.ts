import { Injectable } from '@angular/core';
import { Race } from '../models/race-model';
import { Season } from '../models/season-model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}


  setSeasons(season: Season) {
    sessionStorage.setItem('season-key', JSON.stringify(season));

  }

  getSeasons(): Season {
    let data = <Season>JSON.parse(sessionStorage.getItem('season-key') || '{}');
    return data;
  }

  clearSession() {
    sessionStorage.removeItem('season-key');
  }


}
