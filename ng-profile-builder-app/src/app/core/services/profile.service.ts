import { Injectable } from '@angular/core';
import { HttpClient /*, HttpHeaders */ } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Layout } from 'src/app/features/layout/models';
import { Profile } from 'src/app/features/profile/models';

@Injectable()
export class ProfileService {
  private api = environment.apiConfig;

  constructor(private http: HttpClient, /*private httpHeaders: HttpHeaders*/) {
    this.setHeaders();
  }
  private setHeaders(): void {
    // this.httpHeaders.set('Content-type', 'javascript/json');
  }

  // Layout APIs
  getLayouts(): Observable<any> {
    const url = `${this.api.baseUrl}/${this.api.endpoints.layouts}`;
    return this.http.get(url);
  }

  getLayout(id: string): Observable<any> {
    const url = `${this.api.baseUrl}/${this.api.endpoints.layouts}/${id}`;
    return this.http.get(url);
  }

  createLayout(layout: Layout): Observable<any> {
    const url = `${this.api.baseUrl}/${this.api.endpoints.layouts}`;
    return this.http.post(url, layout);
  }

  updateLayout(id: string, layout: Layout): Observable<any> {
    const url = `${this.api.baseUrl}/${this.api.endpoints.layouts}/${id}`;
    return this.http.put(url, layout);
  }

  deleteLayout(id: string): Observable<any> {
    const url = `${this.api.baseUrl}/${this.api.endpoints.layouts}/${id}`;
    return this.http.delete(url);
  }

  // Profile APIs
  getProfiles(): Observable<any> {
    const url = `${this.api.baseUrl}/${this.api.endpoints.profiles}`;
    return this.http.get(url);
  }

  getProfile(id: string): Observable<any> {
    const url = `${this.api.baseUrl}/${this.api.endpoints.profiles}/${id}`;
    return this.http.get(url);
  }

  createProfile(layout: Profile): Observable<any> {
    const url = `${this.api.baseUrl}/${this.api.endpoints.profiles}`;
    return this.http.post(url, layout);
  }

  updateProfile(id: string, layout: Profile): Observable<any> {
    const url = `${this.api.baseUrl}/${this.api.endpoints.profiles}/${id}`;
    return this.http.put(url, layout);
  }

  deleteProfile(id: string): Observable<any> {
    const url = `${this.api.baseUrl}/${this.api.endpoints.profiles}/${id}`;
    return this.http.delete(url);
  }


  // MIGRATION:

  getProfilesForMigration(): Observable<any> {
    const url = 'http://localhost:3000/api/usersdeep';
    return this.http.get(url);
  }
}
