import { Component, OnInit } from '@angular/core';
import { AppAbstract } from '../../app.abstract';
import { BannerHomeComponent } from './banner-home/banner-home.component';

@Component({
  standalone: true,
  imports: [BannerHomeComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent extends AppAbstract implements OnInit {
  ngOnInit(): void {

  }

}
