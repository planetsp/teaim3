import { Component, OnInit } from '@angular/core';
import { DatabaseControlService, Event } from '../../core/database-control.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  constructor(public db: DatabaseControlService) { }
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

}
