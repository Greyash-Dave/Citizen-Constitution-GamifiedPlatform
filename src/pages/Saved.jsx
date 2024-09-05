import React from 'react';
import './Saved.css';

const Saved = () => {
  return (
    <>
      <div className="saved-container">
        <h1>Saved Items</h1>

        {/* Saved Overview */}
        <div className="saved-overview">
          <p>Quickly access your favorite games, documents, videos, and lectures.</p>
          <p>Your saved items are organized for easy retrieval, helping you continue learning without missing a beat.</p>
        </div>

        {/* Saved Games */}
        <div className="saved-section">
          <h2>Saved Games</h2>
          <ul>
            <li>
              <div className="saved-item">
                <span className="saved-title">Constitutional Rights Quiz</span>
                <span className="saved-details">Last Played: 2 days ago</span>
                <button className="resume-btn">Resume</button>
              </div>
            </li>
            <li>
              <div className="saved-item">
                <span className="saved-title">Preamble Spin-the-Wheel</span>
                <span className="saved-details">Last Played: 1 week ago</span>
                <button className="resume-btn">Resume</button>
              </div>
            </li>
          </ul>
        </div>

        {/* Saved Documents */}
        <div className="saved-section">
          <h2>Saved Documents</h2>
          <ul>
            <li>
              <div className="saved-item">
                <span className="saved-title">Fundamental Rights Summary</span>
                <span className="saved-details">Saved on: Aug 25, 2024</span>
                <button className="open-btn">Open</button>
              </div>
            </li>
            <li>
              <div className="saved-item">
                <span className="saved-title">Directive Principles Overview</span>
                <span className="saved-details">Saved on: Aug 18, 2024</span>
                <button className="open-btn">Open</button>
              </div>
            </li>
          </ul>
        </div>

        {/* Saved Videos */}
        <div className="saved-section">
          <h2>Saved Videos</h2>
          <ul>
            <li>
              <div className="saved-item">
                <span className="saved-title">Understanding the Constitution - Part 1</span>
                <span className="saved-details">Duration: 15 mins | Saved on: Aug 22, 2024</span>
                <button className="watch-btn">Watch</button>
              </div>
            </li>
            <li>
              <div className="saved-item">
                <span className="saved-title">Rights and Duties Explained</span>
                <span className="saved-details">Duration: 10 mins | Saved on: Aug 14, 2024</span>
                <button className="watch-btn">Watch</button>
              </div>
            </li>
          </ul>
        </div>

        {/* Saved Lectures */}
        <div className="saved-section">
          <h2>Saved Lectures</h2>
          <ul>
            <li>
              <div className="saved-item">
                <span className="saved-title">Lecture on Fundamental Rights</span>
                <span className="saved-details">Duration: 30 mins | Saved on: Aug 29, 2024</span>
                <button className="watch-btn">Watch</button>
              </div>
            </li>
            <li>
              <div className="saved-item">
                <span className="saved-title">Preamble and Its Significance</span>
                <span className="saved-details">Duration: 20 mins | Saved on: Aug 10, 2024</span>
                <button className="watch-btn">Watch</button>
              </div>
            </li>
          </ul>
        </div>

        {/* Quick Access */}
        <div className="quick-access">
          <h2>Quick Access</h2>
          <p>Access your most recently saved items instantly:</p>
          <div className="btn-cont">
            <button className="quick-access-btn">Open Last Saved Game</button>
            <button className="quick-access-btn">Open Last Saved Document</button>
            <button className="quick-access-btn">Watch Last Saved Video</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Saved;
