import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { TeamViewComponent } from './team-view/team-view.component';

@NgModule({
  declarations: [TeamViewComponent],
  imports: [
    CommonModule, 
    AppRoutingModule,
  ]
})
export class TeamModule { }
