//jshint esversion: 6
import express from 'express';
import User from './model/userModel.js'

const router = express.Router();


router.get('/', (req, res)=>{
    res.send("Hello World")
})

router.post('/signup', (req,res)=>{
    const {firstname, lastname, email, username, password} = req.body;
    // console.log(req.body)ß
    console.log(firstname)

    res.send({
        message: "success"
    })
})

router.post('/login', (req,res)=>{
    const {username, password} = req.body;
    console.log(username)

    res.json({
        message: "hello"
    })
})

export default router;