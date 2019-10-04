import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import {Widget1ServiceService} from '../widget1-service.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [Widget1ServiceService]
})
export class GridComponent {

  public options: GridsterConfig;
  public items: GridsterItem[];

  constructor(private widgetService: Widget1ServiceService) {
    this.items = [{x: 0, y: 0, rows: 2, cols: 2},
      {x: 2, y: 0, rows: 2, cols: 2},
      {x: 4, y: 0, rows: 2, cols: 2},
      {x: 6, y: 0, rows: 6, cols: 2}];

    this.options = {
      pushItems: true,
      minCols: 12,
      maxCols: 12,
      minRows: 5,
      fixedRowHeight: 120,
      setGridSize: true,
      mobileBreakpoint: 0,
      displayGrid: 'none',
      gridType: 'fit',
      resizable: {
        enabled: true
      },
      draggable: {
        enabled: true
      }
    };
  }

}
