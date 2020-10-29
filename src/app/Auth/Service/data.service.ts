import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Constants } from 'src/app/Shared/interfaces/constants';
import { Observable } from 'rxjs';
import { Register } from '../Interface/register';
import { Login } from '../Interface/login';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {
  }

  checkEmail(value: object): Observable<any> {
    return this.http.post<string>(Constants.getApiUrl() + '/api/email/', value);
  }

  register(value: Register): Observable<any> {
    return this.http.post<Register>(Constants.getApiUrl() + '/api/register/', value);
  }

  login(value: Login): Observable<any> {
    return this.http.post<Login>(Constants.getApiUrl() + '/api/login/', value);
  }

  logout(value: object): Observable<any> {
    return this.http.post<object>(Constants.getApiUrl() + '/api/userLogout/', value);
  }

  user(): Observable<any> {
    return this.http.get<object>(Constants.getApiUrl() + '/api/user/');
  }

}
