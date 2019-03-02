import { Component } from '@angular/core';
import { NavigationModule } from './navigation/navigation.module';
import { DatabaseControlService, Event, Team } from './core/database-control.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teaim3';
  team: Team = {
    name: 'Test',
    members: null,
    requirements: null,
    id: 'nothing',
    eventID: 'nothing',
  }
  event: Event = {
    name: 'test',
    organizer: 'test',
    minTeamMembers: 0,
    maxTeamMembers: 10, 
    time: null,
    place: null,
    teams: [],
    description: ''

  }
  events: Event[] = [];
  constructor(public db:DatabaseControlService ){
    this.db.getEvents().subscribe(res => {
      this.events = res.map(e => {
        console.log(e.payload.doc.data())
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Event
      })
    })
    events.forEach(check =>{
      console.log(check);
    })
  }
  

}
