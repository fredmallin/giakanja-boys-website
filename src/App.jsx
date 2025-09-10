import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Assignments from "./pages/Assignments";
import Events from "./pages/Events";
import Offerings from "./pages/Offerings";
import Blog from "./pages/Blog";
import Tenders from "./pages/Tenders";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/events" element={<Events />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
