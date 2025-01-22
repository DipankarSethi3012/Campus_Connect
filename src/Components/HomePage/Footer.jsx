import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
    return (
        <footer id="footer" className="footer dark-background">
            <div className="container footer-top">
                <div className="row gy-4">
                    {/* Footer About Section */}
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="/" className="logo d-flex align-items-center">
                            <span className="sitename">CampusConnect</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>Chitkara University, Rajpura</p>
                            <p>Punjab, 140401</p>
                            <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                            <p><strong>Email:</strong> <span>campusconnect@gmail.com</span></p>
                        </div>
                        <div className="social-links d-flex mt-4">
                            <a href="#"><i className="bi bi-twitter-x"></i></a>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About us</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Event Listings</a></li>
                            <li><a href="#">Club Directory</a></li>
                            <li><a href="#">Event Registration</a></li>
                            <li><a href="#">Venue Management</a></li>
                            <li><a href="#">Past Event Highlights</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-lg-4 col-md-12 footer-newsletter">
                        <h4>Stay Connected</h4>
                        <p>Subscribe to our newsletter to get the latest updates on upcoming events, club activities, and campus news!</p>
                        <form action="forms/newsletter.php" method="post" className="php-email-form">
                            <div className="newsletter-form">
                                <input type="email" name="email" placeholder="Enter your email" />
                                <input type="submit" value="Subscribe" />
                            </div>
                            <div className="loading">Loading...</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Thank you for subscribing! Stay tuned for updates.</div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">CampusConnect</strong> <span>All Rights Reserved</span></p>
            </div>
        </footer>
    );
};

export default Footer;
