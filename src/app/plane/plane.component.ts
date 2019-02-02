import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { PlaneService } from '../services/plane.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css'],
  providers: [AuthenticationService, UserService, PlaneService]
})

export class PlaneComponent implements OnInit {

  constructor(private userService: UserService, private planeService: PlaneService) { }

  pilotSignup(){
    this.planeService.makePilot('-LXerWf63o8UU2kkyalq');
  }

  ngOnInit() {
  }

}
