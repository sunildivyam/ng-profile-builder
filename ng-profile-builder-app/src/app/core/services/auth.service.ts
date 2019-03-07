import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser = {
    id: 'debTwyXxqv60kYJbEdYz',
    userName: 'sunil.divyam',
    firstName: 'Sunil',
    lastName: 'Kumar'
  };
  constructor() { }

 public get currentUserId(): string {
   return this._currentUser.id;
 }

 public get currentUser(): Object {
  return this._currentUser;
}
}
