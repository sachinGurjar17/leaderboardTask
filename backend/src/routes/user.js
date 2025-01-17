const express = require('express')
const { User } = require('../models');

const router = express.Router();

router.post('/users',  (req,res)=>{
    const newUser = req.body
    
    const user = new User(newUser)
    user.save()
    .then((savedUser)=>{
        res.status(201).json(savedUser)
    })
    .catch((error)=>{
        res.status(500).json(error)
    })
})
  

router.get('/users',(req,res)=>{
    User.find()
    .then((users)=>{
        res.status(200).json(users)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
})

module.exports = router