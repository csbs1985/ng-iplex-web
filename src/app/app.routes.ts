import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(p => p.HomeComponent),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(p => p.LoginComponent)
    },
    {
        path: 'recharge',
        loadComponent: () => import('./pages/recharge/recharge.component').then(p => p.RechargeComponent),
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        loadComponent: () => import('./pages/users/users.component').then(p => p.UsersComponent),
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '' },
];
