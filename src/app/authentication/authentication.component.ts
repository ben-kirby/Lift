import { Component, OnInit, Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { $ } from 'protractor';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})

export class AuthenticationComponent {
  user: Observable<firebase.User>;
  private isLoggedIn: boolean;
  public error: null;
  userNotFound: boolean;

  constructor(public auth: AuthenticationService) {
    this.auth.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  login(email, password) {
    if (this.auth.login(email, password) === false) {
      this.userNotFound = true;
    }
  }

  signUp(email, password) {
    this.userNotFound = false;
    this.auth.signUp(email, password);
  }

  logout() {
    this.userNotFound = false;
    this.auth.logout();
  }
}
