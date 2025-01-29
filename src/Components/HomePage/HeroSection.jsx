// HeroSection.js

import React from 'react';
import "./homepg.css";
import { NavLink } from 'react-router-dom';


const HeroSection = () => {
    return (
        <section id="hero" className="hero section dark-background">
            <img src="./images/hero-bg-2.jpg" alt="" className="hero-bg" />
            <div className="container">
                <div className="row gy-4 justify-content-between">
                    <div className="col-lg-4 order-lg-last hero-img" data-aos="zoom-out" data-aos-delay="100">
                        <img src="./images/homeimg.png" className="img-fluid animated" alt="" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-in">
                        <h1>Single Platform For All Your <span>Campus</span> Needs</h1>
                        <p>
                            Discover a better way. Stay connected and informed with CampusConnect – your all-in-one platform for exploring clubs at your university.
                        </p>
                        <div className="d-flex">
                            <NavLink to="/api/auth/login" className="btn-get-started">Get Started</NavLink>
                        </div>
                    </div>
                </div>
            </div>
           
            <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
                <defs>
                    <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                </defs>
                <g className="wave1">
                    <use xlinkHref="#wave-path" x="50" y="3"></use>
                </g>
                <g className="wave2">
                    <use xlinkHref="#wave-path" x="50" y="0"></use>
                </g>
                <g className="wave3">
                    <use xlinkHref="#wave-path" x="50" y="9"></use>
                </g>
            </svg>
        </section>
    );
};

export default HeroSection;
