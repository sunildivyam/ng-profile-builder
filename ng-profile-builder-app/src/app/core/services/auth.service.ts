import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subscription, Subject, Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pCurrentUser: User;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListner);
  }

  public firebaseAuthChangeListner = (user: User) => {
    this.pCurrentUser = user;
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
    if (this.pCurrentUser) {
      return true;
    }
    return false;
  }

  public userLoggedInStatus(): Observable<User> {
    return this.angularFireAuth.authState;
  }

  public get currentUserId(): string {
    return this.pCurrentUser && this.pCurrentUser.uid;
  }

  public get currentUser(): User {
    return this.pCurrentUser;
  }

  public loginStateChange(): Observable<firebase.User> {
    return this.angularFireAuth.authState;
  }
}
