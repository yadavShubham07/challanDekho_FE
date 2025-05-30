import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { VehicleSearchFormComponent } from "../../components/vehicle-search-form/vehicle-search-form.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, FormsModule, VehicleSearchFormComponent],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Check E-Challan Status</h1>
          <p class="hero-subtitle">
            Verify traffic challan details for your vehicle registration number
            instantly
          </p>
          <div class="search-container fade-in">
            <app-vehicle-search-form></app-vehicle-search-form>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2 class="section-title">Why Use ChallanDekho.com?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-search"></i>
            </div>
            <h3>Quick Verification</h3>
            <p>
              Check your challan status in seconds with just your vehicle number
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Secure & Private</h3>
            <p>
              Your vehicle information & other details are kept secure and
              private
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-history"></i>
            </div>
            <h3>Complete History</h3>
            <p>View all past and pending challans for your vehicle</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-credit-card"></i>
            </div>
            <h3>Easy Payments</h3>
            <p>Pay your challans online easily</p>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works">
      <div class="container">
        <h2 class="section-title">How It Works</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Enter Vehicle Number</h3>
              <p>Input your vehicle registration number in the search box</p>
            </div>
          </div>

          <!-- <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Select Your State</h3>
              <p>Choose the state where your vehicle is registered</p>
            </div>
          </div> -->

          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>View Challan Details</h3>
              <p>Get a detailed list of all challan records for your vehicle</p>
            </div>
          </div>

          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Pay Online Securely</h3>
              <p>
                Clear your dues by paying online through secure payment gateway
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        background: linear-gradient(
          to right,
          var(--primary-dark),
          var(--primary-color)
        );
        color: white;
        padding: 64px 0;
        position: relative;
        overflow: hidden;
      }

      .hero:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("/assets/background_home.png");
        background-size: cover;
        background-position: center;
        opacity: 0.15;
        z-index: 0;
      }

      .hero-content {
        position: relative;
        z-index: 1;
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
      }

      .hero-title {
        font-size: 2.75rem;
        font-weight: 700;
        margin-bottom: 16px;
        line-height: 1.2;
        padding-top: 1rem;
      }

      .hero-subtitle {
        font-size: 1.25rem;
        margin-bottom: 32px;
        opacity: 0.9;
      }

      .search-container {
        background-color: white;
        border-radius: var(--border-radius);
        padding: 32px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        max-width: 600px;
        margin: 0 auto;
      }

      .section-title {
        text-align: center;
        margin-bottom: 48px;
        font-size: 2rem;
        font-weight: 700;
        position: relative;
        padding-bottom: 16px;
      }

      .section-title:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background-color: var(--primary-color);
      }

      .features {
        padding: 80px 0;
        background-color: white;
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 32px;
      }

      .feature-card {
        text-align: center;
        padding: 32px 24px;
        border-radius: var(--border-radius);
        transition: var(--transition);
        border: 1px solid var(--neutral-200);
      }

      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--box-shadow);
        border-color: transparent;
      }

      .feature-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        background-color: var(--primary-light);
        color: white;
        border-radius: 50%;
        margin-bottom: 24px;
        font-size: 24px;
      }

      .feature-card h3 {
        font-size: 1.25rem;
        margin-bottom: 16px;
      }

      .feature-card p {
        color: var(--neutral-600);
        line-height: 1.6;
      }

      .how-it-works {
        padding: 80px 0;
        background-color: var(--neutral-100);
      }

      .steps {
        display: flex;
        flex-direction: column;
        gap: 32px;
        max-width: 800px;
        margin: 0 auto;
      }

      .step {
        display: flex;
        gap: 24px;
        align-items: flex-start;
      }

      .step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        background-color: var(--primary-color);
        color: white;
        border-radius: 50%;
        font-size: 1.25rem;
        font-weight: 600;
        flex-shrink: 0;
      }

      .step-content h3 {
        font-size: 1.25rem;
        margin-bottom: 8px;
      }

      .step-content p {
        color: var(--neutral-600);
        line-height: 1.6;
      }

      @media (max-width: 768px) {
        .hero {
          padding: 48px 0;
        }

        .hero-title {
          font-size: 2rem;
        }

        .hero-subtitle {
          font-size: 1rem;
        }

        .search-container {
          padding: 24px;
        }

        .features,
        .how-it-works {
          padding: 48px 0;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          font-size: 20px;
        }
      }
    `,
  ],
})
export class HomeComponent {}
