import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import UtilBar from './layouts/UtilBar'
import Footer from './layouts/Footer'

// Import or create these components
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Messages from './pages/Messages'
import Dashboard from './pages/Dashboard'
import Leaderboard from './pages/Leaderboard'
import Saved from './pages/Saved'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <UtilBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/saved" element={<Saved />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App