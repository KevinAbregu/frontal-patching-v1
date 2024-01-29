import { Routes } from '@angular/router';
import { AdminLayoutComponent } from '@theme/admin-layout/admin-layout.component';
import { InstanciasComponent } from './routes/instancias/instancias.component';
import { ProyectosComponent } from './routes/proyectos/proyectos.component';


export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [],
    canActivateChild: [],
    children: [
      { path: '', redirectTo: 'proyectos', pathMatch: 'full' },
      { path: 'instancias', component: InstanciasComponent },
      { path: 'proyectos', component: ProyectosComponent },

    ],
  },
  { path: '**', redirectTo: 'proyectos' },
];
