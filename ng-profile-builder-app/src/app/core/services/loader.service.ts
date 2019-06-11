import { Injectable } from '@angular/core';
import { validateEventsArray } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _activeLoadrequests = 0;
  private _loading: boolean;
  public status: Subject<boolean> = new Subject();

  constructor() { }

  public get loading() : boolean {
    return this._loading;
  }

  public set loading(value: boolean) {
    this._loading = value;
    setTimeout(() => {
      this.status.next(value);
    });
  }

  public start(): void {
    this._activeLoadrequests++;
    if (!this._loading) {
      this.loading = true;
    }
  }

  public stop(force: boolean = false): void {
    if (force === true) {
      this._activeLoadrequests = 0;
    }
    if (this._activeLoadrequests > 0) {
      this._activeLoadrequests--;
    }
    if (this._activeLoadrequests === 0 && this._loading === true ) {
      this.loading = false;
    }
  }

}
