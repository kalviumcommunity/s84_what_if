import React, { useEffect, useState } from "react";
import Card from "../component/Card"; // Import the Card component
import "./Explore.css"; // Optional: Add specific styles for the Explore page

export default function Explore() {
  const [posts, setPosts] = useState([]); // State to store posts

  // Fetch data from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts"); // Replace with your backend URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.posts); // Update the state with fetched posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="explore-page">
      <h1>Explore All Ideas</h1>
      <div className="post-list">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Card
              key={index}
              question={post.question}
              answer={post.answer}
              category={post.category}
            />
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  );
}