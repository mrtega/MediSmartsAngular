import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from './../Service/auth.service';
import { NotifierService } from 'angular-notifier';
import { UserService } from './../Service/user.service';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  errors: Array<object> =[];

  constructor(private data: DataService, private authService: AuthService, private router: Router,
              private notifier: NotifierService, private user: UserService) { }

  ngOnInit(): void {
    this.formInit();
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  formInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onLogin() {
    this.data.login(this.form.value).subscribe(
      (val) => {
        this.authService.login(val);
        this.showSuccessNotification('Login Successful');
        this.router.navigate(['/']);
      },
      (response: HttpErrorResponse) => {
        this.form.reset();
        this.errors.length = 0;
        this.errors.push(response);
        this.showErrorNotification('Invalid Credentials');
      }
    )
  }

  public showSuccessNotification(message: string): void {
    this.notifier.notify('success', message);
  }

  public showErrorNotification(message: string): void {
    this.notifier.notify('error', message);
  }

}
