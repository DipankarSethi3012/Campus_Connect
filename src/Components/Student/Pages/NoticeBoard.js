import React, { useState } from "react";
import NoticeCard from "../NoticeCard.js";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Card2 from "../Card2.js";

const NoticeBoard = () => {
  const [selectedNotice, setSelectedNotice] = useState([]);

  const[notice, setNotice] = useState([]);

  const fetchNotice = async (e) =>{
    try{
      const link = `http://localhost:8080/api/student/get-notice`;
      const token = localStorage.getItem('token');
      const res = await axios.get(link, {
        headers: {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        },
      })
      console.log("Response is", res.data);
      setNotice(res.data);
    }
    catch(err){
      console.log("Error", err);
      toast.error("Internal service error");
    }
  }

  useEffect(() => {
    const link = `http://localhost:8080/api/student/get-notice`;
    fetchNotice();
  }, [])

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
  };

  return (
    <div style={{ marginLeft: "250px", padding: "20px", marginTop: "100px" }}>
      <h1>Notice Board</h1>
      <div style={{display: "grid",gap: "6px", gridTemplateColumns: "repeat(3, 1fr)",
  }}>
        {
          notice.map((curr, index) => (
            <Card2 heading={curr.heading} clubName={curr.clubName} description={curr.description}/>
            // <div style={{border: "black solid 4px", borderRadius:"25px", display:"flex", flexDirection:"column"}}>
            //   <h1 style={{fontSize: '20px'}}>{curr.heading}</h1>
            //   <h1 style={{fontSize: '20px'}}>{curr.clubName}</h1>
            //   <p style={{textAlign:"center"}}>{curr.description}</p>

            // </div>
          ))
        }
      </div>
    </div>
  );
};

export default NoticeBoard;
