import React from 'react';
import './Home.css'; // Ensure to create this CSS file

import DisplayCardSection from '../components/DisplayCardSection';

const Home = () => {
  const datas = [
    {
      title: 'Visual Novel',
      description: 'The protagonist is driven to make descisions, It all depends on your choice',
      detail: 'Experience scenarios which require the knowledge of the Citizen Rights and Duties.',
      image: '/vn-game.png'
    },
    {
      title: 'Quiz',
      description: 'To test your knowledge of the Constitution, we have a quiz section.',
      detail: 'Test of Knowledge',
      image: '/Quiz.png'
    },
    {
      title: 'Board and Card Games',
      description: 'Familiar game mechanics integrated with constitutional themes.',
      detail: 'Test of Knowledge',
      image: '/board-card-games.jpg'
    },
    {
      title: 'Coming Soon',
      description: '?',
      detail: '???',
      image: '/comin-soon.jpg'
    },
    
  ]
  return (
    <>
    <div className="home-container">
      <div className="header-section">
        <img className='grey-img' src='/Grey-Logo.png' />
        <h1>Citizen & Constitution</h1>
        <h2>नागरिक और संविधान</h2>
        <h3>Empower Yourself with the Knowledge of Your Rights</h3>
        <p className="subheadline">
          Discover the Constitution of India through an Engaging and Gamified Experience
        </p>
      </div>

      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Citizen & Constitution is a visionary initiative dedicated to democratizing constitutional literacy through our innovative platform, "Nagrik Aur Samvidhan." We believe that every citizen, from students to adults, should have a clear and engaging understanding of their rights and duties under the Constitution of India. Our gamified approach transforms complex legal jargon into accessible content that resonates with the common man, empowering individuals to participate fully in democratic processes.
        </p>
      </div>

      <div className="games">
        <h2>Games</h2>
        <div className="recomended-section">
            <DisplayCardSection datas={datas} />
        </div>
      </div>

      <div className="features">
        <h2>Features</h2>
        <div className="feature-item">
          <h3>Simplified Constitutional Articles</h3>
          <p>Explore articles through visual and interactive lessons that break down complex terms and concepts into simple, relatable language.</p>
        </div>
        <div className="feature-item">
          <h3>Gamified Quizzes & Challenges</h3>
          <p>Test your knowledge with fun quizzes that reward participants with badges and points, motivating continual engagement.</p>
        </div>
        <div className="feature-item">
          <h3>Inclusive Design</h3>
          <p>Our platform is designed to cater to all educational backgrounds, featuring multiple languages, text-to-speech functionality, and varying levels of complexity to suit each user’s needs.</p>
        </div>
        <div className="feature-item">
          <h3>Community Engagement</h3>
          <p>Join a like-minded community where users can ask questions, share insights, and discuss current issues regarding constitutional rights.</p>
        </div>
      </div>

      <div className="target-audience">
        <h2>Who Can Benefit</h2>
        <ul>
          <li>Students (8th Std and above): Engaging learning that complements their educational curriculum.</li>
          <li>Youth: Empowering the next generation with a strong foundation in their rights and responsibilities.</li>
          <li>Common Citizens: Offering essential knowledge to inform and inspire participation in civic matters.</li>
        </ul>
      </div>

      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          <p>“As a student, I found the platform super engaging! Learning about the Constitution was never this fun!”</p>
          <footer>- AAA</footer>
        </blockquote>
        <blockquote>
          <p>“I was always confused about my rights. This tool opened my eyes and gave me confidence to speak up.”</p>
          <footer>- BBB</footer>
        </blockquote>
        <blockquote>
          <p>“I recommend this to all my students. It’s not just informative, but makes learning an enjoyable affair!”</p>
          <footer>- CCC (Teacher)</footer>
        </blockquote>
        <blockquote>
          <p>“I love the community aspect. Sharing ideas and discussing with others really enhanced my learning experience.”</p>
          <footer>- DDD </footer>
        </blockquote>
      </div>

      <div className="blog">
        <h2>Latest Insights</h2>
        <ul>
          <li>Understanding Your Rights: Explore articles simplifying various articles of the Constitution and their significance in everyday life.</li>
          <li>Engagement Initiatives: Stay updated on our upcoming events and workshops aimed at improving constitutional awareness across communities.</li>
          <li>Feedback Corner: A space where users can share their experience and suggestions for enhancing our platform further.</li>
        </ul>
      </div>

      <div className="cta">
        <h2>Ready to Empower Yourself?</h2>
        <p>Don't let your rights be a mystery. Join us in making constitutional literacy a reality for all. Click below to start your journey!</p>
        <button className="cta-button">Start Learning Today</button>
      </div>
    </div>
    </>
  );
}

export default Home;
