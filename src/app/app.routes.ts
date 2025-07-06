import { Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { GuestGuard } from "./guards/guest.guard";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/home/home.component").then((m) => m.HomeComponent),
    canActivate: [GuestGuard], // Only accessible when not logged in
  },
  {
    path: "search",
    loadComponent: () =>
      import("./pages/challan-search/challan-search.component").then(
        (m) => m.ChallanSearchComponent
      ),
    canActivate: [GuestGuard], // Only accessible when not logged in
  },
  {
    path: "results",
    loadComponent: () =>
      import("./pages/challan-results/challan-results.component").then(
        (m) => m.ChallanResultsComponent
      ),
    canActivate: [GuestGuard], // Only accessible when not logged in
  },
  {
    path: "fines",
    loadComponent: () =>
      import("./components/fine-details/fine-details.component").then(
        (m) => m.FineDetailsComponent
      ),
  },
  {
    path: "dashboard",
    loadComponent: () =>
      import("./components/dashboard/dashboard.component").then(
        (m) => m.DashboardComponent
      ),
    canActivate: [AuthGuard], // Protected route - requires authentication
  },
  {
    path: "about",
    loadComponent: () =>
      import("./pages/about/about.component").then((m) => m.AboutComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
