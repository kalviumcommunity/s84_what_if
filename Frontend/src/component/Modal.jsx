import React, { useState } from "react";
import "./Modal.css";

const port = import.meta.env.VITE_PORT;


const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:${port}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Post added successfully:", data);
        onSubmit();
        setFormData({ question: "", answer: "", category: "" });
        onClose();
      } else {
        console.error("Failed to add post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    setFormData({ question: "", answer: "", category: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="question">Question</label>
            <input
              type="text"
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="answer">Answer</label>
            <textarea
              id="answer"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;