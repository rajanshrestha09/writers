//jshint esversion: 6
import express from 'express'
import 'dotenv/config'
import routes from "./routes/route.js"
import cors from 'cors'
import bodyParser from 'body-parser'
import {connect} from './routes/database/dbconfig.js'


const app = express();

connect();

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

// Route to route.js
app.use("/", routes);
app.use('/signup', routes)
app.use('/login', routes)


app.listen(process.env.PORT, ()=>{
    console.log(`Server started at port number ${process.env.PORT}`)
})