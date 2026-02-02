import React, { useState } from "react";
import "../App.css"; // Your CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mzzawbrd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error sending message: " + error.message);
    }
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Contact Giakanja Boys' High School</h1>
          <p>We’re here to answer your questions and help you get in touch with us</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-section">
        <div className="contact-info">
          <p>Email: <a href="mailto:admin@giakanjaboys.ac.ke">admin@giakanjaboys.ac.ke</a></p>
          <p>Phone: <a href="tel:0201234567">020-1234567</a></p>
          <p>Address: Nyeri-Othaya Road, Nyeri County, Kenya</p>
        </div>

        <div className="contact-form">
          {submitted && <p className="success-msg">Message sent successfully!</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"                  
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="map-container">
          <iframe
            title="Giakanja Boys High School Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.123456789!2d36.94683!3d-0.459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f123456789abcd%3A0xabcdef123456!2sGiakanja%20Boys%20High%20School!5e0!3m2!1sen!2ske!4v1694451234567"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
