import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent {
  user;

  constructor(public authService: AuthenticationService) { 
    this.authService.user.subscribe(user => {
      console.log(user);
    });
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
