import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    handleError(error: any): Observable<any> {
        console.error('Error fetching channel list:', error);
        if (error instanceof HttpErrorResponse) {
            console.error('HTTP Error:', error.status, error.statusText);
        } else {
            console.error('Unknown Error:', error);
        }
        return of([]);
    }
}