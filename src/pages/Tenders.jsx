import React from "react";
import "../App.css"; // Make sure path is correct

const tendersList = [
  {
    title: "Construction of New Science Lab",
    deadline: "September 30, 2025",
    file: "/tenders/science-lab.pdf",
  },
  {
    title: "Supply of School Uniforms",
    deadline: "October 15, 2025",
    file: "/tenders/school-uniforms.pdf",
  },
  {
    title: "Cafeteria Renovation",
    deadline: "November 1, 2025",
    file: "/tenders/cafeteria-renovation.pdf",
  },
];

function Tenders() {
  return (
    <div className="page-container">
      <section className="tenders-section">
        <h1>Tenders & Advertisements</h1>
        <p>Find open and past tenders below.</p>
        <div className="tenders-list">
          {tendersList.map((tender, index) => (
            <div key={index} className="tender-card">
              <h2>{tender.title}</h2>
              <p>Deadline: {tender.deadline}</p>
              <a href={tender.file} target="_blank" rel="noopener noreferrer">
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tenders;
