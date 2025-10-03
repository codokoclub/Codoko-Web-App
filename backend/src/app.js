import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"



// app creation
const app = express();

// cors (CROSS ORIGIN RESOURCE SHARING Setup Done ☑️)
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


// ENV Variable configured ✅
dotenv.config(({
    path:"/.env"
}))


// Taking data from the Form in JSON Format (limit - 20KB)
app.use(express.json({limit:"20KB"}))

// Taking data from the URL (Old Version)
app.use(express.urlencoded({extended:true}))

// Configured to Access Cookies
app.use(cookieParser())



export {app}