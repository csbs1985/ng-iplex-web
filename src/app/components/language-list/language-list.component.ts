import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';

@Component({
  selector: 'iplex-language-list',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-list.component.html'
})
export class LanguageListComponent extends AppAbstract {
  @Output() languageLoginOutput = new EventEmitter();

  protected closeLaguangeLogin(): void {
    this.languageLoginOutput.emit();
  }
}