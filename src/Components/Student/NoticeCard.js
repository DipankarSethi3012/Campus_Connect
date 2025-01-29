// src/components/NoticeList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import NoticeCard from "./NoticeCard";

const NoticeList = ({key, title, description, date}) => {
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState(null);


  return (
    <div>

    </div>
  );
};

export default NoticeList;

