import './Landing.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
// import { FaReact } from 'react-icons/fa'; 
//import Home from './pages/Home';
// import NoticeManagement from './pages/NoticeManagement';
import ClubsOverview from './pages/ClubsOverview';
import UserProfile from './pages/UserProfile';
import './components/header.css';
import { MdDiversity3 } from "react-icons/md";
import VenueControl from './pages/VenueControl';

function LandingAdmin() {
    return (
        <>

                <header className="header">
                    <div className="logo-container">
                        <MdDiversity3 className="logo-icon" /> {/* React icon used as logo */}
                        <h1 className="website-name">CampusConnect</h1>
                    </div>
                </header>
                <div style={{ position: 'relative', zIndex: 10 }}></div>

                <Navbar />

                <main className='mainAdmin'>
                    <Routes>
                        
                        <Route path="/dashboard" element={<VenueControl />} />
                        <Route path="/addclub" element={<ClubsOverview />} />
                        <Route path="/profile" element={<UserProfile />} />

                        {/* <Route path="/noticemanagement" element={<NoticeManagement />} /> */}

                    </Routes>
                </main>
            
        </>
    );
}

export default LandingAdmin;