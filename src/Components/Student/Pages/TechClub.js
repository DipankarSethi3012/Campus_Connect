import React, { useState } from "react";
import Card from "../Card";

const TechClub = () => {
  const techClubs = [
    {
      clubName: "Coding Blocks",
      clubHead: "Mahir Oberoi",
      clubInfo: "A club focused on getting students ready for placement drives.",
      pastEvents: "CodeBlitz, Organised HackIndia, Cipher Sprint",
      facultyCoordinators: "Dr. Righa Tandon, Dr. Suhasini",
      photo: "/images/CodingBlocks.jpg"
    },
    {
      clubName: "Coding Ninjas",
      clubHead: "Shruti Bansal",
      clubInfo: "A club focused on getting students to master their Coding Skills",
      pastEvents: "Avinya, Kalyug Chronicles",
      facultyCoordinators: "Dr Mandeep Kaur",
      photo: "/images/CodingNinjas.jpg"
    },
    {
      clubName: "ACM",
      clubHead: "Livarpit Sandhu",
      clubInfo: "Make students ready on an industry level",
      pastEvents: "YIMUN, Code Casual talk",
      facultyCoordinators: "Dr. Susheela Hooda",
      photo: "/images/ACM.jpg"
    },
    {
      clubName: "IEEE",
      clubHead: "Sarthak Sadhotra",
      clubInfo: "Technical Skills enhancement for students",
      pastEvents: "IEEE-PL, The Wall Street",
      facultyCoordinators: "Dr. Durgesh Srivastava",
      photo: "/images/IEEE.jpg"
    },
  ];

  return (
    <div style={{ marginLeft: "250px", padding: "20px", marginTop: "80px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px", // Added gap between cards
        }}
      >
        {techClubs.map((club, index) => (
          <Card key={index} {...club} />
        ))}
      </div>
    </div>
  );
};

export default TechClub;
