import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { EventCreateComponent } from './event-create/event-create.component';
import { SharedModule } from '../shared/shared.module';
import { MyEventsComponent } from './my-events/my-events.component';

@NgModule({
  declarations: [EventCreateComponent, MyEventsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class EventModule { }
