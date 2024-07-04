import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageModalComponent } from '../../components/language-modal/language-modal.component';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'iplex-landing',
  standalone: true,
  imports: [LogoComponent, TranslateModule, RouterModule, LanguageModalComponent, NgIf, NgFor],
  templateUrl: './landing.component.html'
})
export class LandingComponent {
  protected language: boolean = false;

  protected listLandingTexts: string[] = [
    'CANCEL_WHENEVER', 'UNLIMITED_CONTENT', 'WATCH_WHENEVER', 'WATCH_PAUSE', 'AFFORDABLE_PRICE'
  ];

  protected selectLanguageLanding(): void {
    this.language = !this.language;
  }
}
