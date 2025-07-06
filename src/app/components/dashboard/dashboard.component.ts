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
  pendingChallans: ChallanDetail[] = [];
  disposedChallans: ChallanDetail[] = [];
  loading = true;
  searchVehicleNumber = "";
  searchMobileNumber = "";
  isSearching = false;
  activeTab = "pending";
  challans: ChallanDetail[] = [];
  showProfile = false;
  searchNewVehicleNumber = "";
  vehicleNumberReceived = "";

  mobileNumber: string | null = "";
  showOnlyLoginSpecificLabels: boolean = false;

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
      console.log("inisde route", params);
      this.vehicleNumberReceived = params["vehicle"];
      if (this.vehicleNumberReceived) {
        console.log("vehicleNo recvd");
        this.fetchChallanDetails(this.vehicleNumberReceived);
      } else {
        this.showOnlyLoginSpecificLabels = true;
      }
    });
  }

  fetchChallanDetails(vehicleNo: string) {
    this.loading = true;
    this.challanService.searchChallan(vehicleNo).subscribe({
      next: (response) => {
        //this.challans = response.data;
        this.challans = response.data.pendingData;
        //this.disposedChallans = response.data.disposedData;
        this.loading = false;
        this.isSearching = false;
        this.searchNewVehicleNumber = "";
        console.log("data", this.pendingChallans);
      },
      error: (err) => {
        this.loading = false;
        console.log("error", err);
      },
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  getTotalPendingAmount(): number {
    return this.pendingChallans.reduce((total, challan) => {
      return total + parseInt(challan.fineImposed || "0");
    }, 0);
  }

  getTotalAmount(): number {
    return this.challans.reduce((total, challan) => {
      return total + parseInt(challan.fineImposed || "0");
    }, 0);
  }

  getLatestChallanDate(): string {
    const allChallans = [...this.pendingChallans, ...this.disposedChallans];
    if (allChallans.length === 0) return "N/A";

    const latest = allChallans.reduce((latest, current) => {
      const currentDate = new Date(current.challanDateTime);
      const latestDate = new Date(latest.challanDateTime);
      return currentDate > latestDate ? current : latest;
    });

    return this.formatDate(latest.challanDateTime);
  }

  formatDate(dateString: string): string {
    try {
      const [datePart] = dateString.split(" ");
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

  formatTime(dateString: string): string {
    try {
      const [, timePart] = dateString.split(" ");
      return timePart;
    } catch {
      return "";
    }
  }

  getCurrentDateTime(): string {
    return new Date().toLocaleString("en-IN");
  }

  getCurrentUserMobile(): string {
    const number = this.storageService.getPhoneNumber();
    return number ? `+91 ${number}` : "User";
  }

  trackByChallanNo(index: number, challan: ChallanDetail): string {
    return challan.challanNo;
  }

  payChallan(challan: ChallanDetail): void {
    console.log("Pay challan:", challan.challanNo);
    alert(
      `Payment gateway would open for Challan: ${challan.challanNo}\nAmount: ₹${challan.fineImposed}`
    );
  }

  viewDetails(challan: ChallanDetail): void {
    console.log("View details:", challan);
    alert(`Detailed view for Challan: ${challan.challanNo}`);
  }

  getStatusClass(status: string): string {
    return status.toLowerCase() === "pending"
      ? "status-pending"
      : "status-paid";
  }

  searchNewVehicleDetails(): void {
    if (!this.searchNewVehicleNumber) {
      this.isSearching = true;
      this.fetchChallanDetails(this.searchNewVehicleNumber);
    }
  }

  exportData(): void {
    console.log("Exporting challan data...");
    // Implement export functionality
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

  searchNewVehicle(): void {
    if (!this.searchVehicleNumber || !this.searchMobileNumber) {
      return;
    }

    this.isSearching = true;
    setTimeout(() => {
      console.log(
        "Searching for:",
        this.searchVehicleNumber,
        this.searchMobileNumber
      );
      this.isSearching = false;
      this.searchVehicleNumber = "";
      this.searchMobileNumber = "";
      alert("Search completed! New results would be displayed here.");
    }, 2000);
  }
}
