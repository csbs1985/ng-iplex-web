import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AppAbstract } from '../../../app.abstract';
import { ILogin } from '../../../models/login.interface';

@Component({
  selector: 'iplex-form-login',
  standalone: true,
  imports: [TranslateModule, NgIf, ReactiveFormsModule],
  templateUrl: './form-login.component.html'
})
export class FormLoginComponent extends AppAbstract implements OnInit {
  protected formLogin!: FormGroup;

  protected errorUser: boolean = false;
  protected errorPasswrod: boolean = false;

  private login!: ILogin;

  subject: boolean = false;

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.formLogin = this._formBuilder.group({
      user: ['Char2305', Validators.required],
      password: ['2304char', Validators.required]
    })
  }

  protected onSubmit(): void {
    this.subject = true;

    if (this.formLogin.valid) {
      try {
        this._loginService.loading = true;
        // this.userValidator();
      } catch (error) {

      }
    }
  }

  private userValidator(): void {
    this.errorUser = this.errorPasswrod = false;

    const user = this.formLogin.value.user;
    const password = this.formLogin.value.password;

    if (user !== 'Char2305') {
      this.errorUser = true;
    } else if (password !== "2304char") {
      this.errorPasswrod = true;
    } else {
      this.userSave();
    };

    this._loginService.loading = false;
  }

  private userSave(): void {
    this.login = {
      user: this.formLogin.value.user,
      password: this.formLogin.value.password,
      users: [
        {
          name: this.formLogin.value.user,
          avatar: 'https://rollingstone.uol.com.br/media/_versions/homem_de_ferro_reproducao_widelg.jpg'
        },
        {
          name: 'Luiza',
          avatar: ''
        },
        {
          name: 'Sabrina',
          avatar: ''
        }
      ]
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('login', JSON.stringify(this.login));
    }

    this._router.navigate(['/users']);
  }

  get f(): { [key: string]: any } {
    return this.formLogin.controls;
  }
}