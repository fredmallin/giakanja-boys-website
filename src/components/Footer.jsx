function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Contact Us</h3>
          <p>📞 +254791775974</p>
          <p>💬 WhatsApp</p>
          <p>📧 Giakanjaboys'highschool@gmail.com</p>
        </div>

        <div>
          <h3>Working Hours</h3>
          <p>Monday - Friday</p>
          <p>8:00 AM - 6:00 PM</p>
        </div>

        <div>
          <h3>Location</h3>
          <p>Nyeri Othay Road, Nyeri County</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Giakanja Boys High School. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a
            href="https://wa.me/254748257989" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00BFFF", textDecoration: "none" }}
          >
            <strong>Fredrick Mwangi</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
