import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxTvmazeModule } from 'ngx-tvmaze';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTvmazeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
