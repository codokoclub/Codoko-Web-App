import mongoose,{Schema,model} from "mongoose";


const socialHandelSchema = new Schema({


    socialMediaLink:{
        type:String
    }

},{timestamps:true})



export const SocialHandel = mongoose.model("SocialHandle",socialHandelSchema)