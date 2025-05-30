import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleSearchFormComponent } from '../../components/vehicle-search-form/vehicle-search-form.component';

@Component({
  selector: 'app-challan-search',
  standalone: true,
  imports: [CommonModule, VehicleSearchFormComponent],
  template: `
    <div class="container">
      <div class="search-page">
        <div class="search-header">
          <h1>Check Your E-Challan Status</h1>
          <p>Enter your vehicle registration number and select your state to check for any pending challans</p>
        </div>
        
        <div class="search-box card">
          <app-vehicle-search-form></app-vehicle-search-form>
        </div>
        
        <div class="search-info">
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-info-circle"></i>
            </div>
            <div class="info-content">
              <h3>Important Information</h3>
              <ul>
                <li>Enter your complete vehicle registration number</li>
                <li>Vehicle number should be in the format: DL01AB1234</li>
                <li>Select the state where your vehicle is registered</li>
                <li>The search will show all pending and paid challans</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .search-page {
      max-width: 800px;
      margin: 0 auto;
      padding: 24px 0;
    }
    
    .search-header {
      text-align: center;
      margin-bottom: 32px;
    }
    
    .search-header h1 {
      font-size: 2rem;
      margin-bottom: 16px;
      color: var(--primary-dark);
    }
    
    .search-header p {
      color: var(--neutral-600);
      max-width: 600px;
      margin: 0 auto;
    }
    
    .search-box {
      margin-bottom: 32px;
    }
    
    .search-info {
      margin-top: 40px;
    }
    
    .info-card {
      display: flex;
      gap: 16px;
      padding: 24px;
      background-color: rgba(25, 118, 210, 0.05);
      border-left: 4px solid var(--primary-color);
      border-radius: var(--border-radius);
    }
    
    .info-icon {
      font-size: 24px;
      color: var(--primary-color);
      flex-shrink: 0;
      margin-top: 4px;
    }
    
    .info-content h3 {
      font-size: 1.125rem;
      margin-bottom: 12px;
      color: var(--primary-dark);
    }
    
    .info-content ul {
      list-style: none;
    }
    
    .info-content li {
      position: relative;
      padding-left: 24px;
      margin-bottom: 8px;
      line-height: 1.5;
    }
    
    .info-content li:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--primary-color);
      font-weight: bold;
    }
    
    @media (max-width: 768px) {
      .search-header h1 {
        font-size: 1.75rem;
      }
      
      .info-card {
        flex-direction: column;
        padding: 16px;
      }
      
      .info-icon {
        margin-bottom: 8px;
      }
    }
  `]
})
export class ChallanSearchComponent {}