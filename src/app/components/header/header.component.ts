import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { MatDialog } from "@angular/material/dialog";
import { LoginModalComponent } from "../login-modal/login-modal.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  imports: [RouterModule],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private dialog: MatDialog) {}

  openLoginModal(): void {
    this.dialog.open(LoginModalComponent, {
      width: "400px",
      panelClass: "login-modal",
    });
  }
}
