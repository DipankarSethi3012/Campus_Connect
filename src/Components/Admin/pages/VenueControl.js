
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./VenueControl.css";

// const VenueControl = () => {
//   const [allEvents, setAllEvents] = useState([]);
//   const [approvedEvents, setApprovedEvents] = useState([]);
//   const [declinedEvents, setDeclinedEvents] = useState([]);
//   const [pendingEvents, setPendingEvents] = useState([]);
//   const [error, setError] = useState(null); 
  
//   const handleApprove = async (id) => {
//     try {
//       // Update status in the backend
//       await axios.post(`http://localhost:8080/admin/approved-events/${id}`);
//         // Update the state
//         setApprovedEvents((prev) =>
//           prev.map((request) =>
//             request.id === id ? { ...request, status: "Approved" } : request
//           )
//         );
//     } catch (error) {
//       console.error("Error approving the event:", error);
//     }
//   };

//   const handleReject = async (id) => {
//     try {
//       // Update status in the backend
//       await axios.post(`http://localhost:8080/admin/declined-events/${id}`);
//         // Update the state
//         setDeclinedEvents((prev) =>
//           prev.map((request) =>
//             request.id === id ? { ...request, status: "Declined" } : request
//           )
//         );
//     } catch (error) {
//       console.error("Error rejecting the event:", error);
//     }
//   };


//   useEffect(() => {
//     // Fetch all events
//     const fetchAllEvents = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Retrieve the stored token

//         const response = await axios.get(
//             "http://localhost:8080/admin/dashboard", 
//             {
//                 headers: {
//                     "Authorization": `Bearer ${token}`, // Include the token
//                     "Content-Type": "application/json", // Optional
//                 },
//             }
//         );
//         // const response = await axios.get("http://localhost:8080/admin/dashboard");
//         setAllEvents(response.data);
//       } catch (err) {
//         console.error("Error fetching all events:", err);
//         setError("Failed to fetch all events. Please try again later.");
//       }
//     };

//     // Fetch approved events
//     const fetchApprovedEvents = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/admin/dashboard/approved-events");
//         setApprovedEvents(response.data);
//       } catch (err) {
//         console.error("Error fetching approved events:", err);
//         setError("Failed to fetch approved events. Please try again later.");
//       }
//     };

//     // Fetch declined events
//     const fetchDeclinedEvents = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/admin/dashboard/declined-events");
//         setDeclinedEvents(response.data);
//       } catch (err) {
//         console.error("Error fetching declined events:", err);
//         setError("Failed to fetch declined events. Please try again later.");
//       }
//     };

//     // Fetch pending events (derived from all events)
//     const fetchPendingEvents = async () => {
//       try {
//         const token = localStorage.getItem("token"); 
//     const response = await axios.get(
//       "http://localhost:8080/admin/pending-events",
//       {
//         headers: {
//           "Authorization": `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//         setPendingEvents(response.data);
//       } catch (err) {
//         console.error("Error fetching pending events:", err);
//         setError("Failed to fetch pending events. Please try again later.");
//       }
//     };

//     fetchAllEvents();
//     fetchApprovedEvents();
//     fetchDeclinedEvents();
//     fetchPendingEvents();
//   }, []);

//   const renderEvents = (events, allowActions = false) =>
//     events.length > 0 ? (
//       events.map((request) => (
//         <div className="venue-card" key={request.eventId}>
//           <h2>{request.clubName}</h2>
//           <p>
//             <strong>Event Date:</strong> {request.eventDate}
//           </p>
//           <p>
//             <strong>Venue:</strong> {request.venueName}
//           </p>
//           <p>
//             <strong>Description:</strong> {request.description}
//           </p>
//           <div className="actions">
//             {allowActions && request.status === "Pending" ? (
//               <>
//                 <button
//                   className="approve-btn"
//                   onClick={() => handleApprove(request.eventId)}
//                 >
//                   Approve
//                 </button>
//                 <button
//                   className="reject-btn"
//                   onClick={() => handleReject(request.eventId)}
//                 >
//                   Reject
//                 </button>
//               </>
//             ) : (
//               <p className={`status ${request.approvalStatus.toLowerCase()}`}>
//                 {request.approvalStatus}
//               </p>
//             )}
//           </div>
//         </div>
//       ))
//     ) : (
//       <p>No events available.</p>
//     );

//   return (
//     <div className="venue-control-container">
//       <h1>Venue Control</h1>
//       {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

//       <div className="section">
//         <h2>All Events</h2>
//         <div className="venue-cards">{renderEvents(allEvents)}</div>
//       </div>

