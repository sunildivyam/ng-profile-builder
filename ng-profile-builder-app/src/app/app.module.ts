import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { LayoutModule } from './features/layout';
import { ProfileModule } from './features/profile';

import {
  AppComponent,
  DashboardComponent,
  ViewProfileComponent,
  BuildProfileComponent,
  LayoutsComponent
} from './partials';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewProfileComponent,
    BuildProfileComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
