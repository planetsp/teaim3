import { Component, OnInit } from '@angular/core';
import { Event, Team } from '../../core/database-control.service'

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
    minTeamMembers: 0,
    maxTeamMembers: 100,
    time: null,
    place: '',
    teams: null,
  }
  constructor() { }

  ngOnInit() {
  }

  display(){
    console.log(this.currEvent.name);
  }

}
