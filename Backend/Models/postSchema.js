const {Schema, model} = require('mongoose')

const postSchema = new Schema({
    question:{
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    votes:{
        type: Number,
        default: 0
    }
},{timestamps: true}

)

const postModel = model('Post', postSchema)
module.exports = postModel