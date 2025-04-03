import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import "./Explore.css";

const port = import.meta.env.VITE_PORT;

export default function Explore() {
  const [posts, setPosts] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:${port}/posts`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post._id !== id));
  };

  const handleUpdate = (id, updatedPost) => {
    setPosts(posts.map((post) => (post._id === id ? { ...post, ...updatedPost } : post)));
  };

  return (
    <div className="explore-page">
      <h1>Explore All Ideas</h1>
      <div className="post-list">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card
              key={post._id}
              id={post._id}
              question={post.question}
              answer={post.answer}
              category={post.category}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  );
}