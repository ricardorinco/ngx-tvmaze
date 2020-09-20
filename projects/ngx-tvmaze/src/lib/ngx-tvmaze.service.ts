import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Show } from './models/tvmaze.models';

@Injectable({ providedIn: 'root' })
export class NgxTvmazeService {

  private readonly apiRoot = 'https://api.tvmaze.com';

  constructor(private httpClient: HttpClient) { }

  getShow(id: number): Observable<Show> {
    const url = `${this.apiRoot}/shows/${id}`;
    return this.httpClient.get<Show>(url);
  }

}
