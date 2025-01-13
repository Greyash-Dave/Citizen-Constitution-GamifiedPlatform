import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`sidebar-container ${isExpanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={toggleSidebar}
      onMouseLeave={toggleSidebar}
    >
      <div className="logo">
        <div className="logo-img">
          <img
            src="https://legislative.gov.in/wp-content/themes/sdo-theme/images/emblem.svg"
            alt="State Emblem of India"
          />
        </div>
        {<h1>Citizen & Constitution</h1>}
      </div>
      <div className="nav-items">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src="/home.png" alt="Home" />
                {<p>Home</p>}
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <img src="/dashboard.png" alt="Dashboard" />
                {<p>Dashboard</p>}
              </Link>
            </li>
            <li>
              <Link to="/leaderboard">
                <img src="/ranking.png" alt="Leaderboard" />
                {<p>Leaderboard</p>}
              </Link>
            </li>
            <li>
              <Link to="/saved">
                <img src="/bookmark.png" alt="Saved" />
                {<p>Saved</p>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
