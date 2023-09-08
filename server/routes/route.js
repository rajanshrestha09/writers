//jshint esversion:6
import express from 'express';
import signupPost from './controller/signuppost.js';
import getRequest from './controller/getRequest.js';
import login from './controller/login.js';
const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World")
})

router.get('/login', getRequest)
router.get('/signup', getRequest)
router.post('/signup', signupPost)
router.post('/login', login)
router.get('/profile',getRequest)


export default router;