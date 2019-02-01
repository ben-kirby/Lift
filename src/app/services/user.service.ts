import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Property } from '../models/property';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  constructor(private auth: AuthenticationService, private db: AngularFireDatabase) { }

  findUserProfile(uid) {
    console.log("Hello")
  }
}





