import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import { $ } from 'protractor';





@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})

export class AuthenticationComponent {
  private isLoggedIn: boolean;
  private userName: string;
  private uid: string;
  public error: null;

  constructor(public auth: AuthenticationService) {
    this.afAuth.authState.switchMap(auth => {
      if (auth) {
        return this.db.object('users/' + auth.uid);
      } else {
        return Observable.of(null);
      }
    })
      .subscribe(user => {
        this.user.next(user);
      });


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

