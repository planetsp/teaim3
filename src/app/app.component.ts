import { Component } from '@angular/core';
import { NavigationModule } from './navigation/navigation.module';
import { DatabaseControlService, Event } from './core/database-control.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teaim3';
  event2: Event = {
    name: 'test',
    organizer: ' test',
    time: null,
    teams: null,
    minTeamMembers: 0,
    maxTeamMembers: 100, 
    place: 'string',
    description: ''

  }
  constructor(db:DatabaseControlService ){
  }

}
