import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spotlist } from './spotlist/spotlist.interface';

@Injectable()
export class Service {
  endpoint =
    'https://portail-api-data.montpellier3m.fr/offstreetparking?limit=1000';

  constructor(private httpClient: HttpClient) {}

  getSpotlists(): Observable<Spotlist[]> {
    return this.httpClient.get<Spotlist[]>(this.endpoint);
  }
}
