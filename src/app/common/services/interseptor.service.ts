import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          console.error('Bad Request:', error.message);
        } else if (error.status === 404) {
          console.error('Not Found:', error.message);
        } else if (error.status === 500) {
          console.error('Internal Server Error:', error.message);
        } else {
          console.error('Unexpected Error:', error.message);
        }

        throw error; 
      })
    );
  }
}
