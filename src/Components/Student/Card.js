// src/components/Card.js
import React from "react";
import "./Card.css";

const Card = ({ eventName, clubName, clubHead, eventDate, venueName, photo, clubInfo, pastEvents, facultyCoordinators }) => {
  const uDate = eventDate?.split('T')?.[0];
  const uTime = eventDate?.split('T')?.[1]?.split('.')?.[0];
  return (
    <div className="card">
      {/* Render photo */}
      <img src={photo} alt={eventName || clubName} className="card-image" />

      <div className="card-content">
        {/* Render either event details or club details */}
        {eventName ? (
          // If event data is provided, render event details
          <>
            <h3>{eventName}</h3>
            <p><strong>Club:</strong> {clubName}</p>
            <p><strong>Date:</strong> {uDate}</p>
            <p><strong>Time:</strong> {uTime}</p>
            <p><strong>Venue:</strong> {venueName}</p>
          </>
        ) : (
          // Otherwise render club details
          <>
            <h3>{clubName}</h3>
            <p><strong>Club Head:</strong> {clubHead}</p>
            <p><strong>Info:</strong> {clubInfo}</p>
            <p><strong>Past Events:</strong> {pastEvents}</p>
            <p><strong>Faculty Coordinators:</strong> {facultyCoordinators}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;

