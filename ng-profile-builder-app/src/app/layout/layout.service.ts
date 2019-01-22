import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LayoutModule } from './layout.module';
import { LayoutConfig } from './layout.config';
import { Observable } from 'rxjs';


@Injectable()

export class LayoutService {
  constructor(private lConf: LayoutConfig, private http: HttpClient) {
    console.log(lConf);
  }

  getLayouts(): Observable<any> {
    return this.http.get(`${this.lConf.apiUrl}/${this.lConf.endpoints['layouts']}`);
  }

  getLayout(id: number): Observable<any> {
    return this.http.get(`${this.lConf.apiUrl}/${this.lConf.endpoints['layouts']}/${id}`);
  }
}
