import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../../app.abstract';

@Component({
  selector: 'iplex-init-login',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './init-login.component.html'
})
export class InitLoginComponent extends AppAbstract {
  protected listLandingTexts: string[] = [
    'CANCEL_WHENEVER', 'UNLIMITED_CONTENT', 'WATCH_WHENEVER', 'WATCH_PAUSE', 'AFFORDABLE_PRICE'
  ];
}
