import React from "react";
import "../App.css";
import StatsCounter from "../StatsCounter";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Home() {
  useScrollAnimation();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>Giakanja Boys high school</h1>
        <p>
          Empowering students to achieve excellence in academics and character.
        </p>
        <a href="/assignments">View Assignments</a>
      </section>

      {/* Principal & Chairperson Messages */}
      <section className="messages scroll-fade">
        <div className="message-card">
          <img
            src="/images/senior.jpeg"
            alt="Mr. Onesmas Mwangi"
            className="message-img"
          />
          <h2>Mr. Onesmas Mwangi - Senior Principal</h2>
          <p>
            Welcome to Giakanja Boys, where we empower young men to reach their
            full potential...
          </p>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="message-card">
          <img
            src="/images/principal.jpeg"
            alt="Dr. Josephine Kinya"
            className="message-img"
          />
          <h2>Dr. Josephine Kinya - BOM Chairperson</h2>
          <p>
            On behalf of the Board of Management, we are committed to your
            academic and personal growth...
          </p>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="message-card">
          <img
            src="/images/chair.jpeg"
            alt="Mr. Isaac Nyabicha"
            className="message-img"
          />
          <h2>Mr. Isaac Nyabicha - P.A Chairperson</h2>
          <p>
            As the chairman of the Parent Association, I am proud to address our
            school community...
          </p>
          <a href="/contact">Contact Us</a>
        </div>
      </section>

      {/* Offerings */}
      <section className="offerings scroll-fade">
        <h2>Our Offerings</h2>
        <div className="offering-cards">
          <div className="offering-card">
            <img
              src="/images/Academics.jpeg"
              alt="Academics"
              className="offering-img"
            />
            <h3>Academics</h3>
            <p>
              Our rigorous curriculum is designed to challenge and inspire
              students...
            </p>
          </div>
          <div className="offering-card">
            <img src="/images/arts.jpeg" alt="Arts" className="offering-img" />
            <h3>Arts</h3>
            <p>
              Explore creativity through our vibrant arts program that encourages
              self-expression...
            </p>
          </div>
          <div className="offering-card">
            <img
              src="/images/sports.jpeg"
              alt="Extra-Curricular Activities"
              className="offering-img"
            />
            <h3>Extra-Curricular Activities</h3>
            <p>
              Our vibrant extra-curricular programs promote teamwork, sports,
              and clubs...
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values scroll-fade">
        <h2>Our Values</h2>
        <div className="value-cards">
          <div className="value-card">
            <img src="/images/motto.png" alt="Motto" />
            <h3>Motto</h3>
            <p>Discipline and character makes a man.</p>
          </div>
          <div className="value-card">
            <img src="/images/vision.png" alt="Vision" />
            <h3>Vision</h3>
            <p>
              To be a leading institution in producing well-rounded individuals who excel academically, socially, and morally, contributing positively to society and the nation.
            </p>
          </div>
          <div className="value-card">
            <img src="/images/mission.png" alt="Mission" />
            <h3>Mission</h3>
            <p>
              To provide quality education that nurtures academic excellence, discipline, and holistic development in a conducive environment, empowering students to become responsible and innovative leaders.
            </p>
          </div>
          <div className="value-card">
            <img src="/images/values.png" alt="Core Values" />
            <h3>Core Values</h3>
            <p>
              Integrity, Godliness, Teamwork, Professionalism, Social
              responsibility, Courtesy, Commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats scroll-fade">
        <div className="stat">
          <img src="/images/group.png" alt="Teachers" className="stat-icon" />
          <h3 className="count" data-target="50">0</h3>
          <p>Teachers</p>
        </div>
        <div className="stat">
          <img src="/images/team.png" alt="Students" className="stat-icon" />
          <h3 className="count" data-target="1200">0</h3>
          <p>current population</p>
        </div>
        <div className="stat">
          <img
            src="/images/classroom.png"
            alt="Classrooms"
            className="stat-icon"
          />
          <h3 className="count" data-target="20">0</h3>
          <p>Classrooms</p>
        </div>
        <div className="stat">
          <img src="/images/calendar.png" alt="Years" className="stat-icon" />
          <h3 className="count" data-target="60">0</h3>
          <p>Years</p>
        </div>
      </section>

      {/* Join Us */}
      <section className="join-us scroll-fade">
        <h2>Join Us</h2>
        <p>
          Giakanja Boys empowers students with high-quality education, fostering
          academic excellence and confidence.
        </p>
        <a href="/contact">Get in Touch</a>
      </section>

      <StatsCounter />
    </div>
  );
}

export default Home;
