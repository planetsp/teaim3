import { Component, OnInit } from '@angular/core';
import { Event, Team, DatabaseControlService } from '../../core/database-control.service'

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  reqs: Map<string, string>;
  currEvent: Event = {
    name: '',
    organizer: '',
    minTeamMembers: null,
    maxTeamMembers: null,
    time: null,
    place: '',
    teams: null,
    description:'',
  }
  constructor(public db:DatabaseControlService) { 

  }

  ngOnInit() {
  }

  display(){
    console.log(this.currEvent.name);
  }

  submit(){
    this.db.createEvent(this.currEvent);
  }

}
