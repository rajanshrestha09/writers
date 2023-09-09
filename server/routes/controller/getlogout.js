import cookieParser from 'cookie-parser'
import express from 'express'
const app = express()

app.use(cookieParser())


const logout = async (req, res) => {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.cookie('token', '', {
        httpOnly: true
    })
    res.json(
        {
            message: 'Hello'
        }
    )
}

export default logout;