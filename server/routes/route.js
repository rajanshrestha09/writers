//jshint esversion: 6
import express from 'express';
import signup from '../controller/signup.js'
import login from '../controller/login.js'

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Hello World")
})

router.post('/signup', signup())
router.post('/login', login())

export default router;