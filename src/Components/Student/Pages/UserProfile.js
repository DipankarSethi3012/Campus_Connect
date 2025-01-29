import React from "react";
import "./UserProfile.css";

const userProfile = () => {
  return (
    <div className="account-settings">
      <div className="settings-container">
        <div className="sidebar">
          <ul>
            <li className="active">Profile</li>
            <li>Account & Payment</li>
            <li>Security</li>
            <li>Legal Agreements</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="content">
          <header className="content-header">
            <h1>My Profile</h1>
            <button className="close-btn">✕</button>
          </header>
          
          <div className="profile-section">
            <div className="profile-header">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzw6Mk_YZsbSp1g6tL_6qZlhI0STrZL2mXVQ&s"
                alt="Profile"
                className="profile-picture"
              />
              <div className="profile-info">
                
                <input type="text" placeholder="First Name" value="Jessica" />
                <input type="text" placeholder="Last Name" value="Doe" />
              </div>
            </div>
            <div className="details-container">
      <h2>User Details</h2>
      <table className="details-table">
        <tbody>
          <tr>
            <th>Phone Number</th>
            <td>1234567890</td>
          </tr>
          <tr>
            <th>Email Id</th>
            <td>wsdcv@gmail.com</td>
          </tr>
          <tr>
            <th>Roll Number</th>
           <td>45678</td>
          </tr>
        </tbody>
      </table>
    </div>
           
          </div>
          <footer className="content-footer">
            <button className="update-btn">Update</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default userProfile;