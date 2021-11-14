import { Injectable } from '@angular/core';
import { HttpConfigService } from '../configs/http-config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  public getEndPoint(endpoint: string): string {
    return HttpConfigService.BaseUrl + endpoint;
  }

}
