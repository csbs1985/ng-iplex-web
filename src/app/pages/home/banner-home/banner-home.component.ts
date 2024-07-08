import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from '../../../components/logo/logo.component';

@Component({
  selector: 'iplex-banner-home',
  standalone: true,
  imports: [LogoComponent, TranslateModule],
  templateUrl: './banner-home.component.html'
})
export class BannerHomeComponent {

}
