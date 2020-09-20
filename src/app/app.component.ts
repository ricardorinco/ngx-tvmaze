import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { NgxTvmazeService, Show } from 'ngx-tvmaze';

@Component({
  selector: 'app-root',
  template: `
    <lib-poster></lib-poster>
    <pre>{{ show$ | async | json }}</pre>
  `
})
export class AppComponent {
  show$: Observable<Show>;

  constructor(private ngxTvmazeService: NgxTvmazeService) {
    this.show$ = this.ngxTvmazeService.getShow(336);
  }
}
