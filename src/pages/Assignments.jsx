import React, { useState } from "react";
import "../App.css"; // Make sure path is correct

const assignmentData = {
  "Form One": ["Math", "English", "Physics", "Biology"],
  "Form Two": ["Math", "English", "Chemistry", "Geography"],
  "Form Three": ["Math", "English", "Physics", "History"],
  "Form Four": ["Math", "English", "Chemistry", "Economics"],
};

function Assignments() {
  const [selectedForm, setSelectedForm] = useState(null);

  return (
    <div className="page-container">
      <section className="assignments">
        <h1>Assignments</h1>
        <p>Select a form to view subjects and downloadable assignments.</p>

        {/* Form buttons */}
        <div className="form-buttons">
          {Object.keys(assignmentData).map((form) => (
            <button key={form} onClick={() => setSelectedForm(form)}>
              {form}
            </button>
          ))}
        </div>

        {/* Subjects */}
        {selectedForm && (
          <div className="subjects-container">
            <h2>{selectedForm} Subjects</h2>
            <ul>
              {assignmentData[selectedForm].map((subject) => (
                <li key={subject}>
                  {subject} <a href={`/assignments/${subject}.pdf`} target="_blank" rel="noopener noreferrer">Download</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export default Assignments;
