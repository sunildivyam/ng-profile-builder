import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription, Subject, Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser: User;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListner);
  }

  private firebaseAuthChangeListner(user: User) {
    this._currentUser = user;
    if (user) {
      console.log('Logged in - Success');
    } else {
      console.log('Logged out - Success');
    }
  }

  public logout(): Promise<void> {
    return this.angularFireAuth.signOut();
  }

  public isUserLoggedIn(): boolean {
    if (this._currentUser) {
      return true;
    }
    return false;
  }

  public userLoggedInStatus(): Observable<User> {
    return this.angularFireAuth.authState;
  }

  public get currentUserId(): string {
    return this._currentUser && this._currentUser.uid;
  }

  public get currentUser(): Object {
    return this._currentUser;
  }

  public loginStateChange(): Observable<firebase.User> {
    return this.angularFireAuth.authState;
  }
}
