import { Component, OnInit } from '@angular/core';
import { AppAbstract } from '../../app.abstract';
import { MenuMainComponent } from '../../components/menu-main/menu-main.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';

@Component({
  standalone: true,
  imports: [BannerHomeComponent, MenuMainComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent extends AppAbstract implements OnInit {
  ngOnInit(): void {

  }
}
