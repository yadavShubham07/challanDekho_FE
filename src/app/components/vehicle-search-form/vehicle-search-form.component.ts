import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ChallanService } from "../../services/challan.service";
import { MatDialog } from "@angular/material/dialog";
import { LoginModalComponent } from "../login-modal/login-modal.component";

@Component({
  selector: "app-vehicle-search-form",
  templateUrl: "./vehicle-search-form.component.html",
  styleUrls: ["./vehicle-search-form.component.scss"],
  imports: [ReactiveFormsModule, CommonModule],
})
export class VehicleSearchFormComponent {
  searchForm: FormGroup;
  isSearching = false;

  states = [
    { code: "DL", name: "Delhi" },
    { code: "MH", name: "Maharashtra" },
    { code: "KA", name: "Karnataka" },
    { code: "TN", name: "Tamil Nadu" },
    { code: "UP", name: "Uttar Pradesh" },
    { code: "RJ", name: "Rajasthan" },
    { code: "GJ", name: "Gujarat" },
    { code: "WB", name: "West Bengal" },
    { code: "AP", name: "Andhra Pradesh" },
    { code: "TS", name: "Telangana" },
    { code: "KL", name: "Kerala" },
    { code: "PB", name: "Punjab" },
    { code: "HR", name: "Haryana" },
    { code: "BR", name: "Bihar" },
    { code: "MP", name: "Madhya Pradesh" },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private challanService: ChallanService,
    private dialog: MatDialog
  ) {
    this.searchForm = this.fb.group({
      vehicleNumber: [
        "KL150000",
        [
          Validators.required,
          //Validators.pattern("^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$"),
        ],
      ],
      //state: ['', Validators.required]
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.searchForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      //show login popup
      const { vehicleNumber } = this.searchForm.value;
      //const { vehicleNumber } = "KL150000'";

      this.dialog.open(LoginModalComponent, {
        width: "400px",
        panelClass: "login-modal",
        data: vehicleNumber,
      });
    } else {
      this.searchForm.markAllAsTouched();
    }
  }
}
