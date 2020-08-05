import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    return this.authService.user
      .pipe(
        take(1),
        exhaustMap(
          user => {
            const modifiedRequest = user
            ? request.clone({ params: new HttpParams().set('auth', user.token )})
            : request;
            return next.handle(modifiedRequest)
          }
        )
      )
  }
}