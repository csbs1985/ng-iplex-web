import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../app.abstract';
import { EKeyboard } from '../../enums/keyboard.enum';

@Component({
  selector: 'iplex-keyboard',
  standalone: true,
  imports: [RouterModule, TranslateModule, NgIf, NgFor],
  templateUrl: './keyboard.component.html'
})
export class KeyboardComponent extends AppAbstract implements OnInit {
  @Input() keyboardInput: string = '';

  @Output() keyboardOutput = new EventEmitter<string>();

  EKeyboard: typeof EKeyboard = EKeyboard;

  protected listKeyboardLowercase: string[] = [];
  protected listKeyboardNumbers: string[] = [];
  protected listKeyboardUppercase: string[] = [];

  protected typeKeyboard: EKeyboard = EKeyboard.UPPERCASE;

  ngOnInit(): void {
    this.generateKeys();
  }

  protected generateKeys(): void {
    this.listKeyboardLowercase = [...Array(26).keys()].map(x => String.fromCharCode(x + 65));

    this.listKeyboardUppercase = [...Array(26).keys()].map(x => String.fromCharCode(x + 97));

    this.listKeyboardNumbers = [...Array(10).keys()].map(x => String.fromCharCode(x + 48))
      .concat([
        '!', '@', '#', '$', '%', '&', '*', '(', ')', '_', '-', '+', '{', '}', '[', ']', '\\', '|', '/', '?', '!', '<', '>', '.', ':', ';'])
  }

  protected selectKey(key: string): void {
    this.keyboardInput = this.keyboardInput.concat(key);
    this.keyboardOutput.emit(this.keyboardInput);
  }

  protected selectSpace(): void {
    this.keyboardInput = this.keyboardInput.concat(" ");
    this.keyboardOutput.emit(this.keyboardInput);
  }

  protected selectBackspace(): void {
    this.keyboardInput = this.keyboardInput.slice(0, -1);
    this.keyboardOutput.emit(this.keyboardInput);
  }

  protected selectClean(): void {
    this.keyboardInput = "";
    this.keyboardOutput.emit(this.keyboardInput);
  }

  toggleKeyboardType(): void {
    switch (this.typeKeyboard) {
      case EKeyboard.UPPERCASE:
        this.typeKeyboard = EKeyboard.LOWERCASE;
        break;
      case EKeyboard.LOWERCASE:
        this.typeKeyboard = EKeyboard.NUMBERS;
        break;
      default:
        this.typeKeyboard = EKeyboard.UPPERCASE;
    }
  }

  get keyKeyboardType(): string {
    switch (this.typeKeyboard) {
      case EKeyboard.UPPERCASE:
        return 'abc';
      case EKeyboard.LOWERCASE:
        return '123';
      default:
        return 'ABC';
    }
  }
}