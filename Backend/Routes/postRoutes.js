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

module.exports = router;