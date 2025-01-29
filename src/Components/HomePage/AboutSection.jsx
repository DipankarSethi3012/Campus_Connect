// AboutSection.js

import React from 'react';
import "./homepg.css";


const AboutSection = () => {
    return (
        <section id="about" className="about section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-xl-center gy-5">
                    <div className="col-xl-5 content">
                        <h3>About Us</h3>
                        <h2>Tired of searching for information across different sources?</h2>
                        <p>Campus Connect aims to bring the entire campus to your fingertips by providing a centralized platform for all club activities, event updates, and registration needs.</p>
                        <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                    </div>
                    <div className="col-xl-7">
                        <div className="row gy-4 icon-boxes">
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                    <i className="bi bi-buildings"></i>
                                    <h3>Empowering Campus Connectivity</h3>
                                    <p>We provide a platform where all campus events and club activities are seamlessly accessible, empowering students to stay informed and actively participate in what matters most to them.</p>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                    <i className="bi bi-clipboard-pulse"></i>
                                    <h3>Unlocking Opportunities</h3>
                                    <p>Discover the potential of your campus life! With Campus Connect, you can explore upcoming events, revisit past activities, and connect with clubs that resonate with your interests.</p>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon-box">
                                    <i className="bi bi-command"></i>
                                    <h3>Your One-Stop Platform</h3>
                                    <p>Campus Connect consolidates all information about campus clubs, their schedules, and events in one place. From event registrations to venue details, everything you need is just a click away.</p>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon-box">
                                    <i className="bi bi-graph-up-arrow"></i>
                                    <h3>Driven by Community</h3>
                                    <p>Campus Connect is more than just a tool—it's a vision to enhance collaboration, engagement, and the sense of belonging on campus. Together, let’s create a campus environment where everyone can thrive.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
