// auth.interceptor.ts
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem("jwtToken");

    console.log("token intert", token, req);

    if (req.url.includes("/signup") || req.url.includes("/otp")) {
      return next.handle(req);
    }

    const authReq = token
      ? req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        })
      : req;
    console.log("final authreq", authReq);

    // Forward the request and optionally catch errors
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log("error in calling", error);

        // Optional: handle token expiry, 401s, etc.
        if (error.status === 401) {
          console.warn("Unauthorized - maybe redirect to login?");
        }
        return throwError(() => error);
      })
    );
  }
}
