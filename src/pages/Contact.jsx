import React from "react";
import "../App.css"; // Ensure path is correct

function Contact() {
  return (
    <div className="page-container">
      <section className="contact-section">
        <h1>Contact Us</h1>
        <p>Email: <a href="mailto:admin@schoolname.ac.ke">admin@schoolname.ac.ke</a></p>
        <p>Phone: <a href="tel:0201234567">020-1234567</a></p>
        <p>Address: Olenguruone Rd, Nairobi</p>

        {/* Future: contact form */}
        <div className="contact-form-placeholder">
          <p>Contact form will be added here soon.</p>
        </div>

        {/* Future: Google Map embed */}
        <div className="map-placeholder">
          <p>Google Map will be embedded here.</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
