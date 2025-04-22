import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Everything You Need to Succeed</h1>
        <p className="hero-subtitle">
          Comprehensive tools and guidelines to help you achieve your fitness goals
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <h3>Smart Workouts</h3>
          <p>Personalized training plans that adapt to your progress and schedule</p>
        </div>
        <div className="feature-card">
          <h3>Nutrition Tracking</h3>
          <p>Custom meal plans and macro tracking to fuel your transformation</p>
        </div>
        <div className="feature-card">
          <h3>Progress Tracking</h3>
          <p>Visual progress tracking and analytics to keep you motivated</p>
        </div>
      </section>

      {/* Tomorrow's Plan Section */}
      <section className="plan-section">
        <h2>Tomorrow's Plan</h2>
        <div className="plan-cards">
          <div className="plan-card">
            <h3>Cheat Day</h3>
            <p>48 minutes + 4 exercises</p>
          </div>
          <div className="plan-card">
            <h3>Nutrition Target</h3>
            <p>50g protein + 2400 calories</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Real Results, Real Stories</h2>
        <div className="testimonials">
          <div className="testimonial">
            <h4>Janwu Wilson</h4>
            <p className="result">Lost 50lbs in 6 months</p>
            <p className="quote">
              "The personalized workout plans and nutrition tracking made all the difference. I've never felt better!"
            </p>
          </div>
          <div className="testimonial">
            <h4>Sarah Chen</h4>
            <p className="result">Gained 15lbs muscle mass</p>
            <p className="quote">
              "The progress tracking features keep me motivated, and the community support is amazing!"
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform?</h2>
        <p>Join thousands of others who have already started their fitness journey with us.</p>
        <button className="cta-button">Start Free Trial</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li>Workouts</li>
              <li>Nutrition</li>
              <li>Progress Tracking</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Mind Body & Fuel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;