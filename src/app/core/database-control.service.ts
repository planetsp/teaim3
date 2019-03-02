import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export interface Team {
  name: string;
  members: Array<string>;
  requirements: Map<string, string>
}
export interface Event {
  name: string;
  organizer: string;
  time: Date;
  place: string;
  minTeamMembers: number;
  maxTeamMembers: number;
  teams: Array<string>;
}
@Injectable({
  providedIn: 'root'
})
export class DatabaseControlService {

  constructor() { }
  public createTeam(team: Team, event: Event){
    //Post team under some event
  }
  /**
   * name
   */
  public createEvent(event: Event) {
    
  }
}
