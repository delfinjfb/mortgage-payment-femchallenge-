import React from "react";
import "./PrivacyPolicy.scss";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy container">
      <div className="privacy-policy__content">
        <header>
          <h1>Privacy Policy</h1>
        </header>
        <main>
          <p>
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and protect your information when you use our
            services. This is a personal project with no commercial use, and we are committed to ensuring your privacy.
          </p>
          <section>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide to us directly, such as when
              you fill out a form or contact us. This may include your name,
              email address, and other contact details.
            </p>
            <p>
              We may also collect limited information automatically when you use our site,
              such as IP addresses and browser types, but we do not use cookies.
            </p>
          </section>
          <section>
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect solely to improve our services
              and communicate with you if you reach out to us directly.
            </p>
          </section>
          <section>
            <h2>3. Sharing Your Information</h2>
            <p>
              We do not sell or share your personal information with third
              parties, except as required by law or to protect our rights and
              property. There are no third-party service providers involved that would require access to your information.
            </p>
          </section>
          <section>
            <h2>4. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, please note
              that no data transmission over the internet is completely secure.
            </p>
          </section>
          <section>
            <h2>5. Analytics</h2>
            <p>
              We use Matomo for analytics purposes. Matomo is configured to respect your privacy and does not use cookies to track you. All data is anonymized and used solely for improving this project.
            </p>
          </section>
          <section>
            <h2>6. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal
              information. If you wish to exercise these rights, please contact us
              directly.
            </p>
          </section>
          <section>
            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. Please check this
              page periodically for any updates.
            </p>
          </section>
          <section>
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at: contact@example.com
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

// Note: To ensure a similar design to the calculator container, use the CSS classes "container" and "privacy-policy__content" in your PrivacyPolicy.scss file.
// The container class can be used to provide a consistent look and feel, similar to the calculator's container.
// Example styles in PrivacyPolicy.scss might include:
//
// .privacy-policy {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 80vh;
//   background-color: #f8fafc;
//   padding: 2rem;
// }
// .privacy-policy__content {
//   background-color: white;
//   padding: 2rem;
//   border-radius: 12px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   max-width: 600px;
//   width: 100%;
// }
