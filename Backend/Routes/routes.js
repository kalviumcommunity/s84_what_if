const express = require('express');
const router = express.Router();
router.use(express.json());

const User = require('../Models/schema');
const Post = require('../Models/postSchema'); 

router.get('/', async (req, res)=>{
    try{
        const data= await User.find();
        res.status(200).json({ data });
    }
    catch(err){
        res.status(500).json({ error: 'Server error', success: false });
    }
})

router.post('/', async (req, res)=>{
    try {
        const {username, animalIdentity, password} = req.body;
        if (!username || !animalIdentity || !password) {
           return res.status(400).json({ error: 'Missing required fields', success: false });
       }
        const newuser = new User({username, animalIdentity, password});
        await newuser.save();
        res.status(200).json({ msg : "Data added successfully", success : true})
    } 
    catch(err){
        res.status(500).json({ error: 'Server error', success: false });
    }
})

router.delete('/posts/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/posts/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ post: updatedPost, message: 'Post updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;