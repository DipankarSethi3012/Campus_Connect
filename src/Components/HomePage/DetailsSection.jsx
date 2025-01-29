import React from 'react';
import "./homepg.css";

const DetailsSection = () => {
    return (
        <section id="details" className="details section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Details</h2>
                <div>
                    <span>Check Our</span>{' '}
                    <span className="description-title">Details</span>
                </div>
            </div>

            <div className="container">
                {/* First Features Item */}
                <div className="row gy-4 align-items-center features-item">
                    <div
                        className="col-md-5 d-flex align-items-center"
                        data-aos="zoom-out"
                        data-aos-delay="100"
                    >
                        <img
                            src="./images/img/details-1.png"
                            className="img-fluid"
                            alt="Explore events effortlessly"
                        />
                    </div>
                    <div
                        className="col-md-7"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3>Explore events effortlessly</h3>
                        <p className="fst-italic">
                            Campus Connect simplifies event discovery, allowing
                            students to stay updated with upcoming events and
                            activities.
                        </p>
                        <ul>
                            <li>
                                <i className="bi bi-check"></i>
                                <span>
                                    {' '}
                                    Real-Time Updates: Never miss an event with
                                    live updates.
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-check"></i>{' '}
                                <span>
                                    Categorized Listings: Explore events by
                                    clubs, categories, or popularity.
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-check"></i>{' '}
                                <span>
                                    Quick Access: All events accessible in one
                                    unified interface.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Second Features Item */}
                <div className="row gy-4 align-items-center features-item">
                    <div
                        className="col-md-5 order-1 order-md-2 d-flex align-items-center"
                        data-aos="zoom-out"
                        data-aos-delay="200"
                    >
                        <img
                            src="./images/img/details-2.png"
                            className="img-fluid"
                            alt="Join the action in just a few clicks"
                        />
                    </div>
                    <div
                        className="col-md-7 order-2 order-md-1"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3>Join the action in just a few clicks</h3>
                        <p className="fst-italic">
                            We make it easy for you to participate in campus
                            activities by streamlining the registration process.
                        </p>
                        <ul>
                            <li>
                                <i className="bi bi-check"></i>
                                <span>
                                    {' '}
                                    Hassle-Free Signups: Register for events
                                    quickly.
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-check"></i>{' '}
                                <span>
                                    Track Your Participation: Keep a history of
                                    all your registrations.
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-check"></i>{' '}
                                <span>
                                    Custom Notifications: Get reminders for the
                                    events you’ve registered for.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsSection;
