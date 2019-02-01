import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
  providers: [AuthenticationService]
})

export class GuestComponent implements OnInit {
  user: Observable<firebase.User>;
  private isLoggedIn: boolean;
  private userName: string;
  
  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.name;
      }
    });
  }
  
  ngOnInit() {
  }

}