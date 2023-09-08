//jshint esversion:6
import express from 'express'
import 'dotenv/config'
import routes from "./routes/route.js"
import cors from 'cors'
import bodyParser from 'body-parser'
import { connect } from './database/dbconfig.js'
import cookieParser from 'cookie-parser'

const app = express();

app.use(express.json())
// app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
})
)

connect();//Database connection




// Route to route.js
// app.use((req,res,next)=>{
//     const path = req.url
//     const token = req.cookies.token
//     console.log("Next console:", path, token)
//     const publicPath = '/login' || '/signup';  

//     if(token){
//         console.log('have value') 

//     }else{
//         console.log('have no value') 

//     } 
//     next()
// })

app.get('/login', (req, res) => {
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


})

app.get('/signup', (req, res) => {
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


})
app.use("/", routes);
app.use('/signup', routes)
app.use('/login', routes)




app.listen(process.env.PORT, () => {
    console.log(`Server started at port number ${process.env.PORT}`)
})



