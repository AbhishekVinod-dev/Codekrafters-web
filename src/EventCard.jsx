import React, { useState } from "react";
import "./EventCard.css";

function EventCard({ title, date, about, photo }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    // This prevents the click from hitting parent elements
    e.stopPropagation(); 
    setFlipped(!flipped);
  };

  return (
    <div className={`flip-card ${flipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        
        {/* FRONT */}
        <div className="flip-card-front">
          <img src={photo} alt={title} />
          <div className="card-overlay">
            <h2>{title}</h2>
            <button className="flip-button" onClick={handleFlip}>
              View Details
            </button>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <div className="back-content">
            <h2>{title}</h2>
            <p className="event-date"><strong>Date:</strong> {date}</p>
            <p className="event-about">{about}</p>
            <button className="flip-button back-btn" onClick={handleFlip}>
              Go Back
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default EventCard;