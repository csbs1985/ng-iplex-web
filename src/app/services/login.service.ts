import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    protected _router = inject(Router);

    readonly minStageLogin: number = 0;
    readonly maxStageLogin: number = 2;

    text: string = '';
    stageLogin: number = 0;
    loading: boolean = false;

    nextStageLogin(): void {
        if (this.stageLogin < this.maxStageLogin) this.stageLogin++;
    }

    previousStageLogin(): void {
        if (this.stageLogin > this.minStageLogin) this.stageLogin--;
    }

    logout(): void {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem('login');
            this._router.navigate(['/login']);
        }
    }
}