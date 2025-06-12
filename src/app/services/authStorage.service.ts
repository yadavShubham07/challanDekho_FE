import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthStorageService {
  private TOKEN_KEY = "jwtToken";
  private PHONE_KEY = "phoneNumber";

  public saveToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public savePhoneNumber(phone: string): void {
    sessionStorage.setItem(this.PHONE_KEY, phone);
  }

  public getPhoneNumber(): string | null {
    return sessionStorage.getItem(this.PHONE_KEY);
  }

  public clear(): void {
    sessionStorage.clear();
  }
}
