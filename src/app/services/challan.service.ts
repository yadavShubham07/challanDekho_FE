import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Challan, ChallanSearchResult } from '../models/challan.model';

@Injectable({
  providedIn: 'root'
})
export class ChallanService {
  private searchResults: ChallanSearchResult | null = null;
  
  // Mock data for demo purposes
  private mockChallans: Record<string, Challan[]> = {
    'DL01AB1234': [
      {
        id: '1',
        challanNumber: 'DL2023456789',
        vehicleNumber: 'DL01AB1234',
        date: '2025-02-15',
        location: 'Connaught Place, New Delhi',
        violation: 'Red Light Violation',
        amount: 1000,
        status: 'Pending',
        issuedBy: 'Delhi Traffic Police'
      },
      {
        id: '2',
        challanNumber: 'DL2023456790',
        vehicleNumber: 'DL01AB1234',
        date: '2025-01-10',
        location: 'India Gate, New Delhi',
        violation: 'No Parking Zone',
        amount: 500,
        status: 'Paid',
        issuedBy: 'Delhi Traffic Police'
      },
      {
        id: '3',
        challanNumber: 'DL2023456791',
        vehicleNumber: 'DL01AB1234',
        date: '2025-03-05',
        location: 'Karol Bagh, New Delhi',
        violation: 'Speeding',
        amount: 2000,
        status: 'Pending',
        issuedBy: 'Delhi Traffic Police'
      }
    ],
    'MH02CD5678': [
      {
        id: '4',
        challanNumber: 'MH2023456789',
        vehicleNumber: 'MH02CD5678',
        date: '2025-02-20',
        location: 'Marine Drive, Mumbai',
        violation: 'No Helmet',
        amount: 500,
        status: 'Pending',
        issuedBy: 'Mumbai Traffic Police'
      }
    ]
  };
  
  constructor(private http: HttpClient) {}
  
  searchChallan(vehicleNumber: string, state: string): Observable<ChallanSearchResult> {
    // In a real app, this would be an API call
    // For demo, we'll use mock data
    
    const challans = this.mockChallans[vehicleNumber] || [];
    
    const result: ChallanSearchResult = {
      vehicleNumber,
      state,
      challans
    };
    
    // Simulate network delay
    return of(result).pipe(delay(1500));
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