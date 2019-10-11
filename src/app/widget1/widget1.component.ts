import { Component, OnInit } from '@angular/core';
import { Widget1ServiceService} from '../Services/widget1-service.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.css'],
  providers: [Widget1ServiceService]
})

export class Widget1Component implements OnInit {

  constructor(private widgetService: Widget1ServiceService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/trending_up-24px.svg'));

    iconRegistry.addSvgIcon(
      'down',
      sanitizer.bypassSecurityTrustResourceUrl('assets/trending_down-24px.svg'));
  }

  ngOnInit(): void {
  }

}
