import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-terms-of-service",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- Header -->
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-primary mb-3">
              <i class="bi bi-file-text me-3"></i>Terms of Service
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
                  These Terms of Service ("Terms") govern your use of
                  <strong>ChallanDekho.com</strong>
                  ("we", "us", or "our"), a platform that enables users to view
                  and pay traffic challans online.
                </p>
              </div>
              <div class="alert alert-warning border-0">
                <i class="bi bi-exclamation-triangle me-2"></i>
                <strong
                  >By accessing or using our website, you agree to be bound by
                  these Terms.</strong
                >
              </div>
            </div>
          </div>

          <!-- Section 1: Services Offered -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-primary text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-gear me-2"></i>1. Services Offered
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-4">
                We provide a digital platform that allows users to:
              </p>

              <div class="row g-4">
                <div class="col-md-6">
                  <div class="bg-light rounded p-3 h-100">
                    <div class="text-warning mb-2">
                      <i class="bi bi-search fs-3"></i>
                    </div>
                    <h5 class="fw-bold">Search Challans</h5>
                    <p class="mb-0 small">
                      Search for pending traffic challans using vehicle
                      registration number.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="bg-light rounded p-3 h-100">
                    <div class="text-info mb-2">
                      <i class="bi bi-eye fs-3"></i>
                    </div>
                    <h5 class="fw-bold">View Details</h5>
                    <p class="mb-0 small">
                      View challan details fetched from third-party or
                      government APIs.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="bg-light rounded p-3 h-100">
                    <div class="text-success mb-2">
                      <i class="bi bi-credit-card fs-3"></i>
                    </div>
                    <h5 class="fw-bold">Pay Online</h5>
                    <p class="mb-0 small">
                      Pay challans using integrated payment gateways.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="bg-light rounded p-3 h-100">
                    <div class="text-primary mb-2">
                      <i class="bi bi-check-circle fs-3"></i>
                    </div>
                    <h5 class="fw-bold">Get Confirmation</h5>
                    <p class="mb-0 small">
                      Receive confirmation and settlement details, where
                      applicable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: User Responsibilities -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-success text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-person-check me-2"></i>2. User Responsibilities
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-4">By using our platform, you agree:</p>

              <div class="list-group list-group-flush">
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-check-circle text-success me-2"></i>
                  To provide accurate and lawful information during challan
                  search or payment.
                </div>
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-x-circle text-danger me-2"></i>
                  Not to use our platform for any unlawful, fraudulent, or
                  harmful activity.
                </div>
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-x-circle text-danger me-2"></i>
                  Not to reverse-engineer, modify, or interfere with the site's
                  functionality.
                </div>
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-exclamation-triangle text-warning me-2"></i>
                  That you are solely responsible for any fees, penalties, or
                  charges paid via our platform.
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: Payment and Refund Policy -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-warning text-dark">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-currency-rupee me-2"></i>3. Payment and Refund
                Policy
              </h3>
            </div>
            <div class="card-body p-4">
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="border rounded p-3 h-100">
                    <h6 class="fw-bold text-success">
                      <i class="bi bi-shield-check me-2"></i>Secure Payments
                    </h6>
                    <p class="mb-0 small">
                      Payments are processed via secure third-party gateways.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="border rounded p-3 h-100">
                    <h6 class="fw-bold text-info">
                      <i class="bi bi-arrow-counterclockwise me-2"></i>Failed
                      Transactions
                    </h6>
                    <p class="mb-0 small">
                      In case of failed transactions, the deducted amount (if
                      any) will be refunded as per the gateway's standard
                      timelines.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="border rounded p-3 h-100">
                    <h6 class="fw-bold text-warning">
                      <i class="bi bi-exclamation-triangle me-2"></i>User Errors
                    </h6>
                    <p class="mb-0 small">
                      We are not liable for errors caused by incorrect challan
                      details entered by the user.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="border rounded p-3 h-100">
                    <h6 class="fw-bold text-danger">
                      <i class="bi bi-x-circle me-2"></i>Refund Policy
                    </h6>
                    <p class="mb-0 small">
                      Refunds are not applicable once a payment is successfully
                      processed unless mandated by law or authority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 4: Account and Security -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-info text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-shield-lock me-2"></i>4. Account and Security
              </h3>
            </div>
            <div class="card-body p-4">
              <div class="alert alert-info border-0">
                <i class="bi bi-phone me-2"></i>
                You are responsible for maintaining the confidentiality of your
                mobile number and OTP access.
                <strong>Notify us immediately of any unauthorized use.</strong>
              </div>
            </div>
          </div>

          <!-- Section 5: Intellectual Property -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-secondary text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-c-circle me-2"></i>5. Intellectual Property
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-0">
                All content, design, logos, and service-related material on our
                website are the property of
                <strong>ChallanDekho.com</strong> or its licensors. You may not
                reproduce, distribute, or exploit the content without written
                permission.
              </p>
            </div>
          </div>

          <!-- Section 6: Disclaimer -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-danger text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-exclamation-triangle me-2"></i>6. Disclaimer
              </h3>
            </div>
            <div class="card-body p-4">
              <div class="alert alert-warning border-0 mb-0">
                <i class="bi bi-info-circle me-2"></i>
                <strong>Important:</strong> We act only as a facilitator for
                challan data retrieval and payment services. We do not create,
                issue, or adjudicate any challans. All challan data is fetched
                from official or authorized sources, and we are not liable for
                inaccuracies or outdated information from third-party systems.
              </div>
            </div>
          </div>

          <!-- Section 7: Limitation of Liability -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-warning text-dark">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-shield-x me-2"></i>7. Limitation of Liability
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-3">We are not responsible for:</p>

              <div class="list-group list-group-flush">
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-x-circle text-danger me-2"></i>
                  Technical errors or downtime.
                </div>
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-x-circle text-danger me-2"></i>
                  Delays in data updates or payment confirmations.
                </div>
                <div class="list-group-item border-0 px-0">
                  <i class="bi bi-x-circle text-danger me-2"></i>
                  Actions or decisions made by traffic authorities after
                  payment.
                </div>
              </div>
            </div>
          </div>

          <!-- Section 8: Termination -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-danger text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-power me-2"></i>8. Termination
              </h3>
            </div>
            <div class="card-body p-4">
              <p class="mb-0">
                We may suspend or terminate access to our services at any time
                for violations of these Terms or legal obligations.
              </p>
            </div>
          </div>

          <!-- Section 9: Governing Law -->
          <div class="card border-0 shadow-sm mb-4">
            <div class="card-header bg-primary text-white">
              <h3 class="mb-0 fw-bold">
                <i class="bi bi-geo-alt me-2"></i>9. Governing Law
              </h3>
            </div>
            <div class="card-body p-4">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="bg-light rounded p-3">
                    <h6 class="fw-bold text-primary">
                      <i class="bi bi-building me-2"></i>Jurisdiction
                    </h6>
                    <p class="mb-0 small">
                      These Terms are governed by the laws of
                      <strong>Madhya Pradesh, India</strong>.
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="bg-light rounded p-3">
                    <h6 class="fw-bold text-primary">
                      <i class="bi bi-hammer me-2"></i>Dispute Resolution
                    </h6>
                    <p class="mb-0 small">
                      Any disputes will be resolved in the jurisdiction of
                      <strong>Indore, Madhya Pradesh</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 10: Contact Us -->
          <div class="card border-0 shadow-sm bg-primary text-white">
            <div class="card-body p-4 text-center">
              <h4 class="fw-bold mb-3">
                <i class="bi bi-envelope me-2"></i>10. Contact Us
              </h4>
              <p class="mb-3">For any questions or concerns, please contact:</p>
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
export class TermsOfServiceComponent {}
