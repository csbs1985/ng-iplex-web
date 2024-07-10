import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../../app.abstract';
import { LogoComponent } from '../../../components/logo/logo.component';

@Component({
  selector: 'iplex-banner-home',
  standalone: true,
  imports: [LogoComponent, TranslateModule],
  templateUrl: './banner-home.component.html'
})
export class BannerHomeComponent extends AppAbstract {

}
