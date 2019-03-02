import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { EventCreateComponent } from './event-create/event-create.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EventCreateComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class EventModule { }
