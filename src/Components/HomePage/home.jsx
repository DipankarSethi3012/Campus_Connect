// HomePage.js

import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import DetailsSection from './DetailsSection';
import GallerySection from './GallerySection'; // Assuming you will create these components
import TeamSection from './TeamSection'; // Assuming you will create these components
import ContactSection from './ContactUs';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div className="index-page">
            <Header />
            <main className="main">
                <HeroSection />
                <AboutSection />
                <DetailsSection />
                <GallerySection /> {/* Add Gallery Section */}
                <TeamSection /> {/* Add Team Section */}
                <ContactSection/>
            </main>
            <Footer/>
        </div>
    );
}

export default HomePage;



// import React from 'react';
// import { useState } from 'react';

// const HomePage = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Implement form submission logic
//         console.log('Form submitted:', formData);
//     };

//     return (
//         <div className="bg-white text-gray-900">
//             {/* Header */}
//             <header className="fixed top-0 w-full bg-white shadow-md z-50">
//                 <div className="container mx-auto flex justify-between items-center py-4 px-6">
//                     <div className="logo">
//                         <h1 className="text-2xl font-bold text-blue-600">CampusConnect</h1>
//                     </div>
//                     <nav>
//                         <ul className="flex space-x-6">
//                             {['Home', 'About', 'Gallery', 'Team', 'Contact'].map(item => (
//                                 <li key={item}>
//                                     <a
//                                         href={`#${item.toLowerCase()}`}
//                                         className="text-gray-700 hover:text-blue-600 transition"
//                                     >
//                                         {item}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>
//             </header>

//             {/* Hero Section */}
//             <section id="hero" className="pt-24 bg-blue-50 relative">
//                 <div className="container mx-auto px-6 flex items-center">
//                     <div className="w-1/2 pr-10">
//                         <h1 className="text-5xl font-bold mb-4">
//                             Single Platform For All Your <span className="text-blue-600">Campus</span> Needs
//                         </h1>
//                         <p className="text-xl mb-6">
//                             Discover a better way. Stay connected and informed with CampusConnect – your all-in-one platform for exploring clubs at your university.
//                         </p>
//                         <a
//                             href="#about"
//                             className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
//                         >
//                             Get Started
//                         </a>
//                     </div>
//                     <div className="w-1/2">
//                         <img
//                             src="/assets/img/hero-img.png"
//                             alt="CampusConnect Hero"
//                             className="w-full h-auto"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* About Section */}
//             <section id="about" className="py-20 bg-white">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl font-bold">About Us</h2>
//                         <p className="text-xl text-gray-600">Learn more about our mission and vision</p>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-10">
//                         <div>
//                             <h3 className="text-3xl font-semibold mb-4">Tired of searching for information?</h3>
//                             <p className="text-lg text-gray-700 mb-6">
//                                 Campus Connect aims to bring the entire campus to your fingertips by providing a centralized platform for all club activities, event updates, and registration needs.
//                             </p>
//                         </div>
//                         <div className="grid grid-cols-2 gap-6">
//                             {[
//                                 { icon: 'bi-buildings', title: "Empowering Campus Connectivity", desc: "Seamlessly accessible campus events and club activities." },
//                                 { icon: 'bi-clipboard-pulse', title: "Unlocking Opportunities", desc: "Discover events and connect with clubs that match your interests." },
//                                 { icon: 'bi-command', title: "One-Stop Platform", desc: "Consolidated information about campus clubs and events." },
//                                 { icon: 'bi-graph-up-arrow', title: "Driven by Community", desc: "Enhance collaboration and campus engagement." }
//                             ].map((item, index) => (
//                                 <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md">
//                                     <div className={`text-blue-600 mb-4 text-3xl bi ${item.icon}`}></div>
//                                     <h4 className="font-bold mb-2">{item.title}</h4>
//                                     <p className="text-sm text-gray-600">{item.desc}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section id="contact" className="py-20 bg-gray-100">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl font-bold">Contact Us</h2>
//                         <p className="text-xl text-gray-600">Get in touch with our team</p>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-10">
//                         <div>
//                             {[
//                                 { icon: 'bi-geo-alt', title: 'Address', content: 'Chitkara University, Rajpura, Punjab 140401' },
//                                 { icon: 'bi-telephone', title: 'Call Us', content: '+1 5589 55488 55' },
//                                 { icon: 'bi-envelope', title: 'Email Us', content: 'campusconnect@gmail.com' }
//                             ].map((contact, index) => (
//                                 <div key={index} className="flex items-center mb-6">
//                                     <div className={`mr-4 text-blue-600 text-2xl bi ${contact.icon}`}></div>
//                                     <div>
//                                         <h4 className="font-bold">{contact.title}</h4>
//                                         <p>{contact.content}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
//                             <div className="grid grid-cols-2 gap-4 mb-4">
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     placeholder="Your Name"
//                                     className="w-full p-2 border rounded"
//                                     value={formData.name}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="Your Email"
//                                     className="w-full p-2 border rounded"
//                                     value={formData.email}
//                                     onChange={handleInputChange}
//                                     required
//                                 />
//                             </div>
//                             <input
//                                 type="text"
//                                 name="subject"
//                                 placeholder="Subject"
//                                 className="w-full p-2 border rounded mb-4"
//                                 value={formData.subject}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                             <textarea
//                                 name="message"
//                                 placeholder="Message"
//                                 className="w-full p-2 border rounded mb-4 h-32"
//                                 value={formData.message}
//                                 onChange={handleInputChange}
//                                 required
//                             />
//                             <button
//                                 type="submit"
//                                 className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
//                             >
//                                 Send Message
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default HomePage;
