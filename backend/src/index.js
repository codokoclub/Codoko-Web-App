import { app } from "./app.js";
import dbConnect from "./db/db.js";


dbConnect().then(()=>{
    app.listen(process.env.PORT || 3500,(req,res,next)=>{
        console.log(`Server is running at http://localhost:${process.env.PORT}`)
    })
    app.get('/',(req,res,next)=>{
    res.send('You are at HomePage')
    })
}).catch((err)=>{
    console.log(`Couldn't connect to Database..`)
})