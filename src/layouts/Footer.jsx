import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex-container">
        <img className='grey-img' src='/Grey-Logo.png' />
          <div>
            <h2 className="title">© 2024 Grey</h2>
          </div>
          <div className="flex-row">
            <div className="link-container">
              <a href="/privacy" className="link">Privacy Policy</a>
              <a href="/terms" className="link">Terms & Conditions</a>
              <a href="/contact" className="link">Contact Us</a>
            </div>
          </div>
          <div className="flex-row margin-top">
            <div className="social-container">
              <a href="https://facebook.com" className="social-icon"><Facebook size={24} /></a>
              <a href="https://twitter.com" className="social-icon"><Twitter size={24} /></a>
              <a href="https://instagram.com" className="social-icon"><Instagram size={24} /></a>
              <a href="https://linkedin.com" className="social-icon"><Linkedin size={24} /></a>
            </div>
            {/* <div className="contact-info">
              <p>Email: greyashdave@gmail.com</p>
              <p>Phone: +91-XXXX-XXXX</p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;