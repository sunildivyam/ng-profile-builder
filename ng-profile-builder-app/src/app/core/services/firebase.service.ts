import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  endpoints = environment.apiConfig.endpoints;

  constructor(private db: AngularFirestore) {
  }

  // Layout APIs
  getLayouts(userId: string): Observable<any> {
    let condFn;
    if (userId) {
      condFn = ref => ref.where('userId', '==', userId);
    }

    return new Observable((observer) => {
      this.db.collection(this.endpoints.layouts, condFn).snapshotChanges().subscribe((data) => {
        const layouts = data.map((e) => {
          return {
            id: e.payload.doc.id,
            dateUpdated: e.payload.doc._document.version.toTimestamp().toDate(),
            ...e.payload.doc.data()
          };
        });
        observer.next(layouts);
      });
    });
  }

  getLayout(id: string): Observable<any> {
    return new Observable((observer) => {
      this.db.doc(`${this.endpoints.layouts}/${id}`).snapshotChanges().subscribe((data) => {
        const layout = {
          id: data.payload.id,
          dateUpdated: data.payload._document.version.toTimestamp().toDate(),
          ...data.payload.data()
        };
        observer.next(layout);
      });
    });
  }

  createLayout(layout: any): Observable<any> {
    return new Observable((observer) => {
      const plainObject = this.parseJsonBeforeSave(JSON.parse(JSON.stringify(layout)));
      this.db.collection(this.endpoints.layouts).add(plainObject).then((data) => {
        observer.next(data.id);
      });
    });
  }

  updateLayout(id: string, layout: any): Observable<any> {
    return new Observable((observer) => {
      const plainObject = this.parseJsonBeforeSave(JSON.parse(JSON.stringify(layout)));
      this.db.doc(`${this.endpoints.layouts}/${id}`).update(plainObject).then((data) => {
        observer.next(data);
      });
    });
  }

  deleteLayout(id: string): Observable<any> {
    return new Observable((observer) => {
      this.db.doc(`${this.endpoints.layouts}/${id}`).delete().then((data) => {
        observer.next(data);
      });
    });
  }

  // Profile APIs
  getProfiles(): Observable<any> {
    return new Observable((observer) => {
      this.db.collection(this.endpoints.profiles).snapshotChanges().subscribe((data) => {
        const profiles = data.map((e) => {
          return {
            id: e.payload.doc.id,
            dateUpdated: e.payload.doc._document.version.toTimestamp().toDate(),
            ...e.payload.doc.data()
          };
        });
        observer.next(profiles);
      });
    });
  }

  getProfile(id: string): Observable<any> {
    return new Observable((observer) => {
      this.db.doc(`${this.endpoints.profiles}/${id}`).snapshotChanges().subscribe((data) => {
        const profile = {
          id: data.payload.id,
          dateUpdated: data.payload._document.version.toTimestamp().toDate(),
          ...data.payload.data()
        };
        observer.next(profile);
      });
    });
  }

  createProfile(profile: any): Observable<any> {
    return new Observable((observer) => {
      const plainObject = this.parseJsonBeforeSave(JSON.parse(JSON.stringify(profile)));
      this.db.collection(this.endpoints.profiles).add(plainObject).then((data) => {
        observer.next(data.id);
      });
    });
  }

  updateProfile(id: string, profile: any): Observable<any> {
    return new Observable((observer) => {
      const plainObject = this.parseJsonBeforeSave(JSON.parse(JSON.stringify(profile)));
      this.db.doc(`${this.endpoints.profiles}/${id}`).update(plainObject).then((data) => {
        observer.next(data);
        observer.complete();
      }, (err) => {
        console.log(err);
        observer.error(err)
      });
    });
  }

  deleteProfile(id: string): Observable<any> {
    return new Observable((observer) => {
      this.db.doc(`${this.endpoints.profiles}/${id}`).delete().then((data) => {
        observer.next(data);
      });
    });
  }

  parseJsonBeforeSave(profile: any) : any {
    delete profile.id;
    delete profile.dateUpdated;
    return profile;
  }
}
