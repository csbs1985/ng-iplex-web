import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, Subject, tap } from "rxjs";
import { ETypeMidia } from "../enums/type-midia.enum";
import { IMidia } from "../models/midia.interface";
import { ApiService } from "./api.service";


@Injectable({
    providedIn: 'root'
})
export class MidiaService {
    protected _apiService = inject(ApiService);
    protected _router = inject(Router);

    listIptv: IMidia[] = [];
    listChannels: IMidia[] = [];
    listMovies: IMidia[] = [];
    listSeries: IMidia[] = [];

    channels$ = new Subject<IMidia[]>();
    listAll$ = new Subject<IMidia[]>();
    movies$ = new Subject<IMidia[]>();
    series$ = new Subject<IMidia[]>();

    fetchPlaylistData(): Observable<any> {
        return this._apiService.fetchChannelList().pipe(
            tap((list: any) => {
                this.listIptv = this.parsePlaylist(list);
                this.listAll$.next(this.listIptv);
                this.getAllMovies();
            }),
            catchError((error: any) => {
                console.error(error);
                throw error;
            })
        );
    }

    parsePlaylist(playlist: any): IMidia[] {
        const channels: IMidia[] = [];
        const lines = playlist.split('\n');
        let channel = {};

        for (const line of lines) {
            if (line.startsWith('#EXTINF:')) {
                const result = this.extractValues(line);
                channel = {
                    id: result['id'] || "",
                    name: result['name'] || "",
                    url: result['logo'] || "",
                    logo: result['logo'] || "",
                    group: result['group-title'] || ""
                }
            } else if (line.startsWith('http')) {
                channel = { ...channel, url: line };
                channels.push(channel as IMidia);
            }
        }

        return channels;
    }

    extractValues(str: string): { [key: string]: string } {
        const regex = /tvg-(id|name|logo|group-title)="([^"]+)"/g;
        const result: { [key: string]: string } = {};
        let match;

        while ((match = regex.exec(str)) !== null) {
            result[match[1] as string] = match[2];
        }

        return result;
    }

    getAllMovies(): void {
        this.listMovies = this.listIptv.filter((item: IMidia) => item.url.includes('movie'));
        this.movies$.next(this.listMovies);

        this.getAllSeries();
    }

    getAllSeries(): void {
        this.listSeries = this.listIptv.filter((item: IMidia) => item.url.includes('series'));
        this.series$.next(this.listSeries);

        this.getAllChannels();
    }

    getAllChannels(): void {
        this.listChannels = this.listIptv.filter((item: IMidia) => !item.url.includes('movie') && !item.url.includes('series'));
        this.channels$.next(this.listChannels);
    }

    getTypeMidiaEnum(typeMidia: ETypeMidia): string {
        if (typeMidia === ETypeMidia.CHANNEL) return "CHANNEL";
        if (typeMidia === ETypeMidia.CONTINUE_WATCHING) return "CONTINUE_WATCHING";
        if (typeMidia === ETypeMidia.FAVORITE) return "FAVORITES";
        if (typeMidia === ETypeMidia.MOVIE) return "MOVIES";
        return "SERIES";
    }

    isValidMidia(url: string): boolean {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }

    handleImageError(event: any): void {
        event.target.src = '';
    }

    getMidiaDetails(midiaId: string): IMidia {
        const midia = this.listIptv.filter((midia: IMidia) => midia.url === midiaId);
        return midia[0] as IMidia;
    }

    filterMidiaPerName(name: string): IMidia[] {
        return this.listIptv.filter((item: IMidia) => item.name?.includes(name)) as IMidia[];
    }
}