import { Component, OnDestroy, inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SubSink } from "subsink";
import { ImageService } from "./services/image.service";
import { LanguageService } from "./services/language.service";

@Component({
    template: ''
})
export abstract class AppAbstract implements OnDestroy {
    protected _activatedRoute = inject(ActivatedRoute);
    protected _formBuilder = inject(FormBuilder);
    protected _router = inject(Router);

    protected _languageService = inject(LanguageService);
    protected _imageService = inject(ImageService);

    protected _subSink = new SubSink();

    ngOnDestroy(): void {
        this._subSink.unsubscribe();
    }
}