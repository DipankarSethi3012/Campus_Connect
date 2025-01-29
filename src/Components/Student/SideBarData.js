import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import * as SlIcons from "react-icons/sl";
import { IoIosLogOut } from "react-icons/io";

export const SideBarData = [
    {
        title : "Home",
        path :'/api/student',
        icon: <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },

    {
        title : "Clubs",
        path :'/api/student/get-clubs',
        icon: <LuIcons.LuCode/>,
        cName : 'nav-text'
    },

    // {
    //     title : "Non Tech club",
    //     path :'/api/nontechclub',
    //     icon: <FaIcons.FaHandshake/>,
    //     cName : 'nav-text'
    // },

    {
        title : "Event Calender",
        path :'/api/student/dashboard',
        icon: <SlIcons.SlCalender/>,
        cName : 'nav-text'
    },
    {
        title : "Notice Board",
        path: '/api/student/get-notice',
        icon : <LuIcons.LuNewspaper/>,
        cName : 'nav-text'
    },

    {
        title : "User Profile",
        path :'/api/student/profile',
        icon: <IoIcons.IoMdPerson/>,
        cName : 'nav-text'
    },
    // {
    //     title: "Log Out",
    //     path :'/api/student/profile',
    //     icon: <IoIosLogOut/>,
    //     cName : 'nav-text'
    // }

]