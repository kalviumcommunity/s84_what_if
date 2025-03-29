import React, { useState, useEffect } from "react";
import "./landing.css";
import Card from "../Components/Card";
import axios from "axios";

const Home = () => {
  const [post, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "",
  });

  // Fetch posts from the backend
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/posts");
      setPosts(response.data.data); // Assuming the backend returns posts in `data.data`
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to fetch posts");
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/posts", formData);
      setFormData({ question: "", answer: "", category: "" }); // Reset form
      setIsModalOpen(false); // Close modal
      fetchPosts(); // Refresh posts
    } catch (err) {
      console.error("Error adding post:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where your wildest 'What If' ideas come to life!</h1>
          <div className="cta-buttons">
            <button
              className="post-idea-btn"
              onClick={() => setIsModalOpen(true)} // Open modal
            >
              Post Your Idea
            </button>
            <button className="randomizer-btn">Explore Random Ideas</button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <h2>Trending What If Ideas</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="post-scroll">
          {post.slice(0, 3).map((item) => (
            <div className="post-card" key={item._id}>
              <Card question={item.question} answer={item.answer} />
              <div className="vote-buttons">
                <button>👍</button>
                <button>👎</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Post Your Idea</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Question:
                <input
                  type="text"
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Answer:
                <input
                  type="text"
                  name="answer"
                  value={formData.answer}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Category:
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <div className="modal-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;