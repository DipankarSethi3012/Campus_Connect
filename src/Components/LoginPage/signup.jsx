// import React, { useState } from "react";
// import "./login.css";
// import { NavLink } from "react-router-dom";

// const SignupPage = () => {
//     const [role, setRole] = useState(""); // Track selected role
//     const [departmentName, setDepartmentName] = useState(""); // For Admin
//     const [clubName, setClubName] = useState(""); // For Event Manager

//     const handleRoleChange = (e) => {
//         setRole(e.target.value);
//     };

//     const handleSignUpSubmit = (e) => {
//         e.preventDefault();
//         const formData = {
//             username: e.target.username.value,
//             email: e.target.email.value,
//             password: e.target.password.value,
//             role,
//             departmentName: role === "Admin" ? departmentName : undefined,
//             clubName: role === "Event Manager" ? clubName : undefined,
//         };

//         console.log("Sign-Up Data:", formData);
//         // Add your API call logic here
//     };

//     return (
//         <div className="containerl">
//             <div className="forms-container">
//                 <div className="signin-signup">

//                     {/* Sign-up Form */}
//                     <form className="sign-in-form" onSubmit={handleSignUpSubmit}>
//                         <h2 className="title">Sign up</h2>
//                         <div className="input-field">
//                             <i className="fas fa-user"></i>
//                             <input type="text" name="username" placeholder="Username" required />
//                         </div>
//                         <div className="input-field">
//                             <i className="fas fa-envelope"></i>
//                             <input type="email" name="email" placeholder="Email" required />
//                         </div>
//                         <div className="input-field">
//                             <i className="fas fa-lock"></i>
//                             <input type="password" name="password" placeholder="Password" required />
//                         </div>
//                         <div className="input-field">
//                             <i className="fas fa-user-tag"></i>
//                             <select name="role" value={role} onChange={handleRoleChange} required>
//                                 <option value="" disabled>
//                                     Select Role
//                                 </option>
//                                 <option value="User">User</option>
//                                 <option value="Event Manager">Club Member</option>
//                                 <option value="Admin">Admin</option>
//                             </select>
//                         </div>

//                         {/* Additional Field for Admin */}
//                         {role === "Admin" && (
//                             <div className="input-field">
//                                 <i className="fas fa-building"></i>
//                                 <input
//                                     type="text"
//                                     placeholder="Department Name"
//                                     value={departmentName}
//                                     onChange={(e) => setDepartmentName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         )}

//                         {/* Additional Field for Event Manager */}
//                         {role === "Event Manager" && (
//                             <div className="input-field">
//                                 <i className="fas fa-users"></i>
//                                 <input
//                                     type="text"
//                                     placeholder="Club Name"
//                                     value={clubName}
//                                     onChange={(e) => setClubName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                         )}

//                         <button type="submit" className="btn solid">
//                             Sign up
//                         </button>
//                         <p className="social-text">Or Sign up with social platforms</p>
//                         <div className="social-media">
//                             <a href="www.facebook.com" className="social-icon">
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
//                         <h3>New here?</h3>
//                         <p>
//                             Stay connected with Campus Connect! Sign up now to explore all the tech and non-tech events happening at our university, stay updated, and never miss out on opportunities to learn and grow—all in one place.
//                         </p>
//                         <NavLink
//                             className="btn transparent"
//                             id="sign-up-btn"
//                             to="/api/auth/login"
//                         >
//                             Sign up
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

// export default SignupPage;




import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { NavLink ,useNavigate} from "react-router-dom";
import toast from "react-hot-toast";

const SignupPage = () => {
    const navigate=useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(""); // Track selected role
    const [departmentName, setDepartmentName] = useState(""); // For Admin
    const [clubName, setClubName] = useState(""); // For Event Manager
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        const formData = {
            username,
            email,
            password,
            role,
            departmentName: role === "ADMIN" ? departmentName : undefined,
            clubName: role === "CLUB_MEMBER" ? clubName : undefined,
        };

        try {
            const response = await axios.post("http://localhost:8080/api/auth/register", formData);

            if (response.status === 201 || response.status === 200) {
                setSuccessMessage("Sign-up successful! You can now log in.");
                setErrorMessage("");
                toast.success("Signed in successfully.");
                navigate("/api/auth/login");
            } else {
                setErrorMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            if (error.response?.status === 403) {
                setErrorMessage("User already registered. Please log in.");
            } else {
                setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="containerl">
            <div className="forms-container">
                <div className="signin-signup">

                    {/* Sign-up Form */}
                    <form className="sign-in-form" onSubmit={handleSignUpSubmit}>
                        <h2 className="title">Sign up</h2>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Username" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user-tag"></i>
                            <select name="role" value={role} onChange={handleRoleChange} required>
                                <option value="" disabled>
                                    Select Role
                                </option>
                                <option value="STUDENT">STUDENT</option>
                                <option value="CLUB_MEMBER">CLUB MEMBER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>

                        {/* Additional Field for Admin */}
                        {role === "Admin" && (
                            <div className="input-field">
                                <i className="fas fa-building"></i>
                                <input
                                    type="text"
                                    placeholder="Department Name"
                                    value={departmentName}
                                    onChange={(e) => setDepartmentName(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        {/* Additional Field for Event Manager */}
                        {role === "Event Manager" && (
                            <div className="input-field">
                                <i className="fas fa-users"></i>
                                <input
                                    type="text"
                                    placeholder="Club Name"
                                    value={clubName}
                                    onChange={(e) => setClubName(e.target.value)}
                                    required
                                />
                            </div>
                        )}

                        <button type="submit" className="btn solid">
                            Sign up
                        </button>
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="www.facebook.com" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
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
                        <h3>One of us?</h3>
                        <p>
                            If you're already a member, sign in now to explore the latest events and pick up right where you left off. We’re thrilled to have you back on Campus Connect!
                        </p>
                        <NavLink className="btn transparent" id="sign-in-btn" to="/api/auth/login">
                            Sign up
                        </NavLink>
                    </div>
                    <img src="/images/signin.svg" className="image" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default SignupPage;