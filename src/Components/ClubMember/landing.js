import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClubEventForm from './add_event';
import NoticeManagement from './notice';
import Homeclub from './home';
import Navbar from './Navbar';
import { MdDiversity3 } from "react-icons/md";

function LandingPageClub(){
    return(
        <>
       
                <header className="header">
                    <div className="logo-container">
                        {/* <MdDiversity3 className="logo-icon" /> */}
                         <MdDiversity3 className="logo-icon" /> 
                        <h1 className="website-name">CampusConnect</h1>
                    </div>
                </header>
                <div style={{ position: 'relative', zIndex: 10 }}></div>

                <Navbar />
            <main>
                <Routes>
                        <Route path="/dashboard" element={<Homeclub />} />
                        <Route path="/add-notice" element={<NoticeManagement />} />
                        <Route path="/post-event" element={< ClubEventForm/>} />
                        
                </Routes>
            </main>
       
        </>
    );
}

export default LandingPageClub;