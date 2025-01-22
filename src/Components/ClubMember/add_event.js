import React, { useState } from "react";
import axios from "axios";
import './add_event.css';
import toast from "react-hot-toast";

const ClubEventForm = () => {
    const [formData, setFormData] = useState({
        clubName: "",
        eventName: "",
        eventType: "",
        eventDate: "",
        description: "",
        venueName: "",
        approvalStatus: "PENDING", // Default status
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                "http://localhost:8080/api/club/post-event", 
                formData, 
                {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 201 || response.status === 200) {
                setSuccessMessage("Event created successfully!");
                toast.success("Event applied successfully.");
                setFormData({
                    clubName: "",
                    eventName: "",
                    eventType: "",
                    eventDate: "",
                    description: "",
                    venueName: "",
                    approvalStatus: "PENDING",
                });
            } else {
                setErrorMessage("Failed to create the event. Please try again.");
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <h2>Create Club Event</h2>
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Club Name:</label>
                    <input
                        type="text"
                        name="clubName"
                        value={formData.clubName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Event Name:</label>
                    <input
                        type="text"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Event Category:</label>
                    <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="Technical">Technical</option>
                        <option value="Non-Technical">Non-Technical</option>
                        <option value="Fun">Fun</option>
                    </select>
                </div>
                <div>
                    <label>Event Date:</label>
                    <input
                        type="datetime-local"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Venue Name:</label>
                    <select
                        name="venueName"
                        value={formData.venueName}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a venue</option>
        <option value="Carnegie Hall, Rockfellar Block">Carnegie Hall, Rockfellar Block</option>
        <option value="Sun Hall, Turing Block">Sun Hall, Turing Block</option>
        <option value="Pierre Hall, Le Corbusier Block">Pierre Hall, Le Corbusier Block</option>
        <option value="Einstein Hall, Galileo Block">Einstein Hall, Galileo Block</option>
        <option value="Explore Star Hall, Explore Star">Explore Star Hall, Explore Star</option>
        <option value="Faraday Hall, Edison Block">Faraday Hall, Edison Block</option>
        <option value="MOOC Hall, Edison Block">MOOC Hall, Edison Block</option>
        <option value="Auditorium, Exploretorium">Auditorium, Exploretorium</option>
        <option value="Warren Buffett Hall, Flamingo">Warren Buffett Hall, Flamingo</option>
        <option value="Pulitzer Hall, Picasso Block">Pulitzer Hall, Picasso Block</option>
                    </select>
                </div>
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default ClubEventForm;