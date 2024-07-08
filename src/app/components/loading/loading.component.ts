import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';

@Component({
  selector: 'iplex-loading',
  standalone: true,
  imports: [TranslateModule, NgIf],
  templateUrl: './loading.component.html'
})
export class LoadingComponent extends AppAbstract {
  @Input() text: string = '';
}