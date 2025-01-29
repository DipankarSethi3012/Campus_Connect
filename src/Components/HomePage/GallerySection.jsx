// GallerySection.js

import "./homepg.css";
import React, { useEffect } from 'react';
import GLightbox from 'glightbox'; // Import GLightbox for lightbox functionality
import 'glightbox/dist/css/glightbox.css'; // Import GLightbox styles

const GallerySection = () => {
    useEffect(() => {
        // Initialize GLightbox when the component mounts
        const lightbox = GLightbox({
            selector: '.glightbox', // Target elements with the "glightbox" class
            touchNavigation: true,
            loop: true,
        });
        return () => {
            // Cleanup GLightbox instance on component unmount
            lightbox.destroy();
        };
    }, []);

    return (
        <section id="gallery" className="gallery section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Gallery</h2>
                <div>
                    <span>Check Our</span>{' '}
                    <span className="description-title">Gallery</span>
                </div>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row g-0">
                    {/* Gallery Items */}
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a
                                    href={`./images/img/gallery/gallery-${index + 1}.jpg`}
                                    className="glightbox"
                                    data-gallery="images-gallery"
                                >
                                    <img
                                        src={`./images/img/gallery/gallery-${index + 1}.jpg`}
                                        alt={`Gallery ${index + 1}`}
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
