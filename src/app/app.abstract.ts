import { Component, OnDestroy, inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SubSink } from "subsink";
import { ApiService } from "./services/api.service";
import { ErrorService } from "./services/error.service";
import { ImageService } from "./services/image.service";
import { LanguageService } from "./services/language.service";
import { LoginService } from "./services/login.service";
import { MidiaService } from "./services/midia.service";

@Component({
    template: ''
})
export abstract class AppAbstract implements OnDestroy {
    protected _activatedRoute = inject(ActivatedRoute);
    protected _formBuilder = inject(FormBuilder);
    protected _router = inject(Router);

    protected _apiService = inject(ApiService);
    protected _errorService = inject(ErrorService);
    protected _imageService = inject(ImageService);
    protected _languageService = inject(LanguageService);
    protected _loginService = inject(LoginService);
    protected _midiaService = inject(MidiaService);

    protected _subSink = new SubSink();

    ngOnDestroy(): void {
        this._subSink.unsubscribe();
    }
}