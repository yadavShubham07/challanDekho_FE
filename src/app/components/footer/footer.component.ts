import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h5>ChallanDekho</h5>
            <p>
              Check and verify challan details against your vehicle registration
              number.
            </p>
          </div>
          <div class="footer-section">
            <h5>Quick Links</h5>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h5>Contact</h5>
            <p><i class="fas fa-envelope"></i> support#echallanverify.com</p>
            <p><i class="fas fa-phone"></i> +91 123 456 7890</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 E-Challan Verify. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background-color: var(--neutral-800);
        color: white;
        padding: 40px 0 16px;
        margin-top: 40px;
      }

      .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 32px;
        margin-bottom: 32px;
      }

      .footer-section h5 {
        color: white;
        font-size: 1.125rem;
        margin-bottom: 16px;
        position: relative;
      }

      .footer-section h5:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 40px;
        height: 2px;
        background-color: var(--primary-color);
      }

      .footer-links {
        list-style: none;
      }

      .footer-links li {
        margin-bottom: 8px;
      }

      .footer-links a {
        color: var(--neutral-300);
        transition: var(--transition);
        text-decoration: none;
      }

      .footer-links a:hover {
        color: white;
      }

      .footer-bottom {
        border-top: 1px solid var(--neutral-700);
        padding-top: 16px;
        text-align: center;
        color: var(--neutral-400);
        font-size: 0.875rem;
      }

      .fas {
        margin-right: 8px;
        color: var(--primary-light);
      }

      @media (max-width: 768px) {
        .footer {
          padding: 32px 0 16px;
        }

        .footer-content {
          gap: 24px;
        }
      }
    `,
  ],
})
export class FooterComponent {}
