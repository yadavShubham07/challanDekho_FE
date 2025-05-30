import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChallanService } from '../../services/challan.service';
import { Challan } from '../../models/challan.model';

@Component({
  selector: 'app-challan-results',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="results-page">
        <div class="results-header">
          <h1>E-Challan Results</h1>
          <p *ngIf="vehicleNumber">
            Showing results for vehicle number: <strong>{{ vehicleNumber }}</strong>
          </p>
          
          <button class="btn-primary back-btn" (click)="goBack()">
            <i class="fas fa-arrow-left"></i> New Search
          </button>
        </div>
        
        <div *ngIf="loading" class="loading-container">
          <div class="loading-spinner"></div>
          <p>Loading challan details...</p>
        </div>
        
        <ng-container *ngIf="!loading">
          <div *ngIf="challans.length === 0" class="no-results card">
            <div class="no-results-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <h2>No Challans Found</h2>
            <p>Good news! We couldn't find any pending challans for this vehicle.</p>
          </div>
          
          <div *ngIf="challans.length > 0" class="results-summary card">
            <div class="summary-header">
              <h3>Challan Summary</h3>
              <div class="summary-stats">
                <div class="stat">
                  <span class="stat-label">Total Challans</span>
                  <span class="stat-value">{{ challans.length }}</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Pending</span>
                  <span class="stat-value">{{ getPendingCount() }}</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Total Amount</span>
                  <span class="stat-value">₹{{ getTotalAmount() }}</span>
                </div>
              </div>
            </div>
            
            <div class="challan-list">
              <div *ngFor="let challan of challans" class="challan-item fade-in">
                <div class="challan-header">
                  <div class="challan-title">
                    <h4>Challan #{{ challan.challanNumber }}</h4>
                    <span class="challan-date">{{ challan.date | date:'dd MMM yyyy' }}</span>
                  </div>
                  <div class="challan-status" [ngClass]="getStatusClass(challan.status)">
                    {{ challan.status }}
                  </div>
                </div>
                
                <div class="challan-details">
                  <div class="detail-group">
                    <div class="detail-item">
                      <span class="detail-label">Location</span>
                      <span class="detail-value">{{ challan.location }}</span>
                    </div>
                    <div class="detail-item">
                      <span class="detail-label">Violation</span>
                      <span class="detail-value">{{ challan.violation }}</span>
                    </div>
                  </div>
                  
                  <div class="detail-group">
                    <div class="detail-item">
                      <span class="detail-label">Fine Amount</span>
                      <span class="detail-value">₹{{ challan.amount }}</span>
                    </div>
                    <div class="detail-item">
                      <span class="detail-label">Issued By</span>
                      <span class="detail-value">{{ challan.issuedBy }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="challan-actions" *ngIf="challan.status === 'Pending'">
                  <button class="btn-primary">Pay Now</button>
                  <button class="btn-secondary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    .results-page {
      max-width: 900px;
      margin: 0 auto;
      padding: 24px 0;
    }
    
    .results-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 32px;
      gap: 16px;
    }
    
    .results-header h1 {
      font-size: 2rem;
      margin-bottom: 8px;
      color: var(--primary-dark);
    }
    
    .back-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    }
    
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px;
      text-align: center;
    }
    
    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(25, 118, 210, 0.1);
      border-radius: 50%;
      border-top-color: var(--primary-color);
      animation: spin 1s ease-in-out infinite;
      margin-bottom: 16px;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .no-results {
      text-align: center;
      padding: 48px 24px;
    }
    
    .no-results-icon {
      font-size: 64px;
      color: var(--success-color);
      margin-bottom: 24px;
    }
    
    .no-results h2 {
      font-size: 1.75rem;
      margin-bottom: 16px;
    }
    
    .no-results p {
      color: var(--neutral-600);
      max-width: 400px;
      margin: 0 auto;
    }
    
    .results-summary {
      margin-bottom: 24px;
    }
    
    .summary-header {
      padding-bottom: 16px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--neutral-200);
    }
    
    .summary-header h3 {
      font-size: 1.5rem;
      margin-bottom: 16px;
    }
    
    .summary-stats {
      display: flex;
      gap: 24px;
    }
    
    .stat {
      display: flex;
      flex-direction: column;
      padding: 16px 24px;
      border-radius: var(--border-radius);
      background-color: var(--neutral-100);
    }
    
    .stat-label {
      font-size: 0.875rem;
      color: var(--neutral-600);
      margin-bottom: 4px;
    }
    
    .stat-value {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary-dark);
    }
    
    .challan-list {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .challan-item {
      border: 1px solid var(--neutral-200);
      border-radius: var(--border-radius);
      padding: 24px;
      transition: var(--transition);
    }
    
    .challan-item:hover {
      box-shadow: var(--box-shadow);
      border-color: var(--neutral-300);
    }
    
    .challan-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
    }
    
    .challan-title h4 {
      font-size: 1.25rem;
      margin-bottom: 4px;
    }
    
    .challan-date {
      color: var(--neutral-600);
      font-size: 0.875rem;
    }
    
    .challan-status {
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.875rem;
    }
    
    .status-pending {
      background-color: rgba(255, 193, 7, 0.15);
      color: #FF8F00;
    }
    
    .status-paid {
      background-color: rgba(102, 187, 106, 0.15);
      color: #2E7D32;
    }
    
    .challan-details {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-bottom: 24px;
    }
    
    .detail-group {
      flex: 1;
      min-width: 250px;
    }
    
    .detail-item {
      margin-bottom: 12px;
    }
    
    .detail-label {
      display: block;
      font-size: 0.875rem;
      color: var(--neutral-600);
      margin-bottom: 4px;
    }
    
    .detail-value {
      font-weight: 500;
    }
    
    .challan-actions {
      display: flex;
      gap: 16px;
      margin-top: 16px;
    }
    
    @media (max-width: 768px) {
      .summary-stats {
        flex-direction: column;
        gap: 12px;
      }
      
      .challan-header {
        flex-direction: column;
        gap: 12px;
      }
      
      .challan-status {
        align-self: flex-start;
      }
      
      .challan-actions {
        flex-direction: column;
      }
      
      .challan-item {
        padding: 16px;
      }
    }
  `]
})
export class ChallanResultsComponent implements OnInit {
  challans: Challan[] = [];
  vehicleNumber: string = '';
  loading: boolean = true;
  
  constructor(
    private challanService: ChallanService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    const results = this.challanService.getSearchResults();
    
    if (!results) {
      this.router.navigate(['/search']);
      return;
    }
    
    // Simulate loading
    setTimeout(() => {
      this.challans = results.challans || [];
      this.vehicleNumber = results.vehicleNumber || '';
      this.loading = false;
    }, 1000);
  }
  
  getPendingCount(): number {
    return this.challans.filter(challan => challan.status === 'Pending').length;
  }
  
  getTotalAmount(): number {
    return this.challans.reduce((total, challan) => {
      if (challan.status === 'Pending') {
        return total + challan.amount;
      }
      return total;
    }, 0);
  }
  
  getStatusClass(status: string): string {
    return status === 'Pending' ? 'status-pending' : 'status-paid';
  }
  
  goBack(): void {
    this.router.navigate(['/search']);
  }
}