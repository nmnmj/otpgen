import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import web from './routes/web.js'
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/", web)
const port = process.env.PORT


app.listen(port, ()=>{
    console.log("running")
})