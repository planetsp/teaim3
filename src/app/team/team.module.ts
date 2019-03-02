import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { TeamViewComponent } from './team-view/team-view.component';
import { SharedModule } from '../shared/shared.module';
import { TeamCreateComponent } from './team-create/team-create.component';

@NgModule({
  declarations: [TeamViewComponent, TeamCreateComponent],
  imports: [
    CommonModule, 
    AppRoutingModule,
    SharedModule,
  ], 
  exports: [TeamViewComponent],
})
export class TeamModule { }
