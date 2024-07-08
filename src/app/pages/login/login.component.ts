import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { KeyboardComponent } from '../../components/keyboard/keyboard.component';
import { LanguageListComponent } from '../../components/language-list/language-list.component';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'iplex-login',
  standalone: true,
  imports: [NgIf, LogoComponent, KeyboardComponent, TranslateModule, RouterModule, LanguageListComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent extends AppAbstract {
  protected readonly minStageLogin: number = 0;
  protected readonly maxStageLogin: number = 2;

  protected btnText: string = 'CONFIRM';
  protected text: string = '';
  protected stageLogin: number = 0;

  protected listLandingTexts: string[] = [
    'CANCEL_WHENEVER', 'UNLIMITED_CONTENT', 'WATCH_WHENEVER', 'WATCH_PAUSE', 'AFFORDABLE_PRICE'
  ];

  protected keyboardOutput(event: string): void {
    this.text = event;
  }

  protected confirmLogin(): void {
    if (this.stageLogin < this.maxStageLogin) this.stageLogin++;
    console.log(this.stageLogin);
  }

  protected login(): void {
    console.log('CONFIRM');
  }
}
