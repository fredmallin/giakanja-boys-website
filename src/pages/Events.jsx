import React from "react";
import "../App.css";
function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Science Fair 2025",
      date: "Sept 25, 2025",
      location: "Main Hall",
      description: "Showcasing students’ innovative projects.",
      image: "/images/sciencefair.jpeg",
    },
    {
      id: 2,
      title: "Sports Day",
      date: "Oct 10, 2025",
      location: "School Grounds",
      description: "Annual athletic competitions and games.",
      image: "/images/sports runners.jpeg",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Art Exhibition 2024",
      date: "Dec 5, 2024",
      image: "/images/ATRS.jpeg",
    },
    {
      id: 2,
      title: "Music Concert 2024",
      date: "Nov 20, 2024",
      image: "/images/Music.jpeg",
    },
  ];

  return (
    <div className="events-page">
      <h1>School Events</h1>
      <p>Stay updated with our upcoming and past events.</p>

      <section>
        <h2>Upcoming Events</h2>
        <div className="events-list">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Past Events</h2>
        <div className="events-list">
          {pastEvents.map((event) => (
            <div key={event.id} className="event-card past">
              <img src={event.image} alt={event.title} className="event-image" />
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Events;
