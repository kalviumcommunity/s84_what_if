const mongoose = require('mongoose');

// User Schema
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   animalIdentity: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   joinDate: {
//     type: Date,
//     default: Date.now,
//   },
//   postCount: {
//     type: Number,
//     default: 0,
//   },
//   reputation: {
//     type: Number,
//     default: 0,
//   },
// });

// Post Schema (for questions and answers)
const postSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  category:{
    type: String,
    required: true
  }
}, {timestamps: true}
);

// const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

module.exports = Post ; // Export both models