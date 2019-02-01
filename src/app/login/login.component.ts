import { Component, Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})

export class LoginComponent {
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
