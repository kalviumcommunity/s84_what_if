import React from 'react';
import './Card.css';

export default function Card({ question, answer, category }) {
  return (
    <div className="card">
      <p className="card-question"><strong>{question}</strong></p>
      <p className="card-answer">{answer}</p>
      <p className="card-category">{category}</p>
    </div>
  );
}