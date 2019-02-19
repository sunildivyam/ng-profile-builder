import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent, ViewProfileComponent, BuildProfileComponent, LayoutsComponent } from './partials';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'viewprofile',
    children: [
      { path: '',  redirectTo: '/dashboard', pathMatch: 'full'},
      { path: ':id', component: ViewProfileComponent },
    ]
  },
  { path: 'buildprofile',
    children: [
      { path: '', component: BuildProfileComponent },
      { path: ':id', component: BuildProfileComponent },
    ]
  },
  { path: 'layouts',
    children: [
      { path: '', component: LayoutsComponent },
      { path: ':id', component: LayoutsComponent },
    ]
  },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
