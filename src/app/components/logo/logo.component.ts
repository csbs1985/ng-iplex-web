import { Component, Input } from '@angular/core';
import { AppAbstract } from '../../app.abstract';

@Component({
  selector: 'iplex-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html'
})
export class LogoComponent extends AppAbstract {
  @Input() width: number = 140;
}
