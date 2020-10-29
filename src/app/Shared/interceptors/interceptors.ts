import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContentTpyeInterceptor } from './content-tpye.interceptor';
import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';
import { AuthInterceptor } from './auth.interceptor';

export const httpInterceptProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ContentTpyeInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true},
]
