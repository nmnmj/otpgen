import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import web from './routes/web.js'
const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/", (req,res)=>{
    res.send("hi")
})
const port = process.env.PORT || 3000


app.listen(port, ()=>{
    console.log("running")
})