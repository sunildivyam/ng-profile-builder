import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from 'src/app/features/profile';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  endpoints = environment.apiConfig.endpoints;

  constructor(private db: AngularFirestore) {
  }

  // Layout APIs
  getLayouts(uid: string): Observable<any> {
    let condFn = ref => ref.where('uid', '==', uid);
    return new Observable((observer) => {
      this.db.collection(this.endpoints.layouts, condFn).snapshotChanges().subscribe((data) => {
        const layouts = data.map((e: any) => {
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
      this.db.doc(`${this.endpoints.layouts}/${id}`).snapshotChanges().subscribe((data: any) => {
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
  getProfiles(uid: string): Observable<any> {
    let condFn = ref => ref.where('uid', '==', uid);

    return new Observable((observer) => {
      this.db.collection(this.endpoints.profiles, condFn).snapshotChanges().subscribe((data) => {
        data.sort((a: any, b: any) => {
          // desc order
          return b.payload.doc._document.version.toTimestamp().seconds - a.payload.doc._document.version.toTimestamp().seconds;
        });
        const profiles = data.map((e: any) => {
          return {
            id: e.payload.doc.id,
            dateUpdated: e.payload.doc._document.version.toTimestamp().toDate(),
            ...e.payload.doc.data()
          };
        });
        observer.next(profiles);
      }, (error) => {
        console.log("ERROR:", error);
        observer.error([]);
      });
    });
  }

  getProfile(id: string, uid: string): Observable<any> {
    return new Observable((observer) => {
      this.db.doc(`${this.endpoints.profiles}/${id}`).get().subscribe((data: any) => {
        const profile = {
          id: data.id,
          dateUpdated: data._document.version.toTimestamp().toDate(),
          ...data.data()
        };
        observer.next(profile);
      }, (error) => {
        console.log("ERROR:", error);
        observer.error(null);
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
        // console.log(err);
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
