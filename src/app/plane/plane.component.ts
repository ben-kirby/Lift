import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css'],
  providers: [AuthenticationService, UserService]
})

export class PlaneComponent implements OnInit {

  constructor(private userService: UserService) { }

  testFunction(){
    this.userService.findUserProfile('LXerWf63o8UU2kkyalq');
  }

  ngOnInit() {
  }

}
