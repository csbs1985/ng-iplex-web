import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
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
}