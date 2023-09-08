import cookieParser from 'cookie-parser'
import express from 'express'

const app = express()

app.use(cookieParser())

const getRequest = (req, res) => {
    const path = req.url
    const token = req.cookies.token
    console.log("Next console:", path, token)
    const publicPath = path === '/login' || '/signup';
    if (publicPath && token) {
        res.json({
            message: "has token",
            status: 200
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