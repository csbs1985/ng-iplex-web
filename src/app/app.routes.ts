import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: 'landing',
        loadComponent: () => import('./pages/landing/landing.component').then(p => p.LandingComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(p => p.LoginComponent)
    },
    { path: '**', redirectTo: '' },
];
