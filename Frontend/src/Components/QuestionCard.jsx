import React from 'react';
import './QuestionCard.css'; // Import the CSS file

export default function QuestionCard({ post }) {
  return (
    <div className="question-card">
      <h3>{post.question}</h3>
      <p>{post.answer}</p>
      <p><strong>Category:</strong> {post.category}</p>
    </div>
  );
}