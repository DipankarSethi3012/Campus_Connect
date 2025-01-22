import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NoticeManagement.css';

const NoticeManagement = () => {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newNotice, setNewNotice] = useState({ clubName: '', heading: '', description: '' });
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Retrieve the token from localStorage or context
  const token = localStorage.getItem('token'); // Replace with the method you're using to store the token

  useEffect(() => {
    // Fetch existing notices from API
    const fetchNotices = async () => {
      try {
        // console.log("Fetch notices is called.")
        const response = await axios.get('http://localhost:8080/api/club/get-notice', {
          headers: {
            'Authorization':  `Bearer ${token}` ,
            'Content-Type': 'application/json',
          },
        });
        setNotices(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, [token]);

  const handleCreateNotice = async (e) => {
    e.preventDefault();
    const noticeData = { ...newNotice };

    try {
      // API call to create a new notice
      const response = await axios.post('http://localhost:8080/api/club/add-notice', noticeData, {
        headers: {
          'Authorization':`Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setNotices([response.data, ...notices]);
      setShowCreateForm(false); // Hide form after submitting
    } catch (error) {
      console.error('Error creating notice:', error);
    }
  };

  const handleDeleteNotice = async (noticeId) => {
    try {
      // API call to delete a notice
      const response = await axios.delete(`http://localhost:8080/api/club/delete-notice/${noticeId}`, {
        headers: {
          'Authorization': `Bearer ${token}` ,
        },
      });

      if (response.status === 200) {
        setNotices(notices.filter(notice => notice.id !== noticeId));
      }
    } catch (error) {
      console.error('Error deleting notice:', error);
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
          <label>heading:</label>
          <textarea
          type="text"
            value={newNotice.heading}
            onChange={(e) => setNewNotice({ ...newNotice, heading: e.target.value })}
            required
          />
          <label>Description:</label>
          <input
            type="text"
            value={newNotice.description}
            onChange={(e) => setNewNotice({ ...newNotice, description: e.target.value })}
          />
          <button type="submit">Create Notice</button>
        </form>
      )}

      {isLoading ? (
        <p>Loading Notices...</p>
      ) : (
        <table className="notices-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Date</th>
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






// import React, { useState, useEffect } from 'react';
// import './NoticeManagement.css';

// const NoticeManagement = () => {
//   const [notices, setNotices] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [newNotice, setNewNotice] = useState({ title: '', content: '', date: '' });
//   const [showCreateForm, setShowCreateForm] = useState(false);

//   useEffect(() => {
//     // Fetch existing notices from API (replace with your API endpoint)
//     const fetchNotices = async () => {
//       const response = await fetch('/api/notices');
//       const data = await response.json();
//       setNotices(data);
//       setIsLoading(false);
//     };

//     fetchNotices();
//   }, []);

//   const handleCreateNotice = async (e) => {
//     e.preventDefault();
//     const noticeData = { ...newNotice };

//     // API call to create a new notice (replace with your API call)
//     const response = await fetch('/api/notices', {
//       method: 'POST',
//       body: JSON.stringify(noticeData),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     const newCreatedNotice = await response.json();
//     setNotices([newCreatedNotice, ...notices]);
//     setShowCreateForm(false); // Hide form after submitting
//   };

//   const handleDeleteNotice = async (noticeId) => {
//     // API call to delete a notice (replace with your API call)
//     const response = await fetch(`/api/notices/${noticeId}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       setNotices(notices.filter(notice => notice.id !== noticeId));
//     }
//   };

//   const handleUpdateNotice = (noticeId) => {
//     // Logic to update notice (expand with a detailed form)
//     console.log(`Updating notice with id: ${noticeId}`);
//   };

//   return (
//     <div className="notice-management-container">
//       <h1>Notice Management</h1>

//       <div className="actions">
//         <button onClick={() => setShowCreateForm(!showCreateForm)} className="add-notice-btn">
//           {showCreateForm ? 'Cancel' : 'Add New Notice'}
//         </button>
//       </div>

//       {showCreateForm && (
//         <form onSubmit={handleCreateNotice} className="create-notice-form">
//           <label>Title:</label>
//           <input
//             type="text"
//             value={newNotice.title}
//             onChange={(e) => setNewNotice({ ...newNotice, title: e.target.value })}
//             required
//           />
//           <label>Content:</label>
//           <textarea
//             value={newNotice.content}
//             onChange={(e) => setNewNotice({ ...newNotice, content: e.target.value })}
//             required
//           />
//           <label>Date:</label>
//           <input
//             type="date"
//             value={newNotice.date}
//             onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })}
//           />
//           <button type="submit">Create Notice</button>
//         </form>
//       )}

//       {isLoading ? (
//         <p>Loading Notices...</p>
//       ) : (
//         <table className="notices-table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Content</th>
//               <th>Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {notices.map((notice) => (
//               <tr key={notice.id}>
//                 <td>{notice.title}</td>
//                 <td>{notice.content}</td>
//                 <td>{notice.date}</td>
//                 <td>
//                   <button className="action-btn update" onClick={() => handleUpdateNotice(notice.id)}>
//                     Update
//                   </button>
//                   <button className="action-btn delete" onClick={() => handleDeleteNotice(notice.id)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default NoticeManagement;
