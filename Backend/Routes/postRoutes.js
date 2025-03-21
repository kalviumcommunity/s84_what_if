const express = require('express')
const router = express.Router()
router.use(express.json())

const post = require('../Models/postSchema');

router.get('/', async (req, res)=>{
    try{
        const data= await post.find();
        res.status(200).json({ data });
    }
    catch(err){
        res.status(500).json({ error: 'Server error', success: false });
    }
})

router.post('/', async (req, res)=>{
    try {
        const {question,answer,category,votes} = req.body;
        if (!question || !answer || !category) {
           return res.status(400).json({ error: 'Missing required fields', success: false });
       }
        const newPost = new post({question,answer,category,votes});
        await newPost.save();
        res.status(200).json({ msg : "Post added successfully", success : true, post:newPost})
    } 
    catch(err){
        res.status(500).json({ error: 'Server error', success: false });
    }
})

router.put('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const {question,answer,category,votes} = req.body;
        const updatedPost = await User.findByIdAndUpdate(id ,{question,answer,category,votes},{new : true});
        res.status(200).json({ msg : "Post updated successfully", success : true, user: updatedPost});
    }
    catch(err){
        res.status(500).json({ error: 'Server error', success: false });
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const id = req.params.id;
        const data= await User.findByIdAndDelete(id);
        res.status(200).json({ msg : "Post deleted", success : true});
    }
    catch(err){
        res.status(500).json({ error: 'Server error', success: false });
    }
})

module.exports = router