const express = require('express')
const {User , History} = require('../models')
const mongoose = require('mongoose')

const router = express.Router();
router.post('/points/claim',async (req,res)=>{
    try{
        const {userId} = req.body;
        
        const assignPoints = Math.floor(Math.random()*10)+1 ;

        const user = await User.findById(userId);
        

        if(!user){
            return res.status(404).json({success:false , message:"user not found"})
        }

        user.totalPoints += assignPoints ;
        await user.save();

        const newHistory = {userName:user.name , points:assignPoints}

        const history = new History(newHistory)
        
        await history.save();
        res.status(200).json({message:"points is assigned"})
    }catch(err){
        res.status(404).json({message : err.message})
    }
})

router.get('/history',(req,res)=>{
    console.log("inise");
    
    History.find()
    .then((history)=>{
        res.status(200).json(history)
        
    }).catch((err)=>[
        res.status(404).json("history not found")
    ])
})

module.exports = router