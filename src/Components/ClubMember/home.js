import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import Slider from "react-slick";
import axios from 'axios';
import "react-calendar/dist/Calendar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

const HomeClub = () => {
    const [registrations, setRegistrations] = useState(0);
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        // Fetch existing notices from API
        const fetchNotices = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/club/get-notice'); // Replace with your API endpoint
                setNotices(response.data);
            } catch (error) {
                console.error("Error fetching notices:", error);
            }
        };
        fetchNotices();
    }, []);

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

    return (
        <div className="front-grid" style={{ marginLeft: "250px", padding: "20px", marginTop: "80px" }}>
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




            <div className="card slider-section">
                <h2>Tech Club Highlights</h2>
                <Slider {...sliderSettings}>
                    {techImages.map((img, index) => (
                        <img key={index} src={img} alt={`Tech ${index + 1}`} />
                    ))}
                </Slider>
            </div>

            <div className="card slider-section">
                <h2>Non-Tech Club Highlights</h2>
                <Slider {...sliderSettings}>
                    {nonTechImages.map((img, index) => (
                        <img key={index} src={img} alt={`Non-Tech ${index + 1}`} />
                    ))}
                </Slider>
            </div>


            <div className="card">

            </div>



        </div>
    );
};

export default HomeClub;







