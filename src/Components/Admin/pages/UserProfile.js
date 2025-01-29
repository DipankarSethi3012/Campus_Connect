import React from "react";
import "./UserProfile.css"; // Import the CSS file for styles

const UserProfile = () => {
  const user = {
    name: "Admin Name",
    email: "admin@example.com",
    role: "Administrator",
    contact: "123-456-7890",
    joinedDate: "January 10, 2023",
  };

  return (
    <div className="user-profile-container">
      <h1>Admin Profile</h1>

      <div className="profile-card">
        <h2>Profile Details</h2>
        <div className="profile-info">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <p>
            <strong>Contact:</strong> {user.contact}
          </p>
          <p>
            <strong>Joined Date:</strong> {user.joinedDate}
          </p>
        </div>
      </div>

      <div className="actions">
        <button className="edit-profile-btn">Edit Profile</button>
        <button className="update-password-btn">Update Password</button>
      </div>
    </div>
  );
};

export default UserProfile;
