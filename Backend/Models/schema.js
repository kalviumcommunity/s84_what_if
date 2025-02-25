const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  animalIdentity: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  joinDate: {
    type: Date,
    default: Date.now,
  },
  postCount: {
    type: Number,
    default: 0,
  },
  reputation: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
