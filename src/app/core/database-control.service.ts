import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export interface Team {

}
export interface Event {

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
