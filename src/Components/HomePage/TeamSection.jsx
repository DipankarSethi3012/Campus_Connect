// TeamSection.js

import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

const TeamSection = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({ duration: 1000 });
    }, []);

    // Team member data
    const teamMembers = [
        { id: 1, name: "Khushi", role: "Project Manager", img: "/images/img/team/team-1.jpg" },
        { id: 2, name: "Dipankar Sethi", role: "Sublead", img: "./images/img/team/team-2.jpg" },
        { id: 3, name: "Ishika Chopra", role: "Developer", img: "/images/img/team/team-3.jpg" },
        { id: 4, name: "Richa", role: "Developer", img: "./images/img/team/team-4.jpg" },
        { id: 4, name: "Mahir Oberoi", role: "Developer", img: "./images/img/team/team-5.jpg" },
        { id: 4, name: "Mukul Saini", role: "Developer", img: "./images/img/team/team-6.jpg" },
        { id: 4, name: "Shruti Bansal", role: "Developer", img: "./images/img/team/team-7.jpg" },
    ];

    return (
        <section id="team" className="team section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Our Team</h2>
                <div>
                    <span>Meet Our</span> <span className="description-title">Team</span>
                </div>
            </div>
            <div className="container">
                <div className="row gy-4">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="col-lg-3 col-md-6"
                            data-aos="zoom-in"
                            data-aos-delay={(index + 0.5) * 100}
                        >
                            <div className="member">
                                <div className="team-member">
                                    <div className="pic"><img src={member.img} alt={member.name} className="img-fluid" /></div>
                                    
                                    <div className="member-info">
                                        <h4>{member.name}</h4>
                                        <span>{member.role}</span>
                                        <div class="social">
                                            <a href=""><i class="bi bi-twitter-x"></i></a>
                                            <a href=""><i class="bi bi-facebook"></i></a>
                                            <a href=""><i class="bi bi-instagram"></i></a>
                                            <a href=""><i class="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
