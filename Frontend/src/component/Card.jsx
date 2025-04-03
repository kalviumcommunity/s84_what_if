import React, { useState } from 'react';
import './Card.css';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const port = import.meta.env.VITE_PORT;

export default function Card({ 
  question, 
  answer, 
  category, 
  onDelete, 
  onUpdate,
  id 
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState(question);
  const [editedAnswer, setEditedAnswer] = useState(answer);
  const [editedCategory, setEditedCategory] = useState(category);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:${port}/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: editedQuestion,
          answer: editedAnswer,
          category: editedCategory,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      onUpdate(id, data.post);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:${port}/posts/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      onDelete(id);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleCancel = () => {
    setEditedQuestion(question);
    setEditedAnswer(answer);
    setEditedCategory(category);
    setIsEditing(false);
  };

  return (
    <div className="card">
      {!isEditing && (
        <div className="card-actions-top">
          <button 
            onClick={() => setIsEditing(true)} 
            className="card-action-btn"
            aria-label="Edit card"
          >
            <FiEdit className="card-icon" />
            <img src='https://img.icons8.com/ios_filled/512/FFFFFF/edit.png' style={{height : "20px", width : "20px"}}/>
          </button>
          <button 
            onClick={handleDelete} 
            className="card-action-btn"
            aria-label="Delete card"
          >
            <FiTrash2 className="card-icon" />
            <img src='https://img.icons8.com/ios11/600/FFFFFF/filled-trash.png' style={{height : "20px", width : "20px"}}/>
          </button>
        </div>
      )}
      
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedQuestion}
            onChange={(e) => setEditedQuestion(e.target.value)}
            className="card-input"
          />
          <textarea
            value={editedAnswer}
            onChange={(e) => setEditedAnswer(e.target.value)}
            className="card-input"
          />
          <input
            type="text"
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
            className="card-input"
          />
          <div className="card-actions">
            <button onClick={handleUpdate} className="card-btn save-btn">Save</button>
            <button onClick={handleCancel} className="card-btn cancel-btn">Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p className="card-question"><strong>{question}</strong></p>
          <p className="card-answer">{answer}</p>
          <p className="card-category">{category}</p>
        </>
      )}
    </div>
  );
}