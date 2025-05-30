import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "../../services/auth.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.scss"],
  imports: [FormsModule, CommonModule],
})
export class LoginModalComponent {
  mobileNumber: string = "";
  showOtp: boolean = false;
  otp: string = "";

  otpConfig = {
    length: 6,
    inputStyles: {
      width: "40px",
      height: "40px",
    },
  };

  constructor(
    private dialogRef: MatDialogRef<LoginModalComponent>,
    private authService: AuthService
  ) {}

  isValidMobile(): boolean {
    return /^[0-9]{10}$/.test(this.mobileNumber);
  }

  isValidOtp(): boolean {
    return this.otp.length === 6;
  }

  sendOtp(): void {
    if (this.isValidMobile()) {
      this.authService.sendOtp(this.mobileNumber).subscribe({
        next: () => {
          this.showOtp = true;
        },
        error: (error) => {
          console.error("Error sending OTP:", error);
        },
      });
    }
  }

  onOtpChange(otp: string): void {
    this.otp = otp;
  }

  verifyOtp(): void {
    if (this.isValidOtp()) {
      this.authService.verifyOtp(this.mobileNumber, this.otp).subscribe({
        next: () => {
          this.dialogRef.close(true);
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
}
