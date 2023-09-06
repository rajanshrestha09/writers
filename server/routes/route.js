//jshint esversion: 6
import express from 'express';
import User from './model/userModel.js'

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Hello World")
})

router.post('/signup', async (req, res) => {
    try {
        const { firstname, lastname, email, username, password } = await req.body;
        console.log("Print Me: ", req.body)
        const user_name = await User.findOne({ username }); // pull username from mongdb cluster
        if (user_name) { // Check if user exists or not
            return res.json({
                error: "User already exist",
                status: 400
            })
        }

        //Create new user
        const newUser = new User(
            {
                firstname,
                lastname,
                email,
                username,
                password
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

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username)


})

export default router;