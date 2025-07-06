import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { environment } from "../../environment/environment"; // path to env file
import { AuthStorageService } from "./authStorage.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private baseUrl = environment.apiBaseUrl;

  private currentUser: any = null;
  private redirectUrl: string = "/dashboard"; // Default redirect after login

  constructor(
    private http: HttpClient,
    private storageService: AuthStorageService,
    private router: Router
  ) {}

  sendOtp(mobileNumber: string): Observable<any> {
    let signupReq = { phoneNumber: mobileNumber };

    return this.http.post(`${this.baseUrl}signup`, signupReq);
  }

  verifyOtp(mobileNumber: string, otp: string): Observable<any> {
    let signupReq = { phoneNumber: mobileNumber, otp: otp };

    return this.http.post(`${this.baseUrl}otp`, signupReq);
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.storageService.clear();
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
