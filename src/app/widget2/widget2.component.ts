import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

export interface DialogData {
  todo: string;
}

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.css']
})
export class Widget2Component {

  constructor(public dialog: MatDialog) {
  }

  List = [];

  todo: string;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.List, event.previousIndex, event.currentIndex);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {todo: this.todo}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.todo = result;
      this.List.push(this.todo);
    });
  }
}
