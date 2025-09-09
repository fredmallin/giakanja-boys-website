import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#004080", padding: "1rem" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem", margin: 0 }}>
        <li><Link to="/" style={{ color: "white" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "white" }}>About</Link></li>
        <li><Link to="/gallery" style={{ color: "white" }}>Gallery</Link></li>
        <li><Link to="/assignments" style={{ color: "white" }}>Assignments</Link></li>
        <li><Link to="/events" style={{ color: "white" }}>Events</Link></li>
        <li><Link to="/offerings" style={{ color: "white" }}>Offerings</Link></li>
        <li><Link to="/blog" style={{ color: "white" }}>Blog</Link></li>
        <li><Link to="/tenders" style={{ color: "white" }}>Tenders</Link></li>
        <li><Link to="/contact" style={{ color: "white" }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
