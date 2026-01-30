import mongoose, { Schema } from "mongoose";

const codingEmperorSchema = new Schema({

emperorImage:{
    type:String,
    trim:true
},

emperorName:{
    type:String,
    trim:true,
    required:true
},

emperorAcademicDetails:{
    type:String,
    trim:true,
    required:true
},

emperorDesc:{
    type:String,
    trim:true,
    required:true
}

},{timestamps:true})


export const codingEmperor = mongoose.model("CodingEmperor",codingEmperorSchema)