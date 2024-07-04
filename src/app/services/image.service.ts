import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    validateImage(event: any): void {
        event.target.src = '';
    }
}