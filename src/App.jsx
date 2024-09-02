import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import UtilBar from './layouts/UtilBar'
import Footer from './layouts/Footer'

// Import or create these components
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <UtilBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App