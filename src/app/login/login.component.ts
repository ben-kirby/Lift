import { Component, OnInit, Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})

// @Injectable()
export class LoginComponent {
  private user: Observable<firebase.User>;
  private isLoggedIn: boolean;
  private userName: string;

  constructor(public authService: AuthenticationService) { 
    this.authService.user.subscribe(user => {
      if (user == null){
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
