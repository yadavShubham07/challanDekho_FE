import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Challan, ChallanSearchResult } from "../models/challan.model";
import { environment } from "../../environment/environment"; // path to env file

@Injectable({
  providedIn: "root",
})
export class ChallanService {
  private searchResults: ChallanSearchResult | null = null;

  private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  searchChallan(vehicleNumber: string): Observable<any> {
    const params = new HttpParams().set("rcNumber", vehicleNumber);

    return this.http.get(`${this.baseUrl}fetchChallans`, { params });
  }

  setSearchResults(results: ChallanSearchResult): void {
    this.searchResults = results;
  }

  getSearchResults(): ChallanSearchResult | null {
    return this.searchResults;
  }

  clearSearchResults(): void {
    this.searchResults = null;
  }
}
