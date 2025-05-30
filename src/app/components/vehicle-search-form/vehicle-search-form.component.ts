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

@Component({
  selector: "app-vehicle-search-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form
      [formGroup]="searchForm"
      (ngSubmit)="onSubmit()"
      class="vehicle-search-form"
    >
      <div class="form-group">
        <label for="vehicleNumber" class="form-label"
          >Vehicle Registration Number</label
        >
        <input
          type="text"
          id="vehicleNumber"
          formControlName="vehicleNumber"
          class="form-control"
          placeholder="Enter vehicle number (e.g., DL01AB1234)"
          [ngClass]="{ 'is-invalid': isInvalid('vehicleNumber') }"
        />
        <div *ngIf="isInvalid('vehicleNumber')" class="error-message">
          <span *ngIf="searchForm.get('vehicleNumber')?.errors?.['required']">
            Vehicle number is required
          </span>
          <span *ngIf="searchForm.get('vehicleNumber')?.errors?.['pattern']">
            Please enter a valid vehicle number
          </span>
        </div>
      </div>

      <!-- <div class="form-group">
        <label for="state" class="form-label">Select State</label>
        <select 
          id="state" 
          formControlName="state" 
          class="form-control"
          [ngClass]="{'is-invalid': isInvalid('state')}"
        >
          <option value="">Select your state</option>
          <option *ngFor="let state of states" [value]="state.code">
            {{ state.name }}
          </option>
        </select>
        <div *ngIf="isInvalid('state')" class="error-message">
          Please select your state
        </div>
      </div> -->

      <button
        type="submit"
        class="btn-primary search-btn"
        [disabled]="searchForm.invalid || isSearching"
      >
        <i class="fas fa-search"></i>
        <span *ngIf="!isSearching">Check Challan</span>
        <span *ngIf="isSearching">Searching...</span>
      </button>
    </form>
  `,
  styles: [
    `
      .vehicle-search-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .form-group {
        position: relative;
      }

      .error-message {
        color: var(--error-color);
        font-size: 0.875rem;
        margin-top: 4px;
      }

      .is-invalid {
        border-color: var(--error-color);
      }

      .search-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        padding: 14px;
        font-size: 1rem;
        transition: var(--transition);
      }

      .search-btn:disabled {
        background-color: var(--neutral-400);
        cursor: not-allowed;
      }

      .search-btn i {
        font-size: 1rem;
      }
    `,
  ],
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
    private challanService: ChallanService
  ) {
    this.searchForm = this.fb.group({
      vehicleNumber: [
        "",
        [
          Validators.required,
          Validators.pattern("^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$"),
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
      this.isSearching = true;
      const { vehicleNumber, state } = this.searchForm.value;

      this.challanService.searchChallan(vehicleNumber, state).subscribe({
        next: (data) => {
          this.challanService.setSearchResults(data);
          this.router.navigate(["/results"]);
          this.isSearching = false;
        },
        error: (err) => {
          console.error("Error searching challan:", err);
          this.isSearching = false;
          // Handle error - could redirect to error page or show message
        },
      });
    } else {
      this.searchForm.markAllAsTouched();
    }
  }
}
