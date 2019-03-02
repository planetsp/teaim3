import { Component, OnInit } from '@angular/core';
import { Team, DatabaseControlService } from 'src/app/core/database-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
  currteam:Team = {
    id: null,
    name: null,
    members: null,
    requirements: null,
    eventID: null,
  }
  constructor(public router: Router, public db: DatabaseControlService) { }

  ngOnInit() {
  }
  submit(){
    this.router.navigateByUrl('');
  }
  homeback(){
    this.router.navigateByUrl('');
  }

}
