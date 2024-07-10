import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../../app.abstract';
import { KeyboardComponent } from '../../../components/keyboard/keyboard.component';
import { EInputLogin } from '../../../enums/input-login.enum';

@Component({
  selector: 'iplex-user-login',
  standalone: true,
  imports: [TranslateModule, NgIf, ReactiveFormsModule, KeyboardComponent],
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent extends AppAbstract implements OnInit {
  EInputLogin: typeof EInputLogin = EInputLogin;

  protected formLogin!: FormGroup;
  protected subject: boolean = false;
  protected errorUser: boolean = false;

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.formLogin = this._formBuilder.group({
      user: ['Char2305', Validators.required],
      password: ['2304char', Validators.required]
    })
  }

  protected keyboardOutput(input: string): void { }

  protected onSubmit(): void { }

  get f(): { [key: string]: any } {
    return this.formLogin.controls;
  }
}
