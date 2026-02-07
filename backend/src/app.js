import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

// app creation
const app = express();


dotenv.config(({
    path:"/.env"
}))


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({limit:"20KB"}))

app.use(express.urlencoded({extended:true}))

app.use(cookieParser())



// Defining routes or nodes

import userRouter from "./routes/login.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"


app.use('/api/v1/auth',userRouter)
app.use('/api/v1/dashboard',dashboardRouter)

export {app}