import {Component, OnInit} from '@angular/core';
import {Widget1ServiceService} from '../Services/widget1-service.service';
import {GridSService} from '../Services/grid-s.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [Widget1ServiceService, GridSService]
})
export class GridComponent implements OnInit {
  items: Array<any>;
  constructor(private widgetService: Widget1ServiceService, private gridService: GridSService) {
  }

  ngOnInit(): void {
    this.items = this.gridService.getItems();
    console.log(this.items);
  }

}
