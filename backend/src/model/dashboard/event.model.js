import mongoose, { Schema } from "mongoose"


const eventSchema = new Schema({



    primaryEventImage: {
        type: String,
        trim: true
    },
    primaryEventTitle: {
        type: String,
        required: true,
        trim: true
    },
    primaryEventDetails: {
        type: String,
        required: true,
        trim: true
    },
    primaryEventDate: {
        type: String,
        required: true,
        trim: true
    },
    primaryEventJoiningLink: {
        type: String,
        required: true,
        trim: true
    },


    // ! Secondary Event

    secondaryEventImage: {
        type: String,
        trim: true
    },
    secondaryEventTitle: {
        type: String,
        trim: true
    },
    secondaryEventDetails: {
        type: String,
        trim: true
    },
    secondaryEventDate: {
        type: String,
        trim: true
    },
    secondaryEventJoiningLink: {
        type: String,
        trim: true
    },

}, { timestamps: true })


export const Event = mongoose.model("Event", eventSchema)