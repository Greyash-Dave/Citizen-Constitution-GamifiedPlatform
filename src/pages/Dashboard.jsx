import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <h1>Dashboard</h1>

        {/* Quick Access Widgets */}
        <div className="quick-access">
          <div className="widget">
            <h2>Continue Learning</h2>
            <p>Continue where you left off.</p>
            <button>Resume Last Module</button>
          </div>
          <div className="widget">
            <h2>Daily Challenge</h2>
            <p>Earn double XP today!</p>
            <button>Start Challenge</button>
          </div>
          <div className="widget">
            <h2>Leaderboard</h2>
            <p>Your Rank: #5</p>
            <button>View Full Leaderboard</button>
          </div>
        </div>

        {/* Learning Progress Overview */}
        <div className="learning-progress">
          <h2>Your Learning Progress</h2>
          <div className="module-progress">
            <h3>Preamble</h3>
            <progress value="70" max="100"></progress>
            <p>70% Completed</p>
          </div>
          <div className="module-progress">
            <h3>Fundamental Rights</h3>
            <progress value="45" max="100"></progress>
            <p>45% Completed</p>
          </div>
          <div className="module-progress">
            <h3>Directive Principles</h3>
            <progress value="85" max="100"></progress>
            <p>85% Completed</p>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="achievements">
          <h2>Recent Achievements</h2>
          <ul>
            <li>Unlocked "Constitutional Scholar" Badge</li>
            <li>Completed "Fundamental Rights Quiz" - Earned 50 XP</li>
            <li>Reached Level 10 - Unlocked New Content</li>
          </ul>
        </div>

        {/* Upcoming Events */}
        <div className="upcoming-events">
          <h2>Upcoming Events</h2>
          <div className="event-item">
            <h3>Live Q&A Session</h3>
            <p>Date: Sept 10 | Time: 5 PM</p>
            <button>Register Now</button>
          </div>
          <div className="event-item">
            <h3>Interactive Workshop on Directive Principles</h3>
            <p>Date: Sept 12 | Time: 3 PM</p>
            <button>Join Workshop</button>
          </div>
        </div>

        {/* Study Groups Overview */}
        <div className="study-groups">
          <h2>Your Study Groups</h2>
          <div className="group-item">
            <h3>Constitution Enthusiasts</h3>
            <p>Next Session: "Preamble Deep Dive" on Thursday</p>
            <button>Join Group</button>
          </div>
          <div className="group-item">
            <h3>Legal Minds</h3>
            <p>Recently Discussed: "Fundamental Duties Overview"</p>
            <button>View Details</button>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="learning-goals">
          <h2>Your Learning Goals</h2>
          <ul>
            <li>Complete "Fundamental Rights" module by end of the week</li>
            <li>Earn 500 XP this month</li>
            <li>Participate in 3 study group sessions</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
