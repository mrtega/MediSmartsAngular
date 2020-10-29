import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './../Interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private auth: AuthService ) {}

  user(): User {
    const user = localStorage.getItem('user') || null;
    return JSON.parse(user);
  }

}
