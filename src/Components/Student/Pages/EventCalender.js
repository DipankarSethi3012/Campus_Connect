import React, { useState, useEffect } from "react";
import axios, { formToJSON } from "axios";
import Card from "../Card";
import { Loader } from "lucide-react";
import { Button } from "bootstrap";
import './EventCalendar.css'

const EventCalender = () => {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch events from the backend
    const fetchEvents = async () => {
      try {
        setLoading(true);
        // const response = await axios.get("http://localhost:8080/api/student/dashboard");
        const link = `http://localhost:8080/api/student/dashboard`;
        const token = localStorage.getItem('token');
        // console.log("Token is ", token);
        const res = await axios.get(link, {
          headers: {
            "Content-Type" : "application/json",
            'Authorization' : `Bearer ${token}`
          }
        })
        console.log("Response is ", res);
        setLoading(false);
        setEvents(res.data); // Assuming the backend sends an array of event objects
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load events.");
      }
    };
    fetchEvents();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div style={{ marginLeft: "250px", padding: "20px", marginTop: "80px" }}>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px", // Gap between cards
        }}
      >
        {
          loading ? (
            <Loader className="loader"/>
          ) : (
            events.map((event, index) => <Card key={index} {...event} />)
          )
        }
      </div>
    </div>
  );
};

export default EventCalender;

