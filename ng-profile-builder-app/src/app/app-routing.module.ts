import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent, 
  ViewProfileComponent, 
  BuildProfileComponent, 
  LayoutsComponent,
  LoginPageComponent } from './partials';
import { CanActivateRouteGuard } from './core/services';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'login', 
    children: [
      {
        path: '', component: LoginPageComponent
      },
      {
        path: '?returnUrl', component: LoginPageComponent
      }
    ]
  },
  { path: 'viewprofile',
    children: [
      { path: '',  redirectTo: '/dashboard', pathMatch: 'full'},
      { path: ':id', component: ViewProfileComponent, canActivate: [CanActivateRouteGuard] },
    ]
  },
  { path: 'buildprofile',
    children: [
      { path: '', component: BuildProfileComponent, canActivate: [CanActivateRouteGuard] },
      { path: ':id', component: BuildProfileComponent, canActivate: [CanActivateRouteGuard] },
    ]
  },
  { path: 'layouts',
    children: [
      { path: '', component: LayoutsComponent, canActivate: [CanActivateRouteGuard] },
      { path: ':id', component: LayoutsComponent, canActivate: [CanActivateRouteGuard] },
    ]
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
