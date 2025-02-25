const express = require('express')
const router = express.Router()
router.use(express.json())

const User = require('../Models/schema');

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

router.put('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const {username, animalIdentity, password, joinDate,postCount,reputation } = req.body;
        const updateuser = await User.findByIdAndUpdate(id ,{username, animalIdentity, password, joinDate, postCount, reputation},{new : true});
        res.status(200).json({ msg : "Data updated successfully", success : true, user: updateuser});
    }
    catch(err){
        res.status(500).json({ error: 'Server error', success: false });
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const id = req.params.id;
        const data= await User.findByIdAndDelete(id);
        res.status(200).json({ msg : "Data deleted", success : true});
    }
    catch(err){
        res.status(500).json({ error: 'Server error', success: false });
    }
})

module.exports = router