import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Slider from "react-slick";
import "react-calendar/dist/Calendar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import axios from "axios";
import { formatDate } from "react-calendar/dist/esm/shared/dateFormatter.js";

const Home = () => {
  const [registrations, setRegistrations] = useState(0);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 25;
      if (count > 475) {
        count = 475;
        clearInterval(interval);
      }
      setRegistrations(count);
    }, 100);
    const fetchEvents = async () => {
      console.log("Fetch events is called.");
      try {
        const link = `http://localhost:8080/api/student/dashboard`;
        const token = localStorage.getItem("token");
        const res = await axios.get(link, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        // console.log("We get response as", res.data);
        setEvents(res.data);
      } catch (err) {
        console.log("Error occured while fetching events.");
      }
    };
    fetchEvents();
    return () => clearInterval(interval);
  }, []);

  const notifications = [
    "Tech Club: Hackathon coming soon!",
    "Photography competition next week.",
    "Tech Talk by an industry expert tomorrow.",
    "Reminder: Submit project ideas by Friday!",
    "Tech Club: Hackathon coming soon!",
    "Photography competition next week.",
    "Tech Talk by an industry expert tomorrow.",
    "Reminder: Submit project ideas by Friday!",
  ];

  const techImages = [
    "https://cse.noticebard.com/wp-content/uploads/sites/23/2024/09/poster-people-with-3d-glasses-their-heads_934623-5234-1024x576.jpg",
    "https://cdn.prod.website-files.com/5e9aa66fd3886aa2b4ec01ca/658a45652a4e84000dc8e073_what%20is%20a%20hackerthon%20(1).webp",
    "https://media.istockphoto.com/id/1356636818/photo/teenager-student-doing-a-presentation-in-the-classroom.jpg?s=612x612&w=0&k=20&c=e9tea9jhAmDP-mrTLhRa5YqnNirj5GKllQMxU5j-tXY=",
  ];

  const nonTechImages = [
    "https://media.istockphoto.com/id/1158130392/photo/creative-business-people-planning-with-adhesive-note.jpg?s=612x612&w=0&k=20&c=y9RHiT1mI5VbCXGV4mkyI8MJlbKTS3kxGATKkzN4U34=",
    "https://media.istockphoto.com/id/1455935808/photo/technical-college-students-exchanging-ideas.jpg?s=612x612&w=0&k=20&c=dBX_083kTILhRsHblEf89cpabyz7cuXA-UYLLPyxvP0=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-v9haF8kHPzESoZ55_w8pyjuKqQMGcjsYPQnIWwtYz89vtG_aqo7n_t-3Rdi8bmAtTpI&usqp=CAU",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  };
  return (
    <div>
      <div
        className="front-grid"
        style={{ marginLeft: "250px", padding: "20px", marginTop: "80px" }}
      >
        <div className="card calendar-section">
          <h2>Events Calendar</h2>
          <p className="calendar-note">
            The blue dots represent dates of upcoming events.
          </p>
          <Calendar
            tileClassName={({ date }) =>
              date.getDate() % 9 === 0 ? "event-date" : null
            }
            className="calendar"
          />
        </div>

        <div className="count-notif">
          <div className="card registration-counter">
            <h2>User Count</h2>
            <p className="count">{registrations}</p>
          </div>

          <div className="card notifications">
            <h2>Recent Notifications</h2>
            <ul>
              {notifications.map((notification, index) => (
                <li key={index}>{notification}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="card slider-section">
          <h2>Non-Tech Club Highlights</h2>
          <Slider {...sliderSettings}>
          {nonTechImages.map((img, index) => (
            <img key={index} src={img} alt={`Non-Tech ${index + 1}`} />
            ))}
            </Slider>
            </div> */}

        <div className="card"></div>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", marginLeft: "20vw"}}
      >
        {events.map((event, index) => (
          <div className="card slider-section w-[250px]">
            <h2 style={{fontWeight:"900", fontSize:"25px"}}>{event.eventName}</h2>
            <h2 style={{fontStyle:"italic",  marginBottom:"20px"}}>{event.clubName}</h2>
            <Slider {...sliderSettings}>
              {techImages.map((img, index) => (
                <img key={index} src={img} alt={`Tech ${index + 1}`} />
              ))}
            </Slider>
            <div style={{display:'flex', flexDirection:"column"}}>
              <p style={{fontWeight:"bolder", marginTop:"40px"}}>About the event:</p>
              <p>{event.description}</p>
              <p style={{fontWeight:"bolder"}}>Venue: <span>{event.venueName}</span> </p>
              <p style={{fontWeight:"bolder"}}>{formatDate(event.eventDate)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
