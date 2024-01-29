import { Routes } from '@angular/router';
import { AdminLayoutComponent } from '@theme/admin-layout/admin-layout.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';


export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [],
    canActivateChild: [],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
