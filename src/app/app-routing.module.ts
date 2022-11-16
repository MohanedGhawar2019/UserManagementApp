import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { HomeComponent } from './layouts/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./views/dashboard/dash-home/dash-home.module').then(
            (m) => m.DashHomeModule
          ),
      },
      {
        path: 'allusers',
        loadChildren: () =>
          import('./views/dashboard/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'allroles',
        loadChildren: () =>
          import('./views/dashboard/roles/roles.module').then(
            (m) => m.RolesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
