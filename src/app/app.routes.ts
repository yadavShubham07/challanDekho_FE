import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "search",
    loadComponent: () =>
      import("./pages/challan-search/challan-search.component").then(
        (m) => m.ChallanSearchComponent
      ),
  },
  {
    path: "results",
    loadComponent: () =>
      import("./pages/challan-results/challan-results.component").then(
        (m) => m.ChallanResultsComponent
      ),
  },
  {
    path: "fines",
    loadComponent: () =>
      import("./components/fine-details/fine-details.component").then(
        (m) => m.FineDetailsComponent
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
