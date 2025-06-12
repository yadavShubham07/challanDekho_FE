import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ChallanDetail, OffenceDetail } from "../../models/challan.model";
import { AuthService } from "../../services/auth.service";
import { ChallanService } from "../../services/challan.service";
import { AuthStorageService } from "../../services/authStorage.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboard",
  imports: [CommonModule, FormsModule],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.css",
})
export class DashboardComponent implements OnInit {
  challans: ChallanDetail[] = [];
  loading = true;
  showProfile = false;
  searchVehicleNumber = "";
  isSearching = false;

  mobileNumber: string | null = "";

  constructor(
    private authService: AuthService,
    private challanService: ChallanService,
    private router: Router,
    private storageService: AuthStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mobileNumber = this.storageService.getPhoneNumber();
    this.route.queryParams.subscribe((params) => {
      this.searchVehicleNumber = params["vehicle"];
      if (this.searchVehicleNumber) {
        this.fetchChallanDetails();
      }
    });
  }

  fetchChallanDetails() {
    this.challanService
      .searchChallan(this.searchVehicleNumber)
      .subscribe((data) => {
        console.log("challan res", data);
      });
  }

  getTotalAmount(): number {
    return this.challans.reduce((total, challan) => {
      return total + parseInt(challan.fineImposed || "0");
    }, 0);
  }

  getLatestChallanDate(): string {
    if (this.challans.length === 0) return "N/A";

    const latest = this.challans.reduce((latest, current) => {
      const currentDate = new Date(current.challanDateTime);
      const latestDate = new Date(latest.challanDateTime);
      return currentDate > latestDate ? current : latest;
    });

    return this.formatDate(latest.challanDateTime);
  }

  formatDate(dateString: string): string {
    try {
      const [datePart, timePart] = dateString.split(" ");
      const [day, month, year] = datePart.split("-");
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  }

  getCurrentDateTime(): string {
    return new Date().toLocaleString("en-IN");
  }

  getStatusClass(status: string): string {
    return status.toLowerCase() === "pending"
      ? "status-pending"
      : "status-paid";
  }

  trackByChallanNo(index: number, challan: ChallanDetail): string {
    return challan.challanNo;
  }

  payChallan(challan: ChallanDetail): void {
    console.log("Pay challan:", challan.challanNo);
    // Implement payment logic
  }

  viewDetails(challan: ChallanDetail): void {
    console.log("View details:", challan);
    // Implement view details logic
  }

  searchNewVehicle(): void {
    if (!this.searchVehicleNumber) {
      return;
    }

    this.isSearching = true;
    // Simulate API call
    setTimeout(() => {
      console.log("Searching for:", this.searchVehicleNumber);
      this.isSearching = false;
      // Reset form
      this.searchVehicleNumber = "";
    }, 2000);
  }

  exportData(): void {
    console.log("Exporting challan data...");
    // Implement export functionality
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
