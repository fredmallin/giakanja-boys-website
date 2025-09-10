import React from "react";
import "../App.css"; // Make sure the path is correct

function About() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero about-hero">
        <h1>About Giakanja Boys</h1>
        <p>Empowering students to achieve excellence in academics and character.</p>
      </section>

      {/* Vision & Journey */}
      <section className="about-vision">
        <h1>Our Vision</h1>
        <p>
          Giakanja Boys Secondary School is a distinguished educational facility situated in Nairobi City, Kenya. Since its inception, the school has been committed to delivering exceptional educational experiences that foster well-rounded development among students.
        </p>
        <p>
          Founded in 2008, Giakanja Boys started with a mission to provide quality education tailored to the needs of young men. Its establishment was driven by the desire to empower students through education. Over the years, we have proudly served a diverse student body, guiding and nurturing the talents of countless boys from different backgrounds in our community.
        </p>
      </section>

     {/* Core Values */}
<section className="about-values">
  <h2>Core Values</h2>

  {/* Wrap all cards inside values-grid */}
  <div className="values-grid">
    <div className="value-card">
      <img src="/images/integrity.png" alt="Integrity" className="value-icon" />
      <h3>Integrity</h3>
      <p>
        In Giakanja Boys we instill integrity one child at a time. Every student is equipped with values that drive integrity.
      </p>
    </div>

    <div className="value-card">
      <img src="/images/Godliness.png" alt="Godliness" className="value-icon" />
      <h3>Godliness</h3>
      <p>
        We ensure that each child is equipped with religious values, making them able to fit into any religious society.
      </p>
    </div>

    <div className="value-card">
      <img src="/images/teamwork.png" alt="Teamwork" className="value-icon" />
      <h3>Teamwork</h3>
      <p>
        With teamwork, all students are well equipped to work collaboratively, producing students who can succeed in organizations.
      </p>
    </div>

    <div className="value-card">
      <img src="/images/proffesion.png" alt="Professionalism" className="value-icon" />
      <h3>Professionalism</h3>
      <p>
        Professionalism is highly valued. We create responsible citizens who can work to improve society.
      </p>
    </div>

    <div className="value-card">
      <img src="/images/social responsibilty.png" alt="Social Responsibility" className="value-icon" />
      <h3>Social Responsibility</h3>
      <p>
        Every student is a responsible contributor to society with strong social skills.
      </p>
    </div>

    <div className="value-card">
      <img src="/images/courtesy.png" alt="Courtesy" className="value-icon" />
      <h3>Courtesy</h3>
      <p>
        Courtesy ensures that students are responsible, polite, and conscientious in everything they do.
      </p>
    </div>
  </div>
</section>


      {/* Join Us */}
      <section className="join-us">
        <h2>Get Involved</h2>
        <p>Discover how you can support the growth of our students and be part of their successful journey in education.</p>
        <a href="/contact">Join Us</a>
      </section>
    </div>
  );
}

export default About;
