import mongoose from "mongoose";
import { Schema, Model } from "mongoose";
import { loginUser } from "./login.model.js";
import bcrypt from "bcrypt"


const memberInfoSchema = new Schema({

    profilePic: {
        type: String
    },
    councilId: {
        type: String,
        required: true,
        index: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    emailId: [{
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"]

    }],
    contactNo: [
        {
            type: String,
            required: true,
            unique: true,
            match: [/^(?:\+91[-\s]?|0)?[6-9]\d{9}$/, "Please enter a valid Indian phone number"],
        }
    ],
    designation: {
        type: String,
        enum: ["Founder", "Chairman", "Vice Chairman", "Club Coordinator", "Developer", "Instructor", "Faculty Incharge", "Faculty Coordinator"],
        required: true
    },
    academicDetail: {
        type: String,
        required: true,
        trim: true

    },
    description: {
        type: String
    },
    socialHandles: [
        {
            platform: {
                type: String,
                required: true,
                trim: true
            },
            platformId: {
                type: String,
                required: true
            }
        }
    ],



}, { timestamps: true })



/* Hashing the password and saving it on db only if it's modified
*/

memberInfoSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 20)
    next()
})


// *Custom Method to Compare Password - Entered password and already existing password in DB
memberInfoSchema.methods.comparePassword = async function (inputPassword) {

    return await bcrypt.compare(inputPassword, this.password)

}

memberInfoSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        councilId: this.councilId
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        })
}


memberInfoSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id

    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        })
}


const memberInfo = mongoose.model("memberInfo", memberInfoSchema);

export { memberInfo }