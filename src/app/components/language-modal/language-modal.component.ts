import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';

@Component({
  selector: 'iplex-language-modal',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './language-modal.component.html'
})
export class LanguageModalComponent extends AppAbstract {
  @Output() languageLoginOutput = new EventEmitter();

  protected closeLaguangeLogin(): void {
    this.languageLoginOutput.emit();
  }
}