import User from '../model/userModel.js'
import bcrypt from 'bcryptjs';
import token from '../tokenCreate/token.js';
export default function login() {
    return async (req, res) => {
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



    }
}
