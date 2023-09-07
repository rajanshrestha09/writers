import User from '../model/userModel.js'
import bcrypt from 'bcryptjs';

export default function signup() {
    return async (req, res) => {
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

    }
}