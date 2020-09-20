import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PosterComponent } from './poster/poster.component';

@NgModule({
  declarations: [PosterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PosterComponent]
})
export class NgxTvmazeModule { }
