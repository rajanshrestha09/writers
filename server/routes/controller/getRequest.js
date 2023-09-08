import cookieParser from 'cookie-parser'
import express from 'express'
import { getDataFromToken } from '../../token/tokenback.js'
import User from '../../model/userModel.js'

const app = express()

app.use(cookieParser())

const getRequest = async (req, res) => {
    const path = req.url
    const token = req.cookies.token
    // console.log("Next console:", path, token)
    const publicPath = path === '/login' || '/signup';
    if (publicPath && token) {
        const tokenvalue = getDataFromToken(token)
        // console.log('Token_id: ',tokenvalue.id)
        const username = tokenvalue.username;
        // console.log(username)

       const user = await User.findOne({username})
    //    console.log('From database', user)
        
        res.json({
            message: "has token",
            status: 200,
            user
        })
    }

    if (publicPath && !token) {
        res.json({
            message: "has no token",
            status: 400
        })
    }


}

export default getRequest;