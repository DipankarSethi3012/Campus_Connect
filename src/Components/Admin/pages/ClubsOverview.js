import React, { useState, useEffect } from 'react';
import './ClubsOverview.css'; // Import CSS file for styling
import axios from 'axios';  

const ClubsOverview = () => {
  const [clubs, setClubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [clubForm, setClubForm] = useState({ name: '', description: '' });

  useEffect(() => {
    // Fetch clubs data using axios
    const fetchClubs = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        // console.log(token);
        // Prepare headers
        const headers = {
          'Authorization': `Bearer ${token}`, // Include Bearer token
          'Content-Type': 'application/json', // Explicit JSON content type (optional for GET)
        };
        console.log(headers);

  
        // Make GET request with headers
        const response = await axios.get('http://localhost:8080/api/admin/getclubs', { headers });
        setClubs(response.data); // Set clubs data
      } catch (error) {
        console.error('Error fetching clubs:', error);
        alert('Failed to load clubs');
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchClubs();
  }, []); // Empty dependency array ensures this runs once on mount
  

  const handleCreateClub = async (e) => {
    e.preventDefault();
    const newClub = {
      name: clubForm.name,
      description: clubForm.description,
      category: clubForm.category,
    };

    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
  
  // Prepare headers
  const headers = {
    'Content-Type': 'application/json', // Ensure JSON content
    'Authorization': `Bearer ${token}`, // Include Bearer token
  };

  // Send the POST request
  const response = await axios.post(
    'http://localhost:8080/api/admin/addclub', 
    newClub, 
    { headers } // Pass the headers here
  );
      setClubs([...clubs, response.data]);  // Add the new club to the clubs list
      setShowCreateForm(false);  // Hide the form after submitting
    } catch (error) {
      console.error('Error creating club:', error);
      alert('Failed to create club');
    }
  };

  // const handleUpdateClub = (clubId) => {
  //   // Update club logic (Replace with your API call)
  //   console.log(`Updating Club ${clubId}`);
  // };

  // const handleDeleteClub = async (clubId) => {
  //   // API call to delete the club (Replace with your API call)
  //   const response = await fetch(`/api/clubs/${clubId}`, {
  //     method: 'DELETE',
  //   });

  //   if (response.ok) {
  //     setClubs(clubs.filter((club) => club.id !== clubId));
  //   }
  // };

  // const handleAssignMember = (clubId) => {
  //   // Logic to assign member (API call)
  //   console.log(`Assign member to Club ${clubId}`);
  // };

  // const handleRemoveMember = (clubId) => {
  //   // Logic to remove member (API call)
  //   console.log(`Remove member from Club ${clubId}`);
  // };

  // const handleAssignCoordinator = (clubId) => {
  //   // Logic to assign coordinator (API call)
  //   console.log(`Assign coordinator to Club ${clubId}`);
  // };

  // const handleRemoveCoordinator = (clubId) => {
  //   // Logic to remove coordinator (API call)
  //   console.log(`Remove coordinator from Club ${clubId}`);
  // };

  return (
    <div className="clubs-overview-container">
      <h1>Clubs Overview</h1>

      <div className="actions">
        <button
          className="add-club-btn"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? 'Cancel' : 'Add New Club'}
        </button>
      </div>

      {showCreateForm && (
        <form onSubmit={handleCreateClub} className="create-club-form">
          <label>Club Name:</label>
          <input
            type="text"
            value={clubForm.name}
            onChange={(e) => setClubForm({ ...clubForm, name: e.target.value })}
            required
          />
          <label>Club Description:</label>
          <textarea
            value={clubForm.description}
            onChange={(e) =>
              setClubForm({ ...clubForm, description: e.target.value })
            }
            required
          />
          <label>Club Category:</label>
          <select
            value={clubForm.category}
            onChange={(e) => setClubForm({ ...clubForm, category: e.target.value })}
            required
          >
            <option value="">Select Category</option>
            <option value="Sports">Sports</option>
            <option value="Arts">Arts</option>
            <option value="Music">Music</option>
            <option value="Technology">Technology</option>
          </select>
          <button type="submit">Create Club</button>
        </form>
      )}

      {isLoading ? (
        <p>Loading clubs...</p>
      ) : (
        <table className="clubs-table">
          <thead>
            <tr>
              <th>Club Name</th>
              <th>Description</th>
              <th>Category</th>
              {/* <th>Members</th>
             
              <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {clubs.map((club) => (
              <tr key={club.id}>
                <td>{club.name}</td>
                <td>{club.description}</td>
                <td>{club.category}</td>
                
                {/* <td> */}
                  {/* <button
                    className="action-btn update"
                    onClick={() => handleUpdateClub(club.id)}
                  >
                    Update
                  </button> */}
                  {/* <button
                    className="action-btn delete"
                    onClick={() => handleDeleteClub(club.id)}
                  >
                    Delete
                  </button> */}
                  {/* <button
                    className="action-btn assign"
                    onClick={() => handleAssignMember(club.id)}
                  >
                    Assign Member
                  </button> */}
                  {/* <button
                    className="action-btn remove"
                    onClick={() => handleRemoveMember(club.id)}
                  >
                    Remove Member
                  </button> */}
                  {/* <button
                    className="action-btn assign"
                    onClick={() => handleAssignCoordinator(club.id)}
                  >
                    Assign Coordinator
                  </button> */}
                  {/* <button
                    className="action-btn remove"
                    onClick={() => handleRemoveCoordinator(club.id)}
                  >
                    Remove Coordinator
                  </button> */}
                {/* </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClubsOverview;
