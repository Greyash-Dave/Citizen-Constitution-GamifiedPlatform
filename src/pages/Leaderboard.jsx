import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  return (
    <>
      <div className="leaderboard-container">
        <h1>Leaderboard</h1>

        {/* Leaderboard Overview */}
        <div className="leaderboard-overview">
          <p>Compete with others and climb to the top!</p>
          <p>Rankings are based on total XP earned, achievements unlocked, and streaks maintained.</p>
        </div>

        {/* Top Players */}
        <div className="top-players">
          <h2>Top 5 Players</h2>
          <ol>
            <li>
              <div className="player-info">
                <span className="player-rank">1.</span>
                <span className="player-name">Arya Singh</span>
                <span className="player-xp">XP: 4500</span>
              </div>
            </li>
            <li>
              <div className="player-info">
                <span className="player-rank">2.</span>
                <span className="player-name">Rohan Patel</span>
                <span className="player-xp">XP: 4200</span>
              </div>
            </li>
            <li>
              <div className="player-info">
                <span className="player-rank">3.</span>
                <span className="player-name">Sneha Mehta</span>
                <span className="player-xp">XP: 4100</span>
              </div>
            </li>
            <li>
              <div className="player-info">
                <span className="player-rank">4.</span>
                <span className="player-name">Vikram Rao</span>
                <span className="player-xp">XP: 3900</span>
              </div>
            </li>
            <li>
              <div className="player-info">
                <span className="player-rank">5.</span>
                <span className="player-name">Anjali Desai</span>
                <span className="player-xp">XP: 3800</span>
              </div>
            </li>
          </ol>
        </div>

        {/* User's Rank */}
        <div className="user-rank">
          <h2>Your Current Rank</h2>
          <p>Rank: #10</p>
          <p>XP: 3500</p>
        </div>

        {/* Leaderboard Tiers */}
        <div className="leaderboard-tiers">
          <h2>Leaderboard Tiers</h2>
          <ul>
            <li>Diamond: Rank 1-3</li>
            <li>Platinum: Rank 4-10</li>
            <li>Gold: Rank 11-20</li>
            <li>Silver: Rank 21-50</li>
            <li>Bronze: Rank 51 and below</li>
          </ul>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>Arya Singh earned 100 XP in "Fundamental Rights Quiz"</li>
            <li>Sneha Mehta unlocked the "Constitutional Scholar" badge</li>
            <li>Vikram Rao maintained a 30-day learning streak</li>
          </ul>
        </div>

        {/* Motivation and Tips */}
        <div className="motivation-tips">
          <h2>Climb the Leaderboard</h2>
          <p>Tip: Complete daily challenges and maintain streaks to earn bonus XP and climb the ranks faster.</p>
          <p>Tip: Participate in study groups and workshops for extra XP.</p>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
