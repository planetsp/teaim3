import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseControlService, Event } from '../../core/database-control.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TeamViewComponent } from 'src/app/team/team-view/team-view.component';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})

export class MyEventsComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public db: DatabaseControlService, public dialog: MatDialog) { }
  events: Event[];

  ngOnInit() {
    this.db.getEvents().subscribe(res => {
      this.events = res.map(e => {
        console.log(e.payload.doc.data())
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Event
      })
    })
    console.log(this.events)
  }
  delete(eventName: string){
    this.db.deleteEvent(eventName);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TeamViewComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
