// import React, { useState } from "react";
// import "./login.css";
// import { NavLink } from "react-router-dom";

// const LoginPage = () => {
//     const [role, setRole] = useState(""); // Track selected role
//     const [departmentName, setDepartmentName] = useState(""); // For Admin
//     const [clubName, setClubName] = useState(""); // For Event Manager

    


//     return (
//         <div className="containerl">
//             <div className="forms-container">
//                 <div className="signin-signup">
//                     {/* Log-in Form */}
//                     <form action="landingPage.html" method="get" className="sign-in-form">
//                         <h2 className="title">Sign in</h2>
//                         <div className="input-field">
//                             <i className="fas fa-user"></i>
//                             <input type="text" placeholder="Username" required />
//                         </div>
//                         <div className="input-field">
//                             <i className="fas fa-lock"></i>
//                             <input type="password" placeholder="Password" required />
//                         </div>
//                         <button type="submit" className="btn solid">
//                             Log in
//                         </button>
//                         <p className="social-text">Or Sign in with social platforms</p>
//                         <div className="social-media">
//                             <a href="#" className="social-icon">
//                                 <i className="fab fa-facebook-f"></i>
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <i className="fab fa-twitter"></i>
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <i className="fab fa-google"></i>
//                             </a>
//                             <a href="#" className="social-icon">
//                                 <i className="fab fa-linkedin-in"></i>
//                             </a>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             {/* Panels */}
//             <div className="panels-container">
                
//                 <div className="panel left-panel">
//                     <div className="content">
//                         <h3>One of us?</h3>
//                         <p>
//                             If you're already a member, sign in now to explore the latest events and pick up right where you left off. We’re thrilled to have you back on Campus Connect!
//                         </p>
//                         <NavLink
//                             className="btn transparent"
//                             id="sign-in-btn"
//                             to="/api/auth/register"
//                         >
//                             Sign in
//                         </NavLink>
//                     </div>
//                     <img
//                         src="/images/signin.svg"
//                         className="image"
//                         alt=""
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;




import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
 // Install this library using npm install jwt-decode
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./login.css";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const navigate = useNavigate(); // Initialize useNavigate

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", formData);

            if (response.status === 200) {
                const token = response.data.token;
                // Decode the JWT token to get the role
                const decodedToken = jwtDecode(token);
                const role = decodedToken.role;

                // Store the token in localStorage
                localStorage.setItem("token", token);

                setSuccessMessage("Login successful! Redirecting...");
                toast.success("Logged in successfully");
                // Navigate based on role
                if (role === "STUDENT") {
                    navigate("/api/student");
                } else if (role === "ADMIN") {
                    navigate("/api/admin/dashboard");
                } else if (role === "CLUB_MEMBER") {
                    navigate("/api/club/dashboard");
                } else {
                    setErrorMessage("Invalid role. Please contact support.");
                }
            } else {
                setErrorMessage("Invalid credentials. Please try again.");
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <div className="containerl">
            <div className="forms-container">
                <div className="signin-signup">
                    {/* Log-in Form */}
                    <form className="sign-in-form" onSubmit={handleSubmit}>
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn solid">
                            Log in
                        </button>
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="https://www.facebook.com/" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://x.com/i/flow/login" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="https://www.linkedin.com/loginnpm" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            {/* Panels */}
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>
                            Stay connected with Campus Connect! Sign up now to explore all the tech and non-tech events happening at our university, stay updated, and never miss out on opportunities to learn and grow—all in one place.
                        </p>
                        <NavLink
                            className="btn transparent"
                            id="sign-up-btn"
                            to="/api/auth/register"
                        >
                            Sign up
                        </NavLink>
                    </div>
                    <img
                        src="/images/signin.svg"
                        className="image"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;