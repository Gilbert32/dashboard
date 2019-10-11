import {Injectable} from '@angular/core';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';

@Injectable({
  providedIn: 'root'
})

export class GridSService {

  constructor() {

    this.items = [{x: 0, y: 0, rows: 2, cols: 2},
      {x: 2, y: 0, rows: 2, cols: 2, minItemCols: 2},
      {x: 4, y: 0, rows: 2, cols: 1, maxItemCols: 5, minItemRows: 2, maxItemRows: 2}];

    try {
      this.items = JSON.parse(localStorage.getItem(this.dash));
    } catch {
      this.items = [{x: 0, y: 0, rows: 2, cols: 2},
        {x: 2, y: 0, rows: 2, cols: 2, minItemCols: 2},
        {x: 4, y: 0, rows: 2, cols: 1, maxItemCols: 5, minItemRows: 2, maxItemRows: 2}];
    }

    this.options = {
      itemChangeCallback: () => {
        GridSService.dashboard = this.items;
      },
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
  static dashboard: GridsterItem[];

  public options: GridsterConfig;
  public items: GridsterItem[];

  dash = 'dashboard';

  Save() {
    console.log(GridSService.dashboard);
    localStorage.setItem(this.dash, JSON.stringify(GridSService.dashboard));
  }
}

