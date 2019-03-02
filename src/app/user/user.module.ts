import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ProfileViewComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }
