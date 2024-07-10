import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from "rxjs";
import { ILogin } from '../models/login.interface';
import { IMidia } from "../models/midia.interface";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    protected _errorService = inject(ErrorService);
    private _httpClient = inject(HttpClient);

    fetchChannelList(): Observable<IMidia[]> {
        let login!: ILogin;

        if (typeof localStorage !== 'undefined') {
            login = JSON.parse(localStorage.getItem('login') || '') as ILogin;
        }

        const urlAPi = `http://5ce.co/get.php?username=${login.user}&password=${login.password}&type=m3u_plus&output=ts`;

        return this._httpClient.get(urlAPi, { responseType: 'text' })
            .pipe(
                catchError(this._errorService.handleError)
            );
    }

    searchMovies(): void {
        const apiUrl = 'https://imdb-api.com/en/API/Search/f48ed6b9';
        const headers = new HttpHeaders({
            'X-RapidAPI-Key': 'f48ed6b9'
        });

        this._httpClient.get(apiUrl, { headers, params: { s: 'Nosso Lar 2 Os Mensageiros - 2024' } })
            .subscribe(response => {
                console.log(response);
            });
    }
}