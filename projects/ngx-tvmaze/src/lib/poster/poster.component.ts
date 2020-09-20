import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { NgxTvmazeService } from './../ngx-tvmaze.service';

@Component({
  selector: 'lib-poster',
  template: `<img *ngIf="posterUrl$ | async as src" [src]="src" />`,
  styles: [`
    :host {
      display: inline-block;
      overflow: hidden;
      border-radius: 4px;
      line-height: 0;
    }
  `]
})
export class PosterComponent implements OnInit {

  @Input() showId: number;
  posterUrl$: Observable<string>;

  constructor(private ngxTvmazeService: NgxTvmazeService) { }

  ngOnInit(): void {
    this.posterUrl$ = this.ngxTvmazeService
      .getShow(this.showId)
      .pipe(map(show => show.image.medium));
  }

}
