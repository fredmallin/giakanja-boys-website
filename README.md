# Prompt-Powered Kickstart: Building a School Website with React Using GenAI

## 1. Title & Objective

**Technology Chosen:** React.js  
**Why Chosen:** React is a modern, widely-used framework for building interactive UIs. Using it allowed me to learn component-based development and how to render dynamic content in a web app.  
**End Goal:** Create a minimal school website that displays a student list and demonstrates beginner-friendly React concepts. This project serves as a learning toolkit for new developers.

## 2. Quick Summary of React

- **What it is:** React is a JavaScript library for building user interfaces using components. It allows developers to create reusable UI elements and efficiently update the DOM.  
- **Where it is used:** Single-page applications, dashboards, websites with dynamic content.  
- **Real-world example:** Facebook, Airbnb, or other interactive websites use React for their front-end.


## 3. System Requirements

- **Operating System:** Windows / Mac / Linux  
- **Tools / Editors Required:** VS Code (recommended)  
- **Packages / Dependencies:** Node.js (v18+), npm or yarn  
- **Browser:** Chrome, Edge, or Firefox for testing

---

## 4. Installation & Setup Instructions

1. **Install Node.js and npm**  
   Verify installation:
   ```bash
   node -v
   npm -v
Create React App

bash
Copy code
npx create-react-app giakanja-boys
cd giakanja-boys
npm start
Verify it works
Open http://localhost:3000 in your browser to see the default React page.

5. Minimal Working Example
Goal: Display a simple student list on the homepage.

File: src/App.js

jsx
Copy code
import React from 'react';

// Sample student data
const students = ['Alice', 'Brian', 'Charlie'];

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Giakanja Boys School</h1>
      <h2>Student List:</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
Expected Output:

Header: “Giakanja Boys School”

Student list: Alice, Brian, Charlie

6. AI Prompt Journal
Prompt	AI Response Summary	Reflection
“Explain React to a complete beginner and how to build a minimal website.”	Step-by-step explanation of components, JSX, state, and rendering lists	Helped me understand component-based structure
“Give me code to display a list of students in React.”	Provided map() example to render list items dynamically	Scaffolded my student list efficiently
“Explain why keys are needed in React lists.”	Keys ensure proper DOM updates and prevent re-rendering issues	Learned best practice for lists
“How to add inline styling to React components?”	Showed style={{}} usage with objects	Applied simple inline CSS for readability

7. Common Issues & Fixes
Issue: App won’t start (npm start error)
Fix: Delete node_modules and run npm install

Issue: Student list not showing
Fix: Make sure students.map() returns <li> inside <ul>

Issue: Styling not applied
Fix: Inline style={{}} must be an object, not a string

Helpful Resources:

React Official Docs

StackOverflow

8. References
React Documentation: https://reactjs.org

Create React App Guide: https://create-react-app.dev/docs/getting-started/

YouTube Tutorials: FreeCodeCamp React Beginner Tutorial

Notes on GenAI Usage
GenAI helped me scaffold components, debug list rendering, and understand JSX syntax.

Using AI prompts guided my learning and saved time, especially with best practices like using keys in lists.

I refined prompts to target common beginner errors, e.g., styling and map rendering.

yaml
Copy code


# **README.md (for GitHub / Codebase)**

```markdown
# Giakanja Boys School Website

## Overview

This is a beginner-friendly React project that displays a simple student list. It was created as part of a Moringa AI Capstone project to demonstrate how generative AI can assist learning React.


## Features

- Displays a header with school name  
- Renders a list of students dynamically  
- Inline CSS styling for readability


## Requirements

- Node.js v18+  
- npm or yarn  
- Browser (Chrome, Edge, Firefox)


## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd giakanja-boys
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open http://localhost:3000 in your browser to view the app.

File Structure
pgsql
Copy code
giakanja-boys/
├── node_modules/
├── public/
├── src/
│   ├── App.js    
│   └── index.js    
├── package.json
└── README.md
