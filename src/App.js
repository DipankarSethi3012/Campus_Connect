import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage/login';
import HomePage from './Components/HomePage/home';
import SignupPage from './Components/LoginPage/signup';
import LandingPage from './Components/Student/Landing';
import LandingAdmin from './Components/Admin/Landing';
import LandingPageClub from './Components/ClubMember/landing';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/api/auth/login" element={<LoginPage/>}/>
        <Route path="/api/auth/register" element={<SignupPage/>}/>
        <Route path="/api/student/*" element={<LandingPage />} />
        <Route path="/api/admin/*" element={<LandingAdmin />} />
        <Route path="/api/club/*" element={<LandingPageClub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
