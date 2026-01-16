import mongoose from "mongoose"
import { Schema, Model } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const loginSchema = new Schema({

   
    refreshToken: {
        type: String
    }

}, { timestamps: true })



/* Hashing the password and saving it on db only if it's modified
*/

loginSchema.pre("save", async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 20)
    next()
})


// *Custom Method to Compare Password - Entered password and already existing password in DB
loginSchema.methods.comparePassword = async function (inputPassword) {

    return await bcrypt.compare(inputPassword, this.password)

}

loginSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        councilId: this.councilId
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        })
}


loginSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id

    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        })
}

const loginUser = mongoose.model("login", loginSchema)

export { loginUser }