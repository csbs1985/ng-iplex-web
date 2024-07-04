import { Component } from '@angular/core';
import { KeyboardComponent } from '../../components/keyboard/keyboard.component';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'iplex-login',
  standalone: true,
  imports: [LogoComponent, KeyboardComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  protected keyboardOutput(event: string): void {
    console.log(event);
  }
}
