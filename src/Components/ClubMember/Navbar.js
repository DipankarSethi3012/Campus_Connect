import React from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from './SideBarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            {/* <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}

            {SideBarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
