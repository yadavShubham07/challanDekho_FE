import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  sendOtp(mobileNumber: string): Observable<any> {
    // Mock API call
    return of({ success: true }).pipe(
      delay(1000),
      tap(() => console.log(`OTP sent to ${mobileNumber}`))
    );
  }

  verifyOtp(mobileNumber: string, otp: string): Observable<any> {
    // Mock API call
    return of({ success: true }).pipe(
      delay(1000),
      tap(() => {
        console.log(`OTP verified for ${mobileNumber}`);
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}