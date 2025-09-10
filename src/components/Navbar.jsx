import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/assignments">Assignments</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/offerings">Offerings</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/tenders">Tenders</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
