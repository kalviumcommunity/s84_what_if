import React, { useState } from 'react';
import './Card.css';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

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

  const handleUpdate = () => {
    onUpdate(id, {
      question: editedQuestion,
      answer: editedAnswer,
      category: editedCategory
    });
    setIsEditing(false);
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
            onClick={() => onDelete(id)} 
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