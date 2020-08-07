import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const modifiedRequest = request.clone({
      headers: request.headers.append('Auth', 'test')
    });
    return next.handle(modifiedRequest).pipe(tap(response => {
      if (response.type === HttpEventType.Response) {
      }
    }));
  }
}