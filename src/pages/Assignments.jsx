import React, { useState } from "react";

const assignments = {
  "Form One": [
    { name: "Mathematics", file: "maths1.pdf" },
    { name: "English", file: "form1_english.pdf" },
    { name: "Kiswahili", file: "form1_kiswahili.pdf" },
    { name: "Biology", file: "form1_biology.pdf" },
    { name: "Chemistry", file: "form1_chemistry.pdf" },
    { name: "Physics", file: "form1_physics.pdf" },
    { name: "Geography", file: "form1_geography.pdf" },
    { name: "History", file: "form1_history.pdf" },
    { name: "C.R.E", file: "form1_cre.pdf" },
    { name: "I.R.E", file: "form1_ire.pdf" },
    { name: "Computer Studies", file: "form1_computer_studies.pdf" },
    { name: "Business", file: "form1_business.pdf" },
    { name: "Agriculture", file: "form1_agriculture.pdf" },
  ],
  "Form Two": [
    { name: "Computer Studies", file: "form2_computer_studies.pdf" },
    { name: "Mathematics", file: "form2_mathematics.pdf" },
    { name: "History", file: "form2_history.pdf" },
    { name: "I.R.E", file: "form2_ire.pdf" },
    { name: "English", file: "form2_english.pdf" },
    { name: "Geography", file: "form2_geography.pdf" },
    { name: "Kiswahili", file: "form2_kiswahili.pdf" },
    { name: "C.R.E", file: "form2_cre.pdf" },
    { name: "Business", file: "form2_business.pdf" },
    { name: "Chemistry", file: "form2_chemistry.pdf" },
    { name: "Agriculture", file: "form2_agriculture.pdf" },
    { name: "Physics", file: "form2_physics.pdf" },
    { name: "Biology", file: "form2_biology.pdf" },
  ],
  "Form Three": [
    { name: "Mathematics", file: "form3_mathematics.pdf" },
    { name: "English", file: "form3_english.pdf" },
    { name: "Kiswahili", file: "form3_kiswahili.pdf" },
    { name: "Biology", file: "form3_biology.pdf" },
    { name: "Chemistry", file: "form3_chemistry.pdf" },
    { name: "Physics", file: "form3_physics.pdf" },
    { name: "Geography", file: "form3_geography.pdf" },
    { name: "History", file: "form3_history.pdf" },
    { name: "C.R.E", file: "form3_cre.pdf" },
    { name: "I.R.E", file: "form3_ire.pdf" },
    { name: "Computer Studies", file: "form3_computer_studies.pdf" },
    { name: "Business", file: "form3_business.pdf" },
    { name: "Agriculture", file: "form3_agriculture.pdf" },
  ],
  "Form Four": [
    { name: "Mathematics", file: "FORM-4-AUGUST-HOLIDAY-ASSIGNMENT.docx" },
    { name: "English", file: "form4_english.pdf" },
    { name: "Kiswahili", file: "form4_kiswahili.pdf" },
    { name: "Biology", file: "form4_biology.pdf" },
    { name: "Chemistry", file: "form4_chemistry.pdf" },
    { name: "Physics", file: "form4_physics.pdf" },
    { name: "Geography", file: "form4_geography.pdf" },
    { name: "History", file: "form4_history.pdf" },
    { name: "C.R.E", file: "form4_cre.pdf" },
    { name: "I.R.E", file: "form4_ire.pdf" },
    { name: "Computer Studies", file: "form4_computer_studies.pdf" },
    { name: "Business", file: "form4_business.pdf" },
    { name: "Agriculture", file: "form4_agriculture.pdf" },
  ],
};

export default function Assignments() {
  const [openForm, setOpenForm] = useState(null);

  const toggleForm = (form) => {
    setOpenForm(openForm === form ? null : form);
  };

  return (
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Assignments
      </h1>

      {Object.keys(assignments).map((form) => (
        <div key={form} className="mb-4 border border-gray-200 rounded shadow-sm">
          <button
            onClick={() => toggleForm(form)}
            className="w-full text-left px-6 py-3 text-lg font-semibold bg-green-100 hover:bg-green-200 rounded-t"
          >
            {form}
          </button>

          {openForm === form && (
            <ul className="bg-white p-4 space-y-2">
              {assignments[form].map((subject) => (
                <li key={subject.file}>
                  <a
                    href={`/pdfs/${subject.file}`}
                    download
                    className="text-blue-600 hover:underline"
                  >
                    {subject.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </main>
  );
}
