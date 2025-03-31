import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{color: 'white', fontStyle: 'Arial', fontWeight: 'bold', fontSize: '1.5 rem'}}>What If...?</Link> {/* Link to Home */}
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/categories" className="nav-link">Categories</Link>
        <Link to="/story-time" className="nav-link">Story Time</Link>
        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        <Link to="/battle-royale" className="nav-link">Battle Royale</Link>
      </nav>
      <div className="user-avatar">
        <img src="avatar.png" alt="User Avatar" />
      </div>
      <button className="login-btn">Login/Signup</button>
    </header>
  );
};