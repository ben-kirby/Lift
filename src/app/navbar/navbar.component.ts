import { Component, Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthenticationService]
})

export class NavbarComponent {
  private user: Observable<firebase.User>;
  private isLoggedIn: boolean;

  constructor(public auth: AuthenticationService) {
    this.auth.user.subscribe(user => {
      if (user == null){
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  }
