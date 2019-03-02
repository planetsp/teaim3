import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './user/profile-view/profile-view.component';
import { EventCreateComponent } from './event/event-create/event-create.component';
import { MyEventsComponent } from './event/my-events/my-events.component';
import { HomepageComponent } from './navigation/homepage/homepage.component';
import { TeamViewComponent } from './team/team-view/team-view.component';
import { TeamCreateComponent } from './team/team-create/team-create.component';
const routes: Routes = [
  { path: '', component:HomepageComponent},
  { path: 'profile', component: ProfileViewComponent},
  { path: 'newevent', component: EventCreateComponent},
  { path: 'events', component: MyEventsComponent},
  { path: 'event/:id', component: TeamViewComponent},
  { path: 'event/:id/createteam', component: TeamCreateComponent },
  
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
