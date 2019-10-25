import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatTableModule, MatToolbarModule} from '@angular/material';
import {GridsterModule} from 'angular-gridster2';
import {GridComponent} from './grid/grid.component';
import {Widget1Component} from './widget1/widget1.component';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {Ng2FittextModule} from 'ng2-fittext';
import {Widget2Component} from './widget2/widget2.component';
import {Widget3Component} from './widget3/widget3.component';
import {Widget3SService} from './Services/widget3-s.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DialogComponent} from './dialog/dialog.component';
import {DynamicDirective} from './Directives/dynamic.directive';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    Widget1Component,
    Widget2Component,
    Widget3Component,
    DialogComponent,
    DynamicDirective
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
    MatProgressSpinnerModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    MatCheckboxModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [Widget3SService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {
}
