import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./landing.css";
import Card from "../component/Card";
import Modal from "../component/Modal";


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const port = import.meta.env.VITE_PORT;

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:${port}/posts`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleModalSubmit = () => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:${port}/posts`);
        const data = await response.json();
        setPosts(data.posts);

        
        setSuccessMessage("Post added successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where your wildest 'What If' ideas come to life!</h1>
          <div className="cta-buttons">
            <button
              className="post-idea-btn"
              onClick={() => setIsModalOpen(true)}
            >
              Post Your Idea
            </button>
            <button
              className="randomizer-btn"
              onClick={() => navigate("/explore")}
            >
              Explore Random Ideas
            </button>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />

      {/* Featured Posts */}
      <section className="featured-posts">
        <h2>Trending What If Ideas</h2>
        <div className="post-scroll">
          {posts.length > 0 ? (
            posts.slice(0, 3).map((post, index) => (
              <Card key={index} question={post.question} answer={post.answer} />
            ))
          ) : (
            <p>Loading posts...</p>
          )}
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