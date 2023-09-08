//jshint esversion:6
import express from 'express';
import signupPost from './controller/signuppost.js';
import getReuest from './controller/getRequest.js';
import login from './controller/login.js';
const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World")
})

router.get('/login', getReuest)
router.get('/signup', getReuest)
router.post('/signup', signupPost)
router.post('/login', login)


export default router;