import { Component, OnInit, Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { $ } from 'protractor';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})

export class AuthenticationComponent {
  user: BehaviorSubject<User> = new BehaviorSubject(null);
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
        this.userName = user.name;
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
}

export class User {
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
      pilot: false
    }
  }
}

