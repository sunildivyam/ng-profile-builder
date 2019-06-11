import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { LayoutModule } from './features/layout';
import { ProfileModule } from './features/profile';

import {
  AppComponent,
  HomeLandingComponent,
  ProfilesLandingComponent,
  ProfilesDashboardLandingComponent,
  ProfilesViewLandingComponent,
  ProfilesManageLandingComponent,
  LayoutsLandingComponent,
  LayoutsDashboardLandingComponent,
  LayoutsManageLandingComponent,
  LoginLandingComponent,
  ErrorLandingComponent,
  PrintProfileLandingComponent,
  TermsofserviceLandingComponent,
  PrivacypolicyLandingComponent
} from './partials';

@NgModule({
  declarations: [
    AppComponent,
    HomeLandingComponent,
    ProfilesLandingComponent,
    LayoutsLandingComponent,
    LoginLandingComponent,
    ErrorLandingComponent,
    PrintProfileLandingComponent,
    TermsofserviceLandingComponent,
    PrivacypolicyLandingComponent,
    ProfilesDashboardLandingComponent,
    ProfilesViewLandingComponent,
    ProfilesManageLandingComponent,
    LayoutsDashboardLandingComponent,
    LayoutsManageLandingComponent
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
