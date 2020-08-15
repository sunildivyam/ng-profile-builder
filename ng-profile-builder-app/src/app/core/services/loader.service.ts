import { Injectable } from '@angular/core';
import { validateEventsArray } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private pActiveLoadrequests = 0;
  private pLoading: boolean;
  public status: Subject<boolean> = new Subject();

  constructor() { }

  public get loading(): boolean {
    return this.pLoading;
  }

  public set loading(value: boolean) {
    this.pLoading = value;
    setTimeout(() => {
      this.status.next(value);
    });
  }

  public start(): void {
    this.pActiveLoadrequests++;
    if (!this.pLoading) {
      this.loading = true;
    }
  }

  public stop(force: boolean = false): void {
    if (force === true) {
      this.pActiveLoadrequests = 0;
    }
    if (this.pActiveLoadrequests > 0) {
      this.pActiveLoadrequests--;
    }
    if (this.pActiveLoadrequests === 0 && this.pLoading === true ) {
      this.loading = false;
    }
  }

}
