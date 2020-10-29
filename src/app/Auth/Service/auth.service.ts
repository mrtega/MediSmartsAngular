import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private data: DataService, private router: Router) {
    if (this.isLoggedIn()) {
      this.refresh();
    }
  }

  register(): void{
    
  }

  login(val: any): void {
    localStorage.setItem('token', val.accessToken);
    localStorage.setItem('user', JSON.stringify(val.user));
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('token') !== null && localStorage.getItem('user') !== null) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.router.navigate(['login']);
    if (this.isLoggedIn) {
      this.data.logout(null).subscribe();
    }
    localStorage.clear();
  }

  refresh(): void{
    this.data.user().subscribe(
      (val) => localStorage.setItem('user', JSON.stringify(val))
    );
  }

}
