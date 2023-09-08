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


app.use("/", routes);
app.use('/signup', routes)
app.use('/login', routes)
app.use('/pofile', routes)




app.listen(process.env.PORT, () => {
    console.log(`Server started at port number ${process.env.PORT}`)
})



