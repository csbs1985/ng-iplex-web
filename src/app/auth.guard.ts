import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppAbstract } from './app.abstract';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard extends AppAbstract implements CanActivate {
    canActivate(): boolean {
        if (typeof localStorage !== 'undefined') {
            const token = localStorage.getItem('login');

            if (token) {
                return true;
            } else {
                this._router.navigate(['/landing']);
                return false;
            }
        } else return false;
    }
}