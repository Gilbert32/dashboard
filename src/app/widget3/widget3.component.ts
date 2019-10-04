import {Location} from '../Location';
import { Component, OnInit } from '@angular/core';
import {Widget3SService} from '../widget3-s.service';

@Component({
  selector: 'app-widget3',
  templateUrl: './widget3.component.html',
  styleUrls: ['./widget3.component.css']
})
export class Widget3Component implements OnInit {

  loc: Location = {
    name: 'Beirut',
    wind: null,
    main: null
  };
  weather: any;

  constructor(private myWidgetComponent: Widget3SService) { }

  ngOnInit() {
    console.log('res');
    this.myWidgetComponent.getWeather(this.loc.name).subscribe((response: Location) => {
      console.log(response);
      this.loc = response;
    });
  }
}
