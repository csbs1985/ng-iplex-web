import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { KeyboardComponent } from '../../components/keyboard/keyboard.component';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'iplex-login',
  standalone: true,
  imports: [LogoComponent, KeyboardComponent, TranslateModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  protected text: string = '';

  protected keyboardOutput(event: string): void {
    this.text = event;
  }
}
