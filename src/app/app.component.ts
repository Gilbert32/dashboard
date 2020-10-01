import {Component, OnInit} from '@angular/core';
import {GridSService} from './Services/grid-s.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';

  constructor(public gridService: GridSService) {
  }

  ngOnInit(): void {
  }
}

