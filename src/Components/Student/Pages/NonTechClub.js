import React from "react";
import Card from "../Card";

const NonTechClub = () => {
  const NonTechClubs = [
    {
      clubName: "C2S2 Nat Samraat",
      clubHead: "Shorya Abrol",
      clubInfo: "Theatre club of Chitkara University",
      pastEvents: "Nukkad Natak, Flash Mob.",
      facultyCoordinators: "Dr. Neelam Verma",
      photo: "/images/NatSamrat.jpg"
    },
    {
      clubName: "C2S2 Panache",
      clubHead: "Samridhi Kohli",
      clubInfo: "Modeling club of Chitkara University",
      pastEvents: "Parivartan, Flash Mob",
      facultyCoordinators: "Dr Neelam Verma",
      photo: "/images/Panache.jpg"
    },
    {
      clubName: "C2S2 Custody",
      clubHead: "Molik Bansal",
      clubInfo: "Western Dance club of Chitkara University",
      pastEvents: "Parivartan, Flash Mob",
      facultyCoordinators: "Dr.Neelam Verma",
      photo: "/images/Custody.jpg"
    },
    {
      clubName: "C2S2 The Bhangra Regiment",
      clubHead: "Bhavleen Singh",
      clubInfo: "Bhangra Dance club of Chitkara University",
      pastEvents: "Parivartan, Flash Mob",
      facultyCoordinators: "Dr. Righa Tandon, Dr Suhasini",
      photo: "/images/TheBhangraRegiment.jpg"
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
        {NonTechClubs.map((club, index) => (
          <Card key={index} {...club} />
        ))}
      </div>
    </div>
  );
};

export default NonTechClub;
