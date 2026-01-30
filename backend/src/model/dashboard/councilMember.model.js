import mongoose,{Schema,Model} from "mongoose";


const councilMemberSchema = new Schema({

    memberImage:{
        type:String,
        trim:true
    },
    memberName:{
        type:String,
        trim:true,
        required:true,
    },
    memberDesignation:{
        type:String,
        trim:true,
        required:true,
    },
    memberAcademicDetails:{
        type:String,
        trim:true,
        required:true
    }

},{timestamps:true})


export const CouncilMember = mongoose.model("CouncilMember",councilMemberSchema);