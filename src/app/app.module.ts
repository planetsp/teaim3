import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { TeamModule } from './team/team.module';
import { EventModule } from './event/event.module';
import { SharedModule } from './shared/shared.module';
import { NavigationModule } from './navigation/navigation.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from '@angular/fire';
import { TeamViewComponent } from './team/team-view/team-view.component';
var config = {
  apiKey: "AIzaSyAI72fYb2Y-eC9VLoKA7gKEon_zOARKwFA",
  authDomain: "teaim-233300.firebaseapp.com",
  databaseURL: "https://teaim-233300.firebaseio.com",
  projectId: "teaim-233300",
  storageBucket: "teaim-233300.appspot.com",
  messagingSenderId: "15257677331"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UserModule,
    TeamModule,
    EventModule,
    SharedModule,
    NavigationModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    CoreModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
