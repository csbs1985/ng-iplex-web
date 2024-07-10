import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { KeyboardComponent } from '../../components/keyboard/keyboard.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { InitLoginComponent } from './init-login/init-login.component';
import { LanguageLoginComponent } from './language-login/language-login.component';
import { UserLoginComponent } from './user-login/user-login.component';

@Component({
  standalone: true,
  imports: [NgIf, InitLoginComponent, LoadingComponent, LogoComponent, KeyboardComponent, TranslateModule, RouterModule, LanguageLoginComponent, FormLoginComponent, UserLoginComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent extends AppAbstract {
  protected text: string = '';

  protected keyboardOutput(event: string): void {
    this.text = event;
  }
}
