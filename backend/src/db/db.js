import mongoose from "mongoose";
import { app } from "../app.js";
import DB_NAME from "../constants.js";

const dbConnect = async () => {
    try {
        const connInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`Connected to codokoclubdev Database ✅  `, connInstance.connection.host);
    } catch (err) {
        console.log("ERROR in DB Folder: ", err);
        process.exit(1);
    }
}

export default dbConnect