import { Injectable } from '@angular/core';
import { Property } from '../models/property';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class PlaneService {

  makePilot(userData) {
    firebase.database().ref('users/' + userData + '/role').update({
      pilot: true
    });
  }
}
