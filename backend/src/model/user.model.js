import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema = new Schema({

    councilId: {
        type: String,
        requried: true,
        unique: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
    },
    academicDetails: {
        type: String,
        required: true

    },
    designation: {
        type: String,
        required: true
    },

    contactDetails: [

        {
            //email:
            type: String,
            required: true,
            trim: true
        },
        {
            // phone number 1
            type: String,
            required: true,
            trim: true

        },
        {
            // phone number 2
            type: String,
            trim: true

        }
    ],
    socialHandle: [
        {
            //instagram
            type: String
        },
        {
            //github
            type: String,
            required: true,
            trim: true
        },
        {
            //facebook
            type: String
        },
        {
            //linkedin
            type: String,
            required: true
        },
        {
            //youtube
            type: String,

        },
        {
            //medium
            type: String
        }

    ],

    dateOfJoining: {
        type: String,
        required: true
    },
    displayPic: {
        //image
        type: String
    },
    signature: {
        //image
        type: String,
        required: true
    },
    description: {
        type: String
    }

}, { timestamps: true })




userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.compare(this.password, 10)
    next()
})


userSchema.method.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}


userSchema.method.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
        councilId: this.councilId,
        name: this.name
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    })
}




userSchema.method.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id
    },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        })
}


export const User = Model("userSchema", userSchema)
