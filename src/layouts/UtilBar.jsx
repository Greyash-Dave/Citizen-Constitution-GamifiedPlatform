import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './UtilBar.css';

import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';

const UtilBar = () => {
  const [bgClass, setBgClass] = useState('');
  const { pathname } = useLocation(); // Get current path

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgClass('scrolled');
      } else {
        setBgClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top whenever the path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="utilbar-container">
      <div className="topbar">
        <TopBar bgClass={bgClass} />
      </div>
      <div className="sidebar">
        <SideBar />
      </div>
    </div>
  );
};

export default UtilBar;
