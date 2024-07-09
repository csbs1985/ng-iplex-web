import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { EMenuMain } from '../../enums/menu-main.enum';
import { ETypeMidia } from '../../enums/type-midia.enum';
import { IMenuMain } from '../../models/menu-main.interface';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'iplex-menu-main',
  standalone: true,
  imports: [RouterModule, TranslateModule, NgIf],
  templateUrl: './menu-main.component.html'
})
export class MenuMainComponent extends AppAbstract implements OnInit {
  ETypeMidia: typeof ETypeMidia = ETypeMidia;

  protected user!: IUser;

  protected listMenuMainTop: IMenuMain[] = [
    {
      "route": "/",
      "icon": "assets/icons/home.svg",
      "text": EMenuMain.HOME
    },
    {
      "route": "/search",
      "icon": "assets/icons/search.svg",
      "text": EMenuMain.SEARCH
    },
    {
      "route": `/catalog/${ETypeMidia.CONTINUE_WATCHING}`,
      "icon": "assets/icons/continue_watching.svg",
      "text": EMenuMain.CONTINUE_WATCHING
    },
    {
      "route": `/catalog/${ETypeMidia.FAVORITE}`,
      "icon": "assets/icons/favorites.svg",
      "text": EMenuMain.FAVORITES
    },
    {
      "route": `/catalog/${ETypeMidia.CHANNEL}`,
      "icon": "assets/icons/channels.svg",
      "text": EMenuMain.CHANNEL
    },
    {
      "route": `/catalog/${ETypeMidia.MOVIE}`,
      "icon": "assets/icons/movies.svg",
      "text": EMenuMain.MOVIES
    },
    {
      "route": `/catalog/${ETypeMidia.SERIE}`,
      "icon": "assets/icons/series.svg",
      "text": EMenuMain.SERIES
    },
    {
      "route": `/catalog/${ETypeMidia.DOCUMENTARY}`,
      "icon": "assets/icons/documentaries.svg",
      "text": EMenuMain.DOCUMENTARIES
    },
    {
      "route": `/catalog/${ETypeMidia.SHOW}`,
      "icon": "assets/icons/shows.svg",
      "text": EMenuMain.SHOWS
    },
    {
      "route": `/catalog/${ETypeMidia.STAND_UP}`,
      "icon": "assets/icons/stand_up.svg",
      "text": EMenuMain.STAND_UP
    },
    {
      "route": `/catalog/${ETypeMidia.ADULT}`,
      "icon": "assets/icons/adults.svg",
      "text": EMenuMain.ADULTS
    }
  ];

  protected listMenuMainBottom: IMenuMain[] = [
    {
      "route": "/recharge",
      "icon": "assets/icons/recharge.svg",
      "text": EMenuMain.RECHARGE
    },
    {
      "route": "/settings",
      "icon": "assets/icons/settings.svg",
      "text": EMenuMain.SETTINGS
    }
  ]

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    if (typeof localStorage !== 'undefined') {
      const login = JSON.parse(localStorage.getItem('login') || '');
      this.user = login.users[0];
    }
  }
}