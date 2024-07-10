import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'iplex-recharge.page',
  standalone: true,
  imports: [TranslateModule, LogoComponent],
  templateUrl: './recharge.component.html'
})
export class RechargeComponent extends AppAbstract implements OnInit {
  protected isErrorFetch: boolean = false;

  ngOnInit(): void {
    this.fetchPlaylistData();
  }

  protected fetchPlaylistData(): void {
    this.isErrorFetch = true;

    // this._midiaService.fetchPlaylistData().subscribe(() => {
    //   this._router.navigate(['/']);
    // },
    //   (error: any) => {
    //     console.error(error);
    //     this.isErrorFetch = true;
    //   }
    // );
  }
}