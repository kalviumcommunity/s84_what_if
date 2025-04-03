const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    category: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);