//       <div className="section">
//         <h2>Approved Events</h2>
//         <div className="venue-cards">{renderEvents(approvedEvents)}</div>
//       </div>

//       <div className="section">
//         <h2>Pending Events</h2>
//         <div className="venue-cards">{renderEvents(pendingEvents, true)}</div>
//       </div>

//       <div className="section">
//         <h2>Declined Events</h2>
//         <div className="venue-cards">{renderEvents(declinedEvents)}</div>
//       </div>
//     </div>
//   );
// };

// export default VenueControl;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VenueControl.css";
import toast from "react-hot-toast";

const VenueControl = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [approvedEvents, setApprovedEvents] = useState([]);
  const [declinedEvents, setDeclinedEvents] = useState([]);
  const [pendingEvents, setPendingEvents] = useState([]);
  const [error, setError] = useState(null);

  // Fetch token from localStorage
  // const getToken = () => localStorage.getItem("token");

  // Handle approval of an event
  const handleApprove = async (id) => {
    try {
      const token =  await localStorage.getItem("token");
      const link = `http://localhost:8080/api/admin/approve-event/${id}`;
      const res = await axios.put(link, {}, {
        headers: {
          "Content-Type" : "application/json",
          'Authorization' : `Bearer ${token}`
        }
      });
      console.log("Event approved with data", res.data);
      toast.success("Event approved successfully.");
    } catch (error) {
      console.error("Error approving the event:", error);
      setError("Failed to approve the event. Please try again.");
    }
  };

  // Handle rejection of an event
  const handleReject = async (id) => {
    try {
      const token =  localStorage.getItem("token");
      await axios.put(
        `http://localhost:8080/api/admin/decline-event/${id}`,{},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Event rejected successfully.");
      // Move the event to declined state
      setPendingEvents((prev) =>
        prev.filter((event) => event.eventId !== id)
      );
      setDeclinedEvents((prev) => [
        ...prev,
        { ...pendingEvents.find((event) => event.eventId === id), approvalStatus: "DECLINED" },
      ]);
    } catch (error) {
      console.error("Error rejecting the event:", error);
      setError("Failed to reject the event. Please try again.");
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        const allEventsResponse = await axios.get("http://localhost:8080/api/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        });

        setAllEvents(allEventsResponse.data);

        // Fetch approved events
        const approvedResponse = await axios.get(
          "http://localhost:8080/api/admin/approved-events",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setApprovedEvents(approvedResponse.data);

        // Fetch declined events
        const declinedResponse = await axios.get(
          "http://localhost:8080/api/admin/declined-events",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDeclinedEvents(declinedResponse.data);

        // Fetch pending events
        const pendingResponse = await axios.get(
          "http://localhost:8080/api/admin/pending-events",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPendingEvents(pendingResponse.data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to fetch events. Please try again later.");
      }
    };

    fetchEvents();
  }, []);

  const renderEvents = (events, allowActions = false) =>
    events.length > 0 ? (
      events.map((event) => (
        <div className="venue-card" key={event.eventId}>
          <h2>{event.clubName}</h2>
          <p>
            <strong>Event Date:</strong> {event.eventDate}
          </p>
          <p>
            <strong>Venue:</strong> {event.venueName}
          </p>
          <p>
            <strong>Description:</strong> {event.description}
          </p>
          <div className="actions">
            {allowActions && event.approvalStatus === "PENDING" ? (
              <>
                <button
                  className="approve-btn"
                  onClick={() => handleApprove(event.eventId)}
                >
                  Approve
                </button>
                <button
                  className="reject-btn"
                  onClick={() => handleReject(event.eventId)}
                >
                  Reject
                </button>
              </>
            ) : (
              <p className={`status ${event.approvalStatus}`}>
                {event.approvalStatus}
              </p>
            )}
          </div>
        </div>
      ))
    ) : (
      <p>No events available.</p>
    );

  return (
    <div className="venue-control-container">
      <h1>Venue Control</h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      <div className="section">
        <h2>All Events</h2>
        <div className="venue-cards">{renderEvents(allEvents)}</div>
      </div>

      <div className="section">
        <h2>Approved Events</h2>
        <div className="venue-cards">{renderEvents(approvedEvents)}</div>
      </div>

      <div className="section">
        <h2>Pending Events</h2>
        <div className="venue-cards">{renderEvents(pendingEvents, true)}</div>
      </div>

      <div className="section">
        <h2>Declined Events</h2>
        <div className="venue-cards">{renderEvents(declinedEvents)}</div>
      </div>
    </div>
  );
};

export default VenueControl;

