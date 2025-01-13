import React from 'react';
import './Messages.css';

const Messages = () => {
  return (
    <>
      <div className="messages-container">
        <h1>Messages & Notifications</h1>

        <div className="notifications-section">
          <h2>Game Notifications</h2>
          <div className="notification-item">
            <p><strong>Daily Challenge:</strong> Complete the Preamble Quiz today to earn double XP!</p>
            <span className="notification-time">2 hours ago</span>
          </div>
          <div className="notification-item">
            <p><strong>Weekly Progress Update:</strong> You’re 70% through the Fundamental Rights section. Keep going!</p>
            <span className="notification-time">1 day ago</span>
          </div>
          <div className="notification-item">
            <p><strong>New Badge Unlocked:</strong> You’ve earned the “Fundamental Duties Master” badge!</p>
            <span className="notification-time">3 days ago</span>
          </div>
        </div>

        <div className="learning-notifications-section">
          <h2>Learning Notifications</h2>
          <div className="notification-item">
            <p><strong>New Content Available:</strong> Explore the latest section on Directive Principles of State Policy.</p>
            <span className="notification-time">5 hours ago</span>
          </div>
          <div className="notification-item">
            <p><strong>Quiz Reminder:</strong> Don’t forget to take the quiz on Fundamental Rights before it expires!</p>
            <span className="notification-time">12 hours ago</span>
          </div>
        </div>

        <div className="friend-messages-section">
          <h2>Messages from Friends</h2>
          <div className="message-item">
            <p><strong>PlayerOne:</strong> Hey, did you check out the new Snakes & Ladders game? Let’s play together!</p>
            <span className="message-time">30 minutes ago</span>
          </div>
          <div className="message-item">
            <p><strong>PlayerTwo:</strong> Congrats on reaching Level 10! Let’s compare progress on the leaderboard.</p>
            <span className="message-time">3 hours ago</span>
          </div>
          <div className="message-item">
            <p><strong>PlayerThree:</strong> Need help with the Preamble section? I found a great strategy, let me share it with you!</p>
            <span className="message-time">1 day ago</span>
          </div>
        </div>

        <div className="engagement-section">
          <h2>Engagement Notifications</h2>
          <div className="notification-item">
            <p><strong>Study Group Invitation:</strong> You’ve been invited to join the “Constitutional Experts” study group.</p>
            <span className="notification-time">6 hours ago</span>
          </div>
          <div className="notification-item">
            <p><strong>Event Reminder:</strong> Don’t miss tomorrow’s live Q&A session on the Directive Principles.</p>
            <span className="notification-time">8 hours ago</span>
          </div>
        </div>

      </div>
    </>
  );
}

export default Messages;
