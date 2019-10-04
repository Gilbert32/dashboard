import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Widget1ServiceService {

  List = [1, 2, 3, 4, 5];
  previousRandomValue: number;
  randomValue: number;
  isBigger: boolean;
  randomNumComparator;

  constructor() {
    this.randomNumComparator = () => {
      this.previousRandomValue = this.randomValue;
      this.randomValue = this.randomValue = this.List[Math.floor(Math.random() * this.List.length )];
      if (this.previousRandomValue < this.randomValue) {
        this.isBigger = true;
      } else {
        this.isBigger = false;
      }
    };
    setInterval(this.randomNumComparator, 2000);
  }
}
