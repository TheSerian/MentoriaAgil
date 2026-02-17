import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full'

  },
  {
    path: 'termos',
    loadComponent: () => import('./views/termos/Termos')
    .then(m => m.Termos)
  },
  {
    path: 'registro',
    loadComponent: () => import('./views/auth/registro/Registro')
    .then(m => m.Registro)
  },
  {
    path: 'login',
    loadComponent: () => import('./views/auth/login/Login')
    .then(m => m.Login)
  },
  {
    path: 'logout',
    loadComponent: () => import('./views/auth/logout/Logout')
    .then(m => m.Logout)
  },

  {
    path: '',
    loadComponent: () => import('./layouts/Layout')
    .then(m => m.Layout),
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./views/dashboard/Dashboard')
        .then(m => m.Dashboard)
      },
      {
        path: 'mentor/cadastro',
        loadComponent: () => import('./views/mentor/mentor-form/MentorForm')
        .then(m => m.MentorFormComponent)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  {
    path: '**',
    redirectTo: 'registro'
  }
];
