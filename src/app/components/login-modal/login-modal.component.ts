import { Component } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxOtpInputConfig } from "ngx-otp-input";
import { NgxOtpInputModule } from "ngx-otp-input";
import { AuthStorageService } from "../../services/authStorage.service";
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: "app-login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.scss"],
  imports: [FormsModule, CommonModule, NgxOtpInputModule, RouterModule],
})
export class LoginModalComponent {
  mobileNumber: string = "1234567890";
  showOtp: boolean = false;
  otpArray: string[] = [];
  enableVerifyOtp: boolean = false;
  finalOtpString = "";

  otpConfig: NgxOtpInputConfig = {
    otpLength: 4,
    autofocus: true,
    classList: {
      inputBox: "otp-input-box",
      input: "otp-input",
      inputFilled: "otp-filled",
      inputDisabled: "otp-disabled",
      inputSuccess: "otp-success",
      inputError: "otp-error",
    },
  };

  constructor(
    private dialogRef: MatDialogRef<LoginModalComponent>,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private authStorageService: AuthStorageService,
    private router: Router
  ) {}

  isValidMobile(): boolean {
    return /^[0-9]{10}$/.test(this.mobileNumber);
  }

  isValidOtp(): boolean {
    console.log("isvalid", this.otpArray);
    this.finalOtpString = this.otpArray.join("");
    return this.finalOtpString.length === 4;
  }

  sendOtp(): void {
    if (this.isValidMobile()) {
      this.authService.sendOtp(this.mobileNumber).subscribe({
        next: (data) => {
          if (data.status == true) {
            console.log("otp sent");
            this.showOtp = true;
          }
        },
        error: (error) => {
          console.error("Error sending OTP:", error);
        },
      });
    }
  }

  onOtpChange(otp: any): void {
    this.otpArray = otp;
    console.log("onotpchange", this.otpArray[3]);
    if (this.otpArray[3] && this.otpArray[3].length > 0) {
      this.enableVerifyOtp = true;
    } else {
      this.enableVerifyOtp = false;
    }
  }

  verifyOtp(): void {
    if (this.isValidOtp()) {
      this.authService
        .verifyOtp(this.mobileNumber, this.finalOtpString)
        .subscribe({
          next: (response) => {
            if (response.status == true) {
              this.dialogRef.close(true);
              this.saveDataInStorage(response);
              this.authService.isAuthenticatedSubject.next(true);
              this.router.navigate(["/dashboard"], {
                queryParams: { vehicle: this.dialogData },
              });
            }
          },
          error: (error) => {
            console.error("Error verifying OTP:", error);
          },
        });
    }
  }

  resendOtp(): void {
    this.sendOtp();
  }

  saveDataInStorage(response: any) {
    this.authStorageService.savePhoneNumber(response.data.phoneNumber);
    this.authStorageService.saveToken(response.data.token);
  }
}
