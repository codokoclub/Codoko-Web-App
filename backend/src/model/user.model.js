import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema = new Schema({

    councilId: {
        type: String,
        required: true,
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

    contactDetails: {

        "email": {
            //email:
            type: String,
            required: true,
            trim: true
        },
        "primaryPhoneNumber": {
            // phone number 1
            type: String,
            required: true,
            trim: true

        },
        "secondaryPhoneNumber": {
            // phone number 2
            type: String,
            trim: true

        }
    },
    socialHandle: {
        "instagram": {
            //instagram
            type: String
        },
        "github": {
            //github
            type: String,
            required: true,
            trim: true
        },
        "facebook": {
            //facebook
            type: String
        },
        "linkedin": {
            //linkedin
            type: String,
            required: true
        },
        "youtube": {
            //youtube
            type: String,

        },
        "medium": {
            //medium
            type: String
        }

    },

    dateOfJoining: {
        type: String,
        required: true
    },
    profilePic: {
        //image
        type: String
    },
    signaturePic: {
        //image
        type: String,
        required: true
    },
    description: {
        type: String
    },
    refreshToken:{
        type:String
    }

}, { timestamps: true })




userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})


userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare( password,this.password)
}


userSchema.methods.generateAccessToken = function () {

    return jwt.sign(
        {
            _id: this._id,
            councilId: this.councilId,
            name: this.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}




userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("userSchema", userSchema)
