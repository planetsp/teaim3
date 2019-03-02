import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { ProfileViewComponent } from './user/profile-view/profile-view.component';

const routes: Routes = [
  { path: '', component: ProfileViewComponent},
]
@NgModule({
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
