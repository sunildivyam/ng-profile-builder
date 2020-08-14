import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from 'src/app/features/profile';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  endpoints = environment.apiConfig.endpoints;

  constructor(private db: AngularFirestore, private loaderService: LoaderService) {
  }

  // Layout APIs
  getLayouts(uid: string): Observable<any> {
    this.loaderService.start();
    const condFn = ref => ref.where('uid', '==', uid);
    return new Observable((observer) => {
      this.db.collection(this.endpoints.layouts, condFn).snapshotChanges().subscribe((data) => {
        const layouts = data.map((e: any) => {
          return {
            id: e.payload.doc.id,
            dateUpdated: e.payload.doc.Nd.version.timestamp.toDate(),
            ...e.payload.doc.data()
          };
        });
        this.loaderService.stop();
        observer.next(layouts);
      });
    });
  }

  getLayout(id: string): Observable<any> {
    this.loaderService.start();
    return new Observable((observer) => {
      this.db.doc(`${this.endpoints.layouts}/${id}`).snapshotChanges().subscribe((data: any) => {
        const layout = {
          id: data.payload.id,
          dateUpdated: data.payload.Nd.version.timestamp.toDate(),
          ...data.payload.data()
        };
        this.loaderService.stop();
        observer.next(layout);
      });
    });
  }

  createLayout(layout: any): Observable<any> {
    this.loaderService.start();
    return new Observable((observer) => {
      const plainObject = this.parseJsonBeforeSave(JSON.parse(JSON.stringify(layout)));
      this.db.collection(this.endpoints.layouts).add(plainObject).then((data) => {
        this.loaderService.stop();
        observer.next(data.id);
      });
    });
  }

  updateLayout(id: string, layout: any): Observable<any> {
    this.loaderService.start();
    return new Observable((observer) => {
      const plainObject = this.parseJsonBeforeSave(JSON.parse(JSON.stringify(layout)));
      this.db.doc(`${this.endpoints.layouts}/${id}`).update(plainObject).then((data) => {
        this.loaderService.stop();
        observer.next(data);
      });
    });
  }

  deleteLayout(id: string): Observable<any> {
    this.loaderService.start();
    return new Observable((observer) => {
      this.db.doc(`${this.endpoints.layouts}/${id}`).delete().then((data) => {
        this.loaderService.stop();
        observer.next(data);
      });
    });
  }

  // Profile APIs
  getProfiles(uid: string): Observable<any> {
    this.loaderService.start();
    const condFn = ref => ref.where('uid', '==', uid);

    return new Observable((observer) => {
      this.db.collection(this.endpoints.profiles, condFn).snapshotChanges().subscribe((data) => {
        data.sort((a: any, b: any) => {
          // desc order
          return b.payload.doc.Nd.version.timestamp.seconds - a.payload.doc.Nd.version.timestamp.seconds;
        });
        const profiles = data.map((e: any) => {
          return {
            id: e.payload.doc.id,
            dateUpdated: e.payload.doc.Nd.version.timestamp.toDate(),
            ...e.payload.doc.data()
          };
        });
        this.loaderService.stop();
        observer.next(profiles);
      }, (error) => {
        this.loaderService.stop();
        console.log('ERROR:', error);
        observer.error([]);
      });
    });
  }

  getProfile(id: string, uid: string): Observable<any> {
    this.loaderService.start();
    return new Observable((observer) => {
      this.db.doc(`${this.endpoints.profiles}/${id}`).get().subscribe((data: any) => {
        const profile = {
          id: data.id,
          dateUpdated: data.Nd.version.timestamp.toDate(),
          ...data.data()
        };
        this.loaderService.stop();
        observer.next(profile);
      }, (error) => {
        this.loaderService.stop();
        console.log('ERROR:', error);
        observer.error(null);
      });
    });
  }

  createProfile(profile: any): Observable<any> {
    this.loaderService.start();
    return new Observable((observer) => {
      const plainObject = this.parseJsonBeforeSave(JSON.parse(JSON.stringify(profile)));
      this.db.collection(this.endpoints.profiles).add(plainObject).then((data) => {
        this.loaderService.stop();
        observer.next(data.id);
      });
    });
  }

  updateProfile(id: string, profile: any): Observable<any> {
    this.loaderService.start();
    return new Observable((observer) => {
      const plainObject = this.parseJsonBeforeSave(JSON.parse(JSON.stringify(profile)));
      this.db.doc(`${this.endpoints.profiles}/${id}`).update(plainObject).then((data) => {
        observer.next(data);
        observer.complete();
        this.loaderService.stop();
      }, (err) => {
        // console.log(err);
        this.loaderService.stop();
        observer.error(err);
      });
    });
  }

  deleteProfile(id: string): Observable<any> {
    this.loaderService.start();
    return new Observable((observer) => {
      this.db.doc(`${this.endpoints.profiles}/${id}`).delete().then((data) => {
        this.loaderService.stop();
        observer.next(data);
      });
    });
  }

  parseJsonBeforeSave(profile: any): any {
    delete profile.id;
    delete profile.dateUpdated;
    return profile;
  }
}
