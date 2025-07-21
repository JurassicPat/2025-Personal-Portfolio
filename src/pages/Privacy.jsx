// src/pages/Privacy.jsx
import React from "react";

export default function Privacy() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto", color: "#fff" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Privacy Policy</h1>
      <p>Last updated: July 21, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          This website (patrickwatertor.com) is a personal portfolio created by Patrick Watertor.
          I value your privacy and am committed to protecting your personal data.
        </p>
      </section>

      <section>
        <h2>2. Data Collected</h2>
        <p>
          I use Google Analytics to understand how visitors interact with this site. No personally identifiable
          information is collected unless explicitly provided by you (e.g., through a contact form).
        </p>
      </section>

      <section>
        <h2>3. Cookies</h2>
        <p>
          This site uses cookies to enhance functionality and performance. You can choose to accept or decline
          tracking cookies through the consent banner. Essential cookies may still be used for site operation.
        </p>
      </section>

      <section>
        <h2>4. Third-Party Services</h2>
        <ul>
          <li>Google Analytics 4 (anonymized IP and consent-based tracking)</li>
          <li>Formspree (for contact form submission)</li>
        </ul>
      </section>

      <section>
        <h2>5. Data Retention</h2>
        <p>
          Any analytics data is anonymized and stored by Google according to their retention policy. I do not
          store or sell user data directly.
        </p>
      </section>

      <section>
        <h2>6. Contact</h2>
        <p>
          If you have any questions or concerns about this policy, feel free to contact me through the contact
          form on this website.
        </p>
      </section>
    </main>
  );
}
