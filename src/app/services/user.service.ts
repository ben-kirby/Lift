import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Property } from '../models/property';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  private currentUser: null;

    constructor(public auth: AuthenticationService){
      this.currentUser = auth.data.subsc
    }




}
