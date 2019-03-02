import { Component } from '@angular/core';
import { NavigationModule } from './navigation/navigation.module';
import { AuthService } from './core/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teaim3';
  constructor(public auth: AuthService){

  }
}
