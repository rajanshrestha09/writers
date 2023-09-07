//jshint esversion:6
import express from 'express';
import User from '../model/userModel.js'
import bcrypt from 'bcryptjs';
import token from '../tokenCreate/token.js';

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Hello World")
})

router.post('/signup', async (req, res) => {
    try {
        const { fname, lname, email, username, password } = await req.body;
        console.log("Print Me: ", req.body)
        const user_name = await User.findOne({ username }); // pull username from mongdb cluster
        if (user_name) { // Check if user exists or not
            return res.json({
                error: "User already exist",
                status: 400
            })
        }

        // Hash a password

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hash(password, salt) // Store hash in your password DB.

        //Create new user
        const newUser = new User(
            {
                firstname: fname,
                lastname: lname,
                email: email,
                username: username,
                password: hashPassword
            }
        )

        const savedUser = await newUser.save();
        console.log(savedUser)

        return res.json(
            {
                message: 'User created successfully',
                success: true,
                savedUser
            }
        )

    } catch (error) {
        return res.json(
            {
                error: error.message
            },
            {
                status: 500
            }
        )
    }

})
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username)
        // Check if user already exists
        const user_name = await User.findOne({ username });

        if (!user_name) {
            return res.json({
                error: 'User not exists',
                status: 400
            })
        }
        // Check password
        const validPassword = await bcrypt.compare(password, user_name.password)
        if (!validPassword) {
            return res.json({
                error: 'Invalid Password',
                status: 400
            })
        }
        // Call token function
        token(user_name, res)

    } catch (error) {
        return res.json({
            error: error.message,
            status: 500
        })
    }



})

export default router;