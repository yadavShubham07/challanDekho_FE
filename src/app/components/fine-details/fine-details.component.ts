import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-fine-details",
  templateUrl: "./fine-details.component.html",
  styleUrls: ["./fine-details.component.scss"],
  imports: [FormsModule, CommonModule],
})
export class FineDetailsComponent {
  fineList = [
    {
      violation: "Red Light Violation",
      amount: 1000,
      penalties: "License suspension for repeat offense",
    },
    {
      violation: "Speeding",
      amount: 2000,
      penalties: "Points on license",
    },
    {
      violation: "No Helmet",
      amount: 500,
      penalties: "None",
    },
    {
      violation: "Wrong Side Driving",
      amount: 5000,
      penalties: "License suspension",
    },
    {
      violation: "No Parking",
      amount: 500,
      penalties: "Vehicle towing charges extra",
    },
    {
      violation: "Using Mobile While Driving",
      amount: 1000,
      penalties: "License suspension for repeat offense",
    },
  ];
}
