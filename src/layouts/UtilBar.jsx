import React, { useState, useEffect } from 'react'
import './UtilBar.css'

import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'

const UtilBar = () => {
  const [bgClass, setBgClass] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgClass('scrolled')
      } else {
        setBgClass('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="utilbar-container">
      <div className="topbar">
        <TopBar bgClass={bgClass} />
      </div>
      <div className="sidebar">
        <SideBar />
      </div>
    </div>
  )
}

export default UtilBar
