import React from 'react'
import '../Pages/landing.css'

export default function Navbar() {
  return (
    <div>
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
    </div>
  )
}
