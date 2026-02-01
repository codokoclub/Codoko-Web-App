
import mongoose, { model, Schema } from "mongoose";


const socialHandleSchema = new Schema(
    {
        clubName: {
            type: String,
            required: true
        },

        instagram: {
            type: String,
            required: true,
        },
        linkedin: {
            type: String,
            required: true,
        },
        youtube: {
            type: String,
            required: true,
        },
        discord: {
            type: String,
            required: true,
        },
        github: {
            type: String,
            required: true,
        }
    }
    , { timestamps: true })


export const socialHandle = model("socialhandles", socialHandleSchema)