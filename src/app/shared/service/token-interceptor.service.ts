import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  token: any;
  constructor(public auth: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = this.auth.getToken();
    if (this.token != null || this.token != undefined) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token.replace(/^"(.*)"$/, '$1')}`
        }
      });
    }
    // console.log("----request----");
    console.log(request);
    // console.log("--- end of request---");
    return next.handle(request).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        // console.log(" all looks good");
        // http response status code
        // console.log(event.status);
      }
    }, error => {
      // http response status code
      // console.log("----response----");
      // console.error("status code:");
      // console.error(error.status);
      // console.error(error.message);
      // console.log("--- end of response---");
    })
    )
  }
}
