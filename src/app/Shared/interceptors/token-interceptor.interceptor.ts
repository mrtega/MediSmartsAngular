import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token');
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });

    }

    return next.handle(request);
  }
}
