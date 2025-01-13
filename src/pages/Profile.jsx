import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-image">
            <img src="Grey-Logo.png" alt="Profile" />
          </div>
          <div className="profile-info">
            <h1>Name: Grey</h1>
            <h2>Email: grey@???.com</h2>
            <p>Level: 5</p>
            <p>Experience Points (XP): 2500</p>
            <p>Streak: 10 Days</p>
          </div>
        </div>

        <div className="profile-achievements">
          <h2>Your Achievements</h2>
          <div className="achievement-item">
            <p>Top Badge: Constitutional Master</p>
          </div>
          <div className="milestones">
            <h3>Recent Milestones:</h3>
            <ul>
              <li>Completed Fundamental Rights Section</li>
              <li>Unlocked Preamble Quiz Badge</li>
              <li>Maintained a 7-day streak</li>
            </ul>
          </div>
        </div>

        <div className="profile-progress">
          <h2>Your Progress</h2>
          <div className="progress-item">
            <p>Preamble Mastery: 80%</p>
            <div className="progress-bar"><span style={{width: '80%'}}></span></div>
          </div>
          <div className="progress-item">
            <p>Fundamental Rights: 60%</p>
            <div className="progress-bar"><span style={{width: '60%'}}></span></div>
          </div>
          <div className="progress-item">
            <p>Directive Principles: 45%</p>
            <div className="progress-bar"><span style={{width: '45%'}}></span></div>
          </div>
          <div className="progress-item">
            <p>Fundamental Duties: 30%</p>
            <div className="progress-bar"><span style={{width: '30%'}}></span></div>
          </div>
        </div>

        <div className="profile-leaderboard">
          <h2>Leaderboard Position</h2>
          <p>Overall Ranking: 12th</p>
          <h3>This Week’s Top Scorers:</h3>
          <ul>
            <li>PlayerOne - 3000 XP</li>
            <li>PlayerTwo - 2800 XP</li>
            <li>PlayerThree - 2500 XP</li>
          </ul>
        </div>

        <div className="profile-challenges">
          <h2>Upcoming Challenges</h2>
          <p>Daily Challenge: Complete today’s quiz to earn extra XP!</p>
          <p>Weekly Goal: Finish the Directive Principles section to unlock a special badge.</p>
        </div>

        <div className="profile-customization">
          <h2>Customize Your Profile</h2>
          <p>Change Avatar: Choose a new avatar to represent you!</p>
          <p>Personal Motto: Add a personal motto to inspire your learning journey!</p>
        </div>

        <div className="profile-engagement">
          <h2>Get Involved</h2>
          <p>Join a Study Group: Connect with others to discuss and explore constitutional topics.</p>
          <p>Share Your Progress: Show off your achievements on social media!</p>
        </div>

        <div className="profile-continue">
          <h2>Ready to Learn More?</h2>
          <p>Continue Your Journey: Dive back into your lessons and unlock new content!</p>
          <p>Explore New Games: Check out the latest additions to our game library.</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
