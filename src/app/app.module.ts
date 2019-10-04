import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule, MatToolbarModule} from '@angular/material';
import {GridsterModule} from 'angular-gridster2';
import { GridComponent } from './grid/grid.component';
import { Widget1Component } from './widget1/widget1.component';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {Ng2FittextModule} from 'ng2-fittext';
import { Widget2Component } from './widget2/widget2.component';
import { Widget3Component } from './widget3/widget3.component';
import {Widget3SService} from './widget3-s.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    Widget1Component,
    Widget2Component,
    Widget3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    GridsterModule,
    MatIconModule,
    HttpClientModule,
    Ng2FittextModule,
    MatProgressSpinnerModule
  ],
  providers: [Widget3SService],
  bootstrap: [AppComponent]
})
export class AppModule { }
