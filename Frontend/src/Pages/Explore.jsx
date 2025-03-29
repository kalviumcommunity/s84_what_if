import React, { useState, useEffect } from "react";
import axios from "axios";
import "./explore.css";

const QuestionCard = ({ post }) => (
  <div className="question-card">
    <h3>{post.question}</h3>
    <p>{post.answer}</p>
    <p><strong>Category:</strong> {post.category}</p>
  </div>
);

export default function Explore() {
  const [post, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:9080/posts");
      setPosts(response.data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="explore">
      <h2>Explore All Ideas</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="container">
        {post.map((ele) => (
          <QuestionCard key={ele._id} post={ele} />
        ))}
      </div>
    </div>
  );
}