import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageModalComponent } from '../../components/language-modal/language-modal.component';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'iplex-landing',
  standalone: true,
  imports: [LogoComponent, TranslateModule, RouterModule, LanguageModalComponent, NgIf],
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  protected language: boolean = false;

  protected selectLanguageLogin(): void {
    this.language = !this.language;
  }
}
