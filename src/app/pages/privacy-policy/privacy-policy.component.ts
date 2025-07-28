import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-privacy-policy",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- Header -->
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-primary mb-3">
              <i class="bi bi-shield-lock me-3"></i>Privacy Policy
            </h1>
            <div class="bg-light rounded p-3 d-inline-block">
              <p class="mb-1"><strong>Effective Date:</strong> 01-08-2025</p>
              <p class="mb-0"><strong>Last Updated:</strong> 01-08-2025</p>
            </div>
          </div>

          <!-- Introduction -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-body p-4">
              <div class="bg-primary bg-opacity-10 rounded p-4 mb-4">
                <p class="lead mb-0">
                  At <strong>ChallanDekho.com</strong>, we are committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you visit our website and use our services to search for and
                  pay traffic challans.
                </p>
              </div>
              <div class="alert alert-info border-0">
                <i class="bi bi-info-circle me-2"></i>
                <strong
                  >By using our website, you agree to the practices described in
                  this Privacy Policy.</strong
                >
              </div>
            </div>
          </div>

          <!-- Section 1: Information We Collect -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-primary text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-collection me-2"></i>1. Information We Collect
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-4">
                We collect the following types of personal and non-personal
                information:
              </p>

              <div class="row g-4">
                <div class="col-md-4">
                  <div class="bg-light rounded p-3 h-100">
                    <div class="text-primary mb-2">
                      <i class="bi bi-phone fs-3"></i>
                    </div>
                    <h5 class="fw-bold">Mobile Number</h5>
                    <p class="mb-0 small">
                      To send OTPs, updates, and transaction-related
                      notifications.
                    </p>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="bg-light rounded p-3 h-100">
                    <div class="text-success mb-2">
                      <i class="bi bi-file-text fs-3"></i>
                    </div>
                    <h5 class="fw-bold">Challan Details</h5>
                    <p class="mb-0 small">
                      Including challan number, vehicle number, amount, issuing
                      authority, and related payment details.
                    </p>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="bg-light rounded p-3 h-100">
                    <div class="text-info mb-2">
                      <i class="bi bi-laptop fs-3"></i>
                    </div>
                    <h5 class="fw-bold">Device & Usage Information</h5>
                    <p class="mb-0 small">
                      IP address, browser type, operating system, referral URLs,
                      date/time of access, and pages viewed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: How We Use Your Information -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-success text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-gear me-2"></i>2. How We Use Your Information
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-4">
                We use your information for the following purposes:
              </p>

              <div class="list-group list-group-flush">
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-check-circle text-success me-2"></i>
                  To facilitate challan search, payment, and settlement
                  services.
                </div>
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-check-circle text-success me-2"></i>
                  To communicate with you via SMS or email regarding payment
                  confirmation, reminders, and support.
                </div>
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-check-circle text-success me-2"></i>
                  To personalize and improve the user experience on our
                  platform.
                </div>
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-check-circle text-success me-2"></i>
                  To maintain records of transactions as required by applicable
                  law or regulatory authorities.
                </div>
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-check-circle text-success me-2"></i>
                  For internal analysis, debugging, and service improvement.
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Data Retention -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-warning text-dark">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-clock-history me-2"></i>3. Data Retention
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-3">
                We retain your information for as long as necessary to provide
                services, comply with legal obligations, and for legitimate
                business purposes.
              </p>
              <div class="alert alert-warning border-0">
                <i class="bi bi-trash me-2"></i>
                <strong>Data Deletion:</strong> Users can request deletion of
                their personal data by contacting us at
                <a
                  href="mailto:support@challandekho.com"
                  class="text-decoration-none"
                  >support&#64;challandekho.com</a
                >
              </div>
            </div>
          </div>

          <!-- Section 4: Data Sharing and Disclosure -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-info text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-share me-2"></i>4. Data Sharing and Disclosure
              </h3>
            </div>
            <div class="card-body p-4">
              <div class="alert alert-success border-0 mb-4">
                <i class="bi bi-shield-check me-2"></i>
                <strong>We do not sell your personal information.</strong>
              </div>

              <p class="mb-3">However, we may share your information with:</p>

              <div class="row g-3">
                <div class="col-md-6">
                  <div class="border rounded p-3">
                    <h6 class="fw-bold text-primary">
                      <i class="bi bi-credit-card me-2"></i>Payment Gateways
                    </h6>
                    <p class="mb-0 small">
                      To process your challan payments securely.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="border rounded p-3">
                    <h6 class="fw-bold text-primary">
                      <i class="bi bi-building me-2"></i>Government Authorities
                    </h6>
                    <p class="mb-0 small">
                      Or third-party challan APIs as needed to fetch and verify
                      challan details.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="border rounded p-3">
                    <h6 class="fw-bold text-primary">
                      <i class="bi bi-shield me-2"></i>Law Enforcement
                    </h6>
                    <p class="mb-0 small">
                      Or regulatory bodies when required to comply with legal
                      obligations.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="border rounded p-3">
                    <h6 class="fw-bold text-primary">
                      <i class="bi bi-people me-2"></i>Service Providers
                    </h6>
                    <p class="mb-0 small">
                      Who assist us in operating the platform (under strict
                      confidentiality).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 5: Cookies and Tracking -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-secondary text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-cookie me-2"></i>5. Cookies and Tracking
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-3">
                We may use cookies or similar tracking technologies to enhance
                your experience and analyze traffic patterns.
              </p>
              <div class="alert alert-info border-0">
                <i class="bi bi-gear me-2"></i>
                You can disable cookies through your browser settings, although
                doing so may affect some website functionality.
              </div>
            </div>
          </div>

          <!-- Section 6: Data Security -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-danger text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-shield-lock me-2"></i>6. Data Security
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-0">
                We implement appropriate administrative, technical, and physical
                safeguards to protect your data from unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </div>
          </div>

          <!-- Section 7: Your Rights -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-primary text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-person-check me-2"></i>7. Your Rights
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-3">As a user, you may:</p>

              <div class="list-group list-group-flush">
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-arrow-right text-primary me-2"></i>
                  Access, update, or delete your personal information.
                </div>
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-arrow-right text-primary me-2"></i>
                  Withdraw consent for data processing (subject to service
                  limitations).
                </div>
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-arrow-right text-primary me-2"></i>
                  Contact us for any data-related concerns at
                  <a
                    href="mailto:support@challandekho.com"
                    class="text-decoration-none"
                    >support&#64;challandekho.com</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Section 8: Children's Privacy -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-warning text-dark">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-person-x me-2"></i>8. Children's Privacy
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-0">
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect data from minors.
              </p>
            </div>
          </div>

          <!-- Section 9: Changes to This Policy -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-info text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-arrow-repeat me-2"></i>9. Changes to This Policy
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-0">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with the updated effective date.
              </p>
            </div>
          </div>

          <!-- Contact Section -->
          <div class="card border-0 shadow-sm bg-primary text-white">
            <div class="card-body p-4 text-center">
              <h4 class="fw-bold mb-3">
                <i class="bi bi-envelope me-2"></i>Questions or Concerns?
              </h4>
              <p class="mb-3">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <a
                href="mailto:support@challandekho.com"
                class="btn btn-light btn-lg"
              >
                <i class="bi bi-envelope me-2"></i>support&#64;challandekho.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        transition: all 0.3s ease;
      }

      .card:hover {
        transform: translateY(-2px);
      }

      .list-group-item {
        transition: all 0.3s ease;
      }

      .list-group-item:hover {
        background-color: rgba(13, 110, 253, 0.05);
      }

      .alert {
        border-left: 4px solid;
      }

      .alert-info {
        border-left-color: #0dcaf0;
      }

      .alert-success {
        border-left-color: #198754;
      }

      .alert-warning {
        border-left-color: #ffc107;
      }

      @media (max-width: 768px) {
        .display-4 {
          font-size: 2rem;
        }

        .card-body {
          padding: 1.5rem !important;
        }
      }
    `,
  ],
})
export class PrivacyPolicyComponent {}
