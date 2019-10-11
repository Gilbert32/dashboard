<<<<<<< HEAD
import {Location} from '../Models/Location';
import { Component, OnInit } from '@angular/core';
import {Widget3SService} from '../Services/widget3-s.service';
import {GridSService} from '../Services/grid-s.service';
=======
import {Location} from '../Location';
import { Component, OnInit } from '@angular/core';
import {Widget3SService} from '../widget3-s.service';
>>>>>>> 25ea44673f1f1cee4243bd7c127d44136a1b48c7

@Component({
  selector: 'app-widget3',
  templateUrl: './widget3.component.html',
  styleUrls: ['./widget3.component.css'],
  providers: [GridSService]
})
export class Widget3Component implements OnInit {

  loc: Location = {
    city: {
      name: 'Beirut'
    },
    list: null,
  };

  constructor(private myWidgetComponent: Widget3SService, private gridService: GridSService) {
  }

  ngOnInit() {
    this.myWidgetComponent.getWeather(this.loc.city.name).subscribe((response: Location) => {
      console.log(response);
      this.loc = response;
    });
  }
}
