import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateRouteGuard, CanActivateChildRouteGuard } from './core/services';
import {
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

const routes: Routes = [
  { path: 'home', component: HomeLandingComponent },
  {
    path: 'profiles',
    canActivateChild: [CanActivateChildRouteGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ProfilesDashboardLandingComponent }, // Dashboard landing page
      {
        path: ':id',
        component: ProfilesLandingComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'view', component: ProfilesViewLandingComponent },
          { path: 'manage', component: ProfilesManageLandingComponent }
        ]
      }
    ]
  },
  {
    path: 'layouts',
    canActivateChild: [CanActivateChildRouteGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: LayoutsDashboardLandingComponent }, // Dashboard landing page
      {
        path: ':id',
        component: LayoutsLandingComponent,
        children: [
          { path: '', redirectTo: 'manage', pathMatch: 'full' },
          { path: 'manage', component: LayoutsManageLandingComponent }
        ]
      }
    ]
  },
  {
    path: 'login',
    children: [
      { path: '', component: LoginLandingComponent },
      { path: '?returnUrl', component: LoginLandingComponent }
    ]
  },
  { path: 'printprofile/:id', component: PrintProfileLandingComponent, data: {bareboneMode: true} },
  { path: 'termsofservice', component: TermsofserviceLandingComponent },
  { path: 'privacypolicy', component: PrivacypolicyLandingComponent },
  { path: 'error', component: ErrorLandingComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
