import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'iplex-landing',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
