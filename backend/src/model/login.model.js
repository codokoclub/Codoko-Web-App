import mongoose, { Schema } from "mongoose";


const loginSchema = new Schema({


    councilId: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
    ,
    accessToken: {
        type: String
    },
    refreshToken: {
        type: String
    }


}, { timestamps: true })



// pre - hook - database middleware
loginSchema.pre("save", async function (next) {

    if (!this.isModified("password")) return next()

    this.password = await bcrpt.hash(this.password, 20)
    next()
})


loginSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrpt.compare(password, this.password)
}


loginSchema.method.generateAcessToken = function () {

    return jwt.sign({
        _id: this._id,
        councilId:this.councilId,

    },
        process.env.ACCESS_TOKEN_SECRET
        , {

            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        })
}

loginSchema.method.generateRefreshToken = function(){

    return jwt.sign({_id:this._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:process.env.REFRESH_TOKEN_EXPIRY})
}


export const Login = mongoose.model("Login", loginSchema)