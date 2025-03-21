import React from "react";
import "./landing.css";

const Home = () => {
  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">What If...?</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Story Time</a>
          <a href="#">Leaderboard</a>
          <a href="#">Battle Royale</a>
        </nav>
        <div className="user-avatar">
          <img src="avatar.png" alt="User Avatar" />
        </div>
        <button className="login-btn">Login/Signup</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where your wildest 'What If' ideas come to life!</h1>
          <div className="cta-buttons">
            <button className="post-idea-btn">Post Your Idea</button>
            <button className="randomizer-btn">Explore Random Ideas</button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <h2>Trending What If Ideas</h2>
        <div className="post-scroll">
          <div className="post-card">
            <p>What if humans could photosynthesize?</p>
            <div className="vote-buttons">
              <button>👍</button>
              <button>👎</button>
            </div>
          </div>
          {/* Add more posts here */}
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Explore Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <span>👽</span>
            <p>Sci-fi</p>
          </div>
          <div className="category-card">
            <span>😈</span>
            <p>Dark Humor</p>
          </div>
          <div className="category-card">
            <span>🏠</span>
            <p>Everyday Life</p>
          </div>
          <div className="category-card">
            <span>🤔</span>
            <p>Existential Crises</p>
          </div>
          <div className="category-card">
            <span>🐉</span>
            <p>Fantasy</p>
          </div>
          <div className="category-card">
            <span>🤖</span>
            <p>Technology</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <p>About Us | Contact</p>
      </footer>
    </div>
  );
};

export default Home;