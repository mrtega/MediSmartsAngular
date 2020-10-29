import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { MyValidators } from './../Validators/Validators';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  isUsed: string = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
, private data: DataService, private http: HttpClient) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    this.createForm();

  }

  createForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email], MyValidators.UsernameValidator(this.http)],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required],
    }, {
      validators: MyValidators.comparePassword('password', 'password_confirmation')
    }
    );
  }

  onSubmit() {
    this.data.register(this.form.value).subscribe(
      (val => {
        this.form.reset();
        this.authService.login(val);
        this.router.navigate(['/']);
      }),
      ((error: string ) => {
      })
    );
  }
}
