import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import * as SlIcons from "react-icons/sl";


export const SideBarData = [
    // {
    //     title : "Home",
    //     path :'/api/admin',
    //     icon: <AiIcons.AiFillHome/>,
    //     cName : 'nav-text'
    // },

    // {
    //     title : "Event Management",
    //     path :'/eventmanagement',
    //     icon: <SlIcons.SlBadge/>,
    //     cName : 'nav-text'
    // },

    {
        title : "Home",
        path:'/api/admin/dashboard',
        icon: <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },

    {
        title : "Clubs Overview",
        path:'/api/admin/addclub',
        icon: <SlIcons.SlPeople/>,
        cName : 'nav-text'
    },

    // {
    //     title: "Notice Management",
    //     path: '/api/admin/noticemanagement',
    //     icon: <SlIcons.SlBell/>,
    //     cName: 'nav-text'
    // },

    {
        title : "Admin Profile",
        path:'/api/admin/profile',
        icon: <IoIcons.IoMdPerson/>,
        cName : 'nav-text'
    },

    {
        title : "Club Portal",
        path:'/api/club/dashboard',
        icon: <IoIcons.IoMdPeople/>,
        cName : 'nav-text'
    },

    {
        title : "Student Portal",
        path:'/api/student',
        icon: <IoIcons.IoMdPeople/>,
        cName : 'nav-text'
    }

]