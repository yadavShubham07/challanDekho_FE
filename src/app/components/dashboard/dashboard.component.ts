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
  isSearching = false;
  activeTab = "pending";
  challans: ChallanDetail[] = [];
  showProfile = false;
  searchNewVehicleNumber = "";
  vehicleNumberReceived = "";
  hasSearchedVehicles = false; // Track if user has searched for vehicles
  mobileNumber: string | null = "";
  showOnlyLoginSpecificLabels: boolean = false;
  noPendingChallans = false;
  selectedChallan: ChallanDetail | null = null;
  showDetailsModal = false;

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
        this.loading = false;
        this.showOnlyLoginSpecificLabels = true;
        this.hasSearchedVehicles = false; // Track if user has searched for vehicles
      }
    });
  }

  fetchChallanDetails(vehicleNo: string) {
    console.log("inside fetchCd");
    this.showProfile = false;
    this.noPendingChallans = false;
    this.loading = true;
    this.hasSearchedVehicles = true; // Track if user has searched for vehicles
    this.challanService.searchChallan(vehicleNo).subscribe({
      next: (response) => {
        this.loading = false;
        this.isSearching = false;
        this.arrangeChallanDetailsReceivedResponse(response);
      },
      error: (err) => {
        this.loading = false;
        console.log("error", err);
      },
    });
  }

  arrangeChallanDetailsReceivedResponse(response: any): void {
    if (response.code === "305") {
      console.log("no challan details rpesent");
      this.noPendingChallans = true;
    } else {
      this.pendingChallans = response.data.pendingData;
      this.disposedChallans = response.data.disposedData;
      this.searchNewVehicleNumber = "";
      console.log("data", this.pendingChallans);
    }
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

  getStatusClass(status: string): string {
    return status.toLowerCase() === "pending"
      ? "status-pending"
      : "status-paid";
  }

  searchNewVehicleDetails(): void {
    console.log("inside searchNewVhe", this.searchNewVehicleNumber);
    if (this.searchNewVehicleNumber) {
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

  isVehicleNumberInvalid(): boolean {
    const vehicleNumberControl = document.querySelector(
      'input[name="vehicleNumber"]'
    ) as HTMLInputElement;
    if (!vehicleNumberControl) return false;

    const value = this.searchNewVehicleNumber;
    const isTouched =
      vehicleNumberControl.classList.contains("ng-touched") ||
      vehicleNumberControl.classList.contains("ng-dirty");

    if (!value && isTouched) return true; // Required validation
    if (value && !/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$/.test(value))
      return true; // Pattern validation

    return false;
  }

  viewDetails(challan: ChallanDetail): void {
    this.selectedChallan = challan;
    this.showDetailsModal = true;
  }

  closeDetailsModal(): void {
    this.showDetailsModal = false;
    this.selectedChallan = null;
  }

  getOffenceDetailsInHindi(offenceName: string): string {
    // Map English offence names to Hindi translations
    const hindiTranslations: { [key: string]: string } = {
      "Fitness certificate (CF) of a transport vehicle not produced on demand for examination by the officer authorised.":
        "परिवहन वाहन का फिटनेस प्रमाणपत्र (CF) अधिकृत अधिकारी द्वारा मांगे जाने पर परीक्षा के लिए प्रस्तुत नहीं किया गया।",
      "Driving or causing or allowing to be driven a vehicle as contract carriage without valid permit.(MMV and HMV)":
        "वैध परमिट के बिना वाहन को अनुबंध गाड़ी के रूप में चलाना या चलवाना या चलाने की अनुमति देना। (MMV और HMV)",
      "test offence 1 rupee": "परीक्षण अपराध 1 रुपया",
      "Red Light Violation": "लाल बत्ती का उल्लंघन",
      "No Parking Zone": "पार्किंग निषेध क्षेत्र",
      Speeding: "तेज़ गति से गाड़ी चलाना",
      "No Helmet": "हेलमेट नहीं पहनना",
      "Using mobile phone while driving": "गाड़ी चलाते समय मोबाइल फोन का उपयोग",
      "Driving without license": "बिना लाइसेंस के गाड़ी चलाना",
      "Driving without insurance": "बिना बीमा के गाड़ी चलाना",
    };

    return hindiTranslations[offenceName] || "अपराध का विवरण उपलब्ध नहीं है";
  }
}
