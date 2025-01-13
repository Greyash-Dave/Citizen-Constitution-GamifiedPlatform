import React from 'react'
import { Link } from 'react-router-dom'
import "./TopBar.css"

const TopBar = ({ bgClass }) => {
    return (
      <div className={`topbar-container ${bgClass}`}>
      <nav>
        <ul>
          <li><Link to="/"><img src='/home.png' /></Link></li>
          <li><Link to="/messages"><img src='/message.png' /></Link></li>
          <li><Link to="/settings"><img src='/settings.png' /></Link></li>
          <li><Link to="/profile"><img src='/profile.png' /></Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default TopBar