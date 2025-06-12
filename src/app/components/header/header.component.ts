import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { LoginModalComponent } from "../login-modal/login-modal.component";
import { RouterModule, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { firstValueFrom } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  imports: [RouterModule, CommonModule],
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAuth) => {
      console.log("flow here at header after llogin sccs", isAuth);
      this.isAuthenticated = isAuth;
      // Navigate to dashboard when user logs in
      // if (isAuth) {
      //   this.router.navigate(["/dashboard"]);
      // }
    });
  }

  openLoginModal(): void {
    this.dialog.open(LoginModalComponent, {
      width: "400px",
      panelClass: "login-modal",
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
