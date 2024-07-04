import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppAbstract } from './app.abstract';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent extends AppAbstract {
  ngOnInit(): void {
    this._languageService.initLanguage();
  }
}