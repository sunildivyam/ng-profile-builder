import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser: any = {};

  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListner);
  }
  private firebaseAuthChangeListner(response: any) {
    if (response) {
      console.log("SUCCESS", response);
    } else {      
      console.log("LOGOUT", response);
    }
  }
  public logout(): Promise<void> {
    return this.angularFireAuth.auth.signOut();
  }

  public isUserLoggedIn(): boolean {
    if (this.angularFireAuth.auth.currentUser) {
      return true;
    }
    return false;
  }

  public get currentUserId(): string {
    return this.angularFireAuth.auth.currentUser && this.angularFireAuth.auth.currentUser.uid;
  }

  public get currentUser(): Object {
    return this.angularFireAuth.auth.currentUser;
  }
}
