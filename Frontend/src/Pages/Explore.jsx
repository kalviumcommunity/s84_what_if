import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import "./Explore.css";

const port = import.meta.env.Port;


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