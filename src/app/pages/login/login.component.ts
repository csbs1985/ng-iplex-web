import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'iplex-login',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
