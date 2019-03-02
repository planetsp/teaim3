import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

export interface Team {
  id: string;
  name: string;
  members: Array<string>;
  requirements: Map<string, string>
  eventID: string;
}
export interface Event {
  id?: string;
  name: string;
  organizer: string;
  time: Date;
  place: string;
  minTeamMembers: number;
  maxTeamMembers: number;
  teams: Array<Team>;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class DatabaseControlService {
  items:any;
  constructor(private afs: AngularFirestore) { }
  public createTeam(team: Team, event: Event){
    event.teams.push(team);
    this.deleteEvent(event.id);
    this.afs.doc('events/' + event.id).update(event);
  }
  public getTeam(teamID: string, eventID: string){

  }
  



  public createEvent(event: Event) {
   this.afs.collection('events').doc(event.name).set(event)
  }
  public getEvents(){
    return this.afs.collection('events').snapshotChanges();
  }
  public getEvent(eventID: string){
    return this.afs.collection('events/' + eventID).snapshotChanges();
  }
  deleteEvent(eventId: string){
    this.afs.doc('events/' + eventId).delete();
  }
}
