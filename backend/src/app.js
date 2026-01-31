import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

// app creation
const app = express();




// ENV Variable configured ✅
dotenv.config(({
    path:"/.env"
}))


// cors (CROSS ORIGIN RESOURCE SHARING Setup Done ☑️)
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))



// Taking data from the Form in JSON Format (limit - 20KB)
app.use(express.json({limit:"20KB"}))

// Taking data from the URL (Old Version)
app.use(express.urlencoded({extended:true}))

// Configured to Access Cookies
app.use(cookieParser())



// Defining routes or nodes

import userRouter from "./routes/login.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"


app.use('/auth',userRouter)
app.use('/dashboard',dashboardRouter)

export {app}