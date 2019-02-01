import { Component, OnInit, Injectable } from '@angular/core';
import { AuthenticationService } from "../services/authentication.service";
import { Observable } from 'rxjs/Observable';
import { $ } from 'protractor';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})

export class AuthenticationComponent {
  private user: Observable<firebase.User>;
  private isLoggedIn: boolean;
  private userName: string;
  private uid: string;
  public error: null;

  constructor(public auth: AuthenticationService) {
    this.auth.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
        this.uid = user.uid;
      }
    });
  }

  login(email, password) {
    this.auth.login(email, password);
  }

  signUp(email, password) {
    this.auth.signUp(email, password);
  }

  logout() {
    this.auth.logout();
  }
}

export interface Roles {
  reader: boolean;
  admin?: boolean;
  pilot?: boolean;
  passenger?: boolean;
}

export class Pilot {
  uid: string;
  email: string;
  name: string;
  role: Roles;

  constructor(authData) {
    this.uid = authData.uid;
    this.email = authData.email;
    this.name = authData.displayName;
    this.role = {
      reader: true,
      pilot: true
    }
  }
}

export class Passenger {
  uid: string;
  email: string;
  name: string;
  role: Roles;

  constructor(authData) {
    this.uid = authData.uid;
    this.email = authData.email;
    this.name = authData.displayName;
    this.role = {
      reader: true,
      passenger: true
    }
  }
}

