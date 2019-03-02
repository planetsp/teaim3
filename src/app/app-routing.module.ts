import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './user/profile-view/profile-view.component';
import { EventCreateComponent } from './event/event-create/event-create.component';
const routes: Routes = [
  { path: '', component: ProfileViewComponent},
  { path: 'newevent', component: EventCreateComponent}
  
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
