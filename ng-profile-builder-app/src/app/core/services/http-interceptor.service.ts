import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.start();

    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.stop();
      })
    );
  }
}
