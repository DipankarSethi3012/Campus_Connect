import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./Landing.css"
import "./header.css";
import Home from "./Pages/Home";
import Navbar from "./Navbar";
import TechClub from "./Pages/TechClub";
import NonTechClub from "./Pages/NonTechClub";
import EventCalender from "./Pages/EventCalender";
import NoticeBoard from "./Pages/NoticeBoard";
import UserProfile from "./Pages/UserProfile";
// import { FaReact } from 'react-icons/fa';
import { MdDiversity3 } from "react-icons/md";


function LandingPage(){
    return(
        <>
                <header className="header">
                    <div className="logo-container">
                        <MdDiversity3 className="logo-icon" />
                        <h1 className="website-name">CampusConnect</h1>
                    </div>
                </header>
                <div style={{ position: 'relative', zIndex: 10 }}></div>

                <Navbar />
            <div>
                <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/get-clubs" element={<TechClub />} />
                        {/* <Route path="/nontechclub" element={<NonTechClub />} /> */}
                        <Route path="/dashboard" element={<EventCalender />} />
                        <Route path="/get-notice" element={<NoticeBoard />} />
                        <Route path="/profile" element={<UserProfile />} />
                </Routes>
            </div>
       
        </>
    );
}

export default LandingPage;