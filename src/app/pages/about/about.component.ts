import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-page">
      <div class="container">
        <section class="hero-section">
          <h1>About ChallanDekho</h1>
          <p class="lead">
            Simplifying Traffic Challan Management for Everyone
          </p>
        </section>

        <section class="mission-section">
          <div class="card">
            <h2>Our Mission</h2>
            <p>
              At ChallanDekho, we're revolutionizing how Indians handle traffic
              challans. As a forward-thinking startup, we're building a
              comprehensive platform that brings transparency and convenience to
              traffic violation management.
            </p>

            <div class="mission-points">
              <div class="point">
                <i class="fas fa-check-circle"></i>
                <h3>Centralized Platform</h3>
                <p>
                  Access all your challan information in one place, eliminating
                  the hassle of dealing with multiple portals.
                </p>
              </div>

              <div class="point">
                <i class="fas fa-bolt"></i>
                <h3>Real-Time Updates</h3>
                <p>
                  Stay informed with instant notifications and real-time challan
                  status updates.
                </p>
              </div>

              <div class="point">
                <i class="fas fa-shield-alt"></i>
                <h3>Transparent Payments</h3>
                <p>
                  Clear, upfront pricing with no hidden charges, making payments
                  simple and trustworthy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="vision-section">
          <div class="card">
            <h2>Our Vision</h2>
            <p>
              We envision a future where managing traffic challans is no longer
              a burden. Through innovative technology and user-centric design,
              we're creating solutions that make compliance easier and more
              accessible for every vehicle owner in India.
            </p>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: [
    `
      .about-page {
        padding: 80px 0;
      }

      .hero-section {
        text-align: center;
        margin-bottom: 48px;
      }

      .hero-section h1 {
        color: var(--primary-dark);
        font-size: 2.5rem;
        margin-bottom: 16px;
      }

      .lead {
        font-size: 1.25rem;
        color: var(--neutral-600);
        max-width: 800px;
        margin: 0 auto;
      }

      .mission-section {
        margin-bottom: 48px;
      }

      .mission-section .card {
        padding: 40px;
      }

      .mission-points {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 32px;
        margin-top: 32px;
      }

      .point {
        text-align: center;
        padding: 24px;
        border-radius: var(--border-radius);
        background: var(--neutral-100);
        transition: var(--transition);
      }

      .point:hover {
        transform: translateY(-5px);
        background: white;
        box-shadow: var(--box-shadow);
      }

      .point i {
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: 16px;
      }

      .point h3 {
        color: var(--primary-dark);
        margin-bottom: 12px;
      }

      .point p {
        color: var(--neutral-600);
        line-height: 1.6;
      }

      .vision-section .card {
        background: linear-gradient(
          to right,
          var(--primary-dark),
          var(--primary-color)
        );
        color: white;
        padding: 40px;
      }

      .vision-section h2 {
        color: white;
        margin-bottom: 16px;
      }

      .vision-section p {
        opacity: 0.9;
        line-height: 1.8;
        font-size: 1.1rem;
      }

      @media (max-width: 768px) {
        .about-page {
          padding: 40px 0;
        }

        .hero-section h1 {
          font-size: 2rem;
        }

        .mission-section .card,
        .vision-section .card {
          padding: 24px;
        }

        .mission-points {
          gap: 24px;
        }
      }
    `,
  ],
})
export class AboutComponent {}
