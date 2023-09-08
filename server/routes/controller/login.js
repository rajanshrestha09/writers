import jwt from 'jsonwebtoken';
import User from '../../model/userModel.js'
import bcrypt from 'bcryptjs';

const login = async (req, res) => {
    try {
        const { username, password } = await req.body;
        console.log(username)
        // Check if user already exists
        const user_name = await User.findOne({ username });
        console.log(user_name)
        //////////
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
        console.log('validpassword')
        // token function
        const tokenData = {
            id: user_name.id,
            username: user_name.username,
            email: user_name.email
        }
        console.log(tokenData)
        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
            expiresIn: "1h"
        })
        console.log(token)
        res.header('Content-Type', 'application/json;charset=UTF-8')
        res.header('Access-Control-Allow-Credentials', true)
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        )

        res.cookie('token', token, {
            httpOnly: true
        })
        return res.json({
            message: "success",
            status: 200
        });
    } catch (error) {
        return res.json({
            error: error.message,
            status: 500
        })
    }
}

export default login;