import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  login(email, password){
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email, password){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

}
