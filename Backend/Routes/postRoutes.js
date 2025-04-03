const express = require("express");
const router = express.Router();
const Post = require("../Models/schema"); // Import the Post model

// POST /posts - Add a new question, answer, and category
router.post("/", async (req, res) => {
  try {
    const { question, answer, category } = req.body;

    // Validate input
    if (!question || !answer || !category) {
      return res.status(400).json({ error: "Missing required fields", success: false });
    }

    // Create a new post
    const newPost = new Post({ question, answer, category });
    await newPost.save();

    res.status(201).json({ message: "Post created successfully!", post: newPost, success: true });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ error: "Server error", success: false });
  }
});

// GET /posts - Fetch all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find(); // Fetch all posts
    res.status(200).json({ posts, success: true });
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ error: "Server error", success: false });
  }
});

// DELETE /posts/:id - Delete a post by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Post ID is required", success: false });
    }

    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found", success: false });
    }
    res.status(200).json({ message: "Post deleted successfully", success: true });
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).json({ error: "Server error", success: false });
  }
});

// PUT /posts/:id - Update a post by ID
router.put("/:id", async (req, res) => {
  try {
    const { question, answer, category } = req.body;

    // Validate input
    if (!question || !answer || !category) {
      return res.status(400).json({ error: "Missing required fields", success: false });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { question, answer, category },
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found", success: false });
    }

    res.status(200).json({ message: "Post updated successfully", post: updatedPost, success: true });
  } catch (err) {
    console.error("Error updating post:", err);
    res.status(500).json({ error: "Server error", success: false });
  }
});

module.exports = router;