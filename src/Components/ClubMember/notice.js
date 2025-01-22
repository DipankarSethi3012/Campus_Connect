import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Notice.css';

const NoticeManagement = () => {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newNotice, setNewNotice] = useState({ clubName: '', heading: '', description: '' });
  const [showCreateForm, setShowCreateForm] = useState(false);

  const token = localStorage.getItem('token'); 

  useEffect(() => {
    // Fetch existing notices from API
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/club/get-notice',{
          headers: {
            'Authorization':  `Bearer ${token}` ,
            'Content-Type': 'application/json',
          },
        }); // Replace with your API endpoint
        setNotices(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching notices:", error);
        setIsLoading(false);
      }
    };

    fetchNotices();
  }, [token]);

  const handleCreateNotice = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/club/add-notice', newNotice, {
        headers: {
          'Authorization':`Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setNotices([response.data, ...notices]);
      setNewNotice({ clubName: '', heading: '', description: '' });
      setShowCreateForm(false); // Hide form after submitting
    } catch (error) {
      console.error("Error creating notice:", error);
    }
  };


  const handleDeleteNotice = async (noticeId) => {
    try {
      await axios.delete(`http://localhost:8080/api/club/delete-notice/${noticeId}`,{
        headers: {
          'Authorization':`Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }); // Replace with your API endpoint
      setNotices(notices.filter((notice) => notice.id !== noticeId));
    } catch (error) {
      console.error("Error deleting notice:", error);
    }
  };


  // const handleUpdateNotice = (noticeId) => {
  //   // Logic to update notice (expand with a detailed form)
  //   console.log(`Updating notice with id: ${noticeId}`);
  // };

  return (
    <div className="notice-management-container">
      <h1>Notice Management</h1>

      <div className="actions">
        <button onClick={() => setShowCreateForm(!showCreateForm)} className="add-notice-btn">
          {showCreateForm ? 'Cancel' : 'Add New Notice'}
        </button>
      </div>

      {showCreateForm && (
        <form onSubmit={handleCreateNotice} className="create-notice-form">
          <label>Club Name:</label>
          <input
            type="text"
            value={newNotice.clubName}
            onChange={(e) => setNewNotice({ ...newNotice, clubName: e.target.value })}
            required
          />
          <label>Heading:</label>
          <input
            type="text"
            value={newNotice.heading}
            onChange={(e) => setNewNotice({ ...newNotice, heading: e.target.value })}
            required
          />
          <label>Description:</label>
          <textarea
            value={newNotice.description}
            onChange={(e) => setNewNotice({ ...newNotice, description: e.target.value })}
            required
          />
          <button type="submit">Create Notice</button>
        </form>
      )}

      {isLoading ? (
        <p>Loading Notices...</p>
      ) : notices.length === 0 ? (
        <p className="empty-state">No notices available. Please add a new notice.</p>
      ) : (
        <table className="notices-table">
          <thead>
            <tr>
              <th>Club Name</th>
              <th>Heading</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                <td>{notice.clubName}</td>
                <td>{notice.heading}</td>
                <td>{notice.description}</td>
                <td>
                  {/* <button className="action-btn update" onClick={() => handleUpdateNotice(notice.id)}>
                    Update
                  </button> */}
                  <button className="action-btn delete" onClick={() => handleDeleteNotice(notice.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NoticeManagement;
