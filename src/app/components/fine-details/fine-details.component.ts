import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-fine-details",
  templateUrl: "./fine-details.component.html",
  styleUrls: ["./fine-details.component.scss"],
  imports: [CommonModule],
})
export class FineDetailsComponent {
  documentOffences = [
    {
      violation: "Driving without a license",
      amount: 5000,
      description: "Operating any vehicle without a valid driving license",
    },
    {
      violation: "Driving with a suspended/expired driving License",
      amount: 5000,
      description: "Operating vehicle with an invalid or expired license",
    },
    {
      violation: "Underage Driver without a Driving License",
      amount: 5000,
      description: "Minor operating vehicle without proper authorization",
    },
    {
      violation: "Driving without Registration Certificate",
      amount: 10000,
      description: "Vehicle operation without valid registration documents",
    },
    {
      violation: "Plying transport vehicle without a Fitness Certificate",
      amount: 10000,
      description: "Operating commercial vehicle without fitness certification",
    },
    {
      violation: "Driving a vehicle without insurance",
      amount: 4000,
      description: "Operating uninsured vehicle on public roads",
    },
  ];

  drivingOffences = [
    {
      violation: "Overloading",
      amount: 20000,
      extraCharge: "₹2000/tonne extra",
      description: "Carrying load beyond permitted capacity",
    },
    {
      violation: "Dangerous/Rash driving",
      amount: 10000,
      description: "Operating vehicle in a manner dangerous to public safety",
    },
    {
      violation: "Using a mobile phone while driving",
      amount: 10000,
      description: "Using handheld devices while operating vehicle",
    },
    {
      violation: "Over-speeding",
      amount: 2000,
      description: "Exceeding prescribed speed limits",
    },
    {
      violation: "Drunken driving/abetment",
      amount: 15000,
      description: "Operating vehicle under influence of alcohol",
    },
    {
      violation: "Driver without helmet or Turban/Helmet",
      amount: 1000,
      description: "Two-wheeler operation without proper head protection",
    },
    {
      violation: "Pillion Rider without Helmet",
      amount: 1000,
      description: "Passenger on two-wheeler without helmet",
    },
  ];
}
