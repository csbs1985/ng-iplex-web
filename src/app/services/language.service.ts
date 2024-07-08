import { Injectable, inject } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ELanguage } from "../enums/language.enum";

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    protected _translateService = inject(TranslateService);

    languageSelected = ELanguage.ENGLISH;

    listLanguage = [
        {
            language: 'English',
            code: ELanguage.ENGLISH,
            icon: 'assets/icons/us.svg'
        },
        {
            language: 'Español',
            code: ELanguage.SPANISH,
            icon: 'assets/icons/es.svg'
        },
        {
            language: 'Deutsch',
            code: ELanguage.GERMAN,
            icon: 'assets/icons/de.svg'
        },
        {
            language: 'Français',
            code: ELanguage.FRANCE,
            icon: 'assets/icons/fr.svg'
        },
        {
            language: 'Italiano',
            code: ELanguage.ITALIAN,
            icon: 'assets/icons/it.svg'
        },
        {
            language: 'Português',
            code: ELanguage.PORTUGUESE,
            icon: 'assets/icons/br.svg'
        }
    ];

    initLanguage(): void {
        let lang = ELanguage.ENGLISH;

        if (typeof localStorage !== 'undefined') {
            const defaultLange = localStorage.getItem('language');

            if (defaultLange !== null) lang = JSON.parse(defaultLange);
        }
        this.setLanguage(lang);
    }

    setLanguage(lang: ELanguage): void {
        this._translateService.setDefaultLang(lang);
        this._translateService.use(lang);

        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('language', JSON.stringify(lang));
        }
    }

    selectLanguage(lang: ELanguage): void {
        this.languageSelected = lang;
        this.setLanguage(lang);
    }
}